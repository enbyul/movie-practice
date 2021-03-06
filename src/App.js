import React from "react";
import { HashRouter, Route} from "react-router-dom";
import Navigation from "./component/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";

function App(){
  return(
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" exact={true} component={About}/>
      <Route path="/movie-detail" component={Detail}/>
    </HashRouter>
  )
}

export default App;