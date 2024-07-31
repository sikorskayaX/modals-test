import React, { useState } from 'react';
import Button from './Button';
import Slide from './Slide';
import { ReactComponent as ListSvg } from '../assets/list.svg';

const ModalWindows = () => {

  const slidesCount = 3;
  const [currentIndex, setCurrentIndex] = useState(1);
  const slidesProps = [
    {
      inputType: 'range',
      question : "Сколько человек работает в вашем отделе продаж?",
      minEmployeeCount : '1',
      maxEmployeeCount : '15',
    }, 
    {
      inputType: 'list',
      question: "Сфера деятельности вашей компании?",
      options : [
        'Оптовая и розничная торговля',
        'Оптовая и розничная торговля',
        'Оптовая и розничная торговля',
        'Оптовая и розничная торговля',
        'Оптовая и розничная торговля',
      ],
    }, 
    {
      inputType: 'checkbox',
      question: "Из каких источников вам приходят заявки?",
      options : [
        'Телефон',
        'Сайт',
        'Вконтакте',
        'WhatsApp',
        'Telegram',
        'Avito',
        'Instagram',
        'Партнеры',
        'Сарафан',
      ]
    }
  ];

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex > 1 ? currentIndex - 1 : 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex < slidesCount ? currentIndex + 1 : slidesCount);
  };

  return (
    <div className="test">
      <div className='test-section__title'>
        <ListSvg/>
        <p className="test-section__text">пройдите тест и получите расчёт стоимости построения отдела продаж в вашей компании</p>
        <span className="test-section__count">{currentIndex}/{slidesCount}</span>
      </div>
      <div className="test__slide"><Slide {...slidesProps[currentIndex - 1]}/></div>
      <div className="test__buttons">
        <Button onClick={handlePrevClick} type = 'prev' text="назад" disabled={currentIndex === 1} />
        <Button onClick={handleNextClick} type = 'next' text = "далее" disabled={currentIndex === slidesCount} />
      </div>
    </div>
  );
};

export default ModalWindows;
