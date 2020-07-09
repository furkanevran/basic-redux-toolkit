import { Provider } from 'react-redux'
import store, {RootState} from '../redux/store'

function App({Component, pageProps}) {
    return (
        <Provider store={store}>
            <Component {...pageProps}/>
        </Provider>
    )
}

export default App