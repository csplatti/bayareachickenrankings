import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { DndContext } from '@dnd-kit/core';

import TierBar from './components/TierBar';
import TierList from './components/TierList';
import './App.css'

function App() {
  return (
    <>
    <span className="page_title">Bay Area Chicken Rankings</span>
    <div>
        <TierList/>
    </div>
    </>
  );
}

export default App
