import React from 'react'
import { StackNavigator } from 'react-navigation'

import CategoryScreen from './components/CategoryScreen'
import DetailScreen from './components/DetailScreen'
import ListScreen from './components/ListScreen'

const App = StackNavigator({
  Category: { screen: CategoryScreen},
  Detail: { screen: DetailScreen},
  List: { screen: ListScreen},
})

export default App