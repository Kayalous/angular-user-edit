import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';
import { UserData, CreateUser } from 'src/Types/UserData';
import { EventEmitterService } from '../event-emitter.service';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.css'],
})
export class ListOfUsersComponent {
  constructor(
    public dialog: MatDialog,
    private eventEmitterService: EventEmitterService,
    private usersService: UsersService
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      width: '700px',
      panelClass: 'marihub-dialog',
    });
  }

  ngOnInit() {
    if (this.eventEmitterService.addSub == undefined) {
      this.eventEmitterService.addSub =
        this.eventEmitterService.invokeUserAction.subscribe((data) => {
          const type = data.type;
          const value = data.data;
          if (type == 'add') this.addUser(value.user);
          else if (type == 'edit')
            this.editUser(value.user, <number>value.index);
          else if (type == 'delete') this.deleteUser(<number>value.index);
        });
    }
    this.usersService.currentUsers.subscribe((users) => (this.users = users));
  }

  addUser(user: UserData) {
    this.users.push(user);
    this.dialog.closeAll();
    this.updateUsers();
  }

  editUser(user: UserData, index: number) {
    if (this.users[index]) this.users[index] = user;
    this.dialog.closeAll();
    this.updateUsers();
  }

  deleteUser(index: number) {
    if (this.users[index]) this.users.splice(index, 1);
    this.updateUsers();
  }

  updateUsers() {
    this.usersService.updateUsers(this.users);
  }
  users = [];
}
