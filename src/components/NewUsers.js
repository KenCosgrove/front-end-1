import React from 'react'
import styled from 'styled-components'

const Nameh3 = styled.h3`
   color: white;
   text-shadow: 2px 1px black;

   `

const NewUsers = (props) => {
    const {name, picture} = props

    return (
        <div >
            
            
            <img src={picture} alt="user info"/>
            <Nameh3>{name}</Nameh3>
            
        </div>
    )
}

export default NewUsers
