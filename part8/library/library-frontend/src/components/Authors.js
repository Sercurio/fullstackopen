import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { ALL_AUTHORS, EDIT_BIRTH } from '../queries'

const Authors = props => {
  const result = useQuery(ALL_AUTHORS)
  const [editBirth] = useMutation(EDIT_BIRTH, {
    refetchQueries: [{ query: ALL_AUTHORS }],
  })

  const [authors, setAuthors] = useState([])

  const [authorName, setAuthorName] = useState('')
  const handleAuthorNameChange = e => {
    const authorNameInput = e.target.value
    setAuthorName(authorNameInput)
  }

  const [authorBirth, setAuthorBirth] = useState('')
  const handleAuthorBirthChange = e => {
    const authorBirthInput = e.target.value
    setAuthorBirth(authorBirthInput)
  }

  const handleBirthChangeForm = e => {
    e.preventDefault()
    editBirth({
      variables: { name: authorName, setBornTo: Number(authorBirth) },
    })
    setAuthorBirth('')
  }

  useEffect(() => {
    if (result.data) {
      setAuthors(result.data.allAuthors)
      setAuthorName(result.data.allAuthors[0].name)
    }
  }, [result])

  if (!props.show) {
    return null
  }

  return (
    <div>
      <h2>authors</h2>
      {authors ? (
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>born</th>
              <th>books</th>
            </tr>
            {authors.map(a => (
              <tr key={a.name}>
                <td>{a.name}</td>
                {a.born ? <td>{a.born}</td> : <td></td>}
                <td>{a.bookCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
      <h2>Set birthyear</h2>
      <form onSubmit={handleBirthChangeForm}>
        <div>
          name
          {authors ? (
            <select value={authorName} onChange={handleAuthorNameChange}>
              {authors.map(author => (
                <option key={author.name} value={author.name}>
                  {author.name}
                </option>
              ))}
            </select>
          ) : null}
        </div>
        <div>
          birth
          <input value={authorBirth} onChange={handleAuthorBirthChange} />
        </div>
        <button type='submit'>changeBirth</button>
      </form>
    </div>
  )
}

export default Authors
