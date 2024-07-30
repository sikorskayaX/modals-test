﻿import React, { useState } from 'react';
import './styles/style.scss';
import ModalWindows from './components/ModalWindows';
import Button from './components/Button';

const App = () => {
  const [isProcess, setIsProcess] = useState(false);
  const openTest = () => setIsProcess(true);

  return (
    <>
      {!isProcess && <Button onClick={openTest} type = 'start' text = 'начать тест'/>}
      {isProcess &&  <ModalWindows/>}
    </>
  )
}

export default App