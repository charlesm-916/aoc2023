import fs from 'fs';

function partOne(file) {
    const lines = fs.readFileSync(file, 'utf-8').trim().split('\n')
    const values = lines
    .map((line) => {
        let value = 0
        let first = line.split('').find((v) => !Number.isNaN(Number(v)))
    
        let last = line.split('').findLast((v) => !Number.isNaN(Number(v)))

        return Number(first + last)
    })
    return values.reduce((s, v) => s + v)

}

function partTwo(file) {
    const lines = fs.readFileSync(file, 'utf-8').trim().split('\n')
    const values = lines
    .map((line) => {
        let value = 0
        let first = line.split('').find((v) => !Number.isNaN(Number(v)))
    
        let last = line.split('').findLast((v) => !Number.isNaN(Number(v)))

        return Number(first + last)
    })
    return values.reduce((s, v) => s + v)

}
console.log(partOne('./Example.txt'))
