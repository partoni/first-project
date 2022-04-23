import React,{ useState } from "react"



export const Dispetchers = ()=>{
    const [dispetchers, setDispetchers] = useState([])

    return(
        <div>
            <ul>
            {dispetchers.length
            ?dispetchers.map(dis=><li>{dis.name}   {dis.firstname}</li>)
            :<div>нет диспетчеров</div>
            }
            </ul>
        {/* <div>
            <form >
                <label><input></input></label>
                <label><input></input></label>
                <button></button>
            </form>
        </div>
        <ul>
            {drivers.length
            ? drivers.map(driver=><li key={driver.id}>{driver.name} {driver.firstName} {driver.auto} </li>)
            :<span>Нет водителей</span>
            }
        </ul> */}
        </div>
    )
}