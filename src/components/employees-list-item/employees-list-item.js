

import './employees-list-item.css';

const EmployeesListItem = (props) => {

  const { name, salary, onDelete, onToggleProp, increase, liked } = props;

  let regularClassName = 'list-group-item d-flex justify-content-between';
  if (increase) {
    regularClassName += " increase";
  }

  if (liked) {
    regularClassName += ' liked';
  }

  return (
    <li className={regularClassName}>
      <span
        className="list-group-item-label"
        onClick={onToggleProp}
        data-toggle="liked"
      >{name}</span>
      <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
      <div>
        <button type="button"
          className="btn-cookie brn-sm"
          onClick={onToggleProp}
          data-toggle="increase"
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button"
          className="btn-trash brn-sm"
          onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
}


export default EmployeesListItem;