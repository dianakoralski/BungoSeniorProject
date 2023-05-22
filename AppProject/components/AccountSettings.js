import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

function AccountSettings(props) {
    const options = [
        { id: 1, label: 'Account' },
        { id: 2, label: 'Settings' },
        { id: 3, label: 'Notifications' },
        { id: 4, label: 'Storage and Data' },
        { id: 5, label: 'Help' },
        // Add more options as needed
    ];

    const renderOption = ({ item }) => (
        <Text style={styles.option}>{item.label}</Text>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Account Settings
            </Text>
            <Text style={styles.name}>
                Oscar Liu
            </Text>
            <Text style={styles.descr}>
                Realtor At San Luis Obispo Realty
            </Text>
            <FlatList
                data={options}
                renderItem={renderOption}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.optionsContainer}
            />
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
        textAlign: 'center',
        fontSize: 16,
        marginTop: '2%',
    },
    descr: {
        fontSize: 12,
        marginTop: '2%'
    },
    optionsContainer: {
        alignItems: 'center',
        marginTop: '20%',
    },
    option: {
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 10,
    },
});

export default AccountSettings;
