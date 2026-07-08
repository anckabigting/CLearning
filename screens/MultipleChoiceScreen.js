  import React, { useState } from 'react';
  import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MotherboardQuizScreen from './MotherboardQuizScreen';


  const questions = [
    {
      question: 'What is the main purpose of a motherboard?',
      options: [
        'To provide power to the computer components',
        'To connect and communicate between different computer components',
        'To store data and software programs',
        'To provide cooling for the computer components',
      ],
      answer: 'To connect and communicate between different computer components',
    },
    {
      question: 'What is the most common form factor for desktop motherboards?',
      options: ['ATX', 'Mini-ITX', 'Micro-ATX', 'Extended ATX'],
      answer: 'ATX',
    },
    {
      question: 'What is the function of the BIOS chip on a motherboard?',
      options: [
        'To store the operating system',
        'To regulate the power supply',
        'To manage the data transfer between the CPU and memory',
        'To provide basic input/output system functionality',
      ],
      answer: 'To provide basic input/output system functionality',
    },
  ];

  const MultipleChoiceScreen = ({ navigation }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerButtonClick = (selectedOption) => {
      const currentQuestion = questions[currentQuestionIndex];
      const isCorrect = selectedOption === currentQuestion.answer;
      const newScore = isCorrect ? score + 1 : score;
      setScore(newScore);
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < questions.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
      } else {
        setShowScore(true);
      }
    };

    const handleRestartButtonClick = () => {
      setCurrentQuestionIndex(0);
      setScore(0);
      setShowScore(false);
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
      <View style={styles.container}>
        {showScore ? (
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>You scored {score} out of {questions.length}.</Text>
            <TouchableOpacity style={styles.restartButton} onPress={handleRestartButtonClick}>
              <Text style={styles.restartButtonText}>Restart Quiz</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>{currentQuestion.question}</Text>
            {currentQuestion.options.map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.answerButton}
                onPress={() => handleAnswerButtonClick(option)}
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
    backgroundColor: '#fff3b8',
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
    color: '#333',
  },
  answerButton: {
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#555',
    minWidth: '80%',
  },
  answerButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#555',
  },
  answerButtonCorrect: {
    borderColor: '#4CAF50',
  },
  answerButtonWrong: {
    borderColor: '#F44336',
  },
  answerButtonTextCorrect: {
    color: '#4CAF50',
  },
  answerButtonTextWrong: {
    color: '#F44336',
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
    color: '#333',
  },
  restartButton: {
    backgroundColor: '#333',
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

export default MultipleChoiceScreen;
   
