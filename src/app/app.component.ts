import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user';
import { usersList } from './data/user-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  protected userSelected: IUser = {} as IUser;
  protected showUserDetails: boolean = false;
  protected users: IUser[] = [];

  ngOnInit(): void {
    setTimeout(() => {
      this.users = usersList;
      console.log(this.users);
    }, 3000);
  }

  public onUserSelected(user: IUser): void {
    this.showUserDetails = true;
    this.userSelected = user;
  }
}
