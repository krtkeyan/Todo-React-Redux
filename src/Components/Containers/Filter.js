import Link from "../Presentation/Link";
import React, { Component } from 'react';
class Filter extends Component{
  componentDidMount(){
    const {store} = this.context;
    this.unsubscribe = store.subscribe(()=>{
      this.forceUpdate();
    });
  }

  componentWillUnMount(){
    this.unsubscribe();
  }

  render(){
    const props = this.props;
    const {store} = this.context;
    const state = store.getState();
    return (
      <Link 
      active={ props.filter === state.currentFilter }
      onClick={()=>{
        store.dispatch({
          type:"SET_VISIBILITY",
          filter:props.filter
        })
      }}
      >
      {props.children}
      </Link>
      )
  }
};


Filter.contextTypes = {
  store: React.PropTypes.object
};

export default Filter;