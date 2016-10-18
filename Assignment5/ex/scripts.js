function showBand(band)
{
	alert(band.title + " is a " + band.details.genre + " band from " + band.details.city + ".");
	alert("They are on " + band.details.label + " records and have " + band.details.numberAlbums + " albums.");
	
	for (var i=0; i < band.albums.length; i ++)
	{
		var alb  = band.albums[i];
		alert("The album " + alb.name + " was released in " + alb.year + ".");
	}

	for (var x = 0; x < band.members.length; x ++)
	{
		var mem = band.members[x];
		alert (mem.firstName + " " + mem.lastName + " plays " + mem.instrument + " in " + band.title);
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

