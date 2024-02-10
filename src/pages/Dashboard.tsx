import { useEffect, useState } from "react"
import { PRODUCT } from "../types/Product"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import { addProduct, delteProduct, getProduct, updateProduct } from "../redux/actions/productAction"

const Dashboard = () => {
    const [productData, setProductData] = useState<PRODUCT>({
        image: "",
        name: "",
        price: 0,

    })

    const [seltectedProductData, setSeltectedProductData] = useState<PRODUCT>({
        image: "",
        name: "",
        price: 0,
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setProductData({ ...productData, [name]: value })
    }

    const dispatch = useAppDispatch()
    const {
        error,
        loading,
        productAdded,
        productDelected,
        productUpdated,
        products,
    } = useAppSelector((state) => state.stock)

    useEffect(() => {
        dispatch(getProduct())
    }, [])

    useEffect(() => {
        if (productAdded || productUpdated || productDelected) {
            dispatch(getProduct())
        }
    }, [productAdded, productUpdated, productDelected])
    return <>

        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Add Product</div>
                        <div className="card-body">
                            <input placeholder="enter name" onChange={handleChange} className="form-control my-2" name="name" type="text" />
                            <input placeholder="enter image url" onChange={handleChange} className="form-control my-2" name="image" type="text" />
                            <input placeholder="enter price" onChange={handleChange} className="form-control my-2" name="price" type="number" />
                            <button type="button" onClick={(e) => dispatch(addProduct(productData))} className="my-3 btn btn-dark w-100">Add Product</button>
                        </div>
                    </div>
                    {/* table start */}

                    {
                        products && <table className="table table-bordered table-dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>name</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Actions</th>

                                </tr>
                            </thead>
                            <tbody>
                                {products.map((item) => (
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <img src={item.image} alt={item.name} height={50} />
                                        </td>
                                        <td>
                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" onClick={() => (setSeltectedProductData(item))} className="btn btn-danger mx-2">edit</button>
                                            <button type="button" onClick={() => dispatch(delteProduct(item.id as number))} className="btn btn-warning">delte</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    }
                    {/* table end */}
                </div>
            </div>
        </div>

        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <input onChange={e => setSeltectedProductData({ ...seltectedProductData, name: e.target.value })} value={seltectedProductData.name} name="name" type="text" />
                        <input onChange={e => setSeltectedProductData({ ...seltectedProductData, image: e.target.value })} value={seltectedProductData.image} name="image" type="text" />
                        <input onChange={e => setSeltectedProductData({ ...seltectedProductData, price: +e.target.value })} value={seltectedProductData.price} name="price" type="text" />
                        <button className="btn btn-primary" data-bs-dismiss="modal" onClick={() => dispatch(updateProduct(seltectedProductData))}>update</button>
                    </div>
                </div>
            </div>
        </div>

    </>

}

export default Dashboard