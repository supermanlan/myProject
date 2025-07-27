
function openNote() {
  alert("记事本功能暂未实现");
}
function speakText() {
  const msg = new SpeechSynthesisUtterance("欢迎来到 superlan 的小站");
  msg.lang = "zh-CN";
  window.speechSynthesis.speak(msg);
}
function openComments() {
  window.open("https://github.com/supermanlan/superlan-comments/issues", "_blank");
}
function checkPassword() {
  const pwd = document.getElementById("password").value;
  if (pwd === "admin") {
    document.getElementById("diary-content").innerText = "这里是你的私密日记内容。";
  } else {
    alert("密码错误");
  }
}
fetch("https://v1.hitokoto.cn")
  .then(response => response.json())
  .then(data => {
    document.querySelector(".hitokoto").innerText = data.hitokoto;
  });
