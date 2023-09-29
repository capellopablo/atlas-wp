import React, { useState } from 'react';

export default function Form() {
  // Define state variables for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted with the following data:');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);

    setFirstName('');
    setLastName('');
    setEmail('');
  };

  return (
    <div className="r-form-container">
      <div className="r-form-heading">
        <h5>¡Recibe información de precios y becas!</h5>
        <p>Al recibir tu información, uno de nuestros asesores académicos se comunicará contigo</p>
      </div>

      <form onSubmit={handleSubmit} className="r-form-content">
        <div className="r-form-box">
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder="Nombre"
          />
        </div>
        <div className="r-form-box">
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            placeholder="Apellido"
          />
        </div>
        <div className="r-form-box">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Correo electrónico"
          />
        </div>

        <div className="r-form-submit">
          <button type="submit">Submit</button>
        </div>
      </form>

      <div className="r-form-terms">
        Al hacer clic en el botón "Quiero Conocer Precios", nos autoriza a llamarle y/o a enviarle mensajes mediante un sistema automatizado de llamadas y mensajería al número de teléfono proporcionado para brindarle información sobre los productos y servicios de Aprende Institute. Su consentimiento no implica una obligación de compra. Además, acepta nuestros Términos de servicio y Política de privacidad.
      </div>
    </div>
  );
}
