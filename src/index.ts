import { Summary } from './Summary';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';

const csvFileReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReports('Arsenal', 'report.html');

summary.buildAndPrintReport(matchReader.matches);
