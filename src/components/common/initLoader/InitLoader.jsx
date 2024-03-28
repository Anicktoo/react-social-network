import s from './InitLoader.module.css'


const InitLoader = (props) => {
    return (
        <div className={s.loaderContainer}>
            <span className={s.loader}></span>
        </div>
    );
}

export default InitLoader;