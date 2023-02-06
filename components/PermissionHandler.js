import {useState, useEffect} from "react";
import { useFrameProcessor, useCameraDevices } from 'react-native-vision-camera';



const PermissionHandler = ({setAuthorized, Camera}) => {

const checkPermissions = async() => {
    console.log("checking permissions");
    console.log(Camera);
  const newCameraPermission = await Camera.requestCameraPermission()

    setAuthorized(newCameraPermission == 'authorized' ? true : false);
}
useEffect(()=> {checkPermissions();},[]);

return null;
} 


export default PermissionHandler