function choice(arr) {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

function remove(arr, item) {
  return (arr.indexOf(item) >= 0 ? arr.filter(val => val !== item) : undefined);
}

export { choice, remove }