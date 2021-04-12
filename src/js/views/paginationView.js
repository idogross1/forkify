import View from './view';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this.parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;
      const gotoPage = btn.dataset.goto;
      handler(gotoPage);
    });
  }

  nextButton() {
    const curPage = this.data.page;
    return `
      <button data-goto = "${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
          <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
          </svg>
      </button>
    `;
  }

  prevButton() {
    const curPage = this.data.page;
    return `
      <button data-goto = "${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${curPage - 1}</span>
      </button>
    `;
  }

  generateMarkup() {
    const curPage = this.data.page;
    const numPages = Math.ceil(
      this.data.results.length / this.data.resultsPerPage
    );
    // Page 1, and there are others pages
    if (curPage === 1 && numPages > 1) {
      //   return `
      //     <button class="btn--inline pagination__btn--next">
      //         <span>Page ${curPage + 1}</span>
      //         <svg class="search__icon">
      //             <use href="${icons}#icon-arrow-right"></use>
      //         </svg>
      //     </button>

      //   `;
      return this.nextButton();
    }
    // Last page
    if (curPage === numPages && numPages > 1) {
      //   return `
      //     <button class="btn--inline pagination__btn--prev">
      //         <svg class="search__icon">
      //             <use href="${icons}#icon-arrow-left"></use>
      //         </svg>
      //         <span>Page ${curPage - 1}</span>
      //     </button>
      //   `;
      return this.prevButton();
    }
    //Other page
    if (this.data.page < numPages) {
      //   return `
      //     <button class="btn--inline pagination__btn--prev">
      //         <svg class="search__icon">
      //             <use href="${icons}#icon-arrow-left"></use>
      //         </svg>
      //         <span>Page ${curPage - 1}</span>
      //     </button>
      //     <button class="btn--inline pagination__btn--next">
      //         <span>Page ${curPage + 1}</span>
      //         <svg class="search__icon">
      //             <use href="${icons}#icon-arrow-right"></use>
      //         </svg>
      //     </button>
      //   `;
      return this.prevButton() + this.nextButton();
    }
    // Page 1, and there are No others pages
    return '';
  }
}

export default new PaginationView();
