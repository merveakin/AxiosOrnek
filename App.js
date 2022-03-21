import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, View, Text, SafeAreaView } from 'react-native';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props); //C# daki myContexi base göndermek gibi

    this.state = {
      isLoading: true, //isLoading state içerisinde tutulan bir değişkendir
      data: [] //state içerisinde adı data olan boş bir dizi tanımlı
    }
  }//ctor burada biter

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users/4')
      .then(
        (response)=>{
        return response.data;
        }
      )
      .then((d)=>
        {
          alert(d.name)
        })

      .catch(
        (error) => {
          alert(error);
        }
      )
  } //componentDidMount burada biter
  render() {
    if (this.state.isLoading) {
      //isLOading true ise =>
      return (
        <SafeAreaView>
          <View style={styles.container}>
            <ActivityIndicator />
          </View>
        </SafeAreaView>
      );//return burada biter

    }///if biter
    else {
     
    }//else biter


  }//render burada biter


}//class burada biter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center'

  },
  dataitem: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  }

}); //stylesheet burada biter