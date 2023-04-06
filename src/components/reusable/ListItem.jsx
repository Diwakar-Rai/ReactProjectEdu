import React from 'react'
import {  NavLink } from 'react-router-dom'

const ListItem = (props) => {
  let { styles, linkTo, icon, listText } = props.val;

  // console.log(props)
  return (
    <>
      <li style={{ ...styles }} className='listItemHover'>
        <NavLink to={linkTo} style={{ ...styles.link }}>
          <span style={{ ...styles.span }}>{icon}</span>
          <span style={{ ...styles.span }}>{listText}</span>
        </NavLink>
      </li>
    </>
  );
}

export default ListItem
