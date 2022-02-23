import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const AddShop = () => {

    const [shopName, setShopName] = useState("");
    const [shopCity, setShopCity] = useState("");
    const [shopCategory, setShopCategory] = useState("");

    const shops = useSelector((state) => state);
    const dispatch = useDispatch();

    const history = useHistory();

    const handleSubmit = (e) => {

        e.preventDefault();



        if (!shopName || !shopCity || !shopCategory) {

            return toast.warning("Please fill all fields");
        }

        const data = {

            id: shops[shops.length - 1].id + 1,
            shopName,
            shopCity,
            shopCategory



        };
        dispatch({ type: "ADD_SHOP", payload: data });
        toast.success("Shop added succesfully");
        history.push("/");

    };


    return (

        <div>
            <div className='container'>
                <div className="row ">
                    <h1 className=" display-3 text-center mt-5">
                        Add shop
                    </h1>
                    <div className="col-md-6 shadow mx-auto  p-5">
                        <form onSubmit={handleSubmit}>
                            <div className="from-group">
                                <input type="text"
                                    placeholder='Shop Name'
                                    value={shopName}
                                    onChange={e => setShopName(e.target.value)}
                                    className="form-control my-3"
                                />
                            </div>
                            <div className="from-group">
                                {/* <input type="text"
                                    placeholder='City'
                                    value={shopCity}
                                    onChange={e => setShopCity(e.target.value)}
                                    className="form-control my-3"
                                /> */}
                                <select className='form-control' value={shopCity} onChange={e => setShopCity(e.target.value)} placeholder=" select city">
                                    <option value="">Select shop city</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Pune">Pune</option>
                                    <option value="Nagpu">Nagpur</option>
                                    <option value="Ahmednagar">Ahmednagar</option>
                                    <option value="Solhapur">Solhapur</option>
                                </select>
                            </div>
                            <div className="from-group">
                                {/* <input type="text"
                                    placeholder='Category'
                                    value={shopCategory}
                                    onChange={e => setShopCategory(e.target.value)}
                                    className='form-control my-3'
                                /> */}
                                <select className='form-control my-3' value={shopCategory} onChange={e => setShopCategory(e.target.value)} placeholder="select category">
                                    <option value="">select shop category</option>
                                    <option value="Grocery">Grocery</option>
                                    <option value="Buthcer">Buthcer</option>
                                    <option value="Baker">Baker</option>
                                    <option value="Chemist">Chemist</option>
                                    <option value="Stationary">Stationary</option>
                                </select>
                            </div>
                            <div className="from-group">
                                <input type="submit"
                                    value="Add Shop"
                                    className='btn btn-block btn-dark my-2'
                                />
                            </div>


                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddShop