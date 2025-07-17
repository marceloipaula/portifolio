import React from 'react';
import { View, Text, FlatList, Button, Image, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Profile from '../../../assets/profile.png'
import { styles } from './styles'

type Review = {
    id: string;
    skill: string;
    rating: number; // de 1 a 5
    comment: string;
};

const reviews: Review[] = [
    { id: '1', skill: 'HTML', rating: 5, comment: 'Excelente!' },
    { id: '2', skill: 'CSS', rating: 4, comment: 'Cada vez melhor!' },
    { id: '3', skill: 'JAVASCRIPT', rating: 3, comment: 'Decolando...' },
    { id: '4', skill: 'REACT NATIVE', rating: 3, comment: 'Entusiasmado!!!' },
];

export function Skills() {

    const renderStars = (rating: number) => {
        return (
            <View style={{ flexDirection: 'row' }}>
                {[...Array(5)].map((_, i) => (
                    <FontAwesome
                        key={i}
                        name={i < rating ? 'star' : 'star-o'}
                        size={20}
                        color="#FFD700"
                        style={{ marginRight: 2 }}
                    />
                ))}
            </View>
        );
    };

    const renderItem = ({ item }: { item: Review }) => (
        <View style={styles.reviewItem}>
            <Text style={styles.skill}>{item.skill}</Text>
            {renderStars(item.rating)}
            <Text style={styles.comment}>{item.comment}</Text>
        </View>
    );

    const handleCall = () => { Linking.openURL('https://wa.me/+55(24)99928-4342?text=Ola, gostei do seu portifolio...')}
    return (
        <View style={styles.container}>
            <Image style={styles.img}
                            source={Profile}
                        />
            <Text style={styles.textName}>MARCELO I. DE PAULA</Text>
            <Text style={styles.title}>Minhas habilidades</Text>
            <FlatList
                data={reviews}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
            />
            <Button title="FALA COMIGO" onPress={handleCall}/>
        </View>
    )
}

