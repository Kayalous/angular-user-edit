import { Component } from '@angular/core';
import { UserData } from 'src/Types/UserData';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  users: UserData[];
  user: UserData;
  constructor(private usersService: UsersService) {}
  ngOnInit() {
    this.usersService.currentUsers.subscribe((users) => (this.users = users));
    this.usersService.currentActiveUser.subscribe((user) => (this.user = user));
  }

  setActiveUser(user: UserData) {
    this.usersService.updateActiveUser(user);
  }
}
