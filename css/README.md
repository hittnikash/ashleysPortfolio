README
For the Code Louisville project I decided to make an online personal portfolio to sort of compile and showcase images and design work that I have created throughout the years. I had a lot of content already in the form of photographs and vector designs to display on separate pages. One of the biggest challenges I had while working on this project was media queries that target viewport sizes larger than my tiny laptop. I also struggled to figure out what the other navigation links should be as I do not care to explain my work or write about myself- which goes against everything I learned  when obtaining my visual communications degree. I believe that art and visual messages should be interpreted by the viewer and if you have to explain it- then you did not succeed in getting your message across. This site was meant to be a virtual gallery where the user or audience can virtually interact with the artist.

Features:
My project was built with a mobile first approach, starting with a streamlined design for small devices and scaled up using  media queries to alter the layouts for bigger devices.
The changes to layout from mobile to larger devices include a change in navigation from a hamburger menu to a fully displayed navigation bar.
A flexbox direction change from column (for mobile) to row, (for larger viewports) with flex-wrap applied to create an image grid for the gallery & project pages.
The contact/ about page had a shift in layout from a single column to two columns.

(CSS Feature) I implemented flexbox for my “gallery” of images so that my site would be responsive against various viewport sizes.
(JS Feature/ CSS) A hamburger menu that is hidden for larger viewports but is displayed for smaller devices using an if/else JS statement.
(JS Feature) A contact form that uses regular expressions to validate the users input, and then uses that input (the users name) in a message that is displayed after the user clicks the submit button. The message should read: “Thank you (users name) for your valuable feedback!”
(JS Feature) Lightbox displays- larger full image when you click on a thumbnail image. To exit the lightbox just click anywhere outside of the lightbox area.
(JS Feature) The home page displays an object that organizes featured images and other data such as the type of camera used for the shot, the title of the image and the about which is just a short description of the image- that you won't get by looking through the gallery images. The idea was the gallery would host the images. Then if the audience wanted to find out more about the image or had any other feedback they could submit it in the contact page. Then those questions would be answered in the featured section which would be updated. 
