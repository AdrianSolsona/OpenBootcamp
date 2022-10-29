//local sesion storage y cookies

localStorage.setItem("persona", JSON.stringify({nombre:"Adrian", apellido:"Solsona"}))

console.log(JSON.parse(localStorage.getItem("persona")))

sessionStorage.setItem("persona", JSON.stringify({nombre:"Adrian", apellido:"Solsona"}))

console.log(JSON.parse(SessionStorage.getItem("persona")))

document.cookie = "nombre-adrian=adrian-Cookie; expires=sat, 29 Oct 2022 12:58:00 GMT"

//html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Storage</title>
</head>
<body>
</body>
<script src="index.js"></script>
</html>
