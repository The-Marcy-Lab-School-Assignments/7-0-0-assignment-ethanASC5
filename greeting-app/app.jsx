import React, { useState } from 'react';
import Greeting from './components/Greeting';
import LanguageButtons from './components/LanguageButtons';
import SizeButtons from './components/SizeButtons';

const App = () => {
  /** FEEDBACK: Your app is not showing any of these components. It is showing the default counter and typescript. */
  const [greeting, setGreeting] = useState('Good Morning');
  const [fontSize, setFontSize] = useState(16);

  const greetings = {
    english: 'Good Morning',
    spanish: 'Buenos Días',
    creole: 'Bonjou',
    portuguese: 'Bom Dia',
  };

  const handleLanguageChange = (language) => {
    setGreeting(greetings[language]);
  };

  const handleFontSizeChange = (size) => {
    setFontSize((prevSize) => prevSize + size);
  };

  return (
    <div>
      <SizeButtons onSizeChange={handleFontSizeChange} />
      <Greeting greeting={greeting} fontSize={fontSize} />
      <LanguageButtons onLanguageChange={handleLanguageChange} />
    </div>
  );
};

export default App;
