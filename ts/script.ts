// 1. feladat
function PhErtek(vizsgaltErtek: number): string {
    if (vizsgaltErtek === 7) {
        return "semleges";
    } else if (vizsgaltErtek < 7) {
        return "savas";
    } else {
        return "lugos";
    }
}

// 2. feladat
function PrimekSzama(vizsgaltTomb: number[]): number {
    function isPrime(num: number): boolean {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;

        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }

    let count = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (isPrime(vizsgaltTomb[i])) {
            count++;
        }
    }
    return count;
}

// 3. feladat
function MaganHangzokSzama(vizsgaltSzoveg: string): number {
    const maganhangzok: string[] = ['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'ö', 'ő', 'u', 'ú', 'ü', 'ű'];
    let count = 0;
    for (let i = 0; i < vizsgaltSzoveg.length; i++) {
        if (maganhangzok.includes(vizsgaltSzoveg[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}

// Tesztesetek
console.log(PhErtek(5)); // Kimenet: savas
console.log(PhErtek(7)); // Kimenet: semleges
console.log(PhErtek(9)); // Kimenet: lúgos

console.log(PrimekSzama([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Kimenet: 4 (2, 3, 5, 7)

console.log(MaganHangzokSzama("Almafa")); // Kimenet: 3 (a, a, a)
