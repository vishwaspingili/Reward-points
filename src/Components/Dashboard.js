import react, { useState } from 'react';
import Header from './Header';
import Cards from './Cards';
import ItemsList from './ItemsList';
import Rewards from './Rewards';

export default function Dashboard({ products }) {
    const [cartItems, setCartItems] = useState([]);
    const [cart, setCart] = useState(false);
    const [productHistory, setProductHistory] = useState({});
    const [rewards, showRewards] = useState(false);
    const [showPoints, setShowPoints] = useState(false);
    const [points, setPoints] = useState({});

    const handleAddToCart = (data) => {
        let products = [...cartItems];
        let findItem = products.find(itm => itm.id === data.id);
        if (!findItem) {
            products.push(data);
        } else {
            findItem['count'] += 1;
            const index = products.findIndex(findItem);
            products.splice(index, 0, findItem);
        };
        setCartItems([...products]);
    };

    return (
        <div>
            <Header
                products={cartItems}
                setCart={(value) => setCart(value)}
                showRewards={(value) => showRewards(value)}
                setShowPoints={val => setShowPoints(val)}
                showPoints={showPoints}
                points={points}
            />
            {
                showPoints ? <Rewards points={points} cartItems={cartItems} productHistory={productHistory} /> : !cart ? <Cards products={products} handleAddToCart={(data) => handleAddToCart(data)} /> :
                    <ItemsList
                        rewards={rewards}
                        cartItems={cartItems}
                        setCartItems={(value) => setCartItems(value)}
                        showRewards={(val) => showRewards(val)}
                        setPoints={val => setPoints(val)}
                        points={points}
                        productHistory={productHistory}
                        setProductHistory={val => setProductHistory(val)}
                    />
            }

        </div>
    )
}
