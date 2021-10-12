function dictionary() {
    let cc = document.getElementById("cname").value;
    console.log(cc);

    async function foo1() {
        let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${cc}`);
        console.log(data);
        let result = await data.json();
        // console.log(result);

        for (var i in result) {
            document.getElementById("main").style.fontWeight = "900";
            document.getElementById("main").innerHTML = `Input Word:- ${cc}<br><br>
        Dictionary Word:- ${result[i].word}<br><br>
        Phonetic:- ${result[i].phonetic}<br><br>
        Origin:- ${result[i].origin}<br><br>
        Part of Speech:- ${result[i].meanings[0].partOfSpeech}<br><br>
        Defination:- ${result[i].meanings[0].definitions[0].definition}`;
            //     console.log(`${cc}:${result[i].word}:${result[i].phonetic}:${result[i].origin}`);

        }

    }
    foo1();
}