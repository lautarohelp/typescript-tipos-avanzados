import { Camera, CameraDirection, CameraResultType } from '@capacitor/camera';

export const takePicture = async () => {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.Base64,
    direction: CameraDirection.Front
  });
};
