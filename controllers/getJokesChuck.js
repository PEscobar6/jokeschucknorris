"use strict";
const axios = require("axios").default;

async function getJokesChuck(req, res) {
  const itemsJokes = [];
  let isRepeat = false;

  // Hacer mientras los items obtenido sean menor o igual a 25
  while (itemsJokes.length < 25) {
    const response = await axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((response) => response.data)
      .catch((err) => {
        return new Error(err);
      });

    if (itemsJokes.length >= 1) {
      for (let i = 0; i < itemsJokes.length; i++) {
        if (itemsJokes[i].id == response.id) {
          isRepeat = true;
          break;
        }
      }
      if (isRepeat == false) {
        const resData = setJsonData(response);

        itemsJokes.push(resData);
      }
    } else {
      const resData = setJsonData(response);
      console.log(resData);
      itemsJokes.push(resData);
    }
    isRepeat = false;
  }

  res.status(200).json({
    status: 200,
    msg: "Get Jokes Succesfully",
    data: itemsJokes,
    countData: itemsJokes.length,
  });
}

function setJsonData(data) {
  let bodyData = {
    id: data.id,
    value: data.value,
    url: data.url,
  };

  return bodyData;
}

module.exports = { getJokesChuck };
