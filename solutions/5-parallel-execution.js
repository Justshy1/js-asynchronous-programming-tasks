import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
export function getDirectorySize(dirPath, callback) {
  fs.readdir(dirPath, (readDirError, files) => {
    if (readDirError) {
      callback(readDirError);
      return;
    }

    const filePaths = files.map((file) => path.join(dirPath, file));

    async.map(filePaths, fs.stat, (statError, stats) => {
      if (statError) {
        callback(statError);
        return;
      }

      const onlyFiles = stats.filter((stat) => stat.isFile());
      const totalSize = _.sumBy(onlyFiles, 'size');

      callback(null, totalSize);
    });
  });
}
// END
