import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { ALL_BOOKS } from '../queries'

const Books = props => {
  const [books, setBooks] = useState([])
  const [booksFiltred, setBooksFiltred] = useState([])
  const [genres, setGenres] = useState([])
  const [genreSelected, setGenreSelected] = useState('')
  const result = useQuery(ALL_BOOKS)
  useEffect(() => {
    if (result.data) {
      const books = result.data.allBooks
      setBooks(books)
      const genresTemp = []
      books.forEach(book => {
        book.genres.forEach(genre => {
          genresTemp.push(genre)
        })
      })
      setGenres(genresTemp)
    }
  }, [result])

  const handleGenreClick = e => {
    setGenreSelected(e.target.value)
    setBooksFiltred(
      books.filter(book => book.genres.indexOf(e.target.value) > -1)
    )
  }

  if (!props.show) {
    return null
  }

  return (
    <div>
      <h2>books</h2>
      in genre {genreSelected}
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {genreSelected
            ? booksFiltred.map(a => (
                <tr key={a.title}>
                  <td>{a.title}</td>
                  <td>{a.author.name}</td>
                  <td>{a.published}</td>
                </tr>
              ))
            : books.map(a => (
                <tr key={a.title}>
                  <td>{a.title}</td>
                  <td>{a.author.name}</td>
                  <td>{a.published}</td>
                </tr>
              ))}
        </tbody>
      </table>
      {genres.map(genre => (
        <button key={genre} value={genre} onClick={handleGenreClick}>
          {genre}
        </button>
      ))}
    </div>
  )
}

export default Books
