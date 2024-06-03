function CallService()
{
  let uriServer = "https://si0sgs.github.io/setOrganigrama/datos.json";

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
