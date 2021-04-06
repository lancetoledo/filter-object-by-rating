// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let netflixShows = [
  {
    title: "Stranger Things",
    rating: 4,
    director: "blah blah"
  },
  {
    title: "Cobra Kai",
    rating: 2,
    director: "hello"
  },
  {
    title: "Queen's Gambit",
    rating: 5,
    director: "lala"
  },
  {
    title: "Locke & Key",
    rating: 4,
    director: "lol"
  },
  {
    title: "Big Mouth",
    rating: 3,
    director: "kk"
  },
  {
    title: "Glee",
    rating: 2,
    director: "wow"
  }
];

for (let i = 0; i < netflixShows.length; i++) {
  if (netflixShows[i].rating >= 3) {
    console.log(
      "Shows that have ratings of atleast 3: " + "" + netflixShows[i].title
    );
  }
}
