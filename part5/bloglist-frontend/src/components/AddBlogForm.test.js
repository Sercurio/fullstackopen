import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import AddBlogForm from './AddBlogForm'

test('verify that the eventHandler passed for adding new blog contains all datas', () => {
  const user = {
    id: 'test',
    username: 'Louis',
    name: 'Louis',
  }

  const blog = {
    title: 'Why VIM changed my life',
    author: 'louis',
    url: 'https://vim.org',
    likes: 0,
    user: user,
  }

  const addBlog = jest.fn()

  const component = render(<AddBlogForm handleAddBlog={addBlog} />)

  const form = component.container.querySelector('.form')

  const titleInput = component.container.querySelector('.titleInput')
  const authorInput = component.container.querySelector('.authorInput')
  const urlInput = component.container.querySelector('.urlInput')

  fireEvent.change(titleInput, {
    target: { value: 'I am a blog title' },
  })
  fireEvent.change(authorInput, {
    target: { value: 'I am a blog author' },
  })
  fireEvent.change(urlInput, {
    target: { value: 'I am a blog url' },
  })

  fireEvent.submit(form)

  expect(addBlog.mock.calls).toHaveLength(1)
  expect(addBlog.mock.calls[0][0].title).toBe('I am a blog title')
  expect(addBlog.mock.calls[0][0].author).toBe('I am a blog author')
  expect(addBlog.mock.calls[0][0].url).toBe('I am a blog url')
})
