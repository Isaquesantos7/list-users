import { Component } from '@angular/core';
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

  public onUserSelected(user: IUser) {
    console.log(user);
  }
}
