let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();

document.cookie = "user=John; secure; samesite=strict; expires=" + date;

// console.log(document.cookie);

// Both session and local storage have same methods...

// setItem(key, value)
// getItem(key)
// removeItem(key)
// clear()
// key(index)
// size

// localStorage.setItem("test", "1");
// localStorage.setItem("2", "shibu");

// console.log(localStorage.getItem("test"));
// console.log(localStorage.key(0));
// console.log(localStorage.removeItem("yoyo"));
// console.log(localStorage.size);

for (let i in localStorage) {
  if (!localStorage.hasOwnProperty(i)) {
    continue;
  }
  console.log(i);
}


// sessionStorage.setItem("test", "sessionStorage")