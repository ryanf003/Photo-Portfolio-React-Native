import React, { Component } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
/*import * as Animatable from 'react-native-animatable';*/
import * as MailComposer from 'expo-mail-composer';

class Contact extends Component {
    static navigationOptions = {
        title: 'Contact Us'
    };

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['ryanfdez3@gmail.com'],
            subject: 'Inquiry',
            body: 'Dear Ryan:'
        })
    }
    
    render() {
        return (
            <ScrollView>
                {/*<Animatable.View animation='fadeInDown' duration={2000} delay={1000}>*/}
                    <Card 
                        title= "Contact Information"
                        wrapperStyle={{margin: 20}}>
                        <Text style={styles.info}>Phone: 1-408-476-9035</Text>
                        <Text style={styles.info}>Email: ryanfdez3@gmail.com</Text>
                        <Button
                            title="Send Email"
                            buttonStyle={{backgroundColor: '#3a3f44', margin: 40}}
                            icon={<Icon
                                name='envelope-o'
                                type='font-awesome'
                                color='#fff'
                                iconStyle={{marginRight: 10}}
                            />}
                            onPress={() => this.sendMail()}
                        />
                    </Card>
                {/*</Animatable.View> */}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    info: {
        fontSize: 16,
        textAlign: 'center'
    }
})

export default Contact;

