import React from 'react';
import { useWindowDimensions, Dimensions, View, Text, ActivityIndicator, StyleSheet, Image, StatusBar } from 'react-native';
import LoaderKit from 'react-native-loader-kit'


const Loader = ({ visible = false }) => {
  const { width, height } = useWindowDimensions();
  const height2 = height + 100
  
  return (
    visible && (
      <View style={[style.container, { width }]}>
        <View style={{ marginTop: 20,alignItems:'center' }}>
          <LoaderKit
            style={{ width: 70, height: 70 }}
            name={'BallSpinFadeLoader'} // Optional: see list of animations below
            color={'#fff'} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...
          />
          <Text style={{ color: '#fff', fontSize: 14, textAlign: 'center', marginTop: 10, fontWeight: '500' }}> Processing...</Text>
        </View>
      </View>
    )
  );
};



const style = StyleSheet.create({
  label: {
    marginLeft: 10,
    fontSize: 16,
    color: 'white',
    fontFamily: "FuturaPT-Book",
  },
  loader: {
    height: 100,
    backgroundColor: 'transparent',
    marginHorizontal: 50,
    borderRadius: 5,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  container: {
    top: 0,
    bottom: 0,
    position: 'absolute',
    zIndex: 1050,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
  },
});

export default Loader;
