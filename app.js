function ItunesController(){
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e){
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs);
  }

  function drawSongs(songList){ 

    var itemList = document.getElementById("songs")   
    var songTemplate = ""

    for(var i =0; i < songList.length; i++)
    {
        var song = songList[i]
        songTemplate +=
            `
        <div class="col-xs-12">
            <div class="well">                
                <div class="content-container">
                    <div class="row">
                        <div class="col-xs-1 text-center">
                            <img class="thumbnail" src="${song.albumArt}">
                        </div>
                        <div class="col-xs-3 text-center">
                            <audio controls>
                                <source src="${song.preview}">
                            </audio>
                        </div>
                        <div class="col-xs-1">
                            <h4>${song.artist}</h4>
                        </div>
                        <div class="col-xs-2 text-center">
                            <h4>${song.title}</h4>
                        </div>
                        <div class="col-xs-2">
                            <h4>${song.collection}</h4>
                        </div>                        
                        <div class="col-xs-2 text-center">
                            <h4>${song.price}
                        </div>
                    </div>                  
                 </div>
            </div>
        </div>        
        `

    }        
    itemList.innerHTML = songTemplate
}

document.addEventListener('play', function(event){
    //get all audio tags
    //itterate over results
    //if the event.target is not the current result
    // current result .pause()

}, true)


}



var itunesCtrl = new ItunesController()
