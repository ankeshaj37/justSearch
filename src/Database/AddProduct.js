import React, { useState, useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import Dmenus from "./Dmenus";
import { auth, db } from "../components/firebase";
import EnterKey from "../components/EnterKey";
import { Link } from "react-router-dom";


const AddProduct = () => {
  const [title, settitle] = useState("");
  const [address, setaddress] = useState("");
  const [details, setdetails] = useState("");
  const [image, setimage] = useState("");
  const [price, setprice] = useState("");
  const [mobile, setmobile] = useState("");

  const [user, setuser] = useState([]);
  const [select, setselect] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
    });
  }, []);

  const add = () => {
    db.collection("services").add({
      title: title,
      address: address,
      details: details,
      mobile: mobile,
      price: price,
      image: image,
      uid: user.uid,
    });
    db.collection("Category")
      .doc("6qJKByoZ3ETb0q9gbkXc")
      .collection(select)
      .add({
        title: title,
        address: address,
        details: details,
        mobile: mobile,
        price: price,
        image: image,
        uid: user.uid,
      });

    settitle("");
    setdetails("");
    setaddress('');
    setimage("");
    setprice("");
    setmobile("");
  };
  EnterKey(add, "Enter");

  return (
    <>
      <Dmenus />
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
                            <input class="input--style-5" placeholder="Image" type="text" name="last_name" value={image}  onChange={(e)=>setimage(e.target.value)} />
                          
                          </div>
                        </div>
                   
                    </div>
                  </div>
                  <div class="form-row">

               
                      <div class="input-group">
                        <input class="input--style-5" placeholder="Details" type="text" name="company" value={details}  onChange={(e)=>setdetails(e.target.value)}  />
                        <div className='labe'>
                        
                        </div>
                    

                    </div>
                  </div>
                  <div class="form-row">

                      <div class="input-group">
                        <input class="input--style-5" placeholder="Address" type="email" name="email"  value={address}  onChange={(e)=>setaddress(e.target.value)} />
                        <div className='labe'>
                        </div>
                      </div>

               
                  </div>
                  <div class="form-row m-b-55">

                 
                      <div class="row row-space">
                        <div class="col-2">
                          <div class="input-group-desc">
                            <input class="input--style-5" placeholder="Price" type="text" name="first_name" value={price}  onChange={(e)=>setprice(e.target.value)}  />
                       
                          </div>
                        </div>
                        <div class="col-2">
                          <div class="input-group-desc">
                            <input class="input--style-5"  placeholder="Mobail" type="text" name="last_name"  value={mobile}  onChange={(e)=>setmobile(e.target.value)} />
                     
                          </div>
                        </div>
                 
                    </div>
                  </div>

                  <div class="form-row">

                    <div class="value">
                      <div class="input-group">
                        <div class="input--style-5 rs-select2 js-select-simple select--no-search">
                          <select class="input--style-5" name="subject"  value={title}  onChange={(e)=>{setselect(e.target.value)}}>
                            <option selected>Choose Category</option>
                            <option className='optionse' >Select Category</option>
                            <option className='optionse' >Auto mobile</option>
                            <option className='optionse' >Labs</option>
                            <option className='optionse' >Decoration</option>
                            <option className='optionse' >Air Tickets</option>
                            <option className='optionse' >Bill & Recharge</option>
                            <option className='optionse' >Loans</option>
                            <option className='optionse' >House Keeping</option>
                            <option className='optionse' >Book Hotel</option>
                            <option className='optionse' >Designer</option>
                            <option className='optionse' >Programming</option>
                            <option className='optionse' >Emergency</option>
                            <option className='optionse' >Wedding</option>
                            <option className='optionse' >Real Estate</option>
                            <option className='optionse' >Jobs</option>
                            <option className='optionse' >Education</option>
                            <option className='optionse' >Jewellery</option>
                            <option className='optionse' >Flowers</option>
                            <option className='optionse' >Fitness</option>
                            <option className='optionse' >Hospitals</option>
                            <option className='optionse' >Doctor</option>
                            <option className='optionse' >DanceMusic</option>
                            <option className='optionse' >Sports</option>
                            <option className='optionse' >Caterers</option>
                            <option className='optionse' >Transporters</option>
                          </select>
                          <div class="select-dropdown"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Link  className="linku" onClick={add}><div className="buttp">Add Services</div></Link>
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default AddProduct;
