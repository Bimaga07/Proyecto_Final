import { Box, Button, Fade, IconButton, InputBase, Paper } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/system'
import ClearIcon from '@mui/icons-material/Clear';
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
    <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <StyledButton>Add Card</StyledButton>
          <IconButton>
            <ClearIcon />
          </IconButton>
        </Box>
        <Box flexGrow={1} />
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </Box>
    </>
  );
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
const StyledButton = styled(Button)(({theme }) =>({
  background: "#5aac44",
  color: "#fff",
  "&:hover":{
    background: "#4e8a38",
  }
}))


export default AddCardListText