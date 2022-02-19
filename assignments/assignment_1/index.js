const readline= require("readline")

function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    const name=process.argv[process.argv.length-1];
    return name
}

function getNameFromEnv() {
    // Write your code here
    var name2=process.env.name;
    return name2
}

function getNameFromReadLine() {
    // Write your code here
    const read = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    })

    var Names = ""
    read.question("",name=> {
        Names = name
        read.close()    
    })
    return Names


}


module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}