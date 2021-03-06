// weather php databse

function showUser(str) {
    if (str == "") {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET","getuser.php?q="+str,true);
        xmlhttp.send();
    }
}

// Articles

$(document).ready(function(){
   
    $("#secondsec").hide();
    $("#thirdsec").hide();

    $("#firsth3").click(function(){
        $("#hideme").toggle();
    });
    $("#secondh3").click(function(){
        $("#secondsec").toggle();   
    });
    $("#thirdh3").click(function(){
        $("#thirdsec").toggle();
    });
});
    
        
function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
          center: new google.maps.LatLng(53.349152, -6.242637),
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);
   
   
 // Ajax jquery loading descriptions for articles
 		$(document).ready(function()
		
		{
		
		var url = "table.xml";
		
		function processData(data)
		
		{

		var resultStr = "";
		
		var items = $(data).find('title');
		
		$(items).each(function(i)
		
		{
		    resultStr += $(this).text() + '<br />';
		    
		    $('#result').html(resultStr);
		
		});
		}
		$('a').click(function()
		
		{
		    $.get(url, processData);
		
		});
		
		});
		
		// Second Table for ajax descriptions
		$(document).ready(function()
		
		{
		
		var url = "table.xml";
		
		function processData(data)
		
		{

		var resultStrOne = "";
		
		var itemsOne = $(data).find('des');
		
		$(itemsOne).each(function(i)
		
		{
		    resultStrOne += $(this).text() + '<br />';
		    
		    $('#resultOne').html(resultStrOne);
		
		});
		}
		$("#displayOne").click(function()
		
		{
		    $.get(url, processData);
		
		});
		
		});
		
		// Third Table for ajax descriptions
				$(document).ready(function()
		
		{
		
		var url = "table.xml";
		
		function processData(data)
		
		{

		var resultStrTwo = "";
		
		var itemsTwo = $(data).find('des1');
		
		$(itemsTwo).each(function(i)
		
		{
		    resultStrTwo += $(this).text() + '<br />';
		    
		    $('#resultTwo').html(resultStrTwo);
		
		});
		}
		$("#displayTwo").click(function()
		
		{
		    $.get(url, processData);
		
		});
		
		});
		
		// 4th
		 		$(document).ready(function()
		
		{
		
		var url = "table.xml";
		
		function processData(data)
		
		{

		var resultStrThree = "";
		
		var itemsThree = $(data).find('des2');
		
		$(itemsThree).each(function(i)
		
		{
		    resultStrThree += $(this).text() + '<br />';
		    
		    $('#resultThree').html(resultStrThree);
		
		});
		}
		$("#displayThree").click(function()
		
		{
		    $.get(url, processData);
		
		});
		
		});
		
		
		//5th
		 		$(document).ready(function()
		
		{
		
		var url = "table.xml";
		
		function processData(data)
		
		{

		var resultStrFour = "";
		
		var itemsFour = $(data).find('des3');
		
		$(itemsFour).each(function(i)
		
		{
		    resultStrFour += $(this).text() + '<br />';
		    
		    $('#resultFour').html(resultStrFour);
		
		});
		}
		$("#displayFour").click(function()
		
		{
		    $.get(url, processData);
		
		});
		
		});
		
		
		// 6th
		 		$(document).ready(function()
		
		{
		
		var url = "table.xml";
		
		function processData(data)
		
		{

		var resultStrFive = "";
		
		var itemsFive = $(data).find('des4');
		
		$(itemsFive).each(function(i)
		
		{
		    resultStrFive += $(this).text() + '<br />';
		    
		    $('#resultFive').html(resultStrFive);
		
		});
		}
		$("#displayFive").click(function()
		
		{
		    $.get(url, processData);
		
		});
		
		});
		
		//7th
		 		$(document).ready(function()
		
		{
		
		var url = "table.xml";
		
		function processData(data)
		
		{

		var resultStrSix = "";
		
		var itemsSix = $(data).find('des5');
		
		$(itemsSix).each(function(i)
		
		{
		    resultStrSix += $(this).text() + '<br />';
		    
		    $('#resultSix').html(resultStrSix);
		
		});
		}
		$("#displaySix").click(function()
		
		{
		    $.get(url, processData);
		
		});
		
		});
		
		
		//8th
		 		$(document).ready(function()
		
		{
		
		var url = "table.xml";
		
		function processData(data)
		
		{

		var resultStrSeven = "";
		
		var itemsSeven = $(data).find('des6');
		
		$(itemsSeven).each(function(i)
		
		{
		    resultStrSeven += $(this).text() + '<br />';
		    
		    $('#resultSeven').html(resultStrSeven);
		
		});
		}
		$("#displaySeven").click(function()
		
		{
		    $.get(url, processData);
		
		});
		
		});
		
		//9th
		 		$(document).ready(function()
		
		{
		
		var url = "table.xml";
		
		function processData(data)
		
		{

		var resultStrEight = "";
		
		var itemsEight = $(data).find('des7');
		
		$(itemsEight).each(function(i)
		
		{
		    resultStrEight += $(this).text() + '<br />';
		    
		    $('#resultEight').html(resultStrEight);
		
		});
		}
		$("#displayEight").click(function()
		
		{
		    $.get(url, processData);
		
		});
		
		});
		