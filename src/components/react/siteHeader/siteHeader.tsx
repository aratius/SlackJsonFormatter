import { Component } from "react";
import styles from "../../../styles/layout/sideBar/siteHeader.module.scss"

export default class SiteHeader extends Component {

    render() {
        return (
            <div className={styles.container}>
                <h1>Slack Formatter</h1>
            </div>
        )
    }

}