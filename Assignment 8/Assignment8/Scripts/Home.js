

function GetResponse(response)
{
    $(".output").append(response.PlayerName);
}

function CreateRequest()
{
    return{
        "url": "http://localhost:56214/Home/GetPlayerInformation",

        "data": { "PlayerNumber": $("input:text").val() },

        "success": function (response) { GetResponse(JSON.parse(response)); }
    }
    
}


$(document).ready(function () 
{
    $("button").click(function () {
        $.ajax(CreateRequest());
    });
});
