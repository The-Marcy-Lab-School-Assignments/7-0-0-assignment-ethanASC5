const Greeting = ({ greeting, fontSize }) => {
    return (
      <h1 style={{ fontSize: `${fontSize}px` }}>
        {greeting}
      </h1>
    );
  };
  
  export default Greeting;
  