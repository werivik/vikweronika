document.addEventListener('DOMContentLoaded', () => {
    function initializeSlideshow(containerClass) {
        const container = document.querySelector(containerClass);
        if (!container) return;

        const mainImage = container.querySelector('.slideshow-main img');
        const mainDesc = container.querySelector('.slideshow-main .desc p');
        const thumbnails = Array.from(container.querySelectorAll('.slideshow-image img'));
        const descs = Array.from(container.querySelectorAll('.slideshow-image .desc p'));
        const leftArrow = container.querySelector('.left');
        const rightArrow = container.querySelector('.right');
        const progress = container.querySelector('.progress');
        const slideshowImages = container.querySelector('.slideshow-images');

        let currentIndex = 0;
        let isZoomed = false;
        let zoomedImageContainer = null;

        function updateMainContent(index) {
            mainImage.src = thumbnails[index].src;
            mainDesc.textContent = descs[index]?.textContent || "";
            progress.textContent = `${index + 1} / ${thumbnails.length}`;
        }

        function reorderImages() {
            const numToShow = Math.min(thumbnails.length, 4);
            slideshowImages.innerHTML = '';

            for (let i = 0; i < numToShow; i++) {
                const index = (currentIndex + i) % thumbnails.length;
                const thumbnail = thumbnails[index];
                const desc = descs[index];

                const imageWrapper = document.createElement('div');
                imageWrapper.classList.add('slideshow-image');

                const img = document.createElement('img');
                img.src = thumbnail.src;
                img.alt = thumbnail.alt;

                const descElement = document.createElement('div');
                descElement.classList.add('desc');
                const descP = document.createElement('p');
                descP.textContent = desc.textContent;
                descElement.appendChild(descP);

                imageWrapper.appendChild(img);
                imageWrapper.appendChild(descElement);
                slideshowImages.appendChild(imageWrapper);

                img.addEventListener('click', () => {
                    currentIndex = index;
                    updateMainContent(currentIndex);
                    reorderImages();
                });
            }
        }

        function showNextImage() {
            currentIndex = (currentIndex + 1) % thumbnails.length;
            updateMainContent(currentIndex);
            reorderImages();
            if (isZoomed) updateZoomedImage(currentIndex);
        }

        function showPrevImage() {
            currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
            updateMainContent(currentIndex);
            reorderImages();
            if (isZoomed) updateZoomedImage(currentIndex);
        }

        function disableScroll() {
            document.body.style.overflow = 'hidden';
        }

        function enableScroll() {
            document.body.style.overflow = '';
        }

        function createZoomedImageContainer() {
            const container = document.createElement('div');
            container.classList.add('zoomed-image-container');
            container.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background: rgba(0, 0, 0, 0.6);
                backdrop-filter: blur(8px);
                z-index: 1000;
            `;

            container.innerHTML = `
                <div class="zoomed-container">
                    <div class="close-button">
                        <button id="closeZoom">X</button>
                    </div>
                    <img id="zoomed-image" src="" alt="">
                    <div class="desc-arrows">
                        <div class="arrows" id="leftArrowZoomed">
                            <i class="fa-solid fa-caret-left" class="zoomed-left"></i>
                        </div>
                        <div class="desc">
                            <p id="zoomed-desc"></p>
                        </div>
                        <div class="arrows" id="rightArrowZoomed">
                            <i class="fa-solid fa-caret-right" class="zoomed-right"></i>
                        </div>
                    </div>
                </div>
            `;

            document.body.appendChild(container);
            return container;
        }

        function updateZoomedImage(index) {
            const zoomedImage = zoomedImageContainer.querySelector('#zoomed-image');
            zoomedImage.src = thumbnails[index].src;
            const desc = zoomedImageContainer.querySelector('#zoomed-desc');
            desc.textContent = descs[index]?.textContent || "";
        }

        function closeZoomedContainer(event) {
            if (!event.target.closest('.zoomed-container') || event.target.id === 'closeZoom') {
                enableScroll();
                zoomedImageContainer.remove();
                isZoomed = false;
            }
        }

        function toggleZoom() {
            if (isZoomed) {
                enableScroll();
                zoomedImageContainer.remove();
                isZoomed = false;
            } 
            
            else {
                disableScroll();
                zoomedImageContainer = createZoomedImageContainer();
                updateZoomedImage(currentIndex);
                isZoomed = true;

                zoomedImageContainer.querySelector('#leftArrowZoomed').addEventListener('click', (e) => {
                    e.stopPropagation();
                    showPrevImage();
                });

                zoomedImageContainer.querySelector('#rightArrowZoomed').addEventListener('click', (e) => {
                    e.stopPropagation();
                    showNextImage();
                });

                zoomedImageContainer.querySelector('#closeZoom').addEventListener('click', closeZoomedContainer);
                zoomedImageContainer.addEventListener('click', closeZoomedContainer);
            }
        }

        leftArrow.addEventListener('click', showPrevImage);
        rightArrow.addEventListener('click', showNextImage);
        mainImage.addEventListener('click', toggleZoom);

        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', () => {
                currentIndex = index;
                updateMainContent(currentIndex);
                reorderImages();
            });
        });

        updateMainContent(currentIndex);
        reorderImages();
    }

    ['.web1', '.web2', '.web3', '.web4', '.web5', '.web6', '.web7', '.web8', '.web9', '.web10'].forEach(initializeSlideshow);
});
