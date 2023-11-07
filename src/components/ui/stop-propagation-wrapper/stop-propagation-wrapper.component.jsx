const StopPropagationWrapper = ({ children }) => {
    const handleClick = (e) => {
      e.stopPropagation();
    };
  
    return (
      <div onClick={handleClick}>
        {children}
      </div>
    );
  };
  
  export default StopPropagationWrapper;

  