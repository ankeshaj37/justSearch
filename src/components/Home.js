import { FaStar } from "react-icons/fa";
import React, { useEffect, useState } from "react";

import { db } from "./firebase";
import { Link } from "react-router-dom";

const Home = () => {
  const [first, setfirst] = useState([]);

  const [rating, setrating] = useState(null);
  const [search, setsearch] = useState("");

  useEffect(() => {
    db.collection("services").onSnapshot((tap) =>
      setfirst(tap.docs.map((e) => ({ uid: e.id, data: e.data() })))
    );
  }, []);

  return (
    <>
    
      <div className="container">
        <div className=" wew row">
        <div className="h22">
        <img
          className="h222"
          src="https://res.cloudinary.com/djxhucsls/image/upload/v1673324293/aaaaaaaaaaaa_p8yh1t.png"
        />
        <div className=" ww spinner-border text-warning" role="status"></div>
      </div>
        <div className="inbox">
        <input className="sdd" onChange={(e) => setsearch(e.target.value)} />

        <button className="searchbtn">Search</button>
      </div>
        </div>
      </div>
      
      <h5 className="soo">Get ready! Something really cool is coming!</h5>
     

      <div className="cc container">
        {first
          .filter((e) => {
            if (search === "") {
              return "";
            } else if (
              e.data.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 )
           {
              return e;
            }
          })
          .map((e, i) => (
            <>
             

              <div className=" ddda container">
                <div className=" ssf row">
                  <div className="col-lg-6">
                    <img className="imoo" src={e.data.image} />
                  </div>
                  <div className="imoos col-lg-6">
                    <h4>{e.data.title}</h4>
                    <p className="detai">{e.data.details}</p>
                   
                <Link to={`/services/${e.uid}`}  > <button>Best Deal</button></Link>
                  
                   
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default Home;
