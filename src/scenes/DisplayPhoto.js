import React from 'react';
import { Image, View ,TouchableOpacity, Dimensions, StyleSheet} from 'react-native';

//Navigation to Display Full size Screen with image loading
export default function DisplayPhoto({ navigation, route }) {
    const album = route.params;
      return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.touchObject} onPress={()=>navigation.navigate('Albums')}>
            <Image style={styles.imageObject} source={{ uri: album.url}} />
          </TouchableOpacity>
         
        </View>
      );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    touchObject:{
      height : Dimensions.get('window').height,
      width : Dimensions.get('window').width,
    },
    imageObject:{ 
      height : Dimensions.get('window').height,
      width : Dimensions.get('window').width,
    }
  });