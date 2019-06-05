import React from 'react';

handleSubmit(event) {

  event.preventDefault();
  this.setState({ type: ‘info’, message: ‘Sending…’ });

  $.ajax({

  url: ‘/…./mailer.php’,
  type: ‘POST’,
  data: {

  “form_name”: this.state.contactName,
  “form_email”: this.state.contactEmail,
  “form_msg”: this.state.contactMessage

  },
  cache: false,
  success: function(data) {

  // Success..
  this.setState({ type: ‘success’, message: ‘We have received your message and will get in touch shortly. Thanks!’ });

  }.bind(this),

  error: function(xhr, status, err) {
  this.setState({ type: ‘danger’, message: ‘Sorry, there has been an error.  Please try again later or visit us at SZB 438.’ });
  }.bind(this)

  });

  }