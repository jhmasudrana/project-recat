import PropTypes from 'prop-types'; 
import { AiOutlineCheck } from "react-icons/ai";


const Features = ({features}) => {
    
    return (
        <div>
            <div className=' ml-6 mt-4 items-center  flex'>
            <AiOutlineCheck className='bg-red mr-3'></AiOutlineCheck>
             <p>{features}</p>
             
        </div>
        
        </div>
    );
};
Features.propTypes = {
    features: PropTypes.string
}
export default Features;