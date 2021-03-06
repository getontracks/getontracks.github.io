(function() {
  $(document).ready(function() {
    var emailFormHasValidation, phoneFormHasValidation;
    emailFormHasValidation = function() {
      return typeof document.createElement('input').checkValidity === 'function';
    };
    phoneFormHasValidation = function() {
      return typeof document.createElement('input').checkValidity === 'function';
    };
    $('.sendingEmailLink, .sentEmailLink, .invalidEmail').hide();
    if (emailFormHasValidation()) {
      $('#email-form').submit(function(e) {
        var formserialize, submitButton;
        mixpanel.track('Email submit button clicked');
        if (!this.checkValidity()) {
          e.preventDefault();
          $('.invalidEmail').show();
          mixpanel.track('Email invalid submit');
        } else {
          event.preventDefault();
          formserialize = $(this).serialize();
          submitButton = $('#submitEmailForm');
          $.ajax({
            type: 'POST',
            url: 'https://formkeep.com/f/906a5811db16',
            accept: {
              javascript: 'application/javascript'
            },
            data: formserialize,
            beforeSend: function() {
              $('.sendEmailLink').hide();
              $('.sendingEmailLink').show();
            },
            complete: function() {
              $('.sendingEmailLink').hide();
            },
            success: function(d) {
              $('.sentEmailLink').show();
              mixpanel.track('Email sign up sent');
            },
            error: function() {
              $('.notification-e--phone').slideDown('medium', function() {});
              mixpanel.track('Email submit error');
            }
          }).done(function(data) {
            submitButton.prop('disabled', 'disabled');
          });
        }
      });
    }
    $('.sendingLink, .sentLink, .invalidPhone').hide();
    if (phoneFormHasValidation()) {
      $('#form-phone').submit(function(e) {
        var formserialize, submitButton;
        mixpanel.track('Download SMS submit button clicked');
        if (!this.checkValidity()) {
          e.preventDefault();
          $('.invalidPhone').show();
          mixpanel.track('Download SMS invalid submit');
        } else {
          event.preventDefault();
          formserialize = $(this).serialize();
          submitButton = $('#submitPhoneForm');
          $.ajax({
            type: 'POST',
            url: 'http://files.getontracks.com/sendnotifications.php',
            accept: {
              javascript: 'application/javascript'
            },
            data: formserialize,
            beforeSend: function() {
              $('.sendLink').hide();
              $('.sendingLink').show();
            },
            complete: function() {
              $('.sendingLink').hide();
            },
            success: function(d) {
              $('.sentLink').show();
              mixpanel.track('Download SMS sent');
            },
            error: function() {
              $('.notification-e--phone').slideDown('medium', function() {});
              mixpanel.track('Download SMS error');
            }
          }).done(function(data) {
            submitButton.prop('disabled', 'disabled');
          });
        }
      });
    }
    $('#email-input').click(function(e) {
      mixpanel.track('Email input clicked');
      e.preventDefault();
      $('.invalidFormMessage').hide('invalidEmail');
    });
    $('#phone-input').click(function(e) {
      e.preventDefault();
      mixpanel.track('Download SMS input clicked');
      $('.invalidFormMessage').hide('invalidPhone');
    });
    $('#phone-input').on('keyup', function() {
      if (this.value.length) {
        $('#phoneLabel').addClass('input-label');
      } else {
        $('#phoneLabel').removeClass('input-label');
      }
    });
    $('#phoneLabel').click(function() {
      mixpanel.track('Download SMS input clicked');
      $('#phoneLabel').addClass('input-label');
      $('#phone-input').focus();
    });
    $('#email-input').on('keyup', function() {
      if (this.value.length) {
        $('#emailLabel').addClass('input-label');
      } else {
        $('#emailLabel').removeClass('input-label');
      }
    });
    $('#emailLabel').click(function() {
      mixpanel.track('Email input clicked');
      $('#emailLabel').addClass('input-label');
      $('#email-input').focus();
    });
    $('.p-appStore').click(function() {
      mixpanel.track('Download app button clicked');
    });
    $('.icon-facebook').click(function() {
      mixpanel.track('Facebook icon clicked');
    });
    $('.icon-twitter').click(function() {
      mixpanel.track('Twitter icon clicked');
    });
    $('.icon-angellist').click(function() {
      mixpanel.track('Angel list icon clicked');
    });
    $('.icon-linkedin').click(function() {
      mixpanel.track('LinkedIn icon clicked');
    });
    $('.icon-instagram').click(function() {
      mixpanel.track('Instagram icon clicked');
    });
    $('.icon-dribbble').click(function() {
      mixpanel.track('Dribbble icon clicked');
    });
    $('.a-emailUs').click(function() {
      mixpanel.track('Email us clicked');
    });
    $('.btn-careers').click(function() {
      mixpanel.track('Careers button clicked');
    });
    $('.ios-job').click(function() {
      mixpanel.track('iOS job clicked');
    });
    $('.android-job').click(function() {
      mixpanel.track('Android job clicked');
    });
    $('.backend-job').click(function() {
      mixpanel.track('Backend job clicked');
    });
    $('.marketing-job').click(function() {
      mixpanel.track('Marketing job clicked');
    });
    $('.community-job').click(function() {
      mixpanel.track('Community job clicked');
    });
    $('.mobile-menu-btn').click(function() {
      $('.mobile-menu-dropdown').toggleClass('showMobileMenu');
      console.log('does it work');
    });
  });

}).call(this);
