donors = document.querySelector('.buttons');
donors.addEventListener('click', function(event){
    alert('Thanks for your Donation!');
})

add = document.querySelector('.subs');
add.addEventListener('click', function(event){
    alert('Thank you! Your School has been submitted for Review!');
})

/* Start Tab Code Here*/

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }