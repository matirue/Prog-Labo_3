<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>App 25</title>
   
    
    <style>
        table, th, td 
        {
            border: 3px solid rgb(196, 6, 6);
        }
    </style>
       
</head>
<body>
    <caption><h4>Palabras de</h4></caption>
    <form action="./app25.php">
        <table style="width: 100%">
            <tr>
                <th>Una letra</th>
                <th>Dos Letras</th>
                <th>Tres Letras</th>
                <th>Cuatro Letras</th>
                <th>Mas de cuatro Letras</th>
            </tr>
            <tr>
                <td><?php echo $unaLetra ?></td>
                <td><?php echo $dosLetras ?></td>
                <td><?php echo $tresLetras ?></td>
                <td><?php echo $cuatroLetras ?></td>
                <td><?php echo $masLetras ?></td>
            </tr>
        </table>    
    </form>
</body>
</html>
