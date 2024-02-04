# Ecommerce (React) Coding Assessment

## About the project
This is my submission for the tanX.fi frontend engineer role.

## Tech Stack
For this project, I tried my best to stick with a vanilla implementation.
I used React.JS for the frontend framework,
For CSS I used TailwindCSS

## Features

The user of this react application will be able to view all the products.

1. Fully working login/register functionality.
2. Users can be authenticated
3. Users can add the products to the cart page
4. Also user can add their favourite products

## In case of any db.json issue please enter the following line in the terminal of my project

 cd node_modules/ && ln -s /path/to/db.json db.json

 Since create-react-app can't access files outside src, this will create a copy of db.json in node_modules folder and point it to the db.json in the root folde r

## Improvements
- There are some bugs related to persistence
- Visuals could be more accurate if got the appropriate materials
### If I had more time,
- Dark mode implementation
- Stricter Routing protocol implementation for login screens
- Visual and functional bug fixes

## Running the application

- Clone this repo
- `npm install` - To install the dependencies
- `npm run server` - To start the JSON server
- `npm start` - To start the react app

## Screenshots

### Login/Register page

<img src="https://github.com/m3rcury02/tanx_project/blob/8ab40cf528932102c3b8e05230d522131a25f727/screenshots/login.png">

### Home page

<img src="https://github.com/m3rcury02/tanx_project/blob/8ab40cf528932102c3b8e05230d522131a25f727/screenshots/Shopkart%20homepage.png">

### Product detail page

<img src="https://github.com/m3rcury02/tanx_project/blob/8ab40cf528932102c3b8e05230d522131a25f727/screenshots/Product%20page.png">

### Cart page

<img src="https://github.com/m3rcury02/tanx_project/blob/8ab40cf528932102c3b8e05230d522131a25f727/screenshots/cart.png">

## API 

API functionalities working perfectly, all the endpoints working.
Please interact with the app and check db.json to verify

| Endpoint | Result |
|------------------------------|-----------------------------------------------------|
| /users | Lists all available users |
| /products | Lists all available products |
| /orders | Lists all available orders  
| /favourites | Lists all available favourites

## Bonus

- Added some functionalities
- Used redux for state management

---
