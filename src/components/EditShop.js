import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const EditShop = () => {

    const [shopName, setShopName] = useState("");
    const [shopCity, setShopCity] = useState("");
    const [shopCategory, setShopCategory] = useState("");

    const { id } = useParams();

    const shops = useSelector(state => state);

    const currentShop = shops.find(shop => shop.id === parseInt(id));


    const dispatch = useDispatch();

    const history = useHistory();

    useEffect(() => {

        if (currentShop) {
            setShopName(currentShop.shopName);
            setShopCity(currentShop.shopCity);
            setShopCategory(currentShop.shopCategory);
        }



    }, [currentShop]);

    const handleSubmit = (e) => {

        e.preventDefault();



        if (!shopName || !shopCity || !shopCategory) {

            return toast.warning("Please fill all fields");
        }

        const data = {

            id: parseInt(id),
            shopName,
            shopCity,
            shopCategory



        };
        dispatch({ type: "UPDATE_SHOP", payload: data });
        toast.success("Shop  updated succesfully");
        history.push("/");


    };





    return (
        <div>
            <div className='container'>
                {currentShop ? (

                    <>

                        <div className="row ">
                            <h1 className=" display-3 text-center mt-5">
                                Edit shop {id}
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
                                        <input type="text"
                                            placeholder='City'
                                            value={shopCity}
                                            onChange={e => setShopCity(e.target.value)}
                                            className="form-control my-3"
                                        />
                                    </div>
                                    <div className="from-group">
                                        <input type="text"
                                            placeholder='Category'
                                            value={shopCategory}
                                            onChange={e => setShopCategory(e.target.value)}
                                            className='form-control my-3'
                                        />
                                    </div>
                                    <div className="from-group">
                                        <input type="submit"
                                            value=" Update Shop"
                                            className='btn  btn-dark my-1'
                                        />
                                        <Link
                                            to="/"
                                            className='btn  btn-danger my-1 mx-3'
                                        >Cancel</Link>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </>
                ) : (

                    <h1 className='display-3 my-5 text-center'>
                        shop details with id {id} not exsits
                    </h1>

                )}


            </div>
        </div>

    )
}

export default EditShop