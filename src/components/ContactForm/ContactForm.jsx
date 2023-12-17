import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactForm.module.css';
import { addContacts } from 'store/operations';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.contacts);

  function handleChange(event) {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  }

  function onAddContact(event) {
    event.preventDefault();
    const newContact = {
      name: name,
      phone: number,
    };
    return items.find(contact => contact.name === name)
      ? alert(`${name} is already in contact`)
      : dispatch(addContacts(newContact), reset());
  }
  function reset() {
    setName('');
    setNumber('');
  }
  return (
    <div>
      <form className={css.form} onSubmit={onAddContact}>
        <label className={css.label}>
          <input
            placeholder="Name"
            className={css.input}
            type="text"
            value={name}
            name="name"
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </label>
        <label className={css.label}>
          <input
            placeholder="Number"
            className={css.input}
            type="tel"
            name="number"
            value={number}
            required
            onChange={handleChange}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          />
        </label>
        <button type="submit" className={css.buttonSubmit}>
          Add contact
        </button>
      </form>
    </div>
  );
}
