  import React, { useState } from 'react';
  import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

  const MotherboardIdentificationScreen = ({ navigation }) => {
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
        question: '1. What part of the motherboard is this?',
        image: require('./cpu.png'),
        options: [
          'PCIE',
          'CPU',
          'Northbridge',
          'Motherboard',
        ],
        CorrectAnswer: 'CPU',
      },
      {
        question: '2. What part of the motherboard is this?',
        image: require('./northbridge.jpg'),
        options: [
          'USB Port',
          'CPU',
          'CCPU',
          'Northbridge',
        ],
        CorrectAnswer: 'Northbridge',
      },
      {
        question: '3. What part of the motherboard is this?',
        image: require('./cmosbattery.png'),
        options: [
          'CMOS Battery',
          'CPU',
          'PCIE',
          'SATA',
        ],
        CorrectAnswer: 'CMOS Battery',
      },
      {
        question: '4. What part of the motherboard is this?',
        image: require('./ideconnector.png'),
        options: [
          'CMOS Battery',
          'CPU',
          'IDE Connector',
          'SATA',
        ],
        CorrectAnswer: 'IDE Connector',
      },
      {
        question: '5. What part of the motherboard is this?',
        image: require('./parallelport.png'),
        options: [
          'CMOS Battery',
          'CPU',
          'IDE Connector',
          'Parallel Port',
        ],
        CorrectAnswer: 'Parallel Port',
      },
      {
        question: '6. What part of the motherboard is this?',
        image: require('./pcislot.png'),
        options: [
          'CMOS Battery',
          'PCI Slot',
          'IDE Connector',
          'SATA',
        ],
        CorrectAnswer: 'PCI Slot',
      },
      {
        question: '7. What part of the motherboard is this?',
        image: require('./ps2port.png'),
        options: [
          'PS/2 Port',
          'CPU',
          'IDE Connector',
          'SATA',
        ],
        CorrectAnswer: 'PS/2 Port',
      },
      {
        question: '8. What part of the motherboard is this?',
        image: require('./ramslot.png'),
        options: [
          'PS/2 Port',
          'RAM Slot',
          'IDE Connector',
          'SATA',
        ],
        CorrectAnswer: 'RAM Slot',
      },
      {
        question: '9. What part of the motherboard is this?',
        image: require('./serialport.png'),
        options: [
          'PS/2 Port',
          'SATA',
          'IDE Connector',
          'Serial Port',
        ],
        CorrectAnswer: 'Serial Port',
      },
      {
        question: '10. What part of the motherboard is this?',
        image: require('./fan.png'),
        options: [
          'Serial Port',
          'IDE Connector',
          'RAM Slot',
          'Fan',
        ],
        CorrectAnswer: 'Fan',
      },
      {
        question: '11. What part of the motherboard is this?',
        image: require('./southbridge.jpg'),
        options: [
          'Southbridge',
          'Northbridge',
          'ATX power connector',
          'SATA Connections',
        ],
        CorrectAnswer: 'Southbridge',
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

  export default MotherboardIdentificationScreen;
