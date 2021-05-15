import React from 'react';
import { View } from 'react-native-web';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import CardOffer from '../molecules/cardOffer';
import CardArticle from '../molecules/CardArticle';
import Button from '@material-ui/core/Button';
import ProductOcassion from '../atoms/ProductOcassion';
import styles from '../../styles/styles.module.css';
import PROPERTIES from '../../utils/data/Properties.json';

const pagination = {
    marginLeft: 20,
    marginRight: 20,
};

const showMore = {
    backgroundColor: '#709799',
    color: 'white',
    borderRadius: 10,
    width: 150,
    margin: '0 auto',
    textTransform: 'unset',
};

class ContentHome extends React.Component {
    render() {
        return (
            <View style={pagination}>
                <h5 className="pb-2 font-bold">Najnowsze realizacje</h5>
                <Carousel itemWidth={'300'}>
                    <CardOffer />
                    <CardOffer />
                    <CardOffer />
                </Carousel>
                <div className="w-100 mt-5">
                    <h4 className={styles.productTitle}>Te oferty mogą Ciebie zainteresować</h4>
                    {PROPERTIES.map((val, key) => {
                        return (
                            <div key={key}>
                                <ProductOcassion />
                            </div>
                        );
                    })}
                </div>
                <h5 className="mt-4 pb-3 font-bold">Blog</h5>
                <Carousel itemWidth={'240'}>
                    <CardArticle />
                    <CardArticle />
                    <CardArticle />
                </Carousel>
                <View>
                    <Button style={showMore}>Zobacz więcej</Button>
                </View>
                <h5 className="mt-4 pb-3 font-bold">Poradniki</h5>
                <Carousel itemWidth={'240'}>
                    <CardArticle />
                    <CardArticle />
                    <CardArticle />
                </Carousel>
            </View>
        );
    }
}

export default ContentHome;
