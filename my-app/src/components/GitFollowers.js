import React from 'react'

function GitFollowers(props){
    return(
        <>
        {props.followers.map(user=>{
            return(
                <h1>{user.login}</h1>
            )
        })}
        </>
    )
}

export default GitFollowers