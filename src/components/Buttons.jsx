import { Button } from "@mui/material"

const ConfirmationButton = ({title, icon, onClick}) => {
    return(
        <Button 
            variant="contained" 
            endIcon={icon}
            fullWidth
            onClick = {onClick}
        >
            {title}
        </Button>
    )
}

export {ConfirmationButton}