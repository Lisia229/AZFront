<template>
  <section class="page_404 flex justify-center items-center">
      <div class="row">
        <div class="col-sm-12">
          <div class="col-sm-10 col-sm-offset-1 text-center">
            <div class="four_zero_four_bg">
              <h1 class="text-center">404</h1>
            </div>

            <div class="contant_box_404">
              <h3 class="h2">Look like you're lost</h3>

              <p class="text-lg">the page you are looking for not avaible!</p>

              <a href="/" class="link_404 hover:bg-black">Go to Home</a>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<style scoped>
.page_404 {
  width: 100vw;
  height: 100vh;
  background: #fff;
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif) no-repeat center ;
  /* background: url(https://media2.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif?cid=ecf05e47b8nez9yz81uayd1r21ccyek8qd0si6u7kmkkj0wh&rid=giphy.gif&ct=g) no-repeat center ; */
  height: 400px;
}

.four_zero_four_bg h1 {
  font-size: 80px;
}

.four_zero_four_bg h3 {
  font-size: 80px;
}

.link_404 {
  color: #fff !important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;
  border-radius: 10px;
}
.contant_box_404 {
  margin-top: -50px;
}
</style>
