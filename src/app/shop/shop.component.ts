import { Component } from '@angular/core';
import { UserData } from 'src/Types/UserData';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  users: UserData[];
  user: UserData;
  constructor(private usersService: UsersService) {}
  ngOnInit() {
    this.usersService.currentUsers.subscribe((users) => (this.users = users));
    this.usersService.currentActiveUser.subscribe((user) => (this.user = user));
  }
}
