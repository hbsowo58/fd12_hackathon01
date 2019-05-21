<!DOCTYPE html>
<html lang=“en”>

<head>
   <meta charset=“UTF-8">
   <meta name=“viewport” content=“width=device-width, initial-scale=1.0">
   <meta http-equiv=“X-UA-Compatible” content=“ie=edge”>
   <title>Document</title>
</head>

<body>
<script>
   const arr = new Array(15).fill(0);
   arr.forEach(function (element, index, array) {
           const div = document.createElement(‘div’);
           div.style.position = ‘absolute’;
           div.style.width = ‘100px’;
           div.style.height = ‘100px’;
           div.style.backgroundColor = ‘red’;
           div.style.marginTop = ‘10px’;
           div.id = index;
           div.style.left = `${index * 140}px`;
           document.body.appendChild(div)
       }
   )
</script>
</body>

</html>