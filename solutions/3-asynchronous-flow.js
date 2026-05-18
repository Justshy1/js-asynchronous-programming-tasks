import fs from 'fs';

// BEGIN
export function compareFileSizes(path1, path2, callback) {
  fs.stat(path1, (error1, stats1) => {
    if (error1) {
      callback(error1);
      return;
    }

    fs.stat(path2, (error2, stats2) => {
      if (error2) {
        callback(error2);
        return;
      }

      const result = Math.sign(stats1.size - stats2.size);
      callback(null, result);
    });
  });
}
// END