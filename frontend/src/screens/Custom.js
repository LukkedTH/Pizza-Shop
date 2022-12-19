import React, { useEffect, useState } from "react";
// import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../actions/productActions";
import Header from "../components/Header";


const myStyle = {
    color: "black",
    // font: "right",
    // fontsize: "200px",
    
    fontFamily: "Lato",
    margin: "center",
    textAlign: "center"
    
  };

//   <style>
//     table, th, td  {
//     margin: "center"
//     };
//     </style>

    // const note = {
    //     width: "40%",
    //     height: "40px",
    //     padding: "40px",
    //     Align: "center",
    //     margin: "center",
    // }

const Container = {
    padding: "20px",
    border : "red solid 1px"
};

const Custom = (props) => {
    const [qty, setQty] = useState(1);

    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
      };
  return (
    <div style={myStyle}>
      <h2 margin-top="200px">
        Custom Pizza
      </h2>
        <div>
            <label>
                Quantity:&nbsp;&nbsp;
            </label>
            <select>
            {Qty.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
            </select>
        </div>
        <br></br>
        <div>
            <label>Size:&nbsp;&nbsp;</label>
            <select>
            {size.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
            </select>
        </div>
                        {/* <div className="aa-prod-size">
                          <form action="size">
                            Size:{"  "}
                                  <a href="#">S</a>
                                  <a href="#">M</a>
                                  <a href="#">L</a>
                                  <a href="#">XL</a>
                          </form>   
                        </div> */}
                        <br></br>
                        <div className="aa-prod-crust">
                          <h2>Choose your crust</h2>
                        <form method="post" action="">
                            <label><input type="radio" name="name" />&nbsp;&nbsp;&nbsp;Classic hand tossed</label>
                            <br></br>
                            <label><input type="radio" name="name"/>&nbsp;&nbsp;&nbsp;Thin & Cripy</label>
                          </form>
                        </div>
                        <br></br>
                        <div className="aa-prod-topping">
                          <h2>Topping</h2>
                            {/* <form action=""> */}
                        
                            <table align="center">
                            <tr>
                                <th>Choose Meats&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                                <th>&nbsp;&nbsp;Choose Non-Meats</th>
                            </tr>
                            <br></br>
                            <tr>
                                <td><label><input type="checkbox" name="1"/> &nbsp;Chicken</label></td>
                                <td><label><input type="checkbox" name="1"/> &nbsp;Green Capsicun</label></td>
                            </tr>
                            <tr>
                                <td><label><input type="checkbox" name="1"/>  &nbsp;Squid</label></td>
                                <td><label><input type="checkbox" name="1"/>  &nbsp;Red Chili</label></td>
                            </tr>
                            <tr>
                                <td><label><input type="checkbox" name="1"/>  &nbsp;Ham</label></td>
                                <td><label><input type="checkbox" name="1"/>  &nbsp;Pineapple</label></td>
                            </tr>
                            <tr>
                                <td><label><input type="checkbox" name="1"/>  &nbsp;Shrimp</label></td>
                                <td><label><input type="checkbox" name="1"/>  &nbsp;Corn</label></td>
                            </tr>
                            <tr>
                                <td><label><input type="checkbox" name="1"/>  &nbsp;Pepperoni</label></td>
                            </tr>
                            <tr>
                                <td><label><input type="checkbox" name="1"/>  &nbsp;Sausage</label></td>
                            </tr>
                            </table>
                          {/* </form> */} 
                        </div>
                        <br></br>

                        <div classname form-control>
                            <form action="">
                                <label for="fname">Note:    &nbsp;</label>
                                <input type="text" id="fname" name="fname"/><br></br>
                            </form>
                        </div>

                        <br></br>
                        <div className="aa-prod-view-bottom">
                          <button
                            onClick={handleAddToCart}
                            className="aa-add-to-cart-btn"
                          >
                            Add To Cart
                          </button>
                        </div>
                      </div>
            
  );
};
  // size
const size = [
    {
      label: "S",
      value: "S",
    },
    {
      label: "M",
      value: "M",
    },
    {
      label: "L",
      value: "L",
    },
    {
      label: "XL",
      value: "XL",
    },
  ];
//   Qty
  const Qty = [
    {
      label: "1",
      value: "1",
    },
    {
      label: "2",
      value: "2",
    },
    {
      label: "3",
      value: "3",
    },
    {
      label: "4",
      value: "4",
    },
    {
        label: "5",
        value: "5",
      },
      {
        label: "6",
        value: "6",
      },
      {
        label: "7",
        value: "7",
      },
      {
        label: "8",
        value: "8",
      },
      {
        label: "9",
        value: "9",
      },
      {
        label: "10",
        value: "10",
      },
  ];  
//   <div className="aa-prod-view-bottom">
//   <button
//     onClick={handleAddToCart}
//     className="aa-add-to-cart-btn">
//     Add To Cart
//   </button>
// </div>
export default Custom;