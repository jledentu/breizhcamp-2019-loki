import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

const TitleLayout = styled.div(
  {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    '& h1': {
      fontSize: '2.3em',
      color: 'black',
    },
    '& *': {
      color: '#028090'
    }
  }
)

const Footer = styled.footer`
  color: white;
  width: 100vw;
  padding: 2em 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AboutMe = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1em;
`;

const Avatar = styled.img`
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 1em;
`;

const Mention = styled.span`
  color: #033e63;
  font-size: 1em;
`;

const Role = styled.span`
  color: #999;
  font-size: 0.8em;
  font-style: italic;
`;

const BreizhcampImage = styled.img`
  width: 3em;
  height: 3em;
`;

export default props => <TitleLayout>
  <Wrapper {...props}></Wrapper>
  <Footer>
    <AboutMe>
      <Avatar src="./layouts/avatar.jpg"></Avatar>
      <Infos>
        <Mention>@jledentu</Mention>
        <Role>Développeur web</Role>
      </Infos>
    </AboutMe>
    <BreizhcampImage src="./layouts/code-busters.png" alt="Breizhcamp 2019"></BreizhcampImage>
  </Footer>
</TitleLayout>