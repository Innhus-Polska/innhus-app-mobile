import { Typography, Button, Link } from '@material-ui/core';
import { View } from 'react-native-web';
import React, { Component } from 'react';
import style from '../../styles/styles.module.css';
import MainLogo from '../../assets/images/logo-innhus.jpg';
import { ReactComponent as NotifyIcon } from '../../assets/images/icons/notify-bell.svg';
import { ReactComponent as ChatIcon } from '../../assets/images/icons/chat-clouds.svg';
import Badge from '@material-ui/core/Badge';
import styles from '../../styles/styles.module.css';

const notifyProps = {
    color: 'secondary',
    children: (
        <Button className={style.menuButtonIcon} href="/notify">
            <NotifyIcon />
        </Button>
    ),
};

const chatProps = {
    color: 'secondary',
    children: (
        <Button className={style.menuButtonIcon} href="/chat/inbox">
            <ChatIcon />
        </Button>
    ),
};
class MenuTopMain extends Component {
    render() {
        return (
            <View>
                <div className="w-100 mt-3">
                    <div class="grid grid-cols-12 gap-0 px-5">
                        <div class="col-span-3 flex flex-col justify-center">
                            <a href="/">
                                <span className={styles.logotype}>Innhus</span>
                            </a>
                        </div>
                        <div class="col-span-5" />
                        <div class="col-span-2 flex flex-col justify-center">
                            <Badge badgeContent={99} {...notifyProps} className={styles.badge} />
                        </div>
                        <div class="col-span-2 flex flex-col justify-center">
                            <Badge badgeContent={2} {...chatProps} className={styles.badge} />
                        </div>
                    </div>
                </div>
            </View>
        );
    }
}

export default MenuTopMain;
