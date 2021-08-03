
const url = 'https://jaejlf.github.io/Hanguel-Spelling-Test/';

function setShare() {
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt;
  const shareTitle = '한국어능력고사 결과';
  const shareDes = infoList[resultAlt].name;
  const shareImage = url + 'img/lv' + resultAlt + '.png';
  const shareURL = url + 'page/result-' + resultAlt + '.html';

    Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl: shareImage,
      link: {
        mobileWebUrl: shareURL,
        webUrl: shareURL
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

// 이미지 링크 안먹어서 수정 필요
function kakaoShare() {
  Kakao.Link.sendDefault({
  objectType: 'feed',
  content: {
    title: '한국어능력고사',
    description: '맞춤법 테스트로 알아보는 나의 한국어 실력은?',
    imageUrl: '../img/Hanguel-Spelling-Test.png',
    link: {
      mobileWebUrl: 'https://jaejlf.github.io/Hanguel-Spelling-Test/'
    },
  },
  buttons: [
    {
      title: '나도 풀어보기',
      link: {
        mobileWebUrl: 'https://jaejlf.github.io/Hanguel-Spelling-Test/',
        webUrl: 'https://jaejlf.github.io/Hanguel-Spelling-Test/'
      },
    }
  ]
});
}
