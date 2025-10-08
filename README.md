# React Frontend Pagination
This repo is an adaptation of [Simple Frontend Pagination | React](https://www.youtube.com/watch?v=IYCa1F-OWmk&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb&index=9&pp=iAQB) by Brad Traversy. 

I followed the tutorial to learn followings:
- Fetching posts from *JSONPlaceholder API* to output on our React app
- Displaying 5-10 posts per page
- Showing pagination numbers at the bottom
- Using Bootstrap for styling

## Getting Started

### Create React App

1. Download and Install **Node.js**
2. Open project folder in VSCode Integrated Terminal
3. Install Vite on terminal:
    - Run `npm create vite@latest .`
    - Select `React` & Enter
    - Select `JavaScript` & Enter
4. Update `vite.config.js` file:
    - Add `server: { port: 3000, }` in `defineConfig()`
5. Install dependencies:
    - Open terminal and run `npm install`
6. Delete: `public/vite.svg`, `src/assets`, `src/index.css`
    1. Remove `import './index.css'` from `src/main.jsx`
    2. Modify `src/App.jsx` and Remove:
        ```
        import reactLogo from './assets/react.svg'
        import viteLogo from '/vite.svg'
        ```
    3. Clear contents in `src/App.css`
7. Add **Bootstrap** CDN link to index.html:
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
```
8. Install NPM package **`Axios`** : 
    ```
    npm i axios
    ```


## Credits
Original tutorial: [Simple Frontend Pagination | React](https://www.youtube.com/watch?v=IYCa1F-OWmk&list=PLillGF-RfqbY3c2r0htQyVbDJJoBFE6Rb&index=9&pp=iAQB) — Brad Traversy.

## License
MIT License