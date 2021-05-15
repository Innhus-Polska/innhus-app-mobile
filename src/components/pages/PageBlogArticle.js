import React from 'react';
import { View } from 'react-native-web';
import BlogContent from '../organisms/BlogContent';
import FooterBlock from '../molecules/Footer';

class PageBlogArticle extends React.Component {
    render() {
        return (
            <View>
                <BlogContent />
                <FooterBlock />
            </View>
        );
    }
}

export default PageBlogArticle;
