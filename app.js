    /* This function prompts the user for their name and writes a greeting. */
    function greeting() {
        const userName = namePrompt("What is your name Adventurer?");
        /* If the user cancels the prompt without entering a name just return a generic greeting. */
        if (userName === null) {
            document.write("Hello Adventurer, welcome to NPC Village"); 
        } else {
            document.write("Hello Adventurer " + userName + ", welcome to NPC Village");
        }
    }

    /* This function prompts the user for a generic name and returns that name if it is valid. */
    function namePrompt(namePromptQuery) {
        let userName;
        let valid = false;
        do {
            userName = prompt(namePromptQuery); 
            if (isValidName(userName)) {
                valid = true;
            } else {
                alert('Invalid name. Name must start with a letter and contain only alphabetic characters and can be first name/last name.')
            }
        }
        while (!valid);
        return userName;
    }

    /*This function uses Regex to see if the input name is valid. 
    Number characters and special characters are invalid.
    One whitepsace is valid (first name/last name). Name must start with a letter.*/
    function isValidName(str) {
        return (/^[a-zA-Z]+\s[a-zA-Z]+$/.test(str) || /^[a-zA-Z]+$/.test(str));
    }

    /* This function prompts the user to confirm that they want to change the NPC name, and if so,
    replaces all occurrences of the previous name with the prompted name in the HTML. */
    function npcNameChange() {
        let npcName = document.getElementById('npcName').innerHTML;
        const changeName = confirm("Do you want to change the NPC's name? It is currently " + npcName + ".")
        if (changeName === true) {
            const npcName = namePrompt("What do you want your NPC's name to be?");
            document.head.innerHTML = document.head.innerHTML.replaceAll('Guildenstern',npcName);
            document.body.innerHTML = document.body.innerHTML.replaceAll('Guildenstern',npcName) ;
        } 
    }

    /* This function prompts the user to guess the NPC's age. 
    It uses a defined span in the html for the NPC's age. */
    function ageQuiz() {
            const guessAge = prompt("What is the NPC's age?");
            const age = document.getElementById('npcAge').innerHTML;
            /* Quick and dirty way to trim off the "Age: " text...it's the first JavaScript assginment this is fine right :*) */
            if (guessAge === age) {
                alert("You're a genius!");
            } else {
                alert("Nope!");
            }
        }

    /* A function to prompt the user for an NPC rating out of five gold coins...I thought about adding 
    options for the namePrompt(like .goldCoin and .userName) but it's honestly just quicker to write it here for now.
    I'll make classes and methods in a later course.*/
    function rateMyPage() {
        let rating;
        let coins = '';
        let valid = false;
        do {
            rating = prompt("On a scale of 1-5, how many gold pieces would you give this NPC?");
            /* Make sure the rating is an integer between 1 and 5 */
            rating = Number(rating)
            if (Number.isInteger(rating) && rating > 0 && rating <= 5) {
                valid = true;
            } else {
                alert('Invalid number of coins dummy. Enter a whole number between 1 and 5');
            }
        }
        while (!valid);

        for (let i = 0; i < rating; i++) {
            coins += "<img class='goldCoins' src='Images/Gold Coin.png' alt='Gold Coin'>";   
        }

        return document.write(coins);
    }