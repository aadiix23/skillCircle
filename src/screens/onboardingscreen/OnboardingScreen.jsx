import { StyleSheet, Text, View ,Image,SafeAreaView} from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation }) => {
  return (
     <SafeAreaView style={{ flex: 1 }}>
    <Onboarding
      onDone={() => navigation.replace('Login')}
      pages={[
        {
          backgroundColor: '#faf49b',
          image: <Image source={require('../../assets/images/onboard1.png')} style={styles.image} />,
          title: ' Form a Team',
          subtitle: 'Find like-minded creators and build your dream team.',
        },
        {
          backgroundColor: '#a7f2bb',
          image: <Image source={require('../../assets/images/onboard1.png')
} style={styles.image} />,
          title: ' Meet Developers',
          subtitle: 'Connect with skilled developers to bring your ideas to life.',
        },
        {
          backgroundColor: '#9bd5fa',
          image: <Image source={require('../../assets/images/onboard1.png')
} style={styles.image} />,
          title: 'Raise Ideas',
          subtitle: 'Share your project concepts and get the feedback you need.',
        },
      ]}
    />
    </SafeAreaView>
  );
};


export default OnboardingScreen

const styles = StyleSheet.create({
  image: {
    width: '94%',
    height: 200,
    resizeMode: 'contain',
  },
});