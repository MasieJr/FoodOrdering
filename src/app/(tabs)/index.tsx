import { StyleSheet, Image } from 'react-native';
import Colors from '../../constants/Colors';
import products from "../../../assets/data/products"

import EditScreenInfo from '@/src/components/EditScreenInfo';
import { Text, View} from '@/src/components/Themed';


const product = products[1];

export default function TabOneScreen() {
  return (
    <View style={styles.container} >
      <Image source={{ uri: product.image}} style={styles.image} />
     <Text style={styles.title}>{product.name}</Text>
     <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,

  },
  image:{
    width: '100%',
    aspectRatio: 1,
  }
});