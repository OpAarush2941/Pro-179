let coordinates = {}
$(document).ready(function(){
    get_coordinates()
})

function get_coordinates(){
    let params = new URLSearchParams(window.location.search)
    if(params.has("source") && params.has("destination")){
        let source = params.get("source")
        let destination = params.get("destinantion")
        coordinates.source_lat = source.split(";")[0]
        coordinates.destination_lon = destination.split(";")[1]
    }
    else{
        alert("coordinates not found")
    }
}