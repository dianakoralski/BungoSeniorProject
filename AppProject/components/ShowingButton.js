import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ShowingButton = ({ address, mlsNumber, goTo }) => {
    const navigation = useNavigation();

    return (
        <Pressable
            style={styles.container}
            onPress={() => navigation.navigate(goTo)}
        >
            <Image
                source={require('../assets/house-2492054_1280.png')}
                style={styles.image}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.address}>{address}</Text>
                <Text style={styles.mlsNumber}>MLS #{mlsNumber}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e9e9e9',
        padding: 10,
        borderRadius: 10, // Update the border radius to make the button rounded
        marginBottom: 10,
        marginLeft: 10, // Add margin on the left side
        marginRight: 10, // Add margin on the right side
    },
    image: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
    },
    address: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    mlsNumber: {
        fontSize: 14,
        color: '#666666',
    },
});

export default ShowingButton;
