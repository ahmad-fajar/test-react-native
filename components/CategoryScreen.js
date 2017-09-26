import axios from 'axios'
import React from 'react'

import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default class CategoryScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      categories: []
    }
  }

  categoriesList() {
    const { navigate } = this.props.navigation
    return this.state.categories.map((cat, i) => {
      return (
        <View key={i}>
          <Text
            style={styles.text}
            onPress={() => navigate('List', {url: cat[1]})}
          >
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
        this.setState({
          categories: Object.entries(data)
        })
      })
      .catch(e => console.log(e))
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../darth-vader.jpg')}
        />
        {this.categoriesList()}
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

  text: {
    margin: 20
  }
});
