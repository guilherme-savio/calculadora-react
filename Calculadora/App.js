import * as React from 'react';
import {useState} from 'react'
import { AppLoading } from 'expo';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default function App() {

  const [ currentNumber, setCurrentNumber ] = useState("")
  const [ lastNumber, setLastNumber ] = useState("")


  function calculator(){
    const splitNumbers = currentNumber.split(" ")
    const operator = splitNumbers[1]
    console.log(splitNumbers)
    if(operator === "*"){    
      setCurrentNumber((parseFloat(splitNumbers[0]) * parseFloat(splitNumbers[2])).toString())
      return
    }
    if(operator === "/"){
      setCurrentNumber((parseFloat(splitNumbers[0]) / parseFloat(splitNumbers[2])).toString())
      return
    }
    if(operator === "+"){

      setCurrentNumber((parseFloat(splitNumbers[0]) + parseFloat(splitNumbers[2])).toString())
      return
    }
    if(operator === "-"){
      setCurrentNumber((parseFloat(splitNumbers[0]) - parseFloat(splitNumbers[2])).toString())
      return
    }
    
    

  }
  
  function handleInput(keyboardPressed){

    if(keyboardPressed === "="){
      setLastNumber(currentNumber + " = ")
      calculator()
      return
    }
    if(keyboardPressed === "*" | keyboardPressed === "/" | keyboardPressed === "+" | keyboardPressed === "-"){    
      setCurrentNumber(currentNumber + " " + keyboardPressed + " ")      
      return
    }
    
    if(keyboardPressed === "."){
      setCurrentNumber(currentNumber + keyboardPressed) 
      return
    }
    if(keyboardPressed === "+/-"){

      return
    }
    if(keyboardPressed === "C"){
      setLastNumber("")
      setCurrentNumber("")
      return
    }

    setCurrentNumber(currentNumber + keyboardPressed)

  }
  return (
    <View style={styles.container}>
      <View style={styles.results}>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.lightButton} onPress={() => handleInput("C")}><Text style={[styles.textButton, {color: "#000000"}]}>C</Text></TouchableOpacity>
        <TouchableOpacity style={styles.lightButton} onPress={() => handleInput("+/-")}><Text style={[styles.textButton, {color: "#000000"}]}>+/-</Text></TouchableOpacity>
        <TouchableOpacity style={styles.lightButton} onPress={() => handleInput("%")}><Text style={[styles.textButton, {color: "#000000"}]}>%</Text></TouchableOpacity>
        <TouchableOpacity style={styles.orangeButton} onPress={() => handleInput("/")}><Text style={styles.textButton}>/</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput("7")}><Text style={styles.textButton}>7</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput("8")}><Text style={styles.textButton}>8</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput("9")}><Text style={styles.textButton}>9</Text></TouchableOpacity>
        <TouchableOpacity style={styles.orangeButton} onPress={() => handleInput("*")}><Text style={styles.textButton}>*</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput("4")}><Text style={styles.textButton}>4</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput("5")}><Text style={styles.textButton}>5</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput("6")}><Text style={styles.textButton}>6</Text></TouchableOpacity>
        <TouchableOpacity style={styles.orangeButton} onPress={() => handleInput("-")}><Text style={styles.textButton}>-</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput("1")}><Text style={styles.textButton}>1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput("2")}><Text style={styles.textButton}>2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput("3")}><Text style={styles.textButton}>3</Text></TouchableOpacity>
        <TouchableOpacity style={styles.orangeButton} onPress={() => handleInput("+")}><Text style={styles.textButton}>+</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput("0")}><Text style={styles.textButton}>0</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleInput(".")}><Text style={styles.textButton}>.</Text></TouchableOpacity>
        <TouchableOpacity style={styles.orangeButton} onPress={() => handleInput("=")}><Text style={styles.textButton}>=</Text></TouchableOpacity>
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  results: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: 300,
    backgroundColor: '#000000',
  },

  resultText:{
    color: "#FFFFFF",
    fontSize: 80,
    margin: 10,
    alignSelf: 'flex-end',
  },

  historyText:{
    color: "#FFFFFF",
    fontSize: 20,
    marginBottom: 0,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  
  buttons:{
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F5FCFF'
  },

  button:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#333333',
    minWidth: 80,
    minHeight: 80,
  },

  orangeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F19A38',
    minWidth: 80,
    minHeight: 80,
  },

  lightButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#A5A5A5',
    minWidth: 80,
    minHeight: 80,
  },

  textButton: {
    color: "#FFFFFF",
    fontSize: 25,
  }

});