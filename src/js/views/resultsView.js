import View from './view';
import PreviewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  parentElement = document.querySelector('.results');
  errorMessage = 'No recipes were dound for your query! Please try again!';
  message = '';

  generateMarkup() {
    return this.data.map(result => PreviewView.render(result, false)).join('');
  }
}

export default new ResultsView();
