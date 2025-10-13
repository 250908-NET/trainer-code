let index = 0;
const images = [
  ['https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQzyj1cScfI4rOvISJ3pJLTObOU20kAFtW8Ufi8NOBOcXbveYNLu1e1ZFu2ylkpz5R40Q6j581D0uyEJNCrvXfRAC0ps3PEM0ppB0TU8nXy', 'cat?'],
  ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyaS9dW15PMOAWf9oneAPmq-Fys0W8w3nPXC7wZ36CROlJ3tkNFb0_9uz5CI7h98cHIzOUupljRsENdsXzDLtFfJ-mMB_KHcl7TjZGD8qoXg', 'dog?'],
  ['cat.png', 'possibly corrupted cat'],
  ['cat1.webp', 'possibly corrupted cat'],
  ['cat2.png', 'possibly corrupted cat'],
  ['dog.png', 'possibly corrupted dog'],
  ['ollie.png', 'possibly corrupted cat (ollie)'],
]

// the images seem to be corrupted?
// huh. no idea. not my pictures
// it does not display

const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener('click', () => {
    const image = document.getElementById("image");
    index = (index + 1) % images.length;
    image.src = images[index][0];
    image.alt = images[index][1];
});
