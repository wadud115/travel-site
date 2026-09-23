import React from 'react';

const DestinationDetailsPage = async({params}) => {

    const {id} = await params;
    console.log(id)

    return (
        <div>

            DestinationDetailsPage
            
        </div>
    );
};

export default DestinationDetailsPage;