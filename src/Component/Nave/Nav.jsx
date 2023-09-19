import PropTypes from 'prop-types'; 

const Nav = ({route}) => {
    return (
        <div>
            <ul>
                <li className="mx-4 hover:bg-green-400 "><a href={route.path}> {route.name}</a></li>
            </ul>
        </div>
    );
};

Nav.propTypes = {
    route: PropTypes.object
}
export default Nav;