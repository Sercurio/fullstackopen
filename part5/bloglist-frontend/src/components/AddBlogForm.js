const addBlogForm = ({
  title,
  setTitle,
  author,
  setAuthor,
  url,
  setUrl,
  handleAddBlog,
}) => {
  const handleTitleChange = (e) => {
    const titleValue = e.target.value
    setTitle(titleValue)
  }
  const handleAuthorChange = (e) => {
    const authorValue = e.target.value
    setAuthor(authorValue)
  }
  const handleUrlChange = (e) => {
    const urlValue = e.target.value
    setUrl(urlValue)
  }

  return (
    <form onSubmit={handleAddBlog}>
      <label>title</label>
      <input key="title" value={title} onChange={handleTitleChange} />
      <br />
      <label>author</label>
      <input key="author" value={author} onChange={handleAuthorChange} />
      <br />
      <label>url</label>
      <input key="url" value={url} onChange={handleUrlChange} />
      <br />
      <button type="submit">create</button>
    </form>
  )
}

export default addBlogForm
