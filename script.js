
function counter(){
	const input=document.getElementById("textarea").value
    const res=document.getElementById("result")
	let a=input.split(' ').filter(y=> y!="" );
	let c=input.split("").filter( x=> x!=" "&& x!="\n");
    let b=`${a.length} words
	       ${c.length} characters`
    res.classList.remove("hide")
	res.innerHTML=b
}
function erase(){
	document.getElementById("textarea").value=""
	document.getElementById("result").innerHTML=""
}