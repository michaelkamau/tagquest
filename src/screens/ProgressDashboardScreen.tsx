import React from 'react';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';

const ProgressDashboardScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <Header
          title="Progress Dashboard"
          subtitle="Track your learning journey and achievements."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <h2 className="text-xl font-bold mb-4">Overall Progress</h2>
            <ProgressBar value={75} />
            <p className="text-right mt-2 text-gray-400">75% Mastered</p>
          </Card>

          <Card>
            <h2 className="text-xl font-bold mb-4">Badges Earned</h2>
            <div className="flex space-x-4">
              {/* Placeholder for badges */}
              <div className="bg-yellow-500 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center">HTML5</div>
              <div className="bg-blue-500 text-white font-bold rounded-full h-12 w-12 flex items-center justify-center">CSS3</div>
            </div>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <h2 className="text-xl font-bold mb-4">Completed Modules</h2>
            <ul>
              <li className="border-b border-gray-700 py-2">Text Tags - 95%</li>
              <li className="border-b border-gray-700 py-2">Form Tags - 60%</li>
              <li className="border-b border-gray-700 py-2">Media Tags - 70%</li>
            </ul>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ProgressDashboardScreen;
