import React from 'react';
import { View } from 'react-native-web';
import TopbarPromo from '../molecules/Topbar';
import MenuTopMain from '../molecules/Menu';
import FooterBlock from '../molecules/Footer';
import SearchFilterTop from '../molecules/SearchFilterTop';
import ContentHome from '../organisms/ContentHome';

class PageHome extends React.Component {
    render() {
        return (
            <View>
                <TopbarPromo />
                <MenuTopMain />
                <SearchFilterTop />
                <ContentHome />
                <FooterBlock />
            </View>
        );
    }
}

export default PageHome;
