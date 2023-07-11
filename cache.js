console.log("Cache")

const newCache = caches.open("test")

console.log(newCache)

const urls = ['pets/cats.json', 'pets/dogs.json'];
newCache.addAll(urls);

console.log(newCache)