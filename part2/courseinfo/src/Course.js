import React from 'react'

const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Total = ({ course }) => (
    <p>
        Total of {course.parts.reduce((total, current) =>
        total + current.exercises, 0
    )} exercices
    </p>
)

const Part = ({ name, exercises }) => (
    <p>
        {name} {exercises}
    </p>
)


const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map((part) =>
                <Part key={part.id} name={part.name} exercises={part.exercises} />
            )}
        </div>
    )
}

const Course = ({ courses }) => {
    return (
        courses.map(course =>
            <div key={course.id}>
                <Header course={course} />
                <Content course={course} />
                <Total course={course} />
            </div>
        )
    )
}

export default Course