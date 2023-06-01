import { Link } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import LinkButton from '../components/LinkButton';
import BackButton from '../components/BackButton';
import { useNavigation } from '@react-navigation/native';


function AccountSettings(props) {
    // const options = [
    //     { id: 1, label: 'Account', goTo: 'Account' },
    //     { id: 2, label: 'Settings', goTo: 'Settings' },
    //     { id: 3, label: 'Notifications', goTo: 'Notifications' },
    //     { id: 4, label: 'Storage and Data', goTo: 'StorageAndData' },
    //     { id: 5, label: 'Help', goTo: 'Help' },
    //     // Add more options as needed
    // ];
    const options = [
        { id: 1, label: 'Account', goTo: 'Login' },
        { id: 2, label: 'Settings', goTo: 'Login' },
        { id: 3, label: 'Notifications', goTo: 'Login' },
        { id: 4, label: 'Storage and Data', goTo: 'Login' },
        { id: 5, label: 'Help', goTo: 'Login' },
        // Add more options as needed
    ];

    const renderOption = ({ item }) => (
        <Text style={styles.option}>{item.label}</Text>
    );

    const navigation = useNavigation()

    return (
        <View style = {{flex:1}}><BackButton 
        onPress={() => navigation.goBack()}
        color ='black'/>
        <View style={styles.container}>
            
            <Text style={styles.title}>
                Account Settings
            </Text>
            {/* <Text style={styles.name}>
                Oscar Liu
            </Text>
            <Text style={styles.descr}>
                Realtor At San Luis Obispo Realty
            </Text> */}
            <View style={styles.profileContainer}>
                <Image
                    source={require('../assets/avatar-1577909.png')} // Replace with the actual image source
                    style={styles.profileImage}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>Oscar Liu</Text>
                    <Text style={styles.descr}>
                        Realtor At San Luis Obispo Realty
                    </Text>
                </View>
            </View>
            <FlatList
                data={options}
                renderItem={({ item }) => (
                    <LinkButton
                        text={item.label}
                        color="black"
                        goTo={item.goTo}
                        fontSize={16}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.optionsContainer}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        marginTop: '10%',
    },
    name: {
        textAlign: 'left',
        fontSize: 16,
        marginTop: '2%',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start', // Align the content to the top left
        marginTop: '5%',
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25, // Make it a circular image by setting borderRadius to half of width and height
        marginRight: 10,
    },
    textContainer: {
        flexDirection: 'column',
    },
    descr: {
        fontSize: 12,
    },
    optionsContainer: {
        alignItems: 'center',
        marginTop: '20%',
    },
    separator: {
        height: 10, // Adjust the desired padding height between LinkButtons
    },
});

export default AccountSettings;
