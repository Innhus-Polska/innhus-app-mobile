import React from 'react';
import { View } from 'react-native-web';
import ProductContent from '../organisms/ProductContent';
import FooterBlock from '../molecules/Footer';

class PageProduct extends React.Component {
    render() {
        return (
            <View>
                <ProductContent />
                <FooterBlock />
            </View>
        );
    }
}

export default PageProduct;
