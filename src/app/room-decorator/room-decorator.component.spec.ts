import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Compass } from '../compass';
import { Direction } from '../world';
import { WorldService } from '../world.service';
import { RoomDecoratorComponent } from './room-decorator.component';

describe('RoomDecoratorComponent', () => {
  let component: RoomDecoratorComponent;
  let fixture: ComponentFixture<RoomDecoratorComponent>;
  let worldService: WorldService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomDecoratorComponent],
      providers: [
        WorldService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDecoratorComponent);
    component = fixture.componentInstance;
    worldService = TestBed.inject(WorldService);
    component.currentRoom = worldService.getRoom(WorldService.STARTING_LOCATION);
  });

  it('should render current location', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#currentRoomId')?.textContent).toContain(component.currentRoom?.id);
  });

  describe('navigation', () => {
    // FIXME build a smaller testable Rooms world and inject so tests are not dependent on content change
    describe('valid exits', () => {
      [
        { command: 'n', expectedRoomId: 101 }
      ].forEach((testArgs) => {
        it(`should move player to requested room`, () => {
          let direction = new Compass().direction(testArgs.command);
          component.nav(direction as Direction);
          expect(component.currentRoom.id).toEqual(testArgs.expectedRoomId);
          });
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
          component.nav(direction as Direction);
          expect(component.currentRoom.id).toEqual(WorldService.STARTING_LOCATION);
        });
      });
    });
  });
});
