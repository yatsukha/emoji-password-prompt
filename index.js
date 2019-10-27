'use strict';

(() => {
  let input_prompt = document.getElementById('password_input');

  input_prompt.onkeydown = 
    e => {
      let key_code = e.keyCode || e.charCode;
      let is_del   = key_code == 8 || key_code == 46;

      if (!is_del)
        input_prompt.value = "😂".repeat((input_prompt.value.length + 2) / 2);

      return is_del;
    }
})();