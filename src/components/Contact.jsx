import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '8ae7421f-5105-40aa-9b6d-b3961690c64a', // Replace with your Access Key
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.comments,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setResponseMessage('Email sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          comments: '',
        });
      } else {
        setResponseMessage('Error sending email, please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setResponseMessage('Error sending email, please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='flex justify-center items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col rounded-[20px] box-shadow' id='contact'>
      <div className="form-main-con dots-left-img">
        <div className="container overlay-content">
          <div className="form-title-con text-center wow slideInLeft">
            <h5 className='font-poppins text-gradient font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full'>Contact Us</h5>
            <h2 className='font-poppins font-normal text-[18px] leading-[30.8px]'>Send Us a Message</h2>
          </div>
          <form className="form-inner-con wow slideInLeft" id="contactpage" onSubmit={handleSubmit}>
            <div className="row md:flex mb-3">
              <div className="col-lg-4 col-md-4 col-12 p-2">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    border: '1px solid red',
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    border: '1px solid red',
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
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    border: '1px solid red',
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
                  value={formData.comments}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    border: '1px solid red',
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
                <button 
                  type="submit" 
                  className="contact-btn py-4 px-6 font-poppins font-medium text-[18px] text-primary outline-none border-2 border-red-500 rounded-[10px] mt-10 text-gradient"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </div>
          </form>
          {responseMessage && (
            <div className="response-message text-center mt-4">
              <p>{responseMessage}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
