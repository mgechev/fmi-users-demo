import { Injectable } from "@angular/core";
import { User, users } from "./users";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = users;

  getUserById(id: number): User|undefined {
    return this.users.find(user => user.id === id);
  }
}
