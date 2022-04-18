import React, { useState } from 'react';
import { Button, TextField } from '@mui/material'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useForm } from "react-hook-form";
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50vw",
    background: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const BestCard = ({ _id, name, title, img, live_link, code_link, project_type, technology, admin }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.put(`http://localhost:5000/bestprojects/${_id}`, data)
        console.log(data);
        handleClose();
        alert('added try to reload')
    };
    const handleDelete = () => {
        axios.delete(`http://localhost:5000/bestprojects/${_id}`);
        alert('delete try to reload')

    }


    return (

        <div className="col-md-4">
            <div
                className="project-wrapper rounded d-flex flex-column py-4 px-4 justify-content-cener align-items-center">
                <div className="project ">
                    <div className="position-relative">
                        <img className="img-fluid " src="https://i.ibb.co/7g1QMcR/Capture.jpg" alt="" />
                        <div className="position-absolute project-s  w-100 h-100 " style={{ backgroundImage: `url(${img})` }}>
                        </div>
                    </div>
                    <div className="project-content mt-3 info w-100">
                        <h4 className="mt-4 fw-light">{name}</h4>
                        <h6 className="fw-lighter lh-base fs-5 my-3">
                            {title}
                        </h6>
                        <div className="d-flex justify-content  details">
                            <a href={live_link} className="fs-6 me-4 cursor-full">Live
                                site</a>
                            <a href={code_link} className="fs-6 cursor-full">Code link</a>

                        </div>
                        {
                            admin && <Button variant="contained" onClick={handleOpen} className='my-3 w-100'>update</Button>
                        }
                        {
                            admin && <Button variant="contained" color='error' onClick={handleDelete} className='my-3 w-100'>Delete</Button>
                        }

                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column'>
                        <TextField color="warning" label="Name" sx={{ mb: 1 }} variant="standard" placeholder='Name' defaultValue={name} {...register("name", { required: true })} />

                        <TextField color="warning" label="Title" sx={{ mb: 1 }} variant="standard" placeholder='Title' defaultValue={title}  {...register("title", { required: true })} />


                        <TextField color="warning" label="Img Link" sx={{ mb: 1 }} variant="standard" placeholder='Img Link' defaultValue={img} {...register("img", { required: true })} />


                        <TextField color="warning" label="Live link" sx={{ mb: 1 }} variant="standard" placeholder='live  Link' defaultValue={live_link} {...register("live_link", { required: true })} />


                        <TextField color="warning" defaultValue={code_link} label="code link" sx={{ mb: 1 }} variant="standard" placeholder='code Link' {...register("code_link", { required: true })} />

                        <TextField color="warning" defaultValue={project_type} label="project type" sx={{ mb: 1 }} variant="standard" placeholder='project type' {...register("project_type", { required: true })} />

                        {/* <TextField color="warning" defaultValue={technology?.join(',')} label="Technology" sx={{ mb: 1 }} variant="standard" placeholder='project type' {...register("technology", { required: true })} /> */}


                        <input type="submit" className='btn btn-success' value='Update' />
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default BestCard;