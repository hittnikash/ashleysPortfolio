/***** ARRAY of OBJECTS of FEATURED IMAGES *****/

///Object variable named images and it's data-types.///
const images = [
    {  
        name: 'BSA Gauge',
        type: '-Nikon d3500-',
        about: 'This is a photograph of a speedometer that was manufactured by a rare motercycle company called BSA, (Birmingham Small Arms) that ceased production in 1973. The image was shot close-range, so the subject was in focus while the background was blurred.',
        photo: 'img/photos/BSAgauge.jpg'
    },

    {
        name: 'Old Chevy Pickup',
        type: '-Nikon d3500-',
        about: 'This is one of the first photographs I ever taken. The image is of a 1930s Chevy Pickup truck that I found at a transmission shop in southern Indiana. The original photograph had a lot of background noise that distracted from the focal point. Once the distractions were removed the photo was cropped and the colors were adjusted to a black and white scale.',
        photo: 'img/photos/chevy1.jpg',
    },

    {
        name: 'Cafe-Style Motorcycle' , 
        type: '-Nikon d3500-',
        about: 'This is an image of a Honda Scrambler that has been de-badged and chopped to imitate the popular "cafe" style. Unnecessary weight is removed from the bike which aids in performance and speed. This black and white poster style was acheived using Adobe Photoshop, the threshold filter was applied and then fine-tuned to acheive the desired effect.',
        photo: 'img/photos/cafe1.jpg'
    }
];

/// Foor Loop runs through each image object and displays it's information on the page.///
let html = '';

for (let i = 0; i < images.length; i ++) {
    let image = images[i];
    html += `
        <figure>
        <h2 class="gen-n">${image.name}</h2>
        <img class="gen-p" src="${image.photo}" alt="${image.name}">
        <figcaption class= "gen-t">${image.type}</figcaption></figure>
        <p class="gen-a">${image.about}</p>
    `;
}

document.querySelector('main').insertAdjacentHTML('beforeEnd', html);












   



