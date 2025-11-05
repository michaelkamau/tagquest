import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Modal from '../components/Modal';
import GamePausedScreen from './GamePausedScreen';
import Header from '../components/Header';
import Card from '../components/Card';

// Sample data for the quiz
const quizzes = [
  { id: 1, question: 'Which attribute specifies the URL for an image?', element: '<img>', options: ['src', 'href', 'link'], answer: 'src' },
  { id: 2, question: 'Which attribute provides alternative text for an image?', element: '<img>', options: ['alt', 'title', 'text'], answer: 'alt' },
  { id: 3, question: 'Which attribute specifies the destination of a link?', element: '<a>', options: ['href', 'src', 'url'], answer: 'href' },
];

const AttributeQuizScreen: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const navigate = useNavigate();

  const currentQuiz = quizzes[currentQuizIndex];

  const handlePause = () => setIsPaused(true);
  const handleResume = () => setIsPaused(false);

  const handleRestart = () => {
    setCurrentQuizIndex(0);
    setSelectedOption(null);
    setFeedback(null);
    setIsPaused(false);
  };

  const handleExit = () => {
    navigate('/');
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setFeedback(null);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === currentQuiz.answer) {
      setFeedback('Correct! Excellent.');
      // Move to the next quiz after a short delay
      setTimeout(() => {
        if (currentQuizIndex < quizzes.length - 1) {
          setCurrentQuizIndex(currentQuizIndex + 1);
          setSelectedOption(null);
          setFeedback(null);
        } else {
          setFeedback('Congratulations! You have completed the quiz.');
        }
      }, 1500);
    } else {
      setFeedback('Incorrect. Give it another shot!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <Header title="Attribute Quiz" />
      <div className="absolute top-8 right-8">
        <Button onClick={handlePause} variant="secondary">Pause</Button>
      </div>

      <Card className="w-full max-w-2xl text-center">
        <p className="text-lg mb-4">{currentQuiz.question}</p>
        <div className="bg-gray-700 rounded-lg p-8 mb-6">
          <code className="text-4xl font-mono">{currentQuiz.element}</code>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {currentQuiz.options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelectOption(option)}
              className={`p-4 rounded-lg font-semibold ${
                selectedOption === option
                  ? 'bg-blue-600 ring-2 ring-blue-300'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <Button onClick={handleCheckAnswer} disabled={!selectedOption}>
          Check Answer
        </Button>

        {feedback && (
          <p className={`mt-4 text-lg ${feedback.includes('Correct') ? 'text-green-400' : 'text-red-400'}`}>
            {feedback}
          </p>
        )}
      </Card>

      <Modal isOpen={isPaused} onClose={handleResume}>
        <GamePausedScreen
          onResume={handleResume}
          onRestart={handleRestart}
          onExit={handleExit}
        />
      </Modal>
    </div>
  );
};

export default AttributeQuizScreen;
