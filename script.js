 const galleryImages = document.querySelectorAll('.gallery img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('closeBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;

    // Open lightbox
    galleryImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            showImage();
            lightbox.style.display = 'flex';
        });
    });

    // Show image in lightbox
    function showImage() {
        lightboxImg.src= galleryImages[currentIndex].src;
    }

    function Close() {
        closeBtn.addEventListener('click', () => {
            lightbox.style.display = 'none';
        })
    }

    function Next(){
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % galleryImages.length;
            showImage();
        });
    }

       function Prev(){
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1) % galleryImages.length;
            showImage();
        });
    }

    Close();
    Next();
    Prev();