
import { Button } from '@mui/material';

const Note = ({ note, invertStatusNote }) => {
    
    const date =  new Date (Date.parse(note.date))
    const dateToString = date.getDate().toString()+ "/" + (date.getMonth()+1).toString() + "/" + date.getFullYear().toString()

    const changeStatus = () => {
        invertStatusNote();
    }

    return (
        <div key={note.id} style={{border: '2px', backgroundColor: '#f6f5aa', borderRadius: "5px", padding: 10}}>
            <p >{dateToString}</p>
            <p style={{wordWrap: "break-word"}}>{note.text}</p>
            <div>
                <Button variant="outlined" onClick={changeStatus}
                        title='REMOVE'>
                    REMOVE
                </Button>
            </div>
        </div>
    )
}

export default Note;
