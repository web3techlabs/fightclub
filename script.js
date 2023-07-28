const joinSocials = document.getElementById('join-socials');

joinSocials.addEventListener('click', function() {
  
  const link = 'https://linktr.ee/fightclubnfts';
  window.open(link, '_blank');
});

function displayAleart(){

    alert("Thanks for showing interest in fighclub. We are in build phase right now. Stay tunned and join our socials by clicking the button below.LFG!!!");
}

//displayAleart(); //Will display on page load and also when they click playnow

const menuToggle = document.querySelector('.menu-toggle');
const menuIcon = document.querySelector('.menu-icon>i');
const dropdownMenuItems = document.querySelectorAll('.dropdown_menu > li');

menuToggle.onclick = function(){
  dropdownMenuItems.forEach(function(item) {
    item.classList.toggle('open');
  });
  const isOpen = dropdownMenuItems[0].classList.contains('open');
  console.log(isOpen);
  menuIcon.classList = isOpen?'fa-solid fa-xmark':'fa-solid fa-bars';
  


}
