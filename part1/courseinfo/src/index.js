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
  const parts = props.parts;

  return (
    parts.map((part, i) =>
      <Part key={i} part={part} />
    )
  );
};

const Part = (props) => {
  const part = props.part;

  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Total = (props) => {
  const parts = props.parts;
  const total = parts.reduce((total, part) => {
    return total + part.exercises;
  }, 0);

  return (
    <p>
      Number of exercises {total}
    </p>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
