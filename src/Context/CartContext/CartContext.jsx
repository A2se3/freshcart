import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()
let headers = { token: localStorage.getItem("userToken") }

export default function CartContextProvider(props) {
    const [numOfCartItems, setNumOfCartItems] = useState(0)

    function addToCart(productId) {
        return axios
            .post("https://ecommerce.routemisr.com/api/v1/cart",
                {
                    productId,
                }, {

                headers,
            })
            .then((response) => response)
            .catch((err) => err);
    }

    function getLoggeedCart() {
        return axios
            .get("https://ecommerce.routemisr.com/api/v1/cart", {

                headers,
            }).then((response) => response)
            .catch((err) => err);
    }

    function deleteSpecificItem(id) {
        return axios
            .delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
                headers,
            })
            .then((response) => response)
            .catch((err) => err);
    }

    function updateProduct(id, count) {
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
            count: count
        },
            { headers }
        )
            .then((response) => response)
            .catch((err) => err);
    }

    function onlinePayment(cartId, shippingAddress) {
        return axios.post("https://ecommerce.routemisr.com/api/v1/orders/checkout-session/66d35ee30a8d7cecdac4fa4a",
            { shippingAddress }, {
            headers,
            params: { url: "http://localhost:5173" }
        }
        ).then((data)=> data)
        .catch((err)=>err)
    }

    async function getCartItem() {
        let { data } = await getLoggeedCart();
        setNumOfCartItems(data.numOfCartItems)

    }

    useEffect(() => {
        getCartItem();
    }, []);
    return (
        <CartContext.Provider value={{
            addToCart,
            getLoggeedCart,
            deleteSpecificItem,
            updateProduct,
            numOfCartItems,
            setNumOfCartItems,
            onlinePayment
        }}>
            {props.children}

        </CartContext.Provider>
    )

}