# Movie App Project

## Project Overview
This project is a movie application built using Next.js. It allows users to browse, search, filter, like, and add movies to a watch later list. The application uses Context API for state management and is styled using CSS and TailwindCSS.

## Project Requirements
- **Front-end Framework**: Next.js
- **Movie Data**: An array of objects with the following properties:
  - `title`: The title of the movie.
  - `epilogue`: A brief summary of the movie.
  - `dateReleased`: The date the movie was released.
  - `category`: The genre of the movie (e.g., Action, Drama, Comedy).
  - `type`: The type of movie (e.g., Feature Film, Documentary, Short Film).
  - `actors`: A list of main actors.
  - `trailer`: A link to the movie or trailer on YouTube.
  - `rating`: Movie rating on a scale (e.g., 0-10, 10-100, 1-5).
  - `keywords`: Keywords associated with the movie.
  - `kind`: The classification (e.g., PG, R, G).

## Features
- **Search Functionality**: Search for movies, categories, and actors.
- **Filters**: Filter movies by categories and actors.
- **Likes**: Like movies.
- **Watch Later**: Add movies to a watch later list.
- **State Management**: Use Context API for managing the state.

## Weekly Deliverables

### Week 1: Project Setup and Basic Components
**Deliverables**:
- **Project Initialization**:
  - Set up the Next.js project.
  - Install necessary dependencies (React, Next.js, etc.).
- **Basic Components**:
  - Create basic components for the app (e.g., Header, Footer, MovieList, MovieCard).
- **Static Data Implementation**:
  - Create an array of objects for movie data and integrate it into the MovieList component.

**Tasks**:
- Initialize the Next.js project and set up the development environment.
- Create reusable components (Header, Footer).
- Design and implement the MovieList and MovieCard components.
- Hard-code movie data for initial testing.

### Week 2: Dynamic Routing, Detailed View, and Search Functionality
**Deliverables**:
- **Dynamic Routing**:
  - Implement dynamic routing to navigate to detailed movie views.
- **Movie Detail Page**:
  - Create a MovieDetail component to display detailed information about a selected movie.
- **Search Functionality**:
  - Implement search functionality for movies,