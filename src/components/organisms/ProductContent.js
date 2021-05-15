import { Typography } from '@material-ui/core';
import { View } from 'react-native-web';
import Button from '@material-ui/core/Button';
import imageOne from '../../assets/images/pexels-curtis-adams-5178052.jpg';
import imageTwo from '../../assets/images/pexels-curtis-adams-5178080.jpg';
import imageThree from '../../assets/images/pexels-naim-benjelloun-2029665.jpg';
import React, { Component } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import styles from '../../styles/styles.module.css';
import { ReactComponent as OptionIcon } from '../../assets/images/icons/basketball.svg';
import { ReactComponent as ArrowDown } from '../../assets/images/icons/chevron-down.svg';
import CountUp from 'react-countup';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import ProductOpinion from '../atoms/ProductOpinion';
import ProductOcassion from '../atoms/ProductOcassion';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        backgroundColor: '#F2F2F2',
        borderRadius: 12,
        fontFamily: 'Poppins',
    },
    selectControl: {
        backgroundColor: '#F2F2F2',
        borderRadius: 12,
        fontFamily: 'Poppins',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const btn3dwalk = {
    backgroundColor: 'black',
    color: 'white',
    textTransform: 'unset',
    textAlign: 'center',
    borderRadius: 5,
    padding: '10px 10px 10px 10px',
    boxShadow: '0px 0px 15px rgba(0,0,0,0.15)',
    marginTop: -205,
};

const dataProduct = {
    name: 'Dom modułowy willa z basenem',
    from: 'od',
    to: '',
    price: '24 598',
    currency: 'PLN',
    square: '62',
    priceSquare: '7.984,00 ',
    option1: '152 m2 - 186 m2',
    option2: 'Mój producent',
    option3: 'od 7.984,00 zł/m2',
    option4: 'Model A',
    descriptionText:
        'Ursus Factory 6 to kolejny etap inwestycji przy ul. Posag 7 Panien, realizowany w dynamicznie rozwijającej się części Ursusa. Ta dawniej przemysłowa okolica od kilku lat zmienia swój charakter, przekształcając się w nowoczesną i przyjazną strefę mieszkalną. Obecnie dzielnica cieszy się ogromnym zainteresowaniem zarówno wśród młodych rodzin, jak i szukających komfortowego miejsca do życia singli.',
};

const pageContent = {
    descriptionTitle: 'Opis produktu',
    walk3d: 'Obejrzyj spacer 3D',
    opinionTitle: 'Zobacz opinie',
    opinionResumeLabel1: 'średnia ocena',
    opinionResumeLabel2: 'opinii',
    vendorTitle: 'O producencie',
    vendorText:
        'Ursus Factory 6 to kolejny etap inwestycji przy ul. Posag 7 Panien, realizowany w dynamicznie rozwijającej się części Ursusa. Ta dawniej przemysłowa okolica od kilku lat zmienia swój charakter, przekształcając się w nowoczesną i przyjazną strefę mieszkalną. Obecnie dzielnica cieszy się ogromnym zainteresowaniem zarówno wśród młodych rodzin, jak i szukających komfortowego miejsca do życia singli.',
    ocassionTitle: 'Zobacz specjalne okazje',
};

export default function ProductContent() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <View>
            <div className="w-100">
                <Carousel>
                    <img src={imageOne} className={styles.productImage} alt="" />
                    <img src={imageTwo} className={styles.productImage} alt="" />
                    <img src={imageThree} className={styles.productImage} alt="" />
                </Carousel>
            </div>
            <div className="px-4 py-6 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <h3 className={styles.productTitle}>{dataProduct.name}</h3>
                <p className={styles.productSubtitle}>
                    {dataProduct.from} {dataProduct.price} {dataProduct.currency}
                </p>
                <p className={styles.productSubtitle}>
                    {dataProduct.square} m<sup>2</sup> / {dataProduct.from} {dataProduct.priceSquare}
                    {dataProduct.currency}
                </p>
                <div className="grid grid-cols-2 gap-0 mt-4 mb-3">
                    <div className="flex flex-row items-center mb-2">
                        <OptionIcon className={styles.optionIcon} />
                        <p className={styles.productOptions}>{dataProduct.option1}</p>
                    </div>
                    <div className="flex flex-row items-center mb-2">
                        <OptionIcon className={styles.optionIcon} />
                        <p className={styles.productOptions}>{dataProduct.option2}</p>
                    </div>
                    <div className="flex flex-row items-center mb-2">
                        <OptionIcon className={styles.optionIcon} />
                        <p className={styles.productOptions}>{dataProduct.option3}</p>
                    </div>
                    <div className="flex flex-row items-center mb-2">
                        <OptionIcon className={styles.optionIcon} />
                        <p className={styles.productOptions}>{dataProduct.option4}</p>
                    </div>
                </div>
            </div>
            <div className={styles.productDescription}>
                <h4 className={styles.productTitle}>{pageContent.descriptionTitle}</h4>
                <p className={styles.productText}>{dataProduct.descriptionText}</p>
            </div>
            <div className="w-100 text-center">
                <img src={imageOne} className={styles.walk3d} alt="" />
                <Button style={btn3dwalk}>{pageContent.walk3d}</Button>
            </div>
            <div className="w-100 px-3">
                <h4 className={styles.productTitle}>{pageContent.opinionTitle}</h4>
                <div className="grid grid-cols-12 gap-0">
                    <div className="col-span-3">
                        <div className={styles.opinionResume}>
                            <CountUp end={4.6} />
                        </div>
                        <p className={styles.opinionResumeLabel}>{pageContent.opinionResumeLabel1}</p>
                    </div>
                    <div className="col-span-3">
                        <div className={styles.opinionResume}>
                            <CountUp end={164} />
                        </div>
                        <p className={styles.opinionResumeLabel}>{pageContent.opinionResumeLabel2}</p>
                    </div>
                    <div className="col-span-1" />
                    <div className="col-span-5">
                        <FormControl variant="filled" className={classes.formControl}>
                            <InputLabel id="sort-opinions-label">Sortuj</InputLabel>
                            <Select
                                className={classes.selectControl}
                                labelId="sort-opinions-label"
                                id="sort-opinions"
                                value={age}
                                onChange={handleChange}
                                IconComponent={() => <ArrowDown />}
                            >
                                <MenuItem value={10}>Najnowsze</MenuItem>
                                <MenuItem value={20}>Popularne</MenuItem>
                                <MenuItem value={30}>Najstarsze</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="col-span-12">
                    <ProductOpinion />
                    <ProductOpinion />
                    <ProductOpinion />
                </div>
            </div>
            <div className={styles.productDescription}>
                <h4 className={styles.productTitle}>{pageContent.vendorTitle}</h4>
                <p className={styles.productText}>{pageContent.vendorText}</p>
            </div>
            <div className="w-100 px-3 mt-5">
                <h4 className={styles.productTitle}>{pageContent.ocassionTitle}</h4>
                <ProductOcassion />
                <ProductOcassion />
                <ProductOcassion />
            </div>
        </View>
    );
}
