
function ageindays() {
    var dt= new Date();
    var eday=dt.getDate();
    var emonth=dt.getMonth()+1;
    var eyear=dt.getUTCFullYear();
    var lastday = function(y,m){
        return  new Date(y, m , 0).getDate();
        }
    var elast=lastday(eyear,emonth-1)

    var bday=prompt('Enter your birth day _ _eg:11');
    var bmonth=prompt('Enter your birth month_ _eg:12');
    var byear=prompt('Enter your birth year_ _eg:2003');

    var days=day();
    function day() {
        if (eday<bday) {
            eday=(eday+elast);
            emonth=(emonth+12)-1;
            eyear=eyear-1;
            return (eday-bday);
        } else {
            return (eday-bday);
        }
    }
    var months=month();
    function month() {
        if (emonth<bmonth) {
            emonth=(emonth+12);
            eyear=eyear-1;
            return (emonth-bmonth);
        } else {
            return (emonth-bmonth);
        }
    }
    var years=year();
    function year() {
        if (emonth<bmonth) {
            eyear=eyear-1;
            return (eyear-byear);
        } else{
            return (eyear-byear);
        }
    }

    var h2=document.createElement('h2');
    var text=document.createTextNode('You are '+years+' years , '+months+' months and '+days+' days old');
    h2.setAttribute('id','days');
    h2.appendChild(text);
    document.getElementById('reset').appendChild(h2);
}
 function reset() {
     document.getElementById('days').remove();
     
 }