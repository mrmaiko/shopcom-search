import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  useFrameProcessor,
  useCameraDevices,
  Camera,
} from "react-native-vision-camera";
import { detectObject } from "@psycheangel/vision-camera-object-detection";
import PermissionHandler from "./PermissionHandler";

export default function CameraHandler() {
  const [hasPermission, setHasPermission] = useState(false);
  const [device, setDevice] = useState(null);
  const initCameras = async () => {
    alert("init cameras");
    const devices = await Camera.getAvailableCameraDevices();
    console.log(devices);
    console.log("END DEVICES");
  };

  /* const frameProcessor = useFrameProcessor((frame) => {
    "worklet";

    const values = detectObject(frame);
    console.log(values);
  }, []); */
  useEffect(() => {
    (async () => await initCameras())();
  }, []);
  return (
    <View>
      {device == null ? (
        <Text>Please Wait</Text>
      ) : (
        <View>
          {/* <PermissionHandler setAuthorized={setHasPermission} Camera={Camera} /> */}
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
          />
        </View>
      )}
    </View>
  );
}
