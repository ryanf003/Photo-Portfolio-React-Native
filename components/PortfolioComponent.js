import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { ALBUMS } from '../shared/albums';

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            albums: ALBUMS
        };
    }

    static navigationOptions = {
        title: 'Portfolio'
    }


    render() {
        const { navigate } = this.props.navigation;
        const renderPortfolioItem = ({item}) => {
            return (
                <Tile
                    title={item.name}
                    imageSrc={item.imageL}
                    caption={item.date}
                    featured
                    onPress={() => navigate('AlbumContents', {albumId: item.id})}
                />
            );
        };

        return (
            <FlatList
                data={this.state.albums}
                renderItem={renderPortfolioItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Portfolio;