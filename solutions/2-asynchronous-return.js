import fs from 'fs';

// BEGIN
export default function write(filePath, data, callback) {
  fs.writeFile(filePath, data, (error) => {
    if (!error) {
      callback();
    }
  });
}
// END