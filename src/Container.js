import React from 'react';
import styled from 'styled-components'

const Frame = styled.div`
margin: 5% 15% 0% 15%;
background-color: white;
display: flex;
// justify-content: center;
align-items: center;
// height: 90vh;
flex-direction: column;
`

class Container extends React.Component{

    render(){
        return(
            <Frame>
                {this.props.children}
            </Frame>
        )
    }
}

export default Container;