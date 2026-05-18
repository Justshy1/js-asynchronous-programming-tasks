import fs from 'fs/promises';

// BEGIN
export function getTypes(filePaths) {
  const promises = filePaths.map((filePath) => {
    return fs.lstat(filePath)
      .then((stat) => {
        if (stat.isDirectory()) {
          return 'directory';
        }
        if (stat.isFile()) {
          return 'file';
        }
        return null;
      })
      .catch(() => null);
  });

  return Promise.all(promises);
}
// END
