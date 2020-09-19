import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { SafeAreaView, Text } from 'react-native';

storiesOf('Test Component', module).add('example', () => (
  <SafeAreaView>
    <Text>Hello, Storybook!</Text>
  </SafeAreaView>
));
