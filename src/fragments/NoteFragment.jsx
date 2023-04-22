import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { BorderAllOutlined } from '@mui/icons-material';

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


const DummyNoteFragment = () => {
    
    const [status, setStatus] = useState(true);

    const changeStatus = () => {
        setStatus(!status);
    }

    return (
        <div style={{border: '2px'}}>
            <div className="card-header">
                <Button variant="outlined" onClick={changeStatus}
                        title={status ? 'Mark as added' : 'Mark as removed'}>{status ? 'Mark as added' : 'Mark as removed'}
                </Button>
            </div>
            <p>Text: "Text note"</p>
            <p>Place id: 34</p>
        </div>
    )
}

export default NoteFragment;
