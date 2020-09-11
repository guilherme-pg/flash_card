class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header>
            <div class="header_block1_class">
                <a class="logo_class" href="html/index.template.html">LOGO</a>
            </div>

            <div class="header_block2_class">
                <ul class="search_block_class">
                    <button class="search_class">Search</button>
                    <input type="text" class="input_search_class" placeholder="Search">
                </ul>
            </div>

            <div class="header_block3_class">
                <a class="login_class" href="/">Log in</a>
                <a class="signup_class" href="/">Sign up</a>
            </div>
        </header>
        `;
    }
};


class Main_base extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <main class="main_index">
            <nav class="column_menu_class">
                <ul>
                    <li><a href="">Introduction to FlashQuest</a></li>
                    <li><a href="">Most popular lists</a></li>
                    <li><a href="">Most popular categories</a></li>
                    <li><a href="">All categories</a></li>
                    <li><a href="">Create a quick list</a></li>
                    <li><a href="">Users Lists</a></li>
                </ul>
            </nav>
            

            <section class="column_card_class">
                



                
            </section>
        

            <section class="column_3_class">
                <div class="propaganda"></div>
            </section>
        </main>
        `;
    }
}


class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer class="footer_class">

            <div class="footer_div_class">
                <nav class="footer_options_1">
                    <ul>
                        <h3>Comunication</h3>
                        <li><a href="/">Suggestions</a></li>
                        <li><a href="/">Report a problem</a></li>
                        <li><a href="/">Make a question</a></li>
                    </ul>
                </nav>
                <nav class="footer_options_2">
                    <ul>
                        <h3>Features</h3>
                        <li><a href="/">Common questions</a></li>
                        <li><a href="/">Premiun Content</a></li>
                    </ul>
                </nav>
                <nav class="footer_options_3">
                    <ul>
                        <h3>About</h3>
                        <li><a href="/">Privacy</a></li>
                        <li><a href="/">Terms</a></li>
                        <li><a href="/">Policy</a></li>
                    </ul>
                </nav>
            </div>

            <div class="footer_footer_class">
                <hr class="footer_line_class">
                <div class="footer_end_class">
                    <div class="footer_contacts_class">
                        <ul>
                            <li><a href="/">Instagram</a></li>
                            <li><a href="/">Twitter</a></li>
                        </ul>
                    </div>
                    <div class="footer_reserved_class">
                        <p>All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
};

customElements.define('main-header', Header);

customElements.define('main-base', Main_base);

customElements.define('main-footer', Footer);