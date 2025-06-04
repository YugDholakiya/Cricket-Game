import { useLocation, useNavigate } from "react-router-dom";
import "./GameOver.css";
export default function GameOver() {
  const nav = useNavigate();
  const location = useLocation();
  return (
    <div className="page">
      <div className="box">
        {console.log(location.isWon)}
        {location.state.isWon === true ? (
          <div className="b1">
            <img src="won.webp" />
            You Won
          </div>
        ) : (
          <div className="b1">
            Sorry, <br />
            You Lost
          </div>
        )}
        <div className="button">
          <div className="b2" onClick={() => nav("/")}>
            Play Again
          </div>
          <div className="b2" onClick={() => nav("/")}>
            Exit
          </div>
        </div>
      </div>
    </div>
  );
}
