import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const MotherboardQuizScreen = ({ navigation }) => {
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
      question: '1. What is the purpose of the motherboard?',
      options: [
        'To provide power to the computer',
        'To connect all the other components of the computer together',
        'To store data and programs',
        'To display images on the screen',
      ],
      CorrectAnswer: 'To connect all the other components of the computer together',
    },
    {
      question: '2. What is the CPU?',
      options: [
        'The part of the motherboard that provides power to the computer',
        'The part of the computer that stores data and programs',
        'The part of the computer that displays images on the screen',
        'The part of the computer that performs calculations and controls the other components',
      ],
      CorrectAnswer: 'The part of the computer that performs calculations and controls the other components',
    },
    {
      question: '3. What is the main purpose of a chipset on a motherboard?',
      options: [
        'To regulate power to the CPU and other components',
        'To provide storage for data and programs',
        'To manage communication between the CPU, memory, and other components',
        'To provide audio and video output',
      ],
      CorrectAnswer: 'To manage communication between the CPU, memory, and other components',
    },
    {
      question: '4. What type of slot is commonly used for adding a graphics card to a motherboard?',
      options: [
        'PCIe',
        'PCI',
        'AGP',
        'ISA',
      ],
      CorrectAnswer: 'PCIe',
    },
    {
      question: '5. Which of the following is NOT typically integrated into a motherboard?',
      options: [
        'CPU',
        'RAM',
        'Hard drive',
        'Graphics card',
      ],
      CorrectAnswer: 'Graphics card',
    },
    {
      question: '6. What is the purpose of the BIOS chip on a motherboard?',
      options: [
        'To store the operating system',
        'To provide power to the motherboard',
        'To store settings and data related to the motherboard and its components',
        'To provide cooling for the motherboard',
      ],
      CorrectAnswer: 'To store settings and data related to the motherboard and its components',
    },
    {
      question: '7. What type of connector is typically used to connect a power supply to a motherboard?',
      options: [
        'SATA',
        'IDE',
        'Molex',
        'ATX',
      ],
      CorrectAnswer: 'ATX',
    },
    {
      question: '8. What is the purpose of the CMOS battery on a motherboard?',
      options: [
        'To power the motherboard when the main power is disconnected',
        'To store BIOS settings and system time',
        'To provide extra cooling to the CPU',
        'To increase the speed of the RAM',
      ],
      CorrectAnswer: 'To store BIOS settings and system time',
    },
    {
      question: '9. What type of connector is typically used to connect a hard drive to a motherboard?',
      options: [
        'SATA',
        'IDE',
        'SCSI',
        'USB',
      ],
      CorrectAnswer: 'SATA',
    },
    {
      question: '10. What type of memory module is commonly used in modern motherboards?',
      options: [
        'SIMM',
        'DIMM',
        'RIMM',
        'SODIMM',
      ],
      CorrectAnswer: 'DIMM',
    },
    {
      question: "11. What is the purpose of the Northbridge on a motherboard?",
      options: [
        "To manage communication between the CPU and RAM",
        "To manage communication between the CPU and Southbridge",
        "To regulate power to the CPU and other components",
        "To provide audio and video output",
      ],
      CorrectAnswer: "To manage communication between the CPU and RAM"
    },
    {
      question: "12. What is the maximum amount of RAM that can be supported by a 32-bit motherboard?",
      options: [
        "2GB",
        "4GB",
        "8GB",
        "16GB",
      ],
      CorrectAnswer: "4GB"
    },
    {
      question: "13. What is the purpose of the Southbridge on a motherboard?",
      options: [
        "To manage communication between the CPU and RAM",
        "To manage communication between the CPU and Northbridge",
        "To manage communication between peripheral devices and the CPU",
        "To provide audio and video output"
      ],
      CorrectAnswer: "To manage communication between peripheral devices and the CPU",
    },
    {
      question: "14. What is the purpose of the PCI Express (PCIe) slots on a motherboard?",
      options: [
        "To provide power to the motherboard",
        "To store data and programs",
        "To manage communication between the CPU and RAM",
        "To add expansion cards for additional functionality"
      ],
      CorrectAnswer: "To add expansion cards for additional functionality",
    },
    {
      question: "15. What type of socket is commonly used to connect a CPU to a motherboard?",
      options: [
        "LGA",
        "PGA",
        "BGA",
        "FCPGA"
      ],
      CorrectAnswer: "LGA",
    },
    {
      question: "16. What is the purpose of the heat sink and fan assembly on a motherboard?",
      options: [
        "To regulate power to the motherboard",
        "To store data and programs",
        "To manage communication between the CPU and RAM",
        "To dissipate heat generated by the CPU"
      ],
      CorrectAnswer: "To dissipate heat generated by the CPU"
    },
    {
      question: "17. What type of expansion slot is typically used for adding a sound card to a motherboard?",
      options: [
        "PCI",
        "PCIe",
        "AGP",
        "ISA"
      ],
      CorrectAnswer: "PCI"
    },
    {
      question: "18. What is the purpose of the Super I/O chip on a motherboard?",
      options: [
        "To manage communication between the CPU and RAM",
        "To manage communication between the CPU and peripheral devices",
        "To regulate power to the CPU and other components",
        "To provide audio and video output"
      ],
      CorrectAnswer: "To manage communication between the CPU and peripheral devices"
    },
    {
      question: "19. What is the function of CMOS on a motherboard?",
      options: [
        "To manage communication between the CPU and RAM",
        "To store the system configuration information",
        "To regulate power to the CPU and other components",
        "To provide audio and video output"
      ],
      CorrectAnswer: "To store the system configuration information"
    },
    {
      question: "20. What is the purpose of the M.2 slot on a motherboard?",
      options: [
        "To provide power to the motherboard",
        "To add expansion cards for additional functionality",
        "To manage communication between the CPU and RAM",
        "To support high-speed solid-state drives"
      ],
      CorrectAnswer: "To support high-speed solid-state drives"
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

export default MotherboardQuizScreen;
