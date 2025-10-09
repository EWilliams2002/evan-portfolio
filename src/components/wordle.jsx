import React, { useEffect } from 'react';

import '../style/Wordle.css';

import TileRow from './tinyComp/tileRow'
import Keyboard from './tinyComp/keyboard'

export default function Wordle(props) {

    useEffect(() => {
        function handleKeyDown(e) {
            let key = e.key;
            // Map Enter and Backspace to your button labels
            if (key === "Enter") {
                updateTiles("Enter");
            } else if (key === "Backspace") {
                updateTiles("←");
            } else if (/^[a-zA-Z]$/.test(key)) { // Single letter
                updateTiles(key.toUpperCase());
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        // Clean up
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    let totalGuess = 6;



    let currWord = "Valid".toUpperCase();
    

    var validSpots = [];
    var validLetters = [];
    var nonValid = [];
    var clicks = [];

    let wordleGame = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ];

    var currentRow = 0;
    var currentCol = 0;
   
    var wordCheck = true;

    function changeColor(clicked_id) {
    /*
            Description: This function changes the color of
                        the tiles to reflect the users progress

            Parameters: clicked_id - the letter the user just clicked

        */

        // This chunk updates the colors of the previous rows' tiles so that the
        // user knows which letters the got in the right spot and which ones were valid
        if (currentRow === 5 && clicked_id === "Enter") {
        
            for (var t = 0; t < validLetters.length; t++) {
                wordCheck = false;
                validLetters[t].style.backgroundColor = "#dada00";
            }

            for (var r = 0; r < validSpots.length; r++) {
                validSpots[r].style.backgroundColor = "green";
            }

            currentCol++;
            currentRow = 0;
        }

        for (var y = 0; y < nonValid.length; y++) {
            wordCheck = false;

            document.getElementById(nonValid[y]).style.visibility = "hidden";
        }

        validSpots = [];
        validLetters = [];
        nonValid = [];
        clicks = [];

    }

    function runBackspace() {
    /*
            Description: This resets the board to
                        all of its previous states
                        when the user wants to backspace

            Parameters: n/a

        */

        let clicked = clicks[currentRow - 1];
        clicks.pop();

        wordleGame[currentCol][currentRow - 1] = "";

        if (currWord.includes(clicked)) {

            if (currWord[currentRow - 1] == clicked) {
                validSpots.pop();
            } else {
                validLetters.pop();
            }

        } else {
            nonValid.pop();
        }

        currentRow--;
        let rows = document.querySelectorAll(".row");
        let currentTile = rows[currentRow].querySelectorAll("div")[currentCol];
        
        // currentRowElement = rows[currentRow];
     
        
        currentTile.innerText = "";

    }

    function checkRightWord(clicked_id, finalRow = false) {
    /*
            Description: This function checks if the guessed word
                        is the correct word or not.

            Parameters: username - name of the current user
                        clicked_id - the letter that the user just clicked
                        finalRow - if the user is on the final row or not
                        sim - if the clinet code ran updateTiles to get to 
                            this function

        */
        var guessedWord = "";

        if (finalRow) {
            for (var w = 0; w < wordleGame[currentCol - 1].length; w++) {
                guessedWord += wordleGame[currentCol - 1][w];
            }
        } else {
            for (var w = 0; w < wordleGame[currentCol].length; w++) {
                guessedWord += wordleGame[currentCol][w];
            }
        }

        if (guessedWord.trim() == currWord.trim()) {
            // wordFalse = true;
            

            // fetch(url)
            //   .then((response) => {
            //     return response.text();
            //   })
            //   .then((text) => {
            //     createWordleGame();
            //     logGame(username, "true");

            //     if (currMode != "practice") {
            //       document.getElementById(currMode).onclick = "";
            //       document.getElementById(currMode).innerText = "Unlocks at Midnight";
            //     }

            //     totalGuess = 6;
            //     closeGame(false);

            //   });
            changeColor(clicked_id);
            console.log('correct word')
    
            return true;
            
        } else {

            if (finalRow) {
            //   createWordleGame();
            //   logGame(username, "false");

                // if (currMode != "practice") {
                //     document.getElementById(currMode).onclick = "";
                // }

                totalGuess = 6;
                console.log('to closegame()')
                
                // closeGame(true);
            }
            changeColor(clicked_id);
            console.log('wrong word final row')
            
            return false
        }

    

    }


    function updateTiles(clicked_id) {
        // console.log("clicked tiles:", clicked_id);
        // /*
        //         Description: This function runs every time 
        //                     a button is pressed and reflects
        //                     the letter pressed in the grid and
        //                     logs the users current native/active
        //                     game progress

        //         Parameters: clicked_id - the id of the button just pressed
        //                                 which is also the letter tied to the
        //                                 button
        //                             sim - if the function was ran from the user typing
        //                                 or through function loadGame() on site load

        //     */

        //   username = readCookieVal(document.cookie.split("%22"))[0];
        
      
        //   if (currMode == "standard" && !sim) {
        //     overCheck = standardGameOver;
        //   }
        //   if (currMode == "challenging" && !sim) {
        //     overCheck = challengeGameOver;
        //   }

        

        if (currentRow == 5) {
            console.log('currentRow == 5')

            if (clicked_id === "Enter") {
                var wordRight = checkRightWord(clicked_id, false);

                if (wordRight) {
                    // clearWordleState();
                    return;
                }

                // this minuses the guess amount
            
                totalGuess--;
                

                // this runs if they get pass the las
                if (currentCol == 6 && !wordRight) {
                    console.log('to closegame()')
                    // clearWordleState();
                }
                console.log('click_id == Enter')

            }

            if (clicked_id === "←" && currentRow >= 1) {
                runBackspace();
            }

        } else {
            console.log('else')
            if (clicked_id === "←" && currentRow >= 1) {
                runBackspace();
            }

            // this runs when theu press something and if they havent gotten to at most the last row, 
            // didnt press backspace or enter and the game isnt over
            if (
                currentRow <= 5 &&
                clicked_id !== "←" &&
                clicked_id !== "Enter"
            ) {
                console.log('clicks.push')
                clicks.push(clicked_id);

                let rows = document.querySelectorAll(".row");
                console.log('rows:', rows)
                
                let currentRowElement = rows[currentRow];
                console.log('currentRowElement:', currentRowElement)
                
                if (currentRowElement) {
                    console.log('currentRowElement exists');
                    let currentTile = rows[currentRow].querySelectorAll("div")[currentCol];
                    var word;
                    word = currWord;

                    if (word.includes(clicked_id)) {

                        if (word[currentRow] == clicked_id) {
                            validSpots.push(currentTile);
                        } else {
                            validLetters.push(currentTile);
                        }

                    } else {
                        nonValid.push(clicked_id);
                    }

                    wordleGame[currentCol][currentRow] = clicked_id;
                    console.log('logging tile:', clicked_id)
                    currentTile.textContent = clicked_id;
                    currentRow++;
                    
                }
                
            }
        }
        

        console.log(wordleGame);
        console.log("currentRow: " + currentRow);
        console.log("currentCol: " + currentCol);
        
    }





    // function saveWordleState() {
    //     const state = {
    //         wordleGame,
    //         currWord,
    //     };
    //     sessionStorage.setItem("wordleState", JSON.stringify(state));
    // }

    
    // window.saveWordleState = saveWordleState;
    // console.log('assigning saveWordleState to window')

    // function loadWordleState() {
    //     const saved = sessionStorage.getItem("wordleState");
    //     if (saved) {
    //         const state = JSON.parse(saved);
    //         wordleGame = state.wordleGame;
    //         currWord = state.currWord;

    //         for (let r = 0; r < wordleGame.length; r++) {
    //             let hadContent = false;

    //             for (let c = 0; c < wordleGame[r].length; c++) {
                    
    //                 const letter = wordleGame[r][c];
    //                 console.log('letter' + letter)
    //                 console.log(letter != "")
    //                 if (letter != "") {
    //                     updateTiles(wordleGame[r][c]);
    //                     hadContent = true;
    //                 }
                    
    //                 console.log('replaying tile:', wordleGame[r][c])
    //             }

    //             if (hadContent) {
    //                 updateTiles("Enter");
    //                 console.log('LOGGGG enter')
    //             }

    //         }
    //     }

    // }
    // loadWordleState();
    // console.log('loaded wordle state if it existed')

    // function clearWordleState() {
    //     sessionStorage.removeItem("wordleState");
    // }














    return (
        <div id="home" className={props.navState ? "open-home" : "closed-home"}>
            

            
                

            <div id="wordle" class='home-text'>





















                
















                

                <div id="board">

                    <div id="letterTiles">

                        <TileRow/>
                        <TileRow/>
                        <TileRow/>
                        <TileRow/>
                        <TileRow/>

                    </div>
                    

                    <div id="keyboard">

                        <Keyboard 
                            clicked={updateTiles}
                            
                        />

                    </div>

                </div>

                <div id="outerUI">


















                    <div id="gameHistory">

                        <h3>Game History</h3>

                        <table id="gamesHists">

                        <tr class="gameHistsDt">
                            <th class="gameHistsDt">Mode</th>
                            <th class="gameHistsDt">Word</th>
                            <th class="gameHistsDt">Result</th>
                        </tr>

                        <tr class="gameHistsDt">
                            <td id="mode0" class="gameHistsDt">-</td>
                            <td id="word0" class="gameHistsDt">-</td>
                            <td id="result0" class="gameHistsDt">-</td>
                        </tr>

                        <tr class="gameHistsDt">
                            <td id="mode1" class="gameHistsDt">-</td>
                            <td id="word1" class="gameHistsDt">-</td>
                            <td id="result1" class="gameHistsDt">-</td>
                        </tr>

                        <tr class="gameHistsDt">
                            <td id="mode2" class="gameHistsDt">-</td>
                            <td id="word2" class="gameHistsDt">-</td>
                            <td id="result2" class="gameHistsDt">-</td>
                        </tr>

                        <tr class="gameHistsDt">
                            <td id="mode3" class="gameHistsDt">-</td>
                            <td id="word3" class="gameHistsDt">-</td>
                            <td id="result3" class="gameHistsDt">-</td>
                        </tr>

                        <tr class="gameHistsDt">
                            <td id="mode4" class="gameHistsDt">-</td>
                            <td id="word4" class="gameHistsDt">-</td>
                            <td id="result4" class="gameHistsDt">-</td>
                        </tr>

                        <tr class="gameHistsDt">
                            <td id="mode5" class="gameHistsDt">-</td>
                            <td id="word5" class="gameHistsDt">-</td>
                            <td id="result5" class="gameHistsDt">-</td>
                        </tr>

                        </table>
                        

                    </div>

                </div>
















                







            </div>

            

            {/* <div id="Leaderboard">

                <h2>Leaderboards</h2>

                <h3>Standard</h3>

                <table id="standardTable">

                    <tr>
                        <th>Player Name</th>
                        <th>Score</th>
                        <th>Games Played</th>
                        <th>Games Won</th>
                    </tr>

                </table>

                <br></br>
                <br></br>

                <h3>Challenging</h3>

                <table id="challengeTable">

                    <tr>
                        <th>Player Name</th>
                        <th>Score</th>
                        <th>Games Played</th>
                        <th>Games Won</th>
                    </tr>

                </table>

                <br></br>
                <br></br>

            </div> */}
        </div>






























      
    )
}


