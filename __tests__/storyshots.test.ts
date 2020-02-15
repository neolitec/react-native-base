import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({
  framework: 'react-native',
  config: ({ configure }: any) =>
    configure(() => {
      // eslint-disable-next-line global-require
      require('../src/storybook/stories');
    }, module),
});
