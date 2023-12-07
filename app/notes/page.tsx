"use client";

import { useEffect, useState } from "react";
import Sidebar from "../components/UI/Sidebar";
import { Note } from "../Types/Note";
import NoteViewer from "../components/UI/NoteViewer";
import { RedirectType, redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function NotesPage()
{   


    const {status, data: user} = useSession();
    let temp:Note[] = []; 
    const [notes, setNotes] = useState(temp);
    let tempNote:Note = {
      id: "",
      title: "",
      content: "",
      date: ""
    } //temp fix
    const [viewedNote, setViewedNote] = useState(tempNote);


      async function loadNotes()
      {
        let items: Note[] = [{id: "1", title: "note 1", content: "sadasdasdasdasd", date: "1/1/1"}, {id: "2", title: "note 2", content: "sadasdasdasdasd", date: "1/1/1"}, {id: "3", title: "note 3", content: "sadasdasdasdasd", date: "1/1/1"}]; 
        setNotes(items);
      }
  
      useEffect(
          () => {
            try{
                loadNotes();
            }
            catch (ex : any){
                console.log(ex); 
            }
          },
          [notes]
      )
       
    
      function handleSetViewedNote(note: Note)
      {
        setViewedNote(note); 
      }
    
      async function handleAddNote(note : Note)
      {
        setViewedNote(note); 
        setNotes([...notes, note]);
      }
      function handleDeleteNote(note: Note){
        setNotes(notes.filter((item:Note) => item.id != note.id)); 
      }
    


      if(status === "authenticated"){
        return(
            <main className="flex flex-row">
            <Sidebar notes={notes} handleSetViewedNote={handleSetViewedNote}></Sidebar>
            <section className={"flex min-h-screen flex-1 flex-col justify-center items-center bg-blue-50" + {}}>
              <NoteViewer note={viewedNote} handleAddNote={handleAddNote} setViewedNote={setViewedNote} handleDeleteNode={handleDeleteNote}></NoteViewer>
            </section>
          </main>
        )
      }
      else
      {
        redirect("/", RedirectType.push );
      }

}