// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Get all video elements
    const videos = document.querySelectorAll('.post-video');
    
    // Loop through each video element
    videos.forEach(video => {
        // Ensure the video is fully loaded before applying the interval
        video.addEventListener('loadeddata', () => {
            // Restart the video every 5 seconds
            setInterval(() => {
                video.currentTime = 0; // Restart the video from the beginning
            }, 5000); // Restart every 5 seconds
        });
    });
});

// Fetch posts from the JSON file and display them on the homepage
async function loadPosts() {
  try {
    // Fetch the posts data
    const response = await fetch('posts.json');
    const posts = await response.json();

    // Sort posts by date (newest first)
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Generate HTML for each post
    const container = document.getElementById('posts-container');
    container.innerHTML = posts
      .map(post => `
        <div class="post">
          <img src="${post.thumbnail}" alt="${post.title}" class="thumbnail">
          <div class="post-content">
            <h2>${post.title}</h2>
            <p>${post.description}</p>
            <a href="${post.link}">Read More</a>
          </div>
        </div>
      `)
      .join('');
  } catch (error) {
    console.error('Failed to load posts:', error);
  }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', loadPosts);
