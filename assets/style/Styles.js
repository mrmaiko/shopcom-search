import { StyleSheet, Dimensions, StatusBar } from "react-native";
import { Svg, Circle, Path } from "react-native-svg";

export const WIDTH = Dimensions.get("window").width;
export const HEIGHT = Dimensions.get("window").height;
export const PADDING = 20;
export const MAX_WIDTH = WIDTH - PADDING * 2;
export const MAX_HEIGHT = HEIGHT - PADDING * 2;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f1f7",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: PADDING,
    height: MAX_HEIGHT,
    top: StatusBar.currentHeight,
  },
  loaderContainer: {
    height: HEIGHT,
    width: WIDTH,
    maxHeight: HEIGHT,
    flex: 1,
    justifyContent: "center",
  },
  loaderWrapper: {},
  loaderIndicator: {
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignSelf: "center",
  },
  header: {
    zIndex: 10,
    backgroundColor: "#00a8ca",
    width: WIDTH,
    padding: PADDING / 2,
  },
  logo: {
    width: WIDTH / 3,
    resizeMode: "contain",
    height: WIDTH / 3,
  },
  inputWrapper: {
    alignItems: "center",
  },
  textInput: {
    backgroundColor: "#ffffff",
    borderColor: "#202340",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 40,
    alignSelf: "center",
    marginTop: PADDING * 2,
    width: MAX_WIDTH,
    height: PADDING * 2,
    textAlign: "center",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontFamily: "Roboto",
  },
  buttonStyle: {
    color: "#ffffff",
    elevation: 0,
    backgroundColor: "#414467",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#414467",
    borderRadius: 40,
    height: 40,
    width: MAX_WIDTH,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "bold",
    alignSelf: "center",
  },
  buttonIcon: {
    marginRight: 6,
    justifySelf: "flex-start",
    alignSelf: "center",
  },
  buttonInner: {
    flexDirection: "row",
    width: MAX_WIDTH,
    paddingHorizontal: PADDING / 2,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDisabled: { backgroundColor: "#20234030" },
  listContainer: {
    width: MAX_WIDTH,

    alignSelf: "center",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlign: "center",
  },
  productCard: {
    marginBottom: PADDING / 2,
    width: MAX_WIDTH,
    borderColor: "#dadbe6",
    borderWidth: 0.6,
  },
  productCardInner: {
    flexDirection: "row",

    backgroundColor: "#ffffff",
    padding: PADDING / 2,
  },
  productCardRight: { paddingHorizontal: PADDING / 2 },
  productCardImage: {
    height: 100,
    width: 100,
    marginRight: 5,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
  productCardTitle: {
    color: "#202340",
    fontFamily: "Roboto",
    lineHeight: 18,
    fontSize: 12,
    height: 37,
    width: MAX_WIDTH - (130 + PADDING / 2),
    fontWeight: "600",
  },
  productCardDetail: {
    color: "#202340",
    fontFamily: "Roboto",
    fontSize: 12,
    width: MAX_WIDTH - (130 + PADDING / 2),
    paddingTop: 9,
  },
  productCardPrice: {
    color: "#202340",
    fontFamily: "Roboto",
    fontSize: 12,
    maxWidth: MAX_WIDTH - (130 + PADDING / 2),
    fontFamily: "Roboto",
    fontWeight: "bold",
    paddingBottom: PADDING / 3,
  },
  productCardButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    maxWidth: MAX_WIDTH,
  },
  productCardButton: {
    borderColor: "#414467",
    backgroundColor: "#ffffff",
    borderWidth: 0.5,
    borderRadius: 40,
    paddingVertical: 6,
    paddingHorizontal: 12,
    maxWidth: MAX_WIDTH - (130 + PADDING / 2),
  },
  productCardButtonText: {
    color: "#202340",
    fontFamily: "Roboto",
    fontSize: 12,
    fontWeight: "bold",
  },

  productCardShare: {
    padding: 6,
    fontFamily: "Roboto",
    fontSize: 12,
    flex: 1,
    justifySelf: "flex-end",
    alignSelf: "stretch",
    marginLeft: 20,
  },
  productCardShareText: {
    textAlign: "right",
    color: "#202340",
    fontFamily: "Roboto",
    fontSize: 9,
    opacity: 0.5,
  },
  productDetailTitle: {
    marginTop: 15,
    fontSize: 21,
    lineHeight: 30,
    marginHorizontal: 20,
    fontWeight: "bold",
    color: "black",
  },
  productDetailDescription: {
    marginTop: 15,
    marginHorizontal: 20,
    marginBottom: 100,
    width: MAX_WIDTH,
    lineHeight: 30,
  },
  productDetailImage: {
    zIndex: 1,
    height: 300,
    width: WIDTH,
    backgroundColor: "#545871",
    resizeMode: "contain",
  },
  footer: {
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    paddingBottom: PADDING * 2,
  },
});

export const Logo = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={Styles.logo.width}
    height={Styles.logo.height}
    viewBox="0 0 500 500"
  >
    <Circle cx="250" cy="250" r="247.32" fill="#00a8ca" />
    <Path
      d="M318.2,239.71c-23-12.4-51.21-16.93-72.17-25.61-14.38-6.2-29.57-13.39-26.66-34.84,2.48-18,26.23-26.85,45.26-26.6,20.77.31,39.62,8.87,48.18,20.09l45.81-50.16a114.68,114.68,0,0,0-49.91-26.35A167.45,167.45,0,0,0,230.59,95c-26,6.2-60,21.14-75.57,62-6.89,18-8.56,51.15,3.1,70.49,14.57,24.06,37.69,35.59,65.1,44.15,21.94,6.88,52.51,15,63.79,29.08a27.13,27.13,0,0,1,.62,31.86c-9.54,12.78-31,19-52.76,15.88a72.23,72.23,0,0,1-47.37-28.09l-47.67,51.77a136.49,136.49,0,0,0,66.77,34.91,169.17,169.17,0,0,0,91.82-6.2,94,94,0,0,0,50.78-44.33,107.53,107.53,0,0,0,9.42-61.07C356.33,275.42,345.11,254.09,318.2,239.71Z"
      fill="#f7f7f7"
    />
  </Svg>
);

export default Styles;
