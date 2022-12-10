import { Component, Input, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserData, CreateUser } from 'src/Types/UserData';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css'],
})
export class AddUserDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<AddUserDialogComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UserData
  ) {
    this._user = CreateUser(data ? data['user'] : null);
    this._edit = data ? data['index'] || data['edit'] || data['user'] : false;
    this._index = data ? data['index'] : false;
  }

  @Input()
  get user(): UserData {
    return this._user;
  }

  private _user = CreateUser();

  @Input()
  get edit(): boolean {
    return this._edit;
  }

  private _edit = false;

  @Input()
  get index(): any {
    return this._index;
  }

  private _index = false;
}
