import React, {Component} from 'react';

import {StyleSheet,Text,View,Button} from 'react-native';

export default class NetworkPage extends Component {

    constructor(props){
        super(props);
        this.state={
            data:'还没有数据哦'
        }
    }

    render() {
        return (
            <View>
                <View style={styles.view1}>
                    <Button title="访问网络" onPress={this.getNetData.bind(this)}/>
                    <Text>{this.state.data}</Text>
                </View>
            </View>
        )
    }

    getNetData(){
        fetch("https://www.baidu.com/")
            .then((response)=>response.text())
            .then((responseData=>{
                this.setState({data:responseData});
            })).catch(error => {
                this.setState({data:'网络访问失败了'});
                console.error(error);
            });
    }

}

const styles=StyleSheet.create({
    view1:{
        margin: 10,
    }
});
