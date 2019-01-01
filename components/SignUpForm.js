import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {FormLabel, FormInput,Button} from 'react-native-elements'
import axios from 'axios'

class SignUpForm extends Component{

    state = {phone: ''} 

    handleSubmit = async() => {

     try{
     await axios.post('https://us-central1-one-time-password-d5eab.cloudfunctions.net/create_user',{
         phone: this.state.phone
     })
         
     await axios.post('https://us-central1-one-time-password-d5eab.cloudfunctions.net/request_one_time_password',{
         phone: this.state.phone
     })
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
                 <Button onPress = {this.handleSubmit} title="Submit"/>
              </View>
        )
    }
}

export default SignUpForm