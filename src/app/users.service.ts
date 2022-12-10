import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CreateUser, UserData } from '../Types/UserData';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private usersInitialValue = [
    CreateUser({
      email: 'aelkayal88@gmail.com',
      username: 'Abdulrhman Elkayal',
      accessConfig: true,
      accessShop: true,
      accessOrders: true,
      active: false,
      img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    }),
    CreateUser({
      email: 'alaa.mansour@gmail.com',
      username: 'Alaa Mansour',
      accessConfig: true,
      accessShop: false,
      accessOrders: true,
      active: true,
      // img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    }),
    CreateUser({
      email: 'super_long_email@gmail.com',
      username: 'Super Long Name With Upper Case',
      accessConfig: true,
      accessShop: false,
      accessOrders: true,
      active: true,
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    }),
  ];
  private users = new BehaviorSubject<UserData[]>(
    JSON.parse(localStorage.getItem('users'))
      ? JSON.parse(localStorage.getItem('users'))
      : []
  );

  currentUsers = this.users.asObservable();

  private activeUser = new BehaviorSubject<UserData>(
    !localStorage.getItem('activeUser') ||
    localStorage.getItem('activeUser') != 'null'
      ? JSON.parse(localStorage.getItem('activeUser'))
      : null
  );

  currentActiveUser = this.activeUser.asObservable();

  constructor() {
    this.setInitialUsers();
    this.setInitialActiveUser();
  }

  updateUsers(users: UserData[]) {
    localStorage.setItem('users', JSON.stringify(users));
    let activeUserDeleted = true;
    users.forEach((user) => {
      if (_.isEqual(user, this.currentActiveUser)) activeUserDeleted = false;
    });
    if (activeUserDeleted) this.updateActiveUser(users[0] ? users[0] : null);
    this.users.next(users);
  }

  updateActiveUser(user: UserData) {
    localStorage.setItem('activeUser', JSON.stringify(user));
    this.activeUser.next(user);
  }

  private setInitialActiveUser() {
    // If there is no active user in local storage, set the first user as active
    if (
      !localStorage.getItem('activeUser') ||
      localStorage.getItem('activeUser') === 'null'
    ) {
      const currentActive = this.users[0]
        ? this.users[0]
        : this.usersInitialValue[0];
      console.log(currentActive);

      if (currentActive) {
        localStorage.setItem('activeUser', JSON.stringify(currentActive));
        this.activeUser.next(currentActive);
      }
      return currentActive;
    }
  }

  private setInitialUsers() {
    // If there is no users in local storage, set the initial value
    if (
      !localStorage.getItem('users') ||
      localStorage.getItem('users') === '[]'
    ) {
      localStorage.setItem('users', JSON.stringify(this.usersInitialValue));
      this.users.next(JSON.parse(localStorage.getItem('users')));
    }
    return JSON.parse(localStorage.getItem('users'));
  }
}
