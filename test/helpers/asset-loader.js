import fs from 'fs';
import path from 'path';

export default (filePath) => new Promise((resolve, reject) => {
  fs.readFile(path.resolve(filePath), (err, data) => {
    if (err) { console.log(err); reject(err); }
    resolve(data);
  });
});
