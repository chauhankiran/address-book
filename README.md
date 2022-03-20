# Address book

Address book in React with Redux (with LocalStorage support)

## Stack

This application use

1. React
2. Redux and React Redux
3. React Router DOM
4. nanoid to generate the unique ids.

## Up & Running

To run the application locally, follow these steps.

1. Clone the repo

```bash
$ git clone https://github.com/chauhankiran/address-book.git
```

2. Go inside the cloned repo and then install the dependencies.

```bash
$ cd address-book
$ npm i
```

3. Run the application!

```bash
$ npm start
```

The application will be up & running at [http:localhost:3000/address-book](http:localhost:3000/address-book). The `/address-book` is due to gh-pages deployment. If you want to run the application at `/`. Follow these steps.

- Remove the `homepage` entry from `package.json`.
- Remove the `basename` attribtue from `<BrowserRouter>` in `App.js`.
