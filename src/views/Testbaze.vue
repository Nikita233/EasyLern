<template>
    <div class="about">
    <Nav_Main />
    <div class="hero">
      <div class="hero-body">
        <div class="container">
         <Menu />
         <article>
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Имя Фамилия</p>
                    <p class="subtitle is-6">@firstname</p>
                  </div>
                </div>

                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                </div>
              </div>
            </div>
          </article>
          <aside>
            <div class="field">
              <label class="label">Изменить Имя и Фамилию</label>
              <div class="control">
                <input class="input" type="text" placeholder="e.g Alex Smith">
              </div>
            </div>

            

            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
              </div>
            </div>

            <div class="control">
              <button class="button is-primary">Submit</button>
            </div>
          </aside>
        </div>
        
        
      </div>
    </div>
    
    
  </div>
</template>