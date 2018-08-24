import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import App from './App';
import PropsPage from './src/PropsPage';
import StatePage from './src/StatePage';
import MainPage from './src/MainPage';
import StylePage from './src/StylePage';
import LayoutPage from './src/LayoutPage';
import FlexDirection from './src/FlexDirection';
import JustifyContent from './src/JustifyContent';
import AignItems from './src/AignItems';
import MyNetworkPage from './src/NetworkPage';

const BaseHome = createStackNavigator({
    Home: { screen: App },
    PropsPage: {screen: PropsPage},
    StatePage:{screen:StatePage},
    MainPage:{screen:MainPage},
    StylePage:{screen:StylePage},
    LayoutPage:{screen:LayoutPage},
    FlexDirection:{screen:FlexDirection},
    JustifyContent:{screen:JustifyContent},
    AignItems:{screen:AignItems},
    MyNetworkPage:{screen:MyNetworkPage}
},{
    headerMode: 'none',
});

AppRegistry.registerComponent('AwesomeProject2', () => BaseHome);
