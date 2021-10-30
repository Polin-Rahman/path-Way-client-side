import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('New offer added Successfully');
                    reset();
                }
            })
    }

    return (
        <div className="container">
            <h3 className="text-center my-5">Add a new exciting travel Offer</h3>

            <div className="d-flex justify-content-center">
                <div>
                    <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                        <p className="mb-1"><small>Add a new service name:</small></p>

                        <input placeholder="Service Name" defaultValue="" {...register("name", { required: true })} />

                        <p className="mb-1"><small>Add image url:</small></p>

                        <input placeholder="Image URL" defaultValue="" {...register("img", { required: true })} />

                        <p className="mb-1"><small>Add details:</small></p>

                        <input placeholder="Details" defaultValue="" {...register("details", { required: true })} />

                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;