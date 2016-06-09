/* @flow */
import React from 'react'

export const HomeView = () => (
  <div>
    <h1>Tillur Tech Stack</h1>
    <p>
      Hello, and welcome to the tech stack for Cultivāt. This will serve as
      an introduction, general reference & POC for the Cultivāt tech stack.
    </p>
    <p>
      The dual pillars that make the foundation of this tech stack are
      <a href='https://facebook.github.io/react/'>React</a> and <a href='https://github.com/reactjs/redux'>Redux</a>.
    </p>
    <p>
      React is a framework, created by engineers at Facebook, for building
      interactive visual components in a way that is very easy to reason about,
      and thus, to maintain. It is often called the "V" of MVC because it
      specializes in creating "views". In fact, it is made to very easily
      integrate with existing MVC libraries like Backbone & Angular, replacing
      the "views" those libraries offer.
    </p>
    <p>
      React has an extremely active community, not to mention the backing of
      Facebook. In addition, React components, if designed with a bit of extra
      care, can be:
    </p>
    <ul>
      <li>extremely easy to test</li>
      <li>extremely performant</li>
      <li>extremely reusable</li>
      <li>even cross-platform - iOS, Android, Web, etc</li>
    </ul>

    <p>Also, React is just fun.</p>
    <p>
      The other pillar of this stack is Redux. Redux is a state management
      system that follows the Flux pattern - a pattern that was loosely
      described by the creators of React around the time React was released.
      The Flux pattern describes an optimal way to manage component and
      application state when building components that implement the React
      pattern. Many different implementations of the Flux pattern popped up,
      including, eventually, the actual "Flux" library created by Facebook.
      However, the most popular of these libraries, currently, is Redux.
    </p>
    <p>
      Redux is a simple, lightweight state management system. It allows you to
      easily maintain a single global "store" - nothing more than a JSON object
      that keeps track of your application state. It also exposes an API for
      updating the application state in a safe and potentially highly optimized
      way.
    </p>
    <p>
      In addition to React and Redux themselves, a number of other libraries
      written as supplements to these libraries will be used. Most of these
      libraries only expose a small number of functions that can be composed
      in powerful ways to form more complex applications.
    </p>
    <ul>
      <li><a href='https://github.com/reactjs/react-redux'>react-redux</a></li>
      <li><a href='https://github.com/reactjs/react-router'>react router</a></li>
      <li><a href='https://github.com/nfl/react-helmet'>react-helmet</a></li>
      <li><a href='https://github.com/reactjs/reselect'>reselect</a></li>
      <li><a href='http://www.material-ui.com'>material ui</a></li>
      <li><a href='https://github.com/yelouafi/redux-saga'>redux-saga</a></li>
    </ul>
    <p>
      Many of these libraries are inluded in the react-redux-starter-kit
      boilerplate package, found here:&nbsp;
      <a href='https://github.com/davezuko/react-redux-starter-kit'>
        React Redux Starter Kit
      </a>
    </p>
  </div>
)

export default HomeView
