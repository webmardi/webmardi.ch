import React from "react"

import './button.scss';

const Component = props => props.component === 'button' ? <button {...props}/> : <a {...props}/>; // eslint-disable-line jsx-a11y/anchor-has-content

const Button = ({...props}) => {
  props.className = `${props.className} btn btn-secondary`;
  return <Component {...props}/>
};

export default Button;
