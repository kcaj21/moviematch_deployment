use moviematch;

db.dropDatabase();
db.favourites.insertMany([]);


db.movies.insertMany([
    {"Title":"Jaws","Year":"1975","Rated":"PG","Released":"20 Jun 1975","Runtime":"124 min","Genre":"Adventure, Mystery, Thriller","Director":"Steven Spielberg","Writer":"Peter Benchley, Carl Gottlieb","Actors":"Roy Scheider, Robert Shaw, Richard Dreyfuss","Plot":"When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.","Language":"English","Country":"United States","Awards":"Won 3 Oscars. 15 wins & 20 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"97%"},{"Source":"Metacritic","Value":"87/100"}],"Metascore":"87","imdbRating":"8.1","imdbVotes":"628,138","imdbID":"tt0073195","Type":"movie","DVD":"14 Jun 2005","BoxOffice":"$265,859,065","Production":"N/A","Website":"N/A", "Favourites": false},
    {"Title":"Indiana Jones and the Temple of Doom","Year":"1984","Rated":"PG","Released":"23 May 1984","Runtime":"118 min","Genre":"Action, Adventure","Director":"Steven Spielberg","Writer":"Willard Huyck, Gloria Katz, George Lucas","Actors":"Harrison Ford, Kate Capshaw, Ke Huy Quan","Plot":"In 1935, Indiana Jones is tasked by Indian villagers with reclaiming a rock stolen from them by a secret cult beneath the catacombs of an ancient palace.","Language":"English, Sinhala, Hindi","Country":"United States","Awards":"Won 1 Oscar. 11 wins & 21 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BYzgzMTIzNzctNmNiZC00ZDYyLWJjNzktMmQ2MDM2ZDkwZGVhXkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"77%"},{"Source":"Metacritic","Value":"57/100"}],"Metascore":"57","imdbRating":"7.5","imdbVotes":"512,702","imdbID":"tt0087469","Type":"movie","DVD":"13 May 2008","BoxOffice":"$179,870,271","Production":"N/A","Website":"N/A", "Favourites": false},
    {"Title":"Mean Girls","Year":"2004","Rated":"PG-13","Released":"30 Apr 2004","Runtime":"97 min","Genre":"Comedy","Director":"Mark Waters","Writer":"Rosalind Wiseman, Tina Fey","Actors":"Lindsay Lohan, Jonathan Bennett, Rachel McAdams","Plot":"Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.","Language":"English, German, Vietnamese, Swahili","Country":"United States, Canada","Awards":"7 wins & 25 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMjE1MDQ4MjI1OV5BMl5BanBnXkFtZTcwNzcwODAzMw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.1/10"},{"Source":"Rotten Tomatoes","Value":"84%"},{"Source":"Metacritic","Value":"66/100"}],"Metascore":"66","imdbRating":"7.1","imdbVotes":"400,967","imdbID":"tt0377092","Type":"movie","DVD":"21 Sep 2004","BoxOffice":"$86,058,055","Production":"N/A","Website":"N/A", "Favourites": false},
    {"Title":"Freaky Friday","Year":"2003","Rated":"PG","Released":"06 Aug 2003","Runtime":"97 min","Genre":"Comedy, Family, Fantasy","Director":"Mark Waters","Writer":"Mary Rodgers, Heather Hach, Leslie Dixon","Actors":"Jamie Lee Curtis, Lindsay Lohan, Mark Harmon","Plot":"An overworked mother and her daughter do not get along. When they switch bodies, each is forced to adapt to the other's life for one freaky Friday.","Language":"English, Mandarin","Country":"United States","Awards":"5 wins & 11 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BYmU4NTk4OWYtMjE4My00MGVkLTgwY2EtZTZjN2YyOGFiMDQ0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.3/10"},{"Source":"Rotten Tomatoes","Value":"88%"},{"Source":"Metacritic","Value":"70/100"}],"Metascore":"70","imdbRating":"6.3","imdbVotes":"144,993","imdbID":"tt0322330","Type":"movie","DVD":"21 Dec 2004","BoxOffice":"$110,230,332","Production":"N/A","Website":"N/A","Favourites":false},
    {
      "Title": "Goodfellas",
      "Year": "1990",
      "Rated": "R",
      "Released": "21 Sep 1990",
      "Runtime": "145 min",
      "Genre": "Biography, Crime, Drama",
      "Director": "Martin Scorsese",
      "Writer": "Nicholas Pileggi, Martin Scorsese",
      "Actors": "Robert De Niro, Ray Liotta, Joe Pesci",
      "Plot": "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
      "Language": "English, Italian",
      "Country": "United States",
      "Awards": "Won 1 Oscar. 44 wins & 38 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.7/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "96%"
      },
      {
      "Source": "Metacritic",
      "Value": "92/100"
      }
      ],
      "Metascore": "92",
      "imdbRating": "8.7",
      "imdbVotes": "1,198,435",
      "imdbID": "tt0099685",
      "Type": "movie",
      "DVD": "22 Aug 1997",
      "BoxOffice": "$46,909,721",
      "Production": "N/A",
      "Website": "N/A",

      "Favourites" : false

      },
      {
      "Title": "The Irishman",
      "Year": "2019",
      "Rated": "R",
      "Released": "27 Nov 2019",
      "Runtime": "209 min",
      "Genre": "Biography, Crime, Drama",
      "Director": "Martin Scorsese",
      "Writer": "Steven Zaillian, Charles Brandt",
      "Actors": "Robert De Niro, Al Pacino, Joe Pesci",
      "Plot": "An illustration of Frank Sheeran's life, from W.W.II veteran to hit-man for the Bufalino crime family and his alleged assassination of his close friend Jimmy Hoffa.",
      "Language": "English, Italian, Latin, Spanish, German",
      "Country": "United States",
      "Awards": "Nominated for 10 Oscars. 73 wins & 356 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "7.8/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "95%"
      },
      {
      "Source": "Metacritic",
      "Value": "94/100"
      }
      ],
      "Metascore": "94",
      "imdbRating": "7.8",
      "imdbVotes": "405,834",
      "imdbID": "tt1302006",
      "Type": "movie",
      "DVD": "27 Nov 2019",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",

      "Favourites" : false
      },
      {
      "Title": "Taxi Driver",
      "Year": "1976",
      "Rated": "R",
      "Released": "09 Feb 1976",
      "Runtime": "114 min",
      "Genre": "Crime, Drama",
      "Director": "Martin Scorsese",
      "Writer": "Paul Schrader",
      "Actors": "Robert De Niro, Jodie Foster, Cybill Shepherd",
      "Plot": "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action.",
      "Language": "English, Spanish",
      "Country": "United States",
      "Awards": "Nominated for 4 Oscars. 22 wins & 21 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.2/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "96%"
      },
      {
      "Source": "Metacritic",
      "Value": "94/100"
      }
      ],
      "Metascore": "94",
      "imdbRating": "8.2",
      "imdbVotes": "869,400",
      "imdbID": "tt0075314",
      "Type": "movie",
      "DVD": "14 Aug 2007",
      "BoxOffice": "$28,262,574",
      "Production": "N/A",
      "Website": "N/A",
      "Favourites" : false
      },
      {
      "Title": "The Wolf of Wall Street",
      "Year": "2013",
      "Rated": "R",
      "Released": "25 Dec 2013",
      "Runtime": "180 min",
      "Genre": "Biography, Comedy, Crime",
      "Director": "Martin Scorsese",
      "Writer": "Terence Winter, Jordan Belfort",
      "Actors": "Leonardo DiCaprio, Jonah Hill, Margot Robbie",
      "Plot": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      "Language": "English, French",
      "Country": "United States",
      "Awards": "Nominated for 5 Oscars. 37 wins & 179 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.2/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "80%"
      },
      {
      "Source": "Metacritic",
      "Value": "75/100"
      }
      ],
      "Metascore": "75",
      "imdbRating": "8.2",
      "imdbVotes": "1,472,956",
      "imdbID": "tt0993846",
      "Type": "movie",
      "DVD": "25 Mar 2014",
      "BoxOffice": "$116,900,694",
      "Production": "N/A",
      "Website": "N/A",

      "Favourites":false

      },
      {
      "Title": "Casino",
      "Year": "1995",
      "Rated": "R",
      "Released": "22 Nov 1995",
      "Runtime": "178 min",
      "Genre": "Crime, Drama",
      "Director": "Martin Scorsese",
      "Writer": "Nicholas Pileggi, Martin Scorsese",
      "Actors": "Robert De Niro, Sharon Stone, Joe Pesci",
      "Plot": "In Las Vegas, two best friends - a mafia enforcer and a casino executive - compete for a gambling empire and a fast-living, fast-loving socialite.",
      "Language": "English",
      "Country": "United States, France",
      "Awards": "Nominated for 1 Oscar. 4 wins & 11 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.2/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "79%"
      },
      {
      "Source": "Metacritic",
      "Value": "73/100"
      }
      ],
      "Metascore": "73",
      "imdbRating": "8.2",
      "imdbVotes": "537,767",
      "imdbID": "tt0112641",
      "Type": "movie",
      "DVD": "26 Feb 2002",
      "BoxOffice": "$42,512,375",
      "Production": "N/A",
      "Website": "N/A",

      "Favourites":false

      },
      {
      "Title": "The Birds",
      "Year": "1963",
      "Rated": "PG-13",
      "Released": "29 Mar 1963",
      "Runtime": "119 min",
      "Genre": "Drama, Horror, Mystery",
      "Director": "Alfred Hitchcock",
      "Writer": "Daphne Du Maurier, Evan Hunter",
      "Actors": "Rod Taylor, Tippi Hedren, Jessica Tandy",
      "Plot": "A wealthy San Francisco socialite pursues a potential boyfriend to a small Northern California town that slowly takes a turn for the bizarre when birds of all kinds suddenly begin to attack people.",
      "Language": "English",
      "Country": "United States",
      "Awards": "Nominated for 1 Oscar. 5 wins & 7 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTAxNDA1ODc5MDleQTJeQWpwZ15BbWU4MDg2MDA4OTEx._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "7.6/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "94%"
      },
      {
      "Source": "Metacritic",
      "Value": "90/100"
      }
      ],
      "Metascore": "90",
      "imdbRating": "7.6",
      "imdbVotes": "197,109",
      "imdbID": "tt0056869",
      "Type": "movie",
      "DVD": "02 Sep 2003",
      "BoxOffice": "N/A",
      "Production": "N/A",
      "Website": "N/A",

      "Favourites":false

      },
      {
      "Title": "Psycho",
      "Year": "1960",
      "Rated": "R",
      "Released": "08 Sep 1960",
      "Runtime": "109 min",
      "Genre": "Horror, Mystery, Thriller",
      "Director": "Alfred Hitchcock",
      "Writer": "Joseph Stefano, Robert Bloch",
      "Actors": "Anthony Perkins, Janet Leigh, Vera Miles",
      "Plot": "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.",
      "Language": "English",
      "Country": "United States",
      "Awards": "Nominated for 4 Oscars. 7 wins & 14 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.5/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "96%"
      },
      {
      "Source": "Metacritic",
      "Value": "97/100"
      }
      ],
      "Metascore": "97",
      "imdbRating": "8.5",
      "imdbVotes": "690,896",
      "imdbID": "tt0054215",
      "Type": "movie",
      "DVD": "04 Oct 2005",
      "BoxOffice": "$32,000,000",
      "Production": "N/A",
      "Website": "N/A",

      "Favourites":false

      },
      {
      "Title": "Vertigo",
      "Year": "1958",
      "Rated": "PG",
      "Released": "16 Jun 1958",
      "Runtime": "128 min",
      "Genre": "Mystery, Romance, Thriller",
      "Director": "Alfred Hitchcock",
      "Writer": "Alec Coppel, Samuel A. Taylor, Pierre Boileau",
      "Actors": "James Stewart, Kim Novak, Barbara Bel Geddes",
      "Plot": "A former San Francisco police detective juggles wrestling with his personal demons and becoming obsessed with the hauntingly beautiful woman he has been hired to trail, who may be deeply disturbed.",
      "Language": "English",
      "Country": "United States",
      "Awards": "Nominated for 2 Oscars. 9 wins & 7 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTE4ODEwZDUtNDFjOC00NjAxLWEzYTQtYTI1NGVmZmFlNjdiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.3/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "92%"
      },
      {
      "Source": "Metacritic",
      "Value": "100/100"
      }
      ],
      "Metascore": "100",
      "imdbRating": "8.3",
      "imdbVotes": "411,923",
      "imdbID": "tt0052357",
      "Type": "movie",
      "DVD": "25 Jan 2001",
      "BoxOffice": "$7,705,225",
      "Production": "N/A",
      "Website": "N/A",

      "Favourites":false

      },
      {
      "Title": "North by Northwest",
      "Year": "1959",
      "Rated": "Approved",
      "Released": "18 Dec 1959",
      "Runtime": "136 min",
      "Genre": "Action, Adventure, Mystery",
      "Director": "Alfred Hitchcock",
      "Writer": "Ernest Lehman",
      "Actors": "Cary Grant, Eva Marie Saint, James Mason",
      "Plot": "A New York City advertising executive goes on the run after being mistaken for a government agent by a group of foreign spies, and falls for a woman whose loyalties he begins to doubt.",
      "Language": "English, French",
      "Country": "United States",
      "Awards": "Nominated for 3 Oscars. 9 wins & 7 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZDA3NDExMTUtMDlhOC00MmQ5LWExZGUtYmI1NGVlZWI4OWNiXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.3/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "97%"
      },
      {
      "Source": "Metacritic",
      "Value": "98/100"
      }
      ],
      "Metascore": "98",
      "imdbRating": "8.3",
      "imdbVotes": "335,948",
      "imdbID": "tt0053125",
      "Type": "movie",
      "DVD": "03 Nov 2009",
      "BoxOffice": "$66,728",
      "Production": "N/A",
      "Website": "N/A",

      "Favourites":false

      },
      {
      "Title": "Rear Window",
      "Year": "1954",
      "Rated": "PG",
      "Released": "01 Sep 1954",
      "Runtime": "112 min",
      "Genre": "Mystery, Thriller",
      "Director": "Alfred Hitchcock",
      "Writer": "John Michael Hayes, Cornell Woolrich",
      "Actors": "James Stewart, Grace Kelly, Wendell Corey",
      "Plot": "A photographer in a wheelchair spies on his neighbors from his Greenwich Village courtyard apartment window, and becomes convinced one of them has committed murder, despite the skepticism of his fashion-model girlfriend.",
      "Language": "English",
      "Country": "United States",
      "Awards": "Nominated for 4 Oscars. 6 wins & 13 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.5/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "98%"
      },
      {
      "Source": "Metacritic",
      "Value": "100/100"
      }
      ],
      "Metascore": "100",
      "imdbRating": "8.5",
      "imdbVotes": "503,248",
      "imdbID": "tt0047396",
      "Type": "movie",
      "DVD": "07 Sep 2004",
      "BoxOffice": "$36,764,313",
      "Production": "N/A",
      "Website": "N/A",

      "Favourites":false

      },
      {
      "Title": "Alien",
      "Year": "1979",
      "Rated": "R",
      "Released": "22 Jun 1979",
      "Runtime": "117 min",
      "Genre": "Horror, Sci-Fi",
      "Director": "Ridley Scott",
      "Writer": "Dan O'Bannon, Ronald Shusett",
      "Actors": "Sigourney Weaver, Tom Skerritt, John Hurt",
      "Plot": "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
      "Language": "English",
      "Country": "United Kingdom, United States",
      "Awards": "Won 1 Oscar. 18 wins & 22 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGQzZTBjMjQtOTVmMS00NGE5LWEyYmMtOGQ1ZGZjNmRkYjFhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.5/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "98%"
      },
      {
      "Source": "Metacritic",
      "Value": "89/100"
      }
      ],
      "Metascore": "89",
      "imdbRating": "8.5",
      "imdbVotes": "907,995",
      "imdbID": "tt0078748",
      "Type": "movie",
      "DVD": "01 Jun 1999",
      "BoxOffice": "$81,900,459",
      "Production": "N/A",
      "Website": "N/A",

      "Favourites":false

      },
      {
      "Title": "Gladiator",
      "Year": "2000",
      "Rated": "R",
      "Released": "05 May 2000",
      "Runtime": "155 min",
      "Genre": "Action, Adventure, Drama",
      "Director": "Ridley Scott",
      "Writer": "David Franzoni, John Logan, William Nicholson",
      "Actors": "Russell Crowe, Joaquin Phoenix, Connie Nielsen",
      "Plot": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      "Language": "English",
      "Country": "United States, United Kingdom, Malta, Morocco",
      "Awards": "Won 5 Oscars. 60 wins & 104 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.5/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "80%"
      },
      {
      "Source": "Metacritic",
      "Value": "67/100"
      }
      ],
      "Metascore": "67",
      "imdbRating": "8.5",
      "imdbVotes": "1,542,955",
      "imdbID": "tt0172495",
      "Type": "movie",
      "DVD": "26 Sep 2000",
      "BoxOffice": "$187,705,427",
      "Production": "N/A",
      "Website": "N/A",

      "Favourites":false

      },
      {
      "Title": "Blade Runner",
      "Year": "1982",
      "Rated": "R",
      "Released": "25 Jun 1982",
      "Runtime": "117 min",
      "Genre": "Action, Drama, Sci-Fi",
      "Director": "Ridley Scott",
      "Writer": "Hampton Fancher, David Webb Peoples, Philip K. Dick",
      "Actors": "Harrison Ford, Rutger Hauer, Sean Young",
      "Plot": "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
      "Language": "English, German, Cantonese, Japanese, Hungarian, Arabic, Korean",
      "Country": "United States",
      "Awards": "Nominated for 2 Oscars. 13 wins & 19 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.1/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "89%"
      },
      {
      "Source": "Metacritic",
      "Value": "84/100"
      }
      ],
      "Metascore": "84",
      "imdbRating": "8.1",
      "imdbVotes": "791,411",
      "imdbID": "tt0083658",
      "Type": "movie",
      "DVD": "30 Oct 2001",
      "BoxOffice": "$32,914,489",
      "Production": "N/A",
      "Website": "N/A",

      "Favourites":false

      },
      {
      "Title": "The Martian",
      "Year": "2015",
      "Rated": "PG-13",
      "Released": "02 Oct 2015",
      "Runtime": "144 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Ridley Scott",
      "Writer": "Drew Goddard, Andy Weir",
      "Actors": "Matt Damon, Jessica Chastain, Kristen Wiig",
      "Plot": "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive and can survive until a potential rescue.",
      "Language": "English, Mandarin",
      "Country": "United States, United Kingdom, Hungary, Jordan",
      "Awards": "Nominated for 7 Oscars. 40 wins & 200 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.0/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "91%"
      },
      {
      "Source": "Metacritic",
      "Value": "80/100"
      }
      ],
      "Metascore": "80",
      "imdbRating": "8.0",
      "imdbVotes": "883,228",
      "imdbID": "tt3659388",
      "Type": "movie",
      "DVD": "12 Jan 2016",
      "BoxOffice": "$228,433,663",
      "Production": "N/A",
      "Website": "N/A",

      "Favourites":false

      },
      {
      "Title": "Prometheus",
      "Year": "2012",
      "Rated": "R",
      "Released": "08 Jun 2012",
      "Runtime": "124 min",
      "Genre": "Adventure, Mystery, Sci-Fi",
      "Director": "Ridley Scott",
      "Writer": "Jon Spaihts, Damon Lindelof, Dan O'Bannon",
      "Actors": "Noomi Rapace, Logan Marshall-Green, Michael Fassbender",
      "Plot": "Following clues to the origin of mankind, a team finds a structure on a distant moon, but they soon realize they are not alone.",
      "Language": "English, Gaelic",
      "Country": "United Kingdom, United States",
      "Awards": "Nominated for 1 Oscar. 6 wins & 47 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTY3NzIyNTA2NV5BMl5BanBnXkFtZTcwNzE2NjI4Nw@@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "7.0/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "73%"
      },
      {
      "Source": "Metacritic",
      "Value": "64/100"
      }
      ],
      "Metascore": "64",
      "imdbRating": "7.0",
      "imdbVotes": "622,356",
      "imdbID": "tt1446714",
      "Type": "movie",
      "DVD": "09 Oct 2012",
      "BoxOffice": "$126,477,084",
      "Production": "N/A",
      "Website": "N/A",

      "Favourites":false

      },
      {
      "Title": "Unforgiven",
      "Year": "1992",
      "Rated": "R",
      "Released": "07 Aug 1992",
      "Runtime": "130 min",
      "Genre": "Drama, Western",
      "Director": "Clint Eastwood",
      "Writer": "David Webb Peoples",
      "Actors": "Clint Eastwood, Gene Hackman, Morgan Freeman",
      "Plot": "Retired Old West gunslinger William Munny reluctantly takes on one last job, with the help of his old partner Ned Logan and a young man, The \"Schofield Kid.\"",
      "Language": "English",
      "Country": "United States",
      "Awards": "Won 4 Oscars. 50 wins & 47 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BODM3YWY4NmQtN2Y3Ni00OTg0LWFhZGQtZWE3ZWY4MTJlOWU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.2/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "96%"
      },
      {
      "Source": "Metacritic",
      "Value": "85/100"
      }
      ],
      "Metascore": "85",
      "imdbRating": "8.2",
      "imdbVotes": "422,266",
      "imdbID": "tt0105695",
      "Type": "movie",
      "DVD": "30 Oct 2001",
      "BoxOffice": "$101,167,799",
      "Production": "N/A",
      "Website": "N/A",

      "Favourites":false

      },
      {
      "Title": "Gran Torino",
      "Year": "2008",
      "Rated": "R",
      "Released": "09 Jan 2009",
      "Runtime": "116 min",
      "Genre": "Drama",
      "Director": "Clint Eastwood",
      "Writer": "Nick Schenk, Dave Johannson",
      "Actors": "Clint Eastwood, Bee Vang, Christopher Carley",
      "Plot": "After a Hmong teenager tries to steal his prized 1972 Gran Torino, a disgruntled, prejudiced Korean War veteran seeks to redeem both the boy and himself.",
      "Language": "English, Hmong",
      "Country": "Germany, United States",
      "Awards": "21 wins & 22 nominations",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5NTk2OTU1Nl5BMl5BanBnXkFtZTcwMDc3NjAwMg@@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.1/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "81%"
      },
      {
      "Source": "Metacritic",
      "Value": "72/100"
      }
      ],
      "Metascore": "72",
      "imdbRating": "8.1",
      "imdbVotes": "792,239",
      "imdbID": "tt1205489",
      "Type": "movie",
      "DVD": "09 Jun 2009",
      "BoxOffice": "$148,095,302",
      "Production": "N/A",
      "Website": "N/A",

      "Favourites":false

      },
      {
      "Title": "American Sniper",
      "Year": "2014",
      "Rated": "R",
      "Released": "16 Jan 2015",
      "Runtime": "133 min",
      "Genre": "Action, Biography, Drama",
      "Director": "Clint Eastwood",
      "Writer": "Jason Hall, Chris Kyle, Scott McEwen",
      "Actors": "Bradley Cooper, Sienna Miller, Kyle Gallner",
      "Plot": "Navy S.E.A.L. sniper Chris Kyle's pinpoint accuracy saves countless lives on the battlefield and turns him into a legend. Back home with his family after four tours of duty, however, Chris finds that it is the war he can't leave b...",
      "Language": "English, Arabic",
      "Country": "United States",
      "Awards": "Won 1 Oscar. 24 wins & 43 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTkxNzI3ODI4Nl5BMl5BanBnXkFtZTgwMjkwMjY4MjE@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "7.3/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "72%"
      },
      {
      "Source": "Metacritic",
      "Value": "72/100"
      }
      ],
      "Metascore": "72",
      "imdbRating": "7.3",
      "imdbVotes": "505,158",
      "imdbID": "tt2179136",
      "Type": "movie",
      "DVD": "19 May 2015",
      "BoxOffice": "$350,159,020",
      "Production": "N/A",
      "Website": "N/A",
      "Favourites":false

      },
      {
      "Title": "Million Dollar Baby",
      "Year": "2004",
      "Rated": "PG-13",
      "Released": "28 Jan 2005",
      "Runtime": "132 min",
      "Genre": "Drama, Sport",
      "Director": "Clint Eastwood",
      "Writer": "Paul Haggis, F.X. Toole",
      "Actors": "Hilary Swank, Clint Eastwood, Morgan Freeman",
      "Plot": "Frankie, an ill-tempered old coach, reluctantly agrees to train aspiring boxer Maggie. Impressed with her determination and talent, he helps her become the best and the two soon form a close bond.",
      "Language": "English, Irish Gaelic",
      "Country": "United States",
      "Awards": "Won 4 Oscars. 67 wins & 86 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTkxNzA1NDQxOV5BMl5BanBnXkFtZTcwNTkyMTIzMw@@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "8.1/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "90%"
      },
      {
      "Source": "Metacritic",
      "Value": "86/100"
      }
      ],
      "Metascore": "86",
      "imdbRating": "8.1",
      "imdbVotes": "701,496",
      "imdbID": "tt0405159",
      "Type": "movie",
      "DVD": "12 Jul 2005",
      "BoxOffice": "$100,492,203",
      "Production": "N/A",
      "Website": "N/A",
      "Favourites":false

      },
      {
      "Title": "Sully",
      "Year": "2016",
      "Rated": "PG-13",
      "Released": "09 Sep 2016",
      "Runtime": "96 min",
      "Genre": "Biography, Drama",
      "Director": "Clint Eastwood",
      "Writer": "Todd Komarnicki, Chesley Sullenberger, Jeffrey Zaslow",
      "Actors": "Tom Hanks, Aaron Eckhart, Laura Linney",
      "Plot": "When pilot Chesley \"Sully\" Sullenberger lands his damaged plane on the Hudson River in order to save the flight's passengers and crew, some consider him a hero while others think he was reckless.",
      "Language": "English",
      "Country": "United States",
      "Awards": "Nominated for 1 Oscar. 14 wins & 36 nominations total",
      "Poster": "https://m.media-amazon.com/images/M/MV5BY2NmZDAwM2QtZmFiMS00OTJlLTgxMTItZDMyZmVhYjE1MDY3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Ratings": [
      {
      "Source": "Internet Movie Database",
      "Value": "7.4/10"
      },
      {
      "Source": "Rotten Tomatoes",
      "Value": "85%"
      },
      {
      "Source": "Metacritic",
      "Value": "74/100"
      }
      ],
      "Metascore": "74",
      "imdbRating": "7.4",
      "imdbVotes": "284,351",
      "imdbID": "tt3263904",
      "Type": "movie",
      "DVD": "20 Dec 2016",
      "BoxOffice": "$125,070,033",
      "Production": "N/A",
      "Website": "N/A",
      "Favourites":false

      },
      {
        "Title": "The Master",
        "Year": "2012",
        "Rated": "R",
        "Released": "21 Sep 2012",
        "Runtime": "138 min",
        "Genre": "Drama, History",
        "Director": "Paul Thomas Anderson",
        "Writer": "Paul Thomas Anderson",
        "Actors": "Joaquin Phoenix, Philip Seymour Hoffman, Amy Adams",
        "Plot": "A Naval veteran arrives home from war unsettled and uncertain of his future - until he is tantalized by the Cause and its charismatic leader.",
        "Language": "English, Filipino",
        "Country": "United States",
        "Awards": "Nominated for 3 Oscars. 75 wins & 187 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NjQ5MzMwMF5BMl5BanBnXkFtZTcwMjczNTAzOA@@._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "7.1/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "85%"
        },
        {
        "Source": "Metacritic",
        "Value": "86/100"
        }
        ],
        "Metascore": "86",
        "imdbRating": "7.1",
        "imdbVotes": "180,411",
        "imdbID": "tt1560747",
        "Type": "movie",
        "DVD": "26 Feb 2013",
        "BoxOffice": "$16,377,274",
        "Production": "N/A",
        "Website": "N/A",
        "Favourites":false

        },
        {
        "Title": "There Will Be Blood",
        "Year": "2007",
        "Rated": "R",
        "Released": "25 Jan 2008",
        "Runtime": "158 min",
        "Genre": "Drama",
        "Director": "Paul Thomas Anderson",
        "Writer": "Paul Thomas Anderson, Upton Sinclair",
        "Actors": "Daniel Day-Lewis, Paul Dano, Ciarán Hinds",
        "Plot": "A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.",
        "Language": "English, American Sign ",
        "Country": "United States",
        "Awards": "Won 2 Oscars. 118 wins & 137 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxODQ4MDU5NV5BMl5BanBnXkFtZTcwMDU4MjU1MQ@@._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "8.2/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "91%"
        },
        {
        "Source": "Metacritic",
        "Value": "93/100"
        }
        ],
        "Metascore": "93",
        "imdbRating": "8.2",
        "imdbVotes": "603,049",
        "imdbID": "tt0469494",
        "Type": "movie",
        "DVD": "08 Apr 2008",
        "BoxOffice": "$40,222,514",
        "Production": "N/A",
        "Website": "N/A",
        "Favourites":false

        },
        {
        "Title": "Magnolia",
        "Year": "1999",
        "Rated": "R",
        "Released": "07 Jan 2000",
        "Runtime": "188 min",
        "Genre": "Drama",
        "Director": "Paul Thomas Anderson",
        "Writer": "Paul Thomas Anderson",
        "Actors": "Tom Cruise, Jason Robards, Julianne Moore",
        "Plot": "An epic mosaic of interrelated characters in search of love, forgiveness and meaning in the San Fernando Valley.",
        "Language": "English, German, French",
        "Country": "United States",
        "Awards": "Nominated for 3 Oscars. 28 wins & 59 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZjk3YThkNDktNjZjMS00MTBiLTllNTAtYzkzMTU0N2QwYjJjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "8.0/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "83%"
        },
        {
        "Source": "Metacritic",
        "Value": "78/100"
        }
        ],
        "Metascore": "78",
        "imdbRating": "8.0",
        "imdbVotes": "320,270",
        "imdbID": "tt0175880",
        "Type": "movie",
        "DVD": "08 May 2007",
        "BoxOffice": "$22,455,976",
        "Production": "N/A",
        "Website": "N/A",
        "Favourites":false

        },
        {
        "Title": "Phantom Thread",
        "Year": "2017",
        "Rated": "R",
        "Released": "19 Jan 2018",
        "Runtime": "130 min",
        "Genre": "Drama, History, Romance",
        "Director": "Paul Thomas Anderson",
        "Writer": "Paul Thomas Anderson",
        "Actors": "Vicky Krieps, Daniel Day-Lewis, Lesley Manville",
        "Plot": "Set in 1950s London, Reynolds Woodcock is a renowned dressmaker whose fastidious life is disrupted by a young, strong-willed woman, Alma, who becomes his muse and lover.",
        "Language": "English, French",
        "Country": "United States, United Kingdom, China",
        "Awards": "Won 1 Oscar. 54 wins & 119 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMWJkNzBkM2UtYWFlMC00NmEwLTgxOGUtMjVmMzYyZjgyMmEzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "7.4/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "91%"
        },
        {
        "Source": "Metacritic",
        "Value": "90/100"
        }
        ],
        "Metascore": "90",
        "imdbRating": "7.4",
        "imdbVotes": "138,812",
        "imdbID": "tt5776858",
        "Type": "movie",
        "DVD": "10 Apr 2018",
        "BoxOffice": "$21,198,205",
        "Production": "N/A",
        "Website": "N/A",
        "Favourites":false

        },
        {
        "Title": "Boogie Nights",
        "Year": "1997",
        "Rated": "R",
        "Released": "31 Oct 1997",
        "Runtime": "155 min",
        "Genre": "Drama",
        "Director": "Paul Thomas Anderson",
        "Writer": "Paul Thomas Anderson",
        "Actors": "Mark Wahlberg, Julianne Moore, Burt Reynolds",
        "Plot": "Back when sex was safe, pleasure was a business and business was booming, an idealistic porn producer aspires to elevate his craft to an art when he discovers a hot young talent.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 3 Oscars. 36 wins & 64 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BY2E2YWYxY2QtZmJmZi00MjJlLWFiYWItZTk5Y2IyMWQ1ZThhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "7.9/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "94%"
        },
        {
        "Source": "Metacritic",
        "Value": "85/100"
        }
        ],
        "Metascore": "85",
        "imdbRating": "7.9",
        "imdbVotes": "273,384",
        "imdbID": "tt0118749",
        "Type": "movie",
        "DVD": "08 May 2007",
        "BoxOffice": "$26,416,349",
        "Production": "N/A",
        "Website": "N/A",
        "Favourites":false

        },
        {
        "Title": "Batman",
        "Year": "1989",
        "Rated": "PG-13",
        "Released": "23 Jun 1989",
        "Runtime": "126 min",
        "Genre": "Action, Adventure",
        "Director": "Tim Burton",
        "Writer": "Bob Kane, Sam Hamm, Warren Skaaren",
        "Actors": "Michael Keaton, Jack Nicholson, Kim Basinger",
        "Plot": "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker.",
        "Language": "English, French, Spanish",
        "Country": "United States, United Kingdom",
        "Awards": "Won 1 Oscar. 10 wins & 26 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "7.5/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "74%"
        },
        {
        "Source": "Metacritic",
        "Value": "69/100"
        }
        ],
        "Metascore": "69",
        "imdbRating": "7.5",
        "imdbVotes": "390,458",
        "imdbID": "tt0096895",
        "Type": "movie",
        "DVD": "22 Aug 1997",
        "BoxOffice": "$251,409,241",
        "Production": "N/A",
        "Website": "N/A",
        "Favourites":false

        },
        {
        "Title": "Edward Scissorhands",
        "Year": "1990",
        "Rated": "PG-13",
        "Released": "14 Dec 1990",
        "Runtime": "105 min",
        "Genre": "Drama, Fantasy, Romance",
        "Director": "Tim Burton",
        "Writer": "Tim Burton, Caroline Thompson",
        "Actors": "Johnny Depp, Winona Ryder, Dianne Wiest",
        "Plot": "The solitary life of an artificial man - who was incompletely constructed and has scissors for hands - is upended when he is taken in by a suburban family.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 1 Oscar. 9 wins & 24 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMWY2MGRkNjgtZDczNi00YWJjLTkwNmUtMTY0NTE5ZDhkZjgwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "7.9/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "89%"
        },
        {
        "Source": "Metacritic",
        "Value": "74/100"
        }
        ],
        "Metascore": "74",
        "imdbRating": "7.9",
        "imdbVotes": "505,044",
        "imdbID": "tt0099487",
        "Type": "movie",
        "DVD": "18 Dec 2001",
        "BoxOffice": "$56,362,352",
        "Production": "N/A",
        "Website": "N/A",
        "Favourites":false

        },
        {
        "Title": "Sleepy Hollow",
        "Year": "1999",
        "Rated": "R",
        "Released": "19 Nov 1999",
        "Runtime": "105 min",
        "Genre": "Fantasy, Horror, Mystery",
        "Director": "Tim Burton",
        "Writer": "Washington Irving, Kevin Yagher, Andrew Kevin Walker",
        "Actors": "Johnny Depp, Christina Ricci, Miranda Richardson",
        "Plot": "Ichabod Crane is sent to Sleepy Hollow to investigate the decapitations of three people; the culprit is legendary apparition The Headless Horseman.",
        "Language": "English, Latin",
        "Country": "United States, Germany, United Kingdom",
        "Awards": "Won 1 Oscar. 28 wins & 44 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ4Yjk5ODEtNGFkOS00OTY1LTgwYTYtOTFkNmU2NzBmNGM2XkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "70%"
        },
        {
        "Source": "Metacritic",
        "Value": "65/100"
        }
        ],
        "Metascore": "65",
        "imdbRating": "7.3",
        "imdbVotes": "370,597",
        "imdbID": "tt0162661",
        "Type": "movie",
        "DVD": "23 May 2000",
        "BoxOffice": "$101,071,502",
        "Production": "N/A",
        "Website": "N/A",
        "Favourites":false

        },
        {
        "Title": "Beetlejuice",
        "Year": "1988",
        "Rated": "PG",
        "Released": "30 Mar 1988",
        "Runtime": "92 min",
        "Genre": "Comedy, Fantasy",
        "Director": "Tim Burton",
        "Writer": "Michael McDowell, Larry Wilson, Warren Skaaren",
        "Actors": "Alec Baldwin, Geena Davis, Michael Keaton",
        "Plot": "The spirits of a deceased couple are harassed by an unbearable family that has moved into their home, and hire a malicious spirit to drive them out.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 1 Oscar. 7 wins & 11 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDdmNjBlYTctNWU0MC00ODQxLWEzNDQtZGY1NmRhYjNmNDczXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "7.5/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "86%"
        },
        {
        "Source": "Metacritic",
        "Value": "70/100"
        }
        ],
        "Metascore": "70",
        "imdbRating": "7.5",
        "imdbVotes": "317,663",
        "imdbID": "tt0094721",
        "Type": "movie",
        "DVD": "16 Sep 2008",
        "BoxOffice": "$74,664,632",
        "Production": "N/A",
        "Website": "N/A",
        "Favourites":false

        },
        {
        "Title": "Mars Attacks!",
        "Year": "1996",
        "Rated": "PG-13",
        "Released": "13 Dec 1996",
        "Runtime": "106 min",
        "Genre": "Comedy, Sci-Fi",
        "Director": "Tim Burton",
        "Writer": "Len Brown, Woody Gelman, Wally Wood",
        "Actors": "Jack Nicholson, Pierce Brosnan, Sarah Jessica Parker",
        "Plot": "Earth is invaded by Martians with unbeatable weapons and a cruel sense of humor.",
        "Language": "English, French",
        "Country": "United States",
        "Awards": "3 wins & 19 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNThlMjBmOWItNjljZi00ZGU4LWJkZjgtNWU1ZjI1MTg4MzczXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "6.4/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "56%"
        },
        {
        "Source": "Metacritic",
        "Value": "52/100"
        }
        ],
        "Metascore": "52",
        "imdbRating": "6.4",
        "imdbVotes": "235,415",
        "imdbID": "tt0116996",
        "Type": "movie",
        "DVD": "17 Jun 1997",
        "BoxOffice": "$37,781,197",
        "Production": "N/A",
        "Website": "N/A",
        "Favourites":false

        },
        {
        "Title": "The Nightmare Before Christmas",
        "Year": "1993",
        "Rated": "PG",
        "Released": "29 Oct 1993",
        "Runtime": "76 min",
        "Genre": "Animation, Family, Fantasy",
        "Director": "Henry Selick",
        "Writer": "Tim Burton, Michael McDowell, Caroline Thompson",
        "Actors": "Danny Elfman, Chris Sarandon, Catherine O'Hara",
        "Plot": "Jack Skellington, king of Halloween Town, discovers Christmas Town, but his attempts to bring Christmas to his home causes confusion.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Nominated for 1 Oscar. 6 wins & 17 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNWE4OTNiM2ItMjY4Ni00ZTViLWFiZmEtZGEyNGY2ZmNlMzIyXkEyXkFqcGdeQXVyMDU5NDcxNw@@._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "7.9/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "95%"
        },
        {
        "Source": "Metacritic",
        "Value": "82/100"
        }
        ],
        "Metascore": "82",
        "imdbRating": "7.9",
        "imdbVotes": "353,024",
        "imdbID": "tt0107688",
        "Type": "movie",
        "DVD": "03 Oct 2000",
        "BoxOffice": "$77,368,668",
        "Production": "N/A",
        "Website": "N/A",
        "Favourites":false

        },
        {
        "Title": "Pan's Labyrinth",
        "Year": "2006",
        "Rated": "R",
        "Released": "19 Jan 2007",
        "Runtime": "118 min",
        "Genre": "Drama, Fantasy, War",
        "Director": "Guillermo del Toro",
        "Writer": "Guillermo del Toro",
        "Actors": "Ivana Baquero, Ariadna Gil, Sergi López",
        "Plot": "In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
        "Language": "Spanish",
        "Country": "Mexico, Spain",
        "Awards": "Won 3 Oscars. 109 wins & 115 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzFjMThiMGItOWRlMC00MDI4LThmOGUtYTNlZGZiYWI1YjMyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "8.2/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "95%"
        },
        {
        "Source": "Metacritic",
        "Value": "98/100"
        }
        ],
        "Metascore": "98",
        "imdbRating": "8.2",
        "imdbVotes": "682,455",
        "imdbID": "tt0457430",
        "Type": "movie",
        "DVD": "15 May 2007",
        "BoxOffice": "$37,646,380",
        "Production": "N/A",
        "Website": "N/A",
        "Favourites":false

        },
        {
        "Title": "Pacific Rim",
        "Year": "2013",
        "Rated": "PG-13",
        "Released": "12 Jul 2013",
        "Runtime": "131 min",
        "Genre": "Action, Adventure, Sci-Fi",
        "Director": "Guillermo del Toro",
        "Writer": "Travis Beacham, Guillermo del Toro",
        "Actors": "Idris Elba, Charlie Hunnam, Rinko Kikuchi",
        "Plot": "As a war between humankind and monstrous sea creatures wages on, a former pilot and a trainee are paired up to drive a seemingly obsolete special weapon in a desperate effort to save the world from the apocalypse.",
        "Language": "English, Japanese, Cantonese, Mandarin",
        "Country": "United States, Mexico",
        "Awards": "Nominated for 1 BAFTA Award7 wins & 48 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY3MTI5NjQ4Nl5BMl5BanBnXkFtZTcwOTU1OTU0OQ@@._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "6.9/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "72%"
        },
        {
        "Source": "Metacritic",
        "Value": "65/100"
        }
        ],
        "Metascore": "65",
        "imdbRating": "6.9",
        "imdbVotes": "513,665",
        "imdbID": "tt1663662",
        "Type": "movie",
        "DVD": "15 Oct 2013",
        "BoxOffice": "$101,802,906",
        "Production": "N/A",
        "Website": "N/A",
        "Favourites":false

        },
        {
        "Title": "The Shape of Water",
        "Year": "2017",
        "Rated": "R",
        "Released": "22 Dec 2017",
        "Runtime": "123 min",
        "Genre": "Drama, Fantasy, Romance",
        "Director": "Guillermo del Toro",
        "Writer": "Guillermo del Toro, Vanessa Taylor",
        "Actors": "Sally Hawkins, Octavia Spencer, Michael Shannon",
        "Plot": "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.",
        "Language": "English, American Sign , Russian, French",
        "Country": "United States, Mexico",
        "Awards": "Won 4 Oscars. 136 wins & 350 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "92%"
        },
        {
        "Source": "Metacritic",
        "Value": "87/100"
        }
        ],
        "Metascore": "87",
        "imdbRating": "7.3",
        "imdbVotes": "433,644",
        "imdbID": "tt5580390",
        "Type": "movie",
        "DVD": "13 Mar 2018",
        "BoxOffice": "$63,859,435",
        "Production": "N/A",
        "Website": "N/A",
        "Favourites":false

        },
        {
        "Title": "Crimson Peak",
        "Year": "2015",
        "Rated": "R",
        "Released": "16 Oct 2015",
        "Runtime": "119 min",
        "Genre": "Drama, Horror, Mystery",
        "Director": "Guillermo del Toro",
        "Writer": "Guillermo del Toro, Matthew Robbins",
        "Actors": "Mia Wasikowska, Jessica Chastain, Tom Hiddleston",
        "Plot": "In the aftermath of a family tragedy, an aspiring author is torn between love for her childhood friend and the temptation of a mysterious outsider. Trying to escape the ghosts of her past, she is swept away to a house that breathe...",
        "Language": "English",
        "Country": "United States, Mexico",
        "Awards": "6 wins & 42 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZmNkYzk3YjItOTMwYy00ZWViLWIxMTUtZDJiZmY0ZWExYjVmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "6.5/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "73%"
        },
        {
        "Source": "Metacritic",
        "Value": "66/100"
        }
        ],
        "Metascore": "66",
        "imdbRating": "6.5",
        "imdbVotes": "153,355",
        "imdbID": "tt2554274",
        "Type": "movie",
        "DVD": "09 Feb 2016",
        "BoxOffice": "$31,090,320",
        "Production": "N/A",
        "Website": "N/A",
        "Favourites":false

        },
        {
        "Title": "Nightmare Alley",
        "Year": "2021",
        "Rated": "R",
        "Released": "17 Dec 2021",
        "Runtime": "150 min",
        "Genre": "Crime, Drama, Thriller",
        "Director": "Guillermo del Toro",
        "Writer": "Guillermo del Toro, Kim Morgan, William Lindsay Gresham",
        "Actors": "Bradley Cooper, Cate Blanchett, Toni Collette",
        "Plot": "A grifter working his way up from low-ranking carnival worker to lauded psychic medium matches wits with a psychologist bent on exposing him.",
        "Language": "English, French",
        "Country": "United States, Mexico, Canada",
        "Awards": "Nominated for 4 Oscars. 28 wins & 118 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTI4NDhhNGEtZjQxZC00ZTRmLThmZTctOGJmY2ZlOTc0ZGY0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "7.0/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "81%"
        },
        {
        "Source": "Metacritic",
        "Value": "70/100"
        }
        ],
        "Metascore": "70",
        "imdbRating": "7.0",
        "imdbVotes": "153,869",
        "imdbID": "tt7740496",
        "Type": "movie",
        "DVD": "08 Mar 2022",
        "BoxOffice": "$11,338,107",
        "Production": "N/A",
        "Website": "N/A",
        "Favourites":false

        },
        {
        "Title": "Hellboy",
        "Year": "2004",
        "Rated": "PG-13",
        "Released": "02 Apr 2004",
        "Runtime": "122 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "Guillermo del Toro",
        "Writer": "Guillermo del Toro, Peter Briggs, Mike Mignola",
        "Actors": "Ron Perlman, Doug Jones, Selma Blair",
        "Plot": "A demon raised from infancy after being conjured by and rescued from the Nazis, grows up to become a defender against the forces of darkness.",
        "Language": "English, Russian, German, Latin",
        "Country": "United States",
        "Awards": "3 wins & 23 nominations",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNTc1ZWY0ZTEtZTVmNi00MTg0LTg4NmQtZTI4OWNiMmQ0MWZkXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "6.8/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "81%"
        },
        {
        "Source": "Metacritic",
        "Value": "72/100"
        }
        ],
        "Metascore": "72",
        "imdbRating": "6.8",
        "imdbVotes": "339,510",
        "imdbID": "tt0167190",
        "Type": "movie",
        "DVD": "29 Mar 2005",
        "BoxOffice": "$59,623,958",
        "Production": "N/A",
        "Website": "N/A",
        "Favourites":false

        },
        {
        "Title": "Annie Hall",
        "Year": "1977",
        "Rated": "PG",
        "Released": "20 Apr 1977",
        "Runtime": "93 min",
        "Genre": "Comedy, Romance",
        "Director": "Woody Allen",
        "Writer": "Woody Allen, Marshall Brickman",
        "Actors": "Woody Allen, Diane Keaton, Tony Roberts",
        "Plot": "Alvy Singer, a divorced Jewish comedian, reflects on his relationship with ex-lover Annie Hall, an aspiring nightclub singer, which ended abruptly just like his previous marriages.",
        "Language": "English, German",
        "Country": "United States",
        "Awards": "Won 4 Oscars. 31 wins & 9 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZDg1OGQ4YzgtM2Y2NS00NjA3LWFjYTctMDRlMDI3NWE1OTUyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "8.0/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "97%"
        },
        {
        "Source": "Metacritic",
        "Value": "92/100"
        }
        ],
        "Metascore": "92",
        "imdbRating": "8.0",
        "imdbVotes": "270,491",
        "imdbID": "tt0075686",
        "Type": "movie",
        "DVD": "05 Jul 2000",
        "BoxOffice": "$38,251,425",
        "Production": "N/A",
        "Website": "N/A",
        "Favourites":false

        },
        {
        "Title": "Midnight in Paris",
        "Year": "2011",
        "Rated": "PG-13",
        "Released": "10 Jun 2011",
        "Runtime": "94 min",
        "Genre": "Comedy, Fantasy, Romance",
        "Director": "Woody Allen",
        "Writer": "Woody Allen",
        "Actors": "Owen Wilson, Rachel McAdams, Kathy Bates",
        "Plot": "While on a trip to Paris with his fiancée's family, a nostalgic screenwriter finds himself mysteriously going back to the 1920s every day at midnight.",
        "Language": "English, French, Spanish, German",
        "Country": "Spain, United States, France",
        "Awards": "Won 1 Oscar. 26 wins & 103 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTM4NjY1MDQwMl5BMl5BanBnXkFtZTcwNTI3Njg3NA@@._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "7.7/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "93%"
        },
        {
        "Source": "Metacritic",
        "Value": "81/100"
        }
        ],
        "Metascore": "81",
        "imdbRating": "7.7",
        "imdbVotes": "435,951",
        "imdbID": "tt1605783",
        "Type": "movie",
        "DVD": "20 Dec 2011",
        "BoxOffice": "$56,817,045",
        "Production": "N/A",
        "Website": "N/A",
        "Favourites":false

        },
        {
        "Title": "Match Point",
        "Year": "2005",
        "Rated": "R",
        "Released": "20 Jan 2006",
        "Runtime": "124 min",
        "Genre": "Drama, Romance, Thriller",
        "Director": "Woody Allen",
        "Writer": "Woody Allen",
        "Actors": "Scarlett Johansson, Jonathan Rhys Meyers, Emily Mortimer",
        "Plot": "At a turning point in his life, a former tennis pro falls for an actress who happens to be dating his friend and soon-to-be brother-in-law.",
        "Language": "English",
        "Country": "United Kingdom, United States, Luxembourg",
        "Awards": "Nominated for 1 Oscar. 12 wins & 32 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ1NzQ4OTM4MV5BMl5BanBnXkFtZTcwNzY2OTQzMw@@._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "7.6/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "77%"
        },
        {
        "Source": "Metacritic",
        "Value": "72/100"
        }
        ],
        "Metascore": "72",
        "imdbRating": "7.6",
        "imdbVotes": "222,935",
        "imdbID": "tt0416320",
        "Type": "movie",
        "DVD": "05 May 2009",
        "BoxOffice": "$23,151,529",
        "Production": "N/A",
        "Website": "N/A",
        "Favourites":false

        },
        {
        "Title": "Antz",
        "Year": "1998",
        "Rated": "PG",
        "Released": "02 Oct 1998",
        "Runtime": "83 min",
        "Genre": "Animation, Adventure, Comedy",
        "Director": "Eric Darnell, Tim Johnson",
        "Writer": "Todd Alcott, Chris Weitz, Paul Weitz",
        "Actors": "Woody Allen, Sharon Stone, Gene Hackman",
        "Plot": "A rather neurotic ant tries to break from his totalitarian society while trying to win the affection of the princess he loves.",
        "Language": "English",
        "Country": "United States, United Kingdom",
        "Awards": "Nominated for 1 BAFTA Award6 wins & 14 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzMzMDdlMDktODg4OC00Y2E5LTk1ZjMtNzM2MzIxZGQ0ZGI3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "6.5/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "92%"
        },
        {
        "Source": "Metacritic",
        "Value": "72/100"
        }
        ],
        "Metascore": "72",
        "imdbRating": "6.5",
        "imdbVotes": "159,671",
        "imdbID": "tt0120587",
        "Type": "movie",
        "DVD": "07 Jun 2005",
        "BoxOffice": "$90,757,863",
        "Production": "N/A",
        "Website": "N/A",
        "Favourites":false

        },
        {
        "Title": "Blue Jasmine",
        "Year": "2013",
        "Rated": "PG-13",
        "Released": "23 Aug 2013",
        "Runtime": "98 min",
        "Genre": "Comedy, Drama",
        "Director": "Woody Allen",
        "Writer": "Woody Allen",
        "Actors": "Cate Blanchett, Alec Baldwin, Peter Sarsgaard",
        "Plot": "A New York socialite, deeply troubled and in denial, arrives in San Francisco to impose upon her sister. She looks like a million dollars but isn't bringing money, peace or love.",
        "Language": "English",
        "Country": "United States",
        "Awards": "Won 1 Oscar. 56 wins & 82 nominations total",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTc0ODk5MzEyMV5BMl5BanBnXkFtZTcwMzI0MDY1OQ@@._V1_SX300.jpg",
        "Ratings": [
        {
        "Source": "Internet Movie Database",
        "Value": "7.3/10"
        },
        {
        "Source": "Rotten Tomatoes",
        "Value": "91%"
        },
        {
        "Source": "Metacritic",
        "Value": "78/100"
        }
        ],
        "Metascore": "78",
        "imdbRating": "7.3",
        "imdbVotes": "207,917",
        "imdbID": "tt2334873",
        "Type": "movie",
        "DVD": "21 Jan 2014",
        "BoxOffice": "$33,405,481",
        "Production": "N/A",
        "Website": "N/A",
        "Favourites":false

        },{
          "Title": "The Hurt Locker",
          "Year": "2008",
          "Rated": "R",
          "Released": "31 Jul 2009",
          "Runtime": "131 min",
          "Genre": "Drama, Thriller, War",
          "Director": "Kathryn Bigelow",
          "Writer": "Mark Boal",
          "Actors": "Jeremy Renner, Anthony Mackie, Brian Geraghty",
          "Plot": "During the Iraq War, a Sergeant recently assigned to an army bomb squad is put at odds with his squad mates due to his maverick way of handling his work.",
          "Language": "English, Arabic",
          "Country": "United States",
          "Awards": "Won 6 Oscars. 125 wins & 130 nominations total",
          "Poster": "https://m.media-amazon.com/images/M/MV5BYWYxZjU2MmQtMmMzYi00ZWUwLTg2ZWQtMDExZTVlYjM3ZWM1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
          "Ratings": [
          {
          "Source": "Internet Movie Database",
          "Value": "7.5/10"
          },
          {
          "Source": "Rotten Tomatoes",
          "Value": "97%"
          },
          {
          "Source": "Metacritic",
          "Value": "95/100"
          }
          ],
          "Metascore": "95",
          "imdbRating": "7.5",
          "imdbVotes": "462,196",
          "imdbID": "tt0887912",
          "Type": "movie",
          "DVD": "12 Jan 2010",
          "BoxOffice": "$17,017,811",
          "Production": "N/A",
          "Website": "N/A",
          "Favourites":false

          },
          {
          "Title": "Zero Dark Thirty",
          "Year": "2012",
          "Rated": "R",
          "Released": "11 Jan 2013",
          "Runtime": "157 min",
          "Genre": "Drama, History, Thriller",
          "Director": "Kathryn Bigelow",
          "Writer": "Mark Boal",
          "Actors": "Jessica Chastain, Joel Edgerton, Chris Pratt",
          "Plot": "A chronicle of the decade-long hunt for al-Qaeda terrorist leader Osama bin Laden after the September 2001 attacks, and his death at the hands of the Navy S.E.A.L.s Team 6 in May 2011.",
          "Language": "English, Arabic, Urdu, Pashtu, French",
          "Country": "United States",
          "Awards": "Won 1 Oscar. 85 wins & 174 nominations total",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ4OTUyNzcwN15BMl5BanBnXkFtZTcwMTQ1NDE3OA@@._V1_SX300.jpg",
          "Ratings": [
          {
          "Source": "Internet Movie Database",
          "Value": "7.4/10"
          },
          {
          "Source": "Rotten Tomatoes",
          "Value": "91%"
          },
          {
          "Source": "Metacritic",
          "Value": "95/100"
          }
          ],
          "Metascore": "95",
          "imdbRating": "7.4",
          "imdbVotes": "310,229",
          "imdbID": "tt1790885",
          "Type": "movie",
          "DVD": "19 Mar 2013",
          "BoxOffice": "$95,720,716",
          "Production": "N/A",
          "Website": "N/A",
          "Favourites":false

          },
          {
          "Title": "Winter's Bone",
          "Year": "2010",
          "Rated": "R",
          "Released": "16 Jul 2010",
          "Runtime": "100 min",
          "Genre": "Drama, Mystery",
          "Director": "Debra Granik",
          "Writer": "Debra Granik, Anne Rosellini, Daniel Woodrell",
          "Actors": "Jennifer Lawrence, John Hawkes, Garret Dillahunt",
          "Plot": "An unflinching Ozark Mountain girl hacks through dangerous social terrain as she hunts down her drug-dealing father while trying to keep her family intact.",
          "Language": "English",
          "Country": "United States",
          "Awards": "Nominated for 4 Oscars. 63 wins & 131 nominations total",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjA0OTM3MDMxNF5BMl5BanBnXkFtZTcwMDY1MjI0Mw@@._V1_SX300.jpg",
          "Ratings": [
          {
          "Source": "Internet Movie Database",
          "Value": "7.1/10"
          },
          {
          "Source": "Rotten Tomatoes",
          "Value": "94%"
          },
          {
          "Source": "Metacritic",
          "Value": "90/100"
          }
          ],
          "Metascore": "90",
          "imdbRating": "7.1",
          "imdbVotes": "146,197",
          "imdbID": "tt1399683",
          "Type": "movie",
          "DVD": "17 Aug 2010",
          "BoxOffice": "$6,531,503",
          "Production": "N/A",
          "Website": "N/A",
          "Favourites":false

          },
          {
          "Title": "Leave No Trace",
          "Year": "2018",
          "Rated": "PG",
          "Released": "29 Jun 2018",
          "Runtime": "109 min",
          "Genre": "Adventure, Drama",
          "Director": "Debra Granik",
          "Writer": "Debra Granik, Anne Rosellini, Peter Rock",
          "Actors": "Thomasin McKenzie, Ben Foster, Jeffery Rifflard",
          "Plot": "A father and his thirteen-year-old daughter are living an ideal existence in a vast urban park in Portland, Oregon when a small mistake derails their lives forever.",
          "Language": "English",
          "Country": "United States, Canada",
          "Awards": "18 wins & 92 nominations",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3OTI1MTU0OV5BMl5BanBnXkFtZTgwNTg1MzkzNTM@._V1_SX300.jpg",
          "Ratings": [
          {
          "Source": "Internet Movie Database",
          "Value": "7.1/10"
          },
          {
          "Source": "Rotten Tomatoes",
          "Value": "100%"
          },
          {
          "Source": "Metacritic",
          "Value": "88/100"
          }
          ],
          "Metascore": "88",
          "imdbRating": "7.1",
          "imdbVotes": "62,664",
          "imdbID": "tt3892172",
          "Type": "movie",
          "DVD": "02 Oct 2018",
          "BoxOffice": "$6,046,104",
          "Production": "N/A",
          "Website": "N/A",
          "Favourites":false

          },
          {
          "Title": "The Babadook",
          "Year": "2014",
          "Rated": "Not Rated",
          "Released": "28 Nov 2014",
          "Runtime": "94 min",
          "Genre": "Horror, Mystery",
          "Director": "Jennifer Kent",
          "Writer": "Jennifer Kent",
          "Actors": "Essie Davis, Noah Wiseman, Daniel Henshall",
          "Plot": "A single mother and her child fall into a deep well of paranoia when an eerie children's book titled \"Mister Babadook\" manifests in their home.",
          "Language": "English",
          "Country": "Australia, Canada",
          "Awards": "56 wins & 64 nominations",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTk0NzMzODc2NF5BMl5BanBnXkFtZTgwOTYzNTM1MzE@._V1_SX300.jpg",
          "Ratings": [
          {
          "Source": "Internet Movie Database",
          "Value": "6.8/10"
          },
          {
          "Source": "Rotten Tomatoes",
          "Value": "98%"
          },
          {
          "Source": "Metacritic",
          "Value": "86/100"
          }
          ],
          "Metascore": "86",
          "imdbRating": "6.8",
          "imdbVotes": "235,140",
          "imdbID": "tt2321549",
          "Type": "movie",
          "DVD": "14 Apr 2015",
          "BoxOffice": "$964,413",
          "Production": "N/A",
          "Website": "N/A",
          "Favourites":false

          },
          {
          "Title": "Iron Man",
          "Year": "2008",
          "Rated": "PG-13",
          "Released": "02 May 2008",
          "Runtime": "126 min",
          "Genre": "Action, Adventure, Sci-Fi",
          "Director": "Jon Favreau",
          "Writer": "Mark Fergus, Hawk Ostby, Art Marcum",
          "Actors": "Robert Downey Jr., Gwyneth Paltrow, Terrence Howard",
          "Plot": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
          "Language": "English, Persian, Urdu, Arabic, Kurdish, Hindi, Hungarian",
          "Country": "United States, Canada",
          "Awards": "Nominated for 2 Oscars. 22 wins & 73 nominations total",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
          "Ratings": [
          {
          "Source": "Internet Movie Database",
          "Value": "7.9/10"
          },
          {
          "Source": "Rotten Tomatoes",
          "Value": "94%"
          },
          {
          "Source": "Metacritic",
          "Value": "79/100"
          }
          ],
          "Metascore": "79",
          "imdbRating": "7.9",
          "imdbVotes": "1,086,848",
          "imdbID": "tt0371746",
          "Type": "movie",
          "DVD": "30 Sep 2008",
          "BoxOffice": "$319,034,126",
          "Production": "N/A",
          "Website": "N/A",
          "Favourites":false

          },
          {
          "Title": "Iron Man 2",
          "Year": "2010",
          "Rated": "PG-13",
          "Released": "07 May 2010",
          "Runtime": "124 min",
          "Genre": "Action, Sci-Fi",
          "Director": "Jon Favreau",
          "Writer": "Justin Theroux, Stan Lee, Don Heck",
          "Actors": "Robert Downey Jr., Mickey Rourke, Gwyneth Paltrow",
          "Plot": "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",
          "Language": "English, French, Russian",
          "Country": "United States",
          "Awards": "Nominated for 1 Oscar. 7 wins & 45 nominations total",
          "Poster": "https://m.media-amazon.com/images/M/MV5BZGVkNDAyM2EtYzYxYy00ZWUxLTgwMjgtY2VmODE5OTk3N2M5XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
          "Ratings": [
          {
          "Source": "Internet Movie Database",
          "Value": "6.9/10"
          },
          {
          "Source": "Rotten Tomatoes",
          "Value": "71%"
          },
          {
          "Source": "Metacritic",
          "Value": "57/100"
          }
          ],
          "Metascore": "57",
          "imdbRating": "6.9",
          "imdbVotes": "837,921",
          "imdbID": "tt1228705",
          "Type": "movie",
          "DVD": "17 Aug 2010",
          "BoxOffice": "$312,433,331",
          "Production": "N/A",
          "Website": "N/A",
          "Favourites":false

          },
          {
          "Title": "Iron Man 3",
          "Year": "2013",
          "Rated": "PG-13",
          "Released": "03 May 2013",
          "Runtime": "130 min",
          "Genre": "Action, Adventure, Sci-Fi",
          "Director": "Shane Black",
          "Writer": "Drew Pearce, Shane Black, Stan Lee",
          "Actors": "Robert Downey Jr., Guy Pearce, Gwyneth Paltrow",
          "Plot": "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
          "Language": "English",
          "Country": "United States",
          "Awards": "Nominated for 1 Oscar. 20 wins & 63 nominations total",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg",
          "Ratings": [
          {
          "Source": "Internet Movie Database",
          "Value": "7.1/10"
          },
          {
          "Source": "Rotten Tomatoes",
          "Value": "79%"
          },
          {
          "Source": "Metacritic",
          "Value": "62/100"
          }
          ],
          "Metascore": "62",
          "imdbRating": "7.1",
          "imdbVotes": "872,517",
          "imdbID": "tt1300854",
          "Type": "movie",
          "DVD": "24 Sep 2013",
          "BoxOffice": "$409,013,994",
          "Production": "N/A",
          "Website": "N/A",
          "Favourites":false

          },
          {
          "Title": "The Avengers",
          "Year": "2012",
          "Rated": "PG-13",
          "Released": "04 May 2012",
          "Runtime": "143 min",
          "Genre": "Action, Sci-Fi",
          "Director": "Joss Whedon",
          "Writer": "Joss Whedon, Zak Penn",
          "Actors": "Robert Downey Jr., Chris Evans, Scarlett Johansson",
          "Plot": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
          "Language": "English, Russian",
          "Country": "United States",
          "Awards": "Nominated for 1 Oscar. 38 wins & 80 nominations total",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
          "Ratings": [
          {
          "Source": "Internet Movie Database",
          "Value": "8.0/10"
          },
          {
          "Source": "Rotten Tomatoes",
          "Value": "91%"
          },
          {
          "Source": "Metacritic",
          "Value": "69/100"
          }
          ],
          "Metascore": "69",
          "imdbRating": "8.0",
          "imdbVotes": "1,420,774",
          "imdbID": "tt0848228",
          "Type": "movie",
          "DVD": "25 Sep 2012",
          "BoxOffice": "$623,357,910",
          "Production": "N/A",
          "Website": "N/A",
          "Favourites":false

          },
          {
          "Title": "Avengers: Age of Ultron",
          "Year": "2015",
          "Rated": "PG-13",
          "Released": "01 May 2015",
          "Runtime": "141 min",
          "Genre": "Action, Adventure, Sci-Fi",
          "Director": "Joss Whedon",
          "Writer": "Joss Whedon, Stan Lee, Jack Kirby",
          "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo",
          "Plot": "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
          "Language": "English, Korean",
          "Country": "United States",
          "Awards": "8 wins & 52 nominations",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
          "Ratings": [
          {
          "Source": "Internet Movie Database",
          "Value": "7.3/10"
          },
          {
          "Source": "Rotten Tomatoes",
          "Value": "76%"
          },
          {
          "Source": "Metacritic",
          "Value": "66/100"
          }
          ],
          "Metascore": "66",
          "imdbRating": "7.3",
          "imdbVotes": "888,592",
          "imdbID": "tt2395427",
          "Type": "movie",
          "DVD": "02 Oct 2015",
          "BoxOffice": "$459,005,868",
          "Production": "N/A",
          "Website": "N/A",
          "Favourites":false

          },
          {
          "Title": "Avengers: Infinity War",
          "Year": "2018",
          "Rated": "PG-13",
          "Released": "27 Apr 2018",
          "Runtime": "149 min",
          "Genre": "Action, Adventure, Sci-Fi",
          "Director": "Anthony Russo, Joe Russo",
          "Writer": "Christopher Markus, Stephen McFeely, Stan Lee",
          "Actors": "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo",
          "Plot": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
          "Language": "English",
          "Country": "United States",
          "Awards": "Nominated for 1 Oscar. 46 wins & 79 nominations total",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
          "Ratings": [
          {
          "Source": "Internet Movie Database",
          "Value": "8.4/10"
          },
          {
          "Source": "Rotten Tomatoes",
          "Value": "85%"
          },
          {
          "Source": "Metacritic",
          "Value": "68/100"
          }
          ],
          "Metascore": "68",
          "imdbRating": "8.4",
          "imdbVotes": "1,133,190",
          "imdbID": "tt4154756",
          "Type": "movie",
          "DVD": "14 Aug 2018",
          "BoxOffice": "$678,815,482",
          "Production": "N/A",
          "Website": "N/A",
          "Favourites":false

          },
          {
          "Title": "Avengers: Endgame",
          "Year": "2019",
          "Rated": "PG-13",
          "Released": "26 Apr 2019",
          "Runtime": "181 min",
          "Genre": "Action, Adventure, Drama",
          "Director": "Anthony Russo, Joe Russo",
          "Writer": "Christopher Markus, Stephen McFeely, Stan Lee",
          "Actors": "Robert Downey Jr., Chris Evans, Mark Ruffalo",
          "Plot": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
          "Language": "English, Japanese, Xhosa, German",
          "Country": "United States",
          "Awards": "Nominated for 1 Oscar. 70 wins & 133 nominations total",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
          "Ratings": [
          {
          "Source": "Internet Movie Database",
          "Value": "8.4/10"
          },
          {
          "Source": "Rotten Tomatoes",
          "Value": "94%"
          },
          {
          "Source": "Metacritic",
          "Value": "78/100"
          }
          ],
          "Metascore": "78",
          "imdbRating": "8.4",
          "imdbVotes": "1,190,338",
          "imdbID": "tt4154796",
          "Type": "movie",
          "DVD": "30 Jul 2019",
          "BoxOffice": "$858,373,000",
          "Production": "N/A",
          "Website": "N/A",
          "Favourites":false

          },
          {
            "Title": "Get Out",
            "Year": "2017",
            "Rated": "R",
            "Released": "24 Feb 2017",
            "Runtime": "104 min",
            "Genre": "Horror, Mystery, Thriller",
            "Director": "Jordan Peele",
            "Writer": "Jordan Peele",
            "Actors": "Daniel Kaluuya, Allison Williams, Bradley Whitford",
            "Plot": "A young African-American visits his White girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
            "Language": "English, Swahili",
            "Country": "United States, Japan",
            "Awards": "Won 1 Oscar. 152 wins & 207 nominations total",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg",
            "Ratings": [
            {
            "Source": "Internet Movie Database",
            "Value": "7.8/10"
            },
            {
            "Source": "Rotten Tomatoes",
            "Value": "98%"
            },
            {
            "Source": "Metacritic",
            "Value": "85/100"
            }
            ],
            "Metascore": "85",
            "imdbRating": "7.8",
            "imdbVotes": "645,167",
            "imdbID": "tt5052448",
            "Type": "movie",
            "DVD": "09 May 2017",
            "BoxOffice": "$176,196,665",
            "Production": "Universal Pictures, QC Entertainment, Blumhouse Productions",
            "Website": "N/A",
            "Favourites":false

            },
            {
            "Title": "Us",
            "Year": "2019",
            "Rated": "R",
            "Released": "22 Mar 2019",
            "Runtime": "116 min",
            "Genre": "Horror, Mystery, Thriller",
            "Director": "Jordan Peele",
            "Writer": "Jordan Peele",
            "Actors": "Lupita Nyong'o, Winston Duke, Elisabeth Moss",
            "Plot": "A family's serene beach vacation turns to chaos when their doppelgängers appear and begin to terrorize them.",
            "Language": "English",
            "Country": "United States, China, Japan",
            "Awards": "85 wins & 132 nominations",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg",
            "Ratings": [
            {
            "Source": "Internet Movie Database",
            "Value": "6.8/10"
            },
            {
            "Source": "Rotten Tomatoes",
            "Value": "93%"
            },
            {
            "Source": "Metacritic",
            "Value": "81/100"
            }
            ],
            "Metascore": "81",
            "imdbRating": "6.8",
            "imdbVotes": "317,646",
            "imdbID": "tt6857112",
            "Type": "movie",
            "DVD": "04 Jun 2019",
            "BoxOffice": "$175,084,580",
            "Production": "N/A",
            "Website": "N/A",
            "Favourites":false

            },
            {
            "Title": "Nope",
            "Year": "2022",
            "Rated": "R",
            "Released": "22 Jul 2022",
            "Runtime": "130 min",
            "Genre": "Horror, Mystery, Sci-Fi",
            "Director": "Jordan Peele",
            "Writer": "Jordan Peele",
            "Actors": "Daniel Kaluuya, Keke Palmer, Brandon Perea",
            "Plot": "The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery.",
            "Language": "English, Spanish",
            "Country": "Canada, Japan, United States",
            "Awards": "28 wins & 144 nominations",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMGIyNTI3NWItNTJkOS00MGYyLWE4NjgtZDhjMWQ4Y2JkZTU5XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg",
            "Ratings": [
            {
            "Source": "Internet Movie Database",
            "Value": "6.8/10"
            },
            {
            "Source": "Rotten Tomatoes",
            "Value": "83%"
            },
            {
            "Source": "Metacritic",
            "Value": "77/100"
            }
            ],
            "Metascore": "77",
            "imdbRating": "6.8",
            "imdbVotes": "232,589",
            "imdbID": "tt10954984",
            "Type": "movie",
            "DVD": "18 Nov 2022",
            "BoxOffice": "$123,277,080",
            "Production": "N/A",
            "Website": "N/A",
            "Favourites":false

            },
            {
              "Title":"Schindler's List","Year":"1993","Rated":"R","Released":"04 Feb 1994","Runtime":"195 min","Genre":"Biography, Drama, History","Director":"Steven Spielberg","Writer":"Thomas Keneally, Steven Zaillian","Actors":"Liam Neeson, Ralph Fiennes, Ben Kingsley","Plot":"In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.","Language":"English, Hebrew, German, Polish, Latin","Country":"United States","Awards":"Won 7 Oscars. 91 wins & 49 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.0/10"},{"Source":"Rotten Tomatoes","Value":"98%"},{"Source":"Metacritic","Value":"95/100"}],"Metascore":"95","imdbRating":"9.0","imdbVotes":"1,390,913","imdbID":"tt0108052","Type":"movie","DVD":"12 Feb 2008","BoxOffice":"$96,898,818","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Jurassic Park","Year":"1993","Rated":"PG-13","Released":"11 Jun 1993","Runtime":"127 min","Genre":"Action, Adventure, Sci-Fi","Director":"Steven Spielberg","Writer":"Michael Crichton, David Koepp","Actors":"Sam Neill, Laura Dern, Jeff Goldblum","Plot":"A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.","Language":"English, Spanish","Country":"United States","Awards":"Won 3 Oscars. 44 wins & 27 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"91%"},{"Source":"Metacritic","Value":"68/100"}],"Metascore":"68","imdbRating":"8.2","imdbVotes":"1,020,527","imdbID":"tt0107290","Type":"movie","DVD":"28 Oct 2003","BoxOffice":"$404,214,720","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Saving Private Ryan","Year":"1998","Rated":"R","Released":"24 Jul 1998","Runtime":"169 min","Genre":"Drama, War","Director":"Steven Spielberg","Writer":"Robert Rodat","Actors":"Tom Hanks, Matt Damon, Tom Sizemore","Plot":"Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.","Language":"English, French, German, Czech","Country":"United States","Awards":"Won 5 Oscars. 79 wins & 75 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.6/10"},{"Source":"Rotten Tomatoes","Value":"94%"},{"Source":"Metacritic","Value":"91/100"}],"Metascore":"91","imdbRating":"8.6","imdbVotes":"1,429,850","imdbID":"tt0120815","Type":"movie","DVD":"25 May 2004","BoxOffice":"$217,049,603","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Munich","Year":"2005","Rated":"R","Released":"06 Jan 2006","Runtime":"164 min","Genre":"Action, Drama, History","Director":"Steven Spielberg","Writer":"Tony Kushner, Eric Roth, George Jonas","Actors":"Eric Bana, Daniel Craig, Marie-Josée Croze","Plot":"After the Black September capture and massacre of Israeli athletes at the 1972 Olympics, five men are chosen to eliminate the people responsible for that fateful day.","Language":"English, German, French, Hebrew, Arabic, Italian, Greek, Russian, Dutch","Country":"United States, Canada, France","Awards":"Nominated for 5 Oscars. 14 wins & 75 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMTcwNzYzMzMwMF5BMl5BanBnXkFtZTcwMzMzODczMQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"78%"},{"Source":"Metacritic","Value":"74/100"}],"Metascore":"74","imdbRating":"7.5","imdbVotes":"232,349","imdbID":"tt0408306","Type":"movie","DVD":"09 May 2006","BoxOffice":"$47,403,685","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Dunkirk","Year":"2017","Rated":"PG-13","Released":"21 Jul 2017","Runtime":"106 min","Genre":"Action, Drama, History","Director":"Christopher Nolan","Writer":"Christopher Nolan","Actors":"Fionn Whitehead, Barry Keoghan, Mark Rylance","Plot":"Allied soldiers from Belgium, the British Commonwealth and Empire, and France are surrounded by the German Army and evacuated during a fierce battle in World War II.","Language":"English, French, German","Country":"United Kingdom, Netherlands, France, United States","Awards":"Won 3 Oscars. 65 wins & 233 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.8/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"94/100"}],"Metascore":"94","imdbRating":"7.8","imdbVotes":"686,826","imdbID":"tt5013056","Type":"movie","DVD":"12 Dec 2017","BoxOffice":"$189,740,665","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"The Dark Knight","Year":"2008","Rated":"PG-13","Released":"18 Jul 2008","Runtime":"152 min","Genre":"Action, Crime, Drama","Director":"Christopher Nolan","Writer":"Jonathan Nolan, Christopher Nolan, David S. Goyer","Actors":"Christian Bale, Heath Ledger, Aaron Eckhart","Plot":"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.","Language":"English, Mandarin","Country":"United States, United Kingdom","Awards":"Won 2 Oscars. 162 wins & 164 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.0/10"},{"Source":"Rotten Tomatoes","Value":"94%"},{"Source":"Metacritic","Value":"84/100"}],"Metascore":"84","imdbRating":"9.0","imdbVotes":"2,733,700","imdbID":"tt0468569","Type":"movie","DVD":"09 Dec 2008","BoxOffice":"$534,987,076","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Inception","Year":"2010","Rated":"PG-13","Released":"16 Jul 2010","Runtime":"148 min","Genre":"Action, Adventure, Sci-Fi","Director":"Christopher Nolan","Writer":"Christopher Nolan","Actors":"Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page","Plot":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.","Language":"English, Japanese, French","Country":"United States, United Kingdom","Awards":"Won 4 Oscars. 159 wins & 220 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.8/10"},{"Source":"Rotten Tomatoes","Value":"87%"},{"Source":"Metacritic","Value":"74/100"}],"Metascore":"74","imdbRating":"8.8","imdbVotes":"2,425,956","imdbID":"tt1375666","Type":"movie","DVD":"07 Dec 2010","BoxOffice":"$292,587,330","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Interstellar","Year":"2014","Rated":"PG-13","Released":"07 Nov 2014","Runtime":"169 min","Genre":"Adventure, Drama, Sci-Fi","Director":"Christopher Nolan","Writer":"Jonathan Nolan, Christopher Nolan","Actors":"Matthew McConaughey, Anne Hathaway, Jessica Chastain","Plot":"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.","Language":"English","Country":"United States, United Kingdom, Canada","Awards":"Won 1 Oscar. 44 wins & 148 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.7/10"},{"Source":"Rotten Tomatoes","Value":"73%"},{"Source":"Metacritic","Value":"74/100"}],"Metascore":"74","imdbRating":"8.7","imdbVotes":"1,928,320","imdbID":"tt0816692","Type":"movie","DVD":"31 Mar 2015","BoxOffice":"$188,020,017","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"The Terminator","Year":"1984","Rated":"R","Released":"26 Oct 1984","Runtime":"107 min","Genre":"Action, Sci-Fi","Director":"James Cameron","Writer":"James Cameron, Gale Anne Hurd, William Wisher","Actors":"Arnold Schwarzenegger, Linda Hamilton, Michael Biehn","Plot":"A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity's future salvat...","Language":"English, Spanish","Country":"United Kingdom, United States","Awards":"8 wins & 6 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"100%"},{"Source":"Metacritic","Value":"84/100"}],"Metascore":"84","imdbRating":"8.1","imdbVotes":"890,116","imdbID":"tt0088247","Type":"movie","DVD":"02 Oct 2001","BoxOffice":"$38,371,200","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Aliens","Year":"1986","Rated":"R","Released":"18 Jul 1986","Runtime":"137 min","Genre":"Action, Adventure, Sci-Fi","Director":"James Cameron","Writer":"James Cameron, David Giler, Walter Hill","Actors":"Sigourney Weaver, Michael Biehn, Carrie Henn","Plot":"Decades after surviving the Nostromo incident, Ellen Ripley is sent out to re-establish contact with a terraforming colony but finds herself battling the Alien Queen and her offspring.","Language":"English, Spanish","Country":"United Kingdom, United States","Awards":"Won 2 Oscars. 20 wins & 23 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BZTM1Nzk5ZTItN2ZkNi00MDRjLWIwYWUtOWY4ZjZmZjkyM2I0XkEyXkFqcGdeQXVyNTU1NTcwOTk@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.4/10"},{"Source":"Rotten Tomatoes","Value":"98%"},{"Source":"Metacritic","Value":"84/100"}],"Metascore":"84","imdbRating":"8.4","imdbVotes":"735,496","imdbID":"tt0090605","Type":"movie","DVD":"01 Jun 1999","BoxOffice":"$85,160,248","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Titanic","Year":"1997","Rated":"PG-13","Released":"19 Dec 1997","Runtime":"194 min","Genre":"Drama, Romance","Director":"James Cameron","Writer":"James Cameron","Actors":"Leonardo DiCaprio, Kate Winslet, Billy Zane","Plot":"A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.","Language":"English, Swedish, Italian, French","Country":"United States, Mexico","Awards":"Won 11 Oscars. 126 wins & 83 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.9/10"},{"Source":"Rotten Tomatoes","Value":"88%"},{"Source":"Metacritic","Value":"75/100"}],"Metascore":"75","imdbRating":"7.9","imdbVotes":"1,228,124","imdbID":"tt0120338","Type":"movie","DVD":"08 Jan 2002","BoxOffice":"$674,292,608","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Avatar","Year":"2009","Rated":"PG-13","Released":"18 Dec 2009","Runtime":"162 min","Genre":"Action, Adventure, Fantasy","Director":"James Cameron","Writer":"James Cameron","Actors":"Sam Worthington, Zoe Saldana, Sigourney Weaver","Plot":"A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.","Language":"English, Spanish","Country":"United States","Awards":"Won 3 Oscars. 89 wins & 131 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.9/10"},{"Source":"Rotten Tomatoes","Value":"82%"},{"Source":"Metacritic","Value":"83/100"}],"Metascore":"83","imdbRating":"7.9","imdbVotes":"1,350,555","imdbID":"tt0499549","Type":"movie","DVD":"22 Apr 2010","BoxOffice":"$785,221,649","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Se7en","Year":"1995","Rated":"R","Released":"22 Sep 1995","Runtime":"127 min","Genre":"Crime, Drama, Mystery","Director":"David Fincher","Writer":"Andrew Kevin Walker","Actors":"Morgan Freeman, Brad Pitt, Kevin Spacey","Plot":"Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.","Language":"English","Country":"United States","Awards":"Nominated for 1 Oscar. 29 wins & 43 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.6/10"},{"Source":"Rotten Tomatoes","Value":"82%"},{"Source":"Metacritic","Value":"65/100"}],"Metascore":"65","imdbRating":"8.6","imdbVotes":"1,704,879","imdbID":"tt0114369","Type":"movie","DVD":"19 Dec 2000","BoxOffice":"$100,125,643","Production":"N/A","Website":"N/A","Response":"True"},  
          {
              "Title":"Fight Club","Year":"1999","Rated":"R","Released":"15 Oct 1999","Runtime":"139 min","Genre":"Drama","Director":"David Fincher","Writer":"Chuck Palahniuk, Jim Uhls","Actors":"Brad Pitt, Edward Norton, Meat Loaf","Plot":"An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.","Language":"English","Country":"Germany, United States","Awards":"Nominated for 1 Oscar. 12 wins & 38 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.8/10"},{"Source":"Rotten Tomatoes","Value":"79%"},{"Source":"Metacritic","Value":"66/100"}],"Metascore":"66","imdbRating":"8.8","imdbVotes":"2,194,869","imdbID":"tt0137523","Type":"movie","DVD":"14 Oct 2003","BoxOffice":"$37,030,102","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Alien³","Year":"1992","Rated":"R","Released":"22 May 1992","Runtime":"114 min","Genre":"Action, Horror, Sci-Fi","Director":"David Fincher","Writer":"Dan O'Bannon, Ronald Shusett, Vincent Ward","Actors":"Sigourney Weaver, Charles S. Dutton, Charles Dance","Plot":"Returning from LV-426, Ellen Ripley crash-lands on the maximum-security prison Fiorina 161, where she discovers that she has unwittingly brought along an unwelcome visitor.","Language":"English","Country":"United States","Awards":"Nominated for 1 Oscar. 5 wins & 25 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BYTNiYmQzNTctNzAyZC00ODY2LWE3ZjgtODU1NDA0NGI5ZDY1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.4/10"},{"Source":"Rotten Tomatoes","Value":"47%"},{"Source":"Metacritic","Value":"59/100"}],"Metascore":"59","imdbRating":"6.4","imdbVotes":"308,153","imdbID":"tt0103644","Type":"movie","DVD":"01 Jun 1999","BoxOffice":"$55,473,545","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Gone Girl","Year":"2014","Rated":"R","Released":"03 Oct 2014","Runtime":"149 min","Genre":"Drama, Mystery, Thriller","Director":"David Fincher","Writer":"Gillian Flynn","Actors":"Ben Affleck, Rosamund Pike, Neil Patrick Harris","Plot":"With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.","Language":"English","Country":"United States","Awards":"Nominated for 1 Oscar. 64 wins & 188 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"88%"},{"Source":"Metacritic","Value":"79/100"}],"Metascore":"79","imdbRating":"8.1","imdbVotes":"1,013,681","imdbID":"tt2267998","Type":"movie","DVD":"13 Jan 2015","BoxOffice":"$167,767,189","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"The Grand Budapest Hotel","Year":"2014","Rated":"R","Released":"28 Mar 2014","Runtime":"99 min","Genre":"Adventure, Comedy, Crime","Director":"Wes Anderson","Writer":"Stefan Zweig, Wes Anderson, Hugo Guinness","Actors":"Ralph Fiennes, F. Murray Abraham, Mathieu Amalric","Plot":"A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.","Language":"English, French, German","Country":"United States, Germany","Awards":"Won 4 Oscars. 137 wins & 227 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"88/100"}],"Metascore":"88","imdbRating":"8.1","imdbVotes":"840,044","imdbID":"tt2278388","Type":"movie","DVD":"17 Jun 2014","BoxOffice":"$59,301,324","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Isle of Dogs","Year":"2018","Rated":"PG-13","Released":"13 Apr 2018","Runtime":"101 min","Genre":"Animation, Adventure, Comedy","Director":"Wes Anderson","Writer":"Wes Anderson, Roman Coppola, Jason Schwartzman","Actors":"Bryan Cranston, Koyu Rankin, Edward Norton","Plot":"Set in Japan, Isle of Dogs follows a boy's odyssey in search of his lost dog.","Language":"English, Japanese","Country":"United States, Germany, United Kingdom, Japan","Awards":"Nominated for 2 Oscars. 34 wins & 93 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BZDQwOWQ2NmUtZThjZi00MGM0LTkzNDctMzcyMjcyOGI1OGRkXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.8/10"},{"Source":"Rotten Tomatoes","Value":"90%"},{"Source":"Metacritic","Value":"82/100"}],"Metascore":"82","imdbRating":"7.8","imdbVotes":"179,575","imdbID":"tt5104604","Type":"movie","DVD":"17 Jul 2018","BoxOffice":"$32,015,231","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Moonrise Kingdom","Year":"2012","Rated":"PG-13","Released":"29 Jun 2012","Runtime":"94 min","Genre":"Comedy, Drama, Family","Director":"Wes Anderson","Writer":"Wes Anderson, Roman Coppola","Actors":"Jared Gilman, Kara Hayward, Bruce Willis","Plot":"A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.","Language":"English","Country":"United States","Awards":"Nominated for 1 Oscar. 36 wins & 122 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BYTNjNjRhNjMtYTQyOS00MGIxLWJmZjktNGUxY2M2YTc4ZDYwXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.8/10"},{"Source":"Rotten Tomatoes","Value":"93%"},{"Source":"Metacritic","Value":"84/100"}],"Metascore":"84","imdbRating":"7.8","imdbVotes":"358,429","imdbID":"tt1748122","Type":"movie","DVD":"16 Oct 2012","BoxOffice":"$45,512,466","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"The French Dispatch","Year":"2021","Rated":"R","Released":"22 Oct 2021","Runtime":"107 min","Genre":"Comedy, Drama, Romance","Director":"Wes Anderson","Writer":"Wes Anderson, Roman Coppola, Hugo Guinness","Actors":"Benicio Del Toro, Adrien Brody, Tilda Swinton","Plot":"A love letter to journalists set in an outpost of an American newspaper in a fictional twentieth century French city that brings to life a collection of stories published in \"The French Dispatch Magazine\".","Language":"English, French","Country":"United States, Germany","Awards":"Nominated for 3 BAFTA 24 wins & 120 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNmQxZTNiODYtNzBhYy00MzVlLWJlN2UtNTc4YWZjMDIwMmEzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.1/10"},{"Source":"Rotten Tomatoes","Value":"75%"},{"Source":"Metacritic","Value":"74/100"}],"Metascore":"74","imdbRating":"7.1","imdbVotes":"135,926","imdbID":"tt8847712","Type":"movie","DVD":"13 Dec 2021","BoxOffice":"$16,124,375","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"The Royal Tenenbaums","Year":"2001","Rated":"R","Released":"04 Jan 2002","Runtime":"110 min","Genre":"Comedy, Drama","Director":"Wes Anderson","Writer":"Wes Anderson, Owen Wilson","Actors":"Gene Hackman, Gwyneth Paltrow, Anjelica Huston","Plot":"The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons.","Language":"English, Italian","Country":"United States","Awards":"Nominated for 1 Oscar. 11 wins & 46 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BYmUzODQ5MGItZTZlNy00MDBhLWIxMmItMjg4Y2QyNDFlMWQ2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"81%"},{"Source":"Metacritic","Value":"76/100"}],"Metascore":"76","imdbRating":"7.6","imdbVotes":"303,258","imdbID":"tt0265666","Type":"movie","DVD":"07 Sep 2004","BoxOffice":"$52,364,010","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Citizen Kane","Year":"1941","Rated":"PG","Released":"05 Sep 1941","Runtime":"119 min","Genre":"Drama, Mystery","Director":"Orson Welles","Writer":"Herman J. Mankiewicz, Orson Welles, John Houseman","Actors":"Orson Welles, Joseph Cotten, Dorothy Comingore","Plot":"Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance: 'Rosebud.'","Language":"English, Italian","Country":"United States","Awards":"Won 1 Oscar. 11 wins & 13 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BYjBiOTYxZWItMzdiZi00NjlkLWIzZTYtYmFhZjhiMTljOTdkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.3/10"},{"Source":"Rotten Tomatoes","Value":"99%"},{"Source":"Metacritic","Value":"100/100"}],"Metascore":"100","imdbRating":"8.3","imdbVotes":"452,281","imdbID":"tt0033467","Type":"movie","DVD":"23 Feb 2010","BoxOffice":"$1,627,530","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"The Long, Hot Summer","Year":"1958","Rated":"Not Rated","Released":"18 May 1958","Runtime":"115 min","Genre":"Drama","Director":"Martin Ritt","Writer":"William Faulkner, Irving Ravetch, Harriet Frank Jr.","Actors":"Paul Newman, Joanne Woodward, Anthony Franciosa","Plot":"Accused barn burner and conman Ben Quick arrives in a small Mississippi town and quickly ingratiates himself with its richest family, the Varners.","Language":"English","Country":"United States","Awards":"2 wins & 4 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMDJhYzQzMTYtYzQ1OC00NTdkLTlmYzctM2E4ZjY5NTBiYjUwXkEyXkFqcGdeQXVyMjUxODE0MDY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.3/10"},{"Source":"Rotten Tomatoes","Value":"86%"}],"Metascore":"N/A","imdbRating":"7.3","imdbVotes":"11,635","imdbID":"tt0051878","Type":"movie","DVD":"11 May 2004","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Touch of Evil","Year":"1958","Rated":"PG-13","Released":"23 Apr 1958","Runtime":"95 min","Genre":"Crime, Drama, Film-Noir","Director":"Orson Welles","Writer":"Orson Welles, Whit Masterson, Franklin Coen","Actors":"Charlton Heston, Orson Welles, Janet Leigh","Plot":"A stark, perverse story of murder, kidnapping and police corruption in a Mexican border town.","Language":"English, Spanish","Country":"United States","Awards":"7 wins & 1 nomination","Poster":"https://m.media-amazon.com/images/M/MV5BOTA1MjA3M2EtMmJjZS00OWViLTkwMTEtM2E5ZDk0NTAyNGJiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"95%"},{"Source":"Metacritic","Value":"99/100"}],"Metascore":"99","imdbRating":"8.0","imdbVotes":"107,216","imdbID":"tt0052311","Type":"movie","DVD":"06 Jul 2004","BoxOffice":"$2,247,465","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"The Third Man","Year":"1949","Rated":"Approved","Released":"03 Sep 1949","Runtime":"93 min","Genre":"Film-Noir, Mystery, Thriller","Director":"Carol Reed","Writer":"Graham Greene, Orson Welles, Alexander Korda","Actors":"Orson Welles, Joseph Cotten, Alida Valli","Plot":"Pulp novelist Holly Martins travels to shadowy, postwar Vienna, only to find himself investigating the mysterious death of an old friend, Harry Lime.","Language":"English, German, Russian, French","Country":"United Kingdom","Awards":"Won 1 Oscar. 5 wins & 4 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BYjE2OTdhMWUtOGJlMy00ZDViLWIzZjgtYjZkZGZmMDZjYmEyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"99%"},{"Source":"Metacritic","Value":"97/100"}],"Metascore":"97","imdbRating":"8.1","imdbVotes":"176,064","imdbID":"tt0041959","Type":"movie","DVD":"28 Oct 2008","BoxOffice":"$1,067,364","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"The Pianist","Year":"2002","Rated":"R","Released":"28 Mar 2003","Runtime":"150 min","Genre":"Biography, Drama, Music","Director":"Roman Polanski","Writer":"Ronald Harwood, Wladyslaw Szpilman","Actors":"Adrien Brody, Thomas Kretschmann, Frank Finlay","Plot":"A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.","Language":"English, German, Russian","Country":"France, Poland, Germany, United Kingdom","Awards":"Won 3 Oscars. 57 wins & 74 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.5/10"},{"Source":"Rotten Tomatoes","Value":"95%"},{"Source":"Metacritic","Value":"85/100"}],"Metascore":"85","imdbRating":"8.5","imdbVotes":"859,691","imdbID":"tt0253474","Type":"movie","DVD":"27 May 2003","BoxOffice":"$32,572,577","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Rosemary's Baby","Year":"1968","Rated":"Approved","Released":"12 Jun 1968","Runtime":"137 min","Genre":"Drama, Horror","Director":"Roman Polanski","Writer":"Ira Levin, Roman Polanski","Actors":"Mia Farrow, John Cassavetes, Ruth Gordon","Plot":"A young couple trying for a baby moves into an aging, ornate apartment building on Central Park West, where they find themselves surrounded by peculiar neighbors.","Language":"English","Country":"United States","Awards":"Won 1 Oscar. 12 wins & 12 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMTA5NWQwMmYtZjEyYS00Nzc2LTgwZjAtNTQ4NmFmZjNkNjg4XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.0/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"96/100"}],"Metascore":"96","imdbRating":"8.0","imdbVotes":"224,410","imdbID":"tt0063522","Type":"movie","DVD":"03 Oct 2000","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Chinatown","Year":"1974","Rated":"R","Released":"20 Jun 1974","Runtime":"130 min","Genre":"Drama, Mystery, Thriller","Director":"Roman Polanski","Writer":"Robert Towne, Roman Polanski","Actors":"Jack Nicholson, Faye Dunaway, John Huston","Plot":"A private detective hired to expose an adulterer in 1930s Los Angeles finds himself caught up in a web of deceit, corruption, and murder.","Language":"English, Cantonese, Spanish","Country":"United States","Awards":"Won 1 Oscar. 21 wins & 24 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMjJkMDZhYzItZTFhMi00ZGI4LThlNTAtZDNlYmEwNjFkNDYzXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"99%"},{"Source":"Metacritic","Value":"92/100"}],"Metascore":"92","imdbRating":"8.2","imdbVotes":"336,150","imdbID":"tt0071315","Type":"movie","DVD":"23 Nov 1999","BoxOffice":"$29,200,000","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Macbeth","Year":"1971","Rated":"R","Released":"25 Dec 1971","Runtime":"140 min","Genre":"Drama, History","Director":"Roman Polanski","Writer":"Roman Polanski, William Shakespeare, Kenneth Tynan","Actors":"Jon Finch, Francesca Annis, Martin Shaw","Plot":"A ruthlessly ambitious Scottish lord seizes the throne with the help of his scheming wife and a trio of witches.","Language":"English","Country":"United Kingdom, United States","Awards":"Won 1 BAFTA Award3 wins & 2 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BZGM3OTYzOTYtN2Y3MC00YmU5LWEzMGEtN2ZhNjQ1ZWU2YWYxXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.4/10"},{"Source":"Rotten Tomatoes","Value":"84%"}],"Metascore":"N/A","imdbRating":"7.4","imdbVotes":"14,480","imdbID":"tt0067372","Type":"movie","DVD":"07 May 2002","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Oldboy","Year":"2003","Rated":"R","Released":"21 Nov 2003","Runtime":"120 min","Genre":"Action, Drama, Mystery","Director":"Park Chan-wook","Writer":"Garon Tsuchiya, Nobuaki Minegishi, Park Chan-wook","Actors":"Choi Min-sik, Yoo Ji-tae, Kang Hye-jeong","Plot":"After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.","Language":"Korean","Country":"South Korea","Awards":"40 wins & 27 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.4/10"},{"Source":"Rotten Tomatoes","Value":"82%"},{"Source":"Metacritic","Value":"77/100"}],"Metascore":"77","imdbRating":"8.4","imdbVotes":"599,515","imdbID":"tt0364569","Type":"movie","DVD":"07 Aug 2008","BoxOffice":"$707,481","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Lady Vengeance","Year":"2005","Rated":"R","Released":"29 Jul 2005","Runtime":"115 min","Genre":"Crime, Drama, Thriller","Director":"Park Chan-wook","Writer":"Park Chan-wook, Myeong-chan Park, Chung Seo-kyung","Actors":"Nam-mi Kang, Jeong-nam Choi, Hye-Sook Go","Plot":"After being wrongfully imprisoned for thirteen years and having her child taken away from her, a woman seeks revenge through increasingly brutal means.","Language":"Korean, English, Japanese","Country":"South Korea","Awards":"12 wins & 13 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BODdmZGI0MjktNjA4NS00ODgxLWEzZjUtMTc0OTZlMTlhYWE5XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"76%"},{"Source":"Metacritic","Value":"75/100"}],"Metascore":"75","imdbRating":"7.5","imdbVotes":"82,665","imdbID":"tt0451094","Type":"movie","DVD":"06 Oct 2009","BoxOffice":"$211,667","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Sympathy for Mr. Vengeance","Year":"2002","Rated":"R","Released":"29 Mar 2002","Runtime":"129 min","Genre":"Crime, Drama, Thriller","Director":"Park Chan-wook","Writer":"Myeong-chan Park, Mu-yeong Lee, Park Chan-wook","Actors":"Song Kang-ho, Shin Ha-kyun, Bae Doona","Plot":"A recently laid off factory worker kidnaps his former boss' friend's daughter, hoping to use the ransom money to pay for his sister's kidney transplant.","Language":"Korean, Korean Sign ","Country":"South Korea","Awards":"7 wins & 7 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BOTc3ZGIzNGUtOTA2MC00ZWMyLTk2MzAtYThiYWI0NmM5N2UxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"53%"},{"Source":"Metacritic","Value":"56/100"}],"Metascore":"56","imdbRating":"7.5","imdbVotes":"72,167","imdbID":"tt0310775","Type":"movie","DVD":"17 Jan 2012","BoxOffice":"$45,289","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Joint Security Area","Year":"2000","Rated":"Not Rated","Released":"09 Sep 2000","Runtime":"110 min","Genre":"Action, Drama, Thriller","Director":"Park Chan-wook","Writer":"Park Chan-wook, Seong-san Jeong, Hyun-seok Kim","Actors":"Lee Yeong-ae, Lee Byung-hun, Song Kang-ho","Plot":"After a shooting incident at the North/South Korean border/DMZ leaves 2 North Korean soldiers dead, a neutral Swiss/Swedish team investigates, what actually happened.","Language":"Korean, English, German","Country":"South Korea","Awards":"18 wins & 14 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMTI1NDA4NTMyN15BMl5BanBnXkFtZTYwNTA2ODc5._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"},{"Source":"Rotten Tomatoes","Value":"88%"},{"Source":"Metacritic","Value":"58/100"}],"Metascore":"58","imdbRating":"7.7","imdbVotes":"32,402","imdbID":"tt0260991","Type":"movie","DVD":"15 Dec 2014","BoxOffice":"N/A","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"The Nightingale","Year":"2018","Rated":"R","Released":"29 Aug 2019","Runtime":"136 min","Genre":"Adventure, Drama, Thriller","Director":"Jennifer Kent","Writer":"Jennifer Kent","Actors":"Aisling Franciosi, Maya Christie, Baykali Ganambarr","Plot":"Set in 1825, Clare, a young Irish convict woman, chases a British officer through the rugged Tasmanian wilderness, bent on revenge for a terrible act of violence he committed against her family. On the way she enlists the services...","Language":"English, Irish Gaelic, Aboriginal","Country":"Australia, Canada","Awards":"25 wins & 37 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BNjVmZmY1NmQtMWNhZS00ZDUwLTk5ZTQtZGE4NWIyM2YwMDRiXkEyXkFqcGdeQXVyODY3Nzc0OTk@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.3/10"},{"Source":"Rotten Tomatoes","Value":"86%"},{"Source":"Metacritic","Value":"77/100"}],"Metascore":"77","imdbRating":"7.3","imdbVotes":"32,975","imdbID":"tt4068576","Type":"movie","DVD":"25 Oct 2019","BoxOffice":"$400,209","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Monster","Year":"2003","Rated":"R","Released":"30 Jan 2004","Runtime":"109 min","Genre":"Biography, Crime, Drama","Director":"Patty Jenkins","Writer":"Patty Jenkins","Actors":"Charlize Theron, Christina Ricci, Bruce Dern","Plot":"Based on the life of Aileen Wuornos, a Daytona Beach prostitute who became a serial killer.","Language":"English","Country":"United States, Germany","Awards":"Won 1 Oscar. 30 wins & 26 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMTI4NzI5NzEwNl5BMl5BanBnXkFtZTcwNjc1NjQyMQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.3/10"},{"Source":"Rotten Tomatoes","Value":"81%"},{"Source":"Metacritic","Value":"74/100"}],"Metascore":"74","imdbRating":"7.3","imdbVotes":"156,230","imdbID":"tt0340855","Type":"movie","DVD":"30 May 2006","BoxOffice":"$34,469,210","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Wonder Woman","Year":"2017","Rated":"PG-13","Released":"02 Jun 2017","Runtime":"141 min","Genre":"Action, Adventure, Fantasy","Director":"Patty Jenkins","Writer":"Allan Heinberg, Zack Snyder, Jason Fuchs","Actors":"Gal Gadot, Chris Pine, Robin Wright","Plot":"When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.","Language":"English, German, Dutch, Flemish, French, Spanish, Chinese, Greek, Ancient (to 1453), North American Indian","Country":"United States, China","Awards":"38 wins & 72 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.4/10"},{"Source":"Rotten Tomatoes","Value":"93%"},{"Source":"Metacritic","Value":"76/100"}],"Metascore":"76","imdbRating":"7.4","imdbVotes":"677,523","imdbID":"tt0451279","Type":"movie","DVD":"26 Sep 2017","BoxOffice":"$412,845,172","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"You Were Never Really Here","Year":"2017","Rated":"R","Released":"06 Apr 2018","Runtime":"89 min","Genre":"Crime, Drama","Director":"Lynne Ramsay","Writer":"Lynne Ramsay, Jonathan Ames","Actors":"Joaquin Phoenix, Judith Roberts, Ekaterina Samsonov","Plot":"A traumatized veteran unafraid of violence tracks down missing girls for a living. When a job spins out of control, Joe's nightmares overtake him as a conspiracy is uncovered leading to what could be his death trip or his awakening.","Language":"English","Country":"United Kingdom, France, United States","Awards":"Nominated for 1 BAFTA Award23 wins & 75 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMDkwOTE0ZjMtZmRiYS00M2M3LWE3MzUtNzNmNmExNTNmNjg5XkEyXkFqcGdeQXVyODE1MjMyNzI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"6.7/10"},{"Source":"Rotten Tomatoes","Value":"89%"},{"Source":"Metacritic","Value":"84/100"}],"Metascore":"84","imdbRating":"6.7","imdbVotes":"123,399","imdbID":"tt5742374","Type":"movie","DVD":"17 Jul 2018","BoxOffice":"$2,528,078","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"We Need to Talk About Kevin","Year":"2011","Rated":"R","Released":"21 Oct 2011","Runtime":"112 min","Genre":"Drama, Mystery, Thriller","Director":"Lynne Ramsay","Writer":"Lynne Ramsay, Rory Stewart Kinnear, Lionel Shriver","Actors":"Tilda Swinton, John C. Reilly, Ezra Miller","Plot":"Kevin's mother struggles to love her strange child despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.","Language":"English","Country":"United Kingdom, United States","Awards":"Nominated for 3 BAFTA 26 wins & 66 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMjE0NDE0MjYxNF5BMl5BanBnXkFtZTcwNjM2NTY5Ng@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"75%"},{"Source":"Metacritic","Value":"68/100"}],"Metascore":"68","imdbRating":"7.5","imdbVotes":"161,516","imdbID":"tt1242460","Type":"movie","DVD":"29 May 2012","BoxOffice":"$1,738,692","Production":"N/A","Website":"N/A","Response":"True"},
          {
              "Title":"Ratcatcher","Year":"1999","Rated":"Not Rated","Released":"12 Nov 1999","Runtime":"94 min","Genre":"Drama","Director":"Lynne Ramsay","Writer":"Lynne Ramsay","Actors":"Tommy Flanagan, Mandy Matthews, William Eadie","Plot":"A naïve young lad navigates the dirty squalid streets of 1973 Glasgow and the poor youth around him.","Language":"English","Country":"United Kingdom, France","Awards":"Won 1 BAFTA Award12 wins & 6 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMzE5OTRhYjgtNjY4MS00ZGZiLWEzZTItYmFkNmFiODNkZGQ4XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"86%"},{"Source":"Metacritic","Value":"77/100"}],"Metascore":"77","imdbRating":"7.5","imdbVotes":"11,269","imdbID":"tt0171685","Type":"movie","DVD":"10 Sep 2002","BoxOffice":"$217,244","Production":"N/A","Website":"N/A","Response":"True"},
              {
                "Title": "Pulp Fiction",
                "Year": "1994",
                "Rated": "R",
                "Released": "14 Oct 1994",
                "Runtime": "154 min",
                "Genre": "Crime, Drama",
                "Director": "Quentin Tarantino",
                "Writer": "Quentin Tarantino, Roger Avary",
                "Actors": "John Travolta, Uma Thurman, Samuel L. Jackson",
                "Plot": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
                "Language": "English, Spanish, French",
                "Country": "United States",
                "Awards": "Won 1 Oscar. 69 wins & 72 nominations total",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
                "Ratings": [
                    {
                        "Source": "Internet Movie Database",
                        "Value": "8.9/10"
                    },
                    {
                        "Source": "Rotten Tomatoes",
                        "Value": "92%"
                    },
                    {
                        "Source": "Metacritic",
                        "Value": "95/100"
                    }
                ],
                "Metascore": "95",
                "imdbRating": "8.9",
                "imdbVotes": "2,119,201",
                "imdbID": "tt0110912",
                "Type": "movie",
                "DVD": "20 Aug 2002",
                "BoxOffice": "$107,928,762",
                "Production": "N/A",
                "Website": "N/A",
                "Favourites": false
            },
            {
                "Title": "Reservoir Dogs",
                "Year": "1992",
                "Rated": "R",
                "Released": "02 Sep 1992",
                "Runtime": "99 min",
                "Genre": "Crime, Thriller",
                "Director": "Quentin Tarantino",
                "Writer": "Quentin Tarantino, Roger Avary",
                "Actors": "Harvey Keitel, Tim Roth, Michael Madsen",
                "Plot": "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
                "Language": "English",
                "Country": "United States",
                "Awards": "12 wins & 23 nominations",
                "Poster": "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
                "Ratings": [
                    {
                        "Source": "Internet Movie Database",
                        "Value": "8.3/10"
                    },
                    {
                        "Source": "Rotten Tomatoes",
                        "Value": "90%"
                    },
                    {
                        "Source": "Metacritic",
                        "Value": "81/100"
                    }
                ],
                "Metascore": "81",
                "imdbRating": "8.3",
                "imdbVotes": "1,047,311",
                "imdbID": "tt0105236",
                "Type": "movie",
                "DVD": "18 Mar 2003",
                "BoxOffice": "$2,832,029",
                "Production": "N/A",
                "Website": "N/A",
                "Favourites": false
            },
            {
                "Title": "Inglourious Basterds",
                "Year": "2009",
                "Rated": "R",
                "Released": "21 Aug 2009",
                "Runtime": "153 min",
                "Genre": "Adventure, Drama, War",
                "Director": "Quentin Tarantino",
                "Writer": "Quentin Tarantino",
                "Actors": "Brad Pitt, Diane Kruger, Eli Roth",
                "Plot": "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
                "Language": "English, German, French, Italian",
                "Country": "Germany, United States",
                "Awards": "Won 1 Oscar. 134 wins & 172 nominations total",
                "Poster": "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
                "Ratings": [
                    {
                        "Source": "Internet Movie Database",
                        "Value": "8.3/10"
                    },
                    {
                        "Source": "Rotten Tomatoes",
                        "Value": "89%"
                    },
                    {
                        "Source": "Metacritic",
                        "Value": "69/100"
                    }
                ],
                "Metascore": "69",
                "imdbRating": "8.3",
                "imdbVotes": "1,499,912",
                "imdbID": "tt0361748",
                "Type": "movie",
                "DVD": "15 Dec 2009",
                "BoxOffice": "$120,540,719",
                "Production": "N/A",
                "Website": "N/A",
                "Favourites": false
            },
            {
                "Title": "Kill Bill: Vol. 1",
                "Year": "2003",
                "Rated": "R",
                "Released": "10 Oct 2003",
                "Runtime": "111 min",
                "Genre": "Action, Crime, Thriller",
                "Director": "Quentin Tarantino",
                "Writer": "Quentin Tarantino, Uma Thurman",
                "Actors": "Uma Thurman, David Carradine, Daryl Hannah",
                "Plot": "After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
                "Language": "English, Japanese, French",
                "Country": "United States",
                "Awards": "Nominated for 5 BAFTA 30 wins & 103 nominations total",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
                "Ratings": [
                    {
                        "Source": "Internet Movie Database",
                        "Value": "8.2/10"
                    },
                    {
                        "Source": "Rotten Tomatoes",
                        "Value": "85%"
                    },
                    {
                        "Source": "Metacritic",
                        "Value": "69/100"
                    }
                ],
                "Metascore": "69",
                "imdbRating": "8.2",
                "imdbVotes": "1,143,769",
                "imdbID": "tt0266697",
                "Type": "movie",
                "DVD": "13 Apr 2004",
                "BoxOffice": "$70,099,045",
                "Production": "N/A",
                "Website": "N/A",
                "Favourites": false
            },
            {
                "Title": "A Clockwork Orange",
                "Year": "1971",
                "Rated": "X",
                "Released": "02 Feb 1972",
                "Runtime": "136 min",
                "Genre": "Crime, Sci-Fi",
                "Director": "Stanley Kubrick",
                "Writer": "Stanley Kubrick, Anthony Burgess",
                "Actors": "Malcolm McDowell, Patrick Magee, Michael Bates",
                "Plot": "In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn't go as planned.",
                "Language": "English",
                "Country": "United Kingdom, United States",
                "Awards": "Nominated for 4 Oscars. 12 wins & 25 nominations total",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTY3MjM1Mzc4N15BMl5BanBnXkFtZTgwODM0NzAxMDE@._V1_SX300.jpg",
                "Ratings": [
                    {
                        "Source": "Internet Movie Database",
                        "Value": "8.3/10"
                    },
                    {
                        "Source": "Rotten Tomatoes",
                        "Value": "88%"
                    },
                    {
                        "Source": "Metacritic",
                        "Value": "77/100"
                    }
                ],
                "Metascore": "77",
                "imdbRating": "8.3",
                "imdbVotes": "851,003",
                "imdbID": "tt0066921",
                "Type": "movie",
                "DVD": "23 Oct 2007",
                "BoxOffice": "$26,617,553",
                "Production": "N/A",
                "Website": "N/A",
                "Favourites": false
            },
            {
                "Title": "2001: A Space Odyssey",
                "Year": "1968",
                "Rated": "G",
                "Released": "24 Jun 1970",
                "Runtime": "149 min",
                "Genre": "Adventure, Sci-Fi",
                "Director": "Stanley Kubrick",
                "Writer": "Stanley Kubrick, Arthur C. Clarke",
                "Actors": "Keir Dullea, Gary Lockwood, William Sylvester",
                "Plot": "After uncovering a mysterious artifact buried beneath the Lunar surface, a spacecraft is sent to Jupiter to find its origins - a spacecraft manned by two men and the supercomputer H.A.L. 9000.",
                "Language": "English, Russian, French",
                "Country": "United Kingdom, United States",
                "Awards": "Won 1 Oscar. 17 wins & 13 nominations total",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
                "Ratings": [
                    {
                        "Source": "Internet Movie Database",
                        "Value": "8.3/10"
                    },
                    {
                        "Source": "Rotten Tomatoes",
                        "Value": "92%"
                    },
                    {
                        "Source": "Metacritic",
                        "Value": "84/100"
                    }
                ],
                "Metascore": "84",
                "imdbRating": "8.3",
                "imdbVotes": "688,684",
                "imdbID": "tt0062622",
                "Type": "movie",
                "DVD": "23 Oct 2007",
                "BoxOffice": "$60,481,243",
                "Production": "N/A",
                "Website": "N/A",
                "Favourites": false
            },
            {
                "Title": "The Shining",
                "Year": "1980",
                "Rated": "R",
                "Released": "13 Jun 1980",
                "Runtime": "146 min",
                "Genre": "Drama, Horror",
                "Director": "Stanley Kubrick",
                "Writer": "Stephen King, Stanley Kubrick, Diane Johnson",
                "Actors": "Jack Nicholson, Shelley Duvall, Danny Lloyd",
                "Plot": "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
                "Language": "English",
                "Country": "United Kingdom, United States",
                "Awards": "5 wins & 8 nominations",
                "Poster": "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
                "Ratings": [
                    {
                        "Source": "Internet Movie Database",
                        "Value": "8.4/10"
                    },
                    {
                        "Source": "Rotten Tomatoes",
                        "Value": "82%"
                    },
                    {
                        "Source": "Metacritic",
                        "Value": "66/100"
                    }
                ],
                "Metascore": "66",
                "imdbRating": "8.4",
                "imdbVotes": "1,053,149",
                "imdbID": "tt0081505",
                "Type": "movie",
                "DVD": "23 Oct 2007",
                "BoxOffice": "$45,634,352",
                "Production": "N/A",
                "Website": "N/A",
                "Favourites": false
            },
            
            {
                "Title": "The Godfather",
                "Year": "1972",
                "Rated": "R",
                "Released": "24 Mar 1972",
                "Runtime": "175 min",
                "Genre": "Crime, Drama",
                "Director": "Francis Ford Coppola",
                "Writer": "Mario Puzo, Francis Ford Coppola",
                "Actors": "Marlon Brando, Al Pacino, James Caan",
                "Plot": "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
                "Language": "English, Italian, Latin",
                "Country": "United States",
                "Awards": "Won 3 Oscars. 30 wins & 30 nominations total",
                "Poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
                "Ratings": [
                    {
                        "Source": "Internet Movie Database",
                        "Value": "9.2/10"
                    },
                    {
                        "Source": "Rotten Tomatoes",
                        "Value": "97%"
                    },
                    {
                        "Source": "Metacritic",
                        "Value": "100/100"
                    }
                ],
                "Metascore": "100",
                "imdbRating": "9.2",
                "imdbVotes": "1,920,817",
                "imdbID": "tt0068646",
                "Type": "movie",
                "DVD": "11 May 2004",
                "BoxOffice": "$136,381,073",
                "Production": "N/A",
                "Website": "N/A",
                "Favourites": false
            },
            {
                "Title": "Apocalypse Now",
                "Year": "1979",
                "Rated": "R",
                "Released": "15 Aug 1979",
                "Runtime": "147 min",
                "Genre": "Drama, Mystery, War",
                "Director": "Francis Ford Coppola",
                "Writer": "John Milius, Francis Ford Coppola, Michael Herr",
                "Actors": "Martin Sheen, Marlon Brando, Robert Duvall",
                "Plot": "A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god.",
                "Language": "English, French, Vietnamese",
                "Country": "United States",
                "Awards": "Won 2 Oscars. 21 wins & 33 nominations total",
                "Poster": "https://m.media-amazon.com/images/M/MV5BYmQyNTA1ZGItNjZjMi00NzFlLWEzMWEtNWMwN2Q2MjJhYzEyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
                "Ratings": [
                    {
                        "Source": "Internet Movie Database",
                        "Value": "8.4/10"
                    },
                    {
                        "Source": "Rotten Tomatoes",
                        "Value": "98%"
                    },
                    {
                        "Source": "Metacritic",
                        "Value": "94/100"
                    }
                ],
                "Metascore": "94",
                "imdbRating": "8.4",
                "imdbVotes": "684,979",
                "imdbID": "tt0078788",
                "Type": "movie",
                "DVD": "18 May 2010",
                "BoxOffice": "$96,042,913",
                "Production": "N/A",
                "Website": "N/A",
                "Favourites": false
            },
            {
                "Title": "The Godfather Part II",
                "Year": "1974",
                "Rated": "R",
                "Released": "18 Dec 1974",
                "Runtime": "202 min",
                "Genre": "Crime, Drama",
                "Director": "Francis Ford Coppola",
                "Writer": "Francis Ford Coppola, Mario Puzo",
                "Actors": "Al Pacino, Robert De Niro, Robert Duvall",
                "Plot": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
                "Language": "English, Italian, Spanish, Latin, Sicilian",
                "Country": "United States",
                "Awards": "Won 6 Oscars. 17 wins & 21 nominations total",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
                "Ratings": [
                    {
                        "Source": "Internet Movie Database",
                        "Value": "9.0/10"
                    },
                    {
                        "Source": "Rotten Tomatoes",
                        "Value": "96%"
                    },
                    {
                        "Source": "Metacritic",
                        "Value": "90/100"
                    }
                ],
                "Metascore": "90",
                "imdbRating": "9.0",
                "imdbVotes": "1,307,220",
                "imdbID": "tt0071562",
                "Type": "movie",
                "DVD": "24 May 2005",
                "BoxOffice": "$47,834,595",
                "Production": "N/A",
                "Website": "N/A",
                "Favourites": false
            },
            {
                "Title": "The Godfather Part III",
                "Year": "1990",
                "Rated": "R",
                "Released": "25 Dec 1990",
                "Runtime": "162 min",
                "Genre": "Crime, Drama",
                "Director": "Francis Ford Coppola",
                "Writer": "Mario Puzo, Francis Ford Coppola",
                "Actors": "Al Pacino, Diane Keaton, Andy Garcia",
                "Plot": "Follows Michael Corleone, now in his 60s, as he seeks to free his family from crime and find a suitable successor to his empire.",
                "Language": "Persian, English, Italian, German, Latin",
                "Country": "United States",
                "Awards": "Nominated for 7 Oscars. 6 wins & 23 nominations total",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNWFlYWY2YjYtNjdhNi00MzVlLTg2MTMtMWExNzg4NmM5NmEzXkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_SX300.jpg",
                "Ratings": [
                    {
                        "Source": "Internet Movie Database",
                        "Value": "7.6/10"
                    },
                    {
                        "Source": "Rotten Tomatoes",
                        "Value": "66%"
                    },
                    {
                        "Source": "Metacritic",
                        "Value": "60/100"
                    }
                ],
                "Metascore": "60",
                "imdbRating": "7.6",
                "imdbVotes": "409,434",
                "imdbID": "tt0099674",
                "Type": "movie",
                "DVD": "23 Sep 2008",
                "BoxOffice": "$66,761,392",
                "Production": "N/A",
                "Website": "N/A",
                "Favourites": false
            },

              {
                "Title": "Barbie",
                "Year": "2023",
                "Rated": "PG-13",
                "Released": "21 Jul 2023",
                "Runtime": "114 min",
                "Genre": "Adventure, Comedy, Fantasy",
                "Director": "Greta Gerwig",
                "Writer": "Greta Gerwig, Noah Baumbach",
                "Actors": "Margot Robbie, Ariana Greenblatt, Kingsley Ben-Adir",
                "Plot": "Barbie suffers a crisis that leads her to question her world and her existence.",
                "Language": "English",
                "Country": "United Kingdom, United States",
                "Awards": "2 wins & 1 nomination",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
                "Ratings": [
                  {
                  "Source": "Internet Movie Database",
                  "Value": "8.0/10"
                  },
                  {
                  "Source": "Rotten Tomatoes",
                  "Value": "91%"
                  },
                  {
                  "Source": "Metacritic",
                  "Value": "69/100"
                  }
                  ],
                "Metascore": "N/A",
                "imdbRating": "N/A",
                "imdbVotes": "N/A",
                "imdbID": "tt1517268",
                "Type": "movie",
                "DVD": "N/A",
                "BoxOffice": "N/A",
                "Production": "N/A",
                "Website": "N/A",
                "Response": "True"
                },
                {
                  "Title": "Oppenheimer",
                  "Year": "2023",
                  "Rated": "R",
                  "Released": "21 Jul 2023",
                  "Runtime": "180 min",
                  "Genre": "Biography, Drama, History",
                  "Director": "Christopher Nolan",
                  "Writer": "Christopher Nolan, Kai Bird, Martin Sherwin",
                  "Actors": "Cillian Murphy, Emily Blunt, Matt Damon",
                  "Plot": "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
                  "Language": "English",
                  "Country": "United Kingdom, United States",
                  "Awards": "1 nomination",
                  "Poster": "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
                  "Ratings": [
                    {
                    "Source": "Internet Movie Database",
                    "Value": "8.0/10"
                    },
                    {
                    "Source": "Rotten Tomatoes",
                    "Value": "91%"
                    },
                    {
                    "Source": "Metacritic",
                    "Value": "69/100"
                    }
                    ],
                  "Metascore": "N/A",
                  "imdbRating": "N/A",
                  "imdbVotes": "N/A",
                  "imdbID": "tt15398776",
                  "Type": "movie",
                  "DVD": "N/A",
                  "BoxOffice": "N/A",
                  "Production": "N/A",
                  "Website": "N/A",
                  "Response": "True"
                  }
]);
