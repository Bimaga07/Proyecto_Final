import { Paper, Typography} from "@mui/material"
import {styled} from "@mui/system"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
export const ListTitle = () => {
  return (
    <div>
       <StyledPaper>


        <Typography variant="h4" sx={{fontWeight: "bold", fontSize: "1.2rem", flexGrow: 1}}>
            To do
        </Typography>
        <MoreHorizIcon/>
       </StyledPaper>
        


    </div>
  )
}
const StyledPaper = styled(Paper)(({ theme }) => ({
    margin: theme.spacing(1),
    display: "flex"
  }));
