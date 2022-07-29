import { View, Image, Text } from 'react-native';
import { RevenueSeletordata } from '../Data';
import { styles } from '../styles';
import Item from './Item';

const RevenueSelector = () => {
    return (
        <View style={styles.app}>
            <View style={styles.appLeft}>
                <View style={styles.appLeftTop}>
                    <Image
                        source='/assets/Yubi_Logo.svg'
                        accessibilityLabel='logo'
                        resizeMode='contain'
                        style={styles.logo}
                    />
                    <View style={styles.BtnContainer} onPress={() => { }} cursor='pointer'>
                        <Text style={styles.Btn}>Login</Text>
                    </View>
                </View>
                <View style={styles.appLeftBottom}>
                    <Text style={styles.title}>
                        Start your bowrrowing journey with Yubi
                    </Text>
                </View>
            </View>
            <View style={styles.appRight}>
                <View style={styles.appRightBox}>
                    <Text style={styles.BoxTitle}>
                        All-in-one debt Marketplace!
                    </Text>
                    <View style={styles.ItemsContainer}>
                        {
                            RevenueSeletordata.map((item, i) => (
                                <Item item={item} key={i} />
                            ))
                        }
                    </View>
                </View>
            </View>
        </View>
    )
};

export default RevenueSelector;
