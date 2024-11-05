import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className='flex justify-center items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col rounded-[20px] box-shadow'>
      <div className="form-main-con dots-left-img">
        <div className="container overlay-content">
          <div className="form-title-con text-center wow slideInLeft" style={{ visibility: 'visible', animationName: 'slideInLeft' }}>
            <h5 className='font-poppins text-gradient font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full'>Contact us</h5>
            <h2 className='font-poppins font-normal text-[18px] leading-[30.8px]'>Send us a Message</h2>
          </div>
          <form className="form-inner-con wow slideInLeft" id="contactpage" method="post" onSubmit={handleSubmit} style={{ visibility: 'visible', animationName: 'slideInLeft' }}>
            <div className="flex mb-3">
              <div className="col-lg-4 col-md-4 col-12 p-2">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    border: '1px solid red', // Changed border color to red
                    background: 'transparent',
                    padding: '10px 24px',
                    borderRadius: '6px',
                    fontSize: '16px',
                    lineHeight: '36px',
                    color: 'var(--primary--color)',
                  }}
                />
              </div>
              <div className="col-lg-4 col-md-4 col-12 p-2">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  value={formData.email} // Updated to value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    border: '1px solid red', // Changed border color to red
                    background: 'transparent',
                    padding: '10px 24px',
                    borderRadius: '6px',
                    fontSize: '16px',
                    lineHeight: '36px',
                    color: 'var(--primary--color)',
                  }}
                />
              </div>
              <div className="col-lg-4 col-md-4 col-12 p-2">
                <input
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  id="phone"
                  value={formData.phone} // Updated to value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    border: '1px solid red', // Changed border color to red
                    background: 'transparent',
                    padding: '10px 24px',
                    borderRadius: '6px',
                    fontSize: '16px',
                    lineHeight: '36px',
                    color: 'var(--primary--color)',
                  }}
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-12">
                <textarea
                  className="w-100"
                  placeholder="Message"
                  rows="3"
                  name="comments"
                  id="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    border: '1px solid red', // Changed border color to red
                    background: 'transparent',
                    padding: '10px 24px',
                    borderRadius: '6px',
                    fontSize: '16px',
                    lineHeight: '36px',
                    color: 'var(--primary--color)',
                  }}
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <button type="submit" id="submit" className="contact-btn py-4 px-6 font-poppins font-medium text-[18px] text-primary outline-none border-2 border-red-500 rounded-[10px] mt-10 text-gradient">Submit</button>
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
