import Filter from "../Containers/Filter";
import React from 'react';

const ToggleFilter = () => {
 return ( 
     <p>Show:
      {" "}<Filter filter="all" >All</Filter>
      {" "}<Filter filter="completed" >Completed</Filter>
      {" "}<Filter filter="active" >Active</Filter>
      </p>
)
}

export default ToggleFilter;