import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Share,
  Alert,
  Text,
  SafeAreaView,
  View,
  Pressable,
  ImageBackground,
  ScrollView,
} from "react-native";
import { GET_PRODUCT } from "./Services";
import Loader from "./Loader";
import Styles from "../assets/style/Styles";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import he from "he";
import RenderHtml from "react-native-render-html";

export default function ProductDetail({ route, navigation }) {
  const { id } = route.params;
  const [product, setProduct] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!product && id) {
      GET_PRODUCT(id)
        .then((response) => response.json())
        .then((result) => {
          setProduct(result);
          setLoading(false);
        })
        .catch((error) => setLoading(false));
    }
  }, []);

  const onShare = async (url) => {
    try {
      const result = await Share.share({
        message: url,
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <SafeAreaView style={[Styles.container, { paddingHorizontal: 0 }]}>
      <View style={Styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </Pressable>
      </View>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <View>
          <ImageBackground
            source={{
              uri: product.image.sizes.slice(-1)[0].url,
            }}
            resizeMode={"stretch"}
            style={Styles.productDetailImage}
          ></ImageBackground>

          <Text style={Styles.productDetailTitle}>
            {he.decode(product.name)}
          </Text>
          <ScrollView style={{ paddingBottom: 100 }}>
            <View style={Styles.productDetailDescription}>
              <RenderHtml
                contentWidth={Styles.productDetailDescription.width}
                source={{
                  html: `${product.description
                    .replace(/\\n/g, "<br />")
                    .split("\n")
                    .join("<br />")}`,
                }}
              />
            </View>
          </ScrollView>
        </View>
      )}
      <View style={Styles.footer}>
        <Pressable
          onPress={() => onShare(product.referralPageUrl)}
          style={Styles.buttonStyle}
        >
          <View style={Styles.buttonInner}>
            <View>
              <FontAwesome
                name="share"
                size={18}
                color="white"
                style={Styles.buttonIcon}
              />
            </View>
            <Text style={Styles.buttonText}>Share</Text>
          </View>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
