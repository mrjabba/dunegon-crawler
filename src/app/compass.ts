import { Coordinate, Direction, Inventory, ItemManifest, Room } from './world';

export class Compass {
  private directions: Map<Direction, string[]> = new Map();
  constructor() {
    this.directions.set(Direction.North, ['n', 'north']);
    this.directions.set(Direction.East, ['e', 'east']);
    this.directions.set(Direction.South, ['s', 'south']);
    this.directions.set(Direction.West, ['w', 'west']);
  }

  public direction(query: string): Direction | null {
    const match: string = query.toLowerCase();
    // FIXME I don't like this b/c assigment is side effect-y
    let result = null;

    this.directions.forEach((value: string[], key: Direction) => {
      // console.log(`>> value=${value} key=${key}`);
      // result = value.includes(match) ? key : null;
      if (value.includes(match)) {
        result = Direction[key];
      }
    })
    // if (result === null) {
    //   console.log(`nope query=${query} is not a direction`);
    // }
    return result;
    // FIXME
    // returning 0 for 'n' debug this
  }
}
