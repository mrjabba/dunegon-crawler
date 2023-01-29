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
  public currentRoom!: Room;
  private inventory: Inventory;
  private itemManifest: ItemManifest;
  public rooms: Room[];

  constructor(public worldService: WorldService) {
    this.inventory = {items: []};
    // this.inventory = {
    //   food: [],
    //   weapons: []
    // };
    this.itemManifest = new ItemManifest();
    this.rooms = this.worldService.getRooms();
    this.startOver();
  }

  public go() {
    console.log("command = " + this.commandControl.value);
    let command = this.commandControl.value;
    let direction = new Compass().direction(command);
    if (direction) {
      // FIXME moved navigation down into the room decorator
      // this.navigate(direction);
    } else {
      console.log('wat?');
    }
  }

  public startOver(): void {
    this.currentRoom = this.worldService.goToStartingRoom();
  }

  // public selectItem(value: string) {
  //   console.log(`selectItem ` + value);
  //   this.commandControl.setValue(value);
  // }

}
