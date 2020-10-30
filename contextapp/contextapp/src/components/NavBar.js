//CONTEXT TYPE METHOD

// // import React, { Component } from 'react';
// // import { ThemeContext } from '../contexts/ThemeContext';

// // class Navbar extends Component {
// //   static contextType = ThemeContext;
// //   render() {
// //     console.log(this.context);
// //     const { isLightTheme, light, dark } = this.context;
// //     //thiscontext is the data i.e state present in ThemeContext.js
// //     // console.log("isLightTheme",isLightTheme)
// //     const theme = isLightTheme ? light : dark;
// //     return ( 
// //       <nav style={{ background: theme.ui, color: theme.syntax }}>
// //         <h1>Context App</h1>
// //         <ul>
// //           <li>Home</li>
// //           <li>About</li>
// //           <li>Contact</li>
// //         </ul>
// //       </nav>
// //     );
// //   }
// // }

// // export default Navbar;


                                      //SINGLE CONSUMER METHOD

// import React, { Component } from 'react';
// import { ThemeContext } from '../contexts/ThemeContext';

// class Navbar extends Component {
//   // static contextType = ThemeContext;
//   render() {
//     return (
//       <ThemeContext.Consumer>{(context) => { 
//         //we can any name context which we got from ThemeContext.js and the context parameter has value ={{}}
//       //<ThemeContext.Provider value={{...this.state, toggleTheme:this.toggleTheme}}>
//         const { isLightTheme, light, dark } = context;
//         //destructing to get the context i.e ..this.state object and the object of toggle fxn
//         const theme = isLightTheme ? light : dark;
//         return (
//           <nav style={{ background: theme.ui, color: theme.syntax }}>
//             <h1>Context App</h1>
//             <ul>
//               <li>Home</li>
//               <li>About</li>
//               <li>Contact</li>
//             </ul>
//           </nav>
//         )
//       }}</ThemeContext.Consumer>
//     );
//   }
// }

// export default Navbar

                                    // MULTIPLE CONSUMER METHOD INTO ONE
                                    
import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {
  // static contextType = ThemeContext;
  render() {
    return (
     
      <AuthContext>{(authContext) => (
        <ThemeContext.Consumer>{(themeContext) => {
          const { isAuthenticated, toggleAuth } = authContext;
          const { isLightTheme, light, dark } = themeContext;
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>Context App</h1>
              <div onClick={() => toggleAuth()}>
                { isAuthenticated ? 'Logged in' : 'Logged out' }
              </div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          )
        }}</ThemeContext.Consumer>
      )}</AuthContext>
    );
  }
}
 
export default Navbar;