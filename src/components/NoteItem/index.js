import {NoteListItem, NoteTitle, NoteDescription} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, description} = noteDetails

  return (
    <NoteListItem>
      <NoteTitle>{title}</NoteTitle>
      <NoteDescription>{description}</NoteDescription>
    </NoteListItem>
  )
}

export default NoteItem
