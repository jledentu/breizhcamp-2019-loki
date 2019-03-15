import React from 'react'
import styled from 'styled-components'

export const BackgroundImage = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
    color: 'white',
    'h1, h2': {
      color: 'white',
      textShadow: '0.1em 0.1em 0 black',
    }
  },
  props => ({
    backgroundImage: `url(${props.src})`,
  })
)

export default function({ children, ...otherProps }) {
    return (
      <BackgroundImage {...otherProps}>
        {children}
      </BackgroundImage>
    )
}