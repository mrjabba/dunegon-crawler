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

// let foo = { values: ['n', 'north'] } as DirectionData;

// export enum Direction2 {
//   North = { values: ['n'] } as DirectionData }
//   // South = { values: ['n'] } as DirectionData }
// }

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
}

// FIXME make readonly
export class Rooms {
  private rooms: Room[];
  constructor() {
    this.rooms =
        [
          { id: 100,
            desc: "You have materalized into a house. This is the beginning.",
            exits: [ { direction: Direction.North, roomId: 101} ], 
            items: [
              { name: 'apple' },
              { name: 'turkey-leg' },
              { name: 'hammer' },
              { name: 'sword'},
              { name: 'shield'}
            ]
          },
          // :101 {:id :101 :exits {:north :102 :south :100 :east :103 :west :104} :desc "a large room." :items [:apple, :orange]}
          { id: 101,
            desc: "a large room",
            exits: [
               { direction: Direction.North, roomId: 102},
               { direction: Direction.South, roomId: 100},
               { direction: Direction.East, roomId: 103},
               { direction: Direction.West, roomId: 104}
                          ], 
            items: [
              { name: 'apple' },
              { name: 'orange' }
            ]
          }
          // FIXME more rooms
          // FIXME items need something like we had with a clojure keyword
          // maybe enums for everything?
        ]
  }
  
  public getRoom(id: number): Room {
    return this.rooms.filter((room: Room) => {
      return room.id = id;
    })[0];
  }
} 

// from clojure
// (def rooms (r/atom
//   {
//    :100 {:id :100 :exits {:north :101} :desc "You have materalized into a house. This is the beginning." :items [:apple, :turkey-leg :hammer, :sword :shield]}
//    :101 {:id :101 :exits {:north :102 :south :100 :east :103 :west :104} :desc "a large room." :items [:apple, :orange]}
//    :102 {:id :102 :exits {:north :106 :south :101 :east :105} :desc "You are in a long hallway" :items []}
//    :103 {:id :103 :exits {:west :101} :desc "a dining room" :items []}
//    :104 {:id :104 :exits {:east :101} :desc "a study" :items [:ball]}
//    :105 {:id :105 :exits {:west :102} :desc "a tiny closet. a trap" :items []}
//    :106 {:id :106 :exits {:south :102 :west :107} :desc "a great hall" :items []}
//    :107 {:id :107 :exits {:north :108 :east :106} :desc "a library" :items [:book]}
//    :108 {:id :108 :exits {:south :107 :east :109} :desc "a kitchen" :items [:sandwich]}
//    :109 {:id :109 :exits {:north :111 :west :108 :east :110} :desc "a back porch" :items []}
//    :110 {:id :110 :exits {:west :109} :desc "a closet. a trap" :items []}
//    :111 {:id :111 :exits {:south :109} :desc "back yard. the end" :items []}
//    }
//   ))



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

