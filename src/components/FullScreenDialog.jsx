
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

import AddIcon from '@mui/icons-material/Add';
import { NotesInPlace } from '../pages/NotesInPlace';

/*

            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="add"
            >
              <AddIcon/>
            </IconButton>

*/

export default function FullScreenDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ListType = () => {
    switch (props.type) {
      case "notes":
        return <NotesInPlace placeId={props.placeId}/>
      case "members":
        return "TO BE IMPLEMENTED"
      default:
        return props.type+" is not a supported prop"
    }
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
      {props.type === 'notes' ? 'Attached Notes' : 'Current members'}
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {props.type === 'notes' ? 'Notes' : 'Members'}
            </Typography>
          
          </Toolbar>
        </AppBar>
        <ListType/>
      </Dialog>
    </div>
  );
}