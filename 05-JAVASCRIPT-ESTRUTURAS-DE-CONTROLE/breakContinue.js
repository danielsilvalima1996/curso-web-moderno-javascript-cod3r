const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (const x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`);
}

for (const y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`);
}

// break saí do bloco, para for, while e switch
// continue saí do item atual e vai para o próximo, para for, while e switch

externo: 
for (const a in nums) {
    for (const b in nums) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`);
    }
}
// não usar esse tipo de estrutura!!!