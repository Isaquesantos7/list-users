import { Component, EventEmitter, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user';
import { usersList } from '../../data/user-list';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  protected userList: IUser[] = usersList;

  protected displayedColumns: string[] = ['nome', 'date', 'status'];
  protected dataSource = this.userList;

  @Output('userSelected') userSelectedEmitt: EventEmitter<IUser> = new EventEmitter<IUser>();

  public onUserSelected(user: IUser) {
    this.userSelectedEmitt.emit(user);
  }
}
