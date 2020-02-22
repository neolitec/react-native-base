export default {
  configure: () => ({
    useReactNative: () => ({
      setAsyncStorageHandler: jest.fn(),
    }),
  }),
  connect: () => ({
    clear: jest.fn(),
  }),
  send: jest.fn(),
  error: jest.fn(),
  debug: jest.fn(),
  warn: jest.fn(),
};
