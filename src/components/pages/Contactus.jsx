import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { publickey, service_id, template_id } from '../utils/constants';

const Contactus = () => {

    const form = useRef();
    console.log("form...", form);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(service_id, template_id, form.current, {
            publicKey: publickey,
        })
            .then(
                () => {
                    alert('SUCCESS!');
                },
                (error) => {
                    alert('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <div className='header-title text-center my-4 mx-2  p-4 bg-light rounded'>
                <h2 className='text-dark'>Contact Us</h2>
            </div>
            <div className="container-fluid py-2">
                <div className="container py-5">
                    <div className="bg-light rounded p-5">
                        <div className="row g-4">
                            <div className="col-lg-5">
                                <div className="">
                                    <h6 className="mb-4 p-2">
                                        XYZ Pharma
                                    </h6>
                                    <p className="mb-2 text-capitalize mb-3  shadow-lg card border-0  bg-white p-3 rounded">
                                        Eunos,sector-5 , AVE 7<br />
                                        Singapore -702374<br />
                                        +65 82388027<br />
                                        info@xyz.com.sg<br />
                                        Timings:09:00am to 05:00pm<br />(Except Sunday and Holiday)

                                    </p>

                                    <div className="rounded">

                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.032816664312!2d103.87721745541992!3d1.320831500000025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1908969b43ed%3A0x4f9b7f16c98d6652!2sEunos%20Industrial%20Estate!5e0!3m2!1sen!2sin!4v1709104582011!5m2!1sen!2sin"
                                            className="rounded w-100"
                                            style={{ height: 300 }}
                                            title='map' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <form onSubmit={sendEmail} ref={form} className="mb-4">
                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                className="w-100 form-control border-0 py-3"
                                                name="name"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <input
                                                type="email"
                                                className="w-100 form-control border-0 py-3"
                                                name="email"
                                                placeholder="Enter Your Email"
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <input
                                                type="text"
                                                className="w-100 form-control border-0 py-3"
                                                name="phone"
                                                placeholder="Enter Your Phone"
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <select
                                                type="text"
                                                className="w-100 form-control border-0 py-3"
                                                name="subject"
                                                placeholder="Subject"
                                            >
                                                <option value="">Select Hospital Location</option>
                                                <option value="">Location 1</option>
                                                <option value="">Location 2</option>
                                                <option value="">Location 3</option>
                                            </select>
                                        </div>

                                        <div className="col-12">
                                            <textarea
                                                className="w-100 form-control border-0"
                                                rows={6}
                                                cols={10}
                                                placeholder="Your Message"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="file">Upload Your Report</label>
                                            <input
                                                type="file"
                                                id='file'
                                                className="w-100 form-control border-0 py-3"
                                                name="subject"
                                                placeholder="Subject"
                                            />
                                        </div>
                                        <div className="col-12">
                                            <button
                                                className="w-100 btn btn-primary form-control py-3"
                                                type="submit"
                                            >
                                                Submit Now
                                            </button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                            <div className="row g-4">
                                <div className="col-xl-4">
                                    <div className="d-flex p-4 rounded bg-white">
                                        <i className="fas fa-map-marker-alt fa-2x text-primary me-4" />
                                        <div>
                                            <h4>Address</h4>
                                            <p className="mb-0"> Eunos,Sector-5,Singapore</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="d-flex p-4 rounded bg-white">
                                        <i className="fas fa-envelope fa-2x text-primary me-4" />
                                        <div>
                                            <h4>Mail Us</h4>
                                            <p className="mb-0">info@XYZ.com.sg</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="d-flex p-4 rounded bg-white">
                                        <i className="fa fa-phone-alt fa-2x text-primary me-4" />
                                        <div>
                                            <h4>Telephone</h4>
                                            <p className="mb-0">(+65) 82388027</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contactus