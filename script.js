//your code here
const images = document.querySelectorAll('img');
const h3 = document.getElementById('h');
const resetButton = document.getElementById('reset');
const verifyButton = document.getElementById('verify');
const para = document.getElementById('para');

let selectedImages = [];

images.forEach(image => {
  image.addEventListener('click', () => {
    if (!selectedImages.includes(image)) {
      selectedImages.push(image);
      image.classList.add('selected');

      if (selectedImages.length === 1) {
        resetButton.style.display = 'block';
      } else if (selectedImages.length === 2) {
        verifyButton.style.display = 'block';
        h3.style.display = 'none';
      }
    }
  });
});

resetButton.addEventListener('click', () => {
  selectedImages = [];
  images.forEach(image => {
    image.classList.remove('selected');
  });
  resetButton.style.display = 'none';
  verifyButton.style.display = 'none';
  h3.style.display = 'block';
  para.style.display = 'none';
});

verifyButton.addEventListener('click', () => {
  const [image1, image2] = selectedImages;
  if (image1.classList.value === image2.classList.value) {
    para.textContent = 'You are a human. Congratulations!';
  } 
  else {
    para.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
  }
  para.style.display = 'block';
  verifyButton.style.display = 'none';
});

