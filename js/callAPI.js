function CallService()
{
  let uriServer = "http://127.0.0.1:5500/json/setGoTree.json";

  if (uriServer != "")
  {
      $.ajax({
          url: uriServer,
          type: "get",
          dataType: "json",
          success: OnSuccess,
          error: OnError
      });
  }
  return false;
}

function OnSuccess(data)
{
    datos = data;
    var jsonText = document.getElementById("mySavedModel");
    jsonText.value = JSON.stringify(datos);
    init();


}

function OnError(jqXHR, textStatus, errorThrown)
{
    alert("Mensaje de Error: " + errorThrown);
}
