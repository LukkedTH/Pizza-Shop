import React, { useEffect, useState } from "react";
// import ReactDOM from 'react-dom/client';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../actions/productActions";
import Header from "../components/Header";

const margin = {
    margin: "40px"
}
const myStyle = {
    color: "black",
    // font: "right",
    // fontsize: "200px",
    
    fontFamily: "Lato",
    margin: "center",
    textAlign: "center"
    
  };



const Container = {
    padding: "20px",
    border : "red solid 1px"
};

const Random = (props) => {
    const [qty, setQty] = useState(1);

    const size = ["S","M","L","XL"];

    const crust = ["Classic hand tossed","Thin&Cripy"];

    const meats = ["Chicken", "Squid", "Ham", "Shrimp", "Pepperoni", "Sausage"];

    const nonMeats = ["Green Capsicun", "Red Chili", "Pineapple", "Corn"];


    const getRandomSize = () => {
        return size[Math.floor(Math.random() * size.length)];
      };
      const [sizetitle, setResearchTitle] = useState("");
      const handleClick = () => {
        // shuffle array and pick random
        const size = getRandomSize();
        setResearchTitle(size);
      };

      const getRandomCrust = () => {
        return crust[Math.floor(Math.random() * crust.length)];
      };
      const [crusttitle, setResearchTitle1] = useState("");
      const handleClick1 = () => {
        // shuffle array and pick random
        const crust = getRandomCrust();
        setResearchTitle1(crust);
      };


    const getRandomMeats = () => {
      return meats[Math.floor(Math.random() * meats.length)];
    };
    const [meatstitle, setResearchTitle2] = useState("");
    const [meatstitle1, setResearchTitle2_1] = useState("");
    const [meatstitle2, setResearchTitle2_2] = useState("");
    const handleClick2 = () => {
      // shuffle array and pick random
      const meats = getRandomMeats();
      const meats1 = getRandomMeats();
      const meats2 = getRandomMeats();
      setResearchTitle2(meats);
      setResearchTitle2_1(meats1);
      setResearchTitle2_2(meats2);
    };

    const getRandomNonMeats = () => {
      return nonMeats[Math.floor(Math.random() * nonMeats.length)];
    };
    
    
    const [nonMeatstitle, setResearchTitle3] = useState("");
    const [nonMeatstitle1, setResearchTitle3_1] = useState("");
    const handleClick3 = () => {
      // shuffle array and pick random
      const nonMeats = getRandomNonMeats();
      const nonMeats1 = getRandomNonMeats();
      setResearchTitle3(nonMeats);
      setResearchTitle3_1(nonMeats1);
    }
      
    
    
   
    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
      };
  return (
    <div style={myStyle}>
      <h2>
        Random Pizza
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
            
            <h2>
                Random pizza size
             </h2>
                <h6>Size: S ( 3$ ) , M ( 6$ ) , L ( 8$ ) , XL ( 10$ ) &nbsp;&nbsp;</h6>
                <h1>{sizetitle}</h1>
                </div>
                

                <div id="random-size"></div>
                <button class="btn btn-primary" onClick={handleClick}>Random Size</button>
                <br></br>
                <br></br>
            <h2>        
                Random curst
            </h2>
                <h6>Classic hand tossed or Thin&Cripy</h6>
                <h1>{crusttitle}</h1>
                <div id="random-crust"></div>
                <button class="btn btn-primary" onClick={handleClick1}>Random crust</button>
                <br></br>
                <br></br>

                <h2>Random Topping</h2>
                <table align="center">
                <tr>
                    <td>Meats ( 2$ )</td>
                    <td>Non-Meats ( 1$ )</td>
                </tr>
                <br></br>
                <tr>
                    <td>Chicken</td>
                    <td>Green Capsium</td>
                </tr>
                    <tr>
                    <td>Squid</td>
                    <td>Red Chili</td>
                </tr>
                    <tr>
                    <td>Ham</td>
                    <td>Pineapple</td>
                </tr>
                    <tr>
                    <td>Shrimp</td>
                    <td>Corn</td>
                </tr>
                    <tr>
                    <td>Peperoni</td>
                </tr>
                    <tr>
                    <td>Sausage</td>
                </tr>
                <tr>
                    <td>
                        <h5>{meatstitle} , {meatstitle1} , {meatstitle2} &nbsp;&nbsp;&nbsp;</h5>
                        <div id="random-meats"></div>
                        <button class="btn btn-primary" onClick={handleClick2}>Random Meats</button>
                    </td>

                    <td>
                        <h5> {nonMeatstitle} , {nonMeatstitle1}</h5>
                        <div id="random-non-meats"></div>
                        <button class="btn btn-primary" onClick={handleClick3}>Random Non Meats</button>
                    </td>
                </tr>
                </table>
                <br></br>
                <br></br>
                        <div>
                            <form action="">
                                <label for="fname">Note:    &nbsp;</label>
                                <input type="text" id="fname" name="fname"/><br></br>
                            </form>
                        </div>
                       
                        <br></br>
                        <br></br> 
                        <h2>$</h2>
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
//   // size
// const size = [
//     {
//       label: "S",
//       value: "S",
//     },
//     {
//       label: "M",
//       value: "M",
//     },
//     {
//       label: "L",
//       value: "L",
//     },
//     {
//       label: "XL",
//       value: "XL",
//     },
//   ];
  
  //Random size
  const randomsize= [
    {
        
    }
  ]
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
export default Random;
 //const getRandomNumber = (max) => Math.floor(Math.random() * max);
//
    //const getRandomSize = () => `${size[getRandomNumber(size.length)]}`;
    //const setRandomSize = () => {document.getElementById('random-size').innerText = getRandomSize();}
    //document.getElementById('generate-size').addEventListener('click', setRandomSize);
    //setRandomSize();
    //const getRandomCrust = () => `${crust[getRandomNumber(crust.length)]}`;
    //const setRandomCrust = () => {document.getElementById('random-crust').innerText = getRandomCrust();}
    //document.getElementById('generate-crust').addEventListener('click', setRandomCrust);
    //setRandomCrust();
    //const getRandomMeats = () => `${meats[getRandomNumber(meats.length)]} ${meats[getRandomNumber(meats.length)]} ${meats[getRandomNumber(meats.length)]}`;
    //const setRandomMeats = () => {document.getElementById('random-meats').innerText = getRandomMeats();}
    //document.getElementById('generate-meats').addEventListener('click', setRandomMeats);
    //setRandomMeats();
    //const getRandomNonMeats = () => `${nonMeats[getRandomNumber(nonMeats.length)]} ${nonMeats[getRandomNumber(nonMeats.length)]}`;
    //const setRandomNonMeats = () => {document.getElementById('random-non-meats').innerText = getRandomNonMeats();}
    //document.getElementById('generate-non-meats').addEventListener('click', setRandomNonMeats);
    //setRandomNonMeats();
