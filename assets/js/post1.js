function copyCode(button) {
  const codeText = button.closest('.code-box').querySelector('code').innerText;
  const textarea = document.createElement('textarea');
  document.body.appendChild(textarea);
  textarea.value = codeText;
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  // Change the button text to 'Copied✔️' after clicking
  button.innerText = 'Copied✔️';

  // Optional: Reset button text back to 'Copy' after 2 seconds
  setTimeout(() => {
    button.innerText = 'Copy';
  }, 2000);
}















$(document).ready(function(){

   $(window).on("scroll", function() {
     if($(window).scrollTop() > 50) {
         $("#header").addClass("active-header");
         $(".menu-link").addClass("active-menu-links");
         $("#header-img").attr("src", "https://i.ibb.co/0jM3ZvH/reverse-black.png");
     } else {
         //remove the background property so it comes transparent again (defined in your css)
        $("#header").removeClass("active-header");
        $(".menu-link").removeClass("active-menu-links");
        $("#header-img").attr("src", "https://i.ibb.co/LxGJ5gF/reverse-white.png");
     }
 });
 
   // Responsive menu
   $("#responsive-nav-bar").hide();
 
   $("#image-button-black").click(function(){
     $("#responsive-nav-bar").slideToggle();
   });
 
   $("#responsive-home-item , #responsive-features-item , #responsive-products-item , #responsive-media-item , #responsive-pricing-item").click(function(){
     $("#responsive-nav-bar").slideToggle(200);
   })
 
 
 
 
 
   // Default sections visibility
   $('.product-content').hide();
   $('#product-container-one').show();
 
 
   // Button variables
   var firstButton = $('#first-product-button');
   var secondButton = $('#second-product-button');
   var thirdButton = $('#third-product-button');
   var fourthButton = $('#fourth-product-button');
   var buttons = $('.product-button');
 
 
 
   // Product variables
   var firstProduct = $('#product-container-one');
   var secondProduct = $('#product-container-two');
   var thirdProduct = $('#product-container-three');
   var fourthProduct = $('#product-container-four');
 
 
   // Visibility variables
   var firstVisible = firstProduct.is(':visible');
   var secondVisible = secondProduct.is(':visible');
   var thirdVisible = thirdProduct.is(':visible');
   var fourthVisible = fourthProduct.is(':visible');
 
 
   // Visible and Hidden Sections .click function
   $(firstButton).click(function(){
     $('.product-content').hide();
     $(firstProduct).fadeIn(600);
     buttons.removeClass('product-button-active');
     firstButton.addClass('product-button-active');
   });
 
   $(secondButton).click(function(){
     $('.product-content').hide();
     $(secondProduct).fadeIn(600);
     $(secondProduct).css('visibility', 'visible');
     buttons.removeClass('product-button-active');
     secondButton.addClass('product-button-active');
   });
 
   $(thirdButton).click(function(){
     $('.product-content').hide();
     $(thirdProduct).fadeIn(600);
     buttons.removeClass('product-button-active');
     thirdButton.addClass('product-button-active');
   });
 
   $(fourthButton).click(function(){
     $('.product-content').hide();
     $(fourthProduct).fadeIn(600);
     buttons.removeClass('product-button-active');
     fourthButton.addClass('product-button-active');
   });
 
 
 
   // First Button Styling hidden/visible
   if (firstVisible === true) {
     firstButton.addClass('product-button-active');
   }
 
 });





 // Function to adjust the search bar for responsiveness
function adjustSearchBar() {
  const container = document.querySelector('.container');
  const searchField = document.querySelector('.search-field');
  const submitButton = document.querySelector('.search-submit');

  // Check screen width
  if (window.innerWidth <= 768) {
    // Mobile view adjustments
    container.style.width = '90%'; // Adjust the container to 90% width
    searchField.style.width = '70%'; // Search field takes 70% of the width
    submitButton.style.width = '30%'; // Submit button takes the rest
    searchField.style.fontSize = '1rem'; // Adjust font size
    submitButton.style.fontSize = '1rem'; // Adjust font size
  } else {
    // Desktop view adjustments
    container.style.width = '400px'; // Default container width
    searchField.style.width = '100%'; // Full width for the search field
    submitButton.style.width = 'auto'; // Auto size for the button
    searchField.style.fontSize = '1rem'; // Default font size
    submitButton.style.fontSize = '1rem'; // Default font size
  }
}

// Add event listener for resizing the window
window.addEventListener('resize', adjustSearchBar);

// Initial call to set up the search bar on page load
adjustSearchBar();



  document.addEventListener("DOMContentLoaded", function() {
    // Get references to the search form and content container
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-field');
    const posts = document.querySelectorAll('.post');

    // Listen for form submission
    searchForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from refreshing the page

      const searchTerm = searchInput.value.toLowerCase(); // Get search term in lowercase

      // Loop through all posts and display only matching ones
      posts.forEach(post => {
        const title = post.getAttribute('data-title').toLowerCase(); // Get post title in lowercase
        const content = post.querySelector('p').textContent.toLowerCase(); // Get post content in lowercase
        
        // If either title or content matches the search term, show the post
        if (title.includes(searchTerm) || content.includes(searchTerm)) {
          post.style.display = 'block';
        } else {
          post.style.display = 'none'; // Hide non-matching posts
        }
      });
    });
  });

  // If this is your search object
window.simpleJekyllSearch = new SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '{{ site.baseurl }}/search.json',
  searchResultTemplate: '<li><a href="{url}" title="{desc}">{title}</a></li>',
  noResultsText: 'No results found'
})

// Use this to search
setTimeout(() => {
  window.simpleJekyllSearch.search('t')
}, 2000)