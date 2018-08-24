import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class StatePage extends React.Component<Props>{
    constructor(props){
        super(props);
        this.state={
            name:'Jack',
        };
    }

    render() {
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>{params.pass}</Text>
                <Text>{params.word}</Text>
                <Text>{this.state.name}</Text>
                <View style={styles.button}>
                    <Button title="改变state的值，刷新页面" onPress={this.buttonClick.bind(this)}/>
                </View>
            </View>
        )
    }

    buttonClick() {
        this.setState({name: "HelloJack"});
    }

}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop: 40,
    },
    button:{
       margin: 10,
    },
});

