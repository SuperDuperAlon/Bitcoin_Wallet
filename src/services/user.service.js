// export const userService = {
//     getUser
// }

// async function getUser() {
//     console.log(user);
//     return Promise.resolve(user)
// }

import { storageService } from "./storage.service.js";
import { asyncStorageService } from "./async.local.storage.js";

const USER_KEY = "userDB";
_createUsers();

export const userService = {
  signup,
  login,
  logout,
  getEmptyCredentials,
  getLoggedinUser,
};

function signup(credentials) {
  return asyncStorageService.post(USER_KEY, credentials).then((user) => {
    _saveLoggedinUser(user);
    return user;
  });
}

function login(credentials) {
  console.log(credentials);
  return asyncStorageService.query(USER_KEY).then((users) => {
    const user = users.find((u) => u.username === credentials.username);
    if (!user) return Promise.reject("Login failed");
    _saveLoggedinUser(user);
    return user;
  });
}

function getEmptyCredentials(username = "", password = "123") {
  return { username, password };
}

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem("loggedinUser") || null);
}

function logout() {
  sessionStorage.removeItem("loggedinUser");
  return Promise.resolve();
}

function _saveLoggedinUser(user) {
  sessionStorage.setItem("loggedinUser", JSON.stringify(user));
}

function _createUsers() {
  let users = storageService.loadFromStorage(USER_KEY);
  if (!users || !users.length) {
    users = [{
      name: "Alon Mlievski",
      username: "alon",
      password: "123",
      balance: 100,
      transactions: [],
    }];

    storageService.saveToStorage(USER_KEY, users);
  }
}

// function _createUser(fullname, username, password) {
//     const user = getEmptyCredentials(fullname, username, password)
//     user._id = utilService.makeId()
//     return user
// }
