import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
width: 45%;
display:flex;
flex-direction: column
margin: 3% auto;
justify-content: space-around;
align-items: center;
padding: 30px;
border: black solid 1px;
border-box: box;
img{
    width:50%;
}
.info{
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center
    justify-content: space-around;
    .text{

    }
}
`

class GitCard extends React.Component{
    constructor(){
        super()
        console.log(this.props)
    }

render(props){
    console.log(this.props.user)
    return (
    <Card>
        <h1>{this.props.user.name}</h1>
        <div className='info'>
        <img src={this.props.user.avatar_url} alt="it's me"/>
        <div className='text'>
            <p>Repos: {this.props.user.public_repos}</p>
            <p>Handle: {this.props.user.login}</p>
        </div>
        </div>
    </Card>)
}
}

export default GitCard