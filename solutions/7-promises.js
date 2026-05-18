import fs from 'fs/promises';

// BEGIN
export function reverse(filePath) {
  return fs.readFile(filePath, 'utf-8')
    .then((data) => {
      const lines = data.split('\n');
      const reversedLines = lines.reverse();
      const result = reversedLines.join('\n');
      return fs.writeFile(filePath, result);
    });
}
// END
