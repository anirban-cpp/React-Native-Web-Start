import React from 'react'
import { Image, View } from 'react-native'
import { Vector1Styles } from '../styles'

const Vector = () => (
    <View style={Vector1Styles.imgContainer}>
        <Image source="/assets/vectors/Rectangle.svg" resizeMode='contain' style={Vector1Styles.imageBackground} accessibilityLabel='Credit-facilitated' />
        <Image source="/assets/vectors/vector1/Vectori11.svg" resizeMode='contain' style={Vector1Styles.image1} accessibilityLabel='Credit-facilitated' />
        <Image source="/assets/vectors/vector1/Vectori12.svg" resizeMode='contain' style={Vector1Styles.image2} accessibilityLabel='Credit-facilitated' />
        <Image source="/assets/vectors/vector1/Vectori13.svg" resizeMode='contain' style={Vector1Styles.image3} accessibilityLabel='Credit-facilitated' />
        <Image source="/assets/vectors/vector1/Vectori14.svg" resizeMode='contain' style={Vector1Styles.image4} accessibilityLabel='Credit-facilitated' />
    </View>
)

export default Vector