// Triggered when the window loads
jQuery(window).on("load", function(){
    // For Gallery
    var image; // List of all Images
    var returnImageDiv = "";
    $.getJSON('https://api.sheety.co/414d93bc-2d61-4014-a4d0-8b76015cbc6f', function(data) {
			image = data.slice();
      // Displays images in reverse order
      for (var i = image.length - 1; -1 < i; i--){
        var imageDiv = "<div class=\"grid-item\" href=\"" + image[i].link + "\" alt=\"" + image[i].altText + "\"><img src=\"" + image[i].image + "\"></div>";
        returnImageDiv += imageDiv;
      }
      $('.grid').html(returnImageDiv);
      $('.grid').masonry({
        imageelector: '.grid-item',
      });
    });


      // For Blog
      var posts; // List of all Images
      var returnPosts = "";
      $.getJSON('https://api.sheety.co/709d7e3b-8e60-4442-985c-b5fd151dda4e', function(data) {
  			posts = data.slice();
        // Displays images in reverse order
        for (var i = posts.length - 1; -1 < i; i--){
          var formattedPosts;
          if (posts[i].customHTML != null) {
            formattedPosts = posts[i].customHTML;
          } else {
            formattedPosts = "<div class=\"post\"><header class=\"postHeader\"><h2 class=\"postTitle\">" + posts[i].title + "</h2><p class=\"postMeta\">By: " + posts[i].byline + " | " + posts[i].date + " | " + posts[i].topic + "</p></header><section class=\"postContent\"><p class=\"postHeading\"><strong>" + posts[i].header + "</strong></p><img class=\"postTopImage\" src=\"" + posts[i].topImage + "\"><p class=\"postMessage\">" + posts[i].message + "</p><img class=\"postBottomImage\" src=\"" + posts[i].bottomImage + "\"></section></div>";
          }
          returnPosts += formattedPosts;
        }
        $('#postContainer').html(returnPosts);
  		});

      // For Home Page
      var posts; // List of all Images
      var returnPosts = "";
      $.getJSON('https://api.sheety.co/709d7e3b-8e60-4442-985c-b5fd151dda4e', function(data) {
  			posts = data.slice();
        console.log(posts);
        // Displays images in reverse order
        for (var i = posts.length - 1; posts.length < i; i--){
          var formattedPosts;
          if (posts[i].customHTML != null) {
            formattedPosts = posts[i].customHTML;
          } else {
            formattedPosts = "<div class=\"post\"><header class=\"postHeader\"><h2 class=\"postTitle\">" + posts[i].title + "</h2><p class=\"postMeta\">By: " + posts[i].byline + " | " + posts[i].date + " | " + posts[i].topic + "</p></header><section class=\"postContent\"><p class=\"postHeading\"><strong>" + posts[i].header + "</strong></p><img class=\"postTopImage\" src=\"" + posts[i].topImage + "\"><p class=\"postMessage\">" + posts[i].message + "</p><img class=\"postBottomImage\" src=\"" + posts[i].bottomImage + "\"></section></div>";
          }
          returnPosts += formattedPosts;
        }
        $('#latestPosts').html(returnPosts);
  		});
      var image; // List of all Images
      var returnImageDiv = "";
      $.getJSON('https://api.sheety.co/414d93bc-2d61-4014-a4d0-8b76015cbc6f', function(data) {
  			image = data.slice();
        // Displays images in reverse order
        for (var i = image.length - 1; image.length - 3 < i; i--){
          var imageDiv = "<div class=\"grid-item\" href=\"" + image[i].link + "\" alt=\"" + image[i].altText + "\"><img src=\"" + image[i].image + "\"></div>";
          returnImageDiv += imageDiv;
        }
        $('#latestImages').html(returnImageDiv);
        $('#latestImages').masonry({
          imageelector: '.grid-item',
        });
      });

		// Welcome Message
		console.log("Hello! Welcome to the Teen Arts Council console.")
		console.log("Please visit assets/js/main.js and look for console.log() scripts for debugging.")
		console.log("Best of luck!")
});
