import {Direction, Room, Rooms } from './world';
import {Compass} from './compass';

describe('World', () => {
  let world: Rooms;
  beforeEach(async () => {
    world = new Rooms();
  });

  it(`should contain rooms`, () => {
    let room: Room = world.getRoom(101);
    expect(room.id).toEqual(101);
  });
});
