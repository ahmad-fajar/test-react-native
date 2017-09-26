import axios from 'axios'
import React from 'react'

import { Image, StyleSheet, Text, View } from 'react-native';

export default class DetailScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      detail: []
    }
  }

  detailList() {
    return(
      <View>
        <Text style={styles.text}>
          {JSON.stringify(this.state.detail, null, 2)}
        </Text>
      </View>
    )


    return this.state.detail.map((detail, i) => {
      return (
        <View key={i}>
          <Text
            style={styles.text}
          >
            {JSON.stringify(detail, null, 2)}
          </Text>
        </View>
      )
    })
  }

  componentDidMount() {
    let url = this.props.navigation.state.params.url
    axios.get(url)
      .then(({ data }) => {
        this.setState({
          detail: data
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
        {this.detailList()}
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
