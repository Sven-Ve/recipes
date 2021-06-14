import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['content'];
  static values = {
    url: String,
    refreshAjax: Boolean
  }

  async refreshContent(event) {
    if (this.refreshAjaxValue) {
      this.contentTarget.style.opacity = .5;
      const response = await fetch(this.urlValue);
      this.contentTarget.innerHTML = await response.text();
      this.contentTarget.style.opacity = 1;
    } else {
      location.reload();
    }
  }
}
