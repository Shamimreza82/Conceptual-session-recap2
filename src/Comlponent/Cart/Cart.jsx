import PropTypes from 'prop-types'
const Cart = ({actorData, totalcount, remaningBalance}) => {
    return (
        <div>
           <div className='bg-slate-300 py-2'>
           <h1 className='mb-5 mx-5 mr-5 font-bold'>Actor List Count: {actorData.length} Total</h1>
           <h1 className='mb-5 mx-5 mr-5 font-bold'>Total Count: {totalcount}$ Total</h1>
           <h1 className='mb-5 mx-5 mr-5 font-bold'>Remaninng Blance: {remaningBalance}$ Total</h1>
    
           <hr />
            {
            actorData.map(actorName => <p className='my-2 mx-5  bg-slate-200 p-2 rounded-md'
             key={actorName.id} > 
            Id:{actorName.id}
            {actorName.name} 
            ${actorName.salary}</p>)
        }
           </div>
        </div>
    );
};

Cart.PropTypes = {
    Cart: PropTypes.object.isRequired
}


export default Cart;


