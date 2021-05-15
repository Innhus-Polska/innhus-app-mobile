import React from 'react';
import { View } from 'react-native-web';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import Checkbox from 'react-custom-checkbox';
import styles from '../../../styles/styles.module.css';
import imageOne from '../../../assets/images/pexels-curtis-adams-5178052.jpg';
import { Button } from '@material-ui/core';

const configContent4 = {
    header: 'Wybierz prefabrykaty domu, które najbardziej Ci się podobają.',
};

class PageConfig4 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value1: { min: 17, max: 91 },
            value2: { min: 37, max: 105 },
        };
    }
    render() {
        return (
            <View>
                <div className="w-100">
                    <img src={imageOne} className={styles.configImage} alt="" />
                    <div className={styles.configSectionInfo}>
                        <div className={styles.configSectionTitle}>Montaż</div>
                        <div className={styles.configPagination}>4/4</div>
                    </div>
                    <div className={styles.configExplain}>{configContent4.header}</div>
                    <div className="w-100 px-5 my-5">
                        <div className={styles.inputCheckboxCarouselLabel}>Materiały</div>
                        <div className={styles.inputCheckboxCarouselUnderLabel}>Krótki opis, co tu można znaleźć</div>
                    </div>
                    <Carousel itemWidth={'auto'} className="mb-2 ml-5">
                        <div className={styles.inputCheckboxCarousel}>
                            <Checkbox
                                checked={true}
                                icon={<div className={styles.checkboxCarousel} />}
                                borderColor="none"
                                borderWidth={0}
                                style={{ overflow: 'hidden' }}
                                label="Kamień szlachetny"
                            />
                        </div>
                        <div className={styles.inputCheckboxCarousel}>
                            <Checkbox
                                checked={true}
                                icon={<div className={styles.checkboxCarousel} />}
                                borderColor="none"
                                borderWidth={0}
                                style={{ overflow: 'hidden' }}
                                label="Drewnochron"
                            />
                        </div>
                        <div className={styles.inputCheckboxCarousel}>
                            <Checkbox
                                checked={true}
                                icon={<div className={styles.checkboxCarousel} />}
                                borderColor="none"
                                borderWidth={0}
                                style={{ overflow: 'hidden' }}
                                label="Coś innego niż wszystko"
                            />
                        </div>
                    </Carousel>
                    <div className="w-100 px-5 my-5">
                        <Button
                            href="/catalog"
                            style={{
                                backgroundColor: '#709799',
                                color: 'white',
                                width: '100%',
                                textTransform: 'unset',
                            }}
                        >
                            Pokaż dom moich marzeń
                        </Button>
                        <Button
                            href="/config/3"
                            style={{
                                color: '#709799',
                                width: '100%',
                                textTransform: 'unset',
                            }}
                        >
                            Wróć do poprzedniego ekranu
                        </Button>
                    </div>
                    <div className="w-100 mb-5">&nbsp;</div>
                    <div className="w-100 mb-5">&nbsp;</div>
                </div>
            </View>
        );
    }
}

export default PageConfig4;
