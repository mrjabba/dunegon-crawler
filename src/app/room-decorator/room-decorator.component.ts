import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Coordinate, Direction, Room } from '../world';
import { WorldService } from '../world.service';
import { InventoryComponent } from '../inventory/inventory.component';

@Component({
  selector: 'room-decorator',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [WorldService],
  imports: [
    CommonModule,
    InventoryComponent
    ],
  templateUrl: './room-decorator.component.html',
  styleUrls: ['./room-decorator.component.scss']
})
export class RoomDecoratorComponent implements OnInit {

  @Input()
  public currentRoom!: Room;

  public direction = Direction;
  public moveDirection!: string;

  constructor(public worldService: WorldService) {
   }

  ngOnInit(): void {
    console.log(`currentRoom=${JSON.stringify(this.currentRoom?.exits)}`);
  }

  public moveToExit(direction: Direction) {
    this.moveDirection = direction;
    console.log('The player is moving!');
  }

  public hasExit(direction: Direction): boolean {
    let exit: Coordinate[] = this.currentRoom.exits.filter((exit: Coordinate) => {
      // console.log(`exit=${JSON.stringify(exit)} direction=${JSON.stringify(direction)}`);
      return exit.direction === direction;
    });
    return exit.length > 0;
  }

  public nav(direction: Direction): void {
    // this.commandControl.setValue(direction);
    let exit: Coordinate[] = this.currentRoom.exits.filter((exit: Coordinate) => {
      // console.log(`exit=${JSON.stringify(exit)} direction=${JSON.stringify(direction)}`);
      return exit.direction === direction;
    });
    if (exit.length > 0) {
      this.moveToExit(direction);
      this.navigate(exit[0]);
    } else {
      console.log(`WARN: exit not valid for requested direction=${JSON.stringify(direction)}`);
    }
  }

  private navigate(coordinate: Coordinate): void {
    this.currentRoom = this.worldService.getRoom(coordinate.roomId);
    console.log(`navigating to=${JSON.stringify(coordinate)}`);
  }

  public startOver(): void {
    this.currentRoom = this.worldService.goToStartingRoom();
    console.log(`>>> startOver currentRoom=${JSON.stringify(this.currentRoom)}`);
  }
}
