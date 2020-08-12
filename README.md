# Munch_Madness README 

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Munch Madness** 
_The goal of Munch Madness is allow users the freedom to review their favorite fast food items guilt free. 
Users are able to create their own profile which allows them to create and edit their reviews of fast food items._


<br>

## MVP

_The **Munch Madness** MVP:
- _User, Reviews, Item Tables set in db._
- _User login for auth._
- _One to many association  with Users to Items_
- _One to many association  with Restuarants to Items_
- _Abilty for Users to create, view, edit, delete Items_


<br>

### Goals

- _Review Crud,_
- _User Auth._
- _Item Index._
- _Item Crud._


<br>

### Client (Front End)

#### Wireframes


[Wire Frames](https://drive.google.com/file/d/1knH1cvY8trDVprpBJlkGHsvvQZBezKW_/view?usp=sharing)

#### Component Tree

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
      |__ ItemInfo.jsx
      |__ Item Review.jsx
      |__ Nav bar.jsx
      |__ Review edit.jsx
      |__ Review delete.jsx
      |__ Create Profile.jsx
      |__ Log in.jsx
      |__ Home.jsx
      |__ .jsx
Config
      |__ routes.rb
db 
      |__ seed.rb
app
|__ controller/
      |__ reviews.rb
      |__ items.rb
      |__ user.rb
    

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|  Reviews.    | functional |   n   |   y   | _The restaurants  will provide a list of all Items._             |
|   Item Info  |   class    |   y   |   n   | _The Item info will render the posts using cards in flexbox._    |
|   Home       | functional |   n   |   y   | _The home page will render the item info via props._             |
|    Footer    | functional |   n   |   n   | _The footer will show Link to my github profile._                |

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Users        |    H     |     8 hrs      |    TBD.       |    TBD.     |
| Add Restaurants     |    H     |     8 hrs      |    TBD.       |    TBD.     |
| Add Items           |    H     |     8 hrs      |    TBD.       |    TBD.     |
| Item desc box       |    H     |     8 hrs      |    TBD.       |    TBD.     |
| Create CRUD Actions |    H     |     8 hrs      |    TBD.       |    TBD.     |
| CSS/ FLex           |    L     |     8 hrs      |    TBD.       |    TBD.     |
| TOTAL               |          |     48 hrs     |    TBD.       |    TBD.     |

<br>

### Server (Back End)

#### ERD Model

[ERD](https://drive.google.com/file/d/1DunMHYBTPd5ibLiOxIgmTSZH8m-dPrqk/view?usp=sharing)
<br>

***

## Post-MVP

- _Restaurant search._

- _Items CRUD._


***

## Code Showcase



## Code Issues & Resolutions

