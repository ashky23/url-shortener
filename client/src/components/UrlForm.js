import React, { useState } from "react";
import axios from "axios";
import ShortPage from "./ShortPage";
import "../App.css";

function UrlForm(props) {
  const [longUrl, setlongUrl] = useState("");
  const [Response, setResponse] = useState(null);
  const onChange = (e) => {
    setlongUrl(e.target.value);
  };
  const onSubmit = async (e) => {
    // console.log("CLicked", longUrl);
    e.preventDefault();
    const response = await axios.post("http://localhost:5000/api/shorten-url", {
      longUrl,
    });
    // console.log(response.data);

    if (response.data) {
      setResponse(response.data);
      //   console.log(Response.length);
      // props.history.push("/show");
    } else {
      console.log("error");
    }
  };
  return (
    <div className="parent">
      <div className="form-class">
        {!Response && (
          <form onSubmit={onSubmit}>
            <label htmlFor="longUrl">Long url:</label>
            <input
              type="url"
              name="longUrl"
              id="longUrl"
              value={longUrl}
              onChange={onChange}
              placeholder="type the valid url"
            />
            <input type="submit" value="Shorten" id="submit" />
          </form>
        )}
        {Response && <ShortPage data={Response} />}
      </div>
    </div>
  );
}

export default UrlForm;
