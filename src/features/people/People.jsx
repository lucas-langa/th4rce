import React, { useEffect, useState } from 'react';
import PeopleItem from './PeopleItem';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPeople, getAllPeople } from './peopleSlice';
import Pagination from 'react-pagination-library';
import "react-pagination-library/build/css/index.css";
import Loader from '../Loader';


function People() {
    const [currentPage, setCurrentPage] = useState(1);
    const pageRange = 9;
    const people = useSelector(getAllPeople);
    const dataStatus = useSelector(state => state.people.status)
    console.log(dataStatus)
    const renderedListItems = people.map((person) => {
        return <PeopleItem key={person.name} name={person.name} />
    });
    const dispatch = useDispatch();
    const handlePageChange = pageNumber => {
        dispatch(fetchPeople(pageNumber));
        setCurrentPage(pageNumber);
    };

    if (dataStatus === 'loading')
        return (
            <Loader />
        );
    return (
        <div style={{ textAlign: "center" }} className="d-flex flex-column align-items-center">
            <ul>
                {renderedListItems}
            </ul>

            <Pagination
                totalPages={pageRange}
                currentPage={currentPage}
                changeCurrentPage={handlePageChange}
                theme="square-fill"
            />
        </div>
    );
}

export default People;