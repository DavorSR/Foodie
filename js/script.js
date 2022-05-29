// Show image modal

const gallery = document.querySelectorAll('.gallery_img img');
const popup = document.querySelector('.gallery_popup-img');
const popImg = document.querySelector('.gallery_popup-img img');



gallery.forEach(image => {

    popup.style.visibility = 'hidden';

    image.onclick = () => {
        popup.style.display = 'block';
        popup.style.visibility = 'visible';
        popImg.src = image.getAttribute('src');

    }
});


document.querySelector('.gallery_popup-img span').onclick = () => {
    popup.style.display = 'none';
}