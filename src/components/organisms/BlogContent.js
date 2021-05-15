import React, { Component } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import { View } from 'react-native-web';
import styles from '../../styles/styles.module.css';
import imageOne from '../../assets/images/pexels-curtis-adams-5178052.jpg';
import imageTwo from '../../assets/images/pexels-curtis-adams-5178080.jpg';
import imageThree from '../../assets/images/pexels-naim-benjelloun-2029665.jpg';
import ArticleTag from '../atoms/ArticleTag';
import ShareIcons from '../atoms/ShareIcons';
import CardArticle from '../molecules/CardArticle';

const productImage = {
    height: '60vh',
    objectFit: 'cover',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
};

const blogArticle = {
    title: '13 największych bloków w Polsce z okresu PRL-u, które musisz zobaczyć',
    authorName: 'Natalia Kowalska',
    authorPhoto: '../../assets/images/pexels-curtis-adams-5178052.jpg',
    date: '18 lutego 2021 r.',
    tag: 'Architektura',
    facebook: 'https://facebook.com/',
    twitter: 'https://twitter.com/',
    instagram: 'https://instagram.com/',
    tiktok: 'https://tiktok.com/',
    linkedin: 'https://linkedin.com/',
    imageLabel1: 'Podpis zdjęcia, który zaciekawi odbiorcę',
    imageLabel2: 'Podpis zdjęcia, który zaciekawi odbiorcę',
    imageLabel3: 'Podpis zdjęcia, który zaciekawi odbiorcę',
    headline:
        'Budownictwo epoki PRL stawiało na masowość i zaspokojenie potrzeb mieszkaniowych jak największej grupy ludzi. Pod tym względem Polska wcale nie była pionierem. Pomysł masowego budownictwa narodził się we Francji za sprawą działalności Le Corbusiera. Budynki, w których zamieszkiwały ogromne rzesze ludzi istniały jeszcze wcześniej. W Nowym Jorku w epoce masowej imigracji pięciokondygnacyjna kamienica potrafiła mieć nawet 1000 lokatorów. Później rozwinęła się idea „wielkich zespołów mieszkaniowych”.',
    subheader1: '',
    content1:
        'Ogromny blok, usytuowany przy alei Wojciecha Korfantego, powstał według projektu Mieczysława Króla. Przez kilka lat dzierżył palmę pierwszeństwa pod względem liczby mieszkańców. Budynek ciągnie się na długości 187,5 metra. Ma 15 kondygnacji nadziemnych i ukryte w podziemiu garaże na 200 samochodów. Posadowiony jest na żelbetowych filarach, co ma zapobiec niebezpiecznym skutkom podmuchów wiatru i wstrząsów tektonicznych.',
    subheader2: 'Nagłówek, którego nikt się nie spodziewał powraca w wielkim stylu',
    content2:
        'Wstępnie jajka należy pomalować na jeden, wybrany przez nas kolor. Wystarczy umieścić je w naczyniu z barwnikiem. Gdy już wyschną, możemy przystąpić do tworzenia przypominających marmur kolorowych wzorów. W tym celu użyjmy farby akrylowej oraz gumki na czubku ołówka – wystarczy maczać ją w farbie i delikatnie malować po jajku.',
    subheader3: '',
    content3:
        'Innym sposobem jest umieszczenie farby na folii bąbelkowej (jej wypukłej części), a następnie owinięcie nią jajka. Gdy farba już wyschnie, należy pomalować ją lakierem, aby utrwalić efekt.',
    subheader4: '',
    content4:
        'Ogromny blok, usytuowany przy alei Wojciecha Korfantego, powstał według projektu Mieczysława Króla. Przez kilka lat dzierżył palmę pierwszeństwa pod względem liczby mieszkańców. Budynek ciągnie się na długości 187,5 metra. Ma 15 kondygnacji nadziemnych i ukryte w podziemiu garaże na 200 samochodów. Posadowiony jest na żelbetowych filarach, co ma zapobiec niebezpiecznym skutkom podmuchów wiatru i wstrząsów tektonicznych.',
};

export default function BlogContent() {
    return (
        <View>
            <div className="w-100">
                <Carousel>
                    <img src={imageOne} style={productImage} alt="" />
                    <img src={imageTwo} style={productImage} alt="" />
                    <img src={imageThree} style={productImage} alt="" />
                </Carousel>
                <h1 className={styles.blogArticleTitle}>{blogArticle.title}</h1>
            </div>
            <div className="grid grid-cols-12 gap-0 mt-5 px-4 pb-3">
                <div className="col-span-3">
                    <img src={imageTwo} className={styles.userIcon} alt={blogArticle.authorName} />
                </div>
                <div className="col-span-4 grid items-center">
                    <div className="flex flex-col">
                        <div className={styles.blogAuthor}>{blogArticle.authorName}</div>
                        <div className={styles.blogDate}>{blogArticle.date}</div>
                    </div>
                </div>
                <div className="col-span-5 grid justify-items-end items-center">
                    <ArticleTag tag={blogArticle.tag} />
                </div>
            </div>
            <div className={styles.blogHeadline}>{blogArticle.headline}</div>
            <div className="w-100 px-4 py-3">
                <small>Udostępnij</small>
                <ShareIcons social={blogArticle.facebook} socialName="facebook" />
                <ShareIcons social={blogArticle.instagram} socialName="instagram" />
                <ShareIcons social={blogArticle.tiktok} socialName="tiktok" />
                <ShareIcons social={blogArticle.linkedin} socialName="linkedin" />
            </div>
            <div className={styles.productDescription}>
                <h5 className={styles.blogSubheader}>{blogArticle.subheader1}</h5>
                <p className={styles.blogContent}>{blogArticle.content1}</p>
                <h5 className={styles.blogSubheader}>{blogArticle.subheader2}</h5>
                <p className={styles.blogContent}>{blogArticle.content2}</p>
                <h5 className={styles.blogSubheader}>{blogArticle.subheader3}</h5>
                <p className={styles.blogContent}>{blogArticle.content3}</p>
                <div className="w-100">
                    <Carousel itemWidth={'270'}>
                        <div className="flex flex-col mr-4">
                            <img src={imageOne} className={styles.blogPhotoCarousel} alt="" />
                            <p className={styles.imgLabel}>{blogArticle.imageLabel1}</p>
                        </div>
                        <div className="flex flex-col mr-4">
                            <img src={imageTwo} className={styles.blogPhotoCarousel} alt="" />
                            <p className={styles.imgLabel}>{blogArticle.imageLabel1}</p>
                        </div>
                        <div className="flex flex-col mr-4">
                            <img src={imageThree} className={styles.blogPhotoCarousel} alt="" />
                            <p className={styles.imgLabel}>{blogArticle.imageLabel1}</p>
                        </div>
                    </Carousel>
                </div>
                <h5 className={styles.blogSubheader}>{blogArticle.subheader4}</h5>
                <p className={styles.blogContent}>{blogArticle.content4}</p>
            </div>
            <div className="w-100 px-4 py-3">
                <h5 className="mt-4 pb-3 font-bold">Polecane artykuły</h5>
                <Carousel itemWidth={'300'}>
                    <CardArticle />
                    <CardArticle />
                    <CardArticle />
                </Carousel>
            </div>
        </View>
    );
}
