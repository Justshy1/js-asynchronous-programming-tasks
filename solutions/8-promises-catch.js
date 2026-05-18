import fs from 'fs/promises';

// BEGIN
export function touch(filePath) {
  return fs.open(filePath, 'wx')
    .then((fileHandle) => fileHandle.close())
    .catch((error) => {
      if (error.code !== 'EEXIST') {
        throw error;
      }
    });
}
// END
