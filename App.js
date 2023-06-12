import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native'

export default function App() {
  const [calc, setCalc] = useState('')

  const handleButtonPress = (value) => {
    setCalc((prev) => prev + value)
  }

  const handleCalculate = () => {
    try {
      const updatedCalc = calc.replace(/x/g, '*').replace(/÷/g, '/')
      const result = eval(updatedCalc)
      setCalc(String(result))
    } catch (error) {
      setCalc('Error')
    }
  }

  const handleClear = () => {
    setCalc('')
  }

  const handleDelete = () => {
    setCalc((prev) => prev.slice(0, -1))
  }

  const handleParentheses = () => {
    const lastChar = calc.slice(-1)
    if (lastChar === '(') {
      setCalc((prev) => prev + ')')
    } else {
      setCalc((prev) => prev + '(')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.result}>{calc}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, styles.redButton]}
          onPress={handleClear}
        >
          <Text style={[styles.buttonText, styles.whiteText]}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.whiteButton]}
          onPress={handleParentheses}
        >
          <Text style={[styles.buttonText, styles.blueText]}>(</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.whiteButton]}
          onPress={() => handleButtonPress(')')}
        >
          <Text style={[styles.buttonText, styles.blueText]}>)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.whiteButton]}
          onPress={() => handleButtonPress('÷')}
        >
          <Text style={[styles.buttonText, styles.blueText]}>÷</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, styles.pinkButton]}
          onPress={() => handleButtonPress('7')}
        >
          <Text style={[styles.buttonText, styles.whiteText]}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.pinkButton]}
          onPress={() => handleButtonPress('8')}
        >
          <Text style={[styles.buttonText, styles.whiteText]}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.pinkButton]}
          onPress={() => handleButtonPress('9')}
        >
          <Text style={[styles.buttonText, styles.whiteText]}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.whiteButton]}
          onPress={() => handleButtonPress('x')}
        >
          <Text style={[styles.buttonText, styles.blueText]}>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, styles.pinkButton]}
          onPress={() => handleButtonPress('4')}
        >
          <Text style={[styles.buttonText, styles.whiteText]}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.pinkButton]}
          onPress={() => handleButtonPress('5')}
        >
          <Text style={[styles.buttonText, styles.whiteText]}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.pinkButton]}
          onPress={() => handleButtonPress('6')}
        >
          <Text style={[styles.buttonText, styles.whiteText]}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.whiteButton]}
          onPress={() => handleButtonPress('-')}
        >
          <Text style={[styles.buttonText, styles.blueText]}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, styles.pinkButton]}
          onPress={() => handleButtonPress('1')}
        >
          <Text style={[styles.buttonText, styles.whiteText]}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.pinkButton]}
          onPress={() => handleButtonPress('2')}
        >
          <Text style={[styles.buttonText, styles.whiteText]}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.pinkButton]}
          onPress={() => handleButtonPress('3')}
        >
          <Text style={[styles.buttonText, styles.whiteText]}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.whiteButton]}
          onPress={() => handleButtonPress('+')}
        >
          <Text style={[styles.buttonText, styles.blueText]}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, styles.blueButton]}
          onPress={handleDelete}
        >
          <Text style={[styles.buttonText, styles.whiteText]}>≪</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.pinkButton]}
          onPress={() => handleButtonPress('0')}
        >
          <Text style={[styles.buttonText, styles.whiteText]}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.pinkButton]}
          onPress={() => handleButtonPress('.')}
        >
          <Text style={[styles.buttonText, styles.whiteText]}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.greenButton]}
          onPress={handleCalculate}
        >
          <Text style={[styles.buttonText, styles.whiteText]}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  resultContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
    width: screenWidth * 0.9,
  },
  result: {
    fontSize: 32,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
  },
  whiteText: {
    color: 'white',
  },
  blueText: {
    color: 'blue',
  },
  pinkButton: {
    backgroundColor: '#FF69B4',
  },
  whiteButton: {
    backgroundColor: 'white',
  },
  redButton: {
    backgroundColor: 'red',
  },
  greenButton: {
    backgroundColor: 'green',
  },
  blueButton: {
    backgroundColor: 'blue',
  },
})
