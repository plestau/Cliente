// Ejercicio 1
a = [1,3,5,6,8,10,15]
document.write(a.sort((b, c) => b - c )); 
document.write("</br>");

b = ["Extravaganza", "sapo", "sol", "Alberto"]
function longest_str_in_array(b)
  {
    var max_str = b[0].length;
    var ans = b[0];
    for (var i = 1; i < b.length; i++) {
        var maxi = b[i].length;
        if (maxi > max_str) {
            ans = b[i];
            max_str = maxi;
        }
    }
    return ans;
}

document.write(longest_str_in_array(b));
document.write("</br>");

c = [1, 2, 5, 6, 7, 10, 15, 18, 20, 21, 23]
impar = c.filter(number =>{
    return number % 2 != 0;
});
document.write(impar);
document.write("</br>");

d = [1, 2, 5, 6, 7, 10, 15, 18, 20, 21, 23]
par = c.filter(number =>{
    return number % 2 === 0;
});
document.write(par);
document.write("</br>");

/*
e = ["esternocleidomastoideo", "Pais", "Isla", "Extraño", "palíndromo"]
e.split("");
e.filter(function(str){
    return str.every(function(char){
        return e.includes(char);
    });
});
document.write(e);
document.write("</br>");
*/

f = [1, 2, 5, 6, 7, 10, 15, 18, 20, 21, 23]
divisible = f.filter(number =>{
    return number % 3 == 0;
});
document.write(divisible);
document.write("</br>");

g = ["Hola", "buenas", "tardes"]
h = ["como", "te", "encuentras"]
gh = g.concat(h);
document.write(gh);
document.write("</br>");

document.write(gh.sort());
document.write("</br>");

gh.shift();
document.write(gh);
document.write("</br>");

gh.unshift("Pelele");
document.write(gh);
document.write("</br>");

gh.splice(1, 5, "te", "crees", "que", "es", "facil", "nombrar", "a", "la", "Ele");
document.write(gh);

// Ejercicio 3
arr[5][5];
sol[30];
k = 1,countnumber[25];
flag = 1;
prepeating(arr, size)
{
    i;
    for (i = 0; i < size; i++)
{
if (arr[abs(arr[i])] >= 0)
        {
            arr[abs(arr[i])] = -arr[abs(arr[i])];
    }
    else
        {
            flag = flag * 0;
            break;
        }
    }
}
 
search(a[5], x, y)
{
count = 0,tempx = 0,tempy = 0,p,c = 1;
tempcondition,i,flag = 1;
    while (a[x][y] != tempcondition)
    {
        tempcondition = (((x + 1) * 10) + (y + 1));
        if (x == 0 && y == 0)
        {
            sol[0] = (x + 1) * 10 + (y + 1);
        }
        if (a[x][y] != tempcondition)
        {
            if (c < 25)
            {
                sol[c] = a[x][y];
            }
            else
            {
                p = prepeating(sol, 30);
                if (p == 0)
                {
                    flag = 0;
                    break;
                }
 
            }
            tempx = a[x][y] / 10;
            tempy = a[x][y] % 10;
            x = tempx - 1;
            y = tempy - 1;
            c++;
            count++;
 
        }
 
    }
    if (flag == 1)
    {
        for (i = 0; i <= count; i++)
        {
            tempx = sol[i] / 10;
            tempy = sol[i] % 10;
            pr("%d %d\n", tempx, tempy);
        }
    }
    else
    pr("No hay tesoro :(");
 
}
 
main()
{
 
i,j,checkflag = 0;
    for (i = 0; i < 5; i++)
    {
        for (j = 0; j < 5; j++)
        {
            scanf("%d", arr[i][j]);
        }
    }
    for (i = 0; i < 5; i++)
    {
        for (j = 0; j < 5; j++){
            if ((arr[i][j] / 10) >= 1 && (arr[i][j] / 10) <= 5 &&
                (arr[i][j] % 10) >= 1 && (arr[i][j] / 10) <= 5)
            {
            checkflag = 1;
            }
            else
            {
                checkflag = 0;
                break;
            }
        }
    }
    if (checkflag == 0)
    {
        pr("No hay tesoro :(");
    }
    else
    {
        search(arr, 0, 0);
    }
}
