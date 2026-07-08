import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const PowerSupplyIdentificationScreen = ({ navigation }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    setCorrectAnswer(questions[currentQuestionIndex].CorrectAnswer);

    if (answer === questions[currentQuestionIndex].CorrectAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setShowResult(false);
        setCorrectAnswer(null);
      }, 1000);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartButtonClick = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setCorrectAnswer(null);
    setScore(0);
    setShowScore(false);
  };
  
  const questions = [
    {
      question: '1. What part of the power supply is this?',
      image: require('./cover.png'),
      options: [
        'Molex',
        'Cover',
        'ATX 24-pin',
        'Voltage Selector',
      ],
      CorrectAnswer: 'Cover',
    },
    {
      question: '2. What part of the power supply is this?',
      image: require('./powerfan.png'),
      options: [
        'Cover',
        'SATA',
        'Fan',
        'Voltage Selector',
      ],
      CorrectAnswer: 'Fan',
    },
    { 
      question: '3. What part of the power supply is this?',
      image: require('./SATA.png'),
      options: [
        'Fan',
        'Cover',
        'ATX 24-pin',
        'SATA',
      ],
      CorrectAnswer: 'SATA',
    },
    { 
      question: '4. What part of the power supply is this?',
      image: require('./voltageselector.jpg'),
      options: [
        'PCIE',
        'Voltage Selector',
        'Fan',
        'Cover',
      ],
      CorrectAnswer: 'Voltage Selector',
    },
    { 
      question: '5. What part of the power supply is this?',
      image: require('./24pin.png'),
      options: [
        'ATX 24-pin',
        'Fan',
        'Voltage Selector',
        'Power Plug Receptacle',
      ],
      CorrectAnswer: 'ATX 24-pin',
    },
    {
      question: '6. What part of the power supply is this?',
      image: require('./powerplug.jpg'),
      options: [
      'Receptacle',
      'Power Plug Receptacle',
      'Voltage Selector',
      'Plug',
      ],
      CorrectAnswer: 'Power Plug Receptacle'
    },
    {
      question: '7. What part of the power supply is this?',
      image: require('./molex.jpg'),
      options:[
        'SATA Connector',
        'CPU Connector',
        'Floppy Drive Connector',
        'Molex Connector',
      ],
      CorrectAnswer: 'Molex Connector',
    },
    {
      question: '8. What part of the power supply is this?',
      image: require('./CPUConnector.png'),
      options:[
        'CPU Connector',
        'PCI Express Connector',
        'SATA',
        'Molex Connector',
      ],
      CorrectAnswer: 'CPU Connector',
    },
    {
      question: '9. What part of the power supply is this?',
      image: require('./FloppyDriveConnector.png'),
      options:[
        'Floppy Drive Connector',
        'Molex Connector',
        'Motherboard Connector',
        'SATA',
      ],
      CorrectAnswer: 'Floppy Drive Connector',
    },
    {
      question: '10. What part of the power supply is this?',
      image: require('./PCIExpressConnector.jpg'),
      options:[
        'Power Plug Receptacle',
        'Input Voltage Selector',
        'Floppy Driver Connector',
        'PCI Express Connector',
      ],
      CorrectAnswer: 'PCI Express Connector',
    }, 
  ];

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      {showScore ? (
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>
            You scored {score} out of {questions.length}.
          </Text>
          <TouchableOpacity style={styles.restartButton} onPress={handleRestartButtonClick}>
            <Text style={styles.restartButtonText}>Restart Quiz</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.questionContainer}>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
        <Image source={currentQuestion.image} style={styles.image} />
        {currentQuestion.options.map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.answerButton,
                selectedAnswer === option && styles.selectedOption,
                showResult &&
                (option === currentQuestion.CorrectAnswer
                  ? styles.correctOption
                  : selectedAnswer === option && styles.incorrectOption),
              ]}
              onPress={() => handleAnswerSelect(option)}
              disabled={showResult}
            >
              <Text style={styles.answerButtonText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf7dc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 40,
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#03118f',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  answerButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    minWidth: '80%',
  },
  answerButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
  },
  selectedOption: {
    borderColor: 'blue',
  },
  correctOption: {
    backgroundColor: '#69e6ba',
    borderColor: '#69c0e6',
  },
  incorrectOption: {
    backgroundColor: '#e6699b',
    borderColor: '#69c0e6',
  }, 
    nextButton: {
      marginTop: 20,
      backgroundColor: 'blue',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
  },
    nextButtonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    backButton: {
      marginTop: 20,
      backgroundColor: 'blue',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 10,
    },
    backButtonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
    scoreContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 20,
      marginTop: 40,
    },
    scoreText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#03118f',
    },
    restartButton: {
      backgroundColor: '#03118f',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop: 20,
    },
    restartButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFF',
    },
  });

export default PowerSupplyIdentificationScreen;
