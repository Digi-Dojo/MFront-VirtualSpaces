import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { BorderAllOutlined } from '@mui/icons-material';

const NoteFragment = ({ note }) => {
    
    const [status, setStatus] = useState(true);

    const changeStatus = () => {
        setStatus(!status);
    }

    return (
        <div key={note.id} style={{border: '2px', backgroundColor: '#f6f5aa', borderRadius: "5px", padding: 10}}>
            <p>{note.text}</p>
            <div>
                <Button variant="outlined" onClick={changeStatus}
                        title='REMOVE'>
                    REMOVE
                </Button>
            </div>
        </div>
    )
}

export default NoteFragment;
