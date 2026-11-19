async function init() {
    const response = await fetch("./patrons.json")
    const adatok = await response.json()

    for (const adat of adatok)
    {
        const Tb = document.getElementById('tb');
        const tbo = document.getElementById('tbod')
        const tr = document.createElement('tr')
        const subscr = document.createElement('td')
        const prem = document.createElement('td')
        const paid = document.createElement('td')
        const Main = document.getElementById('main')
        const al = document.createElement('div')
        const main_div = document.getElementById('m')

        subscr.textContent = adat.subscriber;
        prem.textContent = adat.premium;
        paid.textContent = adat.paid_total + "$";
        al.classList = "alert alert-info"
        al.role = "alert"
        al.textContent = "Karbantartás van, ezért a funkció átmenetlieg nem elérhető"
        
        

        if(prem.textContent == "false")
        {
            prem.textContent = "❌";
        }
        else if(prem.textContent == "true" && adat.paid_total > 800)
        {
            prem.textContent = "✅";
            prem.style.backgroundColor = "Gold";
            subscr.style.backgroundColor = "Gold";
            paid.style.backgroundColor = "Gold";
        }
        else
        {
            prem.textContent = "✅";
        }

        prem.addEventListener("click", () => {
            Main.appendChild(al)
            setTimeout(() => {
                Main.removeChild(al)
            }, 5000);
            
        })


        tr.appendChild(subscr)
        tr.appendChild(prem)
        tr.appendChild(paid)
        tbo.appendChild(tr)
        Tb.appendChild(tbo)
        main_div.appendChild(Tb)
        
    }

    
}
init();