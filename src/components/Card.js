import React from "react";

const Card = (i) => {
  const item=i.ite
 console.log(item)
  return (
    <>
  
          
          
        
            <div className="col">
              <div className="card text-center">
                <img src={`${item.image}`} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                   {item.description}</p>
                   <button className="btn btn-warning">Veiw Details</button>
                </div>
              </div>
            </div>
          
      
    </>
  );
};

export default Card;
