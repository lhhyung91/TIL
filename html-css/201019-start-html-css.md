# 201019 html-css first class
- P= 단락

- html5 = mark up과 api 합친 용어

- 아웃라인 알고리즘 (outline algorithm)
웹 페이지의 정보 구조를 판별 할 수 있는 개념으로, 책 목차와 비슷


- web storage

CLI를 익숙하게 해야됨

-분석
*구조
3단 구성 
헤더(네비게이션 포함), 콘텐츠, 푸터

4단 구성
헤더, 네비게이션, 콘텐츠, 푸터

*논리적인 순서 (테이블은 배치용)

*시맨틱 마크업

*네이밍

CSS 방법론
겹침, 상속, 우선순위 따지기

- bem=block element modifier 정리하기

k.c = kebob case
c.c = camel case
p.c = pascal case
s.c = snake case

WAI - ARIA

<!-- -ex header .header
div .visual
main .main
div 로그인 {
div .group .group1
div .group .group2
div .group .group3
}
div. slogun
footer .footer -->

웹접근성 관점으로
  
단축키 - 컨트롤 +쉬프트 +k 커서 있는 줄 삭제

SEO - 검색 최적화

다양한 meta 정보

- emmet cheat sheet :
<!-- div.skip-nav>a =   <div class="skip-nav"><a href=""></a></div>

header.header{header} = <header class="header">header</header>

.visual{visual} = <div class="visual">visual</div>

main.main>div.group.group${group$}*3
 = <main class="main">
     <div class="group group1">group1</div>
     <div class="group group2">group2</div>
     <div class="group group3">group3</div>
   </main>

footer.footer>.footer-wrapper{FOOTER}
= <footer class="footer">
   <div class="footer-wrapper">FOOTER</div>
   </footer> -->

- 개발과 / 배포 분리하기

- font는 web-font 사용 권장

- font: noto sans

- cdn 서비스 = 폰트 받아서 쓰기

- webkit- 오픈 소스 렌더링

- rem = rooot em