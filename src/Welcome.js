import { Link, Outlet } from "react-router-dom";

const Welcome = () => {

    return(
        <>
            <header>
                <h1>My Portfolio</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/about"}>About</Link>
                        </li>
                        <li>
                            <Link to={"/projects"}>Projects</Link>
                        </li>
                        <li>
                            <Link to={"/contact"}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )

}

export default Welcome;