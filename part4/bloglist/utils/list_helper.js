const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  if (blogs.length === 0) return 0
  else {
    return blogs.reduce((total, blog) => total + blog.likes, 0)
  }
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null
  else {
    return blogs.reduce((favoriteBlog, blog) =>
      favoriteBlog.likes >= blog.likes ? favoriteBlog : blog,
    )
  }
}

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return null
  else if (blogs.length === 1) return { author: blogs[0].author, blogs: 1 }

  const blogAuthorCounter = blogs.reduce((obj, blog) => {
    obj[blog.author] = obj[blog.author] ? obj[blog.author] + 1 : 1

    return obj
  }, {})

  const mostBloggerAuthor = Object.keys(blogAuthorCounter).reduce((a, b) =>
    blogAuthorCounter[a] > blogAuthorCounter[b] ? a : b,
  )

  return {
    author: mostBloggerAuthor,
    blogs: blogAuthorCounter[mostBloggerAuthor],
  }
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) return null
  else if (blogs.length === 1)
    return { author: blogs[0].author, likes: blogs[0].likes }

  const likesAuthorCounter = blogs.reduce((obj, blog) => {
    obj[blog.author] = obj[blog.author]
      ? obj[blog.author] + blog.likes
      : blog.likes

    return obj
  }, {})

  const mostLikedAuthor = Object.keys(likesAuthorCounter).reduce((a, b) =>
    likesAuthorCounter[a] > likesAuthorCounter[b] ? a : b,
  )

  return { author: mostLikedAuthor, likes: likesAuthorCounter[mostLikedAuthor] }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
}
