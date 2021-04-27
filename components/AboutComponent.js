import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
/*import * as Animatable from 'react-native-animatable';*/

class About extends Component {
    static navigationOptions = {
        title: 'About Me'
    };
    
    render() {
        return (
            <Card
                title= "Ryan Fernandez"
                wrapperStyle={{margin: 20}}>
                <Image 
                    source={require('./images/AboutPFP3.jpg')}
                    style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>I'm an amateur photographer, based in California.</Text>
                    <Text style={styles.text}>I am mostly self taught with some supplementary photography classes in high school and college. </Text>
                    <Text style={styles.text}>I work with a Sony a7rIII and enjoy a wide range of photography genres, including automotive, street, and landscapes.</Text>
                </View>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    
    image: {
        width: '100%',
        height: '50%',
        
    },
    text : {
        fontWeight : '600',
        fontSize : 16,
        marginBottom: 10
    }
})

export default About;