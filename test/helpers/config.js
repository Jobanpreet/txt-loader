import path from 'path';

export default (options) => {
  const { entryPath, name, esModule } = options;

  return {
    mode: 'development',
    entry: path.resolve(entryPath),
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'bundle.js',
    },
    optimization: {
      minimize: false,
    },
    module: {
      rules: [
        {
          test: /\.txt$/,
          exclude: /node_modules/,
          use: [
            {
              loader: path.resolve(__dirname, '../../src/'),
              options: {
                name,
                esModule,
              },
            },
          ],
        },
      ],
    },
  };
};
