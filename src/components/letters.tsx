import React from 'react';
import {View, Text, Stylesheet, TouchableOpacity, Image} from 'react-native';

export interface LetterCardProp {
    letra: string;
    imagem?: string;
    onPress: () => void;
}

export default function LetterCard({letra, imagem, onPress}: LetterCardProp) {
    return (
        <TouchableOpacity
        style={Stylesheet.card}
        onPress={onPress}
        activeOpacity={0.7}
        >
            <View style={Stylesheet.imageContainer}>
                { imagem ? (
                    <Image 
                        source={{ uri: imagem }}
                        style={Stylesheet.image}
                        resizeMode="contain"
                    />
                ) : (
                    <Text style={Stylesheet.placeholderText}> {letra} </Text>
                )
                )}
            </View>
        </TouchableOpacity>
    )
}