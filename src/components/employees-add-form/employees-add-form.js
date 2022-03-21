import { useState } from 'react';

import './employees-add-form.css';

const EmployeesAddForm = (props) => {

  const [state, setState] = useState({
    name: '',
    salary: ''
  })

  const onValueChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });

  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (state.name.length < 3 || !state.salary) return;
    props.onAdd(state.name, state.salary);
    setState({
      name: '',
      salary: ''
    });
  }

  return (
    <div className="app-add-form">
      <h3>Add a new employee</h3>
      <form className="add-form d-flex" onSubmit={onSubmit}>
        <input
          onChange={onValueChange}
          type="text"
          className="form-control new-post-label"
          placeholder="What`s his name?"
          name="name"
          value={state.name} />
        <input
          onChange={onValueChange}
          type="number"
          className="form-control new-post-label"
          placeholder="Salary in $?"
          name="salary"
          value={state.salary} />
        <button type="submit" className="btn btn-outline-light">Add</button>
      </form>
    </div>
  );

};

export default EmployeesAddForm;