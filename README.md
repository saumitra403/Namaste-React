# Repository for Practicing React

# Parcel
- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - Written in C++
- Caching - Faster Builds
- Image Optimization
- Minification of files
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking
- Different dev and prod bundles


#Namaste Food

  * Header 
  *  - Logo
  *  - Nav Items

  * Body
  *  - Search
  *  - Restaurant Container
  *    - Restaurant Card
  *      - Img
  *      - Name of Res, Star Rating, cuisines, delivery time

  * Footer
  *  - Copyright
  *  - Links
  * - Address
  *  - Contact



Two Types of Export/Import

- Default Export/Import

export default Component;

import Component from "path"

- Named Export/Import

export const Component

import {Component} from "path" 

...
# React Hooks
(Normal JS utility functions)
- useState() - Superpowerful state variables
- useEffect()


# Routing in Web Apps
  - Client Side Routing
  - Server Side Routing 


# Redux Toolkit
  - Install @reduxjs/toolkit and react-redux
  - Build our store
  - Connect our store to our app
  - Create (cartslice)
  - Dispatch (action)
  - Selector

# Types of Testing (developer)
 - Unit Testing
 - Integration Testing
 - End to End Testing


# Setting up Testing in our app
 - Installed React Testing Library
 - Installed jest
 - Installed Babel dependencies
 - Configure Babel
 - Configure Parcel Config file to disable default babel transpilation
 - Jest -npx jest --init 
 - Install jsdom library
 - Install @babel/preset-react - to make JSX work in test cases
 - Include @babel/preset-react inside my babel config
 - Include @testing-library/jest-dom 