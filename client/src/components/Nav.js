import whiteLogo from "../images/tinder_logo_white.png";
import colorLogo from "../images/color-logo-tinder.png";

const Nav = ({ authToken, changeLogo, setShowModal, showModal, setIsSignUp }) => {
    const handleClick = () => {
        setShowModal(true);
        setIsSignUp(false);
    };


    return (
        <nav>
            <div className="logo-container">
                <img
                    className="logo"
                    src={changeLogo ? colorLogo : whiteLogo}
                    alt="logo"
                />
            </div>
            {!authToken && !changeLogo && (
                <button
                    className="nav-button"
                    onClick={handleClick}
                    disabled={showModal}
                >
                    Entre
                </button>
            )}
        </nav>
    );
};
export default Nav;