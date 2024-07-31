import { useDispatch, useSelector } from "react-redux";
import { decrement, increment,incrementByValue,decrementByValue } from "../redux/features/counter/counterSlice";



const Counter = () => {
    const { count } = useSelector((state) => state.counter)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Counter</h2>
            <button className="bg-green-400 mb-2 p-1 rounded-lg"  onClick={() =>dispatch(increment())}>Increment</button><br />
            <button className="bg-green-600 mb-2 p-1 rounded-lg" onClick={() =>dispatch(incrementByValue(5))}>Increment by 5</button>
            <h2 className="text-5xl ml-52">{count}</h2>
            <button className="bg-red-400 mb-2 p-1 rounded-lg" onClick={() =>dispatch(decrement())}>Decrement</button><br />
            <button className="bg-red-600 mb-2 p-1 rounded-lg" onClick={() =>dispatch(decrementByValue(5))}>Decrement by 5</button>
        </div>
    );
};

export default Counter;