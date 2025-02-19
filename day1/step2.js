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

  let sometimes = {}
  for (let kelly of list2) {
    sometimes[kelly] = (sometimes[kelly] || 0 ) +1
  }

  let twins = 0
  for (let kelly of list1) {
    twins += kelly * sometimes[kelly] || 0
  }

  console.log(twins)
 
}); 