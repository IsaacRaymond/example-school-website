import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

import { link } from '../styles/header.css';

var pages =
[
    {address: "/calendars", name: "Calendars"},
    {address: "/our-schools", name: "Our Schools"},
    {address: "/school-board", name: "School Board"},
    {address: "/student-parent-resources", name: "Student/Parent Resources"},
    {address: "/staff-resources", name: "Staff Resources"},
    {address: "/employment", name: "Employment"},
    {address: "/", name: "Homepage"}
];

//Create a raised button that links to each page
var links = [];
for (var i = 0; i < pages.length; i++){
  links.push(
    <Link className = "link " to={pages[i].address}>
      <MenuItem primaryText = {pages[i].name} />
    </Link>
  );
}

export var buttons = [];
for (var i = 0; i < pages.length; i++){

  if ( i === 3 ) {
    buttons.push(<br />);
  }

  buttons.push(
    <Link to={pages[i].address}>
      <div className = "button">{pages[i].name}</div>
    </Link>
  );
}

export default links;