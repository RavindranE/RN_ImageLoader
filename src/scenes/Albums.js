import  React, {Component} from 'react';
import {  View, Text, Button, StyleSheet, ActivityIndicator} from 'react-native';
import { ListItem } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { fetchAlbumData } from './../services/FetchAlbumData';


export default class Albums extends Component{

  constructor(props) {
    super(props);
    this.state = { albums: [], refreshing: true };
    this.fetchAlbum = this.fetchAlbum.bind(this);
    this.showThumbnail = this.showThumbnail.bind(this);
  }

  componentDidMount(){
    this.fetchAlbum()
  }

  //Fetch Method for Album data
  fetchAlbum() {
    fetchAlbumData()
      .then(albums => this.setState({ albums, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  //Reload Album data
  reloadAlbum(){
    if(this.state.albums.length < 1){
      this.setState({ refreshing: true })
      this.fetchAlbum()
    }
  }

  //Navigate to Thumbnailscreen
  showThumbnail(albumData){
    this.props.navigation.navigate('ThumbNailPhoto', albumData);
  }

  render(){
    if(this.state.refreshing){
      return(
        <View style={styles.activityIndicatorStyle}>
          <ActivityIndicator/>
        </View>
      )
    }
    if(this.state.albums.length > 0){ 
      //Onsuccess of fetched albums to display
      return(<ScrollView>
        {
          this.state.albums.map((album, i) => (
            <ListItem
              key = {i}
              title = {album.title}
              onPress = {() => this.showThumbnail(album)}
              bottomDivider
            />
          ))
  
        }
      </ScrollView>);
    }
    else{ 
      //Handle no album scenario screen
      return(
        <View style = {styles.container}> 
        <Text>Please Check Network Connectivity / URL Access</Text>
        <Button style = {styles.reloadButton}  title = 'Reload' onPress={()=>this.reloadAlbum()} />
        </View>
       );
    }
    
    }
  }

  //Style Creation
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    reloadButton:{
      backgroundColor:'grey',
    },
    activityIndicatorStyle:{
      flex: 1, 
      padding: 80
    }
  });