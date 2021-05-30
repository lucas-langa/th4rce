import React from "react";
import { useSelector } from "react-redux";
import { getThemById } from "./personSlice";
import { Link } from 'react-router-dom';
import starwarsImg from '../../images/starwars.png'
import Loader from "../Loader";

function Person(props) {
    const { name } = props.match.params;
    const yours = useSelector((state) => getThemById(state, name));
    const dataStatus = useSelector((state) => state.person.status)

    if (dataStatus === 'loading')
        return (<Loader/>)
    return (
        <div className="d-flex flex-column align-items-center">
            <div className="card" style={{ width: 400 }}>
                <img className="card-img-top" src={starwarsImg} alt="would be star wars character if i were good at redux" />
                <div className="card-body">
                    <h4 className="card-title" style={{textAlign:"center"}}>{yours.name}</h4>
                    <p className="card-text">Height: {isNaN(yours.height) ? yours.height : `${yours.height/100}m`}</p>
                    <p className="card-text">Homeworld: {yours.homeworld}</p>
                    <p className="card-text">Gender: {yours.gender}</p>
                    <p className="card-text">Mass: {isNaN(yours.mass) ? yours.mass : `${yours.mass}kg`}</p>
                    <Link to={"/"}>back to other characters</Link>
                </div>
            </div>
        </div>
    )
}
export default Person