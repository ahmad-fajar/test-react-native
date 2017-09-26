import React from 'react';
import axios from 'axios'

import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    let url = 'http://swapi.co/api'
    console.log(url)
    axios.get(url)
    .then(({ data }) => {
      console.log(data)
      this.setState({
        categories: Object.entries(data)
      })
    })
    .catch(e => console.log(e))
  }

  render() {
    return (
      <View>
        <Image 
          style={styles.image}
          source={require('./darth-vader.jpg')} 
        />
        <Text>AAA</Text>
        <Text>BBB</Text>
        <Text>CCC</Text>
        <Text>DDD</Text>
        <Text>EEE</Text>
        <Text>{this.state.categories}</Text>
      </View>
        //  <FlatList 
        //   data = { this.state.categories }
        //   renderRow={(item) => <Text>{item}</Text>}
        // /> 
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 250,
    height: 250
  },
});
