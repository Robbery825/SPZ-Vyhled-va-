/*
Svědek viděl z místa nehody vraždy odjíždět auto.
Ví jen, že poznávací značka obsahovala 22. Vaším úkolem
je v níže uvedené databázi kriminálníků najít ty, kteří 
mají v poznávací značce 22. Jejich veškeré údaje následně
vypište do konzole Např. takto:

Jméno: Martin
Příjmení: Zelený
Rok narození: 1985
atd.

To, co hledáte (v našem případě 22), bude zadáno pomocí promptu. 
Použijte tedy: 
prompt(). Do něj zadáte 22.
*/

let criminals = [{
    firstName: "Martin",
    secondName: "Zelený",
    birth: 1985,
    licenPlate: "85C3322",
    address: "U sloupů 16",
    city: "České Budějovice"
},{
    firstName: "Jana",
    secondName: "Růžová",
    birth: 1996,
    licenPlate: "93K3922",
    address: "Malská 29",
    city: "České Budějovice"
},{
    firstName: "Filip",
    secondName: "Modrý",
    birth: 1989,
    licenPlate: "2EP6328",
    address: "Stevardská 38",
    city: "České Budějovice"
}]

let witness = prompt("Zadej část SPZ, kterou jsi viděl (např. 22):")

let suspects = criminals.filter(function(person) {
    return person.licenPlate.toLowerCase().includes(witness.toLowerCase())
})

if (suspects.length === 0) {
    console.log("Nebyli nalezeni žádní podezřelí.")
} else {
    suspects.forEach(function(person) {
        console.log(`Jméno: ${person.firstName}`)
        console.log(`Příjmení: ${person.secondName}`)
        console.log(`Rok narození: ${person.birth}`)
        console.log(`Poznávací značka: ${person.licenPlate}`)
        console.log(`Adresa: ${person.address}`)
        console.log(`Město: ${person.city}`)
        console.log("---------------------------")
    })
}
