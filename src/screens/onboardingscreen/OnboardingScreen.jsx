import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation }) => {
  const [pageIndex, setPageIndex] = useState(0);

  const pages = [
    {
      backgroundColor: '#F9F9F9',
      image: <Image source={require('../../assets/images/onboarding1img.png')} style={styles.image} />,
      title: 'Students Deserve Their Own Space',
      subtitle: 'CodeCrew is built only for students who want to learn, practice, and grow—not a place for job seekers or paid professionals.',
    },
    {
      backgroundColor: '#F9F9F9',
      image: <Image source={require('../../assets/images/onboarding2img.png')} style={styles.image} />,
      title: 'Go Beyond Theory.',
      subtitle: 'Join circles in fields like AI/ML, UI/UX, Web Dev, and more. Learn in real-time by working on practical projects with peers.',
    },
    {
      backgroundColor: '#F9F9F9',
      image: <Image source={require('../../assets/images/onboarding3img.png')} style={styles.image} />,
      title: 'Turn Ideas Into Startups.',
      subtitle: 'Have a project or startup idea but need teammates? CodeCrew helps you find students from different fields who want to build and grow with you.',
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Onboarding
        key={pageIndex} 
        showNext={false}
        showDone={false}
        showSkip={false}
        bottomBarHighlight={false}
        pages={[pages[pageIndex]]}
        titleStyles={{
          fontSize: 24,
          paddingBottom:40,
          fontWeight: '500',
          color: '#838383',
          textAlign: 'center',
        }}
        subTitleStyles={{
          fontSize: 20,
          lineHeight: 20,
          padding:20,
          letterSpacing: 1.4,
          fontWeight: '300',
          color: '#747474',
          textAlign: 'center',
        }}
      />

      {/* Previous Button */}
      {pageIndex > 0 && (
        <TouchableOpacity
          style={styles.prevButton}
          onPress={() => setPageIndex(pageIndex - 1)}
        >
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
      )}

      {/* Next / Done Button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => {
          if (pageIndex < pages.length - 1) {
            setPageIndex(pageIndex + 1);
          } else {
            navigation.replace('Signup');
          }
        }}
      >
        <Text style={styles.buttonText}>{pageIndex === pages.length - 1 ? 'Done' : 'Next'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  image: {
    width: 426,
    height: 258.23,
  },
  prevButton: {
    position: 'absolute',
    top: 70,
    left: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  nextButton: {
    position: 'absolute',
    top: 70,
    right: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  
  },
  buttonText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '300',
  },
});
