const subject = [
    'I',
    'You',
    'He',
    'She',
    'It',
]

const verb = [
    'Love',
    'Hate',
    'Kill',
    'Kiss',
    'Punch'
]

const object = [
    'You',
    'Your father',
    'Your mother',
    'Your Sister',
    'Him'
]
function main(){
    let randSubject = Math.floor(Math.random() * 5);
    let randVerb = Math.floor(Math.random() * 5);
    let randObject = Math.floor(Math.random() * 5);
    console.log(`${subject[randSubject]} ${verb[randVerb]} ${object[randObject]}`);
}

main();