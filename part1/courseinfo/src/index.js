import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  );
};

const Content = (props) => {
  const contents = props.contents;

  return (
    contents.map((content) =>
      <Part part={content} />
    )
  );
};

const Part = (props) => {
  const part = props.part;

  return (
    <p>
      {part.part} {part.exercises}
    </p>
  );
};

const Total = (props) => {
  const exercises = props.exercises;
  const total = exercises.reduce((sum, exercise) => {
    return sum + exercise;
  }, 0);

  return (
    <p>
      Number of exercises {total}
    </p>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  const contents = [
    { part: part1, exercises: exercises1 },
    { part: part2, exercises: exercises2 },
    { part: part3, exercises: exercises3 }
  ];
  const exercises = [exercises1, exercises2, exercises3];

  return (
    <div>
      <Header course={course} />
      <Content contents={contents} />
      <Total exercises={exercises} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);