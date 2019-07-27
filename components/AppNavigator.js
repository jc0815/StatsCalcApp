import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
/* --------------------- DISTRIBUTIONS --------------------- */
import BinomialScreen from '../screens/distributions/BinomialScreen';
import PoissonScreen from '../screens/distributions/PoissonScreen';
import GeometricScreen from '../screens/distributions/GeometricScreen';
import NegativeBinomialScreen from '../screens/distributions/NegativeBinominalScreen';
import HyperGeometricScreen from '../screens/distributions/HyperGeometricScreen';
/* --------------------- TOOLS--------------------- */
import MeanScreen from '../screens/tools/MeanScreen';


// import ToolsScreen from '../screens/tools/ToolsScreen';

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },

  /* --------------------- DISTRIBUTIONS --------------------- */
  BinomialScreen: { screen: BinomialScreen },
  PoissonScreen: { screen: PoissonScreen },
  GeometricScreen: { screen: GeometricScreen },
  NegativeBinomialScreen: { screen: NegativeBinomialScreen },
  HyperGeometricScreen: { screen: HyperGeometricScreen },

  /* --------------------- TOOLS --------------------- */
  MeanScreen: { screen: MeanScreen },


  // ToolsScreenNoTransition: { screen: ToolsScreen},
},
  // {
  //   transitionConfig: (sceneProps) => ({
  //     transitionSpec: {
  //       duration: sceneProps.scene.route.routeName.endsWith('NoTransition') ? 0 : 260, 
  //     },
  //   }),
  // }
);



const App = createAppContainer(AppNavigator);
export default App;