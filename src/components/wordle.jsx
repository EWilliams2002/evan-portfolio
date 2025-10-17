import React, { useEffect, useState } from 'react';

import '../style/Wordle.css';

import TileRow from './tinyComp/tileRow'
import Keyboard from './tinyComp/keyboard'
import randomWords from '../data/randomWords';

export default function Wordle(props) {
    
    const clicksRef = React.useRef([]);
    const validSpotsRef = React.useRef([]);
    const validLettersRef = React.useRef([]);
    const nonValidRef = React.useRef([]);
    

    const { wordleGame, currentRow, currentCol, currWord, history, nonValidKeys, totalGuess } = props.wordleState;

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
            
            document.getElementById(nonValidRef.current[y]).style.visibility = "hidden";
        }

        // Correction pass: check entire board for correct colors and apply corrections
        let rows = document.querySelectorAll(".row");

        for (let r = 0; r < props.wordleState.wordleGame.length; r++) {

            for (let c = 0; c < props.wordleState.wordleGame[r].length; c++) {

                const letter = props.wordleState.wordleGame[r][c];
                let currentTile = rows[c].querySelectorAll("div")[r];

                // Only correct color if the letter is present

                if (letter !== '') {

                    if (typeof checkSlice === 'function' && checkSlice(props.wordleState.currWord, letter, c)) {

                        currentTile.style.backgroundColor = "green";

                    } else if (props.wordleState.currWord.includes(letter)) {

                        currentTile.style.backgroundColor = "#dada00";

                    } else {

                        currentTile.style.backgroundColor = "grey";

                    }

                    
                } else {
                    currentTile.style.backgroundColor = "grey";
                }

            }
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

        

        let clicked = clicksRef.current[col - 1];
        clicksRef.current.pop();

        

        props.setWordleState(prev => {
            let updatedGame = prev.wordleGame.map(arr => [...arr]);
            updatedGame[row][col - 1] = "";
            return {
                ...prev,
                wordleGame: updatedGame,
                currentCol: col - 1
            };
        });


        
        if (currWord.includes(clicked)) {
            if (currWord[col - 1] === clicked) {
                validSpotsRef.current.pop();
            } else {
                validLettersRef.current.pop();
            }
        } else {
            nonValidRef.current.pop();
        }

        
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

       
        for (let w = 0; w < wordleGame[row].length; w++) {

            let letter = wordleGame[row][w];

            guessedWord += letter;

            // console.log('in check right word, checking letter ', letter);

            if (!currWord.includes(letter)) {

                props.setWordleState(prev => {
                    let updateNValids = prev.nonValidKeys;

                    if (!(prev.nonValidKeys.includes(letter))) {
                        updateNValids.push(letter);
                    }

                    return {
                        ...prev,
                        nonValidKeys: updateNValids
                    };

                });

                document.getElementById(letter).style.visibility = "hidden";
            }
        }
        
        

        if (guessedWord.trim() === currWord.trim()) {
            changeColor(clicked_id);
            // console.log('correct word');
            return true;
        } else {

            if (finalRow) {
                clearWordleState();
                // console.log('final row');
                let prevWord = document.getElementById("word5").innerText;
                let prevResult = document.getElementById("result5").innerText;

                // console.log('prev word:', prevWord);
                // console.log('prev result:', prevResult);

                document.getElementById("word5").innerText = currWord;
                document.getElementById("result5").innerText = "X";

                

                for (var h = 0; h < 5; h++) {
                    
                    if (h === 4 ) {
                        document.getElementById("word" + h).innerText = prevWord;
                        document.getElementById("result" + h).innerText = prevResult
                    } else {

                        document.getElementById("word" + h).innerText = document.getElementById("word" + (h + 1)).innerText;
                        document.getElementById("result" + h).innerText = document.getElementById("result" + (h + 1)).innerText;
                    }
                }
                
                if (history.length <= 5) {
                    props.setWordleState(prev => ({
                        ...prev,
                        history: [...prev.history, { word: currWord, result: "X" }]
                    }));
                    // console.log('updated history:', [...history, { word: currWord, result: "X" }]);
                } else {
                    props.setWordleState(prev => ({
                        ...prev,
                        history: [...prev.history.slice(1), { word: currWord, result: "X" }]
                    }));
                    // console.log('updated history by shifting:', [...history.slice(1), { word: currWord, result: "X" }]);
                }

                

                // console.log(guessedWord)
                // console.log(currWord)
                // console.log(guessedWord.trim() === currWord.trim());
                return false;
            }

            changeColor(clicked_id);
            // console.log('guessed wrong word but still have guesses left');
            return false;
        }


    }

    function updateTiles(clicked_id, loadingBoard = false) {

        
        const col = props.wordleState.currentCol;
        const row = props.wordleState.currentRow;




        if (col === 5) {


            if (clicked_id === "Enter") {

                if (!randomWords.includes(wordleGame[row].join(''))) {
                    alert("Not in word list!");
                    return;
                }

                const wordRight = checkRightWord(clicked_id, false);

                if (wordRight) {



                    
                    // Update history table logic here...

                    let prevWord = document.getElementById("word5").innerText;
                    let prevResult = document.getElementById("result5").innerText;



                    document.getElementById("word5").innerText = currWord;
                    document.getElementById("result5").innerText = (6 - totalGuess) + 1;

                    

                    for (var h = 0; h < 5; h++) {
                        
                        if (h === 4 ) {
                            document.getElementById("word" + h).innerText = prevWord;
                            document.getElementById("result" + h).innerText = prevResult
                        } else {

                            document.getElementById("word" + h).innerText = document.getElementById("word" + (h + 1)).innerText;
                            document.getElementById("result" + h).innerText = document.getElementById("result" + (h + 1)).innerText;
                        }
                    }
                    
                    if (history.length <= 5) {
                        props.setWordleState(prev => ({
                            ...prev,
                            history: [...prev.history, { word: currWord, result: (6 - totalGuess) + 1 }]
                        }));
                        // console.log('updated history:', [...history, { word: currWord, result: (6 - totalGuess) + 1 }]);
                    } else {
                        props.setWordleState(prev => ({
                            ...prev,
                            history: [...prev.history.slice(1), { word: currWord, result: (6 - totalGuess) + 1 }]
                        }));
                        // console.log('updated history by shifting:', [...history.slice(1), { word: currWord, result: (6 - totalGuess) + 1 }]);
                    }

                    


                    clearWordleState();
                    return;
                }

                
                if (!wordRight && row === 5) {
                    console.log('didnt guess it right and no guesses left');
                } else {
                    props.setWordleState(prev => ({
                        ...prev,
                        totalGuess: prev.totalGuess - 1
                    }));
                }
                



                if (row === 6 && !wordRight) {
                    

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

                    if (!loadingBoard) {
                        

                        props.setWordleState(prev => {
                            
                            let updatedGame = prev.wordleGame.map(arr => [...arr]);
                            updatedGame[row][col] = clicked_id;
                            return {
                                ...prev,
                                wordleGame: updatedGame,
                                currentCol: col + 1
                            };

                        });
                    }
                    
                    
                    // console.log(loadingBoard ? 'placing letter: ' + clicked_id: '');
                    

                    if (currentTile) currentTile.textContent = clicked_id;
                    // console.log(currentTile ? "current tile text: " + (currentTile.textContent ? currentTile.textContent : 'none' ) + '\n' + "letter check: " + clicked_id : '');
                }
            }




        }
    }







    // Log updated state whenever it changes (for debugging)
    useEffect(() => {
        // console.log('wordleGame updated:', props.wordleState.wordleGame);
        // console.log('currentCol:', props.wordleState.currentCol);
        // console.log('currentRow:', props.wordleState.currentRow);
        // console.log('currWord:', props.wordleState.currWord);
        // console.log('curr total guess', totalGuess);
    }, [props.wordleState.wordleGame, props.wordleState.currentCol, props.wordleState.currentRow, props.wordleState.currWord, totalGuess]);





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

        props.setWordleState(prev => ({
            ...prev,
            totalGuess: 6
        }));

        console.log('setting total guess')

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

            
            // select a random word
            let newWord = randomWords[Math.floor(Math.random() * randomWords.length)];


            return {
                ...prev,
                currWord: newWord, 
                wordleGame: updatedGame,
                currentCol: 0,
                currentRow: 0,
                nonValidKeys: [],
            };
        });
    }  

    function loadWordleGame() {

        let rows = document.querySelectorAll(".row");

        // console.log("non valids: " + nonValidKeys);

        for (let r = 0; r < wordleGame.length; r++) {

            
            

            for (let c = 0; c < wordleGame[r].length; c++) {

                if (wordleGame[r][c] === undefined) continue;
                
                let currentTile = rows[c].querySelectorAll("div")[r];
                const letter = wordleGame[r][c];

               


                currentTile.textContent = letter;

                if (currWord.includes(letter) && letter !== ''  && rowFinished(r)) {

                    if (checkSlice(currWord, letter, c)) {
                        currentTile.style.backgroundColor = "green";
                    } else {
                        currentTile.style.backgroundColor = "#dada00";
                    }

                }


            }



        
        }



        if (nonValidKeys) {
            for (let k = 0; k < nonValidKeys.length; k++) {
                document.getElementById(nonValidKeys[k]).style.visibility = "hidden";
            }
            
        }

       

        if (history.length === 0) return;

        for (let h = 0; h < history.length; h++) {
            // console.log("history entry " + history[history.length - 1 - h].word);
            document.getElementById("word" + (5 - h)).innerText = history[history.length - 1 - h].word;
            document.getElementById("result" + (5 - h)).innerText = history[history.length - 1 - h].result;
        }

        


    }

    function rowFinished(row) {

        let finished = true;

        for (let c = 0; c < wordleGame[row].length; c++) {

            if (wordleGame[row][c] == '') {
                finished = false;
            }

        }

        return finished;
    }

    function checkSlice(word, letter, index) {
        if (word[index] == letter) {
            return true;
        }
        else {
            return false;
        }
    }

    // RUN loadWordleGame EVERY TIME WORDLE SCREEN IS SHOWN
    useEffect(() => {

        if (props.screen === "Wordle") {
            setTimeout(loadWordleGame, 0);
        }

        // Only run when props.screen changes
    }, [props.screen]);







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
                                <th className="gameHistsDt">Guesses</th>
                            </tr>
                            {[5,4,3,2,1,0].map(i => (
                                <tr className="gameHistsDt" key={i}>
                                    <td id={`word${i}`} className="gameHistsDt">-</td>
                                    <td id={`result${i}`} className="gameHistsDt">-</td>
                                </tr>
                            ))}
                        </table>
                    </div>

                    
                    
                    <div id="howTo">

                        <h3>How To Play</h3>

                        <ol className="how-to-list">
                            <li>Type in a valid word into the tiles</li>
                            <li>Getting the word wrong will use a guess and progress to the next row</li>
                            <li>Using up all the rows will cause a fail</li>
                            <li>Guessing the word right will save your game and pick a new word</li>
                            <li>Tab reload will wipe game history</li>
                            
                        </ol>

                    </div>

                </div>
            </div>



            

            
            <div id='return-home' className='home-text' onClick={() => props.changeScreen('')}>Return Home ! </div>

            

            <div id="icon-attr" class='home-text'>

                Icons by <a href="https://icons8.com/" style={{ textDecoration: "underline" }}>Icons8</a>

            </div>





        </div>
    );
}