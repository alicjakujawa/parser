import { EventParser } from '../parser';
import matches from '../data/matches.json';

describe('EventParser', () => {
    let parser: EventParser;
    const [soccer, volleyball, handball, basketball, _, invalidSport] = matches;

    beforeEach(() => {
        parser = new EventParser();
    });

    test('should create correct name for soccer', () => {
        expect(parser.makeEventName(soccer)).toBe('Chelsea - Arsenal');
    });

    test('should create correct name for handball', () => {
        expect(parser.makeEventName(handball)).toBe('Pogoń Szczeciń vs Azoty Puławy');
    });

    test('should correctly format score for soccer', () => {
        expect(parser.formatScore(soccer)).toBe('2:1');
    });

    test('should correctly format score for volleyball', () => {
        expect(parser.formatScore(volleyball)).toBe('Main score: 3:0 (set1 25:23, set2 25:19, set3 25:21)');
    });

    test('should correctly format score for basketball', () => {
      expect(parser.formatScore(basketball)).toBe('9:7,2:1,5:3,9:9');
  });

    test('should handle invalid sport', () => {
        expect(parser.makeEventName(invalidSport)).toBe('Exception: invalid sport');
        expect(parser.formatScore(invalidSport)).toBe('Exception: invalid sport');
    });
});
