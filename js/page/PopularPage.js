/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation';
import NavigationUtil from '../navigator/NavigationUtil';
import DetailPage from './DetailPage';

type Props = {};
export default class PopularPage extends Component<Props> {
    render() {
        const TabNavigate = createMaterialTopTabNavigator({
            PopularTab1:{
                screen:PopularTab,
                navigationOptions:{
                    title:'Tab1',
                },
            },
            PopularTab2:{
                screen:PopularTab,
                navigationOptions:{
                    title:'Tab2',
                },
            }
        });
        const Tab = createAppContainer(TabNavigate);
        return (
            <View style={{flex:1, marginTop:44}}>
                <Tab/>
            </View>
        );
    }
}

class PopularTab extends Component<Props>{
    render() {
        const {tabLabel}=this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>PopularTab</Text>
                <Text onPress={()=>{
                    NavigationUtil.goPage({
                        navigation:this.props.navigation,
                    },'DetailPage')
                }}>跳转到详情页</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
