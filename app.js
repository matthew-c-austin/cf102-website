    /* This function prompts the user for their name and displays a greeting in the header. */
    function namePrompt() {
        let userName;
        valid = false
        do {
            userName = prompt("What is your name Adventurer?") 
            if (isValidName(userName) == true) {
                valid = true;
            } else {
                alert('Invalid name. Name must start with a letter and contain only alphabetic characters and can be first name/last name.')
            }
        }
        while (!valid)
        greeting = document.write ("Hello Adventurer " + userName + ", welcome to NPC Village")
    }

    /*This function uses Regex to see if the input name is valid. 
    Number characters and special characters are invalid.
    One whitepsace is valid (first name/last name). Name must start with a letter.*/
    function isValidName(str) {
        return (/^[a-zA-Z]+ [a-zA-Z]+$/.test(str) || /^[a-zA-Z]+$/.test(str))
    }

    /* This function prompts the user to confirm that they want to change the NPC name, and if so,
    replaces all occurrences of the previous name with the prompted name in the HTML. */
    function npcNameQuery() {
        let npcName = document.getElementById('npcName').innerHTML
        changeName = confirm("Do you want to change the NPC's name? It is currently " + npcName + ".")
        if (changeName === true) {
            let npcName = prompt("What do you want your NPC's name to be?")
            document.head.innerHTML = document.head.innerHTML.replaceAll('Guildenstern',npcName)
            document.body.innerHTML = document.body.innerHTML.replaceAll('Guildenstern',npcName) 
        } 
    }

    /* This function waits for 30 seconds and then prompts the user to guess the NPC's age. 
    It uses a string value from the document and slices off the non-numeric characters to compare against
    the guess. */
    function ageQuiz() {
            let guessAge = prompt("What is the NPC's age?")
            let stringAge = document.getElementById('stringAge').innerHTML
            /* Quick and dirty way to trim off the "Age: " text...it's the first JavaScript assginment this is fine right :*) */
            const magicNumber = 5 
            const age = stringAge.slice(magicNumber);
            console.log(age)
            if (guessAge === age) {
                alert("You're a genius!")
            } else {
                alert("Nope!")
            }
        }