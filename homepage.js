document.addEventListener('DOMContentLoaded', () => {
    // Get all video elements
    const videos = document.querySelectorAll('.post-video');
    
    // Loop through each video element
    videos.forEach(video => {
        // Ensure the video is fully loaded before applying the interval
        video.addEventListener('loadeddata', () => {
            // Capture the first frame of the video and set it as the thumbnail
            const thumbnail = video.querySelector('img');  // Assuming the thumbnail <img> tag exists inside video
            if (!thumbnail) {
                // If there's no <img> tag, create one dynamically
                const img = document.createElement('img');
                img.src = getThumbnailFromVideo(video);  // Get the thumbnail from the video
                img.classList.add('thumbnail');
                video.parentElement.insertBefore(img, video);  // Insert the thumbnail before the video
            }
        });

        // Error handling for video load
        video.addEventListener('error', () => {
            console.error('Error loading the video:', video.src);
        });

        // Restart the video every 5 seconds
        setInterval(() => {
            video.currentTime = 0; // Restart the video from the beginning
        }, 5000); // Restart every 5 seconds
    });
});

// Function to capture the first frame of the video
function getThumbnailFromVideo(video) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    // Ensure the canvas has the same size as the video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the first frame of the video on the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Return the data URL of the first frame (image)
    return canvas.toDataURL();
}

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
          <video class="post-video" autoplay muted loop>
            <source src="${post.video}" type="video/mp4">
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
  } catch (error) {
    console.error('Failed to load posts:', error);
  }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', loadPosts);
