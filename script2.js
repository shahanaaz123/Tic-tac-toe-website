* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Segoe UI", sans-serif;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
        135deg,
        #667eea,
        #764ba2
    );
    padding: 20px;
}

.container {
    width: 100%;
    max-width: 520px;
    text-align: center;
}

h1 {
    color: white;
    margin-bottom: 25px;
    font-size: 3rem;
}

.scoreboard {
    display: flex;
    gap: 15px;
    margin-bottom: 25px;
}

.score-card {
    flex: 1;
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(12px);
    color: white;
    padding: 15px;
    border-radius: 16px;
}

.score-card span {
    font-size: 14px;
}

.score-card h2 {
    margin-top: 5px;
}

.status {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 20px;
    font-weight: 600;
}

.board {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 12px;
    margin-bottom: 20px;
}

.cell {
    aspect-ratio: 1;
    background: rgba(255,255,255,0.2);
    border-radius: 18px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-weight: bold;
    color: white;
    transition: 0.3s;
}

.cell:hover {
    transform: translateY(-5px);
    background: rgba(255,255,255,0.3);
}

.x {
    color: #00e5ff;
}

.o {
    color: #ffeb3b;
}

.winner {
    background: #4caf50 !important;
    animation: pulse 1s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.05);
    }

    100% {
        transform: scale(1);
    }
}

.buttons {
    display: flex;
    gap: 10px;
}

button {
    flex: 1;
    padding: 14px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    transition: 0.3s;
}

button:hover {
    transform: translateY(-2px);
}

#restartBtn {
    background: white;
    color: #764ba2;
}

#resetScoreBtn {
    background: #ff5252;
    color: white;
}

@media (max-width: 500px) {

    h1 {
        font-size: 2.2rem;
    }

    .cell {
        font-size: 2.4rem;
    }

    .buttons {
        flex-direction: column;
    }
}
