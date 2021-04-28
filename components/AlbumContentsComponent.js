import React, { Component } from 'react';
import { FlatList, Modal, ScrollView, StyleSheet, Dimensions, Text, View, Image } from 'react-native';
import { Tile, Icon } from 'react-native-elements';
import { ALBUMS } from '../shared/albums';
import { CONTENTS } from '../shared/contents';

class AlbumContents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            albums: ALBUMS,
            contents: CONTENTS,
            modalVisible: false,
            modalImage: ''
        };
    }

    static navigationOptions = () =>( {
        headerRight: <Icon
                name='heart'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                
            />
    })

    setModalVisible(visible, image) {
            
            this.setState({ modalImage: image });
        
            this.setState({ modalVisible: visible });
        
    }

    toggleModal(){
        this.setState({modalVisible: !this.state.modalVisible})
    }

    render() {
        
        const albumId = this.props.navigation.getParam('albumId');
        const album = this.state.contents.filter(content => content.albumId === albumId);
        
        
        const renderAlbum = ({item}) => {
            return (
                <Tile
                    imageSrc={item.image}
                    featured
                    onPress={() => this.setModalVisible(true, item.image)}
                />
            );
        }
        
        return (
            <ScrollView>
                <FlatList
                    data={album}
                    renderItem={renderAlbum}
                    keyExtractor={item => item.id.toString()}
                />
                <Modal 
                    style={styles.modal} animationType={'fade'}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => this.toggleModal()}
                >
                    <View style={styles.modal}>
                        <Text
                            style={styles.text}
                            onPress={() => {this.setModalVisible(false)}}
                        >
                            Close
                        </Text>
                        <Image 
                            source={this.state.modalImage} 
                            style={styles.image}
                        />
                    </View>
                </Modal>
            </ScrollView>
              
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: '#fff'
    },
    modal: {
      flex: 1,
      padding: 40,
      backgroundColor: 'rgba(0,0,0, 0.9)'
    },
    text: {
      color: '#fff'
    },
    title: {
      alignSelf: 'center',
      fontSize: 30,
      fontStyle: 'italic'
    },
    image: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        resizeMode: 'center'
    },
    stackIcon: {
        marginLeft: 10,
        marginRight: 10,
        color: '#fff',
        fontSize: 24
    }
  });

export default AlbumContents;