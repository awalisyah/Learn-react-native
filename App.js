import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Components/Judul'

export default class App extends Component {
  render() {
    return (
      <View>
        <Judul></Judul>
        <Text>  Nama: Awalisyah Nafiunisa </Text>
        <Text>  Kelas: XI RPL 4 </Text>
        <Text>  No.Absen: 07 </Text>
        <Image style={{width: 400, height:300}}
        source={require('./01.jpg')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 10,
    textAlign: 'center',
    margin: 5,
  },
  instructions: {
    textAlign: 'center',
    color: '#123456',
    marginBottom: 3,
  },
});
