import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form method="post" action="" onSubmit={handleSubmit}>
      Name
      <input type="text" value={name} onChange={handleChange} required />
      Phone
      <input
        type="tel"
        value={phone}
        pattern="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}"
        onChange={handleChange}
        required
      />
      Email
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
        required
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
