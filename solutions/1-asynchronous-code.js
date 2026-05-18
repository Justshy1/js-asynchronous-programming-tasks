import fs from 'fs';

// BEGIN
export default function print(filePath) {
  fs.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
      throw error;
    }
    console.log(data);
  });
}
// END
