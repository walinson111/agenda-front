import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Friend } from '../../Friend';

@Component({
  selector: 'app-friend',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent {

  @Input()
  friend: Friend = {
    id: 0,
    name: '',
    social: '',
    origin: '',
    age: 0,
    gender: '',
    city: '',
    state: '',
    job: '',
    phone: 0,
    favorito: false
  };

  @Output()
  saveEmitter = new EventEmitter<boolean>();

  save() {
    this.saveEmitter.emit(true);
  }

  cancel() {
    this.saveEmitter.emit(false);
  }

  
}


