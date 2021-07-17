import React from 'react';
const courseName = 'Half Stack application development';
// new types
interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
}

interface CourseNormalPart extends CoursePartBase {
  type: 'normal';
}
interface CourseProjectPart extends CoursePartBase {
  type: 'groupProject';
  groupProjectCount: number;
}

interface CourseSubmissionPart extends CoursePartBase {
  type: 'submission';
  exerciseSubmissionLink: string;
}

interface CourseWithDescription extends CoursePartBase {
  type: 'withDescription';
  description: string;
}

type CoursePart =
  | CourseNormalPart
  | CourseProjectPart
  | CourseSubmissionPart
  | CourseWithDescription;

// this is the new coursePart variable
const courseParts: CoursePart[] = [
  {
    name: 'Fundamentals',
    exerciseCount: 10,
    description: 'This is the leisured course part',
    type: 'normal',
  },
  {
    name: 'Advanced',
    exerciseCount: 7,
    description: 'This is the harded course part',
    type: 'normal',
  },
  {
    name: 'Using props to pass data',
    exerciseCount: 7,
    groupProjectCount: 3,
    type: 'groupProject',
  },
  {
    name: 'Deeper type usage',
    exerciseCount: 14,
    description: 'Confusing description',
    exerciseSubmissionLink: 'https://fake-exercise-submit.made-up-url.dev',
    type: 'submission',
  },
];

const Header = ({ text }: { text: string }) => <h1>{text}</h1>;

const Part = ({ part }: { part: CoursePart }) => {
  switch (part.type) {
    case 'normal':
      return (
        <p key={part.name}>
          {part.name} {part.exerciseCount}
        </p>
      );
    case 'groupObject':
      return (
        <p key={part.name}>
          {part.name} {part.exerciseCount} {part.groupProjectCount}
        </p>
      );
    case 'submission':
      return (
        <p key={part.name}>
          {part.name} {part.exerciseCount} {part.exerciseSubmissionLink}
        </p>
      );
    default:
      <p>hihi</p>;
  }
  return <p>hihi</p>;
};

const Content = ({ courses }: { courses: Array<CoursePart> }) => (
  <div>
    {courses.map(part => {
      return (
        <div key={part.name}>
          <Part part={part} />
        </div>
      );
    })}
  </div>
);

const Footer = ({ courses }: { courses: Array<CoursePart> }) => (
  <p>
    Number of exercises{' '}
    {courses.reduce((carry, part) => carry + part.exerciseCount, 0)}
  </p>
);

const App = () => (
  <div>
    <Header text={courseName} />
    <Content courses={courseParts} />
    <Footer courses={courseParts} />
  </div>
);

export default App;
