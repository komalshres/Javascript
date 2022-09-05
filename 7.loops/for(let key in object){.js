for (let key in object) {
  key = object[key]; // name , age
  if (key === "name") object["FirstName"] = object[key].toUpperCase();
}

for (let index of array) {
}
