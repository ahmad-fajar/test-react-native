import axios from 'axios'
import React from 'react'

import { Image, StyleSheet, Text, View } from 'react-native';

export default class ListScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }

  listList() {
    const { navigate } = this.props.navigation
    return this.state.list.map((li, i) => {
      return (
        <View key={i}>
          <Text
            style={styles.text}
            onPress={() => navigate('Detail', { url: li.url })}
          >
            {li.name}
          </Text>
        </View>
      )
    })
  }

  componentDidMount() {
    let url = this.props.navigation.state.params.url
    axios.get(url)
      .then(({ data }) => {
        let newList = []
        data.results.forEach(a => {
          let info = {
            name: a.name || a.title,
            url: a.url
          }
          newList.push(info)
        })
        this.setState({
          list: newList
        })
      })
      .catch(e => console.log(e))
  }

  render() {
    return (
      <View style={styles.container}>
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

  text: {
    margin: 20
  }
});
