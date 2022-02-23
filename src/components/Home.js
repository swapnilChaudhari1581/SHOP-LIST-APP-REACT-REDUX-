import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { toast } from 'react-toastify';


const Home = () => {

    const shops = useSelector(state => state);
    const dispatch = useDispatch()

    const deleteShop = (id) => {

        dispatch({ type: "DELETE_SHOP", payload: id })
        toast.success("contact deleted successfully");




    }


    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12  my-5 text-end ">
                    <Link to="/add" className='btn btn-outline-dark'>Add Shop</Link>
                </div>
                <div className="col-md-10 mx-auto">
                    <table className='table table-hover' >
                        <thead className='text-white bg-dark text-center'></thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Shop Name</th>
                            <th scope='col'> City</th>
                            <th scope='col'>Category</th>
                            <th scope='col'>Action</th>
                        </tr>
                        <tbody>
                            {
                                shops.map((shop, id) => (
                                    <tr key={id}>
                                        <td>{id + 1}</td>
                                        <td>{shop.shopName}</td>
                                        <td>{shop.shopCity}</td>
                                        <td>{shop.shopCategory}</td>
                                        <td>
                                            <Link to={`/edit/${shop.id}`} className="btn btn-small btn-primary">Edit</Link>
                                            <button type="button" className='btn btn-samll btn-danger' onClick={() => deleteShop(shop.id)}>Delete</button>
                                        </td>
                                    </tr>

                                ))
                            }
                        </tbody>

                    </table>


                </div>
            </div>

        </div>
    )
}

export default Home