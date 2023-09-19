import Features from "./Features/Features";


const Price = ({ pprice }) => {

    const { optionName, price, features } = pprice;
    return (
       <div>
         <div className="bg-blue-500 rounded-lg p-4  text-white">
            <h2 className="text-center">
                <span className=" text-7xl"> {price}</span>
                <span className=" text-3xl">/mon</span>
            </h2>
            <h4 className="text-2xl text-center">{optionName}</h4>
            {
                
           features.map( (future, index) => <Features key={index} features={future} ></Features>)
           }
           <div>
           <button className="bg-green-400 p-3 w-full rounded-lg mt-3">Buy Now</button>
           </div>
        </div>
        
       </div>
       
    );
};

export default Price;