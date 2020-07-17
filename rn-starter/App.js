import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreens from './src/screens/componentsScreens'
import ListScreens from './src/screens/listScreens'
import ImageScreen from './src/screens/imageScreen'
import CounterScreen from './src/screens/counterScreen'
import ColorScreen  from './src/screens/colorsScreen'
import SquareScreen from './src/screens/squareScreen'
import SquareScreenReducer from './src/screens/squareScreenReducer'
import CounterScreenReducer from './src/screens/counterScreenReducer'
import TextScreen from './src/screens/textScreen'
import BoxScreen from './src/screens/boxScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreens,
    List : ListScreens,
    Image:ImageScreen,
    Counter:CounterScreen,
    Color:ColorScreen,
    Square:SquareScreen,
    SquareReducer: SquareScreenReducer,
    CounterReducer: CounterScreenReducer,
    TextS:TextScreen,
    Box:BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
