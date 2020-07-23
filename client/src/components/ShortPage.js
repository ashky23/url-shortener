import React from "react";
import "../App.css";
function ShortPage(props) {
  return (
    <div className="short-url">
      <p>
        Your Short url is{" "}
        <a href={props.data.shortUrl} target="_blank" rel="noopener noreferrer">
          {props.data.shortUrl}
        </a>{" "}
        created at
        <br /> {new Date(props.data.createdAt).toDateString()}
      </p>
      <button id="another" onClick={() => window.location.reload()}>
        Try another!
      </button>
    </div>
  );
}

export default ShortPage;
