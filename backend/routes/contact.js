const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST route to handle contact form submission
router.post('/', async (req, res) => {
    //const { name, email, subject, message } = req.body;

    try {
      const contact = new Contact(req.body);
      await contact.save();
      res.status(200).send('Message saved successfully');
    } catch (error) {
      console.error('Error saving message:', error);
      res.status(500).send('Error saving message');
    }
  });



    /*try {
        const newContact = new Contact({
            name,
            email,
            subject,
            message,
        });

        await newContact.save();

        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server error' });
    }
});
*/

module.exports = router;
