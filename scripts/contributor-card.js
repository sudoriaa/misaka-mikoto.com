/**
 * @author: huge-pancake
 */
export default class ContributorCard extends HTMLElement {
  static get is() {
    return 'con-card';
  }
  get avatar() {
    return this.getAttribute('avatar') || `https://avatars.githubusercontent.com/${this.username}?s=200&v=4`;
  }
  get username() {
    return this.getAttribute('username');
  }
  get name() {
    return this.getAttribute('name');
  }
  get email() {
    return this.getAttribute('email');
  }
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }
  render() {
    if (!this.shadowRoot) return;
    this.shadowRoot.innerHTML = `
      <style>${this.renderStyle()}</style>
      <div class="headline">
        <div class="avatar">
          <img src="${this.avatar}" alt="${this.name}">
        </div>
        <div class="info">
        <span class="name">${this.name}</span>
          <a class="github" href="https://github.com/${this.username}">
            <?xml version="1.0" encoding="utf-8"?>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
              <g>
                <path d="M909.9,312.7c10.6-31.8,15.9-64.8,15.9-98.9c0-45.5-10-88.3-30-128.4c-42,0-79.1,7.7-111.3,23c-32.2,15.3-68.9,39.1-110.1,71.3c-51.8-12.6-106.8-18.8-164.9-18.8c-63.6,0-124.3,6.9-182,20.6c-42-33-79.1-57.2-111.3-72.7c-32.2-15.5-69.5-23.3-111.9-23.3c-20,40-30,82.8-30,128.4c0,34.6,5.3,67.9,15.9,100.1C36.7,376.3,10,454.1,10,547.1c0,81.7,12.2,146.6,36.5,194.9c13,25.5,29.8,48.1,50.6,67.7c20.8,19.6,44.6,35.5,71.3,47.7c26.7,12.2,53.6,22.3,80.7,30.3c27.1,8,57,13.9,89.8,17.7c32.8,3.7,61.7,6.2,86.9,7.4c25.1,1.2,53,1.8,83.6,1.8c36.1,0,68.9-0.9,98.3-2.6c29.5-1.8,63.1-6.1,101-12.9c37.9-6.9,71.3-16.2,100.1-28c28.9-11.8,56.5-28.7,83-50.6c26.5-22,47.2-48.1,62.1-78.3C978,693.4,990,628.4,990,547.1C990,453.7,963.3,375.5,909.9,312.7z M839.2,741.2c-12.6,25.7-28.5,45.9-47.7,60.7c-19.2,14.7-43.2,26.5-71.8,35.3c-28.7,8.8-56.1,14.6-82.5,17.4c-26.3,2.8-55.6,4.1-87.8,4.1h-98.9c-32.2,0-61.5-1.4-87.8-4.1c-26.3-2.7-53.8-8.5-82.5-17.4c-28.7-8.8-52.6-20.6-71.8-35.3c-19.2-14.7-35.1-34.9-47.7-60.7c-12.6-25.7-18.8-55.9-18.8-90.4c0-47.1,13.5-87.2,40.6-120.1c27.1-33,63.8-49.5,110.1-49.5c16.9,0,55.2,4.1,114.8,12.4c27.9,4.3,58.7,6.5,92.5,6.5c33.8,0,64.6-2.2,92.5-6.5c60.5-8.2,98.7-12.4,114.9-12.4c46.3,0,83,16.5,110.1,49.5c27.1,33,40.6,73,40.6,120.1C858.1,685.3,851.8,715.5,839.2,741.2z" />
                <path d="M354.2,557.7c-12-13.4-26.2-20-42.7-20c-16.5,0-30.7,6.7-42.7,20c-12,13.3-20.4,28.3-25.3,44.7c-4.9,16.5-7.4,32.6-7.4,48.3c0,15.7,2.5,31.8,7.4,48.3c4.9,16.5,13.3,31.4,25.3,44.7c12,13.4,26.2,20,42.7,20c16.5,0,30.7-6.7,42.7-20c12-13.3,20.4-28.3,25.3-44.7c4.9-16.5,7.4-32.6,7.4-48.3s-2.5-31.8-7.4-48.3C374.6,586,366.2,571.1,354.2,557.7z" />
                <path d="M731.2,557.7c-12-13.4-26.2-20-42.7-20c-16.5,0-30.7,6.7-42.7,20c-12,13.3-20.4,28.3-25.3,44.7c-4.9,16.5-7.4,32.6-7.4,48.3c0,15.7,2.5,31.8,7.4,48.3c4.9,16.5,13.3,31.4,25.3,44.7c12,13.4,26.2,20,42.7,20c16.5,0,30.7-6.7,42.7-20c12-13.3,20.4-28.3,25.3-44.7c4.9-16.5,7.4-32.6,7.4-48.3s-2.5-31.8-7.4-48.3C751.6,586,743.1,571.1,731.2,557.7z" />
              </g>
            </svg>
            @${this.username}
          </a>
          <a class="email" href="mailto:${this.email}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M6.542 34.583q-1.834 0-3.125-1.333-1.292-1.333-1.292-3.083V9.833q0-1.791 1.292-3.125 1.291-1.333 3.125-1.333h26.916q1.834 0 3.146 1.333 1.313 1.334 1.313 3.125v20.334q0 1.75-1.313 3.083-1.312 1.333-3.146 1.333Zm13.458-12L6.542 13.625v16.542h26.916V13.625Zm0-3.875 13.375-8.875H6.667ZM6.5 13.625V9.833 30.167h.042H6.5Z"/></svg>
            ${this.email}
          </a>
        </div>
      </div>
      <hr />
      <div class="content">
        <slot></slot>
      </div>
      `;
  }
  renderStyle() {
    return /* css */ `
      :host {
        margin-bottom: 8px;
        display: inline-block;
        padding-right: 16px;
        padding-bottom: 16px;
        width: 100%;
        border: 1px solid #9a9a9a;
        border-radius: 16px;
      }
      .headline {
        display: flex;
        margin-top: 16px;
      }
      .avatar img {
        margin-left: 16px;
        width: 50px;
        height: 50px;
        border-radius: 16px;
      }
      .info {
        margin-left: 16px;
      }
      .info a {
        display: block;
        color: var(--theme-color);
        font-weight: 500;
        text-decoration: none;
      }
      .info svg {
        width: 1rem;
        height: 1rem;
        fill: var(--theme-color);
        vertical-align: middle;
      }
      hr {
        margin-left: 16px;
        border-color: #eaeaea;
      }
      .content {
        margin-top: 16px;
        margin-left: 16px;
      }
    `;
  }
}

customElements.define(ContributorCard.is, ContributorCard);
