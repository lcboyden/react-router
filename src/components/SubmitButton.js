import React, {useState} from 'react';

export default function SubmitButton(props) {
    const [enterSubmit, setEnterSubmit] = useState(false);
    
    function mouseEnter(){
        setEnterSubmit(true)
    }

    function mouseExit(){
        setEnterSubmit(false)
    }

  return (
    <button 
      onMouseEnter={() => mouseEnter()} 
      onMouseLeave={() => mouseExit()} 
      style={enterSubmit ? {...styles.SubmitButton,...styles.active} : styles.SubmitButton
      }
      type="submit"
      >
        add
    </button>
  );
};

const styles = {
  SubmitButton: {
    //custom styles
    fontsize: "16px",
    background: "violet",
    border: "none",
    padding: "10px",
    width: "100px",
    color: "white",
  },
  active: {
    cursor: "pointer",
    background: "blue",
  },
};