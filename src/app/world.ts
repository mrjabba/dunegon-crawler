export interface Inventory {
  weapons: Item[];
  food: Item[]
};

export interface Item {
  name: string;
  desc?: string;  
};

export interface DirectionData {
  values: string[];
};

export enum Direction {
  North = 'North',
  South = 'South',
  East = 'East',
  West = 'West'
}

export interface CompassDirection {
  values: string[],
  direction: Direction
}
export interface Coordinate {
  direction: Direction,
  roomId: number
}
export interface Room {
  id: number;
  desc: string;
  exits: Coordinate[];
  items: Item[];
  style?: string;
}

export class ItemManifest {
  private food: Item[];
  private weapons: Item[];

  constructor() {
    console.log('initializing item manifest');
    this.food = [
      { name: 'apple', desc: 'an apple'},
      { name: 'turkey leg', desc: 'a turkey leg'},
      { name: 'orange', desc: 'an orange'},
      { name: 'banana', desc: 'a banana'},
    ];
    this.weapons = [
      { name: 'hammer', desc: 'a hammer'},
      { name: 'sword', desc: 'long sword'},
      { name: 'shield', desc: 'small shield'}
    ]
  }

  public getFood(): Item[] {
    return this.food;
  }

  public getWeapons(): Item[] {
    return this.weapons;
  }
}

