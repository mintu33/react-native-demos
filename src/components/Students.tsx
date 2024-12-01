import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react';

const HugeComponent = () => {
    interface Student {
        image: string;
        name: string;
        rollnum: number;
        grade: number;
    }

    const students = [
        {
            image: "https://picsum.photos/200/300?random=1",
            name: "Student1",
            rollnum: 12345,
            grade: 11,
        },
        {
            image: "https://picsum.photos/200/300?random=1",
            name: "Student2",
            rollnum: 18237,
            grade: 11,
        },{
            image: "https://picsum.photos/200/300?random=1",
            name: "Student3",
            rollnum: 92802,
            grade: 11,
        },{
            image: "https://picsum.photos/200/300?random=1",
            name: "Student4",
            rollnum: 12389,
            grade: 11,
        },{
            image: "https://picsum.photos/200/300?random=1",
            name: "Student5",
            rollnum: 72931,
            grade: 11,
        },
    ];

    const renderItem = ({ item }: { item: Student }) => {
        return (
            <View style={styles.studentContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={[styles.name, styles.underlinedText]}>{item.name}</Text>
                <Text style={styles.rollnum}>Rollnum: {item.rollnum}</Text>
                <Text style={styles.grade}>Grade: {item.grade}</Text>
            </View>
        );
    };

    return (
        <View>
            <Text>Flatlist</Text>
            
                <FlatList
                data={students}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        
        </View>
    );
 };

const styles = StyleSheet.create({
    container: {
        flex: 1
      },
    studentContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    image: {
        width: 200,
        height: 300,
        borderRadius: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    underlinedText: {
        fontSize: 18,
        textDecorationLine: 'underline', //Adds underline
    },
    rollnum: {
        fontSize: 16,
        color: '#000',
        marginTop: 5,
    },
    grade: {
        fontSize: 16,
        color: '#000',
        marginTop: 5,
    },
});

export default HugeComponent;