// import React, { useEffect } from 'react';

// import '../style/Wordle.css';

// import TileRow from './tinyComp/tileRow'
// import Keyboard from './tinyComp/keyboard'

// export default function Wordle(props) {

//     useEffect(() => {
//         function handleKeyDown(e) {
//             let key = e.key;
//             // Map Enter and Backspace to your button labels
//             if (key === "Enter") {
//                 updateTiles("Enter");
//             } else if (key === "Backspace") {
//                 updateTiles("←");
//             } else if (/^[a-zA-Z]$/.test(key)) { // Single letter
//                 updateTiles(key.toUpperCase());
//             }
//         }
//         document.addEventListener("keydown", handleKeyDown);
//         // Clean up
//         return () => {
//             document.removeEventListener("keydown", handleKeyDown);
//         };
//     }, []);

//     let totalGuess = 6;



//     let currWord = "Valid".toUpperCase();
    

//     var validSpots = [];
//     var validLetters = [];
//     var nonValid = [];
//     var clicks = [];

//     let wordleGame = [
//     ["", "", "", "", ""],
//     ["", "", "", "", ""],
//     ["", "", "", "", ""],
//     ["", "", "", "", ""],
//     ["", "", "", "", ""],
//     ["", "", "", "", ""],
//     ];

//     var currentCol = 0;
//     var currentRow = 0;
   
//     var wordCheck = true;

//     var gameHistorySlots = 6

//     function changeColor(clicked_id) {
//     /*
//             Description: This function changes the color of
//                         the tiles to reflect the users progress

//             Parameters: clicked_id - the letter the user just clicked

//         */

//         // This chunk updates the colors of the previous rows' tiles so that the
//         // user knows which letters the got in the right spot and which ones were valid
//         if (currentCol === 5 && clicked_id === "Enter") {
        
//             for (var t = 0; t < validLetters.length; t++) {
//                 wordCheck = false;
//                 validLetters[t].style.backgroundColor = "#dada00";
//             }

//             for (var r = 0; r < validSpots.length; r++) {
//                 validSpots[r].style.backgroundColor = "green";
//             }

//             currentRow++;
//             currentCol = 0;
//         }

//         for (var y = 0; y < nonValid.length; y++) {
//             wordCheck = false;

//             document.getElementById(nonValid[y]).style.visibility = "hidden";
//         }

//         validSpots = [];
//         validLetters = [];
//         nonValid = [];
//         clicks = [];

//     }

//     function runBackspace() {
//     /*
//             Description: This resets the board to
//                         all of its previous states
//                         when the user wants to backspace

//             Parameters: n/a

//         */

//         let clicked = clicks[currentCol - 1];
//         clicks.pop();

//         wordleGame[currentRow][currentCol - 1] = "";

//         if (currWord.includes(clicked)) {

//             if (currWord[currentCol - 1] == clicked) {
//                 validSpots.pop();
//             } else {
//                 validLetters.pop();
//             }

//         } else {
//             nonValid.pop();
//         }

//         currentCol--;
//         let rows = document.querySelectorAll(".row");
//         let currentTile = rows[currentCol].querySelectorAll("div")[currentRow];
        
//         // currentColElement = rows[currentCol];
     
        
//         currentTile.innerText = "";

//     }

//     function checkRightWord(clicked_id, finalRow = false) {
//     /*
//             Description: This function checks if the guessed word
//                         is the correct word or not.

//             Parameters: username - name of the current user
//                         clicked_id - the letter that the user just clicked
//                         finalRow - if the user is on the final row or not
//                         sim - if the clinet code ran updateTiles to get to 
//                             this function

//         */
//         var guessedWord = "";

//         if (finalRow) {
//             for (var w = 0; w < wordleGame[currentRow - 1].length; w++) {
//                 guessedWord += wordleGame[currentRow - 1][w];
//             }
//         } else {
//             for (var w = 0; w < wordleGame[currentRow].length; w++) {
//                 guessedWord += wordleGame[currentRow][w];
//             }
//         }

//         if (guessedWord.trim() == currWord.trim()) {
//             // wordFalse = true;
            

//             // fetch(url)
//             //   .then((response) => {
//             //     return response.text();
//             //   })
//             //   .then((text) => {
//             //     createWordleGame();
//             //     logGame(username, "true");

//             //     if (currMode != "practice") {
//             //       document.getElementById(currMode).onclick = "";
//             //       document.getElementById(currMode).innerText = "Unlocks at Midnight";
//             //     }

//             //     totalGuess = 6;
//             //     closeGame(false);

//             //   });
//             changeColor(clicked_id);
//             console.log('correct word')
    
//             return true;
            
//         } else {

//             if (finalRow) {
//             //   createWordleGame();
//             //   logGame(username, "false");

//                 // if (currMode != "practice") {
//                 //     document.getElementById(currMode).onclick = "";
//                 // }

//                 totalGuess = 6;
//                 console.log('finalw row)')
                
//                 // closeGame(true);
//             }
//             changeColor(clicked_id);
//             console.log('guessed wrong word but still have guesses left')
            
//             return false
//         }

    

//     }


//     function updateTiles(clicked_id) {
//         // console.log("clicked tiles:", clicked_id);
//         // /*
//         //         Description: This function runs every time 
//         //                     a button is pressed and reflects
//         //                     the letter pressed in the grid and
//         //                     logs the users current native/active
//         //                     game progress

//         //         Parameters: clicked_id - the id of the button just pressed
//         //                                 which is also the letter tied to the
//         //                                 button
//         //                             sim - if the function was ran from the user typing
//         //                                 or through function loadGame() on site load

//         //     */

//         //   username = readCookieVal(document.cookie.split("%22"))[0];
        
      
//         //   if (currMode == "standard" && !sim) {
//         //     overCheck = standardGameOver;
//         //   }
//         //   if (currMode == "challenging" && !sim) {
//         //     overCheck = challengeGameOver;
//         //   }

        

//         if (currentCol == 5) {
//             // console.log('currentCol == 5')

//             if (clicked_id === "Enter") {
//                 var wordRight = checkRightWord(clicked_id, false);

//                 if (wordRight) {
//                     // clearWordleState();
//                     console.log('guessed right change word and reset')
//                     // document.getElementById("word" + ).innerText = "You got it!";

//                     if (gameHistorySlots > 0) {
//                         document.getElementById("word" + (gameHistorySlots - 1)).innerText = currWord;
//                         document.getElementById("result" + (gameHistorySlots - 1)).innerText = (6 - totalGuess) + "/5";
//                         gameHistorySlots--;
//                     } else {
//                         // shift everything up one
//                         for (var h = 0; h < 5; h++) {
//                             document.getElementById("word" + h).innerText = document.getElementById("word" + (h + 1)).innerText;
//                             document.getElementById("result" + h).innerText = document.getElementById("result" + (h + 1)).innerText;
//                         }
//                     }
//                     return;
//                 }

//                 // this minuses the guess amount
            
//                 totalGuess--;
                

//                 // this runs if they get pass the las
//                 if (currentRow == 6 && !wordRight) {
//                     console.log('didnt guess it right and no guesses left')
//                     // clearWordleState();
//                 }
//                 // console.log('click_id == Enter')

//             }

//             if (clicked_id === "←" && currentCol >= 1) {
//                 runBackspace();
//             }

//         } else {
//             // console.log('else')
//             if (clicked_id === "←" && currentCol >= 1) {
//                 runBackspace();
//             }

//             // this runs when theu press something and if they havent gotten to at most the last row, 
//             // didnt press backspace or enter and the game isnt over
//             if (
//                 currentCol <= 5 &&
//                 clicked_id !== "←" &&
//                 clicked_id !== "Enter"
//             ) {
//                 // console.log('clicks.push')
//                 clicks.push(clicked_id);

//                 let rows = document.querySelectorAll(".row");
//                 // console.log('rows:', rows)
                
//                 let currentColElement = rows[currentCol];
//                 // console.log('currentColElement:', currentColElement)
                
//                 if (currentColElement) {
//                     // console.log('currentColElement exists');
//                     let currentTile = rows[currentCol].querySelectorAll("div")[currentRow];
//                     var word;
//                     word = currWord;

//                     if (word.includes(clicked_id)) {

//                         if (word[currentCol] == clicked_id) {
//                             validSpots.push(currentTile);
//                         } else {
//                             validLetters.push(currentTile);
//                         }

//                     } else {
//                         nonValid.push(clicked_id);
//                     }

//                     wordleGame[currentRow][currentCol] = clicked_id;
//                     console.log('logging tile:', clicked_id)
//                     currentTile.textContent = clicked_id;
//                     currentCol++;
                    
//                 }
                
//             }
//         }
        

//         console.log(wordleGame);
//         console.log("currentCol: " + currentCol);
//         console.log("currentRow: " + currentRow);
        
//     }





//     // function saveWordleState() {
//     //     const state = {
//     //         wordleGame,
//     //         currWord,
//     //     };
//     //     sessionStorage.setItem("wordleState", JSON.stringify(state));
//     // }

    
//     // window.saveWordleState = saveWordleState;
//     // console.log('assigning saveWordleState to window')

//     // function loadWordleState() {
//     //     const saved = sessionStorage.getItem("wordleState");
//     //     if (saved) {
//     //         const state = JSON.parse(saved);
//     //         wordleGame = state.wordleGame;
//     //         currWord = state.currWord;

//     //         for (let r = 0; r < wordleGame.length; r++) {
//     //             let hadContent = false;

//     //             for (let c = 0; c < wordleGame[r].length; c++) {
                    
//     //                 const letter = wordleGame[r][c];
//     //                 console.log('letter' + letter)
//     //                 console.log(letter != "")
//     //                 if (letter != "") {
//     //                     updateTiles(wordleGame[r][c]);
//     //                     hadContent = true;
//     //                 }
                    
//     //                 console.log('replaying tile:', wordleGame[r][c])
//     //             }

//     //             if (hadContent) {
//     //                 updateTiles("Enter");
//     //                 console.log('LOGGGG enter')
//     //             }

//     //         }
//     //     }

//     // }
//     // loadWordleState();
//     // console.log('loaded wordle state if it existed')

//     // function clearWordleState() {
//     //     sessionStorage.removeItem("wordleState");
//     // }














//     return (
//         <div id="home" className={props.navState ? "open-home" : "closed-home"}>
            

            
                

//             <div id="wordle" class='home-text'>





                

//                 <div id="board">

//                     <div id="letterTiles">

//                         <TileRow/>
//                         <TileRow/>
//                         <TileRow/>
//                         <TileRow/>
//                         <TileRow/>

//                     </div>
                    

//                     <div id="keyboard">

//                         <Keyboard 
//                             clicked={updateTiles}
                            
//                         />

//                     </div>

//                 </div>

//                 <div id="outerUI">


















//                     <div id="gameHistory">

//                         <h3>Game History</h3>

//                         <table id="gamesHists">

//                         <tr class="gameHistsDt">
                            
//                             <th class="gameHistsDt">Word</th>
//                             <th class="gameHistsDt">Result</th>
//                         </tr>

//                         <tr class="gameHistsDt">
                            
//                             <td id="word5" class="gameHistsDt">-</td>
//                             <td id="result5" class="gameHistsDt">-</td>
//                         </tr>


//                         <tr class="gameHistsDt">
                            
//                             <td id="word4" class="gameHistsDt">-</td>
//                             <td id="result4" class="gameHistsDt">-</td>
//                         </tr>
                        

//                         <tr class="gameHistsDt">
                            
//                             <td id="word3" class="gameHistsDt">-</td>
//                             <td id="result3" class="gameHistsDt">-</td>
//                         </tr>

                        

//                         <tr class="gameHistsDt">
                            
//                             <td id="word2" class="gameHistsDt">-</td>
//                             <td id="result2" class="gameHistsDt">-</td>
//                         </tr>

                        

//                         <tr class="gameHistsDt">
                            
//                             <td id="word1" class="gameHistsDt">-</td>
//                             <td id="result1" class="gameHistsDt">-</td>
//                         </tr>



//                         <tr class="gameHistsDt">
                            
//                             <td id="word0" class="gameHistsDt">-</td>
//                             <td id="result0" class="gameHistsDt">-</td>
//                         </tr>

//                         </table>
                        

//                     </div>

//                 </div>







//             </div>

            

//             {/* <div id="Leaderboard">

//                 <h2>Leaderboards</h2>

//                 <h3>Standard</h3>

//                 <table id="standardTable">

//                     <tr>
//                         <th>Player Name</th>
//                         <th>Score</th>
//                         <th>Games Played</th>
//                         <th>Games Won</th>
//                     </tr>

//                 </table>

//                 <br></br>
//                 <br></br>

//                 <h3>Challenging</h3>

//                 <table id="challengeTable">

//                     <tr>
//                         <th>Player Name</th>
//                         <th>Score</th>
//                         <th>Games Played</th>
//                         <th>Games Won</th>
//                     </tr>

//                 </table>

//                 <br></br>
//                 <br></br>

//             </div> */}
//         </div>








      
//     )
// }

import React, { useEffect, useState } from 'react';

import '../style/Wordle.css';

import TileRow from './tinyComp/tileRow'
import Keyboard from './tinyComp/keyboard'

export default function Wordle(props) {
    // Track clicks and coloring arrays as refs so they persist across renders
    const clicksRef = React.useRef([]);
    const validSpotsRef = React.useRef([]);
    const validLettersRef = React.useRef([]);
    const nonValidRef = React.useRef([]);
    const wordCheckRef = React.useRef(true);
    const [gameHistorySlots, setGameHistorySlots] = useState(6);
    const [totalGuess, setTotalGuess] = useState(6);
    // let totalGuess = 6;
    // let gameHistorySlots = 6;

    // Use destructuring for prop values but always get latest inside handlers
    const { wordleGame, currentRow, currentCol, currWord, history } = props.wordleState;

    const updateTilesRef = React.useRef(updateTiles);
    useEffect(() => {
        updateTilesRef.current = updateTiles;
    });

    useEffect(() => {
        function handleKeyDown(e) {
            let key = e.key;
            if (key === "Enter") {
                updateTilesRef.current("Enter");
            } else if (key === "Backspace") {
                updateTilesRef.current("←");
            } else if (/^[a-zA-Z]$/.test(key)) {
                updateTilesRef.current(key.toUpperCase());
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    function changeColor(clicked_id) {
        // Use currentRow/currentCol from props.wordleState!
        const row = props.wordleState.currentRow;
        const col = props.wordleState.currentCol;
        // Only color tiles when a row is complete
        if (col === 5 && clicked_id === "Enter") {
            for (let t = 0; t < validLettersRef.current.length; t++) {
                wordCheckRef.current = false;
                validLettersRef.current[t].style.backgroundColor = "#dada00";
            }
            for (let r = 0; r < validSpotsRef.current.length; r++) {
                validSpotsRef.current[r].style.backgroundColor = "green";
            }
            props.setWordleState(prev => ({
                ...prev,
                currentRow: row + 1,
                currentCol: 0
            }));
        }
        for (let y = 0; y < nonValidRef.current.length; y++) {
            wordCheckRef.current = false;
            document.getElementById(nonValidRef.current[y]).style.visibility = "hidden";
        }
        // Clear refs
        validSpotsRef.current = [];
        validLettersRef.current = [];
        nonValidRef.current = [];
        clicksRef.current = [];
    }

    function runBackspace() {
        const row = props.wordleState.currentRow;
        const col = props.wordleState.currentCol;
        // Remove last click
        let clicked = clicksRef.current[col - 1];
        clicksRef.current.pop();
        // Update the tile in state
        props.setWordleState(prev => {
            let updatedGame = prev.wordleGame.map(arr => [...arr]);
            updatedGame[row][col - 1] = "";
            return {
                ...prev,
                wordleGame: updatedGame,
                currentCol: col - 1
            };
        });
        // Remove from coloring
        if (currWord.includes(clicked)) {
            if (currWord[col - 1] === clicked) {
                validSpotsRef.current.pop();
            } else {
                validLettersRef.current.pop();
            }
        } else {
            nonValidRef.current.pop();
        }
        // Clear tile DOM
        let rows = document.querySelectorAll(".row");
        if (rows.length > 0) {
            let currentTile = rows[col - 1].querySelectorAll("div")[row];
            if (currentTile) currentTile.innerText = "";
        }
    }

    function checkRightWord(clicked_id, finalRow = false) {
        let row = props.wordleState.currentRow;
        let guessedWord = "";

        if (currentRow === 5) {
            finalRow = true;
        }

        if (finalRow) {
            for (let w = 0; w < wordleGame[row - 1].length; w++) {
                guessedWord += wordleGame[row - 1][w];
            }
        } else {
            for (let w = 0; w < wordleGame[row].length; w++) {
                guessedWord += wordleGame[row][w];
            }
        }
        
        if (guessedWord.trim() === currWord.trim()) {
            changeColor(clicked_id);
            console.log('correct word');
            return true;
        } else {

            if (finalRow) {
                clearWordleState();
                console.log('final row');
                return false;
            }
            changeColor(clicked_id);
            console.log('guessed wrong word but still have guesses left');
            return false;
        }
    }

    function updateTiles(clicked_id) {
        // Always use the latest state from props!
        const col = props.wordleState.currentCol;
        const row = props.wordleState.currentRow;
        if (col === 5) {
            if (clicked_id === "Enter") {
                const wordRight = checkRightWord(clicked_id, false);
                if (wordRight) {
                    console.log('guessed right change word and reset');
                    // Update history table logic here...
                    if (gameHistorySlots > 0) {
                        document.getElementById("word" + (gameHistorySlots - 1)).innerText = currWord;
                        document.getElementById("result" + (gameHistorySlots - 1)).innerText = (6 - totalGuess) + "/5";
                        setGameHistorySlots(prev => prev - 1);

                        
                        console.log("history slots" + gameHistorySlots);
                        props.setWordleState(prev => ({
                            ...prev,
                            history: [...prev.history, { word: currWord, result: (6 - totalGuess) + "/5" }]
                        }));

                    } else {
                        // shift everything up one
                        for (var h = 0; h < 5; h++) {
                            document.getElementById("word" + h).innerText = document.getElementById("word" + (h + 1)).innerText;
                            document.getElementById("result" + h).innerText = document.getElementById("result" + (h + 1)).innerText;
                        }

                        // the game histtory chart bug is because of this code actually doesnt set anything it justs moves things around
                        // TODO: fix this bug
                        // use stuff shi from line 742 and 743 to fix it
                    }

                    clearWordleState();
                    return;
                }

                setTotalGuess(prev => prev - 1);

                if (row === 6 && !wordRight) {
                    console.log('didnt guess it right and no guesses left');

                    clearWordleState();
                }
            }
            if (clicked_id === "←" && col >= 1) {
                runBackspace();
            }
        } else {
            if (clicked_id === "←" && col >= 1) {
                runBackspace();
            }
            if (col <= 5 && clicked_id !== "←" && clicked_id !== "Enter") {
                clicksRef.current.push(clicked_id);
                let rows = document.querySelectorAll(".row");
                let currentColElement = rows[col];
                if (currentColElement) {
                    let currentTile = rows[col].querySelectorAll("div")[row];
                    let word = currWord;
                    if (word.includes(clicked_id)) {
                        if (word[col] === clicked_id) {
                            validSpotsRef.current.push(currentTile);
                        } else {
                            validLettersRef.current.push(currentTile);
                        }
                    } else {
                        nonValidRef.current.push(clicked_id);
                    }
                    // Update game board in state
                    props.setWordleState(prev => {
                        let updatedGame = prev.wordleGame.map(arr => [...arr]);
                        updatedGame[row][col] = clicked_id;
                        return {
                            ...prev,
                            wordleGame: updatedGame,
                            currentCol: col + 1
                        };
                    });
                    if (currentTile) currentTile.textContent = clicked_id;
                }
            }
        }
    }

    // Log updated state whenever it changes (for debugging)
    useEffect(() => {
        console.log('wordleGame updated:', props.wordleState.wordleGame);
        console.log('currentCol:', props.wordleState.currentCol);
        console.log('currentRow:', props.wordleState.currentRow);
        console.log('currWord:', props.wordleState.currWord);
    }, [props.wordleState.wordleGame, props.wordleState.currentCol, props.wordleState.currentRow, props.wordleState.currWord]);

    function clearWordleState() {

        const tiles = document.querySelectorAll('.tiles');
        const letters = document.querySelectorAll('.letters');

        for (let i = 0; i < tiles.length; i++) {
            tiles[i].innerText = "";
            tiles[i].style.backgroundColor = 'grey';
        }
        for (let j = 0; j < letters.length; j++) {
            letters[j].style.visibility = "visible";
        }

        setTotalGuess(6);

        props.setWordleState(prev => {
            let updatedGame = prev.wordleGame.map(arr => [...arr]);

            updatedGame = [
                ["", "", "", "", ""],
                ["", "", "", "", ""],
                ["", "", "", "", ""],
                ["", "", "", "", ""],
                ["", "", "", "", ""],
                ["", "", "", "", ""],
            ];

            let randomWords = ["APPLE", "BERRY", "CHART", "DELTA", "EAGLE", "FRAME", "GRAPE", "HOUSE", "INPUT", "JUMBO", "VALID"];
            // select a random word
            let newWord = randomWords[Math.floor(Math.random() * randomWords.length)];

            console.log('clearing wordle state and new word is:', newWord);

            return {
                ...prev,
                currWord: newWord, // Make uppercase for consistency
                wordleGame: updatedGame,
                currentCol: 0,
                currentRow: 0,
            };
        });
    }

    return (
        <div id="home" className={props.navState ? "open-home" : "closed-home"}>
            <div id="wordle" className='home-text'>
                <div id="board">
                    <div id="letterTiles">
                        <TileRow/>
                        <TileRow/>
                        <TileRow/>
                        <TileRow/>
                        <TileRow/>
                    </div>
                    <div id="keyboard">
                        <Keyboard clicked={updateTiles}/>
                    </div>
                </div>
                <div id="outerUI">
                    <div id="gameHistory">
                        <h3>Game History</h3>
                        <table id="gamesHists">
                            <tr className="gameHistsDt">
                                <th className="gameHistsDt">Word</th>
                                <th className="gameHistsDt">Result</th>
                            </tr>
                            {[5,4,3,2,1,0].map(i => (
                                <tr className="gameHistsDt" key={i}>
                                    <td id={`word${i}`} className="gameHistsDt">-</td>
                                    <td id={`result${i}`} className="gameHistsDt">-</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}