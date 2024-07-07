let tg = window.Telegram.WebApp;
try{
document.getElementById("my_text").textContent = tg.initDataUnsafe.user.id;
}
catch{
    alert("Open in tg")
}

if(tg.initDataUnsafe.user.id == 'robolohness'){
    document.getElementById("my_text").textContent = 'вы админ';
}