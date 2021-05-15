import React from 'react';
import { View } from 'react-native-web';
import TopbarPromo from '../molecules/Topbar';
import MenuTopMain from '../molecules/Menu';
import CatalogOffers from '../organisms/CatalogOffers';
import ContentHome from '../organisms/ContentHome';
import FooterBlock from '../molecules/Footer';

class PageCatalog extends React.Component {
    render() {
        return (
            <View>
                <TopbarPromo />
                <MenuTopMain />
                <CatalogOffers />
                <ContentHome />
                <FooterBlock />
            </View>
        );
    }
}

export default PageCatalog;
