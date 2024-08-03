import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const AppHeading = styled.h1`
  color: #4c63b6;
  font-size: 40px;
  font-family: 'Bree Serif';
  margin-bottom: 50px;
`

export const FormElement = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px 5px #cbd5e1;
  padding: 10px;
  margin-bottom: 20px;
  @media screen and (max-width: 1000px) {
    width: 70%;
  }
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`

export const InputElement = styled.input`
  color: #475569;
  font-weight: bold;
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  outline: none;
`

export const TextAreaElement = styled.textarea`
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  outline: none;
`

export const AddButton = styled.button`
  align-self: flex-end;
  background-color: #4c63b6;
  color: #ffffff;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  margin-bottom: 10px;
  margin-right: 20px;
  cursor: pointer;
`

export const NotesList = styled.ul`
  flex-grow: 1;
  width: 50%;
  list-style: none;
  padding-left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  @media screen and (max-width: 1000px) {
    width: 70%;
  }
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`

export const EmptyNotesContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const EmptyNotesImage = styled.img`
  width: 40%;
`

export const EmptyNotesHeadline = styled.h1`
  color: #334155;
  margin-bottom: 0;
`

export const EmptyNotesDescription = styled.p`
  color: #334155;
`
