import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const App = () => {
  const [amount, setAmount] = useState("");
  const [inflationRate, setInflationRate] = useState("");
  const [years, setYears] = useState("");
  const [futureValue, setFutureValue] = useState<number | null>(null);

  const calculateInflation = () => {
    const P = parseFloat(amount);
    const r = parseFloat(inflationRate) / 100; // Convert percentage to decimal
    const n = parseInt(years, 10);

    if (isNaN(P) || isNaN(r) || isNaN(n)) {
      setFutureValue(null);
      return;
    }

    // Future Value Formula: FV = P * (1 + r)^n
    const FV = P * Math.pow(1 + r, n);
    setFutureValue(FV);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inflation Calculator (INR)</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter initial amount (₹)"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter inflation rate (%)"
        keyboardType="numeric"
        value={inflationRate}
        onChangeText={setInflationRate}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter years"
        keyboardType="numeric"
        value={years}
        onChangeText={setYears}
      />

      <Button title="Calculate" onPress={calculateInflation} />

      {futureValue !== null && (
        <Text style={styles.result}>
          Future Value: ₹{futureValue.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
});

export default App;



// import React from 'react';
// import {Text, View , Pressable, Alert, TouchableOpacity} from 'react-native';
// import Crashes from 'appcenter-crashes';
// import Analytics from 'appcenter-analytics';


// const YourApp = () => {


//   React.useEffect(()=>{
//     // checkPrevCrashed();
//   },[])

//   async function checkPrevCrashed(){
//     const didCrash = await Crashes.hasCrashedInLastSession();
//     if(didCrash){
//       const lastReport = await Crashes.lastSessionCrashReport();
//       console.log(lastReport);
//       Alert.alert("Sorry for that crash, we're working on a solution");
//     }
//   }

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <Text>Try editing me! 🎉</Text>
//       <TouchableOpacity style={{ 
//         backgroundColor : 'teal'  , 
//         padding : 10 , 
//         margin : 10,
//         borderRadius : 4}}
//           onPress={()=>{Analytics.trackEvent('calculate_inflation' ,{ 'Network' : 'Cellular' , 'GPS' : 'On' })}}
//         >
//         <Text style={{color : 'white'}}>Calculate Inflation</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default YourApp;


// import React from 'react';
// import {Text, View , Pressable, Alert, TouchableOpacity} from 'react-native';
// import Crashes from 'appcenter-crashes';
// import Analytics from 'appcenter-analytics';

// const YourApp = () => {


//   React.useEffect(()=>{
//     // checkPrevCrashed();
//   },[])

//   async function checkPrevCrashed(){
//     const didCrash = await Crashes.hasCrashedInLastSession();
//     if(didCrash){
//       const lastReport = await Crashes.lastSessionCrashReport();
//       console.log(lastReport);
//       Alert.alert("Sorry for that crash, we're working on a solution");
//     }
//   }

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//       <Text>Try editing me! 🎉</Text>
//       <TouchableOpacity style={{ 
//         backgroundColor : 'teal'  , 
//         padding : 10 , 
//         margin : 10,
//         borderRadius : 4}}
//           onPress={()=>{Analytics.trackEvent('calculate_inflation' ,{ 'Network' : 'Cellular' , 'GPS' : 'On' })}}
//         >
//         <Text style={{color : 'white'}}>Calculate Inflation</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default YourApp;