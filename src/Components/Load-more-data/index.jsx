import { useEffect, useState } from "react";
import './style.css'
export default function LoadMoreData() {

    const [Loading, setLoading] = useState(false);
    const [products, setproducts] = useState([]);
    const [count, setcount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);


    async function fetchProducts() {

        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 20}`)



            const result = await response.json();
            console.log(result);

            if (result && result.products && result.products.length) {
                setproducts((prevData)=>[...prevData, ...result.products]);
                setLoading(false)

            }



            console.log(result)
        }
        catch (e) {
            console.log(e);
            setLoading(true)

        }

    }

    useEffect(() => { fetchProducts() }, [count])
    useEffect(()=>{if (products && products.length === 100 ) setDisableButton(true)})

    if (Loading) {
        return <div>Loading please wait</div>
    }
    return (
        <>
            <div className="product-container">
                <div className="product-list">
                    {products && products.length ? 
                        products.map(item => (
                            <div key={item.id} className="product-item">
                                <img src={item.thumbnail} alt={item.title} className="product-image" />
                                <p className="product-title">{item.title}</p>
                                <p className="product-price">${item.price}</p>
                                <p className="product-rating">Rating: {item.rating}</p>
                            </div>
                        )) 
                        : <p>No products available.</p>
                    }
                <div className="buttton-container">
                    <button disabled={disableButton} onClick={()=>setcount(count + 1)}>Load more!!</button>
                    {disableButton ? <p>You have reached to 100 products limit!!</p>:null}
                </div>
                </div>
            </div>
        </>
    );
    
}