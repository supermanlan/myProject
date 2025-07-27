
function updateTime() {
  const now = dayjs().locale('zh-cn');
  document.getElementById("time").textContent = now.format("YYYY年MM月DD日 dddd HH:mm:ss");
}
setInterval(updateTime, 1000);
updateTime();

fetch("https://v1.hitokoto.cn")
  .then(res => res.json())
  .then(data => {
    document.getElementById("quote").textContent = data.hitokoto + " —— " + (data.from || "");
  });

fetch("https://wttr.in/?format=%C+%t+%w")
  .then(res => res.text())
  .then(text => {
    document.getElementById("weather").textContent = text;
  });

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}
