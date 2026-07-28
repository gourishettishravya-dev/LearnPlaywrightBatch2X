let env = "staging"; //gloabal scope
function setupConfig() {
    let timeout = 3000; // local scope
    console.log(env); // can access global
    console.log(timeout); // can access loacal
}
setupConfig();
console.log(env);
console.log(timeout);