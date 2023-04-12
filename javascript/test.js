let tab = [0,1,2,3,4,5,6,7,8,9];
//let cpt = 0;

console.log(tab);

for (let i = 0; i < tab.length; i++) {
    if (tab[i]%2 === 0) {
        tab = tab.splice(i, 1);
        tab = tab.unshift(-1);
        //cpt+=1;
    }
}

console.log(tab)

