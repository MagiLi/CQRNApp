/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import {
    createAppContainer,
    createBottomTabNavigator,
} from 'react-navigation';
import React, {Component} from 'react';
import PopularPage from './PopularPage'
import TrendingPage from './TrendingPage'
import FavoritePage from './FavoritePage'
import MyPage from './MyPage'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import NavigationUtil from "../navigator/NavigationUtil";
import DynamicTabNavigator from "../navigator/DynamicTabNavigator";

const TABS = {
    PopularPage:{
        screen:PopularPage,
        navigationOptions:{
            tabBarLabel:"最热",
            tabBarIcon:({tinColor,focused})=>(
                <MaterialIcons
                    name={'whatshot'}
                    size={26}
                    style={{color: tinColor}}
                />
            )
        }
    },
    TrendingPage:{
        screen:TrendingPage,
        navigationOptions:{
            tabBarLabel:"趋势",
            tabBarIcon:({tinColor,focused})=>(
                <Ionicons
                    name={'md-trending-up'}
                    size={26}
                    style={{color: tinColor}}
                />
            )
        }
    },
    FavoritePage:{
        screen:FavoritePage,
        navigationOptions:{
            tabBarLabel:"收藏",
            tabBarIcon:({tinColor,focused})=>(
                <MaterialIcons
                    name={'favorite'}
                    size={26}
                    style={{color: tinColor}}
                />
            )
        }
    },
    MyPage:{
        screen:MyPage,
        navigationOptions:{
            tabBarLabel:"我的",
            tabBarIcon:({tinColor,focused})=>(
                <Entypo
                    name={'user'}
                    size={26}
                    style={{color: tinColor}}
                />
            )
        }
    },
}

type Props = {};
export default class HomePage extends Component<Props> {
    _tabNavigator() {
        const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;
        const tabs = {PopularPage, TrendingPage, FavoritePage};
        return createBottomTabNavigator(tabs);
    }
    render() {
        NavigationUtil.navigation = this.props.navigation;
        return <DynamicTabNavigator/>;

        const Tab = createAppContainer(this._tabNavigator());
        return <Tab/>;
    }
}

