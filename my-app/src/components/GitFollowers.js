import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
display:flex;
flex-wrap: wrap;
margin: 0 auto;
`

const Card = styled.div`
width: 27%
margin: 3% 2%;
display: flex;
flex-direction: column;
align-content: center;
align-items: center
img{
    width:60%
    border-radius: 3px;
    margin-bottom:1%
}
a{
    text-decoration: none;
    margin: 2% 0;
    color: black;
    :hover{
        font-weight:700;
    }
}
`

function GitFollowers(props){
    return(
        <CardWrapper>
        {props.followers.map(user=>{
            return(
                <Card>
                    <h3>{user.login}</h3>
                    <img src={user.avatar_url} alt={user.login}/>
                    <a href={user.html_url}>{user.html_url}</a>
                </Card>

            )
        })}
        </CardWrapper>
    )
}

export default GitFollowers