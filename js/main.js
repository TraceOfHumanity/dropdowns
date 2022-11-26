
// maindropDowns =======================================================================================
document.querySelectorAll('.form__group').forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
  const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
  const dropDownArrow = dropDownWrapper.querySelector('.dropdown__arrow');

  const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
  const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
  const dropDownBtnAside = document.querySelector('.filtersAside');
  const dropFilters = document.querySelector('.main__siteBar');
  const buttonMoreFoкOnePageInFooter = document.querySelector('#button');
  const moreInfoPage1 = document.querySelector('#content');

  // open\close the drop-down list by clicking on it
  dropDownBtn.addEventListener('click', function () {
    dropDownList.classList.toggle('dropdown__list--visible');
    dropDownArrow.classList.toggle('dropdown__arrow180');
    this.classList.toggle('dropdown__button--active');
  });

  dropDownWrapper.addEventListener('click', function () {
    this.classList.toggle('absolute')
  });

  // document.addEventListener('click', function (e) {
  //   if (e.target !== dropDownWrapper) {
  //     this.classList.toggle('absolute');
  //     // console.log(dropDownWrapper)
  //   }
  // })


  // selecting an element from the list and remembering the value + closing the list after selection
  dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      dropDownBtn.innerText = this.innerText;
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove('dropdown__list--visible');
      dropDownArrow.classList.remove('dropdown__arrow180');
      dropDownWrapper.classList.remove('shadowBg');
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownWrapper.classList.remove('absolute');
      dropDownBtn.classList.add('opacity1')

    })
  });


  // clicking outside the list closes it
  document.addEventListener('click', function (e) {
    if (e.target !== dropDownBtn) {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
      dropDownArrow.classList.remove('dropdown__arrow180');
      dropDownWrapper.classList.remove('absolute');
    }
  })

  // closing the active list by clicking on ESC and Tab
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
      dropDownBtn.classList.remove('dropdown__button--active');
      dropDownList.classList.remove('dropdown__list--visible');
    }
  })
});