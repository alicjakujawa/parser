import matches from './data/matches.json';
import { EventParser } from './parser';
import type { FormattedMatch, Match } from './types';

const parser = new EventParser();

const matchesParsed: FormattedMatch[] = (matches as Match[]).reduce((acc, match) => {
  const name = parser.makeEventName(match);
  const score = parser.formatScore(match);

  if (name !== "Exception: invalid sport" && score !== "Exception: invalid sport") {
      acc.push({ name, score });
  }

  return acc;
}, [] as FormattedMatch[]);

console.log(matchesParsed);
