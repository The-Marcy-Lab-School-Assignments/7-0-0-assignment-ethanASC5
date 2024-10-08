const SizeButtons = ({ onSizeChange }) => {
    return (
      <div>
        <button onClick={() => onSizeChange(2)}>Increase Font Size</button>
        <button onClick={() => onSizeChange(-2)}>Decrease Font Size</button>
      </div>
    );
  };
  
  export default SizeButtons;
  