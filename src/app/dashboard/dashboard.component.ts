import { Component } from '@angular/core';
import { CreateUser, UserData } from 'src/Types/UserData';
import { UsersService } from '../users.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  users: UserData[];
  user: UserData;
  constructor(private usersService: UsersService) {}
  ngOnInit() {
    this.usersService.currentUsers.subscribe((users) => (this.users = users));
    this.usersService.currentActiveUser.subscribe((user) => (this.user = user));
  }
}
