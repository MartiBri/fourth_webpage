function goStupid(){
  let adJective = (document.getElementById("adJective").value);
  let noUn = (document.getElementById("noUn").value);
  let anImal = (document.getElementById("anImal").value);
  let noIse = (document.getElementById("noIse").value);

  let anSwer = document.getElementById("myBox").innerHTML = "<h3><span class='anSwer'>Brian's " + adJective + " had a " + noUn + " that gave birth to a(n) " + anImal + " that made the sound " + noIse + ".</span>";


}