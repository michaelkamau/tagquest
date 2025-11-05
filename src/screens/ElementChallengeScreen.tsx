import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Modal from '../components/Modal';
import GamePausedScreen from './GamePausedScreen';
import Header from '../components/Header';
import Card from '../components/Card';

// Sample data for the challenge
const challenges = [
  { id: 1, question: '<h1></h1>', options: ['h1', 'p', 'div'], answer: 'h1' },
  { id: 2, question: '<p></p>', options: ['p', 'span', 'a'], answer: 'p' },
  { id: 3, question: '<a></a>', options: ['a', 'img', 'button'], answer: 'a' },
];

const ElementChallengeScreen: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const navigate = useNavigate();

  const currentChallenge = challenges[currentChallengeIndex];

  const handlePause = () => setIsPaused(true);
  const handleResume = () => setIsPaused(false);

  const handleRestart = () => {
    setCurrentChallengeIndex(0);
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
    if (selectedOption === currentChallenge.answer) {
      setFeedback('Correct! Well done.');
      // Move to the next challenge after a short delay
      setTimeout(() => {
        if (currentChallengeIndex < challenges.length - 1) {
          setCurrentChallengeIndex(currentChallengeIndex + 1);
          setSelectedOption(null);
          setFeedback(null);
        } else {
          setFeedback('Congratulations! You have completed all challenges.');
        }
      }, 1500);
    } else {
      setFeedback('Incorrect. Try again!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
      <Header title="HTML Element Challenge" />
      <div className="absolute top-8 right-8">
        <Button onClick={handlePause} variant="secondary">Pause</Button>
      </div>

      <Card className="w-full max-w-2xl text-center">
        <p className="text-lg mb-4">Identify the HTML tag for the element shown below:</p>
        <div className="bg-gray-700 rounded-lg p-8 mb-6">
          <code className="text-4xl font-mono">{currentChallenge.question}</code>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {currentChallenge.options.map((option) => (
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

export default ElementChallengeScreen;
