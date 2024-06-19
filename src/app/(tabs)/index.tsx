import products from "@assets/data/products"
import { FlatList } from "react-native";

import ProductListItem from '@components/productListItem';
// import { View} from '@/components/Themed';

export default function MEnuScreen() {
  return (
    <FlatList 
      data={products}
      renderItem={({ item }) => <ProductListItem product={ item }/> }
      numColumns={2}
      contentContainerStyle={{gap: 10, padding: 10}}
      columnWrapperStyle={{gap: 10}} 
    />
  )
}


