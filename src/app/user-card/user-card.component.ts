import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';
import { UserData, CreateUser } from 'src/Types/UserData';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent {
  constructor(
    public dialog: MatDialog,
    private eventEmitterService: EventEmitterService
  ) {}
  @Input()
  get user(): UserData {
    return this._user;
  }
  set user(user: UserData) {
    this._user = CreateUser(user);
  }
  private _user = {
    email: '',
    username: '',
    accessConfig: false,
    accessShop: false,
    accessOrders: false,
    active: true,
    img: '/assets/user-default.png',
  };

  @Input()
  get index(): number {
    return this._index;
  }
  set index(index: number) {
    this._index = index;
  }
  private _index = null;

  openDialog() {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      width: '700px',
      panelClass: 'marihub-dialog',
      data: {
        user: this._user,
        index: this._index,
      },
    });
  }
  deleteUser() {
    this.eventEmitterService.invokeUserAction.emit({
      data: { user: this._user, index: this._index },
      type: 'delete',
    });
  }
}
