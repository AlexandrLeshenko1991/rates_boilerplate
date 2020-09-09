import React from 'react'
import { StyledContainer } from './style'

export type TComponentProps = {
}

const Loader: React.FC<TComponentProps> = () => {
  return (
    <StyledContainer>
       <div> LOAD... </div>
    </StyledContainer>
  )
}

export default Loader