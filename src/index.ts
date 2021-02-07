import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let arsenalWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Arsenal' && match[5] === MatchResult.HomeWin) arsenalWins++;
  else if (match[2] === 'Arsenal' && match[5] === MatchResult.AwayWin)
    arsenalWins++;
}

console.log(`Arsenal won ${arsenalWins} games`);
