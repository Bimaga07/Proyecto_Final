import React from 'react'
import {Paper, CssBaseline} from "@mui/material"
import {styled} from "@mui/system"
import { ListTitle } from './ListTitle'
import { TrelloCard } from './TrelloCard'
import { AddCardorList } from './AddCardorList'



export const TrelloList = () => {
    
    return (
     <StyledPaper >
        <CssBaseline/>
        <ListTitle/>
        <TrelloCard/>
        <TrelloCard/>
        <TrelloCard/>
        <AddCardorList/>
    </StyledPaper>
  )
}

const StyledPaper = styled(Paper)(({ theme }) => ({
    width: '300px',
    background: '#ebecf0',
    margin: theme.spacing(1),
  }));