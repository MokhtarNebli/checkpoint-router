import React from "react";
import { useParams } from "react-router-dom";
const Descriptions = ({ movie }) => {
  const params = useParams();
  console.log(params);
  const Mov = movie.find((el) => el.id == params.id);
  console.log(Mov);
  return (
    <div>
      <h1>
        {Mov.MovieName}

        <iframe
          className="Northman"
          width="700"
          height="500"
          src={Mov.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="700"
          height="500"
          src=""
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="700"
          height="500"
          src=""
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </h1>
    </div>
  );
};

export default Descriptions;
