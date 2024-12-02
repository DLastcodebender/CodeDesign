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

