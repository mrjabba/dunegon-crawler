import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import { Coordinate, Direction, Inventory, ItemManifest, Room, Rooms } from './world';
import { Compass } from './compass';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

let fixture: ComponentFixture<AppComponent>;
let app: AppComponent;

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatInputModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent

      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
});

  it(`should have a starting location`, () => {
    expect(app.currentRoom.id).toEqual(app.startingLocation);
  });

  describe('navigation', () => {
    // FIXME build a smaller testable Rooms world and inject so tests are not dependent on content change
    describe('valid exits', () => {
      [
        { command: 'n', expectedRoomId: 101 }
      ].forEach((testArgs) => {
        it(`should move player to requested room`, () => {
          // FIXME create selectors, use form controls, set value on command instead
          let direction = new Compass().direction(testArgs.command);
          app.navigate(direction as Direction);
          expect(app.currentRoom.id).toEqual(testArgs.expectedRoomId);
          fixture.detectChanges();
          const compiled = fixture.nativeElement as HTMLElement;
          expect(compiled.querySelector('#currentRoomId')?.textContent).toContain(testArgs.expectedRoomId);
          });  
      });

      it('should render current location', () => {
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('#currentRoomId')?.textContent).toContain(app.currentRoom.id);
      });
    });

    describe('invalid exits or directions', () => {
      [
        { command: 's'},
        { command: 'e'},
        { command: 'w'},
        { command: 'x'}
      ].forEach((testArgs) => {
        it(`should not move player`, () => {
          let direction = new Compass().direction(testArgs.command);
          app.navigate(direction as Direction);
          expect(app.currentRoom.id).toEqual(app.startingLocation);
        });  
      });
    });
  });
});
