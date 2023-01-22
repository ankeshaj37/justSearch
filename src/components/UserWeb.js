
import React, { useState,useEffect } from 'react'
import { db } from './firebase'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';

const UserWeb = () => { 

  const [title, settitle] = useState('')
  const [background, setbackground] = useState('')
  const [logo, setlogo] = useState('')
  const [about, setabout] = useState('')

  const [link, setlink] = useState('')
  const [numb, setnumb] = useState('')

  const [data, setdata] = useState([])



  const publish =()=>{
    db.collection('userweb').doc('H4z7J9mhgKaLNPQyMQu0').update({title:title,background:background,logo:logo,about:about,link:link,numb:numb})
    settitle('')
    setbackground('')
    setlogo('')
    setabout('')
    setlink('')
    setnumb('')

  }
 
  useEffect(() => {
   db.collection('userweb').onSnapshot(tap=>(
   setdata(tap.docs.map((e)=>(e.data())))
   ))
  }, [])
  

  return (
    <>
 {data.map((e)=>(
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
                {/* <div><Link className='minlink'>Totale services</Link></div>
   <div> <Link className='minlink'> Reviews</Link></div>
   <div><Link className='minlink'> About us</Link></div>
   <div><Link className='minlink'> Contact us</Link></div> */}
                <Tabs>
                  <TabList>
                    <Tab>Totale services</Tab>
                    <Tab>Reviews</Tab>
                    <Tab>About us</Tab>
                    <Tab>Contact us</Tab>
                    <Tab>Website Link</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="container">
                      <div className=" cardss row">
                        <div className=" imaggg col-lg-6">
                          <img
                            className="imagesd"
                            src={data.image}
                          />
                        </div>
                        <div className="col-lg-6">
                          <div>
                            <h4>{data.title}</h4>
                          </div>
                          <br/>
                
                          <div>
                            <p>
                            {data.details}
                            </p>
                          </div>
                        
                          <div>
                            <h5>
                            {data.price}
                            </h5>
                          </div>
                         <Link to={"tel:" + e.numb}> <button>Call</button> </Link>
                       
                        </div>
                      </div>
                    </div>
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

<div>
<div className="divadd">
        
        <div class="page-wrapper bg-gra-03 p-t-45 p-b-50">
          <div class="wrapper wrapper--w790">
            <div class="card card-5">
              <div class="card-heading">

              </div>
              <div class="card-body">
                <form >
                  <div class="form-row m-b-55">
                      <div class="row row-space">
                        <div class="col-2">
                          <div class="input-group-desc">
                            <input class="input--style-5"  placeholder="Title"  type="text" name="first_name" value={title} onChange={(e)=>settitle(e.target.value)} />
                         
                          </div>
                        </div>
                        <div class="col-2">
                          <div class="input-group-desc">
                            <input class="input--style-5" placeholder="Image Background" type="text" name="last_name" value={background}  onChange={(e)=>setbackground(e.target.value)} />
                          
                          </div>
                        </div>
                   
                    </div>
                  </div>
                  <div class="form-row">

               
                      <div class="input-group">
                        <input class="input--style-5" placeholder="Logo" type="text" name="company" value={logo}  onChange={(e)=>setlogo(e.target.value)}  />
                        <div className='labe'>
                        
                        </div>
                    

                    </div>
                  </div>
                  <div class="form-row">

                      <div class="input-group">
                        <input class="input--style-5" placeholder="About us" type="email" name="email"  value={about}  onChange={(e)=>setabout(e.target.value)} />
                        <div className='labe'>
                        </div>
                      </div>

               
                  </div>
                  <div class="form-row m-b-55">

                 
                      <div class="row row-space">
                        <div class="col-2">
                          <div class="input-group-desc">
                            <input class="input--style-5" placeholder="Website Links" type="text" name="first_name" value={link}  onChange={(e)=>setlink(e.target.value)}  />
                       
                          </div>
                        </div>
                        <div class="col-2">
                          <div class="input-group-desc">
                            <input class="input--style-5"  placeholder="Mobail" type="text" name="last_name"  value={numb}  onChange={(e)=>setnumb(e.target.value)} />
                     
                          </div>
                        </div>
                 
                    </div>
                  </div>

                 

                  <div>
                    <Link  className="linku" onClick={publish}><div className="buttp">Add Services</div></Link>
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
</>
 ))}
     
    </>


  )
}

export default UserWeb
