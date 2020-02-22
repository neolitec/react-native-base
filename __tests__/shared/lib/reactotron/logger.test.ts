import reactotron from 'reactotron-react-native';
import { getLogger } from '../../../../src/shared/lib/reactotron/logger';

describe('Reactotron logger', () => {
  describe('Prod mode', () => {
    beforeEach(() => {
      // eslint-disable-next-line no-eval
      eval('__DEV__ = false');
    });

    afterEach(() => {
      // eslint-disable-next-line no-eval
      eval('__DEV__ = true');
    });

    it('should not log anything', () => {
      const logger = getLogger();
      logger.error('test');
      logger.debug('test');
      logger.log('test');
      logger.warn('test');
      expect(reactotron.error).not.toHaveBeenCalled();
      expect(reactotron.debug).not.toHaveBeenCalled();
      expect(reactotron.send).not.toHaveBeenCalled();
      expect(reactotron.warn).not.toHaveBeenCalled();
    });
  });

  describe('Prefixed logger', () => {
    const prefix = 'P';
    const logger = getLogger(prefix);

    it('should log things', () => {
      const message = 'test log';
      logger.log(message);
      expect(reactotron.send).toHaveBeenCalledWith('log', {
        message: `[${prefix}] ${message}`,
      });
    });

    it('should debug things', () => {
      const message = 'test debug';
      logger.debug(message);
      expect(reactotron.debug).toHaveBeenCalledWith(`[${prefix}] ${message}`);
    });

    it('should error things', () => {
      const message = 'test error';
      logger.error(message);
      expect(reactotron.error).toHaveBeenCalledWith(
        `[${prefix}] ${message}`,
        null,
      );
    });

    it('should warn things', () => {
      const message = 'test warn';
      logger.warn(message);
      expect(reactotron.warn).toHaveBeenCalledWith(`[${prefix}] ${message}`);
    });
  });

  describe('Root logger', () => {
    const logger = getLogger();

    it('should log things', () => {
      const message = 'test log';
      logger.log(message);
      expect(reactotron.send).toHaveBeenCalledWith('log', {
        message: `${message}`,
      });
    });
  });
});
