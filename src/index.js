import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
// if statement
// ternary operators
//logical and operator

const userOne = {
  title: "Some title",
  subtitle: "Welcome to our service!",
  options: ["one", "two"]
};

var templateOne = (
  <div>
    <h1>{userOne.title ? userOne.title : "The value is wrong"}</h1>
    <p>{userOne.subtitle}}</p>
    {userOne.options && userOne.options.length > 0 && <p>One and Two</p>}
    <p>Here are your options: {userOne.options}}</p>
    <ol>
      <li>Item</li>
      <li>Item</li>
    </ol>
  </div>
);

const userTwo = {
  name: "Andrew",
  age: 26,
  location: "Philadelphia"
};

// var userName = "Mike";
// var userAge = 27;
// var userLocation = "Philadelphia";

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  } else {
    return "unknown";
  }
  /*
    equals to:
    if (location) {
    return <p>Location: {location}</p>;
  } else {
    return undefined;
  */
}

var templateTwo = (
  <div>
    <h1>{userTwo.name ? userTwo.name : "Anonymous"}</h1>
    {userTwo.age && userTwo.age >= 18 && <p>Age: {userTwo.age}</p>}
    <p>Location: {getLocation(userTwo.location)}</p>
    {<h3> My H3 </h3>}
    {getLocation(userTwo.location.toUpperCase())}
  </div>
);

var appRoot = document.getElementById("root");

ReactDOM.render(templateOne, appRoot);
