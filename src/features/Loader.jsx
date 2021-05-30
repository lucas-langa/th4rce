import React from 'react';
const loaderStyles = {
    fontSize: 500,
    margin:"auto",
}
function Loader() {
    return (
        <div className="d-flex flex-column align-items-center" style={loaderStyles}>
            <i className="fa fa-cog fa-spin"/>
        </div>
    );
}

export default Loader;