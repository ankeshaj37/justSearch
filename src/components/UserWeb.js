
import React, { useState, useEffect } from 'react'
import { auth, db } from './firebase'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';


const UserWeb = () => {

  const [title, settitle] = useState('')
  const [background, setbackground] = useState('')
  const [logo, setlogo] = useState('')
  const [about, setabout] = useState('')

  const [link, setlink] = useState('')
  const [numb, setnumb] = useState('')
  const [data, setdata] = useState([])


  const [User, setUser] = useState([]);



  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    });
  }, [])

  const publish = () => {
    db.collection('userweb').add({ title: title, background: background, logo: logo, about: about, link: link, numb: numb })

  }

  const update = () => {
    db.collection('userweb').doc('K1WxR32QAwEhZrW440r3').update({ title: title, background: background, logo: logo, about: about, link: link, numb: numb })

  }


  useEffect(() => {
    db.collection('userweb').onSnapshot(tap => (
      setdata(tap.docs.map((e) => ({ uid: e.id, data: e.data() })))
    ))
  }, [])

  return (
    <>
      {data.map((e) => (
        <>
          <div className=' container'>
            <div >
              <img className="logoavta" src={e.data.background} />
              <div className="boxxe">
                <div className="logoo">
                  <img className="logoop" src={e.data.logo}></img>
                </div>
              </div>
              <h3 className="webtitle">{e.data.title}</h3>
            </div>
            <div className="wsr container-fluid text-center">
              <Tabs>
                <TabList>
                  <Tab>Totale services</Tab>
                  <Tab>Reviews</Tab>
                  <Tab>About us</Tab>
                  <Tab>Contact us</Tab>
                  <Tab>Website Link</Tab>
                </TabList>
                <TabPanel>
                  <p>services</p>
                </TabPanel>
                <TabPanel>
                  <p>{e.Reviews}</p>
                </TabPanel>
                <TabPanel>
                  <p>{e.about}</p>
                </TabPanel>
                <TabPanel>
                  <p><a target="_blank" href={"tel:" + e.numb}>{e.numb}</a></p>
                </TabPanel>
                <TabPanel>
                  <p><a target="_blank" href={e.link}>{e.link}</a></p>
                </TabPanel>
              </Tabs>
            </div>
          </div>
          <div>
            <div class="container-fluid px-1 py-5 mx-auto">
              <div class="row d-flex justify-content-center">
              </div>
            </div>
          </div>
        </>
      ))}
      <div class="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div class="wrapper wrapper--w790">
          <div class="card card-5">
            <div class="card-heading">
            </div>
            <div class="card-body">
              <form >
                <div class="row row-space">
                  <div class="col-2">
                    <div class="input-group-desc">
                      <input class="input--style-5" placeholder="Title" type="text" name="first_name" value={title} onChange={(e) => settitle(e.target.value)} />
                    </div>
                  </div>
                  <div class="col-2">
                    <div class="input-group-desc">
                      <input class="input--style-5" placeholder="Image Background" type="text" name="last_name" value={background} onChange={(e) => setbackground(e.target.value)} />
                    </div>
                  </div>
                </div><p></p><br />
                <div class="form-row">
                  <div class="input-group">
                    <input class="input--style-5" placeholder="Logo" type="text" name="company" value={logo} onChange={(e) => setlogo(e.target.value)} />
                    <div className='labe'>
                    </div>
                  </div>
                </div>
                <div class="form-row">
                  <div class="input-group">
                    <input class="input--style-5" placeholder="About us" type="text" name="email" value={about} onChange={(e) => setabout(e.target.value)} />
                    <div className='labe'>
                    </div>
                  </div>
                </div>
                <div class="row row-space">
                  <div class="col-2">
                    <div class="input-group-desc">
                      <input class="input--style-5" placeholder="Website Links" type="text" name="first_name" value={link} onChange={(e) => setlink(e.target.value)} />
                    </div>
                  </div>
                  <div class="col-2">
                    <div class="input-group-desc">
                      <input class="input--style-5" placeholder="Mobail" type="text" name="last_name" value={numb} onChange={(e) => setnumb(e.target.value)} />
                    </div>
                  </div>
                </div><p></p><br />
                <div>
                  <Link className="linku" onClick={update}><div className="buttp">update</div></Link>
                  <br />
                  <Link className="linku" onClick={publish}><div className="buttp">publish</div></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>


  )
}

export default UserWeb
