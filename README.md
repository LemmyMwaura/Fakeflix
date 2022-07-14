# Netflix_Clone
A Netflix Clone that is developed to manage high number of requests on the server

## Table of contents
  - [Project Visual](#Screenshot)
  - [Project Description](#Project-description) 
  - [Built with](#built-with)
  - [Getting Started](#Getting-Started)
  - [License & Copywright Information](#License-and-Copywright-Information)
  - [Author](#author)

---
___

### Screenshot
![Website](/src/assets/images/web.png)

___
---

### Introduction
Netflix Clone

This is my attempt at creating a mid-level web application that highly depends on making a lot of network requests to an API that works with images (high load) and finding ways to mitigate this requests and minimise load on the server.

The application is built with React and uses react-query to manage the data fetching. Categories Data is cached locally (using react-query) and is updated after every 15mins while banner data is updated consistently on component mount and also after every 10s. This results in a much better user experience.

Redux is also used to manage the state of the application.

---
___

### Built with / Technologies Used

- React
    - React-Query
    - Redux
    - SwiperJS
    - React-router-dom
    - React-Hook-Forms
    - Axios
- Firebase
    - Firebase-auth
- Scaffolded using vite

---
___


# Getting Started

First clone the repository from Github and switch to the new directory:

    $ git@github.com:LemmyMwaura/Fake-Netflix.git
    
Install project dependencies:

    $ npm install     

You can now run the development server:

    $ npm run dev

<br>

---
___

## License and Copywright Information
(c) Stephen Lemmy Mwaura, Software Engineer.

Licensed under the [MIT License](LISENCE)

---
___

## Author 
Stephen Lemmy Mwaura, Full-Stack Dev:

- 🎱 Twitter - [@lemmyMwaura](https://twitter.com/lemmyMwaura8)

---
___


