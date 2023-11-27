import React from 'react';

interface Button {
      id: number;
      label: string;
}

const buttonData: Button[] = [
      { id: 1, label: 'gym' },
      { id: 2, label: 'motivation' },
      { id: 3, label: 'love' },
      { id: 4, label: 'friendship' },
      { id: 5, label: 'sad' },
      { id: 6, label: 'war' },
      { id: 7, label: 'peace' },
      { id: 8, label: 'food' },
      { id: 9, label: 'educational' },
      { id: 10, label: 'business' },
];

const ButtonList: React.FC = () => (
      <div className="flex flex-wrap items-center justify-center">
            {buttonData.map(({ id, label }) => (
                  <button key={id} className="btn2 m-2">
                        {label}
                  </button>
            ))}
      </div>
);

export default ButtonList;
