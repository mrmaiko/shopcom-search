import React from "react";
import { ActivityIndicator, View } from "react-native";
import Styles from "../assets/style/Styles";

export default Loader = (props) => {
  return props.loading ? (
    <View style={Styles.loaderContainer}>
      <View style={Styles.loaderWrapper}>
        <ActivityIndicator
          size="large"
          color="#00a8ca"
          style={Styles.loaderIndicator}
        />
      </View>
    </View>
  ) : null;
};
