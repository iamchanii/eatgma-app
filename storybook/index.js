import { configure, getStorybookUI } from '@storybook/react-native';
import './rn-addons';
import { loadStories } from './storyLoader';

// import stories
configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
  port: '6006',
});

export default StorybookUIRoot;
