import { createStackNavigator, createAppContainer } from 'react-navigation';
import DistributionScreen from '../screens/DistributionScreen';
import BinomialScreen from '../screens/distributions/BinomialScreen';
import PoissonScreen from '../screens/distributions/PoissonScreen';

const AppNavigator = createStackNavigator({
  DistributionScreen: { screen: DistributionScreen },
  BinomialScreen: { screen: BinomialScreen },
  PoissonScreen: { screen: PoissonScreen }
},
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   }
);

const App = createAppContainer(AppNavigator);
export default App;