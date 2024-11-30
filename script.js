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
