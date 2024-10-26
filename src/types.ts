export type Match = {
  sport: string,
  participant1?: string,
  participant2?: string,
  score?: string | string[][],
}

export type FormattedMatch = {
  name: string;
  score: string;
}

export interface Parser {
  makeEventName(match: Match): string;
  formatScore(match: Match): string;
}

export enum Sports {
  SOCCER = 'soccer',
  VOLLEYBALL = 'volleyball',
  HANDBALL = 'handball',
  BASKETBALL = 'basketball',
  TENNIS = 'tennis',
  SKI_JUMPING = 'ski jumping'
}
