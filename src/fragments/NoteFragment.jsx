import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { BorderAllOutlined } from '@mui/icons-material';

const NoteFragment = ({ note }) => {
    
    const [status, setStatus] = useState(true);

    const changeStatus = () => {
        setStatus(!status);
    }

    return (
        <div key={note.id} style={{border: '2px', width: '100px', backgroundColor: 'white', borderRadius: "30px"}}>
            <div className="card-header">
                Current status: {status ? 'ADDED' : 'REMOVED'}
                <Button variant="contained" onClick={changeStatus}
                        title={status ? 'Mark as added' : 'Mark as removed'}>
                    {status ? 'REMOVE' : 'ADD'}
                </Button>
            </div>
            <p>{note.text}</p>
        </div>
    )
}

export default NoteFragment;
