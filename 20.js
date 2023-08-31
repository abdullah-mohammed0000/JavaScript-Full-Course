function highestscore(playerstats){
var max = playerstats[0][0]
var max1 = playerstats[0][1]
for(var x=0;x<playerstats.length;x++)
{
    if(max1 < playerstats[x][1]) 
        {
           max1= playerstats[x][1];
           max= playerstats[x][0];
           
        }
}
return max;


}

 var playerstats = [
["Afif",83],
["Hridoy",93],
["Tanzid",68],
["Hasan",23],
["Tanzim",44]
 ]
 var potm=highestscore(playerstats);
 
 console.log(potm)