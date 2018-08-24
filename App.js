/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ToastAndroid
} from 'react-native';

export default class App extends Component<Props> {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
          <View style={styles.button}>
              <Button title="React Navigation" onPress={this.button1Click.bind(this,navigate)}/>
          </View>
          <View style={styles.button}>
              <Button title="props" onPress={this.button2Click.bind(this,navigate)}/>
          </View>
          <View style={styles.button}>
              <Button title="state" onPress={this.button3Click.bind(this,navigate)}/>
          </View>
          <View style={styles.button}>
              <Button title="style" onPress={this.button4Click.bind(this,navigate)}/>
          </View>
          <View style={styles.button}>
              <Button title="FlexLayout" onPress={this.button5Click.bind(this,navigate)}/>
          </View>
          <View style={styles.button}>
              <Button title="NetWork" onPress={this.button6Click.bind(this,navigate)}/>
          </View>
      </View>
    );
  }

  button1Click(navigate){
      navigate('MainPage')
  }

  button2Click(navigate){
      navigate('PropsPage',{name:'Jane'})
  }

  button3Click(navigate){
      navigate('StatePage',{pass:'谢汉杰',word:'123'})
  }

  button4Click(navigate){
      navigate('StylePage');
  }

  button5Click(navigate){
      navigate("LayoutPage");
  }

  button6Click(navigate){
      navigate("MyNetworkPage");
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 40,
  },
  welcome: {
    fontSize: 20,
      textAlign: 'center',
      margin: 10,
  },
  button:{
     margin: 10,
     marginLeft:20,
     marginRight: 20,
     marginBottom: 10,
  },

});
