import './App.css';
import FatchData from './FatchData';
import { GithubUsersdata } from './GithubUsersdata';
function App() {
  return (
    <div className="App">
      <h2>Task 1</h2>
      <b>Q1. Go to https://jsonplaceholder.typicode.com/users and fetch and display the user data on page.</b>
      <FatchData/>
      <GithubUsersdata/>
    </div>
  );
}

export default App;
