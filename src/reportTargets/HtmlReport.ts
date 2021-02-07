import { OutputTarget } from './../Summary';
import fs from 'fs';

export class HtmlReport implements OutputTarget {
  constructor(public htmlPath: string) {}

  print(report: string): void {
    const html = `
        <div>
            <h1>EPL Analysis</h1>
            <div>${report}</div>
        </div>
    `;

    fs.writeFileSync(this.htmlPath, html);
  }
}
