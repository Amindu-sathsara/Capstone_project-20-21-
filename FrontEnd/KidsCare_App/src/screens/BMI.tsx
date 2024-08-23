import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { ParentTop } from './ParentHome'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Footer from '../components/Footer';

const BMI: React.FC = ({navigation}: any) => {

  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [bmi, setBMI] = useState<string | null>(null);
  const [category, setCategory] = useState<string>('');

  const calculateBMI = () => {
    const heightInMeter = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    if (isNaN(heightInMeter) || isNaN(weightInKg)) {
      Alert.alert('Invalid input', 'Please enter valid height and weight values.');
      return;
    }

    const bmiValue = (weightInKg / (heightInMeter * heightInMeter)).toFixed(1);
    setBMI(bmiValue);

    let bmiCategory = '';
    if (parseFloat(bmiValue) < 18.5) {
      bmiCategory = 'Underweight';
    }
    else if (parseFloat(bmiValue) >= 18.5 && parseFloat(bmiValue) < 24.9) {
      bmiCategory = 'Normal';
    } 
    else if (parseFloat(bmiValue) >= 25 && parseFloat(bmiValue) < 29.9) {
      bmiCategory = 'Overweight';
    } 
    else {
      bmiCategory = 'Obesity';
    }
    setCategory(bmiCategory);

  };

  const clearInputs = () => {
    setHeight('');
    setWeight('');
    setBMI(null);
    setCategory('');
  };

  return (
    <View style={styles.container}>
        <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>

      <Image style={{
        width: '100%' ,
        height: '100%' , 
        position: 'absolute'
        }} 
        source={
          require('../../assests/img/back.png')
        }
        resizeMode='cover'/>

        <ParentTop/>
      
      <View style={{ alignItems: 'center', marginBottom: 20, marginTop: 70 }}>

        <View style={styles.meter}>

          <Text style={[styles.meterLabel, styles.underweight]}>Underweight</Text>
          <Text style={[styles.meterLabel, styles.normal]}>Normal</Text>
          <Text style={[styles.meterLabel, styles.overweight]}>Overweight</Text>
          <Text style={[styles.meterLabel, styles.obesity]}>Obesity</Text>
          {bmi && <View style={[styles.indicator, getIndicatorStyle(category)]} />}

        </View>
        
      </View>

      <View style={{
        padding: 30,
        backgroundColor: '#e0f7fa',
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: 10,
        borderWidth: 0.5,
        borderColor: '#179BE8'
      }}>

        <TextInput style={styles.input}
                  placeholder='Height (cm)'
                  placeholderTextColor={'#666'}
                  keyboardType='numeric'
                  value={height}
                  onChangeText={setHeight}/>
                  
        <TextInput style={styles.input}
                  placeholder='Weight (kg)'
                  placeholderTextColor={'#666'}
                  keyboardType='numeric'
                  value={weight}
                  onChangeText={setWeight}/>

        <View style={styles.btnContainer}>

          <TouchableOpacity activeOpacity={0.6} style={{
            backgroundColor: '#388e3c',
            padding: 10,
            borderRadius: 5,
            flex: 1,
            marginRight: 10,
            alignItems: 'center',
          }} onPress={calculateBMI}>

            <Text style={styles.btnText}>Click to Calculate</Text>

          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} style={{
            backgroundColor: '#d32f2f',
            padding: 10,
            borderRadius: 5,
            flex: 1,
            marginLeft: 10,
            alignItems: 'center',
          }} onPress={clearInputs}>

            <Text style={styles.btnText}>Clear</Text>

          </TouchableOpacity>

        </View>
      </View>

      <Footer navigation={navigation}/>

      </KeyboardAwareScrollView>

    </View>
  );
}

const getIndicatorStyle = (category: string) => {
  switch (category) {
    case 'Underweight':
      return { backgroundColor: 'blue', left: '15%' };
    case 'Normal':
      return { backgroundColor: 'green', left: '40%' };
    case 'Overweight':
      return { backgroundColor: 'orange', left: '65%' };
    case 'Obesity':
      return { backgroundColor: 'red', left: '85%' };
    default:
      return { backgroundColor: 'black', left: '0%' };
  }
};

export default BMI

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  scrollContainer: {
    flexGrow: 1 ,
    paddingBottom: 10
  },

  meter: {
    width: 330,
    height: 150,
    backgroundColor: '#eee',
    borderRadius: 65,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  meterLabel: {
    position: 'absolute',
    bottom: 10,
    color: '#000'
  },

  underweight: {
    left: 20,
  },

  normal: {
    left: 115,
  },

  overweight: {
    right: 80,
  },

  obesity: {
    right: 18,
  },

  indicator: {
    position: 'absolute',
    bottom: 40,
    width: 15,
    height: 90,
    borderRadius: 5,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#000'
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },

});
