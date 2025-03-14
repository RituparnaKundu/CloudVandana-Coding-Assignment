document.addEventListener('DOMContentLoaded', function() {
    const images = [
        "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        
        "https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ];
    
    

    const imageContainer = document.getElementById('image-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.getElementById('indicators');
    

    let currentIndex = 0;
    

    function initSlider() {
   
        images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Slide ${index + 1}`;
            img.className = index === 0 ? 'active' : '';
            imageContainer.appendChild(img);
            
           
            const indicator = document.createElement('div');
            indicator.className = index === 0 ? 'indicator active' : 'indicator';
            indicator.addEventListener('click', () => {
                goToSlide(index);
            });
            indicators.appendChild(indicator);
        });
    }
    

    function goToSlide(index) {
        
        imageContainer.querySelector('img.active').classList.remove('active');
        indicators.querySelector('.indicator.active').classList.remove('active');
        

        currentIndex = index;
        

        const allImages = imageContainer.querySelectorAll('img');
        const allIndicators = indicators.querySelectorAll('.indicator');
        
        allImages[currentIndex].classList.add('active');
        allIndicators[currentIndex].classList.add('active');
    }
    
 
    function nextSlide() {
        let newIndex = currentIndex + 1;
        if (newIndex >= images.length) {
            newIndex = 0;
        }
        goToSlide(newIndex);
    }
    
 
    function prevSlide() {
        let newIndex = currentIndex - 1;
        if (newIndex < 0) {
            newIndex = images.length - 1;
        }
        goToSlide(newIndex);
    }
    
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    

    initSlider();
});