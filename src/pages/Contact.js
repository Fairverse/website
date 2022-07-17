import React from 'react';
import emailjs from 'emailjs-com';
import { Formik } from 'formik';
import * as Yup from 'yup';

import '../styles/Contact.css';

export default function Contact() {
  const validationSchema = Yup.object({
    
    user_name: Yup.string().required("Zorunlu alan"),
    email: Yup.string().email('Geçersiz e-mail adresi').required('Zorunlu alan'),
    message: Yup.string().required("Zorunlu alan"),
    
  });

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_i4yz6tl', 'template_zgofptf', e.target, 's2xENye55tST9E5qD') //service_id, template_id, user_id
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }


  return (
    <Formik 
			initialValues={{ user_name: '', email: '',message:''}}
			validationSchema={validationSchema}
      
			onSubmit={ values => {
				console.log(values);
      
			}}
		>
			{({ handleSubmit, handleChange, values, errors }) => (

    <form className="contact-form" onSubmit={sendEmail} >
      
					<input
						type="text"
						name="user_name"
						placeholder="Kullanıcı adı"
						onChange={handleChange}
						values={values.user_name}
            
					/>
					{errors.user_name && errors.user_name}
				
					<input
						type="text"
						name="email"
						placeholder="E-mail"
						onChange={handleChange}
						values={values.email}
            
					/>
					{errors.email && errors.email}
          <input
          type="message"
          name="message"
          placeholder="Mesaj"
          onChange={handleChange}
          values={values.message}
          
          />
          {errors.message && errors.message}
					<button type="submit" >Gönder</button>
          
				</form>
       
    )}
		</Formik>
  );
  }

