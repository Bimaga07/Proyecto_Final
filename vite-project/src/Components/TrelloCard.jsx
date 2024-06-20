import { Paper} from '@mui/material';
import {styled} from "@mui/system"
import React from 'react'

export const TrelloCard = () => {
  return (
    <StyledPaper>
        Card
    </StyledPaper>
  )
}
const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1,1,1,2),
    margin: theme.spacing(1)
  }));