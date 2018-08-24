import React, {Component} from 'react';

import {StyleSheet, Text, View,Button} from 'react-native';

export default class LayoutPage extends Component<Props>{

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View >
                <Text>FlexLayout</Text>
                <Text>flexDirection</Text>
                <Text>在组件的style中指定flexDirection可以决定布局的主轴。子元素是应该沿着水平轴(row)方向排列，
                    还是沿着竖直轴(column)方向排列呢？默认值是竖直轴(column)方向。</Text>
                <View style={styles.button}>
                    <Button title="demo" onPress={this.onClickView1.bind(this,navigate)}/>
                </View>
                <Text>justifyContent</Text>
                <Text>在组件的 style 中指定justifyContent可以决定其子元素沿着主轴的排列方式。
                    子元素是应该靠近主轴的起始端还是末尾段分布呢？亦或应该均匀分布？对应的这些可选项有：
                    flex-start、center、flex-end、space-around、space-between以及space-evenly。</Text>
                <View style={styles.button}>
                    <Button title="demo" onPress={this.onClickView2.bind(this,navigate)}/>
                </View>
                <Text>justifyContent</Text>
                <Text>
                    在组件的 style 中指定justifyContent可以决定其子元素沿着主轴的排列方式。子元素是应该靠近主轴的起始端还是末尾段分布呢？
                    亦或应该均匀分布？对应的这些可选项有：flex-start、center、flex-end、
                    space-around、space-between以及space-evenly
                </Text>
                <View style={styles.button}>
                    <Button title="demo" onPress={this.onClickView3.bind(this,navigate)}/>
                </View>
            </View>
        );
    }

    onClickView1(navigate){
        navigate("FlexDirection");
    }

    onClickView2(navigate){
        navigate("JustifyContent");
    }

    onClickView3(navigate){
        navigate("AignItems");
    }

}

const styles=StyleSheet.create({
    button:{
        margin: 10
    }
});
