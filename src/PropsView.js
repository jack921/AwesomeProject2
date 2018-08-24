import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ToastAndroid
} from 'react-native';

export default class PropsView extends React.Component<Props>{

    render() {
        return(
            <View>
                <Text>{this.props.name}</Text>
            </View>
        );
    }

}

