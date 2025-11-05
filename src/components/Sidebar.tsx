import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">HTML Hero</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/profile" className="block py-2 px-4 rounded hover:bg-gray-800">Profile</NavLink>
          </li>
          <li>
            <NavLink to="/preferences" className="block py-2 px-4 rounded hover:bg-gray-800">Preferences</NavLink>
          </li>
          <li>
            <NavLink to="/learning-history" className="block py-2 px-4 rounded hover:bg-gray-800">Learning History</NavLink>
          </li>
          <li>
            <NavLink to="/account" className="block py-2 px-4 rounded hover:bg-gray-800">Account</NavLink>
          </li>
        </ul>
      </nav>
      <div className="mt-auto">
        <NavLink to="/logout" className="block py-2 px-4 rounded hover:bg-gray-800">Log Out</NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
