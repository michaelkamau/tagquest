import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import Header from '../components/Header';

const WelcomeScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <Header
        title="Welcome to TagQuest"
        subtitle="Your adventure in learning HTML starts here."
      />

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
        <Card className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-4">Element Basics</h2>
          <p className="mb-6">Learn the building blocks of the web. Master HTML tags from headers to paragraphs.</p>
          <Link to="/element-challenge">
            <Button>Start Learning</Button>
          </Link>
        </Card>

        <Card className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-4">Attribute Adventure</h2>
          <p className="mb-6">Dive deeper and understand how attributes modify and enhance HTML elements.</p>
          <Link to="/attribute-quiz">
            <Button>Start Challenge</Button>
          </Link>
        </Card>
      </div>

      <div className="mt-12">
        <Link to="/dashboard">
          <Button variant="secondary">View My Progress</Button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeScreen;
