import React from "react";
import { useSelector } from "react-redux";
import { getThemById } from "./personSlice";
import { Link } from 'react-router-dom';

function Person(props) {
    const { name } = props.match.params;

    const yours = useSelector((state) => getThemById(state, name));

    if (!yours)
        return (<p>Loading....</p>)
    return (
        <div className="card" style={{width:400}}>
            <img className="card-img-top" src="./starwars.png"/>
            <div className="card-body">
                <h4 className="card-title">{yours.name}</h4>
                <p className="card-text">{yours.height}</p>
                <p className="card-text">{yours.weight}</p>
                <p className="card-text">{yours.homeworld}</p>
                <p className="card-text">{yours.gender}</p>
                <p className="card-text">{yours.mass}</p>
                <Link to={"/"}>back to your characters</Link>
            </div>
        </div>
     )
    }
export default Person