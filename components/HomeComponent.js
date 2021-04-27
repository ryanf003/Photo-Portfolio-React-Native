import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { Card } from 'react-native-elements'
import { ALBUMS } from '../shared/albums';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: ALBUMS
        }
    }
    static navigationOptions = {
        title: 'Home'
    }

    render() {
        const { navigate } = this.props.navigation;
        const featuredAlbums = this.state.albums.filter(album => album.featured)

        const renderFeaturedAlbums = ({item}) => {
            return (
                <TouchableWithoutFeedback
                    onPress={ () => {
                        navigate('AlbumContents', {albumId: item.id});
                        /*navigation.setOptions({ title: item.name });*/
                        
                    }}
                >
                    <Card
                        featuredTitle={item.name}
                        image={item.imageL}
                    >
                        <Text style={{margin: 10, textAlign: 'center'}}>
                            {item.date}
                        </Text>
                    </Card>
                </TouchableWithoutFeedback>
            );
        };

        return (
            <ScrollView>
                <View style={{marginTop: 5}}>
                    <Text style={styles.header}>
                        Featured Albums
                    </Text>
                </View>
                <View style={{margin: 10}}>
                    <FlatList
                        data={featuredAlbums}
                        renderItem={renderFeaturedAlbums}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default Home;