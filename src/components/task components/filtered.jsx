
const RadioButtons = ({selectedOption,setSelectedOption}) => {
  // Set the default selected radio button
  

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <form>
      <label>
        <input
          type="radio"
          name="status"
          value="all"
          checked={selectedOption === "all"}
          onChange={handleOptionChange}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          name="status"
          value="completed"
          checked={selectedOption === "completed"}
          onChange={handleOptionChange}
        />
        Completed
      </label>
      <label>
        <input
          type="radio"
          name="status"
          value="incomplete"
          checked={selectedOption === "incomplete"}
          onChange={handleOptionChange}
        />
        Incomplete
      </label>
    </form>
  );
};

export default RadioButtons;
