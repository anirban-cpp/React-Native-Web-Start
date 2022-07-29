import React from 'react'
import { Image, View } from 'react-native'
import { Vector2Styles } from '../styles'

const Vector2 = () => {
    return (
        <View style={Vector2Styles.imgContainer}>
            <Image source="/assets/vectors/Rectangle.svg" resizeMode='contain' style={Vector2Styles.imageBackground} accessibilityLabel='Credit-facilitated' />
            <Image source="/assets/vectors/vector2/Vector1.svg" resizeMode='contain' style={Vector2Styles.image1} accessibilityLabel='Credit-facilitated' />
            <Image source="/assets/vectors/vector2/Vector2.svg" resizeMode='contain' style={Vector2Styles.image2} accessibilityLabel='Credit-facilitated' />
            <Image source="/assets/vectors/vector2/Vector3.svg" resizeMode='contain' style={Vector2Styles.image3} accessibilityLabel='Credit-facilitated' />
            <Image source="/assets/vectors/vector2/Vector4.svg" resizeMode='contain' style={Vector2Styles.image4} accessibilityLabel='Credit-facilitated' />
        </View>
    )
}

export default Vector2