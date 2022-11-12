'use strict';

let userData = [];
let userName = [];

fetch('https://reqres.in/api/users?per_page=12')
  .then((response) => {
    return response.json();
  }).then((result) => {

    console.log(`---------`)
    console.log('Пункт №1:')
    console.log(`---------`)

    console.log(result);

    console.log(`---------`)
    console.log('Пункт №2:')
    console.log(`---------`)

    userData = result.data;
    userName = result.data;
    userData.forEach(user => {
      console.log(user.last_name);
    })

    console.log(`---------`)
    console.log('Пункт №3:')
    console.log(`---------`)

    userData = userData.filter(user => (user.last_name[0] === 'F'))
    userData.forEach((user) => {
      console.log(user.last_name, user.first_name, user.email, user.avatar, user.id);
    })

    console.log(`---------`)
    console.log('Пункт №4:')
    console.log(`---------`)

    const userList = userName.reduce((accumulator, item, index, array) => {
      let userString = `${item.last_name} ${item.first_name}`;
      if (index !== array.length - 1) {
        userString += ', ';
      }
      accumulator += userString;
      return accumulator;
    }, '');
    console.log('Наша база содержит данные следующих пользователей: ', userList);

    console.log(`---------`)
    console.log('Пункт №5:')
    console.log(`---------`)

    const list = userName[1];
    console.log(Object.keys(list));

  })
