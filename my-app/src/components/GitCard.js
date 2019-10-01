import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
width: 45%;
display:flex;
margin: 3%;
justify-content: space-around;
align-items: center;
padding: 30px;
border: black solid 1px;
border-box: box;
img{
    width:50%;
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
        <div>{this.props.user.name}</div>
        <img src={this.props.user.avatar_url} alt="it's me"/>
        <div>{this.props.user.public_repos}</div>
        <div>{this.props.user.login}</div>
    </Card>)
}
}

export default GitCard