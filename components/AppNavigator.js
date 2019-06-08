import { createStackNavigator, createAppContainer } from 'react-navigation';
import DistributionScreen from '../screens/DistributionScreen';
import BinomialScreen from '../screens/distributions/BinomialScreen';
import PoissonScreen from '../screens/distributions/PoissonScreen';

import ToolsScreen from '../screens/tools/ToolsScreen';

const AppNavigator = createStackNavigator({
  DistributionScreen: { screen: DistributionScreen},
  BinomialScreen: { screen: BinomialScreen },
  PoissonScreen: { screen: PoissonScreen },


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