console.log("Half Pyramid")
for(var i=0;i<6;i++)
{
    var s1='';
    for(var j=0;j<=i;j++)
    {
        s1+='*';
    }
    console.log(s1);
}
console.log("Inverted Half Pyramid");
for(var i=0;i<6;i++)
{
    var s2='';
    for(var j=6;j>i;j--)
    {
        s2+='*';
    }
    console.log(s2);
}
console.log("Hollow Inverted Half Pyramid");
for(var i=6;i>=1;i--)
{
    var s3='';
    for(var j=1;j<=i;j++)
    {
        if(j==1||j==i||i==6)
        {
         s3+='*';
        }
        else{
        s3+=' ';
        }
    }
    console.log(s3);
}
console.log("Full Pyramid");
var s4='';
for(var i=1;i<=6;i++)
{
    for(var j=1;j<=6-i;j++)
    {
         s4+=' ';
    }
    for(var k=0;k<2*i-1;k++)
    {
        s4+="*";
    }
    s4+="\n";
}
console.log(s4);
console.log("Inverted Full Pyramid");
var s5="";
for(var i=0;i<6;i++)
{
    for(var j=0;j<i;j++)
    {
        s5+=" ";
    }
    for(var k=0;k<2*(6-i)-1;k++)
    {
        s5+="*";
    }
    s5+="\n";
}
console.log(s5);
console.log("Hollow Full Pyramid");
var s6="";
var c=6;
for(var i=1;i<=6;i++)
{
    for(var j=1;j<=c-1;j++)
    {
     s6+=" ";
    }
    for(var k=1;k<=2*i-1;k++)
    {
     if(k==1||k==2*i-1||i==6)
     {
         s6+="*";
     }
     else{
         s6+=" ";
     }
    }
   c--;
    s6+="\n";
}
console.log(s6);