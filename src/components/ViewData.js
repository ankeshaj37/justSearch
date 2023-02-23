import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../components/firebase";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { onAuthStateChanged } from "firebase/auth";


const ViewData = () => {
  const navigate = useNavigate()

  const [User, setUser] = useState([]);
  const [first, setfirst] = useState([]);
  const [data, setdata] = useState([]);


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        setUser(user)
    });
}, [])

  useEffect(() => {
    db.collection("services")
      .onSnapshot((tap) => setfirst(tap.docs.map((e) => ({uid:e.id,data:e.data()}))))
  }, []);

  useEffect(() => {
    db.collection("userweb").onSnapshot((tap) =>
      setdata(tap.docs.map((e) => e.data()))
    );
  }, []);

  const form =()=>{
    navigate('/enquiry')
  }

  return (
    <>
      <div>
        {data.map((e) => (
          <>
            <div className=" container">
              <div>
                <img className="logoavta" src={e.background} />
                <div className="boxxe">
                  <div className="logoo">
                    <img className="logoop" src={e.logo}></img>
                  </div>
                </div>
                <h3 className="webtitle">{e.title}</h3>
              </div>

              <div className=" container ">

                <Tabs>
                  <TabList>
                    <Tab>Totale services</Tab>
                    <Tab>Reviews</Tab>
                    <Tab>About us</Tab>
                    <Tab>Contact us</Tab>
                    <Tab>Website Link</Tab>
                  </TabList>

                  <TabPanel>
                    {first.map((e) => (

     
                      <>
                       {e.data.uid == User.uid ?
                        <div className="container">
                          <div className=" cardss row">
                            <div className=" imaggg col-lg-6">
                              <img
                                className="imoo"
                                src={e.data.image}
                              />
                            </div>
                            <div className="col-lg-6">
                              <div>
                                <h4>{e.data.title}</h4>
                              </div>
                              <br />

                              <div>
                                <p>
                                  {e.data.details}
                                </p>
                              </div>

                              <div>
                                <h5>
                                ₹ {e.data.price}
                                </h5>
                              </div>
                              <div className=' imooo '>
                                <button>Call</button>
                                <button onClick={form }>Inquiry</button>
                              </div>
                            </div>
                          </div>
                        </div>
                            :''}
                      </>
                  
                    ))}
                  </TabPanel>
                  <TabPanel>
                    <p>{e.Reviews}</p>
                  </TabPanel>

                  <TabPanel>
                    <p>{e.about}</p>
                  </TabPanel>

                  <TabPanel>
                    <p>
                      <a target="_blank" href={"tel:" + e.numb}>
                        {e.numb}
                      </a>
                    </p>
                  </TabPanel>

                  <TabPanel>
                    <p>
                      <a target="_blank" href={e.link}>
                        {e.link}
                      </a>
                    </p>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ViewData;
