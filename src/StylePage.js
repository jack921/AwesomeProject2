import React, {Component} from 'react';

import {StyleSheet, Text, View} from 'react-native';

export default class StylePage extends Component<Props>{

    render(){
        return(
            <View>
                <Text style={styles.text1}>HelloJack</Text>
                <Text style={styles.text2}>Jack921</Text>
                <Text style={styles.text3}>谢汉杰</Text>
            </View>
        );
    }

}

const styles=StyleSheet.create({
    text1:{
        color:"#DB7093",
        fontSize:10
    },
    text2:{
        color:"#DDA0DD",
        fontSize:15
    },
    text3:{
        color:"#800080",
        fontSize:20
    }
});

