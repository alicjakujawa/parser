import type { Match, Parser } from './types';

export class EventParser implements Parser {
    makeEventName(match: Match): string {
        const { sport, participant1, participant2 } = match;
        if (!participant1 || !participant2) return "Exception: invalid sport";

        switch (sport) {
            case 'soccer':
            case 'volleyball':
            case 'basketball':
                return `${participant1} - ${participant2}`;
            case 'tennis':
            case 'handball':
                return `${participant1} vs ${participant2}`;
            default:
                return 'Exception: invalid sport'
        }
    }

    formatScore(match: Match): string {
        const { score, sport }  = match;

        if (!score) return 'Exception: invalid sport';

        if (typeof score === 'string') {
            if (sport === 'soccer' || sport === 'handball') return score;

            const scores = /([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+),([0-9]+\:[0-9]+)/.exec(score);
            if (!scores) return 'Invalid format';

            const [_, main, set1, set2, set3] = scores;

            return `Main score: ${main} (set1 ${set1}, set2 ${set2}, set3 ${set3})`;
        }

        if (Array.isArray(score)) {
            return score.flat().join(',');
        }

        return "Exception: invalid sport";

    }
}
