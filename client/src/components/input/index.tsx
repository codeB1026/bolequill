import React, { useState } from 'react';
import { useInputStore } from '../../states';
import { inputPlaceText, leftCharacters } from '../../assets';

export const InputField = () => {
  const { setFocus } = useInputStore();
  const [inputText, setInputText] = useState('');

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const truncatedText = inputValue.slice(0, 15);
    setInputText(truncatedText);
  };

  const handleReset = () => {
    setInputText('');
  };

  const remainingCharacters = 15 - inputText.length;

  return (
    <div className="w-[40rem] relative">
      <input
        type="text"
        className="search_bar input_text"
        value={inputText}
        placeholder='Love'
        onChange={handleInput}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        maxLength={15}
      />
      {inputText && (
          <div className='flex items-center justify-center  mt-2 '>
          <h1 className='dark:text-blue-300 '>{remainingCharacters} {leftCharacters}</h1>
          <button onClick={handleReset} className="px-1 py-1 underline  text-blue-600 dark:text-blue-300 text-sm">
            clear
          </button>
        </div>
      )}
      <span className="input_type_text">
        {inputPlaceText}
      </span>
    </div>
  );
};
