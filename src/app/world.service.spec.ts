import { TestBed } from '@angular/core/testing';
import { Room } from './world';
import { WorldService } from './world.service';

describe('WorldService', () => {
  let service: WorldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldService);
  });

  it(`should contain rooms`, () => {
    let room: Room = service.getRoom(101);
    expect(room.id).toEqual(101);
  });
});
