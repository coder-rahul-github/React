import React from 'react'

function User({data}) {
    return (
        <div>
            <h1>Name={data.name}</h1>
            <h1>Age={data.age}</h1>
            <h1>email={data.email}</h1>
        </div>
    )
}

export default User
