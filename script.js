let tg = window.Telegram.WebApp;
try{
document.getElementById("my_text").textContent = tg.initDataUnsafe.user.first_name;
}
catch{
    alert("Open in tg")
}

if(tg.initDataUnsafe.user.id == 'robolohness'){
    document.getElementById("my_text").textContent = 'вы админ';
}