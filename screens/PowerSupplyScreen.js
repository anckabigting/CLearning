import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const PowerSupplyQuizScreen = ({ navigation }) => {
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
      question: '1. What is the main purpose of a power supply unit (PSU)?',
      options: [
        'To provide power to the computer components',
        'To connect and communicate between different computer components',
        'To store data and software programs',
        'To provide cooling for the computer components',
      ],
      CorrectAnswer: 'To provide power to the computer components',
    },
    {
      question: '2. What is the most common form factor for desktop power supplies?',
      options: ['ATX', 'SFX', 'TFX', 'Flex ATX'],
      CorrectAnswer: 'ATX',
    },
    {
      question: '3. What is the efficiency rating of a power supply unit?',
      options: [
        'The amount of power it can deliver to the computer components',
        'The amount of heat it generates during operation',
        'The percentage of input power that is converted to output power',
        'The number of power connectors it has',
      ],
      CorrectAnswer: 'The percentage of input power that is converted to output power',
    },
    {
      question: '4. What is the unit of measurement for the power output of a power supply?',
      options: [
        'Volts',
        'Watts',
        'Amps',
        'Ohms',
      ],
      CorrectAnswer: 'Watts',
    },
    {
      question: '5. What is the purpose of the 24-pin power connector on a power supply?',
      options: [
        'To provide power to the CPU',
        'To provide power to the RAM',
        'To provide power to the graphics card',
        'To provide power to the motherboard',
      ],
      CorrectAnswer: 'To provide power to the motherboard',
    },
    {
      question: '6. What is the purpose of the 4-pin or 8-pin CPU power connector on a power supply?',
      options: [
        'To provide power to the RAM',
        'To provide power to the graphics card',
        'To provide power to the motherboard',
        'To provide power to the CPU',
      ],
      CorrectAnswer: 'To provide power to the CPU',
    },
    {
      question: '7. What is the purpose of the PCIe power connectors on a power supply?',
      options: [
        'To provide power to the CPU',
        'To provide power to the RAM',
        'To provide power to the graphics card',
        'To provide power to the motherboard',
      ],
      CorrectAnswer: 'To provide power to the graphics card',
    },
    {
      question: '8. What is the difference between a modular power supply and a non-modular power supply?',
      options: [
        'A modular power supply allows you to detach unused cables, while a non-modular power supply has all cables attached',
        'A non-modular power supply is more energy efficient than a modular power supply',
        'A modular power supply has a higher wattage output than a non-modular power supply',
        'A non-modular power supply is quieter than a modular power supply',
      ],
      CorrectAnswer: 'A modular power supply allows you to detach unused cables, while a non-modular power supply has all cables attached',
    },
    {
      question: '9. What is the unit of measurement for the power output of a power supply?',
      options: [
        'Volts',
        'Watts',
        'Amps',
        'Ohms',
      ],
      CorrectAnswer: 'Watts',
    },
    {
      question: '10. What is the purpose fan of a power supply?',
      options: [
        'To cool the power supply unit',
        'To cool the CPU',
        'To cool the GPU',
        'To cool the RAM',
      ],
      CorrectAnswer: 'To cool the power supply unit',
    },
    {
      question: '11. Which of the following connectors is commonly used for powering modern graphics cards?',
      options: [
        'Molex connector',
        'SATA connector',
        'PCIe connector',
        'ATX connector',
      ],
      CorrectAnswer: 'PCIe connector',
    },
    {
      question: '12. What is the purpose of the voltage regulation of a power supply?',
      options: [
        'To regulate the amount of current flowing through the power supply',
        'To regulate the amount of voltage flowing to the motherboard',
        'To regulate the amount of power being used by the computer',
        'To regulate the amount of heat generated by the power supply',
      ],
      CorrectAnswer: 'To regulate the amount of voltage flowing to the motherboard',
    },
    {
      question: '13. Which of the following is a common feature of a modular power supply?',
      options: [
        'All cables are permanently attached to the power supply',
        'Only some cables are permanently attached to the power supply',
        'All cables can be removed from the power supply',
        'All cables are wireless',
      ],
      CorrectAnswer: 'Only some cables are permanently attached to the power supply',
    },
    {
      question: '14. What is the function of the surge protector of a power supply?',
      options: [
        'To protect the power supply from power surges',
        'To protect the computer from power surges',
        'To regulate the power supply output',
        'To regulate the power input to the power supply',
      ],
      CorrectAnswer: 'To protect the computer from power surges',
    },
    {
      question: '15. Which of the following is a common feature of the active power factor correction (PFC)?',
      options: [
        'It reduces the power factor of the power supply',
        'It increases the efficiency of the power supply',
        'It reduces the heat generated by the power supply',
        'It reduces the amount of noise generated by the power supply',
      ],
      CorrectAnswer: 'It increases the efficiency of the power supply',
    },
    {
      question: '16. What is the purpose of the 12V rail?',
      options: [
        'To power the CPU',
        'To power the motherboard',
        'To power the graphics card',
        'To power the hard drives',
      ],
      CorrectAnswer: 'To power the graphics card',
    },
    {
      question: '17. Which of the following is a common feature of over-voltage protection (OVP)?',
      options: [
        'It protects the power supply from voltage spikes',
        'It protects the computer from voltage spikes',
        'It regulates the voltage output of the power supply',
        'It regulates the voltage input to the power supply',
      ],
      CorrectAnswer: 'It protects the computer from voltage spikes',
    },
    {
      question: '18. Which of the following is a common feature of over-current protection (OCP)?',
      options: [
        'It protects the power supply from overloading',
        'It protects the computer from overloading',
        'It regulates the current output of the power supply',
        'It regulates the current input to the power supply',
      ],
      CorrectAnswer: 'It protects the computer from overloading',
    },
    {
      question: '19. What is the 80 Plus certification for power supplies?',
      options: [
        'A standard for power supply efficiency',
        'A standard for power supply output voltage',
        'A standard for power supply physical size',
        'A standard for power supply fan noise level',
      ],
      CorrectAnswer: 'A standard for power supply efficiency',
    },
    {
      question: '20. What is the purpose of a modular power supply?',
      options: [
        'To improve the airflow in the computer case',
        'To increase the power output of the power supply',
        'To reduce the cost of the power supply',
        'To allow the user to connect only the cables that are needed',
      ],
      CorrectAnswer: 'To allow the user to connect only the cables that are needed',
    }
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

export default PowerSupplyQuizScreen;
