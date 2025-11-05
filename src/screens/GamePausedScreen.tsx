import React from 'react';
import Button from '../components/Button';

interface GamePausedProps {
  onResume: () => void;
  onRestart: () => void;
  onExit: () => void;
}

const GamePausedScreen: React.FC<GamePausedProps> = ({ onResume, onRestart, onExit }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-white mb-6">Game Paused</h2>
      <div className="flex flex-col space-y-4">
        <Button onClick={onResume}>Resume</Button>
        <Button onClick={onRestart} variant="secondary">Restart Level</Button>
        <Button onClick={onExit} variant="secondary">Exit Game</Button>
      </div>
    </div>
  );
};

export default GamePausedScreen;
