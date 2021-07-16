import React from 'react'
const courseName = 'Half Stack application development'
const courseParts = [
  {
    name: 'Fundamentals',
    exerciseCount: 10,
  },
  {
    name: 'Using props to pass data',
    exerciseCount: 7,
  },
  {
    name: 'Deeper type usage',
    exerciseCount: 14,
  },
]

const Header = ({ text }: { text: string }) => <h1>{text}</h1>

interface Course {
  name: string
  exerciseCount: number
}
const Content = ({ courses }: { courses: Array<Course> }) => (
  <div>
    {courses.map(course => {
      return (
        <p key={course.name}>
          {course.name} {course.exerciseCount}
        </p>
      )
    })}
  </div>
)

const Footer = ({ courses }: { courses: Array<Course> }) => (
  <p>
    Number of exercises{' '}
    {courses.reduce((carry, part) => carry + part.exerciseCount, 0)}
  </p>
)

const App = () => (
  <div>
    <Header text={courseName} />
    <Content courses={courseParts} />
    <Footer courses={courseParts} />
  </div>
)

export default App
