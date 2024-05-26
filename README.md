# movies-ticketting-app-backend

- This is a backend of a ticketting app built on Nodejs, expressjs, MongoDB with a few other third party packages
- Refer the documentation section below to learn more

## How to contribute

- Clone the repository: `git clone <url>`
- Install all node dependencies: `npm install`
- Create your branch and switch to it before updating the repos

```bash
git checkout -b <branch-name>

```

- Create the feature and submit as a pull request

```bash
git add .
git commit -m <commit-message>
git push
```

## Documentation

### **The database documentation**

- The database files are found in this directory from the project root

```bash
./src/db

```

The database functions documentation

### The users function

- This file is at the location `./src/db/functions/user.js`
- This file contains all the functions that information about the user can be gotten from the database.
- The user basic information like their name, email, and even comments given by the user about a movie can be gotten from the functions built in this file

1. **getAllUsers**

- _Description_: This function returns all the users on the database. To minimize the returning of numerous users, the function does a limit return of 50 using the **mongodb aggregate**
- _Parameters_: The function does not need any parameter since it performs a direct query on the database
- _returns_: The function returns an array of users that it is perferred to get all the users by using the `.forEach and .map` method.
- _Usage_: To use this function, you can follow the guide below. This guide is an example ran in the file, `./src/db/app.test.js`

```javascript
const { getAllUsers } = require("./functions/users");

const testFunc = async () => {
  try {
    const users = getAllUsers();
    users.forEach((user) => console.log(user));
  } catch (error) {
    console.error(error);
  }
};
```

The example above just prints all the users to the console

- _Raises_: The functions might raise an error you try to access the user array directly without using the `.forEach` function. It is suitable to follow the approach **above**

2. **getUsersByQuery**

- _Description_: This function is used to query the users database and get data based on the query parameters. There are 3 main query parameters in this situation: id, name, email. The querying results are controlled by and if-elseif-else condition.
- _Parameters_: This function accepts an object as a parameter, `userData`. This object has 3 main fields which are all string data typee: `id, name, email`
- _Returns_: This function returns a result, `usersQueryResults`. This result is an array of all the user data that has been retrieved from the database. This array data can be retrieved by using the `.forEach` array method.
- _Usage_: To use this function we follow 3 main approaches: by querying just with id, by querying with name and email, and by querying with id, name and email. below is an example that was performed in the `app.test.js` file
- _Raises_: This function will raise an error if the value of the id in the function argument of any of the field is `null, undefined, or ''`. So make sure that when using a field for query, let the data be valid.

```javascript
const { getUsersByQuery } = require("./functions/users");

const testFunc = async () => {
  try {
    // this query is only with id
    // we can run more query with name and email
    const users = await getUsersByQuery({
      id: "59b99db4cfa9a34dcd7885b6",
    });

    users.forEach((user) => console.log(user));
  } catch (error) {
    console.error(error);
  }
};
```

3. **getAllUserComments**

- _Description_: This function is used for two main purposes: To return all the comments that the user has written in the database and to return all the comments that the user has written about a particular movie.
- _Parameters_: This function also takes the `userData` parameter that has 3 fields in this case: the name, email, and movieId.
- _Return_: This function returns an array of the comment that the users has performed since the aggregation is done on the comments database. To access the comments, the `.forEach` method is used.
- _Usage_: This function can be used by the method below:

```javascript
const { getAllUserComments } = require("./functions/users");

const testFunc = async () => {
  try {
    const comments = await getAllUserComments({
      name: "name",
      email: "email",
      movieId: "movieId",
    });
  } catch (error) {
    console.error(error);
  }
};
```

- _Raises_: This function will raise an error if the value of the id in the function argument of any of the field is `null, undefined, or ''`. So make sure that when using a field for query, let the data be valid.
