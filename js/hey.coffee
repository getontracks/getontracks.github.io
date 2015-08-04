---
---

$(document).ready ->
  # Email Form

  emailFormHasValidation = ->
    typeof document.createElement('input').checkValidity == 'function'

  phoneFormHasValidation = ->
    typeof document.createElement('input').checkValidity == 'function'

  $('.sendingEmailLink, .sentEmailLink, .invalidEmail').hide()
  if emailFormHasValidation()
    $('#email-form').submit (e) ->
      mixpanel.track 'Email submit button clicked'
      if !@checkValidity()
        e.preventDefault()
        $('.invalidEmail').show()
        mixpanel.track 'Email invalid submit'
      else
        event.preventDefault()
        formserialize = $(this).serialize()
        submitButton = $('#submitEmailForm')
        $.ajax(
          type: 'POST'
          url: 'https://formkeep.com/f/906a5811db16'
          accept: javascript: 'application/javascript'
          data: formserialize
          beforeSend: ->
            $('.sendEmailLink').hide()
            $('.sendingEmailLink').show()
            return
          complete: ->
            $('.sendingEmailLink').hide()
            return
          success: (d) ->
            $('.sentEmailLink').show()
            mixpanel.track 'Email sign up sent'
            return
          error: ->
            $('.notification-e--phone').slideDown 'medium', ->
            mixpanel.track 'Email submit error'
            return
        ).done (data) ->
          submitButton.prop 'disabled', 'disabled'
          return
      return
  # Phone form
  $('.sendingLink, .sentLink, .invalidPhone').hide()
  if phoneFormHasValidation()
    $('#form-phone').submit (e) ->
      mixpanel.track 'Download SMS submit button clicked'
      if !@checkValidity()
        e.preventDefault()
        $('.invalidPhone').show()
        mixpanel.track 'Download SMS invalid submit'
      else
        event.preventDefault()
        formserialize = $(this).serialize()
        submitButton = $('#submitPhoneForm')
        $.ajax(
          type: 'POST'
          url: 'sendnotifications.php'
          accept: javascript: 'application/javascript'
          data: formserialize
          beforeSend: ->
            $('.sendLink').hide()
            $('.sendingLink').show()
            return
          complete: ->
            $('.sendingLink').hide()
            return
          success: (d) ->
            $('.sentLink').show()
            mixpanel.track 'Download SMS sent'
            return
          error: ->
            $('.notification-e--phone').slideDown 'medium', ->
            mixpanel.track 'Download SMS error'
            return
        ).done (data) ->
          submitButton.prop 'disabled', 'disabled'
          return
      return
  # Form error messages
  $('#email-input').click (e) ->
    mixpanel.track 'Email input clicked'
    e.preventDefault()
    $('.invalidFormMessage').hide 'invalidEmail'
    return
  $('#phone-input').click (e) ->
    e.preventDefault()
    mixpanel.track 'Download SMS input clicked'
    $('.invalidFormMessage').hide 'invalidPhone'
    return
  # form label
  $('#phone-input').on 'keyup', ->
    # mixpanel.track("Download SMS typed in input");
    if @value.length
      $('#phoneLabel').addClass 'input-label'
    else
      $('#phoneLabel').removeClass 'input-label'
    return
  $('#phoneLabel').click ->
    mixpanel.track 'Download SMS input clicked'
    $('#phoneLabel').addClass 'input-label'
    $('#phone-input').focus()
    return
  $('#email-input').on 'keyup', ->
    #mixpanel.track("Email typed in input");       
    if @value.length
      $('#emailLabel').addClass 'input-label'
    else
      $('#emailLabel').removeClass 'input-label'
    return
  $('#emailLabel').click ->
    mixpanel.track 'Email input clicked'
    $('#emailLabel').addClass 'input-label'
    $('#email-input').focus()
    return
  # mixpanel click events
  $('.p-appStore').click ->
    mixpanel.track 'Download app button clicked'
    return
  $('.icon-facebook').click ->
    mixpanel.track 'Facebook icon clicked'
    return
  $('.icon-twitter').click ->
    mixpanel.track 'Twitter icon clicked'
    return
  $('.icon-angellist').click ->
    mixpanel.track 'Angel list icon clicked'
    return
  $('.icon-linkedin').click ->
    mixpanel.track 'LinkedIn icon clicked'
    return
  $('.icon-instagram').click ->
    mixpanel.track 'Instagram icon clicked'
    return
  $('.icon-dribbble').click ->
    mixpanel.track 'Dribbble icon clicked'
    return
  $('.a-emailUs').click ->
    mixpanel.track 'Email us clicked'
    return
  $('.btn-careers').click ->
    mixpanel.track 'Careers button clicked'
    return
  $('.ios-job').click ->
    mixpanel.track 'iOS job clicked'
    return
  $('.android-job').click ->
    mixpanel.track 'Android job clicked'
    return
  $('.backend-job').click ->
    mixpanel.track 'Backend job clicked'
    return
  $('.marketing-job').click ->
    mixpanel.track 'Marketing job clicked'
    return
  $('.community-job').click ->
    mixpanel.track 'Community job clicked'
    return
  $('.mobile-menu-btn').click ->
    $('.mobile-menu-dropdown').toggleClass 'showMobileMenu'
    console.log 'does it work'
    return
  return
# end doc ready

# ---