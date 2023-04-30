import { useState } from 'react';
import { Button } from '@mui/material';

const NoteFragment = ({ note, invertStatusNote }) => {
    
    
    const date =  new Date (Date.parse(note.date))//note.date.getDate().toString() + "/" + (note.date.getMonth()+1).toString() + "/" + note.date.getFullYear().toString()
    const dateToString = date.getDate().toString()+ "/" + (date.getMonth()+1).toString() + "/" + date.getFullYear().toString()

    const changeStatus = () => {
        invertStatusNote();
    }

    return (
        <div key={note.id} style={{border: '2px', backgroundColor: '#f6f5aa', borderRadius: "5px", padding: 10}}>
            <p>{dateToString}</p>
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
