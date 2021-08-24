setTimeout(function () {
  var videoDiv = document.getElementById("background-videoDIv");
  var img = document.createElement("img");
  img.src =
    "https://cfcdn-skin.zulily.com/media/catalog/treatments/1629231714602/1170x2000/0d382232-f400-4fd5-8dcc-7a7517cfcb09.png";
  videoDiv.innerHTML = "";
  videoDiv.append(img);
}, 3500);
