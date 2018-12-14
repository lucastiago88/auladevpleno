//import liraries
import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
 

//Definindo Objeto para imagem(require)
  const assets ={
    background:require('../../assets/Backgrund.png'),
    triplanner:require('../../assets/logo-triplanner.png'),
    devPlenno:require('../../assets/logo-devPlenno.png')
}

// Criando Componente
class HomeScreen extends Component {

    

    state = {
        counter: 0
    }

    handleCounter = () =>{
        this.setState({
            counter: this.state.counter + 1
        })
    }

    


    render() {
      
        return (
            <ImageBackground 
                source ={assets.background}
                imageStyle={{resizeMode: 'stretch'}}
                style={styles.imageBackground}
            >
                <View style={styles.logo}>
                    <Image source ={assets.triplanner}/>
                </View>

                <View style = {styles.logoDevPleno}>
                    <Image source ={assets.devPlenno}/>
                </View>

                <TouchableWithoutFeedback onPress ={this.handleCounter}>  
                    <View style ={styles.botao}>
                        <Text style={styles.textoBotao}>COMEÇAR{this.state.counter}</Text>
                    </View>
                </TouchableWithoutFeedback>

            </ImageBackground>
        );
    }
}

// Definindo Estilo
const styles = StyleSheet.create ({

    imageBackground:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },

    logo:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    logoDevPleno:{
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: 32,
    },

    botao:{
        backgroundColor: 'white',
        paddingBottom: 16,
        paddingTop: 16,
    },

    textoBotao:{
        textAlign: 'center', 
        fontSize: 20
    }

    

});


export default HomeScreen;


