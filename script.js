var Main = {};

Main.Tony = {};
Main.Tony.FirstName = "Tony";
Main.Tony.LastName = "Iommi";
Main.Tony.Guitar = "Gibson SG";
Main.Tony.Band = "Black Sabbath";

Main.Brent = 
{
	FirstName: "Brent",
	LastName: "Hinds",
	Guitar: "Gibson FlyingV V",
	Band: "Mastodon",
}

Main.Member = function(firstName, lastName, guitar, band)
{
	this.FirstName = firstName;
	this.LastName = lastName;
	this.Guitar = guitar;
	this.Band = band;

	this.SetGuitar = function(model)
	{
		this.Guitar = model;
	}
}


Main.Member.prototype.NameAndBand = function()
{
	return this.Band + "'s guitar player is " + this.FirstName + " " + this.LastName + " and he plays a " + this.Guitar;
}

Main.Kerry = new Main.Member("Kerry", "King", "BC Rich Warlock", "Slayer");
Main.Matt = new Main.Member("Matt", "Pike", "Gibson Les Paul", "High On Fire");
Main.David = new Main.Member("David", "Gilmour", "Fender Stratocaster", "Pink Floyd");

Main.MostAlbums = Main.David;
Main.LeastAlbums = Main.Brent;

Main.Kerry.SetGuitar("BC Rich V");
Main.Matt.SetGuitar("First Act Double Cutaway");


document.body.innerHTML = Main.Kerry.NameAndBand();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.David.NameAndBand();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Main.Matt.NameAndBand();