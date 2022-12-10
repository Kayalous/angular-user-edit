import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';
import { UserData, CreateUser } from 'src/Types/UserData';
import { EventEmitterService } from '../event-emitter.service';
@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.css'],
})
export class ListOfUsersComponent {
  constructor(
    public dialog: MatDialog,
    private eventEmitterService: EventEmitterService
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      width: '700px',
      panelClass: 'marihub-dialog',
      // data: {
      //   user: this.users[1],
      //   index: 1,
      // },
    });
  }

  ngOnInit() {
    if (this.eventEmitterService.addSub == undefined) {
      this.eventEmitterService.addSub =
        this.eventEmitterService.invokeUserAction.subscribe((data) => {
          const type = data.type;
          const value = data.data;
          console.log(type, value);
          if (type == 'add') this.addUser(value.user);
          else if (type == 'edit')
            this.editUser(value.user, <number>value.index);
          else if (type == 'delete') this.deleteUser(<number>value.index);
        });
    }
    // initialize users
    this.users.push(
      CreateUser({
        email: 'aelkayal88@gmail.com',
        username: 'Abdulrhman Elkayal',
        accessConfig: true,
        accessShop: true,
        accessOrders: true,
        active: false,
        img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      })
    );

    this.users.push(
      CreateUser({
        email: 'alaa.mansour@gmail.com',
        username: 'Alaa Mansour',
        accessConfig: true,
        accessShop: false,
        accessOrders: true,
        active: true,
        // img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      })
    );

    this.users.push(
      CreateUser({
        email: 'super_long_email@gmail.com',
        username: 'Super Long Name With Upper Case',
        accessConfig: true,
        accessShop: false,
        accessOrders: true,
        active: true,
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      })
    );
  }

  addUser(user: UserData) {
    this.users.push(user);
    this.dialog.closeAll();
  }

  editUser(user: UserData, index: number) {
    if (this.users[index]) this.users[index] = user;
    this.dialog.closeAll();
  }

  deleteUser(index: number) {
    if (this.users[index]) this.users.splice(index, 1);
  }

  users = [];
}
