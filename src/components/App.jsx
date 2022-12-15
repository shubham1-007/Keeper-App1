import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from '../Notes';
import notes from "../Notes";
function createNote(note)
{
  return(
    <Note
      title={note.title}
      content={note.content}
    />
  )
}

function App() {
  return (
    <div>
      <Header />
      {/* <Note title="HI this is title" content="This Will be the content for the this content."/>
      <Note title="HI this is title" content="This Will be the content for the this content."/> */}
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
