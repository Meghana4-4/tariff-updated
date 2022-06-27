
    let res1;
let res2;
let res3;
let res4;
let num = 280;
res1 = num * 0.05;

if(num > 200)
{
res2 = num - 200;
res3 = res2 * 7.8;
res4 = res1 + res3 + 1151.5 + 60;
}

else if(num > 100)
{
res2 = num - 100 ;
res3 = res2 * 6.75;
res4 = res1 + res3 + 476.5 + 60;
}

else if(num > 30)
{
res2 = num - 30;
res3 = res2 * 5.2;
res4 = res1 + res3 + 112.5+ 60;
}


else
{
    res3 = num * 3.75;
    res4 = res1 +res3 + 60;
}

console.log(res4);