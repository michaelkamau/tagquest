import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import WelcomeScreen from './screens/WelcomeScreen';
import ElementChallengeScreen from './screens/ElementChallengeScreen';
import AttributeQuizScreen from './screens/AttributeQuizScreen';
import ProgressDashboardScreen from './screens/ProgressDashboardScreen';
import SettingsProfileScreen from './screens/SettingsProfileScreen';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomeScreen />,
  },
  {
    path: "/element-challenge",
    element: <ElementChallengeScreen />,
  },
  {
    path: "/attribute-quiz",
    element: <AttributeQuizScreen />,
  },
  {
    path: "/dashboard",
    element: <ProgressDashboardScreen />,
  },
  {
    path: "/profile",
    element: <SettingsProfileScreen />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
