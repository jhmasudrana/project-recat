import { useState } from "react";
import Nav from "../Nave/Nav";
import { MdOutlineMenuBook } from 'react-icons/md';
import { CgMenuOreos } from 'react-icons/cg';

const Navber = () => {
    const [open, setOpen] = useState(false)
    const routesData = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
    ];

    return (

        <div>

            <div className=" bg-green-700 text-black" onClick={() => setOpen(!open)}>
                {
                    open === true ? <CgMenuOreos className="text-4xl  text-blue-800 md:hidden" ></CgMenuOreos> : <MdOutlineMenuBook className="text-4xl  md:hidden"></MdOutlineMenuBook>
                }


            </div>

            <ul className={`md:flex absolute duration-1000 md:static bg-green-700
              ${open ? 'top-7' : '-top-60'}
            text-white p-4 rounded-lg mt-3 `}>
                {
                    routesData.map(routes => <Nav key={routes.id} route={routes}></Nav>)
                }
            </ul>
        </div>
    );
};

export default Navber;