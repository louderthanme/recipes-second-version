import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Navigation = () => {

    return (
        <Fragment> {/* Contains the entire page */}

            <div>
                <div >
                    <Link to="/">
                        Home
                    </Link>
                </div>
            </div>
            <Outlet /> {/* Renders child routes */}
        </Fragment>
    );
};

export default Navigation;