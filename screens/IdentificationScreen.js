import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const components = [
  {
    image: require('./images/cpu.jpg'),
    options: ['CPU', 'RAM', 'GPU', 'Northbridge'],
    answer: 'CPU',
  },
  {
    image: require('./images/ram.jpg'),
    options: ['Northbridge', 'GPU', 'RAM', 'CPU'],
    answer: 'RAM',
  },
  // Add more components with their respective images, options, and answers
];

const ComponentQuizScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (selectedOption) => {
    const currentQuestion = components[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answer;
    const newScore = isCorrect ? score + 1 : score;
    setScore(newScore);
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < components.length) {
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

  const currentQuestion = components[currentQuestionIndex];

  return (
    <View style={styles.container}>
      {showScore ? (
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>You scored {score} out of {components.length}.</Text>
          <TouchableOpacity style={styles.restartButton} onPress={handleRestartButtonClick}>
            <Text style={styles.restartButtonText}>Restart Quiz</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.questionContainer}>
          <Image source={currentQuestion.image} style={styles.image} />
          <Text style={styles.questionText}>Which component is shown in the picture?</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fcf5cf',
  },
  questionContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#69c0e6',
  },
  answerButton: {
    backgroundColor: '#fff',
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
  scoreContainer: {
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  }});

  export default IdentificationScreen;