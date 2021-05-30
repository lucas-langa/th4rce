import React from "react";
import starwarsImg from '../../images/starwars.png'

const jumbotron = {
  backgroundImage: `url(${starwarsImg})`,
  // backgroundSize: "contain",
  backgroundRepeat: "repeat-x",
  // backgroundPosition:"right",
  textAlign:"center",
  backgroundColor:"#2ecc71",
  color:"white"
}

function Header(props){
  // console.log(props.match.params)
    return(
      <div className="jumbotron" style={jumbotron}>
        <div className="container">
          <h1>Welcome to the star wars universe</h1>
          <p>Simply click on a character name to learn more about them.</p>
        </div>
      </div>
    )
}

export default Header;