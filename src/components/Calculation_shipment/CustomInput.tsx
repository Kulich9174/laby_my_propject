import React, { useState } from 'react';
import './CustomInput.css'; // Импортируйте свой CSS файл, если нужно

// Определите свойства, которые ваш кастомный input будет принимать
interface CustomInputProps {
  type: string; // тип input, например 'text', 'email', 'password' и т.д.
  placeholder?: string; // необязательное свойство placeholder
  onChange: (value: string) => void; // функция, которая будет вызвана при изменении значения input
}

const CustomInput: React.FC<CustomInputProps> = ({ type, placeholder, onChange }) => {
  const [value, setValue] = useState(''); // Состояние для хранения текущего значения input

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value); // Обновите состояние value
    onChange(event.target.value); // Вызовите функцию onChange, переданную в props
  };

  return (
    <input
      className="custom-input" // Используйте класс для стилизации
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange} // Присвойте обработчик изменений
    />
  );
};

export default CustomInput;