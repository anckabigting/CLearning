import Motherboard from './data/Motherboard';
import MultipleChoiceScreen from './screens/MultipleChoiceScreen';

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  MultipleChoice: { screen: MultipleChoiceScreen },
  TextInput: { screen: TextInputScreen },
  Motherboard: { screen: Motherboard },
});
