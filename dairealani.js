const args = process.argv.slice(2)

function alan(r){

    let dairealan =((Math.PI) *r *r)
    return `yarıcapı ${r} olan dairenin alanı ${dairealan}`
    
}
console.log(alan(args[0]))

//x = istediğiniz herhangi bir sayıyı belirtiniz
//lütfen konsola: node dairealani x



