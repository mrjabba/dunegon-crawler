import { Component } from '@angular/core';
import { Room } from './world';
import { WorldService } from './world.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public currentRoom!: Room;
  public rooms: Room[];

  constructor(public worldService: WorldService) {
    this.rooms = this.worldService.getRooms();
    this.currentRoom = this.worldService.goToStartingRoom();
  }
}
