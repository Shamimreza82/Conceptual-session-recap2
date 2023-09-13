import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Home = () => {
  const [data, setData] = useState([]);
  const [actorData, setActorData] = useState([])
  const [totalCount, setTotalCount] =useState(0)
  const [remaningBalance, setRemaningBalance] = useState(0)



  useEffect(() => {
    fetch("data.json")
      .then((rsc) => rsc.json())
      .then((data) => setData(data));
  }, []);

  const handleSelect =(actor)=>{
    let count = actor.salary
    const isExisit = actorData.find(item=> item.name == actor.name)
    if(isExisit) {
        return alert (" already Seleted")
    }
    actorData.forEach(total => {count = count + total.salary})
    const remaningBalance = 20000 - count; 
        if(count > 20000 ) {
            return alert ("Low Balance")
        }
        else {
            setRemaningBalance(remaningBalance);
            setTotalCount(count)
            setActorData ([...actorData, actor])
        }

  }


  console.log (actorData)

  return (
    <div className="flex lg:flex-row flex-col-reverse ">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 lg:w-[80%]">
        {/*Cards */}
        {data.map((actor) => (
          <div key={actor.id} className="card card-compac bg-base-100 shadow-xl">
            <figure>
              <img className="rounded-full" src={actor.image} alt="Shoes" />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title ">{actor.name}</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, rerum.</p>
              <p>Salary: {actor.salary} Writer: {actor.role} </p>
              <div className="card-actions justify-center">
                <button onClick={() => handleSelect(actor)} className="btn btn-primary">Select</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Show cards data */}
      <div>
        <Cart 
        actorData ={actorData} 
        totalcount={totalCount}
        remaningBalance ={remaningBalance}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
