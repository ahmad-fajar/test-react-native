import axios from 'axios'
import React from 'react'

import { Image, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }

  listList() {
    return this.state.list.map((li, i) => {
      return (
        <View key={i}>
          <Text>
            {li[0]}
          </Text>
        </View>
      )
    })
  }

  componentDidMount() {
    let url = 'http://swapi.co/api/people'
    axios.get(url)
      .then(({ data }) => {
        console.log(data)
        this.setState({
          list: Object.entries(data)
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
        {this.listList()}
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
