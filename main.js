const a = document.getElementById("button-a");
a.onclick = function () {
  display.textContent = "不正解!";
};
const b = document.getElementById("button-b");
b.onclick = function () {
  display.textContent = "正解! 麺から作ったパスタだよ!";
};
const c = document.getElementById("button-c");
c.onclick = function () {
  display.textContent = "不正解!";
};
