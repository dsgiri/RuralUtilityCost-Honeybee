import portfolioDataRaw from './portfolio-sites.md?raw';

export interface PortfolioSite {
  priority: number;
  name: string;
  url: string;
  githubRepo: string;
  description: string;
  category: string;
}

export function parsePortfolioMarkdown(): PortfolioSite[] {
  const lines = portfolioDataRaw.split('\n');
  const sites: PortfolioSite[] = [];
  
  let isTable = false;
  
  for (const line of lines) {
    if (line.trim().startsWith('| Priority |') || line.trim().startsWith('|Priority|')) {
      isTable = true;
      continue;
    }
    
    if (isTable && line.trim().startsWith('|---')) {
      continue;
    }
    
    if (isTable && line.trim().startsWith('|')) {
      const parts = line.split('|').map(s => s.trim());
      // A well-formed row starts and ends with a pipe: ['', '1', 'Platform', ..., '']
      if (parts.length >= 7) {
        const priority = parseInt(parts[1], 10);
        if (!isNaN(priority)) {
          sites.push({
             priority,
             name: parts[2],
             url: parts[3],
             githubRepo: parts[4],
             description: parts[5],
             category: parts[6]
          });
        }
      }
    } else if (isTable && line.trim() === '') {
       // Blank line typically means the end of the markdown table block
       // We can continue parsing or stop, but continuing is safer if there are empty lines inside.
    } else if (isTable && !line.trim().startsWith('|')) {
       // End of table
       isTable = false;
    }
  }
  
  // Sort by priority ascending
  return sites.sort((a, b) => a.priority - b.priority);
}

export const portfolioSites = parsePortfolioMarkdown();
