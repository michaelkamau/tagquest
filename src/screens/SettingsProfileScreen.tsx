import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import TextInput from '../components/TextInput';
import ProgressBar from '../components/ProgressBar';
import Button from '../components/Button';

const SettingsProfileScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <Header
          title="Profile Settings"
          subtitle="Manage your profile information and game progress."
        />

        <Card className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">PlayerOne</h3>
              <p className="text-gray-400">Member since Jan 2024</p>
              <p className="text-gray-400">Current Level: HTML Adept</p>
            </div>
            <Button variant="secondary">Upload new photo</Button>
          </div>
        </Card>

        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <TextInput label="Username" defaultValue="PlayerOne" />
            <TextInput label="Email Address" type="email" defaultValue="playerone@email.com" />
          </div>

          <Card className="mb-8">
            <h3 className="text-xl font-bold mb-4">Learning Progress</h3>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span>Overall Progress</span>
                <span className="text-blue-400">75%</span>
              </div>
              <ProgressBar value={75} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-bold">Text Tags</p>
                <p className="text-green-400">95% Mastered</p>
              </div>
              <div>
                <p className="font-bold">Form Tags</p>
                <p className="text-yellow-400">60% Mastered</p>
              </div>
              <div>
                <p className="font-bold">Media Tags</p>
                <p className="text-blue-400">70% Mastered</p>
              </div>
            </div>
          </Card>

          <div className="flex justify-end space-x-4">
            <Button variant="secondary" type="button">Cancel</Button>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default SettingsProfileScreen;
