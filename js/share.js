const url = 'https://jaejlf.github.io/Hanguel-Spelling-Test/';

function setShare() {
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '한국어능력고사 결과';
  const shareDes = infoList[resultAlt - 1].name;
  const shareImage = url + 'img/lv' + resultAlt + '.png';
  const shareURL = url + 'page/result-' + resultAlt + '.html';

  // 최종때는 콘솔 로그 삭제 후 커밋/푸시 필요
  console.log(`resultImg(결과 이미지) = ${resultImg}`);
  console.log(`resultAlt(결과 인덱스) = ${resultAlt}`);
  console.log(`shareDes(결과 설명) = ${shareDes}`);
  console.log(`shareImage(결과 이미지) = ${shareImage}`);
  console.log(`shareURL = ${shareURL}`);

    Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: url,
        webUrl: url
      },
    },
    buttons: [
      {
        title: '결과 확인하기',
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL
        },
      }
    ]
  });
}

function shareFacebook() {
    window.open("http://www.facebook.com/share.php?u=" + encodeURIComponent(location.href));
}
function shareTwitter() {
    window.open("http://twitter.com/share?url=" + encodeURIComponent(location.href) +"&text=" + document.title);
}