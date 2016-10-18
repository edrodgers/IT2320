function showBand(band)
{
	alert(band.title);
	alert(band.details.genre);
	alert(band.details.active);
	alert(band.details.city);
	alert(band.details.label);
	alert(band.details.numberAlbums);
	
	for (var i=0; i < band.albums.length; i ++)
	{
		var alb  = band.albums[i];
		alert("Album " + alb.name + " was released in " + alb.year + ".");
	}

	for (var x = 0; x < band.members.length; x ++)
	{
		var mem = band.members[x];
		alert (mem.firstName + " " + mem.lastName + " plays " + mem.instrument);
	}

}






function createBand()
{
	return {
		

		
		"title" : "Mastodon",
		"details": {
				"genre" : "metal",
				"active" : 16,
				"city" : "Atlanta",
				"label" : "Relapse",
				"numberAlbums" : 6
		},

		"albums" : [
			
			{
				"name" : "Remission",
				"year" : 2002
			},
			
			{
				"name" : "Leviathin",
				"year" : 2004
			},
			
			{
				"name" : "Blood Mountain",
				"year" : 2006
			},

			{
				"name" : "Crack the Skye",
				"year" : 2009
			},

			{
				"name" : "The Hunter",
				"year" : 2011
			},

			{
				"name" : "Once More 'Round the Sun",
				"year" : 2014
			}
		],


		"members" : [
			
			{
				"firstName" : "Brann",
				"lastName" : "Dailor",
				"instrument" : "Drums"
			},
	
			{
				"firstName" : "Brent",
				"lastName" : "Hinds",
				"instrument" : "Guitar"
			},

			{
				"firstName" : "Bill",
				"lastName" : "Kelliher",
				"instrument" : "Guitar"
			},

			{
				"firstName" : "Troy",
				"lastName" : "Sanders",
				"instrument" : "Bass"
			}
		]
	};
}

$(document).ready(function()
{
	$(".button").click(function()
	{
		var band = createBand();
		showBand(band);
	});
});

