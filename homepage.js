// Number of posts to display per page
const postsPerPage = 5; // You can adjust this value as needed
let currentPage = 1; // Start at the first page
let totalPages = 1;

// Load posts and dynamically handle image thumbnails
async function loadPosts() {
  try {
    // Fetch the posts data
    const response = await fetch('posts.json');
    const posts = await response.json();

    // Sort posts by date (newest first)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Calculate total pages
    totalPages = Math.ceil(posts.length / postsPerPage);

    // Display posts for the current page
    displayPosts(posts, currentPage);

    // Display pagination controls
    displayPagination();
  } catch (error) {
    console.error('Failed to load posts:', error);
  }
}

// Display posts for the current page
function displayPosts(posts, page) {
  const container = document.getElementById('posts-container');
  container.innerHTML = '';

  // Calculate the start and end indices for the posts on this page
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const postsToDisplay = posts.slice(startIndex, endIndex);

  // Generate HTML for the posts
  container.innerHTML = postsToDisplay
    .map(
      (post) => `
      <div class="post">
        <!-- Image thumbnail -->
        <img class="post-thumbnail" src="${post.thumbnail}" alt="${post.title}">
        <div class="post-content">
          <h2>${post.title}</h2>
          <p>${post.description}</p>
          <a href="${post.link}">Read More</a>
        </div>
      </div>
    `
    )
    .join('');
}

// Display pagination controls
function displayPagination() {
  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = '';

  // Previous button
  const prevButton = document.createElement('button');
  prevButton.textContent = 'Previous';
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener('click', () => {
    currentPage--;
    loadPosts(); // Reload posts for the new page
  });
  paginationContainer.appendChild(prevButton);

  // Page number display
  const pageNumber = document.createElement('span');
  pageNumber.textContent = `Page ${currentPage} of ${totalPages}`;
  pageNumber.classList.add('page-number');
  paginationContainer.appendChild(pageNumber);

  // Next button
  const nextButton = document.createElement('button');
  nextButton.textContent = 'Next';
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener('click', () => {
    currentPage++;
    loadPosts(); // Reload posts for the new page
  });
  paginationContainer.appendChild(nextButton);
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', loadPosts);





























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




// Open and Close Navbar Menu
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const bgOverlay = document.querySelector(".overlay");

if (burgerMenu && bgOverlay) {
   burgerMenu.addEventListener("click", () => {
      navbarMenu.classList.add("is-active");
      bgOverlay.classList.toggle("is-active");
   });

   bgOverlay.addEventListener("click", () => {
      navbarMenu.classList.remove("is-active");
      bgOverlay.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Links Click
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      navbarMenu.classList.remove("is-active");
      bgOverlay.classList.remove("is-active");
   });
});

// Open and Close Search Bar Toggle
const searchBlock = document.querySelector(".search-block");
const searchToggle = document.querySelector(".search-toggle");
const searchCancel = document.querySelector(".search-cancel");

if (searchToggle && searchCancel) {
   searchToggle.addEventListener("click", () => {
      searchBlock.classList.add("is-active");
   });

   searchCancel.addEventListener("click", () => {
      searchBlock.classList.remove("is-active");
   });
}











// Toggle search block on click
searchToggle.addEventListener('click', () => {
  searchBlock.classList.add('is-active');
});

// Close search block on cancel button click
searchCancel.addEventListener('click', () => {
  searchBlock.classList.remove('is-active');
});


