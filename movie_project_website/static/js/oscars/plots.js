// Part 1
var trace1 = {
    x: ["IMDB", "Rotten Tomatoes", "Metacritic", "Rank",
      "Worlwide Box Office", "Actors_2", "Directors_1", "Actors_3", 
      "Genre_2", "Actors_1", "Genre_1", "Language_2", "Country_1", 
    "Directors_2", "Language_1"],
    y: [15.38, 12.96, 12.71, 11.12, 8.77, 7.02, 6.83, 5.37, 5.22, 5.09, 3.66, 3.17, 1.51, .99, .21],
    text: ['15.38%', '12.96%', '12.71%', '11.12%', '8.77%', '7.02%', '6.83%', '5.37%', '5.22%', '5.09%', '3.66%', '3.17%', '1.51%', '.99%', '.21%'],
    type: "bar",
    hoverinfo:"text"
  };
  
  var data = [trace1];
  
  var layout = {
    title: "Weight of Features in Model "
  };
  
  Plotly.newPlot("blob", data, layout);
  
