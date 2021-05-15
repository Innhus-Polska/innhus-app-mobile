import React from 'react';
import { View } from 'react-native-web';
import TopbarPromo from '../../molecules/Topbar';
import MenuTopMain from '../../molecules/Menu';
import ChatNewMessage from '../../atoms/ChatNewMessage';

class PageNewMessage extends React.Component {
    render() {
        return (
            <View>
                <TopbarPromo />
                <MenuTopMain />
                <ChatNewMessage />
            </View>
        );
    }
}

export default PageNewMessage;
