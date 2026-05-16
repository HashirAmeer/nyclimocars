const fs = require('fs');
const files = [
  'src/routes/airports.jfk.tsx',
  'src/routes/airports.lga.tsx',
  'src/routes/airports.ewr.tsx',
  'src/routes/airports.teb.tsx',
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Extract Rates Table
  const ratesStartIdx = content.indexOf('      {/* Rates Table */}');
  let nextSectionIdx = content.indexOf('      <MiniFleet />', ratesStartIdx);
  if (file.includes('teb')) {
      nextSectionIdx = content.indexOf('      {/* FAQ Section */}', ratesStartIdx);
  }
  
  if (ratesStartIdx === -1 || nextSectionIdx === -1) {
      console.log('Could not find sections in', file);
      continue;
  }

  const ratesContent = content.slice(ratesStartIdx, nextSectionIdx);
  
  // Remove it from original place
  content = content.slice(0, ratesStartIdx) + content.slice(nextSectionIdx);
  
  // Find where to insert (after the first section in the PageShell)
  // The first section ends with `</section>\n`
  // We can look for the first `<section className="bg-background py-16">` and find its closing tag
  const introStartIdx = content.indexOf('<section className="bg-background py-16">');
  const introEndIdx = content.indexOf('</section>', introStartIdx) + '</section>'.length;
  
  // Just to be sure we are inserting after a newline
  let finalInsertPos = introEndIdx;
  if (content[finalInsertPos] === '\n') finalInsertPos++;
  if (content[finalInsertPos] === '\n') finalInsertPos++; // skip trailing empty lines
  
  content = content.slice(0, finalInsertPos) + '\n' + ratesContent + content.slice(finalInsertPos);
  
  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated', file);
}
