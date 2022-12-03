import React from 'react'
import Select from 'react-select';
import {Options} from '../constant/options';

const customTheme = {
    option: (styles) => {
        return {
          ...styles,
          color: "#000",
          fontSize: "1rem",
          lineHeight: "1.5rem",
          width: "100%",
          background: "#fff",
          ":hover": {
            backgroundColor: "rgb(182 183 184)",
            color: "#000",
            cursor: "pointer",
          },
        };
      },
}


const MemberDropDown = ({onSelectChange,day,shift}) => 
{
  return (
    <div className='px-1'>
        <Select
        placeholder={`Choose Staff`}
        options={Options}
        styles={customTheme}
        onChange = {(selectedOption) => onSelectChange(selectedOption,day,shift)}
        />
    </div>
  )
};

export default MemberDropDown;