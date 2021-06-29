import React, { useState, useEffect } from 'react'
import { ME, BOOKS_BY_GENRE } from '../queries'
import { useLazyQuery, useQuery } from '@apollo/client'

const Recommanded = ({ show }) => {
  const [user, setUser] = useState({})
  const meQuery = useQuery(ME)

  const [booksByGenre, setBooksByGenre] = useState([])
  const [getBooksByGenre, result] = useLazyQuery(BOOKS_BY_GENRE)

  useEffect(() => {
    if (meQuery.data) {
      const user = meQuery.data.me
      setUser(user)
      getBooksByGenre({ variables: { genre: user.favoriteGenre } })
    }
  }, [meQuery, getBooksByGenre])

  useEffect(() => {
    if (result.data) {
      const books = result.data.allBooks
      setBooksByGenre(books)
    }
  }, [result])

  if (!show) return null

  return (
    <div>
      <h1>Recommandations</h1>
      books in your favorite genre {user.favoriteGenre}
      <table>
        <tbody>
          <tr>
            <th>title</th>
            <th>author</th>
            <th>published</th>
          </tr>
          {booksByGenre
            .filter(book => book.genres.indexOf(user.favoriteGenre) > -1)
            .map(book => (
              <tr key={book.title}>
                <td>{book.title}</td>
                <td>{book.author.name}</td>
                <td>{book.published}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Recommanded
