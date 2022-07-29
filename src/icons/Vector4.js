import React from 'react'
import { Image, View } from 'react-native'
import { Vector4Styles } from '../styles'

const Vector4 = () => {
    return (
        <View style={Vector4Styles.imgContainer}>
            <Image source="/assets/vectors/Rectangle.svg" resizeMode='contain' style={Vector4Styles.imageBackground} accessibilityLabel='Credit-facilitated' />
            <Image source="/assets/vectors/vector4/Vector2.svg" resizeMode='contain' style={Vector4Styles.image1} accessibilityLabel='Credit-facilitated' />
            <Image source="/assets/vectors/vector4/Vector3.svg" resizeMode='contain' style={Vector4Styles.image2} accessibilityLabel='Credit-facilitated' />
            <Image source="/assets/vectors/vector4/Vector4.svg" resizeMode='contain' style={Vector4Styles.image3} accessibilityLabel='Credit-facilitated' />
        </View>
    )
}

export default Vector4