
import React from 'react';
import { Image, View ,TouchableOpacity, Dimensions, StyleSheet} from 'react-native';


//Navigation to Thumbnail Screen with image loading
export default function ThumbNailPhoto({ navigation,route }) {
  const album = route.params;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchObject} onPress={()=>navigation.navigate('DisplayPhoto', album)}>
          <Image style={styles.imageObject} source={{ uri: album.thumbnailUrl}} />
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
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageObject:{ 
      width:150, 
      height: 150 }
  });