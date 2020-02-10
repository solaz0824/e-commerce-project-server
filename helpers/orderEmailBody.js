const styles = require('./orderEmailStyles')

module.exports = (name,_id, total, cart) => (
	console.log('from template ========================',name,_id, total, cart)
	`<div  style=${styles.container}>
         <h1>Hello ${name}, thank you for your order!</h1>
         <h3>Your order number is ${_id}</h3>	
				 ${
           	 cart.map (ele => {
           	 	return`<div style=${styles.cartItem}>
           	 	           <div style=${styles.imageContainer}>
           	 	              <img width="100%" height="100%" src=${ele.image} alt=${ele.product}>
           	 	           </div>
           	 	           <div style=${styles.textContainer}>
           	 	              <div  style=${styles.textElement}><p>product: ${ele.product}</p></div>
           	 	              <div  style=${styles.textElement}><p>price: ${ele.price} €</p></div>
           	 	              <div  style=${styles.textElement}><p>quantity: ${ele.qty}</p></div>
           	 	           </div>
           	 	       </div>`
           	 })
           }
           <div style=${styles.footer}>
                 <p>total ${total} €</p>
           </div>
	</div>`
)