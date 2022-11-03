import React from "react";
import LeftCards from "./LeftCards";

export default function ArticleCard({ Heading }) {
  return (
    <div className="w-80">
    <div className="card ms-4 p-3" style={{ width: "80%",backgroundColor:'cyan' }}>
   <h4>Never Miss a post</h4>
   <p>lorem This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
   <input type='email' placeholder='Email'/>
    </div>


    <div className=" ms-4  mt-2" style={{ width: "80%" }}>
        <h5 className="ps-3 pt-3">Popular Blogs</h5>
        <hr />
        <div className="" style={{fontSize:'10px'}}>
        <LeftCards/>
        <LeftCards/>
        <LeftCards/>

        </div>
</div>
    </div>
  );
}
