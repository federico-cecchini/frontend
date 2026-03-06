import { Link } from "react-router";
import ReactGA from 'react-ga4'

import "../App.css";

function CTA({ to, text, target = "_self", className, category }) {
  return (
    <Link
      to={to}
      className={`px-4 py-3 bg-cta-bg rounded-xl font-bold text-white font-Poppins text-center ${className}`}
      target={target}
      onClick={() =>{
          if (category) {
              ReactGA.event({
                  eventCategory: category,
                  eventAction: "Click",
                  eventLabel: text,
                })
            }
        }
      }
    >
      {text}
    </Link>
  );
}

export default CTA;
