import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import PropsView from'./PropsView';

export default class PropsPage extends React.Component<Props>{
    constructor(props){
        super(props);
    }
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>{params.name}</Text>
                <PropsView  name={params.name}></PropsView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop: 40,
    },
});

