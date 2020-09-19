import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import StorybookUIRoot from './storybook';

// TODO: 앱 내에서 스토리북 볼 수 있는 라우트 제공
AppRegistry.registerComponent(appName, () => StorybookUIRoot);
