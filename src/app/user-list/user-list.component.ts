import { Component } from '@angular/core';
import { UserService } from '../models/user.service';
import { users } from '../models/users';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  constructor(private _users: UserService) {}

  get users() {
    return this._users.users;
  }
}
