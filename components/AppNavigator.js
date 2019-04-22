import { createStackNavigator, createAppContainer } from 'react-navigation';
import DistributionScreen from '../screens/DistributionScreen';
import BinomialScreen from '../screens/distributions/BinomialScreen';

const AppNavigator = createStackNavigator({
  DistributionScreen: { screen: DistributionScreen },
  BinomialScreen: { screen: BinomialScreen },
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