import "./App.css";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import CarouselContainer from "./containers/CarouselContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <CarouselContainer />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
