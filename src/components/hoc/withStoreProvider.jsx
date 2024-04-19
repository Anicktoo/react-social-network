import { Provider } from "react-redux";
import store from './../../redux/reduxStore';

const withStoreProvider = (Component) => {
    return (props) => {
        return <Provider store={store}>
            <Component {...props} />
        </Provider>
    }
}

export default withStoreProvider;