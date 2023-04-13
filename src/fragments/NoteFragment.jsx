import { useState } from 'react';
import { Button, TextField } from '@mui/material';

const NoteFragment = ({ note }) => {
    
    const [status, setStatus] = useState(true);

    const changeStatus = () => {
        setStatus(!status);
    }

    return (
        <div key={note.id}>
            <div className="card-header">
                <Button variant="outlined" onClick={changeStatus}
                        title={status ? 'Mark as added' : 'Mark as removed'}>
                </Button>
            </div>
            <p>{note.text}</p>
            <p>{note.placeId}</p>
        </div>
    )
}

export default NoteFragment;
