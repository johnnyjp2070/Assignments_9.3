var evens = [2, 4, 6, 8];
var odds = [1, 3, 5, 7];
var primes = [2, 3, 5, 7, 11];

var numbers = [...primes, ...evens, ...odds];

console.log(numbers);

var names = ["vinay", "virat", "raju"];
var names = [...names, ...primes];
console.log(names);

var jamesBond = {
    first: "James",
    last: "Bond",
    country: "United States",
    city: "New York",
    twitter: "@jamesbond"
}
var{first:first, last:last, country:country, city:city, twitter:twitter} = jamesBond;
console.log(first);

var players = ['paul', 'andy', 'darrel', 'jim'];
var[player1, player2, player3, player4] = players;
console.log(player1);