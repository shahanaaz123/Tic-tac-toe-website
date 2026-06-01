*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Poppins',sans-serif;
}

body{
  min-height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  overflow:hidden;
  background:#050816;
}

.bg-animation{
  position:fixed;
  width:100%;
  height:100%;
  background:linear-gradient(
      -45deg,
      #ff006e,
      #8338ec,
      #3a86ff,
      #06ffa5
  );
  background-size:400% 400%;
  animation:gradient 12s ease infinite;
  z-index:-1;
}

@keyframes gradient{
  0%{background-position:0% 50%;}
  50%{background-position:100% 50%;}
  100%{background-position:0% 50%;}
}

.container{
  width:90%;
  max-width:550px;
  text-align:center;
}

h1{
  color:white;
  margin-bottom:20px;
  font-size:3rem;
  text-shadow:0 0 20px white;
}

.scoreboard{
  display:flex;
  gap:10px;
  margin-bottom:20px;
}

.score-card{
  flex:1;
  padding:15px;
  color:white;
  backdrop-filter:blur(20px);
  background:rgba(255,255,255,0.08);
  border:1px solid rgba(255,255,255,0.15);
  border-radius:20px;
}

.status{
  color:white;
  font-size:1.3rem;
  margin-bottom:20px;
  font-weight:600;
}

.board{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:15px;
  padding:20px;
  border-radius:25px;
  backdrop-filter:blur(20px);
  background:rgba(255,255,255,.08);
  box-shadow:
      0 0 25px rgba(255,255,255,.2),
      0 0 50px rgba(0,255,255,.2);
}

.cell{
  aspect-ratio:1;
  border-radius:20px;
  background:rgba(255,255,255,.1);
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
  transition:.3s;
  font-size:4rem;
  font-weight:bold;
}

.cell:hover{
  transform:translateY(-5px) scale(1.05);
}

.x{
  color:#00f5ff;
  text-shadow:
      0 0 10px #00f5ff,
      0 0 30px #00f5ff;
}

.o{
  color:#ff006e;
  text-shadow:
      0 0 10px #ff006e,
      0 0 30px #ff006e;
}

.winner{
  animation:winnerGlow 1s infinite;
}

@keyframes winnerGlow{
  0%{
      transform:scale(1);
      box-shadow:0 0 15px #06ffa5;
  }
  50%{
      transform:scale(1.1);
      box-shadow:0 0 40px #06ffa5;
  }
  100%{
      transform:scale(1);
      box-shadow:0 0 15px #06ffa5;
  }
}

.buttons{
  display:flex;
  gap:10px;
  margin-top:20px;
}

button{
  flex:1;
  padding:14px;
  border:none;
  border-radius:15px;
  cursor:pointer;
  font-weight:600;
  transition:.3s;
}

button:hover{
  transform:translateY(-3px);
}

#restartBtn{
  background:#00f5ff;
}

#resetBtn{
  background:#ff006e;
  color:white;
}
