import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View, 
  Image,
  TouchableOpacity,
  Button,
  TextInput,
  ScrollView
} from 'react-native';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);


let client_details = {}
export default class ClientDetail extends Component {
  constructor(props){
    super(props);
  }

  // below method will be used to configure header
  static navigationOptions = {
    headerTitleStyle: { 
      alignSelf: 'center',
      textAlign: 'center',
      flex: 1
    },
    title: 'Client Detail',
    headerLeft: null
  };

  componentWillMount = () => {
    client_details = this.props.navigation.state.params;
}

  

  render() {

    return (
      <View style={{flex: 1}}>
        
        <View style={styles.container}>
          <Image style={styles.icon} source={require('../../assets/images/default_avatar.png')} />
          
            <Text style={styles.title}>{client_details.item.name}</Text>
            <View style={styles.body}>
              <Text style={styles.lable}>Job Title:</Text>
              <Text style={styles.description}>{client_details.item.jobTitle}</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.lable}>Email:</Text>
              <Text style={styles.description}>{client_details.item.email}</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.lable}>Phone:</Text>
              <Text style={styles.description}>{client_details.item.phone}</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.lable}>City:</Text>
              <Text style={styles.description}>{client_details.item.city}</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.lable}>Organization:</Text>
              <Text style={styles.description}>{client_details.item.organization}</Text>
            </View>
          <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Client')}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity> 
        </View>
          
          
        
      </View>
    );
  }
}

const styles = StyleSheet.create({ 
  container: { flex: 1, backgroundColor: '#EEEEEE', alignItems: 'center', paddingTop:50, }, 
  icon:{ width:128, height:128, }, 
  body:{ width: '80%',flexDirection: 'row', justifyContent: 'flex-start'},
  title:{ fontSize:24, textAlign: 'center', marginTop:22, color: "#5F6D7A", marginBottom: 20 }, 
  lable: { marginTop:5, color: "#A9A9A9", fontSize:16, margin:5, },
  description: { marginTop:5, color: "#A9A9A9", fontSize:16, }, 
  buttonContainer: { height:45, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:40, width:250, borderRadius:30, }, 
  loginButton: { backgroundColor: "#3498db", }, buttonText: { color: "#FFFFFF", fontSize:20, } });  