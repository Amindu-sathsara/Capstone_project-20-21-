import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { ParentTop } from './ParentHome'
import Footer from '../components/Footer'

const VacDetails = (navigation: any) => {
  return (
    <View style={styles.container}>

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

        <ScrollView horizontal>
          <View  style={styles.tableContainer}>

            <View style={styles.row}>
              <Text style={styles.header}>Vaccine</Text>
              <Text style={styles.header}>Details</Text>
              <Text style={styles.header}>Dose</Text>
              <Text style={styles.header}>Route</Text>
            </View>

              <ScrollView>

                <View style={styles.row}>
                  <Text style={styles.cell}>BCG</Text>
                  <Text style={styles.cell}>Vaccine for tuberculosis (TB) disease. BCG is used in many countries with a high prevalence of TB to prevent childhood tuberculous meningitis and miliary disease.</Text>
                  <Text style={styles.cell}>1st dose</Text>
                  <Text style={styles.cell}>0-4 weeks</Text>
                </View>

                <View style={styles.row}>
                  <Text style={styles.cell}>Vaccine 2</Text>
                  <Text style={styles.cell}>Vaccine for tuberculosis (TB) disease. BCG is used in many countries with a high prevalence of TB to prevent childhood tuberculous meningitis and miliary disease.</Text>
                  <Text style={styles.cell}>Dose details</Text>
                  <Text style={styles.cell}>Route details</Text>
                </View>

                <View style={styles.row}>
                  <Text style={styles.cell}>Vaccine 3</Text>
                  <Text style={styles.cell}>Vaccine for tuberculosis (TB) disease. BCG is used in many countries with a high prevalence of TB to prevent childhood tuberculous meningitis and miliary disease.</Text>
                  <Text style={styles.cell}>Dose details</Text>
                  <Text style={styles.cell}>Route details</Text>
                </View>

                <View style={styles.row}>
                  <Text style={styles.cell}>Vaccine 4</Text>
                  <Text style={styles.cell}>Vaccine for tuberculosis (TB) disease. BCG is used in many countries with a high prevalence of TB to prevent childhood tuberculous meningitis and miliary disease.</Text>
                  <Text style={styles.cell}>Dose details</Text>
                  <Text style={styles.cell}>Route details</Text>
                </View>

                <View style={styles.row}>
                  <Text style={styles.cell}>Vaccine 5</Text>
                  <Text style={styles.cell}>Vaccine for tuberculosis (TB) disease. BCG is used in many countries with a high prevalence of TB to prevent childhood tuberculous meningitis and miliary disease.</Text>
                  <Text style={styles.cell}>Dose details</Text>
                  <Text style={styles.cell}>Route details</Text>
                </View>

              </ScrollView>
          </View>
        </ScrollView>

      <Footer navigation={navigation}/>

    </View>
  )
}

export default VacDetails

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  tableContainer: {
    marginTop: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 10, 
    marginBottom: 80
  },

  row: {
    flexDirection: 'row',
  },

  header: {
    width: 150,
    flex: 1 ,
    padding: 10 ,
    borderWidth: 1 ,
    borderColor: '#179BE8' ,
    backgroundColor: '#e0f7fa' ,
    textAlign: 'center',
    color: '#000' ,
    fontWeight: 'bold'
  },

  cell: {
    flex: 1 ,
    width: 150,
    borderWidth: 1 ,
    borderColor: '#179BE8' ,
    textAlign: 'justify' , 
    padding: 5,
    color: '#000' 
  }

});

