import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const nav = useNavigate();

  let currBall = "";
  let str = "BALL IS COMING IN ";

  const [count, setCount] = useState(3);
  const sc = [18, 19, 20, 21, 22];
  const ball = ["BOUNCER", "YORKER", "FULL TOSS", "SLOWER BALL", "SPIN BALL"];
  const [scr, setScr] = useState(Random(sc));

  function Random(data) {
    return data[Math.floor(Math.random() * data.length)];
  }

  const [score, setScore] = useState({
    runs: 0,
    wks: 0,
    currRuns: "",
    overs: 0,
    balls: 0,
    target: scr,
  });

  const shots = [
    {
      display: "SCOOP",
      name: "scoop",
      id: "scoop",
      src: "scoop.jpg",
    },
    {
      display: "LEGGLANCE",
      name: "leg_glance",
      src: "LegGlance.jpg",
      id: "leg_glance",
    },
    {
      display: "SWEEP",
      name: "sweep",
      id: "sweep",
      src: "Sweep.jpg",
    },
    {
      display: "HOOK",
      name: "hook",
      id: "hook",
      src: "Hook.jpg",
    },
    {
      display: "PULL",
      name: "pull",
      id: "pull",
      src: "Pool.jpg",
    },
    {
      display: "ON DRIVE",
      name: "on_drive",
      id: "ondrive",
      src: "OnDrive.jpg",
    },
    {
      display: "LOFTED DRIVE",
      name: "lofted_drive",
      id: "lofteddrive",
      src: "LoftedDrive.jpg",
    },
    {
      display: "STRAIGHT DRIVE",
      name: "straight_drive",
      id: "straightdrive",
      src: "StraightDrive.jpg",
    },
    {
      display: "OFF DRIVE",
      name: "off_drive",
      id: "off_drive",
      src: "OffDrive.jpg",
    },
    {
      display: "COVER DRIVE",
      name: "cover_drive",
      id: "cover_drive",
      src: "CoverDrive1.jpg",
    },
    {
      display: "HELICOPTER",
      name: "helicopter",
      id: "helicopter",
      src: "Helicopter.jpg",
    },
    {
      display: "SQUARE CUT",
      name: "square_cut",
      id: "squarecut",
      src: "SquareCut.jpg",
    },
    {
      display: "LATE CUT",
      name: "latecut",
      id: "latecut",
      src: "Latecut.jpg",
    },
    {
      display: "REVERSE SWEEP",
      name: "reverse_sweep",
      id: "reverse_sweep",
      src: "ReverseSweep.jpg",
    },
    {
      display: "UPPER CUT",
      name: "upper_cut",
      id: "upper_cut",
      src: "UpperCut.jpg",
    },
  ];
  function updateScore(run, wk = 0) {
    if (score.target - run <= 0) {
      nav("/GameOver", { state: { isWon: true } });
    } else if (
      (score.overs === 1 && score.balls == 5) ||
      score.wks + wk === 3
    ) {
      nav("/GameOver", { state: { isWon: false } });
    }
    if (wk === 1) {
      setScore((prevScore) => ({
        ...prevScore,
        wks: score.wks + wk,
        currRuns: score.currRuns + " W",
      }));
    } else {
      setScore((prevScore) => ({
        ...prevScore,
        runs: score.runs + run,
        target: score.target - run,
        currRuns: score.currRuns + " " + run,
      }));
    }

    if (score.balls === 5) {
      setScore((prevScore) => ({
        ...prevScore,
        balls: 0,
        overs: score.overs + 1,
      }));
    }
    if (score.balls === 0) {
      setScore((prevScore) => ({
        ...prevScore,
        currRuns: " " + run,
      }));
    }
  }

  function handleClick(e) {
    if (count === 0) {
      setScore((prevScore) => ({
        ...prevScore,
        balls: score.balls + 1,
      }));

      if (currBall === "YORKER") {
        if (e.target.id === "helicopter") {
          updateScore(4);
        } else if (e.target.id === "latecut") {
          updateScore(2);
        } else if (
          e.target.id === "ondrive" ||
          e.target.id === "straightdrive" ||
          e.target.id === "cover_drive" ||
          e.target.id === "off_drive" ||
          e.target.id === "sweep"
        ) {
          updateScore(1);
        } else if (
          e.target.id === "lofteddrive" ||
          e.target.id === "reverse_sweep" ||
          e.target.id === "scoop"
        ) {
          updateScore(0, 1);
        } else {
          updateScore(0);
        }
      } else if (currBall === "FULL TOSS") {
        if (e.target.id === "lofteddrive") {
          updateScore(6);
        } else if (
          e.target.id === "leg_glance" ||
          e.target.id === "scoop" ||
          e.target.id === "straightdrive"
        ) {
          updateScore(4);
        } else if (
          e.target.id === "cover_drive" ||
          e.target.id === "helicopter" ||
          e.target.id === "pull" ||
          e.target.id === "latecut"
        ) {
          updateScore(2);
        } else if (
          e.target.id === "ondrive" ||
          e.target.id === "sweep" ||
          e.target.id === "off_drive" ||
          e.target.id === "squarecut"
        ) {
          updateScore(1);
        } else {
          updateScore(0);
        }
      } else if (currBall === "BOUNCER") {
        if (e.target.id === "hook") {
          updateScore(6);
        } else if (e.target.id === "pull" || e.target.id === "uppercut") {
          updateScore(4);
        } else if (e.target.id === "scoop" || e.target.id === "squarecut") {
          updateScore(2);
        } else if (e.target.id === "leg_glance") {
          updateScore(1);
        } else if (e.target.id === "latecut") {
          updateScore(0, 1);
        } else {
          updateScore(0);
        }
      } else if (currBall === "SPIN BALL") {
        if (e.target.id === "reverse_sweep") {
          updateScore(6);
        } else if (e.target.id === "sweep" || e.target.id === "latecut") {
          updateScore(4);
        } else if (
          e.target.id === "cover_drive" ||
          e.target.id === "helicopter" ||
          e.target.id === "squarecut" ||
          e.target.id === "pull" ||
          e.target.id === "scoop"
        ) {
          updateScore(2);
        } else if (
          e.target.id === "ondrive" ||
          e.target.id === "off_drive" ||
          e.target.id === "straightdrive"
        ) {
          updateScore(1);
        } else if (e.target.id === "lofteddrive") {
          updateScore(0, 1);
        } else {
          updateScore(0);
        }
      } else {
        if (e.target.id === "pull") {
          updateScore(6);
        } else if (e.target.id === "upper_cut" || e.target.id === "squarecut") {
          updateScore(4);
        } else if (
          e.target.id === "sweep" ||
          e.target.id === "reverse_sweep" ||
          e.target.id === "cover_drive" ||
          e.target.id === "straightdrive" ||
          e.target.id === "lofteddrive"
        ) {
          updateScore(2);
        } else if (
          e.target.id === "leg_glance" ||
          e.target.id === "helicopter" ||
          e.target.id === "off_drive" ||
          e.target.id === "ondrive" ||
          e.target.id === "latecut"
        ) {
          updateScore(1);
        } else if (e.target.id === "hook" || e.target.id === "scoop") {
          updateScore(0, 1);
        } else {
          updateScore(0);
        }
      }

      setCount(3);
    }
  }
  function timer() {
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
    return count;
  }

  return (
    <>
      <div className="main">
        <div className="title">TIDDI GAMING</div>
        <div className="container">
          <div className="left-panel">
            {count > 0 ? (str = str + timer()) : (currBall = Random(ball))}
          </div>

          <div className="right-panel">
            <div className="grid">
              {shots.map((shot) => (
                <span
                  className="card"
                  key={shot.name}
                  name={shot.name}
                  id={shot.id}
                  onClick={handleClick}
                >
                  <img src={shot.src} />
                  {shot.display}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="scorecard">
          <span>
            TEAM : {score.runs} / {score.wks}
          </span>
          <span>
            Overs: {score.overs}.{score.balls} (2)
          </span>

          <span> {score.currRuns} </span>
          <span>{score.target} need to win</span>
          <span>Target : {scr}</span>
        </div>
        <span className="footer">Chattary Ajwan Infotech Pvt. Ltd.</span>
      </div>
    </>
  );
}

export default App;
