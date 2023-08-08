import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList,  } from 'react-native';
import api from './src/services/api';
import react from 'react';
import Filme from './src/Pages/Filme';


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      filmes: []
    }
  }
  // Toda vez que o componente for montado
  async componentDidMount(){
    const response = await api.get('/filmes');
    this.setState({
      filmes: response.data
    });
  }

  render(){
    return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={this.state.filmes}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Filme data ={item} />}
      />
      
    </SafeAreaView>
  );}
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    
  },
});
