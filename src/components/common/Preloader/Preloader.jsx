import s from './Preloader.module.css';
import { classNameFunction } from "../../../utils/classNameCompiler";

const cName = classNameFunction(s);

const Preloader = ({ content, styles, classes, ...props }) => {
    return <div style={styles} className={cName(['preloader'].concat(classes))}>
        {content}
    </div >
}

export default Preloader;

