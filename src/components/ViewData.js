import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../components/firebase";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";


const ViewData = () => {


  const [first, setfirst] = useState([]);

  const [data, setdata] = useState([]);

  useEffect(() => {
    db.collection("services")
      .onSnapshot((tap) => setfirst(tap.docs.map((e) => (e.data()))))
  }, []);

  useEffect(() => {
    db.collection("userweb").onSnapshot((tap) =>
      setdata(tap.docs.map((e) => e.data()))
    );
  }, []);

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

              <div className="wsr container text-center">

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
                        <div className="container">
                          <div className=" cardss row">
                            <div className=" imaggg col-lg-6">
                              <img
                                className="imagesd"
                                src={e.image}
                              />
                            </div>
                            <div className="col-lg-6">
                              <div>
                                <h4>{e.title}</h4>
                              </div>
                              <br />

                              <div>
                                <p>
                                  {e.details}
                                </p>
                              </div>

                              <div>
                                <h5>
                                  {e.price}
                                </h5>
                              </div>
                              <Link to={"tel:" + e.numb}> <button>Call</button> </Link>

                            </div>
                          </div>
                        </div>
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
