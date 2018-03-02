  //
  // function terryFolds(){
  //   var count = 0;
  //   $.ajax({
  //     type: "GET",
  //     url: "https://rickandmortyapi.com/api/character",
  //     count: 0,
  //     success: function(r) {
  //       console.log(r);
  //       count++;
  //       //for(var i = 0; i < r.length; i++){
  //         $("img").attr("src", r.results[count].image);
  //       //}
  //     },
  //     error: function(err){
  //       console.log(err);
  //     }
  // });
  // }









$(document).ready(function(){
  var count = 0;
  $("button").on("click", function(){
    $.ajax({ //request again so that when the button is clicked the new quote being recieved is replacing the old on load quote
      cache: false, //SET CACHE TO FALSE WITHOUT IT NEW QUOTE WONT APPEAR
      type: "GET", //is used to get data from the server
      url: "https://cors-anywhere.herokuapp.com/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", //the url that allows us to use the api
      success: function(response) {
          $("#quote").html(response["0"].content); //allows new quote to be generated
          $("#author").html("-" + response["0"].title); //allows new author to be generated
          // console.log(response);
          // console.log("new quote is replacing old quote as well as author");
      },
      error: function(error){
          console.log(error);
      }
    });

    count += 1;

    $.ajax({
        type: "GET",
        url: "https://rickandmortyapi.com/api/character",
        success: function(r) {
          console.log(r);
          //for(var i = 0; i < r.length; i++){
            $("img").attr("src", r.results[count].image);
          //}
        },
        error: function(err){
          console.log(err);
        }
    });
  });
});
