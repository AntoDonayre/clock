function relojG (){
    now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();
    week = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    day = now.getDay();
    months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"]
    month = now.getMonth();
    year = now.getFullYear();

    relojHora = document.getElementById('hora');
    relojMinutos = document.getElementById('minutos');
    relojSegundos = document.getElementById('segundos');
    relojDia = document.getElementById('dia');
    relojnDia = document.getElementById('nDia');
    relojMes = document.getElementById('mes');
    relojYear = document.getElementById('year');

    if (hours < 10) {hours = "0" + hours}
    if (minutes < 10) {minutes = "0" + minutes}
    if (seconds < 10) {seconds = "0" + seconds}
    
    relojHora.innerHTML = hours
    relojMinutos.innerHTML = minutes
    relojSegundos.innerHTML = seconds
    relojDia.innerHTML = week[day]
    relojnDia.innerHTML = day
    relojMes.innerHTML = months[month]
    relojYear.innerHTML = year
}

setInterval(relojG, 1000);