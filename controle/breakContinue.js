const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(indice in nums){
    if (indice == 5){
        break
    }
    console.log(`${indice} = ${nums[indice]}`)
}

for (indice in nums){
    if(indice == 5){
        continue
    }
    console.log(`${indice} = ${nums[indice]}`)
}

externo:
for (a in nums){
    for (b in nums){
        if(a == 2 && b == 3){
            break externo
        }
        console.log(`Par = ${a}, ${b}`)
    }
}