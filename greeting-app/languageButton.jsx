const LanguageButtons = ({ onLanguageChange }) => {
    return (
      <div>
        <button onClick={() => onLanguageChange('english')}>English</button>
        <button onClick={() => onLanguageChange('spanish')}>Spanish</button>
        <button onClick={() => onLanguageChange('creole')}>Haitian Creole</button>
        <button onClick={() => onLanguageChange('portuguese')}>Portuguese</button>
      </div>
    );
  };
  
  export default LanguageButtons;
  