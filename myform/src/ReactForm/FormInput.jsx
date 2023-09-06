import React, { useState } from 'react'

const FormInput = () => {
    const [formValue, setFormValue] = useState()
    const [formError, setFormError] = useState()
    const handleForm = () => (event) => {
        const {name, value} = event.target
        setFormValue({
            ...formValue,
            [name]: value
        })
    }
    console.log('formValue', formValue)
    return (
        <div>
            <form className='form-control'
                noValidate
                onSubmit={(event) => {
                    event.preventDefault()
                    console.log('submit');
                }} >
                <div className="row">
                    <div className="col-6 my-2">
                        <p>Mã số sinh viên:</p>
                        <input className='form-control' type="text" 
                        name='masv'
                        onChange={handleForm()}
                        />
                    </div>
                    <div className="col-6 my-2">
                        <p>Tên sinh viên:</p>
                        <input className='form-control' type="text" 
                        name='tensv'
                        onChange={handleForm()}
                        />
                    </div>
                    <div className="col-6 my-2">
                        <p>Hình ảnh:</p>
                        <input className='form-control' type="text" 
                        name='image'
                        onChange={handleForm()}
                        />
                    </div>
                    <div className="col-6 my-2">
                        <p>Email:</p>
                        <input className='form-control' type="text" 
                        name='email'
                        onChange={handleForm()}
                        />
                    </div>
                    <div className="col-6 my-2">
                        <p>Số điện thoại:</p>
                        <input className='form-control' type="text" 
                        name='phone'
                        onChange={handleForm()}
                        />
                    </div>
                    <div className="col-6 my-2">
                        <p>Số tín chỉ hoàn thành:</p>
                        <input className='form-control' type="text" 
                        name='credit'
                        onChange={handleForm()}
                        />
                    </div>
                </div>
                <button className='btn btn-warning my-2 fw-bolder'>Đăng ký</button>
            </form>
        </div>
    )
}

export default FormInput