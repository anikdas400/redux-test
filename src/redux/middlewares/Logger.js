const logger= (store)=>(next)=>(action)=>{
    const currentState = store.getState()
    console.log("currentState =>", currentState)

    console.log("Action dispatch =>", action)

    next(action)
    
    console.log("Update state =>", store.getState())
}
export default logger