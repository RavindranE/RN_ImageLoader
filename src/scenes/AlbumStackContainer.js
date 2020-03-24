import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Albums from './Albums';
import ThumbNailPhoto from './ThumbnailPhoto';
import DisplayPhoto from './DisplayPhoto';

const Stack = createStackNavigator();

//Stack list of screens and params
export default function AlbumStackContainer() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Albums" component={Albums} />
      <Stack.Screen name="ThumbNailPhoto" component={ThumbNailPhoto}  initialParams={{ }} />
      <Stack.Screen name="DisplayPhoto" component={DisplayPhoto} initialParams={{ }} />
    </Stack.Navigator>
  );
}