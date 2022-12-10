import { Component } from '@angular/core';
import { UserData } from 'src/Types/UserData';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  users: UserData[];
  user: UserData;
  canView: boolean;
  constructor(private usersService: UsersService) {}
  ngOnInit() {
    this.usersService.currentUsers.subscribe((users) => (this.users = users));
    this.usersService.currentActiveUser.subscribe((user) => (this.user = user));
    this.canView = this.user.accessOrders;
  }
}
