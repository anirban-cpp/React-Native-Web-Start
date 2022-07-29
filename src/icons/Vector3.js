import React from 'react'
import { Image, View } from 'react-native'
import { Vector3Styles } from '../styles'

const Vector3 = () => {
    return (
        <View style={Vector3Styles.imgContainer}>
            <Image source="/assets/vectors/Rectangle.svg" resizeMode='contain' style={Vector3Styles.imageBackground} accessibilityLabel='Credit-facilitated' />
            <Image source="/assets/vectors/vector3/Vector1.svg" resizeMode='contain' style={Vector3Styles.image1} accessibilityLabel='Credit-facilitated' />
            <Image source="/assets/vectors/vector3/Vector2.svg" resizeMode='contain' style={Vector3Styles.image2} accessibilityLabel='Credit-facilitated' />
            <Image source="/assets/vectors/vector3/Vector3.svg" resizeMode='contain' style={Vector3Styles.image3} accessibilityLabel='Credit-facilitated' />
            <Image source="/assets/vectors/vector3/Vector4.svg" resizeMode='contain' style={Vector3Styles.image4} accessibilityLabel='Credit-facilitated' />
            <Image source="/assets/vectors/vector3/Vector5.svg" resizeMode='contain' style={Vector3Styles.image5} accessibilityLabel='Credit-facilitated' />
        </View>
    )
}

export default Vector3