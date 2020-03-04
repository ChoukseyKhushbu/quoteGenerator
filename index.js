
$('document').ready(function(){
  let response=[];
  $.get('https://type.fit/api/quotes',function (data, textStatus, jqXHR) {
     response = JSON.parse(data); //to parse the data in JSON format
});
$("#ajaxbtn").click(function(){
  let randomQouteNumber = Math.floor(Math.random()*response.length);

  $('h2').text(response[randomQouteNumber].text);
  $('p').text("- "+response[randomQouteNumber].author);
});

});
