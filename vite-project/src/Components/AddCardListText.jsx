import { Button, IconButton, InputBase, Paper } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/system'
import {Clear} from "@mui/icons-material"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

const AddCardListText = () => {
  const [title, setTitle] = useState("")
  return (
    <>
    <StyledPaper >
      <StyledInputBase 
      multiline
      value={title} 
      onChange={e => setTitle(e.target.value)}
      placeholder='enter title'
      />
    </StyledPaper>
    <div>
      <Button>Add Card</Button>
      <IconButton>
        <Clear />
      </IconButton>
      <IconButton>
        <MoreHorizIcon/>
      </IconButton>
    </div>
    
    
    </>
  )
}
const StyledPaper = styled(Paper)(({ theme }) => ({
  width: '280px',
  paddingBottom: theme.spacing(4),
  margin: theme.spacing(0,1,1,1),
}
));
const StyledInputBase = styled(InputBase)( ({theme}) => ({
  '& .MuiInputBase-input':{
    margin: theme.spacing(1),

  }
}))

export default AddCardListText