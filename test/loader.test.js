import { compiler, assetLoader, modulePrefixer } from './helpers';

describe('Txt file loader', () => {
  let fileData;
  describe('GIVEN esModule is false', () => {
    beforeEach(async () => {
      fileData = await assetLoader('./test/assets/whats-your-name.txt');
    });

    it('SHOULD return valid response', async () => {
      const esModule = false;
      const options = {
        entryPath: './test/index.js',
        esModule,
      };

      const output = await compiler(options);

      expect(output.toJson().modules[0].source).toBe(

        `${modulePrefixer(esModule)}"${fileData}"`,
      );
    });
  });

  describe('GIVEN esModule is true', () => {
    beforeEach(async () => {
      fileData = await assetLoader('./test/assets/whats-your-name.txt');
    });

    it('SHOULD return valid response', async () => {
      const esModule = true;
      const options = {
        entryPath: './test/index.js',
        esModule,
      };

      const output = await compiler(options);

      expect(output.toJson().modules[0].source).toBe(
        `${modulePrefixer(esModule)}"${fileData}"`,
      );
    });
  });

  describe('GIVEN options are invalid', () => {
    it('SHOULD throw error', async () => {
      let error;
      const options = {
        entryPath: './test/index.js',
        esModule: 'true',
      };
      try {
        const output = await compiler(options);
      } catch (e) {
        error = e;
      }

      expect(error).toMatchSnapshot();
    });
  });
});
