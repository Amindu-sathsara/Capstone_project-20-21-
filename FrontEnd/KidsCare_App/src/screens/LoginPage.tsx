import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert} from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginPage = (lpProps: any) => {

  const stack =lpProps.navigation;

  const [name, setName] = useState ('');
  const [password, setPassword] = useState ('');

  const [saving, setSaving] = useState (false);

  function saveUser() {
    Alert.alert(name + " " + password);
  }

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

        <LoginField stack = {stack} name={name} setName={setName} password={password} setPassword={setPassword}/>

        <LoginBtn sUser={saveUser} saving={saving}/>

        <Text style={{
          fontSize: 15,
          fontWeight: 600,
          color: '#000',
          textAlign: 'center',
          marginTop: 30
        }}>____________ or ____________</Text>

        <ForgotButton fbstack = {stack}/>

        <ChangeButton cbstack = {stack}/>

      </KeyboardAwareScrollView>
    </View>
  )
}


export default LoginPage


export function LoginField(f: any){
  const { name, setName, password, setPassword } = f;

  const stack = f.stack;

  return (
      <View style={{ marginTop: 250}}>

          <View style={{
              backgroundColor: '#D9D9D9' ,
              borderRadius: 10 ,
              borderWidth: 2 ,
              borderColor: '#0796FA' , 
              height: 50 ,
              marginHorizontal: 20 
          }}>

          <TextInput 
              onChangeText={(v) => setName(v)} 
              placeholder='Username'
              placeholderTextColor={'#666'}
              style={{
                fontSize: 20,
                color: '#000'
              }} />
          </View>

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
              onChangeText={(v) => setPassword(v)} 
              placeholder='Password'
              placeholderTextColor={'#666'}
              style={{
                fontSize: 20,
                color: '#000'
              }} />
          </View>

      </View>
  );
}

function LoginBtn(k:any){
  const { saveUser, saving } = k;

    return (
      <View>
        <TouchableOpacity activeOpacity={0.6} onPress={k.sUser}>
          <View style={{ 
            backgroundColor:'#0796FA', 
            borderRadius: 30, 
            height: 50, 
            marginHorizontal: 40,
            justifyContent: 'center',
            alignItems: 'center' ,
            marginTop: 20 }}>
    
            <Text style={{
              fontSize: 30,
              fontWeight: 600,
              color: 'white'
            }}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

function ForgotButton(f: any){

  const stack = f.fbstack;

  function gotoForgot() {
    stack.navigate('ForgotPw')
  }

return (
  <View>

    <TouchableOpacity activeOpacity={0.6} onPress={gotoForgot}>
    <View style={{ 
      backgroundColor:'#0796FA', 
      borderRadius: 30, 
      height: 50, 
      marginHorizontal: 40,
      justifyContent: 'center',
      alignItems: 'center' ,
      marginTop: 40}}>

      <Text style={{
        fontSize: 25,
        fontWeight: 600,
        color: 'white'
      }}>Forgot Password</Text>
    </View>
    </TouchableOpacity>
    
  </View>
)
}


function ChangeButton(f: any){

  const stack = f.cbstack;

  function gotoChange() {
    stack.navigate('ChangePw')
  }

return (
  <View>
    <TouchableOpacity activeOpacity={0.6} onPress={gotoChange}>
    <View style={{ 
      backgroundColor:'#0796FA', 
      borderRadius: 30, 
      height: 50, 
      marginHorizontal: 40,
      justifyContent: 'center',
      alignItems: 'center' ,
      marginTop: 20}}>

      <Text style={{
        fontSize: 25,
        fontWeight: 600,
        color: 'white'
      }}>Change Password</Text>
    </View>
    </TouchableOpacity>
  </View>
)
}


const sty = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    }
  });

  