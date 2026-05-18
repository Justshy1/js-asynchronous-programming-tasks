import fs from 'fs/promises';

// BEGIN
export async function exchange(filePath1, filePath2) {
  const [data1, data2] = await Promise.all([
    fs.readFile(filePath1, 'utf-8'),
    fs.readFile(filePath2, 'utf-8'),
  ]);

  await Promise.all([
    fs.writeFile(filePath1, data2),
    fs.writeFile(filePath2, data1),
  ]);
}
// END
