    alert("Dit is een spel waarbij u keuze's zal gaan moeten maken. Denk bij elke keuze goed na, want iedere keuze heeft een invloed op wat later in het verhaal gaat gebeuren!");

        var keuze = prompt("Je begint in een kamer. Je kijkt om je heen en je ziet dat er een brief op de tafel ligt. Je loopt naar de tafel en leest de brief. In de brief staat: Welkom bij het spel. Na even spelen zal je snel erachter komen wat het doel is. kies je de deur aan de linker of aan de rechter kant.","linkerdeur of rechterdeur");
        if(keuze == "linkerdeur"){
            keuze = prompt("Je komt in de volgende kamer en ziet dat er een deur naar buiten is, je gaat door de deur en je ziet dat het gebouw waar je uit komt een grote villa is. De deur blijft achter je open staan. Nu heb je een keuze: volg je het pad wat je het bos in ziet gaan, of ga je terug de villa in?", "Pad volgen of Terug om verder te verkennen");
            }
            
            if(keuze == "Terug om verder te verkennen"){
                keuze = prompt("Je komt in de volgende kamer en ziet dat er een kaart ligt. Je bekijkt de kaart en je ziet dat het een schatkaart is, die begint bij een groot gebouw en eindigt in een rivier. Je ziet ook dat er 2 deuren zijn, eentje die naar buiten gaat en een die naar een andere kamer gaat, verder het huis in. Kies je om de schatkaart te gaan volgen, of ga je verder het huis verkennen?", "schatkaart volgen of verder gaan met het huis verkennen")
                    }
                    
                    if(keuze == "schatkaart volgen"){
                        keuze = prompt("Je gaat naar buiten en loopt het pad uit, na 35 minuten kom je bij een rivier aan. Je herkent deze rivier van je kaart en kijkt op je kaart waar je schat zou moeten liggen. Je ziet dat de schat aan de andere kant van de rivier moet liggen. Je hebt nu de keuze om naar de overkant te zwemmen, of om naar de boot te lopen die je in de verte ziet liggen.", "Naar de overkant zwemmen of met de boot naar de overkant")
                        }
                    
                        if (keuze == "Naar de overkant zwemmen"){
                            alert("Je zwemt naar de overkant en vindt de schat, je leeft nog een lang gelukkig leven met het geld dat je vind in de schat.")
                        }

                        else if(keuze == "met de boot naar de overkant"){
                            alert("Je loopt naar de boot en gebruikt de boot om naar de andere kant te varen. Toen je midden op het water dreef, kwam er een grote golf aan. Je boot slaat om en je sterft.")
                        
                        }
                    else if(keuze == "verder gaan met het huis verkennen"){
                        alert("Je gaat verder het huis in, je komt in een volgende kamer maar er is geen licht. Je zoekt het lichtknopje om het licht aan te zetten. Je vind hem en drukt er op. Een halve seconde nadat je er op drukt valt er een kroonluchter op je hoofd, dit overleef je niet. Einde spel.")
                    }
            else if(keuze == "Pad volgen"){
                keuze = prompt("Je loopt het bos in en loopt voor een half uur het pad uit, je begint nu te twijfelen aan je keuze. Kies je er voor om verder te lopen, of ga je terug naar de villa om te kijken wat er in de andere kamers is?","doorlopen of terug om de andere kamers te verkennen")
                    if(keuze == "terug om de andere kamers te verkennen"){
                        alert("Je hebt er voor gekozen om terug te gaan, onderweg terug naar het huis kom je een beer tegen. De beer ziet je en je begint te vluchten voor de beer. Je kan het huis al in de verte zien, maar als je dichterbij komt schrik je. De deur zit dicht en je hebt nergens om heen te gaan. Je wordt opgegeten door de beer.")
                    }
            }
            
        else if(keuze == rechterdeur){
            keuze = prompt("Je komt in de volgende kamer en ziet dat er een kaart ligt. Je bekijkt de kaart en je ziet dat het een schatkaart is, die begint bij een groot gebouw en eindigt in een rivier. Je ziet ook dat er 2 deuren zijn, eentje die naar buiten gaat en een die naar een andere kamer gaat, verder het huis in. Kies je om de schatkaart te gaan volgen, of ga je verder het huis verkennen?", "schatkaart volgen of verder gaan met het huis verkennen")
                }
                if(keuze =="schatkaart volgen"){
                   keuze = prompt("Je gaat naar buiten en loopt het pad uit, na 35 minuten kom je bij een rivier aan. Je herkent deze rivier van je kaart en kijkt op je kaart waar je schat zou moeten liggen. Je ziet dat de schat aan de andere kant van de rivier moet liggen. Je hebt nu de keuze om naar de overkant te zwemmen, of om naar de boot te lopen die je in de verte ziet liggen.", "Naar de overkant zwemmen of met de boot naar de overkant") 
                  }
                    if (keuze == "Naar de overkant zwemmen"){
                        alert("Je zwemt naar de overkant en vindt de schat, je leeft nog een lang gelukkig leven met het geld dat je vind in de schat.")
                    }
                    else if(keuze == "met de boot naar de overkant"){
                        alert("Je loopt naar de boot en gebruikt de boot om naar de andere kant te varen. Toen je midden op het water dreef, kwam er een grote golf aan. Je boot slaat om en je sterft.")
                    }
                    
                else if(keuze == "verder gaan met het huis verkennen"){
                    alert("Je gaat verder het huis in, je komt in een volgende kamer maar er is geen licht. Je zoekt het lichtknopje om het licht aan te zetten. Je vind hem en drukt er op. Een halve seconde nadat je er op drukt valt er een kroonluchter op je hoofd, dit overleef je niet. Einde spel.")
                }