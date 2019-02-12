import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from './Weather';

const API_KEY = "ab9c0c8c00a396595fe9e690d55b8f9d";

export default class App extends Component {
  state = {
    isLoaded: false,
<<<<<<< HEAD
    error: null
  };
  componentDidMount() { 
      navigator.geolocation.getCurrentPosition(position => {
          this.setState({error:"someting"})
=======
    error: null,
    temperature:null,
    name:null
  };
  componentDidMount() { 
      navigator.geolocation.getCurrentPosition(position => {
          this._getWeather(position.coords.latitude, position.coords.longitude)
>>>>>>> get weather data by open weather map api
        },
        error => {
          this.setState({error:error})
        }
      )
  }
<<<<<<< HEAD
=======

  _getWeather(lat, long) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        temperature:json.main.temp,
        name:json.weather[0].main,
        isLoaded:true
      })
    })
  }
>>>>>>> get weather data by open weather map api
  
  render() {
    const {isLoaded, error} = this.state;
    return (
      <View style={styles.container}>
      <StatusBar hidden={true}/>
        {isLoaded ? <Weather/> : 
          (<View style={styles.loading}>
             <Text style={styles.loadingText}>Getting the fucking weather</Text>
             {error ? <Text style={styles.errorText}>{error}</Text>:null}
          </View>)
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText:{
color:"red",
backgroundColor:"transparent"
  },
  loading:{
    flex:1,
    backgroundColor:'#FDF6AA',
    justifyContent:'flex-end',
    paddingLeft:25,
  },
  loadingText:{
    fontSize:38,
    marginBottom:100
  }
});
