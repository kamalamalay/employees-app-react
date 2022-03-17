import './app-info.css';

const AppInfo = ({allEmployees,increasedEmployees}) => {
  return (
    <div className="app-info">
      <h1>Accounting for employees in our company</h1>
      <h2>Total number of employees: {allEmployees}</h2>
      <h2>The promotion will be received: {increasedEmployees}</h2>
    </div>
  )
}

export default AppInfo;