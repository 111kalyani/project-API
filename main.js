document.getElementById("container").addEventListener("click", nameList)


function foo() {
    let cc = document.getElementById("pets").value;
    console.log(cc);

    async function foo1() {
        let data = await fetch(`https://game-of-thrones-quotes.herokuapp.com/v1/author/${cc}`);
        let result = await data.json();

        document.getElementById("name").innerHTML = `Name : ${result.character.name}`;
        document.getElementById("sentence").innerHTML = `Sentence : ${result.sentence}`;
        document.getElementById("house").innerHTML = `House : ${result.character.house.name}`;

    }

    foo1();
}

async function nameList() {
    console.log("inside nameList");
    let data = await fetch(`https://game-of-thrones-quotes.herokuapp.com/v1/characters`);
    let characters = await data.json();
    console.log(characters)
    var select = document.getElementById("pets");

    characters.map((character) => {
        var option = document.createElement("option");
        option.value = character.slug;
        option.text = character.name.charAt(0).toUpperCase() + character.name.slice(1);
        select.appendChild(option);
    }) 
        
    var label = document.createElement("label");
    label.innerHTML = "Choose your member: "
    label.htmlFor = "pets";

    document.getElementById("container").appendChild(label).appendChild(select);
}
nameList();
