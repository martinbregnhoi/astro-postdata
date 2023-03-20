const url = "https://dvmptwdziademulaatzd.supabase.co/rest/v1/test_products"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2bXB0d2R6aWFkZW11bGFhdHpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg2OTc1MTMsImV4cCI6MTk5NDI3MzUxM30.89WAyrAnFikazYnvmF6-hyrpZt58wAyRMAw78SeHOhk"
function hentData(){fetch(url, {
    method:"GET",
    headers: {
        apikey: key,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
       
    },
})
.then(res=>res.json())
.then(showData)
}
function showData(items){
    console.table(items)
    document.querySelector("ul").innerHTML ="";
    items.forEach(e => {
        document.querySelector("ul").innerHTML += "<li>"+e.name+" pris: "+e.price+" kr</li>"
        
    });
}

const form = document.querySelector("#myForm");
form.addEventListener("submit", submitform);

function submitform(event){
    event.preventDefault();//forhindrer refresh
    const formData = form.elements;
    let name = formData.name.value;
    let price = formData.price.value;
    //saml evt data i const
    //document.querySelector("#myForm").reset();
fetch(url, {
    method:"POST",
    headers: {
        apikey: key,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
       
    },
    body:JSON.stringify({ name, price }),
})
.then(hentData)

}
hentData();