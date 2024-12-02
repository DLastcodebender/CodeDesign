// Function to capture the first frame of a video
function getThumbnailFromVideo(video) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  
  // Ensure canvas matches the video's dimensions
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  // Draw the first frame onto the canvas
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Return the thumbnail as a data URL
  return canvas.toDataURL();
}

// Load posts and dynamically handle video thumbnails
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
          <video class="post-video" muted loop>
            <source src="${post.thumbnail}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <div class="post-content">
            <h2>${post.title}</h2>
            <p>${post.description}</p>
            <a href="${post.link}">Read More</a>
          </div>
        </div>
      `)
      .join('');

    // Handle each video
    const videos = document.querySelectorAll('.post-video');
    videos.forEach(video => {
      // Generate thumbnail when video is loaded
      video.addEventListener('loadeddata', () => {
        const thumbnailSrc = getThumbnailFromVideo(video);

        // Create and insert the thumbnail image
        const img = document.createElement('img');
        img.src = thumbnailSrc;
        img.alt = 'Video thumbnail';
        img.classList.add('thumbnail');
        video.parentElement.insertBefore(img, video); // Insert thumbnail before the video
      });

      // Restart video every 5 seconds
      setInterval(() => {
        if (!video.paused && !video.ended) {
          video.currentTime = 0; // Restart video
        }
      }, 5000);
    });
  } catch (error) {
    console.error('Failed to load posts:', error);
  }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', loadPosts);
