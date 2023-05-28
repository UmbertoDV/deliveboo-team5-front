<template>
  <footer>
    <div class="container-footer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.com/svgjs"
        width="1440"
        height="700"
        preserveAspectRatio="none"
        viewBox="0 0 1440 700"
      >
        <g mask='url("#SvgjsMask1165")' fill="none">
          <path
            d="M 0,130 C 96,169.2 288,325.4 480,326 C 672,326.6 768,148.6 960,133 C 1152,117.4 1344,225 1440,248L1440 700L0 700z"
            fill="rgba(93, 77, 245, 1)"
          ></path>
          <path
            d="M 0,553 C 96,544.8 288,510.8 480,512 C 672,513.2 768,582.6 960,559 C 1152,535.4 1344,427 1440,394L1440 700L0 700z"
            fill="rgba(93, 77, 245, 1)"
          ></path>
        </g>
        <defs>
          <mask id="SvgjsMask1165">
            <rect width="1440" height="700" fill="#ffffff"></rect>
          </mask>
        </defs>
      </svg>

      <div class="footer-nav d-flex pb-2 mt-5">
        <!-- Buttons left side -->
        <div class="buttons-footer d-flex flex-column justify-content-end pe-3">
          Sei un ristoratore?
          <button type="button">
            <a href="http://127.0.0.1:8000/register">Iscriviti</a>
          </button>
        </div>
      </div>
      <!-- Link Footer -->
      <div class="link-footer d-flex pe-5 ps-5 gap-5">
        <div>
          <h4>Su di noi</h4>
          <ul>
            <li>Informazioni su Deliveboo</li>
            <li>Diventa Partner</li>
            <li>Lavora con noi</li>
            <li>Diventa un rider su Deliveb</li>
            <li>Politica dei Cookies</li>
            <li>Sostenbilità</li>
            <li>
              <a class="us" href="http://localhost:5174/about">Il Team</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Aiuto</h4>
          <ul>
            <li>Contatti</li>
            <li>Diventa Partner</li>
            <li>FAQ</li>
            <li>Tipi di cucina</li>
          </ul>
        </div>
        <div>
          <h4>Note legali</h4>
          <ul>
            <li>Termini e condizioni</li>
            <li>Informativa sulla privacy</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.us {
  font-size: 0.9rem;
}
a {
  color: white;
  font-size: 1.3rem;
  text-decoration: none;
}
svg {
  width: 100vw;
  position: absolute;
  z-index: 0;
}
/* FOOTER *********************************/
footer {
  color: var(--light-white-txt);
  min-height: 440px;
  margin-top: auto;
}
.container-footer {
  position: relative;
  height: 700px;
}

.footer-main {
  min-height: 442px;
  padding: 6rem 0rem 4rem 1rem;
}

.buttons-footer {
  gap: 1rem;
  flex-basis: 20%;
  padding: 2rem 2rem;
  max-width: 207px;
  font-size: 1.2rem;

  span {
    color: white;
    font-size: 1.2rem;
  }
}

.buttons-footer button {
  border-radius: 0.3rem;
  background-color: #5d4df5;
  font-size: 0.8rem;
  font-weight: 300;
  color: var(--light-white-txt);
  padding: 0.5rem 1rem;
  box-shadow: var(--box-shadow-btn);
}

.link-footer {
  color: white;
  position: absolute;
  top: 50%;
  width: 100%;

  ul {
    font-size: 1rem;
    line-height: 2rem;
    list-style: none;
    padding-left: 0 !important;

    li {
      cursor: pointer;
    }
  }
}
</style>
