// Write your code below
function printLeftHalfPyramid(): void {
    let n = Number(process.argv.slice(2));
    for (let i: number = 1; i <= n; i++) {
        let row: string = '';
        for (let j: number = i; j <= n-i; j++) {
            row += ' ';
        }
        for (let k: number = i; k >= i; k++) {
            row += k ;
        }
        console.log(row);
    }
}

printLeftHalfPyramid();