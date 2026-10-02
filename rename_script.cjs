const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const targetDir = path.join(__dirname, 'src');
const files = walk(targetDir);

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes('NYC Limo Car')) {
    content = content.replace(/NYC Limo Car/g, 'NY City Limousine');
    fs.writeFileSync(f, content, 'utf8');
    console.log('Updated: ' + f);
  }
});
