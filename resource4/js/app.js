const inventors = [
    {
        first: 'Albert',
        Last: 'Einstein',
        year: 1879,
        passed: 1955
    },
    {
        first: 'Isaac',
        Last: 'Newton',
        year: 1643,
        passed: 1727
    },
    {
        first: 'Galileo',
        Last: 'Galilei',
        year: 1564,
        passed: 1642
    },
    {
        first: 'Marie',
        Last: 'Curie',
        year: 1867,
        passed: 1934
    },
    {
        first: 'Johannes',
        Last: 'Kepler',
        year: 1571,
        passed: 1630
    },
    {
        first: 'Nicolaus',
        Last: 'Copernicus',
        year: 1473,
        passed: 1543
    },
    {
        first: 'Max',
        Last: 'Planck',
        year: 1858,
        passed: 1947
    }
]

const people = [
    'Beck, Glenn',
    'Becker, Carl',
    'Becket, Samuel',
    'Beddoes, Mick',
    'Beecher, Henry',
    'Bethoven, Ludwig',
    'Begin, Menachem',
    'Belloc, Hilaire',
    'Bellow, Saul',
    'Benchley, Robert',
    'Benenson, Peter',
    'Ben-Gurion, David',
    'Benjamin, Walter',
    'Benn, Tony',
    'Bennington, Chester',
    'Benson, Leana',
    'Bent, Silas',
    'Bentsen, Lloyd',
    'Berger, Ric',
    'Bergman, Ingmar',
    'Berio, Luciano',
    'Berle, Wilton',
    'Berlin, Irving',
    'Berne, Eric',
    'Berhard, Sandra',
    'Berra, Yogi',
    'Berry, Halle',
    'Berry, Wendell',
    'Bethea, Erin',
    'Bevan, Aneurin',
    'Bevel, ken',
    'Biden, Joseph',
    'Bierce, Androse',
    'Biko, Steve,',
    'Billings, Josh',
    'Biondo, Frank',
    'Birrell, Augustine',
    'Black, Elk',
    'Blair, Robert',
    'Blair, Tony',
    'Blake, William'
];

// Array prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const fifteen = inventors.filter(inventor => {
    if ((inventor.year >= 1500) && (inventor.year <= 1600)) {
        return true; //keep it
    };
})
console.table(fifteen);



// Array prototype.map()
// 2. Give us an array of the inventory first and last name

const fullNames = inventors.map(inventor => inventor.first + ' ' + inventor.Last);
console.table(fullNames);




// Array prototype.sort()
// 3. Sort the inventor by birthdate, oldest to youngest

const ordered = inventors.sort(function(firstPerson, secondPerson) {
    if (firstPerson.year > secondPerson.year) {
        return 1;
    } else {
        return -1;
    }
})
console.table(ordered);




// Array prototype.reduce()
// 4. How many years did all the inventors live?

const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year)
}, 0)

console.log(totalYears);



// 5. Sort the inventors by years lived

const oldest = inventors.sort((a, b) => {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;

    if (lastGuy > nextGuy) {
        return -1;
    } else {
        return 1;
    }
})

console.table(oldest)



// 6. sort exerice
// Sort the people alphabetically by last name

const alpha =  people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    
    if (aLast > bLast) {
        return 1;
    } else {
        return -1
    }
})
console.table(alpha);

// 7. reduce Exercise
// Sum up the instances of each of these

const data = [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck',
    'motorcicle'
]

const transportation = data.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 0;
    }

    obj[item]++;
    return obj;
}, [])

console.table(transportation);

