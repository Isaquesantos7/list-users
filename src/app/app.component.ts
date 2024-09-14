import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user';
import { usersList } from './data/user-list';
import { IFilterOption } from './interfaces/filterOptions';

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

    this.usersListFiltered = this.filterUsersList(filterOptions, this.usersList);
  }

  public filterUsersList(filterOptions: IFilterOption, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = this.filterUserListByName(filterOptions.name, usersList);
    
    return filteredList;
  }

  public filterUserListByName(name: string, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPED = name === undefined;
    
    if (NAME_NOT_TYPED) {
      return usersList;
    }

    const listFiltered: IUser[] = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));

    return listFiltered;
  }
}
