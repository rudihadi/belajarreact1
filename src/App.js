import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="childleft">

      </div>
      <div className="childright">
        <div className="form">
          <div>Sign in to INDICO </div>
          <lable className="textform">Email</lable>
          <div>
            <input type="text" placeholder="Email" className="inputemail"/>
          </div>
          <lable className="textform">Password</lable>
          <div>
            <input type="text" placeholder="Password" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
