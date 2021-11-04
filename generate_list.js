const list = ["banana", "mango", "apple"]
{/* <ul>
  <li>banana</li>
  <li>mango</li>
  <li>apple</li>
</ul> */}

function listItem(item) {
  return `<li>${item}</li>`
}

function generateList(arrayItems) {
  
  // for (var i = 0; i < arrayItems.length; i++) {
  //   const list = listItem(arrayItems[i])
  // }

  // map

  const listElement = arrayItems.map((el) => {
    const list = listItem(el)
    return list
  }).join("")

  console.log(listElement);


}



console.log(generateList(list));
