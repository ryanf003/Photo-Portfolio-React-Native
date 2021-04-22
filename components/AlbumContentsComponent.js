import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { ALBUMS } from '../shared/albums';
import { CONTENTS } from '../shared/contents';

class AlbumContents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            albums: ALBUMS,
            contents: CONTENTS
        };
    }

    static navigationOptions = {
        title: 'Campsite Information'
    }

    render() {
        
        const albumId = this.props.navigation.getParam('albumId');
        const album = this.state.contents.filter(content => content.albumId === albumId);
        
        const renderAlbum = ({item}) => {
            return (
                <Tile
                    imageSrc={item.image}
                    featured
                />
            );
        }
        
        return (
            <FlatList
                data={album}
                renderItem={renderAlbum}
                keyExtractor={item => item.id.toString()}
            />
        )
    }
}

export default AlbumContents;