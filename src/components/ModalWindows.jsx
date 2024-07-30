import React, { useState } from 'react';
import Button from './Button';
import Slide from './Slide';
import listSvg from '../assets/Mask group.png';

const ModalWindows = () => {

  const slidesCount = 3;
  const [currentIndex, setCurrentIndex] = useState(1);
  const [employeeCount, setEmployeeCount] = useState(1);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex > 1 ? currentIndex - 1 : 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex < slidesCount ? currentIndex + 1 : slidesCount);
  };

  const handleEmployeeCountChange = (event) => {
    setEmployeeCount(event.target.value);
  };

  const renderSlide = () => {
    switch (currentIndex) {
      case 1:
        return (
          <Slide
            question="Сколько человек работает в вашем отделе продаж?"
            inputType="range"
            min="1"
            max="15"
            value={employeeCount}
            onChange={handleEmployeeCountChange}
          />
        );
      case 2:
        return (
          <Slide
            question="Сфера деятельности вашей компании?"
            inputType="list"
            options={[
              'Оптовая и розничная торговля',
              'Оптовая и розничная торговля',
              'Оптовая и розничная торговля',
              'Оптовая и розничная торговля',
              'Оптовая и розничная торговля',
            ]}
          />
        );
      case 3:
        return (
          <Slide
            question="Из каких источников вам приходят заявки?"
            inputType="checkbox"
            options={[
              'Телефон',
              'Сайт',
              'Вконтакте',
              'WhatsApp',
              'Telegram',
              'Avito',
              'Instagram',
              'Партнеры',
              'Сарафан',
            ]}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="test">
      <div className='test-section__title'>
        <img src= {listSvg}/>
        <p className="test-section__text">пройдите тест и получите расчёт стоимости построения отдела продаж в вашей компании</p>
        <span className="test-section__count">{currentIndex}/{slidesCount}</span>
      </div>
      <div className="test__slide">{renderSlide()}</div>
      <div className="test__buttons">
        <Button onClick={handlePrevClick} type = 'prev' text="назад" disabled={currentIndex === 1} />
        <Button onClick={handleNextClick} type = 'next' text = "вперед" disabled={currentIndex === slidesCount} />
      </div>
    </div>
  );
};

export default ModalWindows;
