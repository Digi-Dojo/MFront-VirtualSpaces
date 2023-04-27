import logo from './logo.svg';
import './App.css';
import PlaceCreator from './fragments/PlaceCreator';
import NoteCreator from './fragments/NoteCreator';
import NoteFragment from './fragments/NoteFragment';
import PlaceFragment from './fragments/PlaceFragment';
import {NotesList} from './pages/OLDNotesList';
import {PlacesList} from './pages/PlacesList';
import { NotesInPlace } from './pages/NotesInPlace';
import FullScreenDialog from './components/FullScreenDialog';
import { useState } from 'react';
import { usePlaces } from './hooks/usePlaces';
import { useNotes } from './hooks/useNotes';
/*
      <NotesList/>
      <br/> <br/>
*/

function App() {

  const [places, setPlaces] = usePlaces();
  const [notes, setNotes] = useNotes();

  return (
    <div className="App">
      <PlaceCreator places = {places} setPlaces = {setPlaces} />
      <br/> <br/>
      <NoteCreator notes = {notes} setNotes = {setNotes} places = {places} />
      <br/> <br/>
      <PlacesList places = {places} setPlaces = {setPlaces} />
      
    </div>
  );
}

export default App;
