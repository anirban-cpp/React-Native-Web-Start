import React from 'react'
import { View, Text } from 'react-native'
import { ItemStyles } from '../styles'

const Item = (props) => {
    const { icon, title, subtitle } = props.item
    return (
        <View style={ItemStyles.itemContainer}>
            {icon}
            <View style={ItemStyles.textContainer}>
                <Text style={ItemStyles.title}>{title}</Text>
                <Text style={ItemStyles.subtitle}>{subtitle}</Text>
            </View>
        </View>
    )
}

export default Item