import products from "../../../assets/data/products"

import ProductListItem from '@/src/components/productListItem';
import { View} from '@/src/components/Themed';

export default function MEnuScreen() {
  return (
    <View>
      <ProductListItem product={products[0]} />
      <ProductListItem product={products[1]}/>
    </View>
  )
}
