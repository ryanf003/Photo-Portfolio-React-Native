import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Tile, TouchableOpacity } from 'react-native-elements';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
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
                <TouchableWithoutFeedback
                    onPress={ () => {
                        navigate('AlbumContents', {albumId: item.id});
                        /*navigation.setOptions({ title: item.name });*/
                        
                    }}
                >
                    <Tile
                        title={item.name}
                        imageSrc={item.imageL}
                        caption={item.date}
                        featured
                        

                    />
                </TouchableWithoutFeedback>
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