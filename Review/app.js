const name = ["Roger", 'Danyllo', 'Leonardo']

//const transformStringInArray = name.split("") // modifica o array original
//console.log(transformStringInArray)

for (let i = 0; i < name.length; i++) {
  if (name) {
    console.log(`${name[i]} Passou no If`)
  } else if (name === 'Roger') {
    console.log('Roger passou no teste')
  } else {
    console.log('Nenhum dos usúarios vai passar')
  }
}

// const iterableFunc = name => {
//   let [firstItem, secondItem, thirtItem] = name

  for (let i = 0; i < name.length; i++) {
    switch (name[i]) {
      case "Roger":
       firstItem = "cola aí"
       break
      case "Danyllo":
        secondItem = "dá uma mão"
       break
      default:
        thirtItem = "Ajudaa"
    }
  }
  return [firstItem, secondItem, thirtItem]
}

console.log(iterableFunc(name))