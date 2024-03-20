import classLister from 'css-module-class-lister';

const isActiveItem = (dataNav, styles) => dataNav.isActive ? styles.active : '';

const classNameFunction = (styles) => {
    return (classNames, dataNav = null) => {
        if (!styles || !classNames)
            return '';
        if (!Array.isArray(classNames)) {
            classNames = [classNames];
        }
        const lister = classLister(styles);
        return `${lister(...classNames)} ${dataNav ? isActiveItem(dataNav, styles) : ''}`;
    };
}

export {
    classNameFunction,
    isActiveItem
};