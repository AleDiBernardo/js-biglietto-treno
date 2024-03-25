# Calcolo del prezzo del biglietto del treno :train:

## Consegna

Il *programma* dovrà chiedere all'utente il numero di **chilometri** che vuole percorrere e l'**età** del passeggero.

Sulla base di queste informazioni dovrà **calcolare il prezzo totale del viaggio**, *secondo queste regole*:

- il **prezzo del biglietto** è definito in base ai **km** (0.21 € al km)
- va applicato uno **sconto** del **20% per i minorenni**
- va applicato uno **sconto** del **40% per gli over 65**.

L'output del **prezzo finale va messo** fuori **in forma umana** (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## TO-DO list

- [ ] Chiedere all'utente il numero di chilometri
- [ ] Chiedere all'utente la sua età 
- [ ] Struttura di controllo per capire le varie casistiche:
    - minorenne == sconto del 20%
    - maggiorenne == prezzo normale
    - over 65 == sconto del 40%
- [ ] Stampare il prezzo finale fissandolo a massimo due cifre dopo la virgola