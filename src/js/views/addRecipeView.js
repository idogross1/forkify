import View from './view.js';

class AddRecipeView extends View {
  parentElement = document.querySelector('.upload');
  window = document.querySelector('.add-recipe-window');
  overlay = document.querySelector('.overlay');
  btnOpen = document.querySelector('.nav__btn--add-recipe');
  btnClose = document.querySelector('.btn--close-modal');

  message = 'Recipe was successfully uploaded :)';

  constructor() {
    super();
    this.addHandlerShowWindow();
    this.addHandlerHideWindow();
  }
  toggleWindow() {
    this.overlay.classList.toggle('hidden');
    this.window.classList.toggle('hidden');
  }
  addHandlerShowWindow() {
    this.btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerHideWindow() {
    this.btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this.overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this.parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  showForm() {
    const markup = `<div class="upload__column">
    <h3 class="upload__heading">Recipe data</h3>
    <label>Title</label>
    <input value="" required name="title" type="text" />
    <label>URL</label>
    <input value="" required name="sourceUrl" type="text" />
    <label>Image URL</label>
    <input value="" required name="image" type="text" />
    <label>Publisher</label>
    <input value="" required name="publisher" type="text" />
    <label>Prep time</label>
    <input value="" required name="cookingTime" type="number" />
    <label>Servings</label>
    <input value="" required name="servings" type="number" />
  </div>

  <div class="upload__column">
    <h3 class="upload__heading">Ingredients</h3>
    <label>Ingredient 1</label>
    <input
      value=""
      type="text"
      required
      name="ingredient-1"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
    <label>Ingredient 2</label>
    <input
      value=""
      type="text"
      name="ingredient-2"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
    <label>Ingredient 3</label>
    <input
      value=""
      type="text"
      name="ingredient-3"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
    <label>Ingredient 4</label>
    <input
      type="text"
      name="ingredient-4"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
    <label>Ingredient 5</label>
    <input
      type="text"
      name="ingredient-5"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
    <label>Ingredient 6</label>
    <input
      type="text"
      name="ingredient-6"
      placeholder="Format: 'Quantity,Unit,Description'"
    />
  </div>

  <button class="btn upload__btn">
    <svg>
      <use href="src/img/icons.svg#icon-upload-cloud"></use>
    </svg>
    <span>Upload</span>
  </button>`;
    this.clear();
    this.parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new AddRecipeView();
