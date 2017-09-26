import axios from 'axios'
import React from 'react'

import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      categories: []
    }
  }

  categoriesList() {
    return this.state.categories.map((cat, i) => {
      return (
        <View key={i}>
          <Text>
            {cat[0]}
          </Text>
        </View>
      )
    })
  }

  componentDidMount() {
    let url = 'http://swapi.co/api'
    axios.get(url)
      .then(({ data }) => {
        console.log('kampret', data)
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
          source={require('../darth-vader.jpg')}
        />
        <Text>AAA</Text>
        <Text>BBB</Text>
        <Text>CCC</Text>
        <Text>DDD</Text>
        <Text>EEE</Text>
        <Text>FFF</Text>
        {this.categoriesList()}
        <Button
          title="Lanjut"
          onPress={() => this.props.navigation('List')}
        />
      </View>
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
    width: 150,
    height: 150
  },
});
