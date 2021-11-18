import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Room } from '../world';
import { WorldService } from '../world.service';

import { RoomDecoratorComponent } from './room-decorator.component';

describe('RoomDecoratorComponent', () => {
  let component: RoomDecoratorComponent;
  let fixture: ComponentFixture<RoomDecoratorComponent>;
  let rooms: Room[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomDecoratorComponent ],
      providers: [
        WorldService
      ]
      // imports: [
      //   WorldService
      // ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDecoratorComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    // rooms = new Rooms();
  });

  it('should render current location', () => {
    let worldService: WorldService = TestBed.inject(WorldService)
    component.currentRoom = worldService.getRoom(WorldService.STARTING_LOCATION);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#currentRoomId')?.textContent).toContain(component.currentRoom?.id);
  });
});
