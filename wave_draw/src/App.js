import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom"
import {ApplicationViews} from "./ApplicationViews"

function App() {
  return (
    <>
    <div>
      <Route render={(props) => <ApplicationViews/>}/>
    </div>
    </>
  );
}

export default App;