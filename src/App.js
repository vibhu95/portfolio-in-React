import React from 'react';
import './App.css';
import {Content, Drawer, Header, Layout, Navigation} from "react-mdl";
import Main from "./components/portfolio/main";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_AGE, CHANGE_NAME} from "./redux/reducers";
import ReduxComponent from "./components/ReduxComponent";

function App() {
  function hideToggle() {
    let selectorId = document.querySelector('.mdl-layout');
    selectorId.MaterialLayout.toggleDrawer();
  }
  return (
      <div>
        <Layout>
          <Header className="header-color" title={<Link to={"/"} style={{textDecoration:'none', color:'white'}} >MyPortfolio</Link>} scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/projects">Projects</Link>
            </Navigation>
          </Header>
          <Drawer title={<Link to={"/"} style={{textDecoration:'none', color:'black'}} >MyPortfolio</Link>} onClick={()=> hideToggle()}>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/projects">Projects</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
  );
}

const ReduxTesting = () => {
  const user = useSelector(state => state.user);
  const name = user.name;
  const age = user.age;
  const dispatch = useDispatch();
  const update = {
    type:CHANGE_NAME,
    payload:{
      name:"Shubham has been Updated"
    }
  };
  const updateAge = {
    type:CHANGE_AGE,
    payload:{
      age: age - 1
    }
  };
  return(
      <div>
        <h2>Name is {name}</h2>
        <h2>Age is {age}</h2>
        <button className={"customButton ripple"} onClick={() => dispatch(update)}>Change Name</button>
        <button className={"customButton ripple"} onClick={() => dispatch(updateAge)}>Change Age</button>
      </div>
  );
};

export default App;
