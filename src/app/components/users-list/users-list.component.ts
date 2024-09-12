import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  @Input({alias: 'usersList', required: true},) usersList!: IUser[];

  protected displayedColumns: string[] = ['nome', 'date', 'status'];
  
  @Output('userSelected') userSelectedEmitt: EventEmitter<IUser> = new EventEmitter<IUser>();

  public onUserSelected(user: IUser) {
    this.userSelectedEmitt.emit(user);
  }
}
