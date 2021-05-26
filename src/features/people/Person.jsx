import React from "react";
import { useSelector } from "react-redux";
import { getThemById } from "./personSlice";
import { Link } from 'react-router-dom';
import starwarsImg from '../../images/starwars.png'

function Person(props) {
    const { name } = props.match.params;

    const yours = useSelector((state) => getThemById(state, name));

    if (!yours)
        return (<p>Loading....</p>)
    return (
        <div className="card" style={{width:400}}>
            <img className="card-img-top" src={starwarsImg} alt="would be star wars character if i were good at redux"/>
            <div className="card-body">
                <h4 className="card-title">Name: {yours.name}</h4>
                <p className="card-text">Height: {yours.height}</p>
                <p className="card-text">Weight: {yours.weight}</p>
                <p className="card-text">Homeworld: {yours.homeworld}</p>
                <p className="card-text">Gender: {yours.gender}</p>
                <p className="card-text">Mass: {yours.mass}</p>
                <Link to={"/"}>back to your characters</Link>
            </div>
        </div>
     )
    }
export default Person