let todo = [];
let req = prompt("Please your Choice");

while (true) {
    if (req == "quit") {
        console.log("Quiting app")
        break;
    }

    if ( req == "list") {
        for ( let i = 0 ; i<todo.length ; i++) {
            console.log(i, todo[i])
            
        }
    }else if(req == "add"){
        let task = prompt("please enter task");
        todo.push(task);
        console.log("Task aded")

}else if( req == "delete"){
    let idx = prompt("Please enter the index")
    todo.splice(idx,1);
    console.log("task deleted")


}

    req = prompt("Please your Choice");
}