container.innerHTML = posts
  .map(post => `
    <div class="post">
      ${
        post.thumbnail.endsWith('.mp4')
          ? `<video class="post-video" autoplay muted loop>
               <source src="${post.thumbnail}" type="video/mp4">
               Your browser does not support the video tag.
             </video>`
          : `<img src="${post.thumbnail}" alt="${post.title}" class="thumbnail">`
      }
      <div class="post-content">
        <h2>${post.title}</h2>
        <p>${post.description}</p>
        <a href="${post.link}">Read More</a>
      </div>
    </div>
  `)
  .join('');
