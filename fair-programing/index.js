// 유익한 시간이였다

// 이미지 태그 만들어서 슬라이드에 붙이는 
const attachImages = ($carouselSlide, images) => {
  const lastImage = new Image();
  lastImage.src = images[images.length - 1];
  $carouselSlide.appendChild(lastImage);

  images.forEach(url => {
    const img = new Image();
    img.src = url;
    $carouselSlide.appendChild(img);
  });

  const firstImage = new Image();
  firstImage.src = images[0];
  $carouselSlide.appendChild(firstImage);
};

// 요구사항 3. 가변 크기 대처
const handleVaryImageSize = ($window, images) => {
  images[0].onload = () => {
    $window.style.width = `${images[0].width + 10}px`;
    $window.style.height = `${images[0].height + 10}px`;

    images.forEach((image) => {
      image.width = `${images[0].width + 10}`;
    });

    $window.style.opacity = 1;
  };
}


// 요구 사항5. 캐러셀 슬라이드 동적 생성
const carousel = ($container, images) => {
  // 보이는 이미지 슬라이드 순서 
  let currentSlide = 1;

  const $carouselSlide = document.createElement('div');
  $carouselSlide.classList.add('carousel-slide');
  attachImages($carouselSlide, images);

  $container.appendChild($carouselSlide);

  //html $container에 새로 붙여준 요소라서 다시 선택해줘야됨
  const $window = document.querySelector('.carousel-slide');
  const transition = $window.style.transition;
  $window.style.setProperty('--duration', 500);

  handleVaryImageSize($container, $carouselSlide.childNodes);

  // 요구 사항 4. 연타 동작 - 클릭 이벤트, lodash로 throttle 구현
  $container.onclick = _.throttle(e => {
    if (!e.target.classList.contains('material-icons')) return;
    slide(e);
  }, 700);

  // 요구사항 2. 슬라이드 애니메이션 기능
  const slide = e => {

    // 왼쪽 버튼 클릭 시
    if (e.target.classList.contains('prev')) {
      // currentSlide = 현재 보이는 이미지
      $window.style.setProperty('--currentSlide', --currentSlide);
      // 요구 사항 1. 무한 루프
      if (currentSlide === 0) {
        // 1. 트랜지션 멈춰야 함
        setTimeout(() => {
          $window.style.transition = 'none';
          // 2. 뒤쪽 슬라이드로 이동
          $window.style.setProperty('--currentSlide', images.length);
          currentSlide = images.length;
          // 3. 이동이 끝나면 트랜지션 다시 추가
          setTimeout(() => {
            $window.style.transition = transition;
          }, 50);
        }, 550);
      }
    }
    // 오른쪽 버튼 클릭 시
    if (e.target.classList.contains('next')) {
      // currentSlide = 현재 보이는 이미지
      $window.style.setProperty('--currentSlide', ++currentSlide);
      // 요구 사항 1. 무한 루프
      if (currentSlide === images.length + 1) {
        setTimeout(() => {
          $window.style.transition = 'none';
          $window.style.setProperty('--currentSlide', 1);
          currentSlide = 1;
          setTimeout(() => {
            $window.style.transition = transition;
          }, 50);
        }, 550);
      }
    }
  };
};

// 이미지 소스
carousel(document.querySelector('.container'), [
  'img/image-1.jpg',
  'img/image-2.jpg',
  'img/image-3.jpeg',
  'img/image-4.png'
]);