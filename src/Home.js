import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, View, TextInput, Pressable } from "react-native";
import Styles, { Logo } from "../assets/style/Styles";
import { GET_ALL_PRODUCTS } from "./Services";
import Loader from "./Loader";
import { FontAwesome } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [canSearch, setCanSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showInput, setShowInput] = useState(true);
  const [loading, setLoading] = useState(false);

  const onTextEnter = (val) => {
    setSearchTerm(val);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setShowInput(true);
    });

    return unsubscribe;
  }, [navigation]);
  const productSearch = () => {
    if (canSearch) {
      setLoading(true);
      GET_ALL_PRODUCTS(searchTerm)
        .then((response) => response.json())
        .then((result) => {
          if (result.products.length > 0) {
            setShowInput(false);
            navigation.navigate("List", {
              products: result.products,
            });
            setSearchTerm("");
          } else {
            alert("No Products found");
          }
          setLoading(false);
        })
        .catch((error) => setLoading(false));
    }
  };
  useEffect(() => {
    if (searchTerm.length > 2) {
      setCanSearch(true);
    } else {
      setCanSearch(false);
    }
  }, [searchTerm]);

  if (loading) {
    return <Loader loading={loading} />;
  }
  return (
    <View style={Styles.container}>
      <Logo />

      <View style={[Styles.inputWrapper, !showInput ? { opacity: 0 } : null]}>
        <TextInput
          style={Styles.textInput}
          onChangeText={(e) => onTextEnter(e)}
          placeholder="Product Search"
        />
        <Pressable
          onPress={productSearch}
          style={[Styles.buttonStyle, canSearch ? null : Styles.buttonDisabled]}
        >
          <View style={Styles.buttonInner}>
            <View>
              <FontAwesome
                name="search"
                size={18}
                color="white"
                style={Styles.buttonIcon}
              />
            </View>
            <Text style={Styles.buttonText}>Search</Text>
          </View>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
