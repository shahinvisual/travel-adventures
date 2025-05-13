import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';

const UpdateProfile = () => {
    const data_name = useContext(AuthContext)
    return (
        <div>
            <h1>update profile.....</h1>
        </div>
    );
};

export default UpdateProfile;