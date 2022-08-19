import {Link} from "gatsby";
import * as React from "react";

import * as styles from "./nav.module.css";

const Nav = ({menuLinks}) => {
    return (
    <nav>
        <ul className={styles.navLinks}>
            {
                menuLinks.map(props => (
                        <li key={props.name} className={styles.navLinkItem}>
                            <Link to={props.link} className={styles.navLinkText}>{props.name}</Link>
                        </li>
                    )
                )
            }
        </ul>
    </nav>
    )
}

export default Nav