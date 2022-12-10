import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    // const handleLogOut = () => {
    //     logOut()
    //         .then(() => {
    //             navigate('/login');
    //          })
    //         .catch(err => console.log(err));
    // }
    return (
        <div>
        <p className='text-danger'>Something went wrong!!!</p>
        <p className='text-danger'>{error.statusText || error.message}</p>
        {/* <h4 className="fw-bold"> Please <button onClick={handleLogOut}>Sign out</button> and log back in</h4> */}
    </div>
    );
};

export default DisplayError;