import React from 'react'
import { StackNavigator } from 'react-navigation'

import CategoryScreen from './components/CategoryScreen'
import ListScreen from './components/ListScreen'

const App = StackNavigator({
  Category: { screen: CategoryScreen},
  List: { screen: ListScreen}
})

export default App