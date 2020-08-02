import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import IndexScreen from './src/screens/indexScreens'
import ShowScreens from './src/screens/showScreens'
import CreateScreens from './src/screens/creaateScreen'
import EditScreens from './src/screens/editScreens'
import {Provider} from './src/context/blogContext'
//import {Provider as something} from './src/context/blogContext1'



const navigator = createStackNavigator(
{
    Index : IndexScreen,
    Show : ShowScreens,
    Create : CreateScreens,
    Edit: EditScreens
},
{
  initialRouteName: 'Index',
  defaultNavigationOptions:{
      title:'Leo Goudeau'
  }
}
)
 const App = createAppContainer(navigator)

 export default () =>{
    return (
        <Provider>
        <App/>  
    </Provider>
    )
 }