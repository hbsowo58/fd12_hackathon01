export function init_player() {
  // alert('몇명?');
  const player_div = document.createElement("div");
  player_div.style.position = "absolute";
  player_div.style.width = "50px";
  player_div.style.height = "50px";
  player_div.style.backgroundColor = "black";
  // player_div.style.backgroundImage = `url('https://github.com/caoyanxiong/mymarble/blob/master/img/img_player_1.png?raw=true')`;
  player_div.style.marginTop = "50px";
  player_div.setAttribute("id", "player1");
  document.querySelector("div").appendChild(player_div);
}