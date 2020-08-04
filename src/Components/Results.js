import React, { useState } from "react";
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from "@material-ui/core";
import axios from "axios";

const BASE_URL = "https://www.dnd5eapi.co";

const Results = ({
  race,
  index,
  description,
  language_desc,
  speed,
  languages,
  traits,
}) => {
  const [data, setData] = useState(null);

  // const secondRetrieval = (end) => {
  //   return axios.get(BASE_URL + end)
  // }

  async function secondRetrieval(end) {
    try {
      let response = await axios.get(BASE_URL + end);
      console.log("this is response data,", response.data.desc[0]);
      setData(response.data.desc[0]);
    } catch (error) {
      console.error("ERm... ya done goofed..", error.message);
    }
  }

  console.log("this is data,", data);

  return (
    <div>
      <Container>
        <Card>
          <CardHeader title={race} subheader={description} />
          <CardContent className="results__AboutRace">
            <Typography component="span">
              As
              {index[0] === "a" ||
              index[0] === "e" ||
              index[0] === "i" ||
              index[0] === "o" ||
              index[0] === "u" ? (
                <span> an </span>
              ) : (
                <span> a </span>
              )}
              {race}, y{language_desc.substring(1)}
              <br /> <br />
              Additionally as a {race}, your speed is {speed}.
              <br /> <br />
            </Typography>
          </CardContent>
          <CardContent>
            <div className="results__Languages">
              <CardHeader
                title="Language Proficiencies"
                subheader={`Languages you know as a ${race}`}
              />
              <div>
                {languages.map((element, key) => {
                  console.log("this element,", element.name);
                  return <li key={key}>{element.name}</li>;
                })}
              </div>
            </div>
            <div className="results__Traits">
              <CardHeader
                title="Race Traits"
                subheader={
                  <p>
                    These traits are common among members of your race, as
                    {index[0] === "a" ||
                    index[0] === "e" ||
                    index[0] === "i" ||
                    index[0] === "o" ||
                    index[0] === "u" ? (
                      <span> an </span>
                    ) : (
                      <span> a </span>
                    )}
                    {race}
                  </p>
                }
              />
              <div>
                {traits.length === 0
                  ? null
                  : traits.map((element, key) => {
                      secondRetrieval(element.url);

                      return (
                        <div>
                          <Typography key={key} component="h6">
                            {element.name}
                          </Typography>
                          ;<Typography component="body2">{data}</Typography>;
                        </div>
                      );
                    })}
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Results;
