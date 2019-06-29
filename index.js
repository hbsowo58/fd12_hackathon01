const city_inform = [{
    name: 'Seoul',
    price: 1000,
    landType: 'middle',
    isOwned: 0,
    owner: '',
    price: ''
  },
  {
    name: 'Busan',
    price: 1000,
    landType: 'city',
    isOwned: 0,
    owner: '',
    price: 10000
  },
  {
    name: 'Daejeon',
    price: 1000,
    landType: 'city',
    isOwned: 0,
    owner: '',
    price: 10000
  },
  {
    name: 'Daegu',
    price: 1000,
    landType: 'city',
    isOwned: 0,
    owner: '',
    price: 10000
  },
  {
    name: 'trip',
    price: 1000,
    landType: 'middle',
    isOwned: 0,
    owner: '',
    price: ''
  },
  {
    name: 'Ulsan',
    price: 1000,
    landType: 'city',
    isOwned: 0,
    owner: '',
    price: 10000
  },
  {
    name: 'Jeju',
    price: 1000,
    landType: 'city',
    isOwned: 0,
    owner: '',
    price: 10000
  },
  {
    name: 'Newyork',
    price: 1000,
    landType: 'city',
    isOwned: 0,
    owner: '',
    price: 10000
  },
  {
    name: 'Chicago',
    price: 1000,
    landType: 'middle',
    isOwned: 0,
    owner: '',
    price: ''
  },
  {
    name: 'Paris',
    price: 1000,
    landType: 'city',
    isOwned: 0,
    owner: '',
    price: 10000
  },
  {
    name: 'LA',
    price: 1000,
    landType: 'city',
    isOwned: 0,
    owner: '',
    price: 10000
  },
  {
    name: 'deli',
    price: 1000,
    landType: 'city',
    isOwned: 0,
    owner: '',
    price: 10000
  },
  {
    name: 'manila',
    price: 1000,
    landType: 'middle',
    isOwned: 0,
    owner: '',
    price: ''
  },
  {
    name: 'london',
    price: 1000,
    landType: 'city',
    isOwned: 0,
    owner: '',
    price: 10000
  },
  {
    name: 'hongkong',
    price: 1000,
    landType: 'city',
    isOwned: 0,
    owner: '',
    price: 10000
  },
  {
    name: 'madrid',
    price: 1000,
    landType: 'city',
    isOwned: 0,
    owner: '',
    price: 10000
  }
];
const player = {
  name: 'player1',
  position: 0,
  seedMoney: 5000000,
};

const arr = new Array(16).fill(0);
// const div = document.createElement('div').setAttribute('id', 'player1');
// 페이지 로딩시 캐릭터 점찍기

// 시작시 플레이어 점 그리기
function init_player() {
  // alert('몇명?');
  const player_div = document.createElement('div');
  player_div.style.position = 'absolute';
  player_div.style.width = '50px';
  player_div.style.height = '50px';
  player_div.style.backgroundColor = 'black';
  // player_div.style.backgroundImage = `url('https://github.com/caoyanxiong/mymarble/blob/master/img/img_player_1.png?raw=true')`;
  player_div.style.marginTop = '50px';
  player_div.setAttribute('id', 'player1');
  document.querySelector('div').appendChild(player_div);
}
// 플레이어 점 그리기 웹페이지 로딩시 로딩하기
window.onload = init_player;

// 시작 스테이지(게임판) 그리기
arr.forEach(function (element, index, array) {
  const pic = 180;
  const div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.width = '180px';
  div.style.height = '180px';
  div.style.border = '2px solid black'
  // div.style.marginTop = '10px';
  div.id = city_inform[index].name;
  let nanu = Math.floor(index / 4);
  player.nanu = nanu;
  if (nanu < 1) {
    div.style.left = `${index * pic}px`;
    div.style.backgroundColor = 'red';
    div.innerText = city_inform[index].name;
  } else if (nanu < 2) {
    div.style.left = `${4 * pic}px`;
    div.style.top = `${(index-4) * pic}px`;
    div.style.backgroundColor = 'pink';
    div.innerText = city_inform[index].name;
  } else if (nanu < 3) {
    div.style.top = `${4 * pic}px`;
    div.style.left = `${(4 - index % 8)* pic}px`;
    div.style.backgroundColor = 'yellow';
    div.innerText = city_inform[index].name;
  } else {
    div.style.top = `${(4 - index % 12) * pic}px`;
    div.style.backgroundColor = 'blue';
    div.innerText = city_inform[index].name;

  }

  if (index === 0) {
    div.style.backgroundImage =
      `url('https://github.com/caoyanxiong/mymarble/blob/master/img/bg_olympic.png?raw=true')`
  }
  if (index === 4) {
    div.style.backgroundImage =
      `url('https://github.com/caoyanxiong/mymarble/blob/master/img/bg_travel.png?raw=true')`;
  }
  if (index === 8) {
    div.style.backgroundImage =
      `url('https://github.com/caoyanxiong/mymarble/blob/master/img/bg_olympic.png?raw=true')`
  }
  if (index === 12) {
    div.style.backgroundImage =
      `url('https://github.com/caoyanxiong/mymarble/blob/master/img/bg_start.png?raw=true')`
  }

  document.querySelector('div').appendChild(div)
})
// 이동하는 플레이어 그리기(css 변경)
function drawPlayer(movePos) {
  const pic = 180;
  const div = document.getElementById('player1');
  const index = movePos;
  let nanu = Math.floor(index / 4);
  if (nanu < 1) {
    div.style.top = `${0}px`;
    div.style.left = `${index * pic}px`;
  } else if (nanu < 2) {
    div.style.left = `${4 * pic}px`;
    div.style.top = `${(index-4) * pic}px`;

  } else if (nanu < 3) {
    div.style.top = `${4 * pic}px`;
    div.style.left = `${(4 - index % 8)* pic}px`;
  } else {
    div.style.top = `${(4 - index % 12) * pic}px`;
    div.style.left = `10px`;
  }
  console.log(`${movePos}만큼 이동했습니다.`);
}

// 플레이어 이동하기
const confirm_box = document.querySelector('div[class=confirm_box]');

function player_move(moveNo) {
  let currPos = player.position;
  let movePos = (currPos + moveNo) < 17 ? (currPos + moveNo) === 16 ? 0 : (currPos + moveNo) : (currPos + moveNo) %
    16;
  player.position = movePos;
  drawPlayer(movePos);
  document.querySelector('div[class=confirm_box]').style.display = 'block';
}

function checkOwner(playerPosition) {
  if (city_inform[playerPosition].landType === 'city') return city_inform[playerPosition].isOwned ? 0 : 1;
}

function buy_city(movePos) {
  city_inform[player.position].isOwned = 1;
  city_inform[player.position].owner = 'player1';
  player.seedMoney -= city_inform[player.position].price;
}

// 주사위 굴리기
const button = document.querySelector('button');
// function dice() {
//    let randomNo = Math.floor(6 * Math.random()) + 1;
//    player_move(randomNo);
//    return ;
//  }
//  주사위 버튼 리스너
button.addEventListener('click', function () {
  let randomNo = Math.floor(6 * Math.random()) + 1;
  button.innerText = randomNo;
  player_move(randomNo);
  return
}, true);

confirm_box.addEventListener('click', function () {
  if (city_inform[player.position].landType !== 'middle') {
    if (player.seedMoney >= city_inform[player.position].price) {
      console.log('땅을 구매함');
      player.seedMoney -= city_inform[player.position].price;
      city_inform[player.position].isOwned = 1;
      city_inform[player.position].owner = player.name;
    }
  }
})