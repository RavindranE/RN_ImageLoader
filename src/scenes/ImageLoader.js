import React, {Component} from 'react';
import {SectionList,View,Text, FlatList, SafeAreaView} from 'react-native'
import { ListItem } from 'react-native-elements'
import Icon from "react-native-vector-icons/MaterialIcons";

const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    },
  ]
  
export default class Imageloader extends Component{
constructor(props){
    super(props)
    // this.state = {
    //     albumList:[]
    // }
}

// componentDidMount(){
//     this.setState(albumList = ['T1', 'T2', 'T3'])
// }

/*keyExtractor = (item, index) => index.toString()

renderItem = ({ item }) => (
  <ListItem
    title={item.name}
    subtitle={item.subtitle}
    leftAvatar={{ source: { uri: item.avatar_url } }}
    bottomDivider
    chevron
  />
)
render () {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={list}
        renderItem={this.renderItem}
      />
    )
  }*/
render(){
    return(<View>
  {
    list.map((l, i) => (
      <ListItem
        key={i}
        leftAvatar={{ source: { uri: l.avatar_url } }}
        title={l.name}
        subtitle={l.subtitle}
        bottomDivider
      />
    ))
  }
</View>);
}
// render(){
//   return(<SectionList
//     renderItem={({ item, index, }) => <Text key={index}>{item}</Text>}
//     sections={[
//       { title: 'Title1', data: ['item1', 'item2'] },
//       { title: 'Title2', data: ['item3', 'item4'] },
//       { title: 'Title3', data: ['item5', 'item6'] },
//     ]}
//   />);
//   }
}
/**
 *  <SectionList
    renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
    sections={[
      { title: 'Title1', data: ['item1', 'item2'] },
      { title: 'Title2', data: ['item3', 'item4'] },
      { title: 'Title3', data: ['item5', 'item6'] },
    ]}
  />
 */