import { Component } from '@angular/core';
import { Room } from '../rooms/rooms';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent extends in {

  hotelName = 'Hotel California';

  numberOfRooms = 0;

  hideRooms = false;

  rooms: Room = {
    totalRooms:15,
    availableRooms: 10,
    bookedRooms: 5
  }

  constructor() { }

  toggle(){
    this.hideRooms = !this.hideRooms;
  }

}
