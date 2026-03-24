import { CodeBracketIcon, ComputerDesktopIcon, HeartIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import "./Deck.css";
import DeckCard from "./DeckCard";

export default function Deck() {
  return (
    <div className="container">
      <ul id="cards">
        <li className="card" id="card1">
          <DeckCard background="max-w-128 mx-auto">
            <div>
              <h3 className="flex gap-4 mb-2 text-lg font-bold">
                <ComputerDesktopIcon className="h-8 w-8 my-auto text-sky-300" />
                Frontend that actually ships
              </h3>
              <hr className="mb-4" />
              <p>
                I’ve owned frontend development on real production systems for state government clients, fixing issues fast, stabilizing messy codebases, and delivering under pressure.
              </p>
            </div>
          </DeckCard>
        </li>
        <li className="card" id="card2">
          <DeckCard background="max-w-128 mx-auto">
            <div>
              <h3 className="flex gap-4 mb-2 text-lg font-bold">
                <HeartIcon className="h-8 w-8 my-auto text-sky-300" />
                Accessibility built in, not bolted on
              </h3>
              <hr className="mb-4" />
              <p>
                I work with WCAG 2.1 standards, Deque Axe, and Siteimprove to make sure sites are usable for everyone. I’ve cleared hundreds of accessibility issues in days, not weeks.
              </p>
            </div>
          </DeckCard>
        </li>
        <li className="card" id="card3">
          <DeckCard background="max-w-128 mx-auto">
            <div>
              <h3 className="flex gap-4 mb-2 text-lg font-bold">
                <CodeBracketIcon className="h-8 w-8 my-auto text-sky-300" />
                More than just UI
              </h3>
              <hr className="mb-4" />
              <p>
                I’m strongest on the frontend, but I understand the full stack—APIs, databases, and backend systems—so I can move faster and make better decisions across the whole app.
              </p>
            </div>
          </DeckCard>
        </li>
      </ul>
    </div>
  );
}