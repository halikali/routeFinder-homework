const arr = [["JPN","PHL"] , ["BRA","UAE"] , ["USA" ,"BRA"] , ["UAE" , "JPN"]]

const firtChildArray = arr.map((i) => i[0]) ; 
const secondChildArray = arr.map((j) => j[1]) ;

const start = firtChildArray.filter((startRoue) => !secondChildArray.includes(startRoue))[0];
let route = [start];
let now = start ;

while(route.length < arr.length+1){
    arr.map(ctc => {
        if(ctc[0] == now ){
            now = ctc[1] ;
            route.push(now)
        }
    });
}

document.getElementById("way").innerHTML = " Güzegah :  " + route.map(item => `${item} => `)