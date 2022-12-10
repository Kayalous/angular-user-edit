import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root',
})
export class EventEmitterService {
  invokeUserAction = new EventEmitter();
  addSub: Subscription;

  constructor() {}

  onAddUser() {
    this.invokeUserAction.emit();
  }
}
