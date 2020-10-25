const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}


while (i > funcs.length){
    funcs[i]()
    i--
}

funcs[2]()
funcs[8]()