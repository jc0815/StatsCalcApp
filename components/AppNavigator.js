import { createStackNavigator, createAppContainer } from 'react-navigation';
import DistributionScreen from '../screens/DistributionScreen';
import BinomialScreen from '../screens/distributions/BinomialScreen';
import PoissonScreen from '../screens/distributions/PoissonScreen';
import GeometricScreen from '../screens/distributions/GeometricScreen';
import NegativeBinomialScreen from '../screens/distributions/NegativeBinominalScreen';
import HyperGeometricScreen from '../screens/distributions/HyperGeometricScreen';

// import ToolsScreen from '../screens/tools/ToolsScreen';

const AppNavigator = createStackNavigator({
  DistributionScreen: { screen: DistributionScreen},
  BinomialScreen: { screen: BinomialScreen },
  PoissonScreen: { screen: PoissonScreen },
  GeometricScreen: { screen: GeometricScreen },
  NegativeBinomialScreen: { screen: NegativeBinomialScreen },
  HyperGeometricScreen: { screen: HyperGeometricScreen },

  
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