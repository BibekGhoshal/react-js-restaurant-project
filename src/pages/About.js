import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15,
        textAlign:"center",
        p:2,
        "& h4":{
          fontWeight:"bold",
          my:2,
          fontSize:"2rem",
        },
        "& p":{
          textAlign:"justify",
        },
        "@media (max-width:600px)":{
          mt:0,
          "& h4":{
          fontSize:"1.5rem",
          }
        }
      }}>
        <Typography variant="h4">Welcome to My Restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eveniet
          temporibus non odit rerum ducimus beatae dolore odio dicta ut sunt
          officia, reiciendis in sint itaque tempora voluptatem vel voluptatibus
          qui assumenda, rem deleniti quos quaerat aspernatur! Nam consequatur
          magnam earum iste dicta? Sit quidem veritatis consequatur fugit? Minus
          harum numquam voluptatem est quas omnis non nam sunt minima
          repellendus et ab iusto ipsa dolore, facilis possimus recusandae vel
          unde magnam illo beatae odio saepe provident! Sit doloribus eos
          consequuntur, ullam adipisci hic nemo laboriosam labore praesentium
          voluptatibus molestias dolorem sequi, sapiente facilis exercitationem
          officia perferendis itaque nisi fugiat. Quis.
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et saepe
          repellat enim, harum debitis sapiente! Optio ipsam culpa, eos tempore
          iusto praesentium consequuntur odio quisquam! Nihil totam at maiores
          voluptate, deleniti cumque iure perferendis nisi, magnam labore
          repellat unde esse ab, assumenda aut officia consequuntur! Accusamus
          reiciendis quo ratione qui quam, quas molestiae, tenetur minus,
          voluptates fuga consectetur in earum aperiam! Explicabo, molestiae
          iusto nulla facilis illo optio hic iste ea ab sit magni eaque
          exercitationem deleniti dicta placeat. Aliquam earum praesentium iure
          molestiae, vel ea velit ex commodi accusamus obcaecati. Error nobis
          incidunt cum placeat nostrum corrupti repellat dolorem.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
