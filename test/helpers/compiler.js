import webpack from 'webpack';
import config from './config';

export default (options) => {
  const compiler = webpack(config(options));
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);
      if (stats.hasErrors()) reject(new Error(stats.toJson().errors));

      resolve(stats);
    });
  });
};
