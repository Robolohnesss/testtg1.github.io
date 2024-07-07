let tg = window.Telegram.WebApp;
try{
document.getElementById("my_text").textContent = tg.initDataUnsafe.user.id;
if(tg.initDataUnsafe.user.id == 1002687369){
    document.getElementById("my_text").textContent = 'вы админ';
}
}
catch{
    alert("Open in tg")
}
