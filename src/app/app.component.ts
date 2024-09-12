import { Component } from '@angular/core';
import { IUser } from './interfaces/user/user';
import { usersList } from './data/user-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected user: IUser[] = usersList;
}
