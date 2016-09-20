
function ToggleBorder()
{
	var analogImages = document.getElementsByClassName("analog");
	var analogImagesBorder = document.getElementsByClassName("analog-border");

	if (analogImages[0] != null)
	{
		analogImages[0].className = "analog-border";
	}
	else 
	{
		analogImagesBorder[0].className = "analog";
	}
}

function MouseOver(li)
{
	li.className = "list-item-highlight";
}

function MouseOut(li)
{
	li.className = "";
}

function listLoop()
{
	var index;
	var text = "<ul>";
	var bands = ["The Pharcyde", "Mellow High", "Bun B", "GZA/Genius"];
	for (index = 0; index < bands.length; index++)
		{
			text += '<li onmouseover="MouseOver(this)" onmouseout="MouseOut(this)">' + bands[index] + "</li>";
		}
	text += "</ul>";
	document.getElementById("list").innerHTML = text;
}

