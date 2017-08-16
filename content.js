import "./jquery.js";
$(function(){
	//last site visited by user
	var listAll = [];
	var incidents = {};
	var incidentString = localStorage.getItem('sysvIncidentList');

	var lastSite = localStorage.getItem("sysvCurrentHost");
	var currentLocation = location.host;
	var returnData;	
	var xhttp = new XMLHttpRequest();
	if currentlocation $.getJSON(indexSite, currentLocation, function(result){
		var isNazi = result.isNazi;
		var mightNazi = result.mightNazi;
		var supportsNazis = result.supportsNazis;
		if (isNazi){
			alert("Warning! This site is a reported alt-right, white supremacist, or otherwise affiliated neo-nazi website. Speed will be slower, as you are reporting what other sites are providing them ad revenue.");
			naziSite=true;
		}
		else if (mightNazi){
			alert("Warning! This site may be an alt-right, white supremacist, or neo-nazi website. If you find examples of this, please use the utility to screenshot and send a report of their activity.");
		}
		else if (supportsNazis){
			alert("Warning! This site provides ad revenue for alt-right, white supremacist, or neo-nazi websites. If you feel they would have a problem with this, please notify them!");
		}
	})
	if (naziSite){
		adlist = [];
		$.each($('.ad.a'), (function(link){
			adlist.push(link.attr('href'));
		});

		$.each(adlist, (function(link){
			if (listAll.inArray(link) >-1){
				listAll.push(link);
			}
			incidents[link]++;
		});
	}

	localStorage.setItem('sysvCurrentHost', incidents);
});