import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  AppContainer,
  AppHeading,
  FormElement,
  InputElement,
  TextAreaElement,
  AddButton,
  NotesList,
  EmptyNotesContainer,
  EmptyNotesImage,
  EmptyNotesHeadline,
  EmptyNotesDescription,
} from './styledComponents'

const Notes = () => {
  const [noteTitle, setNoteTitle] = useState('')
  const [noteDescription, setNoteDescription] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => setNoteTitle(event.target.value)

  const onChangeDescription = event => setNoteDescription(event.target.value)

  const onAddNote = event => {
    event.preventDefault()

    const newNote = {
      id: uuidv4(),
      title: noteTitle,
      description: noteDescription,
    }

    setNotesList(prevList => [...prevList, newNote])
    setNoteTitle('')
    setNoteDescription('')
  }

  return (
    <AppContainer>
      <AppHeading>Notes</AppHeading>
      <FormElement onSubmit={onAddNote}>
        <InputElement
          type="text"
          placeholder="Title"
          value={noteTitle}
          onChange={onChangeTitle}
        />
        <TextAreaElement
          placeholder="Take a Note..."
          value={noteDescription}
          onChange={onChangeDescription}
        />
        <AddButton type="submit">Add</AddButton>
      </FormElement>
      {notesList.length > 0 ? (
        <NotesList>
          {notesList.map(eachNote => (
            <NoteItem key={eachNote.id} noteDetails={eachNote} />
          ))}
        </NotesList>
      ) : (
        <EmptyNotesContainer>
          <EmptyNotesImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <EmptyNotesHeadline>No Notes Yet</EmptyNotesHeadline>
          <EmptyNotesDescription>
            Notes you add will appear here
          </EmptyNotesDescription>
        </EmptyNotesContainer>
      )}
    </AppContainer>
  )
}

export default Notes
