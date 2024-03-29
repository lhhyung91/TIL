import React from 'react';

type GreetingProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void;
  children?: React.ReactNode;
};

function Greetings({ name, mark, optional, onClick }: GreetingProps) {
  const handleClick = () => onClick(name);

  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>눌러봐</button>
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!',
};

export default Greetings;
