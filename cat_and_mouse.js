function catAndMouse(x, y, z) {
    const catADistance = Math.abs(x - z);
  const catBDistance = Math.abs(y - z);

  if (catADistance < catBDistance) {
    return "Cat A";
  } else if (catBDistance < catADistance) {
    return "Cat B";
  } else {
    return "Mouse C";
  }
}
const result = catAndMouse(1, 3, 2);
console.log(result);