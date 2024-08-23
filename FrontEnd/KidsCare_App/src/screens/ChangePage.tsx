import { StyleSheet, Text, View, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { LoginField } from './LoginPage';
import { UpdateButton } from './ForgotPage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ChangePage = () => {

  const [name, setName] = useState ('');
  const [password, setPassword] = useState ('');
  const [newpassword, setNewPassword] = useState ('');

  const [saving, setSaving] = useState (false);

  function saveUser() {
    Alert.alert(name + " " + password + " " + newpassword);
  }

  //to save username, password
  return (
    <View style={sty.container}>

      <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>

      <Image style={{
        width: '100%' , 
        height: '100%' ,
        position: 'absolute' }} 
        source={
        require('../../assests/img/logpg.jpg') }
        resizeMode='cover'/>

        <LoginField name={name} setName={setName} password={password} setPassword={setPassword}/>

        <View style={{
              backgroundColor: '#D9D9D9' ,
              borderRadius: 10 ,
              borderWidth: 2 ,
              borderColor: '#0796FA' , 
              height: 50 ,
              marginHorizontal: 20 ,
              marginTop: 20
          }}>

        <TextInput 
              secureTextEntry
              onChangeText={(v) => setNewPassword(v)} 
              placeholder='Confirm Password'
              placeholderTextColor={'#666'}
              style={{
                fontSize: 20,
                color: '#000' }}/>
          </View>

          <UpdateButton sUser={saveUser} saving={saving}/>

          </KeyboardAwareScrollView>

    </View>
  )
}

export default ChangePage

const sty = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    }
  });
