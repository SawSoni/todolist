import React from 'react';


const ShowUsername = (props) => {
    console.log("this is show user here", props)
    return(
        <div>
            {props.users.map((item) => <p>{item.name}</p>)}
        </div>
    )
}

export default ShowUsername;