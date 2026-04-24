import { CodeBracketIcon, Cog6ToothIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";
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
                <CodeBracketIcon className="h-8 w-8 my-auto text-sky-300" />
                Backend Systems
              </h3>
              <hr className="mb-4" />
              <p>
                I’ve worked inside large production systems for state government clients, where stability and maintainability matter. My work has involved understanding existing system behavior quickly and improving it without breaking production flows.
              </p>
            </div>
          </DeckCard>
        </li>
        <li className="card" id="card2">
          <DeckCard background="max-w-128 mx-auto">
            <div>
              <h3 className="flex gap-4 mb-2 text-lg font-bold">
                <Cog6ToothIcon className="h-8 w-8 my-auto text-sky-300" />
                API Design
              </h3>
              <hr className="mb-4" />
              <p>
                I work across API integrations and backend-driven logic that support frontend features. This includes shaping data flow, resolving integration issues, and ensuring applications behave consistently end-to-end.
              </p>
            </div>
          </DeckCard>
        </li>
        <li className="card" id="card3">
          <DeckCard background="max-w-128 mx-auto">
            <div>
              <h3 className="flex gap-4 mb-2 text-lg font-bold">
                <ComputerDesktopIcon className="h-8 w-8 my-auto text-sky-300" />
                Full-Stack Delivery
              </h3>
              <hr className="mb-4" />
              <p>
                I’ve owned features end-to-end, building frontend plugins and feature modules such as calendar workflows, dashboard interactions, and search functionality. I focus on shipping complete features rather than isolated layers.
              </p>
            </div>
          </DeckCard>
        </li>
      </ul>
    </div>
  );
}