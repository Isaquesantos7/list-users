import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  @Input({alias: 'userData', required: true}) user: IUser = {} as IUser;
}
