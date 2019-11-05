const styles = require('./orderEmailStyles')
// const cart = [
//     {
//       img_link:'https://i5.walmartimages.com/asr/209bb8a0-30ab-46be-b38d-58c2feb93e4a_1.1a15fb5bcbecbadd4a45822a11bf6257.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
//       name:'banana',
//       price:375,
//       quantity:3
//     },{img_link:'https://www.comenaranjas.com/images/stories/virtuemart/product/kiwi-jumbo.jpg',
//         name:'kiwi',
//         price:840,
//         quantity:2
//     }
//     ]

module.exports = (name,_id, total, cart) => (
	console.log(cart,'cart')
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