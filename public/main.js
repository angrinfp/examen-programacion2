document.addEventListener("DOMContentLoaded", function() {
    var forms = document.querySelectorAll("form");
    var form = forms[0];
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        var producto = document.querySelectorAll("#producto")[0].value;
        var cantidad = document.querySelectorAll("#cantidad")[0].value;
        var precio = document.querySelectorAll("#precio")[0].value;
        var igv = document.querySelectorAll("#igv").checked;
        
        var message = document.querySelectorAll("#message")[0];
        message.innerHTML = message.innerHTML + "<span>" +  " (" + cantidad + ")kg " + producto + " por " + precio + " soles c/u </span>";
        
        var payload = {
            'producto': producto,
            'cantidad': cantidad,
            'precio': precio,
            'igv': igv
        }
        
        $.post("/find", payload);
      }
    );
})
