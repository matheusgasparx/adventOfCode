const fs = require('fs');

fs.readFile('priquito.txt', (err, data) => {
  if (err) throw err;

  let list1 = []
  let list2 = []

  for (let i = 0; i < data.toString().split('\n').length; i++) {
    list1.push(data.toString().split('\n')[i].split('   ')[0])
    list2.push(data.toString().split('\n')[i].split('   ')[1])
  }

  list1.sort()
  list2.sort()

  function distance(list1, list2) {
      let sum = 0
      for (let i = 0; i < list1.length; i++) {
          sum += Math.abs(list1[i] - list2[i])
      }

      return sum
  }

  console.log(distance(list1, list2), 'distance')
}); 

