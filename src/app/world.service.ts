import { Injectable } from '@angular/core';
import { Direction, Room } from './world';

@Injectable({
  providedIn: 'root'
})
export class WorldService {
  public static readonly STARTING_LOCATION: number = 100;
  private rooms: Room[] = [];

  constructor() { 
    this.loadRooms();
  }

  public getRooms(): Room[] {
    return this.rooms;
  }

  public getRoom(id: number): Room {
    return this.rooms.filter((room: Room) => {
      // FIXME write a test here
      return room.id === id;
    })[0];
  }

  private loadRooms(): void {
    this.rooms =
        [
          { id: 100,
            desc: "You have materalized into a house. This is the beginning.",
            // it might be better to have a more constrained set of attributes for style
            // like 
            style: 'room', // FIXME use an enum?
            // with enum values like room, hallway, etc. descriptors to make the 
            // visual change up as you move around
            // FIXME stopped here nov 17 2021
            // FIXME stopped here nov 17 2021
            // FIXME stopped here nov 17 2021
            // style: 'border: 1px solid green; margin: auto; width: 70%; margin-top: 20px; padding: 50px;',
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
            style: 'room',
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
          },
//    :102 {:id :102 :exits {:north :106 :south :101 :east :105} :desc "You are in a long hallway" :items []}
//    :103 {:id :103 :exits {:west :101} :desc "a dining room" :items []}
//    :104 {:id :104 :exits {:east :101} :desc "a study" :items [:ball]}
          { id: 102,
            desc: "You are in a long hallway",
            style: 'hallway',
            exits: [
               { direction: Direction.North, roomId: 106},
               { direction: Direction.South, roomId: 101},
               { direction: Direction.East, roomId: 105}
                          ], 
            items: []
          },
          { id: 103,
            desc: "a dining room",
            exits: [
               { direction: Direction.West, roomId: 101}
                          ], 
            items: []
          },
          { id: 104,
            desc: "a study",
            exits: [
               { direction: Direction.East, roomId: 101}
                          ], 
            items: [
              { name: 'ball' }
            ]
          },
          { id: 105,
            desc: "a tiny closet. a trap",
            exits: [
               { direction: Direction.West, roomId: 102}
                          ], 
            items: [
              { name: 'ball' }
            ]
          },
          { id: 106,
            desc: "a great hall",
            exits: [
               { direction: Direction.South, roomId: 102},
               { direction: Direction.West, roomId: 107}
                          ], 
            items: []
          },
          { id: 107,
            desc: "a library",
            exits: [
               { direction: Direction.North, roomId: 108},
               { direction: Direction.East, roomId: 106}
                          ], 
            items: [
              { name: 'book' }
            ]
          },
//    :105 {:id :105 :exits {:west :102} :desc "a tiny closet. a trap" :items []}
//    :106 {:id :106 :exits {:south :102 :west :107} :desc "a great hall" :items []}
//    :107 {:id :107 :exits {:north :108 :east :106} :desc "a library" :items [:book]}
          { id: 108,
            desc: "a kitchen",
            exits: [
              { direction: Direction.South, roomId: 107},
              { direction: Direction.East, roomId: 109}
                          ], 
            items: [
              { name: 'sandwich' }
            ]
          },
          { id: 109,
            desc: "a back porch",
            exits: [
              { direction: Direction.North, roomId: 111},
              { direction: Direction.West, roomId: 108},
              { direction: Direction.East, roomId: 110}
                          ], 
            items: []
          },
          { id: 110,
            desc: "a closet.",
            exits: [
              { direction: Direction.West, roomId: 109}
                          ], 
            items: []
          },
          { id: 111,
            desc: "back yard. the end!",
            exits: [
               { direction: Direction.South, roomId: 109}
                          ], 
            items: []
          }
//    :108 {:id :108 :exits {:south :107 :east :109} :desc "a kitchen" :items [:sandwich]}
//    :109 {:id :109 :exits {:north :111 :west :108 :east :110} :desc "a back porch" :items []}
//    :110 {:id :110 :exits {:west :109} :desc "a closet. a trap" :items []}
//    :111 {:id :111 :exits {:south :109} :desc "back yard. the end" :items []}

          // FIXME more rooms
          // FIXME items need something like we had with a clojure keyword
          // maybe enums for everything?
        ]
  }
} 
