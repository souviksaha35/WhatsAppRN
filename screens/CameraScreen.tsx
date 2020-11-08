import React from 'react';
import { Text, View, Platform, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import * as  ImagePicker from 'expo-image-picker';


export default class CameraScreen extends React.Component {
    state = {
        hasPermission: null,
        cameraType: Camera.Constants.Type.back,
    }
    camera: any;

    async componentDidMount() {
        this.getPermissionAsync()
    }

    getPermissionAsync = async () => {
        if (Platform.OS === 'ios') {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }

        // Camera Permission
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasPermission: status  === 'granted' });
    }

    takePicture = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
        }
    }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        })
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <Camera style={{ flex: 1 }} type={this.state.cameraType} ref={ref => {this.camera = ref}}>
                    <View>
                        <TouchableOpacity style={{ alignSelf: 'flex-end', alignItems: 'center', backgroundColor: 'transparent' }} onPress={() => this.pickImage()}>
                            <Ionicons name="ios-photos" style={{ color: '#fff', fontSize: 40}}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ alignSelf: 'center', alignItems: 'center', backgroundColor: 'transparent', }} onPress={() => this.takePicture()}>
                            <FontAwesome name="camera" style={{ color: "#fff", fontSize: 40 }}/>
                        </TouchableOpacity>
                    </View>
                </Camera>
            </View>
        );
    }
}