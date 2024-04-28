import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Room } from './world';
import { WorldService } from './world.service';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet } from '@angular/router';

import { RoomDecoratorComponent } from './room-decorator/room-decorator.component';
import { InventoryComponent } from './inventory/inventory.component';

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [
      CommonModule,
      RouterOutlet,
      FormsModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatGridListModule,
      MatChipsModule,
      RoomDecoratorComponent
    ],
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
