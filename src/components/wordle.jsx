import React from 'react';

import '../style/Wordle.css';

export default function Wordle(props) {
    return (
        <div id="home" className={props.navState ? "open-home" : "closed-home"}>
            

            
                

            <div id="wordle">





















                <div id="outerUI">

                    <div id="nav">

                        <ul class="unoList">

                            <li class="lisItem" onclick="changeMode(this.innerText)">
                                Leaderboard
                            </li>

                            <li id='standard' class="lisItem" onclick="changeMode(this.innerText)">
                                Standard Mode
                            </li>

                            <li id='challenging' class="lisItem" onclick="changeMode(this.innerText)">
                                Challenging Mode
                            </li>

                            <li class="lisItem" onclick="changeMode(this.innerText)">
                                Practice Mode
                            </li>

                        </ul>

                    </div>

















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
















                

                <div id="board">

                    <div id="letterTiles">

                        <div class="row">
                            <div class="tiles"></div>
                            <div class="tiles"></div>
                            <div class="tiles"></div>
                            <div class="tiles"></div>
                            <div class="tiles"></div>
                            <div class="tiles"></div>
                        </div>

                        <div class="row">
                            <div class="tiles"></div>
                            <div class="tiles"></div>
                            <div class="tiles"></div>
                            <div class="tiles"></div>
                            <div class="tiles"></div>
                            <div class="tiles"></div>
                        </div>

                        <div class="row">
                            <div class="tiles"></div>
                            <div class="tiles"></div>
                            <div class="tiles"></div>
                            <div class="tiles"></div>
                            <div class="tiles"></div>
                            <div class="tiles"></div>
                        </div>

                        <div class="row">
                            <div class="tiles"></div>
                            <div class="tiles"></div>
                            <div class="tiles"></div>
                            <div class="tiles"></div>
                            <div class="tiles"></div>
                            <div class="tiles"></div>
                        </div>

                        <div class="row">
                            <div class="tiles"></div>
                            <div class="tiles"></div>
                            <div class="tiles"></div>
                            <div class="tiles"></div>
                            <div class="tiles"></div>
                            <div class="tiles"></div>
                        </div>

                    </div>
                    

                    <div id="keyboard">

                        <button id="Q" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        Q
                        </button>

                        <button id="W" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        W
                        </button>

                        <button id="E" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        E
                        </button>

                        <button id="R" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        R
                        </button>

                        <button id="T" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        T
                        </button>

                        <button id="Y" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        Y
                        </button>

                        <button id="U" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        U
                        </button>
                        <button id="I" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        I
                        </button>

                        <button id="O" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        O
                        </button>

                        <button id="P" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        P
                        </button>

                        <button id="A" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        A
                        </button>

                        <button id="S" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        S
                        </button>

                        <button id="D" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        D
                        </button>

                        <button id="F" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        F
                        </button>

                        <button id="G" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        G
                        </button>

                        <button id="H" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        H
                        </button>

                        <button id="J" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        J
                        </button>

                        <button id="K" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        K
                        </button>

                        <button id="L" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        L
                        </button>

                        <br />

                        <button id="Enter" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        Enter
                        </button>

                        <button id="Z" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        Z
                        </button>

                        <button id="X" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        X
                        </button>

                        <button id="C" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        C
                        </button>

                        <button id="V" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        V
                        </button>

                        <button id="B" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        B
                        </button>

                        <button id="N" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        N
                        </button>

                        <button id="M" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        M
                        </button>

                        <button id="←" class="letters" type="button" onclick="updateTiles(this.innerText)">
                        ←
                        </button>

                    </div>

                </div>

                
















                







            </div>

            

            <div id="Leaderboard">

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

            </div>
        </div>






























      
    )
}