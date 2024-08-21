import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Footer from '../components/Footer';
import { ParentTop } from './ParentHome';

const Announcements = (navigation: any) => {

  const announcements = [
    { id: 1, title: 'Announcement 1', date: '26/12/2023', content: 'Content of announcement 1' },
    { id: 2, title: 'Announcement 2', date: '26/12/2023', content: 'Content of announcement 2, vaccination program has postponed to next Tuesday (17/06/2024)' },
    { id: 3, title: 'Announcement 3', date: '25/12/2023', content: 'Content of announcement 3' },
    { id: 4, title: 'Announcement 4', date: '25/12/2023', content: 'Content of announcement 4' },
  ];

  const [selectedAnnouncement, setSelectedAnnouncement] = React.useState(null);

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

        <ScrollView style={styles.announcContainer}>

        <Text style={{
          fontSize: 28 ,
          fontWeight: 'bold' , 
          color: '#000' , 
          alignSelf: 'center' , 
          marginTop: 30
        }}>Announcements</Text>

        <TouchableOpacity activeOpacity={0.5} style={styles.vacContainer}>

          <Text style={{
            fontSize: 16 , 
            color: '#000' 
          }}>Vaccination Announcements</Text>

        </TouchableOpacity>

        {announcements.map((announcement) => (
          <TouchableOpacity activeOpacity={0.5}
                            key={announcement.id}
                            style={styles.announcementBox}
                            onPress={() => setSelectedAnnouncement(announcement)} >
            
            <Text style={{
              fontSize: 18 ,
              color: '#000'
            }}>{announcement.title}</Text>

            <Text style={{
              fontSize: 14 ,
              color: '#000'
            }}>{announcement.date}</Text>

          </TouchableOpacity>
        ))}
        </ScrollView>

        {selectedAnnouncement && (
          <View style={styles.modal}>
            <Text style={{
              fontSize: 28 ,
              fontWeight: 'bold' , 
              color: '#000' ,
              marginBottom: 16
            }}>{selectedAnnouncement.title}</Text>

            <Text style={{
                fontSize: 18,
                color: 'white',
                marginBottom: 16
            }}>{selectedAnnouncement.content}</Text>

            <TouchableOpacity onPress={() => setSelectedAnnouncement(null)} style={styles.closeBtn}>
              <Text style={styles.closeBtnText}>Close</Text>
            </TouchableOpacity>
          </View>
        )}

        <Footer navigation={navigation}/>

    </View>
  )
}

export default Announcements

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  announcContainer: {
    flex: 1
  },

  vacContainer: {
    padding: 40 ,
    backgroundColor: '#e0f7fa' , 
    borderRadius: 10 ,
    marginTop: 16 ,
    marginHorizontal: 20 ,
    borderWidth: 1,
    borderColor: '#179BE8'
  },

  announcementBox: {
    marginHorizontal: 20 ,
    padding: 16,
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#179BE8',
    marginBottom: 5,
    marginTop: 5
  },

  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  closeBtn: {
    padding: 16,
    backgroundColor: 'tomato',
    borderRadius: 8,
  },

  closeBtnText: {
    fontSize: 18,
    color: '#000',
  }

});

