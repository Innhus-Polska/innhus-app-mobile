import { Typography } from '@material-ui/core';
import { View } from 'react-native-web';
import React, { Component } from 'react';
import styles from '../../styles/styles.module.css';
import Logo from '../../assets/images/logo-innhus.jpg';
import { Accordion } from '@material-ui/core';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ReactComponent as FacebookLogo } from '../../assets/images/icons/facebook.svg';
import { ReactComponent as TwitterLogo } from '../../assets/images/icons/twitter.svg';
import { ReactComponent as InstagramLogo } from '../../assets/images/icons/instagram.svg';
import { ReactComponent as YouTubeLogo } from '../../assets/images/icons/youtube.svg';
import { ReactComponent as LinkedInLogo } from '../../assets/images/icons/linkedin.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(13),
        fontWeight: theme.typography.fontWeightBold,
    },
    logo: {
        maxWidth: 150,
        objectFit: 'cover',
    },
    text: {
        paddingLeft: 15,
        paddingRight: 15,
        fontWeight: theme.typography.fontWeightMedium,
    },
    socials: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 25,
        marginBottom: 25,
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
    },
    channels: {
        marginRight: 18,
    },
    links: {
        fontSize: theme.typography.pxToRem(13),
        fontWeight: theme.typography.fontWeightRegular,
        width: '100%',
        paddingBottom: 10,
    },
    blocklinks: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'left',
    },
}));

export default function FooterBlock() {
    const classes = useStyles();
    return (
        <View style={{ marginBottom: 100 }}>
            <img src={Logo} className={classes.logo} alt="" />
            <small className={classes.text}>
                Innhus to grupa ekspertów i doradców którzy pomogą Ci w zakupie wymarzonego domu. Uczestniczymy w całym
                procesie zakupowym. Otrzymujesz nasze wsparcie na każdym kroku. Dajemy gwarancję i zabezpieczamy twoje
                finanse.
            </small>
            <div className={classes.socials}>
                <a href="" className={classes.channels}>
                    <FacebookLogo />
                </a>
                <a href="" className={classes.channels}>
                    <TwitterLogo />
                </a>
                <a href="" className={classes.channels}>
                    <InstagramLogo />
                </a>
                <a href="" className={classes.channels}>
                    <YouTubeLogo />
                </a>
                <a href="" className={classes.channels}>
                    <LinkedInLogo />
                </a>
            </div>
            <div className={classes.root}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Kategorie linków</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.blocklinks}>
                        <a href="" className={classes.links}>
                            Link stopki
                        </a>
                        <a href="" className={classes.links}>
                            Link stopki
                        </a>
                        <a href="" className={classes.links}>
                            Link stopki
                        </a>
                        <a href="" className={classes.links}>
                            Link stopki
                        </a>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className={classes.heading}>Kategorie linków</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.blocklinks}>
                        <a href="" className={classes.links}>
                            Link stopki
                        </a>
                        <a href="" className={classes.links}>
                            Link stopki
                        </a>
                        <a href="" className={classes.links}>
                            Link stopki
                        </a>
                        <a href="" className={classes.links}>
                            Link stopki
                        </a>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography className={classes.heading}>Kategorie linków</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.blocklinks}>
                        <a href="" className={classes.links}>
                            Link stopki
                        </a>
                        <a href="" className={classes.links}>
                            Link stopki
                        </a>
                        <a href="" className={classes.links}>
                            Link stopki
                        </a>
                        <a href="" className={classes.links}>
                            Link stopki
                        </a>
                    </AccordionDetails>
                </Accordion>
            </div>
        </View>
    );
}
