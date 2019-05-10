 var data = [{
    values: [33, 36, 29, 504],
    labels: ["Predicted NO", "Predicted YES", "Actual YES", "Actual NO"],
    type: 'pie'
  }];
  
  var layout = {
    height: 400,
    width: 500,
    title: "Decision Tree Confusion Matrix"
  };
  
  Plotly.newPlot('plot', data, layout);