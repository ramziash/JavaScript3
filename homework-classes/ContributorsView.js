'use strict';

{
  const { createAndAppend } = window.Util;

  class ContributorsView {
    constructor(container) {
      this.container = container;
    }

    update(state) {
      if (!state.error) {
        this.render(state.contributors);
      }
    }

    /**
     * Renders the list of contributors
     * @param {Object[]} contributors An array of contributor objects
     */
    render(contributors) {
      
      // this is used to remove the previous contributors, or else they will stack on top of each other
      this.container.innerHTML = ''

      contributors.forEach(cont => {
        //from App.js already created. 
        const contributorsContainer = document.querySelector('.contributors-container')
        const eachCont = createAndAppend('div', contributorsContainer, { class: 'each-cont' })
        createAndAppend('img', eachCont, { src: cont.avatar_url, class: 'cont-avatar' }) // create the image
        const contDetails = createAndAppend('div', eachCont, { class: 'cont-details' }) // create the details div
        createAndAppend('a', contDetails, { text: cont.login, class: 'cont-name', href: cont.html_url, target: '_blank' }) // append details
        createAndAppend('a', contDetails, { text: cont.contributions, class: 'num-contributions' }) // # of contributions
      });
    }
  }

  window.ContributorsView = ContributorsView;
}
