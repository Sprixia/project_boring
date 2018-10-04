import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
// https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm
import Home from "./index";
import PageOne from "./pageone";
import PageTwo from "./pagetwo";
import PageThree from "./pagethree";
import "./styles.css";

/* ReactRouter below
Similar to HTML navigation bar format. This does not reload the entire page,
  it just reloads the component(s) that change. This is shown on the preview
  because PAGE # changes, but the SIMMERMAIN does not regenerate a problem.

!Important! For this to work, the pages must have:
  export default Component/ClassName;
  on the bottom, and they must import on the NavBar page as shown above.
  The "export class Name..." format (as shown for this NavBar page) will not work.

The pages do not need to be imported to the main/index page, just NavBar.
*/
export class NavBar extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="header">
            <li>
              <NavLink to="/index">Homepage</NavLink>
            </li>
            <li>
              <NavLink to="/pageone">Page 1</NavLink>
            </li>
            <li>
              <NavLink to="/pagetwo">Page 2</NavLink>
            </li>
            <li>
              <NavLink to="/pagethree">Page 3</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/index" component={Home} />
            <Route path="/pageone" component={PageOne} />
            <Route path="/pagetwo" component={PageTwo} />
            <Route path="/pagethree" component={PageThree} />
          </div>
        </div>
      </HashRouter>
    ); // end return
  } // end render
} // end class NavBar

/* can delete this chunk
export class NavBar extends React.Component {
  render() {
    return (
      <div>
        <ul className="header">
          <li>
            <a href="/">Main</a>
          </li>
          <li>
            <a href="./pageone">Page 1</a>
          </li>
          <li>
            <a href="./pagetwo">Page 2</a>
          </li>
          <li>
            <a href="./pagethree">Page 3</a>
          </li>
        </ul>
        <div className="content" />
      </div>
    ); // end return
  } // end render
} // end class NavBar
*/

/* old/original code
  export class NavBar extends React.Component {
  render() {
    const pages = ['pageone ', 'pagetwo ', 'pagethree '];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}
*/
