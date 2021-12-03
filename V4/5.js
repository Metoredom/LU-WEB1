// FIRST
var a = `<thead>
  Header`;
a += '</thead>';

// SECOND
let accum = '';
for (i = 1; i < 10; i++) {
  accum += i;
}

// THIRD
var cities = [
  {
    country: "Latvia",
    city: "Riga"
  },
  {
    country: "Estonia",
    city: "Tallinn"
  }
];
cities[3] = {country: "Lithuania", city:"Vilnius"};