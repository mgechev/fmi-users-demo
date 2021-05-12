import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { UserService } from '../models/user.service';
import { User } from '../models/users';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User|undefined = undefined;

  constructor(private _route: ActivatedRoute, private _router: Router, private _userService: UserService) {}

  ngOnInit(): void {
    this._route.params.pipe(take(1)).subscribe(params => {
      const id = parseInt(params['id']);
      this.user = this._userService.getUserById(id);
    });
  }

  save(name: string, bio: string) {
    if (!this.user) {
      return;
    }
    // this._userService.editUser({
    //   name, bio
    // });
    this.user.name = name;
    this.user.bio = bio;
    this._router.navigateByUrl('');
  }
}
