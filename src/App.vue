<template>
  <div id="app">
    <div class="b b-cl h-mn">
      <header>
        <nav style="--el-u: 0;--el-p: 0;" class="w-f h-10 e-4 d3 l20 fxd -z-2">
          <div class="m:x10 l:x8 m-x-a h-i b b-j-sb b-a-c p-x-4">
            <div class="b">
              <div class="unt btn-n u-8 c1-t" onclick="toggleDrw()">
                <i class="material-icons">menu</i>
              </div>
              <div class="unt btn-n u-8 c1-t">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 129 129"
                  class="u-7"
                >
                  <defs>
                    <linearGradient
                      id="linear-gradient-logo"
                      x1="69.43"
                      y1="30.35"
                      x2="-1.43"
                      y2="30.35"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#15ffe1" />
                      <stop offset="0.19" stop-color="#13f6e4" />
                      <stop offset="0.49" stop-color="#0ddded" />
                      <stop offset="0.88" stop-color="#03b4fa" />
                      <stop offset="1" stop-color="#00a6ff" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M64.24,0h0A64.24,64.24,0,0,0,0,64.24V80.29A16.06,16.06,0,0,0,16.06,96.35h0A16.06,16.06,0,0,0,32.12,80.29V64.24A32.12,32.12,0,0,1,64.24,32.12h0A32.12,32.12,0,0,1,96.35,64.24h0A32.11,32.11,0,0,1,64.24,96.35H48.18a16.06,16.06,0,0,0-16.06,16.06h0a16.06,16.06,0,0,0,16.06,16.06H64.24a64.23,64.23,0,0,0,64.23-64.23h0A64.24,64.24,0,0,0,64.24,0Z"
                    style="fill: currentColor;"
                  />
                  <circle
                    cx="30.35"
                    cy="30.35"
                    r="25.35"
                    style="fill: url(#linear-gradient-logo);"
                  />
                </svg>
              </div>
            </div>
            <div class="l:x4 l:-d-b -d-n h-8">
              <i class="material-icons abs u-8 b b-c">search</i>
              <input class="fld fld-n c19 p-s-8 -r-m u-f" placeholder="search.." />
            </div>
            <div class="b">
              <div class="unt btn-n u-8 c1-t">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                  class="u-6"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m512 256c0-141.363281-114.636719-256-256-256s-256 114.636719-256 256 114.636719 256 256 256c1.503906 0 3-.03125 4.5-.058594v-199.285156h-55v-64.097656h55v-47.167969c0-54.703125 33.394531-84.476563 82.191406-84.476563 23.367188 0 43.453125 1.742188 49.308594 2.519532v57.171875h-33.648438c-26.546874 0-31.6875 12.617187-31.6875 31.128906v40.824219h63.476563l-8.273437 64.097656h-55.203126v189.453125c107.003907-30.675781 185.335938-129.257813 185.335938-246.109375zm0 0"
                    style="fill: currentColor;"
                  />
                </svg>
              </div>
              <div class="unt btn-n u-8 c1-t">
                <svg
                  height="512"
                  viewBox="0 0 24 24"
                  width="512"
                  xmlns="http://www.w3.org/2000/svg"
                  class="u-6"
                >
                  <path d="m0 .5h4.219v23h-4.219z" style="fill: currentColor;" />
                  <path
                    d="m15.384.5c-4.767 0-8.644 3.873-8.644 8.633 0 4.75 3.877 8.61 8.644 8.61 4.754 0 8.616-3.865 8.616-8.61 0-4.759-3.863-8.633-8.616-8.633z"
                    fill="#f4511e"
                  />
                </svg>
              </div>
              <div class="unt btn-n u-8 c1-t">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                  class="u-6"
                >
                  <path
                    d="M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872    c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464    c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496    c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368    c-56.832-6.496-116.608-28.544-116.608-127.008c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68    c0,0,21.504-6.912,70.4,26.336c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672    c48.864-33.248,70.336-26.336,70.336-26.336c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992    c0,98.72-59.84,120.448-116.864,126.816c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496    c0,6.88,4.608,14.88,17.6,12.352C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z"
                    style="fill: currentColor;"
                  />
                </svg>
                <div class="unt p-n m-x-3 bdg bdg-f bdg-s">i</div>
              </div>
            </div>
          </div>
        </nav>
        <div class="h-10"></div>
      </header>
      <main class="b-fg">
        <div class="m:x10 l:x8 m-x-a m-y-6">
          <div class="rlt b">
            <div
              style="margin-left: calc(calc(var(--drw-open,2) - 1) * 300px) !important;"
              class="ln-y h-i l:-d-b -d-n >"
            ></div>
            <div class="w-f -z c20">
              <router-view />
              <div class="b">
                <div class="unt h-a p-y-4 itm Case s-d">
                  <i class="material-icons m-e-a">arrow_back</i>
                  <div class="a-e">
                    <div class="Case #9 l:#8">get started</div>
                    <div class="CASE #10 l:#9 c8-t">prev</div>
                  </div>
                  <i class="material-icons u-10">layers</i>
                </div>
                <div class="ln-y w-2 h-i"></div>
                <div class="unt h-a p-y-4 itm Case">
                  <i class="material-icons u-10">layers</i>
                  <div class="a-s">
                    <div class="Case #9 l:#8">elevation</div>
                    <div class="CASE #10 l:#9 c8-t">next</div>
                  </div>
                  <i class="material-icons m-s-a">arrow_forward</i>
                </div>
              </div>
            </div>
            <div
              style="visibility: var(--drw-open,hidden);opacity: calc(var(--drw-open,0) * 0.2);"
              class="c-0 fxd .f o-2 > -z-3 m:-d-n"
              onclick="toggleDrw()"
            ></div>
            <div
              style="--el-u: 0;--el-p: 0;transform:translateX(calc(calc(calc(var(--drw-open,0) * 100% - 100% * var(--is-screen-s,0)) * var(--is-screen-s,0) ) * calc(var(--is-ltr) - var(--is-rtl)) ));z-index: calc(var(--is-screen-s,0) * var(--drw-open) * 1001);"
              class="m:abs .s w-15 h-f -o-y-a fxd .t .s l20 d3 >"
            >
              <div>
                <div class="p-y-4">
                  <router-link class="c-i-t" to="/">
                    <div class="unt itm Case">
                      <i class="material-icons">home</i>get started
                    </div>
                  </router-link>
                </div>
                <div class="p-y-4">
                  <div class="unt itm s-d p-s-5 CASE">design</div>
                  <router-link class="c-i-t" to="/colors">
                    <div class="unt itm Case">
                      <i class="material-icons">palette</i>colors
                    </div>
                  </router-link>

                  <div class="unt itm Case s-d">
                    <i class="material-icons">layers</i>elevation
                  </div>
                  <div class="unt itm Case s-d">
                    <i class="material-icons">hdr_strong</i>status
                  </div>
                  <div class="unt itm Case s-d">
                    <i class="material-icons">text_fields</i>typography
                  </div>
                  <div class="unt itm Case s-d">
                    <i class="material-icons">wallpaper</i>iconography
                  </div>
                </div>

                <div class="ln"></div>
                <div class="p-y-4">
                  <div class="unt itm s-d p-s-5 CASE">structure</div>

                  <div class="unt itm Case s-d">
                    <i class="material-icons">check_box_outline_blank</i>box
                  </div>
                  <div class="unt itm Case s-d">
                    <i class="material-icons">select_all</i>model
                    <i class="material-icons m-s-a -i-x">keyboard_arrow_right</i>
                  </div>
                  <div class="unt itm Case s-d">
                    <i class="material-icons">aspect_ratio</i>ratio
                  </div>
                </div>
                <div class="ln"></div>
                <div class="p-y-4">
                  <div class="unt itm s-d p-s-5 CASE">layout</div>

                  <div class="unt itm Case s-d">
                    <i class="material-icons">view_compact</i>grid
                  </div>
                  <div class="unt itm Case s-d">
                    <i class="material-icons">power_input</i>container
                  </div>
                  <div class="unt itm Case s-d">
                    <i class="material-icons">phonelink</i>Responsive
                    <i class="material-icons m-s-a -i-x">keyboard_arrow_right</i>
                  </div>
                </div>
                <div class="ln"></div>
                <div class="p-y-4">
                  <div class="unt itm s-d p-s-5 CASE">motion</div>
                  <div class="unt itm Case s-d">
                    <i class="material-icons">speed</i>transition
                  </div>
                  <div class="unt itm Case s-d">
                    <i class="material-icons">directions_run</i>animations
                  </div>
                </div>
                <div class="ln"></div>
                <div class="p-y-4">
                  <div class="unt itm s-d p-s-5 CASE">helpers</div>
                  <div class="unt itm Case s-d">
                    <i class="material-icons">style</i>components
                    <i class="material-icons m-s-a -i-x">keyboard_arrow_right</i>
                  </div>
                  <div class="unt itm Case s-d">
                    <i class="material-icons">settings_ethernet</i>custom
                  </div>
                </div>
                <div class="ln"></div>
                <div class="p-y-4">
                  <div class="unt itm s-d p-s-5 CASE">more</div>
                  <div class="unt itm Case">
                    <i class="material-icons c-rd-t">favorite</i>support us
                    <div class="m-s-a b b-c">
                      <i class="material-icons -i-x">open_in_new</i>
                    </div>
                  </div>
                  <div class="unt itm Case">
                    <i class="material-icons">help</i>help
                    <div class="m-s-a b b-c">
                      <i class="material-icons -i-x">open_in_new</i>
                    </div>
                  </div>
                </div>
                <div class="ln"></div>
                <div class="p-y-4">
                  <div class="unt itm s-d p-s-5 CASE">modes</div>
                  <label class="unt itm Case swt">
                    <i class="material-icons c-pnk-t">grid_on</i>show grid
                    <input type="checkbox" onchange="toggleGrid(this.checked )" />
                    <div class="swt-hnd m-s-a m-e-5">
                      <div class="hnd"></div>
                    </div>
                  </label>
                  <label class="unt itm Case swt">
                    <i class="material-icons">select_all</i>show Padding
                    <input type="checkbox" onchange="togglePadding(this.checked )" />
                    <div class="swt-hnd m-s-a m-e-5">
                      <div class="hnd"></div>
                    </div>
                  </label>
                  <label class="unt itm Case swt">
                    <i class="material-icons">brightness_2</i>theme dark
                    <input type="checkbox" onchange="toggleTheme(this.checked )" />
                    <div class="swt-hnd m-s-a m-e-5">
                      <div class="hnd"></div>
                    </div>
                  </label>
                  <label class="unt itm swt">
                    <i class="material-icons">format_textdirection_r_to_l</i>RTL dir
                    <input type="checkbox" onchange="toggleDir(this.checked )" />
                    <div class="swt-hnd m-s-a m-e-5">
                      <div class="hnd"></div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer class="m-t-7">
        <div class="ln"></div>
        <div class="m:x10 l:x8 m-x-a m-y-6 p-x-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 721 193"
              class="h-6"
            >
              <defs>
                <svg:style>
                  .cls-1 {
                  fill: currentColor;
                  }
                  .cls-2 {
                  fill: url(#linear-gradient);
                  }
                  .cls-3 {
                  fill: url(#linear-gradient-2);
                  }
                </svg:style>
                <linearGradient
                  id="linear-gradient"
                  x1="263"
                  y1="62.53"
                  x2="192.14"
                  y2="62.53"
                  gradientTransform="translate(-193.57)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#15ffe1" />
                  <stop offset="0.19" stop-color="#13f6e4" />
                  <stop offset="0.49" stop-color="#0ddded" />
                  <stop offset="0.88" stop-color="#03b4fa" />
                  <stop offset="1" stop-color="#00a6ff" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-2"
                  x1="591.87"
                  y1="138.36"
                  x2="546.99"
                  y2="138.36"
                  gradientTransform="matrix(1, 0, 0, -1, 0, 186.59)"
                  xlink:href="#linear-gradient"
                />
              </defs>
              <path
                class="cls-1"
                d="M64.24,32.18h0A64.24,64.24,0,0,0,0,96.41v16.06a16.06,16.06,0,0,0,16.06,16.06h0a16.06,16.06,0,0,0,16.06-16.06V96.41A32.12,32.12,0,0,1,64.24,64.29h0A32.12,32.12,0,0,1,96.35,96.41h0a32.12,32.12,0,0,1-32.11,32.12H48.18a16.06,16.06,0,0,0-16.06,16.06h0a16.06,16.06,0,0,0,16.06,16.06H64.24a64.24,64.24,0,0,0,64.23-64.24h0A64.23,64.23,0,0,0,64.24,32.18Z"
              />
              <circle cx="30.35" cy="62.53" r="25.35" style="fill: url(#linear-gradient);" />
              <rect class="cls-1" x="551.06" y="32.18" width="32.12" height="128.49" rx="16.06" />
              <rect
                x="551.06"
                y="32.18"
                width="32.12"
                height="32.12"
                rx="16.06"
                style="fill: url(#linear-gradient-2);"
              />
              <path
                class="cls-1"
                d="M202,32.18h0a63.92,63.92,0,0,0-32.12,8.61V16.68c0-.19,0-.37,0-.56v-.06A16.06,16.06,0,0,0,153.84,0h-.06a16.1,16.1,0,0,0-4.58.67c-.52.2-1.06.39-1.59.57a16.05,16.05,0,0,0-9.87,14.46v.78a2.64,2.64,0,0,1,0,.29V96.41h0v48.17a16.06,16.06,0,0,0,32.12,0V96.42h0A32.12,32.12,0,0,1,202,64.29h0a32.12,32.12,0,0,1,32.12,32.12v48.18a16.06,16.06,0,0,0,16.06,16.06h0a16.06,16.06,0,0,0,16.06-16.06V96.41A64.24,64.24,0,0,0,202,32.18Z"
              />
              <path
                class="cls-1"
                d="M339.74,160.65h0A63.9,63.9,0,0,0,371.86,152v24.12c0,.19,0,.37,0,.56v.06a16.06,16.06,0,0,0,16.06,16.06H388a15.76,15.76,0,0,0,4.58-.68c.53-.2,1.06-.39,1.6-.56A16.05,16.05,0,0,0,404,177.13v-.78c0-.1,0-.19,0-.29V96.42h0V48.24a16.06,16.06,0,0,0-32.12,0V96.41h0a32.12,32.12,0,0,1-32.12,32.11h0a32.12,32.12,0,0,1-32.11-32.12V48.24a16.06,16.06,0,0,0-16.06-16.06h0a16.06,16.06,0,0,0-16.06,16.06V96.41A64.24,64.24,0,0,0,339.74,160.65Z"
              />
              <path
                class="cls-1"
                d="M538.9,105.55a40.17,40.17,0,0,0-35.47-25.17l-.63,0c-.39,0-.78,0-1.18,0H461.46v0h-8.61a8.05,8.05,0,0,1-.05-16.06h72.93a16.06,16.06,0,0,0,0-32.11h-72.3l-1.18,0a40.16,40.16,0,0,0-38.16,32.08h0a40.26,40.26,0,0,0-.82,8h0a39.82,39.82,0,0,0,2.89,14.93v0a40.18,40.18,0,0,0,35.73,25.17c.51,0,1,0,1.55,0h49a8,8,0,0,1-.84,16H461.91l-.44,0-.44,0h-31.7a16.06,16.06,0,1,0,0,32.12H461l.44,0h0l.44,0h39.71a40.14,40.14,0,0,0,40.16-40.16h0a40,40,0,0,0-2.87-14.92Z"
              />
              <path
                class="cls-1"
                d="M721,72.33a40.26,40.26,0,0,0-.82-8h0a40.89,40.89,0,0,0-2.06-6.89A40.16,40.16,0,0,0,682,32.2c-.39,0-.78,0-1.18,0H608.51a16.06,16.06,0,1,0,0,32.11h41.93l30.95,0c4.21,0,7.45,3.78,7.45,8a8,8,0,0,1-7.45,8h-8.62v0H632.61c-.4,0-.79,0-1.18,0l-.62,0a40.18,40.18,0,0,0-35.48,25.17v0a40.14,40.14,0,0,0-2.87,14.91h0a40.17,40.17,0,0,0,40.16,40.16h39.71l.44,0h0l.44,0h31l.66,0A16.06,16.06,0,0,0,721,144.61V75.35c0-.34,0-.67-.05-1,0-.67.05-1.34.05-2ZM673.2,128.52l-.44,0-.44,0H632.61a8,8,0,0,1-.84-16h49c.52,0,1,0,1.54,0a39.68,39.68,0,0,0,6.5-.79v16.85Z"
              />
            </svg>
            <div class="b b-j-sb b-a-c">
              <div>All rights reserved, Physia framework ©2020-2018.</div>
              <div class="unt btn-n">MIT License</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import "~physia/resources/sass/import.scss";

html {
  font-family: "Product Sans", "Droid Arabic Kufi";
}

.show-grid * {
  outline: 1px solid deeppink;
}

.show-padding * {
  background-image: linear-gradient(
      to bottom,
      rgb(255, 255, 255) 0%,
      rgb(255, 255, 255) 100%
    ),
    linear-gradient(
      to bottom,
      rgba(255, 203, 0, 0.25) 0%,
      rgba(255, 203, 0, 0.25) 100%
    );
  background-clip: content-box, padding-box;
}
</style>
