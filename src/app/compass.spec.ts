import {Direction } from './world';
import {Compass} from './compass';

describe('Compass', () => {
  beforeEach(async () => {
  });

  [
    {command: 'n',  expected: Direction.North},
    {command: 'e',  expected: Direction.East},
    {command: 's',  expected: Direction.South},
    {command: 'w',  expected: Direction.West},
    {command: 'north',  expected: Direction.North},
    {command: 'east',  expected: Direction.East},
    {command: 'south',  expected: Direction.South},
    {command: 'west',  expected: Direction.West},
    {command: 'nnnnn',  expected: null},
    {command: 'so',  expected: null},
  ].forEach((testArgs) => {
    it(`should parse direction '${testArgs.command}' as '${testArgs.expected}'`, () => {
      let expected: Direction | null = new Compass().direction(testArgs.command)
      expect(expected).toEqual(testArgs.expected);
    });
  });
});
