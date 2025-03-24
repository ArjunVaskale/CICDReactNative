import React from 'react';
import {Text, View , Pressable, Alert, TouchableOpacity} from 'react-native';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';

const YourApp = () => {


  React.useEffect(()=>{
    // checkPrevCrashed();
  },[])

  async function checkPrevCrashed(){
    const didCrash = await Crashes.hasCrashedInLastSession();
    if(didCrash){
      const lastReport = await Crashes.lastSessionCrashReport();
      console.log(lastReport);
      Alert.alert("Sorry for that crash, we're working on a solution");
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Try editing me! 🎉</Text>
      <TouchableOpacity style={{ 
        backgroundColor : 'teal'  , 
        padding : 10 , 
        margin : 10,
        borderRadius : 4}}
          onPress={()=>{Analytics.trackEvent('calculate_inflation' ,{ 'Network' : 'Cellular' , 'GPS' : 'On' })}}
        >
        <Text style={{color : 'white'}}>Calculate Inflation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default YourApp;