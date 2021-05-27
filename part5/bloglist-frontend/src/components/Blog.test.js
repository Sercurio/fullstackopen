import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

test('verify that likes and url are not displayed by default', () => {
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

  const component = render(<Blog user={user} blog={blog} />)

  const div = component.container.querySelector('.blog')
  expect(div).toHaveTextContent('Why VIM changed my life')

  const togglableBlogInfos =
    component.container.querySelector('.togglableContent')
  expect(togglableBlogInfos).toHaveStyle('display : none')
})

test('verify that likes and url are displayed when show button are clicked', () => {
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

  const mockHandler = jest.fn()

  const component = render(
    <Blog
      user={user}
      blog={blog}
      handleAddLike={mockHandler}
      handleRemoveBlog={mockHandler}
    />,
  )

  const div = component.container.querySelector('.blog')

  const togglableBlogInfos =
    component.container.querySelector('.togglableContent')

  const viewButton = component.getByText('view')
  fireEvent.click(viewButton)
  expect(togglableBlogInfos).not.toHaveStyle('display : none')

  const hideButton = component.getByText('hide')
  fireEvent.click(hideButton)
  expect(togglableBlogInfos).toHaveStyle('display : none')
})

test('verify that if the like button is clicked twice, the eventHandler is called twice', () => {
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

  const mockHandler = jest.fn()

  const component = render(
    <Blog
      user={user}
      blog={blog}
      handleAddLike={mockHandler}
      handleRemoveBlog={mockHandler}
    />,
  )

  const likeButton = component.container.querySelector('.likeButton')
  fireEvent.click(likeButton)
  fireEvent.click(likeButton)

  expect(mockHandler.mock.calls).toHaveLength(2)
})
