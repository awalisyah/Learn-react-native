import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return ( 
      <View style={styles.container}>
        <Text>Awalisyah N </Text>
        <Text>07</Text>
        <Text>XI RPL 4</Text>
        <Image style={{width: 400, height: 400}}
        source={require('./IMG-20171217-WA0000.jpg')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
