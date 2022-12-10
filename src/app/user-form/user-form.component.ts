import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserData, CreateUser } from 'src/Types/UserData';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  @Input()
  get user(): UserData {
    return this._user;
  }
  set user(user: UserData) {
    this._user = CreateUser(user);
  }

  private _user = CreateUser();

  @Input()
  get edit(): boolean {
    return this._edit;
  }
  set edit(edit: boolean) {
    this._edit = edit || false;
  }

  private _edit = false;

  @Input()
  get index(): number {
    return this._index;
  }
  set index(index: any) {
    this._index = <number>index;
  }

  private _index = null;

  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private eventEmitterService: EventEmitterService
  ) {}
  ngOnInit() {
    this.userForm = this.fb.group({
      email: [this._user.email, [Validators.required, Validators.email]],
      username: [this._user.username, [Validators.required]],
      accessConfig: [this._user.accessConfig],
      accessShop: [this._user.accessShop],
      accessOrders: [this._user.accessOrders],
      img: [this._user.img],
      active: [this._user.active],
    });
  }

  submit() {
    if (this.userForm.valid) {
      if (this._edit) {
        this.eventEmitterService.invokeUserAction.emit({
          data: {
            user: this.userForm.value,
            index: this._index,
          },
          type: 'edit',
        });
      } else {
        this.eventEmitterService.invokeUserAction.emit({
          data: { user: this.userForm.value },
          type: 'add',
        });
      }
    }
  }
}
