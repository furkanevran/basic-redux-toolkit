import { useAppDispatch, useAppSelector } from '../redux/store'
import {add, addAsync} from '../redux/reducers/counterReducer'

function Index() {
    const count:number = useAppSelector(state => state.counter.count)
    const loading:boolean = useAppSelector(state => state.counter.loading)

    const halfCount:number = useAppSelector(state => state.halfCounter.count)

    const dispatch = useAppDispatch()

    return (
        <div>
            <div>Counter: {loading ? 'Loading...' : count+' - '+halfCount}</div>
            <button onClick={() => dispatch(add(1))}>Increment 1</button>
            <button onClick={() => dispatch(add(-1))}>Decrement 1</button>
            <button onClick={() => dispatch(add(-count))}>Set to 0</button>
            <button onClick={() => dispatch(add(count))}>*2</button>
            <button onClick={() => dispatch(add((count+count)*-1))}>*-1</button>

            <button onClick={() => dispatch(addAsync(10))}>Async</button>
        </div>
    )
}

export default Index