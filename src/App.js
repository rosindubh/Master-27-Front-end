import "./App.css";
import React, {useState} from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { fetchRequest, login } from "./utils";
import Navbar from "./components/navbar";
import Login from "./components/login";
import SignUp from "./components/signup";
import Homepage from "./components/homepage";
import Upload  from './components/upload'
import { Postcard } from "./components/postcard";
import Background from "./pictures/background.jpg";

const App = ()=> {
  const history = useHistory();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [data, setData] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    //call fetch request for creating user
  setData(fetchRequest(userName, email, pass, setData));
    if (userName && email && pass) {
      history.push('/upload')
    } else {
      return
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();
    login(email, pass, setData);
    if (email && pass) {
      history.push("/upload");
    } else {
      return
      }
    }

  return (
    <>
 
    <div className="App" style={{
          backgroundImage: 'url('+Background+')',
          backgroundSize: "cover",
          height: "100vh",
        }}>
      <Navbar user={data} setUser={setData}/>
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/signup">
        <SignUp setUserName={setUserName} setEmail={setEmail} setPass={setPass} submitHandler={submitHandler} />
      </Route>
      <Route path="/login">
        <Login setPass={setPass} setEmail={setEmail} loginHandler={loginHandler} />
        </Route>
        <Route path="/upload/">
        <Upload user={data}/>
        </Route>
        <Route path="/notifications">
          <Postcard user={data}/>
        </Route>
        
      </Switch>
     </div>
</>
  );
}

export default App;