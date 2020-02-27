'use strict';

{
  const { createAndAppend } = window.Util;

  class RepoView {
    constructor(container) {
      this.container = container;
    }

    update(state) {
      if (!state.error) {
        this.render(state.selectedRepo);
      }
    }

    /**
     * Renders the repository details.
     * @param {Object} repo A repository object.
     */
    render(repo) {
      // this is used to remove the previous contributors, or else they will stack on top of each other
      this.container.innerHTML = ''

      // from App.js. 
      const repoContainer = document.querySelector('.repo-container')

      const createTable = createAndAppend('div', repoContainer, { class: 'block' });
      const repositoryRow = createAndAppend('div', createTable, { class: 'row' });
      createAndAppend('span', repositoryRow, { text: 'Repository:', class: 'bold-title' }); //name of the repo
      createAndAppend('a', repositoryRow, { text: repo.name, href: repo.html_url, target: '_blank' }); // details from the api link
      const descriptionRow = createAndAppend('div', createTable, { class: 'row' });
      createAndAppend('span', descriptionRow, { text: 'Description:', class: 'bold-title', });
      createAndAppend('span', descriptionRow, { text: repo.description });
      const forkRow = createAndAppend('div', createTable, { class: 'row' });
      createAndAppend('span', forkRow, { text: 'Fork:', class: 'bold-title' });
      createAndAppend('span', forkRow, { text: repo.fork });
      const updateRow = createAndAppend('div', createTable, { class: 'row' });
      createAndAppend('span', updateRow, { text: 'Update:', class: 'bold-title' });
      createAndAppend('span', updateRow, { text: repo.updated_at });

      console.log('RepoView', repo);
    }
  }

  window.RepoView = RepoView;
}
