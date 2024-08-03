import styled from 'styled-components'

export const NoteListItem = styled.li`
  width: 31%;
  border: 1px solid #d8d8d8;
  border-radius: 10px;
  padding: 10px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const NoteTitle = styled.h1`
  color: #334155;
  font-size: 20px;
  margin-top: 5px;
`

export const NoteDescription = styled.p`
  color: #334155;
  font-size: 12px;
  line-height: 1.5;
`
