import styles from "./title.module.css";
import type {TitleProps} from "./title.d";

export default function (props: {text: TitleProps}) {
    return (
        <div class={styles.titleText}>
            {props.text.h1 ? <h1>{props.text.h1}</h1> : null}
            {props.text.h2 ? <h2>{props.text.h2}</h2> : null}
            {props.text.h3 ? <h3>{props.text.h3}</h3> : null}
            {props.text.h4 ? <h4>{props.text.h4}</h4> : null}
        </div>
    );
}
