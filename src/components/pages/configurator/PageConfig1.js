import React from 'react';
import { View } from 'react-native-web';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import Checkbox from 'react-custom-checkbox';
import Link from '@material-ui/core/Link';
import styles from '../../../styles/styles.module.css';
import imageOne from '../../../assets/images/pexels-curtis-adams-5178052.jpg';
import imageTwo from '../../../assets/images/pexels-curtis-adams-5178080.jpg';
import imageThree from '../../../assets/images/pexels-naim-benjelloun-2029665.jpg';
import defaultHome1 from '../../../assets/images/default-home-1.png';
import defaultHome2 from '../../../assets/images/default-home-2.png';
import { Button } from '@material-ui/core';

const configContent1 = {
    header: 'Wybierz rodzaj domu, który najbardziej Ci się podoba.',
};

class PageConfig1 extends React.Component {
    render() {
        return (
            <View>
                <div className="w-100">
                    <img src={imageOne} className={styles.configImage} alt="" />
                    <div className={styles.configSectionInfo}>
                        <div className={styles.configSectionTitle}>Typ domu</div>
                        <div className={styles.configPagination}>1/4</div>
                    </div>
                    <div className={styles.configExplain}>{configContent1.header}</div>
                    <Carousel itemWidth={'120'} className="my-4 ml-5">
                        <div className={styles.checkboxCatField}>
                            <img src={defaultHome2} className={styles.checkboxCatImg} />
                            <Checkbox
                                checked={true}
                                icon={<div className={styles.checkboxCategory} />}
                                borderColor="black"
                                borderWidth={3}
                                borderRadius={5}
                                style={{ overflow: 'hidden' }}
                                size={20}
                                label="Dom modułowy"
                            />
                        </div>
                        <div className={styles.checkboxCatField}>
                            <img src={defaultHome2} className={styles.checkboxCatImg} />
                            <Checkbox
                                checked={true}
                                icon={<div className={styles.checkboxCategory} />}
                                borderColor="black"
                                borderWidth={3}
                                borderRadius={5}
                                style={{ overflow: 'hidden' }}
                                size={20}
                                label="Dom prefabrykowany"
                            />
                        </div>
                        <div className={styles.checkboxCatField}>
                            <img src={defaultHome2} className={styles.checkboxCatImg} />
                            <Checkbox
                                checked={true}
                                icon={<div className={styles.checkboxCategory} />}
                                borderColor="black"
                                borderWidth={3}
                                borderRadius={5}
                                style={{ overflow: 'hidden' }}
                                size={20}
                                label="Dom mobilny"
                            />
                        </div>
                        <div className={styles.checkboxCatField}>
                            <img src={defaultHome2} className={styles.checkboxCatImg} />
                            <Checkbox
                                checked={true}
                                icon={<div className={styles.checkboxCategory} />}
                                borderColor="black"
                                borderWidth={3}
                                borderRadius={5}
                                style={{ overflow: 'hidden' }}
                                size={20}
                                label="Dom na wodzie"
                            />
                        </div>
                        <div className={styles.checkboxCatField}>
                            <img src={defaultHome2} className={styles.checkboxCatImg} />
                            <Checkbox
                                checked={true}
                                icon={<div className={styles.checkboxCategory} />}
                                borderColor="black"
                                borderWidth={3}
                                borderRadius={5}
                                style={{ overflow: 'hidden' }}
                                size={20}
                                label="Biuro modułowe"
                            />
                        </div>
                    </Carousel>
                    <div className="w-100 px-5 my-3">
                        <Button
                            href="/config/2"
                            style={{
                                backgroundColor: '#709799',
                                color: 'white',
                                width: '100%',
                                textTransform: 'unset',
                            }}
                        >
                            Przejdź dalej
                        </Button>
                    </div>
                </div>
            </View>
        );
    }
}

export default PageConfig1;
