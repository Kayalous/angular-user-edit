import { Component } from '@angular/core';
import { UserData } from 'src/Types/UserData';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-account-config',
  templateUrl: './account-config.component.html',
  styleUrls: ['./account-config.component.css'],
})
export class AccountConfigComponent {
  users: UserData[];
  user: UserData;
  canView: boolean;
  constructor(private usersService: UsersService) {}
  ngOnInit() {
    this.usersService.currentUsers.subscribe((users) => (this.users = users));
    this.usersService.currentActiveUser.subscribe((user) => (this.user = user));
    this.canView = this.user.accessConfig;
  }
}
