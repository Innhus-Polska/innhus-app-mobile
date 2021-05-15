import React from 'react';
import { View } from 'react-native-web';
import TopbarPromo from '../../molecules/Topbar';
import MenuTopMain from '../../molecules/Menu';
import ChatInbox from '../../organisms/ChatInbox';

class PageChat extends React.Component {
    render() {
        return (
            <View>
                <TopbarPromo />
                <MenuTopMain />
                <ChatInbox />
            </View>
        );
    }
}

export default PageChat;
