import s from './Preloader.module.css';
import { classNameFunction } from "../../../utils/classNameCompiler";

const cName = classNameFunction(s);

const Preloader = (props) => {
    return <div className={cName(['preloader'])}>
        {props.content}
    </div >
}

export default Preloader;

