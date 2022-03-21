import { useState } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

const App = () => {

  const [state, setState] = useState({
    data: [
      { name: 'Adam Sandler', salary: 1000, increase: false, id: 1, liked: false },
      { name: 'Will Smith', salary: 2000, increase: true, id: 2, liked: true },
      { name: 'Mike Tyson', salary: 1500, increase: false, id: 3, liked: false },
    ],
    term: '',
    filter: 'all'
  });

  let maxId = 4;

  const deleteItem = (id) => {
    setState(({ data }) => {
      return {
        ...state,
        data: data.filter(item => item.id !== id)
      }
    })
  }

  const addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      liked: false,
      id: maxId++
    }
    setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        ...state,
        data: newArr
      }
    });
  }

  const onToggleProp = (id, prop) => {
    setState(({ data }) => ({
      ...state,
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item;
      })
    }))
  }

  const searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1;
    })
  }

  const onUpdateSearch = (term) => {
    setState({
      ...state,
      term: term
    });
  }

  const filterPost = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter(item => item.liked);

      case "moreThan1000":
        return items.filter(item => item.salary > 1000);

      default:
        return items
    }
  }

  const onFilterSelect = (filter) => {
    setState({
      ...state,
      filter: filter
    });
  }

  const allEmployees = state.data.length;
  const increasedEmployees = state.data.filter(item => item.increase).length;
  const visibleData = filterPost(searchEmp(state.data, state.term), state.filter);

  return (
    <div className="app">
      <AppInfo
        allEmployees={allEmployees}
        increasedEmployees={increasedEmployees}
      />
      <div className="search-panel">
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <AppFilter filter={state.filter} onFilterSelect={onFilterSelect} />
      </div>

      <EmployeesList
        data={visibleData}
        onDelete={deleteItem}
        onToggleProp={onToggleProp} />
      <EmployeesAddForm onAdd={addItem} />
    </div>
  );
};

export default App;