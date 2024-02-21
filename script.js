function scrollToSection(sectionId) {
  var element = document.getElementById(sectionId);
  var offset = 150; // Adjust this value to set the amount of space you want at the top
  var offsetPosition = element.offsetTop - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function showCart() {
  var popupOverlay = document.getElementById("overlay");
  var popupCartItems = document.getElementById("popup-cart-items");
  var checkboxes = document.querySelectorAll('.destination-checkbox:checked');

  popupCartItems.innerHTML = '';

  checkboxes.forEach(function(checkbox) {
      var itemName = checkbox.getAttribute('data-item');
      var listItem = document.createElement("li");
      listItem.textContent = itemName;
      popupCartItems.appendChild(listItem);
  });

  popupOverlay.style.display = "flex";
}

function hidePopup() {
  var popupOverlay = document.getElementById("overlay");
  popupOverlay.style.display = "none";
}

let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
  } else {
      document.getElementById("navbar").style.top = "-60px"; // Adjust this value based on your navbar height
  }

  prevScrollpos = currentScrollPos;

  var navbar = document.getElementById("navbar");
  if (window.pageYOffset > 1000) { // Adjust the scroll value as needed
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
  }
};

document.getElementById('animatedText').addEventListener('click', function() {
  this.classList.toggle('clicked');
});
