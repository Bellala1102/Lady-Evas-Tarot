// 預設牌背面的顯示狀態
const card = document.getElementById('card');
const cardNameDisplay = document.getElementById('card-name');

// 總共44張牌圖片的路徑和名稱
const cards = [
  { img: 'https://meee.com.tw/bWQ0RCu', name: '正位-愚者' },
  { img: 'https://meee.com.tw/ALN7zvZ', name: '正位-魔術師' },
  { img: 'https://meee.com.tw/l7foZ5z', name: '正位-女祭司' },
  { img: 'https://meee.com.tw/GZKpa8k', name: '正位-女皇' },
  { img: 'https://meee.com.tw/2xGaf65', name: '正位-皇帝' },
  { img: 'https://meee.com.tw/A8yYuqe', name: '正位-教皇' },
  { img: 'https://meee.com.tw/rcqJaWX', name: '正位-戀人' },
  { img: 'https://meee.com.tw/uCiACQP', name: '正位-戰車' },
  { img: 'https://meee.com.tw/xyLO9Kw', name: '正位-力量' },
  { img: 'https://meee.com.tw/UTNX6Uy', name: '正位-隱士' },
  { img: 'https://meee.com.tw/ko5cmqX', name: '正位-命運之輪' },
  { img: 'https://meee.com.tw/RIDIPRw', name: '正位-正義' },
  { img: 'https://meee.com.tw/2fWMa3m', name: '正位-倒吊人' },
  { img: 'images/card14.png', name: '正位-死神' },
  { img: 'images/card15.png', name: '正位-節制' },
  { img: 'images/card16.png', name: '正位-惡魔' },
  { img: 'images/card17.png', name: '正位-高塔' },
  { img: 'images/card18.png', name: '正位-星星' },
  { img: 'images/card19.png', name: '正位-月亮' },
  { img: 'images/card20.png', name: '正位-太陽' },
  { img: 'images/card21.png', name: '正位-審判' },
  { img: 'images/card22.png', name: '正位-世界' },
  { img: 'images/card23.png', name: '逆位-愚者' },
  { img: 'images/card24.png', name: '逆位-魔術師' },
  { img: 'images/card25.png', name: '逆位-女祭司' },
  { img: 'images/card26.png', name: '逆位-女皇' },
  { img: 'images/card27.png', name: '逆位-皇帝' },
  { img: 'images/card28.png', name: '逆位-教皇' },
  { img: 'images/card29.png', name: '逆位-戀人' },
  { img: 'images/card30.png', name: '逆位-戰車' },
  { img: 'images/card31.png', name: '逆位-力量' },
  { img: 'images/card32.png', name: '逆位-隱士' },
  { img: 'images/card33.png', name: '逆位-命運之輪' },
  { img: 'images/card34.png', name: '逆位-正義' },
  { img: 'images/card35.png', name: '逆位-倒吊人' },
  { img: 'images/card36.png', name: '逆位-死神' },
  { img: 'images/card37.png', name: '逆位-節制' },
  { img: 'images/card38.png', name: '逆位-惡魔' },
  { img: 'images/card39.png', name: '逆位-高塔' },
  { img: 'images/card40.png', name: '逆位-星星' },
  { img: 'images/card41.png', name: '逆位-月亮' },
  { img: 'images/card42.png', name: '逆位-太陽' },
  { img: 'images/card43.png', name: '逆位-審判' },
  { img: 'images/card44.png', name: '逆位-世界' }
];

// 點擊牌面時的處理函數
card.addEventListener('click', () => {
  // 如果牌已經翻開，則不進行操作
  if (card.classList.contains('is-flipped')) return;

  // 隨機抽取一張牌
  const randomCard = cards[Math.floor(Math.random() * cards.length)];

  // 將選中的牌顯示在卡片正面
  card.querySelector('.card-front').style.backgroundImage = `url(${randomCard.img})`;

  // 更新卡牌名稱
  cardNameDisplay.textContent = randomCard.name;

  // 添加翻轉效果
  card.classList.add('is-flipped');
});
