import { Component, Input, OnInit } from '@angular/core';
import { Room } from '../world';

@Component({
  selector: 'app-room-decorator',
  templateUrl: './room-decorator.component.html',
  styleUrls: ['./room-decorator.component.scss']
})
export class RoomDecoratorComponent implements OnInit {
  
  @Input()
  public currentRoom: Room | undefined;

  constructor() {
   }

  ngOnInit(): void {
    console.log(`currentRoom=${this.currentRoom}`);
  }
}
