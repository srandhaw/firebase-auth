import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {FormLabel, FormInput,Button} from 'react-native-elements'
import axios from 'axios'
import firebase from 'firebase'

class SignInForm extends Component{

    state = {phone: '',code: ''} 

    handleSubmit = async() => {
   
      try{
         let response = await axios.post('https://us-central1-one-time-password-d5eab.cloudfunctions.net/verify_one_time_password',{
             phone: this.state.phone,
             code: this.state.code
         })

         firebase.auth().signInWithCustomToken(response.data.token)
         
      } catch(err){
          console.log(err)
      }
    
     
    }

    render(){
        return(
              <View>
                <View style = {{marginBottom: 10}}>
                 <FormLabel>Enter Phone Number</FormLabel>
                 <FormInput
                 value = {this.state.phone}
                 onChangeText = {phone => this.setState({phone})}
                  />
                </View> 
                <View style = {{marginBottom: 10}}>
                 <FormLabel>Enter Code</FormLabel>
                 <FormInput
                 value = {this.state.code}
                 onChangeText = {code => this.setState({code})}
                  />
                </View> 
                 <Button onPress = {this.handleSubmit} title="Submit"/>
              </View>
        )
    }
}

export default SignInForm