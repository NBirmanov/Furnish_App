function limitCheckboxSelection(clickedCheckbox) {
    var checkboxes = document.getElementsByName('option');
    
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== clickedCheckbox) {
        checkboxes[i].checked = false;
      }
    }
  }

  function limitCheckColorSelection(clickedCheckbox) {
    var checkboxes = document.getElementsByName('color');
    
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== clickedCheckbox) {
        checkboxes[i].checked = false;
      }
    }
  }

  function countAmount(type){
    var amount = document.getElementById('amount');
    var minus_btn = document.getElementById('minus_btn');
    var plus_btn = document.getElementById('plus_btn');

    if(type == 'minus'){
        if(amount.value > 1){
            amount.value = amount.value - 1
        }
    }else{
        amount.value = Number(amount.value) + 1
    }
  }

  function closeBack(){
    var back = document.getElementById('back');
    if (back.style.display === 'none' || back.style.display === '') {
        back.style.display = 'block';
      } else {
        back.style.display = 'none';
    }
  }
