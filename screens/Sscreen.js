import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Sscreen extends React.Component{
    render(){
        return(
            <Text style={styles.container}>SEARCH FOR BOOKS</Text>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      color:"blue"
    },
  });
  