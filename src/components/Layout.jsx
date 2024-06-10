import React from 'react';

// This is for sections that have the same style 
export const Sectiongrid = (props) => {
    return (
        <section className={`${props.nameSection} section`}>
            <div className={`${props.nameContainer} container`}>
            {props.children}
            </div>
        </section>
    );
}






export const Sectionflex = (props) => {
    return (
            <div className={`${props.nameContainer} container`}>
            {props.children}
            </div>
    );
}



