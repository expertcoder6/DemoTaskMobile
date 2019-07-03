import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

import data from '../../utils/client.json'
export default class Client extends Component {
  constructor(props){
    super(props);

    this.state = {
      clientList: [],
    }
  }

  // below method will be used to configure header
  static navigationOptions = {
    headerTitleStyle: { 
      alignSelf: 'center',
      textAlign: 'center',
      flex: 1
    },
    title: 'Client List',
    headerLeft: null
  };

  componentWillMount(){
    this.setState({
      clientList: data.clients,
    })
  }

  handleSearch(e){
    // functionality for search patient from table
    var listData = data.clients
    var search_text = e
    var value = search_text.nativeEvent.text.toLocaleLowerCase()
    if(value.trim().length > 0){
      this.doSearch(listData , value)
    }else{
      this.setState({clientList: data.clients})
    }
    
   }
  
   doSearch = (list, value) =>{
    const result = list.filter(item =>{
      var search_inside = item.name +" "+item.jobTitle +" "+item.organization +" "+item.city +" "+item.email +" "+item.phone
      var isExist = search_inside.toLocaleLowerCase().indexOf(value)
      if(isExist >= 0){
        return item
      }
    })
    this.setState({clientList: result})
   }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row',position: 'relative',margin: 10,height: 45, borderColor: 'gray', borderRadius: 5,borderWidth: 1}}> 
          <TextInput
            style={{width: "88%",height: 40,paddingLeft:10, }}
            onChange={(text) => this.handleSearch(text)}
            placeholder= {"Search"}
          />
          <View style={{width: "12%",height: 43, lineHeight:43, right: 0, borderRadius: 5,backgroundColor: '#90DFAA',position: 'absolute'}}>
            <Image
                resizeMode='center'
                style = {{width: 40, height: 40,padding: 10,alignSelf: 'center'}}
                source={require('../../assets/images/search_icon.png')}
              />
          </View>
        </View>
       <FlatList
          data={this.state.clientList}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ClientDetail', {item})}>
            <View style={styles.flatview}>
            <Image
              style={{width: 80, height: 80}}
              source={require('../../assets/images/default_avatar.png')}
            />
            <View style = {styles.flatviewColumn}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.email}>{item.jobTitle}</Text>
              
            </View>
          </View>
          </TouchableOpacity>
          <View style={styles.separator}></View>  
          </View>
        }
          keyExtractor={item => item.email}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    borderRadius: 2,
    flexDirection: 'row',
    margin: 15
  },

  flatviewColumn: {
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 15
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18
  },
  separator: {
    width: "100%",
    height: 2,
    borderBottomColor: 'gray',
    borderBottomWidth: 1
  }
  
});
