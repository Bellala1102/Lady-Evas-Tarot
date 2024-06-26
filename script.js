// 預設牌背面的顯示狀態
const card = document.getElementById('card');
const cardNameDisplay = document.getElementById('card-name');

// 總共44張牌圖片的路徑和名稱
const cards = [
  { img: 'images/card1.png', name: '正位-愚者' },
  { img: 'images/card2.png', name: '正位-魔術師' },
  { img: 'images/card3.png', name: '正位-女祭司' },
  { img: 'images/card4.png', name: '正位-女皇' },
  { img: 'images/card5.png', name: '正位-皇帝' },
  { img: 'images/card6.png', name: '正位-教皇' },
  { img: 'images/card7.png', name: '正位-戀人' },
  { img: 'images/card8.png', name: '正位-戰車' },
  { img: 'images/card9.png', name: '正位-力量' },
  { img: 'images/card10.png', name: '正位-隱士' },
  { img: 'images/card11.png', name: '正位-命運之輪' },
  { img: 'images/card12.png', name: '正位-正義' },
  { img: 'images/card13.png', name: '正位-倒吊人' },
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
