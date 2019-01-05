function loadPage(file)
{
    var xmlHttp;
    if(window,XMLHttpRequest)
    {
        //chrome , mozila
        xmlHttp = new XMLHttpRequest();
    }
    else
    {
        //IE
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlHttp.onreadystatechange = function()
    {
        if(xmlHttp.readyState==4 && xmlHttp.status==200)
        {
            document.getElementById("page").innerHTML = xmlHttp.responseText;
        }
    }
    xmlHttp.open("GET",file,true);
    xmlHttp.send("");
}