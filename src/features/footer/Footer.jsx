import React from 'react';

export default function Footer() {
    return (
        
        <div className="container" style={{textAlign:"center",background:"black",position:"absolute", width:"100%",bottom:0}}>
            <footer className="footer" >
               <span className="text-muted">
                    uses the starwars API https://swapi.dev
                    </span>
            </footer>
        </div>
    );
};