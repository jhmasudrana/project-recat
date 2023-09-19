import Price from "../Price/Price";


const PriceOption = () => {
    const priceOptions = [
        {
            id: 1,
            optionName: "Basic Membership",
            price: 29.99,
            features: [
                "Access to gym equipment",
                "Locker room access",
                "Free weights area",
                "Cardio machines",
                "Month-to-month contract",
                "24/7 gym access",
                "Fitness assessment"
            ]
        },
        {
            id: 2,
            optionName: "Premium Membership",
            price: 49.99,
            features: [
                "Access to gym equipment",
                "Locker room access",
                "Free weights area",
                "Cardio machines",
                "Group fitness classes",
                "Personal trainer sessions",
                "No contract",
                "Sauna access",
                "Towel service"
            ]
        },
        {
            id: 3,
            optionName: "Student Membership",
            price: 19.99,
            features: [
                "Access to gym equipment",
                "Locker room access",
                "Free weights area",
                "Cardio machines",
                "Valid student ID required",
                "Month-to-month contract",
                "Access during off-peak hours",
                "Nutritional guidance"
            ]
        }
    ];
    return (
        <div className="m-12">
            <h2 className="text-5xl text-center bg-lime-300 text-black mt-5"> Best Price in the Towon</h2>
            <div  className="grid  md:grid-cols-3 gap-6 mt-4">
            {
                priceOptions.map(price => <Price key={price.id} pprice={price}></Price>)
            }
            </div>
        </div>
    );
};

export default PriceOption;