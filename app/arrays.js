exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    return arr.reduce((a,b) => a+b, 0)
  },

  remove: function(arr, item) {
    return arr.filter(el => el != item)
  },

  removeWithoutCopy: function(arr, item) {
    var i;
    var len;

    for (i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
        len--;
      }
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    let a = arr1.concat(arr2);
    return a;
  },

  insert: function(arr, item, index) {
    arr.splice(index,0,item);
    //console.log( arr);
    return arr;
  },

  count: function(arr, item) {
    let count = 0;
    arr.forEach(element => {
      if(element === item) ++count
    });
    return count;
  },

  duplicates: function(arr) {
    arr.sort();
    let newArr = [];
    for(let i=0; i< arr.length; i++){
       if(arr[i] === arr[i+1])
        if((newArr.indexOf(arr[i])) === -1)
          newArr.push(arr[i])
    }
    //console.log(newArr)
    return newArr
  },

  square: function(arr) {
    let newArr = [];
    arr.forEach(el => newArr.push(el*el) )
    return newArr;    
  },

  findAllOccurrences: function(arr, target) {
    let newArr = [];
    for(let i=0; i<arr.length; i++){
      if(arr[i] === target){
        newArr.push(i);
      }
    }
    return newArr;
    
  }
};
