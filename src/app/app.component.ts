import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Compass } from './compass';
import { Coordinate, Direction, Inventory, ItemManifest, Room } from './world';
import { WorldService } from './world.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  commandControl = new FormControl('', [
    Validators.required
  ]);
  matcher = new MyErrorStateMatcher();
  public readonly startingLocation: number = WorldService.STARTING_LOCATION;
  public currentRoom!: Room;
  private inventory: Inventory;
  private itemManifest: ItemManifest;
  public rooms: Room[];

  constructor(public worldService: WorldService) {
    this.inventory = {
      food: [],
      weapons: []
    };
    this.itemManifest = new ItemManifest();
    this.rooms = this.worldService.getRooms();
    this.startOver();
  }

  public go() {
    console.log("command = " + this.commandControl.value);
    let command = this.commandControl.value;
    let direction = new Compass().direction(command);
    if (direction) {
      this.navigate(direction);
    } else {
      console.log('wat?');
    }
  }

  public startOver(): void {
    this.currentRoom = this.worldService.getRoom(this.startingLocation);
  }

  public quickNav(value: string) {
    console.log(`quickNav ` + value);
    this.commandControl.setValue(value);
  }

  // FIXME rename these
  public nav(direction: Direction): void {
    this.commandControl.setValue(direction);
    this.navigate(direction);
    console.log(`nav! direction${JSON.stringify(direction)}`);
  }
  
  public navigate(direction: Direction): void {
    let exit: Coordinate[] = this.currentRoom.exits.filter((exit: Coordinate) => {
      console.log(`exit=${JSON.stringify(exit)} direction=${JSON.stringify(direction)}`);
      return exit.direction === direction;
    });
    if (exit.length > 0) {
      this.currentRoom = this.worldService.getRoom(exit[0].roomId);
      console.log(`navigating to=${JSON.stringify(exit[0])}`);
    } else {
      console.log(`WARN: exit not valid for requested direction=${JSON.stringify(direction)}`);
    }
  }
}
