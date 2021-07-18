import About from "components/About/About";
import CardImageList from "components/CardImageList/CardImageList";
import Home from "components/Home/Home";
import { Route, Switch } from "react-router-dom";
import { GlobalStyle } from "styles/GlobalStyle";
import "./App.scss";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cardimage" component={CardImageList} />
      </Switch>
    </div>
  );
}

export default App;
