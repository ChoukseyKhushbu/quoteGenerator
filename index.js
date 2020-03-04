$("#ajaxbtn").click(function(){
  $.get('https://type.fit/api/quotes',function (data, textStatus, jqXHR) {

    const response = JSON.parse(data); //to parse the data in JSON format

    // console.log(response);
    $("#ajaxbtn").hide();
    let randomQouteNumber = Math.floor(Math.random()*response.length);

				$('h2').append(response[randomQouteNumber].text);
        $('p').append("- "+response[randomQouteNumber].author);


});
});
