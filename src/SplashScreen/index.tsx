import {forwardRef, memo, useState, useRef, useEffect, ReactNode} from 'react';
import {AppState, Image, View} from 'react-native';
import { hp,wp } from '../utility/responsive';
import theme from '../utility/theme';
import { AppStateStr } from '../config/constants';

interface SplashScreenProps {
  onEnd: () => void;
}

const SplashScreen = (props: SplashScreenProps) => {
  const videoRef = useRef();
//   const [videoEnd, setVideoEnd] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(true);

  const {onEnd = () => {}} = props;

  const handleAppStateChange = (nextAppState: any) => {
    if (nextAppState == AppStateStr.inactive) {
      setVideoPlaying(false);
    } else if (nextAppState == AppStateStr.active) {
        if (videoRef.current) {
            // videoRef.current.seek(0);
            setTimeout(()=>{
                setVideoPlaying(false);
            },1000);
        }
    //   setVideoPlaying(true);
    }
  };

  useEffect(() => {
    setTimeout(()=>{
        setVideoPlaying(false);
    },3000);
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <>
      <View
        style={{
          width: wp(100),
          height: hp(100),
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image        
        ref={videoRef}
        source={require('../Assets/Images/springCTLogo.png')}
        // source={theme.assets.Union}
        resizeMode= "center"
        style={{width: '30%', height: '30%'}}
        
        />
      </View>
    </>
  );
};
// export default SplashScreen;
export default memo(SplashScreen);