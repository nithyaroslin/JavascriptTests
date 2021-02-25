// const { result } = require("underscore");

exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {

  },

  manipulateRemoteData: function(url) {
     let arr = []
    fetch(url)
    .then(result => {
      result["people"].map(el => arr.push(el["name"]) )
      return arr;
    })

  }
};
