
export default class NavigationUtil {
    /*
    * 返回上一页
    * @navigation
    * */
    static goPage(params,page) {
        const navigation = NavigationUtil.navigation;
        if (!navigation) {
            console.log('NavigationUtil.navigation can not be null');
        }
        navigation.navigate(
            page,
            {
                ...params
            }
        );
    }
    /*
    * 返回上一页
    * @navigation
    * */
    static goBack(navigation) {
        navigation.navigate('Main');
    }
    /*
    * 重置到首页
    * */
    static resetToHomePage(params) {
        const {navigation}=params;
        navigation.navigate('Main');
    }

}