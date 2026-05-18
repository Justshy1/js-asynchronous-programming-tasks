import fs from 'fs';

// BEGIN
export default function watch(filePath, interval, callback) {
  let lastMtime = Date.now();

  const checkFile = () => {
    fs.stat(filePath, (error, stats) => {
      if (error) {
        clearInterval(timerId);
        callback(error);
        return;
      }

      if (stats.mtimeMs > lastMtime) {
        lastMtime = stats.mtimeMs;
        callback(null);
      }
    });
  };

  const timerId = setInterval(checkFile, interval);
  return timerId;
}
// END
