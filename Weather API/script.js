function getInputValue()
{
    var inputVal = document.getElementById("myInput").value;
    // alert(inputVal);

    // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=0b981b72e95bf4758a6b4680401e65b7`, { method: "GET" })
    //     .then(res => res.json())
    //     .then(res => console.log(res))

    fetch(`https://restcountries.eu/rest/v2/all`, { method: "GET" })
        .then(res => res.json())
        .then(res =>
        {
            res.map((data) =>
            {
                const { name, region, flag, capital } = data;
                if (name == inputVal)
                {
                    document.getElementById("region").innerHTML = region;
                    document.getElementById("capital").innerHTML = capital;
                    document.getElementById("image").src = flag;
                }

            })
        })

    // var req = new XMLHttpRequest();

    // // req.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=0b981b72e95bf4758a6b4680401e65b7', true);
    // req.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=0b981b72e95bf4758a6b4680401e65b7`, true)
    // // Sendind the request
    // req.send();
    // // load the function
    // //This function will bw triggered only when 
    // req.onload = function ()
    // {
    //     var country = JSON.parse(this.response);


    //     // console.log(country)



    //     var x;
    //     var Asian_country = country.filter(x = (x) => (x.name === inputVal) ? x.capital : inputVal);
    //     console.log(x);
    //     // var Asian = country.map((name, flag) => x.name === inputVal);
    //     // console.log(Asian)
    //     var h = "https://restcountries.eu/data/aus.svg";
    //     // document.getElementById("image").src = h;
    // }
}