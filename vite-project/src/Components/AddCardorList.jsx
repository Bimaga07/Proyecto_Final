import {Box, Collapse, alpha, Paper, Typography} from "@mui/material"

import { useState } from "react"
import AddCardListText from "./AddCardListText"



export const AddCardorList = () => {
  const [open, setOpen] = useState(true)
  return (
    <Box sx={{ width: '300px', marginTop: theme => theme.spacing(1) }}>
        
        <Collapse in={open}>
          <AddCardListText/>
        </Collapse>
        <Collapse in={!open}>
        <Paper sx={{padding: theme => theme.spacing(1,1,1,2), margin: theme => theme.spacing(0,1,1,1), background: "#edecf0",  "&:hover": {
        backgroundColor: theme => alpha("#000", 0.25)
    }}}>
          <Typography>
            + Add Card
          </Typography>
        </Paper>

        </Collapse>

    </Box>
  )
}
