import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user';
import { usersList } from './data/user-list';
import { IFilterOption } from './interfaces/filterOptions';
import { filterUsersList } from '../utils/filters';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  protected userSelected: IUser = {} as IUser;
  protected showUserDetails: boolean = false;
  protected usersList: IUser[] = [];
  protected usersListFiltered: IUser[] = [];

  ngOnInit(): void {
    setTimeout(() => {
      this.usersList = usersList;
      this.usersListFiltered = usersList;
    }, 3000);
  }

  public onUserSelected(user: IUser): void {
    this.showUserDetails = true;
    this.userSelected = user;
  }

  public onFilter(filterOptions: IFilterOption): void {

    this.usersListFiltered = filterUsersList(filterOptions, this.usersList);
  }
}
