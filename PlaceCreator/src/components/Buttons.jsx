import { Button } from "@mui/material"

const ConfirmationButton = ({title, icon, onClick, disabled}) => {
    return(
        <Button 
            variant="contained" 
            endIcon={icon}
            fullWidth
            onClick = {onClick}
            disabled = {disabled}
        >
            {title}
        </Button>
    )
}

export {ConfirmationButton}