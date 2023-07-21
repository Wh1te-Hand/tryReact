import React from 'react';

const MySelect=({options,defaultValue,value,onChange})=>{

return (
        <select>
           <option disabled={true} value="">{defaultValue}</option>
           {options.map((option)=>
           <option key={option.value} value={option.value}>{option.name}</option>
           )}
        </select>
);

}
export default MySelect;
