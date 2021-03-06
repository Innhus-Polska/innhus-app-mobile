import React, { Component, useState } from 'react';
import FilterMobile from './FilterMobile';
import styles from '../../styles/styles.module.css';
import PROPERTIES from '../../utils/data/Properties.json';
import Button from '@material-ui/core/Button';
import Checkbox from 'react-custom-checkbox';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import ListProducts from '../atoms/ListProducts';
import { ReactComponent as SortIcon } from '../../assets/images/icons/shuffle.svg';
import imageOne from '../../assets/images/pexels-curtis-adams-5178052.jpg';
import defaultHome1 from '../../assets/images/default-home-1.png';
import defaultHome2 from '../../assets/images/default-home-2.png';

function CatalogProducts() {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className="w-100 py-3">
            <div className="flex flex-row">
                <input
                    type="text"
                    placeholder="Szukaj wśród projektów"
                    className={styles.searchInput}
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                />
                <FilterMobile />
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row my-3">
                    <div className={styles.searchResult}>2 345 ofert w całej Polsce</div>
                    <div className="flex flex-row ml-auto mr-0">
                        <SortIcon style={{ marginTop: -3, marginRight: 5 }} />
                        <span className={styles.searchResult}>Sortuj</span>
                    </div>
                </div>
                <h5 className="py-2 font-bold">Wybierz swoje ulubione cztery kąty</h5>
                <Carousel itemWidth={'120'} className="my-2">
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
                <h5 className="py-2 font-bold">Przeglądaj realizacje</h5>
            </div>
            <div>
                {PROPERTIES.filter((val) => {
                    if (searchTerm == '') {
                        return val;
                    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val;
                    }
                }).map((PROPERTIES, key) => {
                    return (
                        <div className="w-100 py-2" key={key}>
                            <ListProducts />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CatalogProducts;
