import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  FlatList,
  SafeAreaView,
  View,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import Styles, {
  WIDTH,
  HEIGHT,
  PADDING,
  MAX_HEIGHT,
  MAX_WIDTH,
} from "../assets/style/Styles";
import { GET_ALL_PRODUCTS } from "./Services";
import he from "he";

export default function List({ route, navigation }) {
  const [product, setProduct] = useState(route.params.products);
  const [canSearch, setCanSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const truncate = (string, limit) => {
    if (string.length <= limit) {
      return string;
    }
    return string.slice(0, limit) + "...";
  };
  const onTextEnter = (val) => {
    setSearchTerm(val);
  };
  const productSearch = () => {
    if (canSearch) {
      GET_ALL_PRODUCTS(searchTerm);
    }
  };
  useEffect(() => {
    if (searchTerm.length > 3) {
      setCanSearch(true);
    } else {
      setCanSearch(false);
    }
  }, [searchTerm]);

  return (
    <SafeAreaView style={[Styles.container]}>
      <View style={[Styles.listContainer]}>
        <FlatList
          data={product}
          renderItem={({ item }) => (
            <View style={Styles.productCard}>
              <View style={Styles.productCardInner}>
                {item.image.sizes[0] ? (
                  <Image
                    source={{ uri: item.image.sizes[0].url }}
                    style={Styles.productCardImage}
                  />
                ) : null}
                <View style={Styles.productCardRight}>
                  <Text style={Styles.productCardTitle}>
                    {truncate(he.decode(item.name), 55)}
                  </Text>
                  <View style={Styles.productCardDetail}>
                    <Text style={Styles.productCardPrice}>
                      {he.decode(item.maximumPriceString)}
                    </Text>
                  </View>
                  <View style={Styles.productCardButtonContainer}>
                    <Pressable
                      style={Styles.productCardButton}
                      onPress={() =>
                        navigation.navigate("ProductDetail", { id: item.id })
                      }
                    >
                      <Text style={Styles.productCardButtonText}>
                        See Details
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
