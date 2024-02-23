import React from 'react';

const Account = (props) => {
    console.log(props.userData);
    const {firstName, lastName} = props.userData;
    console.log(props.userData.firstName, props.userData.lastName);
    return (
        <div>
           <h1>This is account section</h1>
        </div>
    );
};

export default Account;