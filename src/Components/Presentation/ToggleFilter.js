import Filter from "../Containers/Filter";
import React from 'react';

const ToggleFilter = () => {
 return ( 
     <p>Show:
      {" "}<Filter filter="SHOW_ALL" >All</Filter>
      {" "}<Filter filter="SHOW_COMPLETED" >Completed</Filter>
      {" "}<Filter filter="SHOW_ACTIVE" >Active</Filter>
      </p>
)
}

export default ToggleFilter;