
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPeopleById } from './peopleSlice';
import { fetchPerson } from './personSlice';
import { Link } from 'react-router-dom';

const cardStyle = {
    width: 500,

}
const listStyle = {
    listStyleType: "none",
}

function PeopleItem(props) {
    const id = props.name
    const peopleItem = useSelector((state) => getPeopleById(state,id))
    const { name } = peopleItem;

    const dispatch = useDispatch();

    const handleOnClick = (e) => {
        dispatch(fetchPerson(e.target.getAttribute("data-char")));
    }
    return (
        <li style={listStyle}>
            { <div className="card" style={cardStyle}    >
                <div className="card-body">
                    <Link to={`/person/${name}`}>
                        <span data-char={name}  onClick={handleOnClick}> {name} </span>
                    </Link>
                </div>
            </div> }
        </li>
    )
}

export default PeopleItem;