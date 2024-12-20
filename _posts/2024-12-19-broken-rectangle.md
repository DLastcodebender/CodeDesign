---
layout: default   # The layout to use (defined in _layouts folder)
title: "Broken Rectangle"   # The title of the page
permalink: /broken-rectangle/  # The URL slug for the page
---


<div class="ads-wrapper">
  <div class="ad-box">
    <script type="text/javascript">
      atOptions = {
        'key': 'bca3e9c41fe8834381ea2437ab5011f5',
        'format': 'iframe',
        'height': 250,
        'width': 300,
        'params': {}
      };
    </script>
    <script type="text/javascript" src="//www.highperformanceformat.com/bca3e9c41fe8834381ea2437ab5011f5/invoke.js"></script>
  </div>
  
  <div class="ad-box">
    <script type="text/javascript">
      atOptions = {
        'key': 'bca3e9c41fe8834381ea2437ab5011f5',
        'format': 'iframe',
        'height': 250,
        'width': 300,
        'params': {}
      };
    </script>
    <script type="text/javascript" src="//www.highperformanceformat.com/bca3e9c41fe8834381ea2437ab5011f5/invoke.js"></script>
  </div>

  <div class="ad-box">
    <script type="text/javascript">
      atOptions = {
        'key': 'bca3e9c41fe8834381ea2437ab5011f5',
        'format': 'iframe',
        'height': 250,
        'width': 300,
        'params': {}
      };
    </script>
    <script type="text/javascript" src="//www.highperformanceformat.com/bca3e9c41fe8834381ea2437ab5011f5/invoke.js"></script>
  </div>
</div>

<div class="main-content">
  <article>
    <h1 style="text-align: center; margin: 50px 0; font-size: 2.5rem; color: green;">
      Broken Rectangle
    </h1>
    <div class="main-content">
      <div class="video-wrapper">
        <video class="video" src="\assets\images\broken-rectangle.mp4" autoplay loop muted class="post-video"></video>
      </div>
    </div>
  </article>
</div>

<section>
  <h2>The Broken Rectangle Hover Effect: A Creative Design Element for Your Website</h2>
  <p>
    The interactive broken rectangle is an innovative CSS creation designed to captivate users through its unique hover effect. This dynamic design showcases how simple elements like a rectangle can be enhanced using CSS to create interactive and visually appealing user experiences.
  </p>
</section>

<section>
  <h2>What Makes It Special?</h2>
  <p>
    The key feature of this rectangle is its ability to visually "break" when the user hovers over it. By default, the rectangle appears as a clean and complete shape. However, upon hover, a clever CSS technique makes the rectangle break open at a 90-degree angle on the top and right sides. This transformation provides a sense of interaction and fluidity, elevating what would otherwise be a static design.
  </p>
</section>

<section>
  <h2>How It Works</h2>
  <p>
    The magic of this rectangle lies in the use of CSS <code>::before</code> pseudo-elements, paired with the <code>transform</code> and <code>transition</code> properties. Initially, the break is invisible. When the user hovers over the rectangle, the <code>::before</code> pseudo-element becomes visible and rotates 90 degrees, giving the illusion of a break. The smooth transition effect ensures the animation is both subtle and engaging.
  </p>
</section>

<section>
  <h2>Why Use This Design?</h2>
  <p>
    This design is not only aesthetically pleasing but also functional. It can be used for interactive buttons, call-to-action elements, or even as part of a creative branding strategy. The hover effect adds depth to the user interface, making websites feel more dynamic and engaging.
  </p>
</section>

<section>
  <h2>Applications of the Broken Rectangle</h2>
  <ul>
    <li>Interactive buttons with hover effects</li>
    <li>Call-to-action sections on websites</li>
    <li>Creative highlights for specific content</li>
    <li>Part of branding or logo animation</li>
  </ul>
  <p>
    This rectangle's flexibility makes it a great choice for designers and developers looking to add interactivity to their projects.
  </p>
</section>

<div class="sidebar left">
  <div class="ad-box">
    <script type="text/javascript">
      atOptions = {
        'key': 'bca3e9c41fe8834381ea2437ab5011f5',
        'format': 'iframe',
        'height': 250,
        'width': 300,
        'params': {}
      };
    </script>
    <script type="text/javascript" src="//www.highperformanceformat.com/bca3e9c41fe8834381ea2437ab5011f5/invoke.js"></script>
  </div>
</div>

<div class="code-box">
  <div class="header">
    <span class="code-type">html</span>
    <button class="copy-btn" onclick="copyCode(this)">Copy</button>
  </div>
  <pre><code class="code language-html">&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;!-- Meta charset defines the character encoding for the document --&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;

    &lt;!-- Ensures proper scaling and responsiveness on mobile devices --&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;

    &lt;!-- Title of the webpage displayed on the browser tab --&gt;
    &lt;title&gt;Broken Rectangle&lt;/title&gt;

    &lt;!-- Link to the external CSS file for styling --&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;

  &lt;/head&gt;
  &lt;body&gt;
    &lt;!-- Main container for the rectangle with breaking and arrow effects --&gt;
    &lt;div class=&quot;broken-rectangle&quot;&gt;
      &lt;!-- Text displayed inside the rectangle --&gt;
      &lt;span class=&quot;button-text&quot;&gt;subscribe!!!&lt;/span&gt;

      &lt;!--First arrow that appears when hovering (top-right corner)--&gt;
      &lt;div class=&quot;arrow&quot;&gt;&lt;/div&gt;

      &lt;!--Second arrow that appears when hovering (top-right corner)--&gt;
      &lt;div class=&quot;arrow1&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
     &lt;!--Let's move on to css--&gt;
  &lt;/body&gt;
&lt;/html&gt;
  </code></pre>
</div>

<div class="code-box">
  <div class="header">
    <span class="code-type">css</span>
    <button class="copy-btn" onclick="copyCode(this)">Copy</button>
  </div>
  <pre><code class="code language-css">/* General Page Styles */
    body {
      margin: 0; /* Remove default margin around the body */
      height: 100vh; /* Make the body take the full height of the viewport */
      display: flex; /* Enable flexbox for centering content */
      justify-content: center; /* Center content horizontally */
      align-items: center; /* Center content vertically */
      background-color: black; /* Set the background color to black */
      font-family: Arial, sans-serif; /* Use Arial font with a fallback to sans-serif */
    }
    
    /* Main Rectangle Container */
    .broken-rectangle {
      position: relative; /* Position relative to allow absolute positioning for child elements */
      width: 200px; /* Set the rectangle's width */
      height: 60px; /* Set the rectangle's height */
      border: 2px solid white; /* Add a white border around the rectangle */
      color: white; /* Set the text color inside the rectangle to white */
      display: flex; /* Enable flexbox to align the text */
      justify-content: center; /* Center the text horizontally */
      align-items: center; /* Center the text vertically */
      text-transform: uppercase; /* Convert text to uppercase */
      font-weight: bold; /* Make the text bold */
      cursor: pointer; /* Change the cursor to a pointer when hovering */
    }
    
    /* Break the Top-Right Corner */
    .broken-rectangle::before,
    .broken-rectangle::after {
      content: ""; /* Create empty pseudo-elements */
      position: absolute; /* Position absolutely relative to the parent */
      background-color: black; /* Match the background color to "hide" the break */
    }
    
    .broken-rectangle::before {
      content: ""; /* Content is empty */
      position: absolute; /* Position at the top-right corner */
      top: 0; /* Align to the top edge */
      right: 0; /* Align to the right edge */
      width: 45px; /* Width of the broken corner */
      height: 45px; /* Height of the broken corner */
      background-color: black; /* Same as background to "hide" the break */
      transform: rotate(90deg); /* Rotate the rectangle to simulate a break */
      transition: transform 0.4s ease; /* Smooth transition for the break effect */
    }
    
    /* Arrow effects */
    .arrow, .arrow1 {
      position: absolute; /* Position absolutely inside the rectangle */
      top: 25%; /* Align to the vertical center */
      width: 15px; /* Set the width of the arrow */
      height: 15px; /* Set the height of the arrow */
      background-color: black; /* Arrow color */
      transform: rotate(45deg); /* Rotate to form an arrow shape */
      opacity: 0; /* Start with no visibility */
      transition: opacity 0.4s ease; /* Smooth transition for opacity change */
    }
    
    /* Position the first arrow to the top-right corner */
    .arrow {
      right: 15px; /* Align to the right */
    }
    
    /* Position the second arrow to the top-right corner */
    .arrow1 {
      right: 0px; /* Align to the right */
    }
    
    /* Hover Effect to Reveal the Broken Effect and Arrows */
    .broken-rectangle:hover::before {
      transform: rotate(0); /* Remove rotation to show the break effect */
    }
    
    .broken-rectangle:hover .arrow, .broken-rectangle:hover .arrow1 {
      opacity: 1; /* Make the arrows visible on hover */
    }
  </code></pre>
</div>
