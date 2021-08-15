import { Component } from "react";
import styles from "../../../styles/layout/sideBar/siteHeader.module.scss"

export default class SiteHeader extends Component {

    render() {
        return (
            <div className={styles.container}>
                <h1>
                    <span className={styles.logo}></span>
                    <span className={styles.title}>Slack Formatter</span>
                </h1>
                <p className={styles.help}>

                </p>
            </div>
        )
    }

}