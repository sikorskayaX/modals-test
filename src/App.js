﻿import React, { useState } from 'react';
import './styles/style.scss';
import ModalWindows from './components/ModalWindows';
import Button from './components/Button';

const App = () => {
  const [isProcess, setIsProcess] = useState(false);
  const openTest = () => setIsProcess(true);

  return (
    <>
      {isProcess ?  <ModalWindows/> : <Button onClick={openTest} type = 'start' text = 'начать тест'/>}
    </>
  )
}

export default App