<template>
  <div>
    <div class="p-6">
      <h1 class="c-s-t #6 m:#5 l:#4 Case">Colors</h1>
      <p class="c5-t">
        Physia framework given easy color system integrated with material design, but you can
        customized fo fit your design.
      </p>

      <div class="#8 m:#7 l:#6 p-y-5 Case">usage</div>
      <p class="c5-t m-y-4">it was easy to use as you see!</p>

      <div>
        <p class="c5-t m-y-2">Background color:</p>
        <div style="--el-u: 0;--el-p: 0;" class="-b-1 b c19-b -o-h l20 d4 -r-l">
          <pre class="x6 p-5 m-n c5 c15-t #11">&lt;div class="<span class="c20-t">c-orng</span>"&gt;
  Background color orange
&lt;/div&gt;</pre>
          <div class="x6 p-5 m-n">
            <div class="c-orng">Background color orange</div>
          </div>
        </div>
      </div>

      <div>
        <p class="c5-t m-y-2">Text color:</p>
        <div style="--el-u: 0;--el-p: 0;" class="-b-1 b c19-b -o-h l20 d4 -r-l">
          <pre class="x6 p-5 m-n c5 c15-t #11">&lt;div class="<span class="c20-t">c-orng<span class="c-orng-t">-t</span></span>"&gt;
  Text color orange
&lt;/div&gt;</pre>
          <div class="x6 p-5 m-n">
            <div class="c-orng-t">Text color orange</div>
          </div>
        </div>
      </div>

      <div>
        <p class="c5-t m-y-2">Border color:</p>
        <div style="--el-u: 0;--el-p: 0;" class="-b-1 b c19-b -o-h l20 d4 -r-l">
          <pre class="x6 p-5 m-n c5 c15-t #11">&lt;div class="<span class="c20-t">c-rd<span class="c-orng-t">-b</span></span>"&gt;
  Border color orange
&lt;/div&gt;</pre>
          <div class="x6 p-5 m-n">
            <div class="c-orng-b -b-2">Border color orange</div>
          </div>
        </div>
      </div>
      <div class="#8 m:#7 l:#6 p-y-5 Case">palette</div>

      <p class="c5-t">The palette give you 6 types of colors</p>
      <div class="-o-a">
        <table>
          <tbody>
            <tr class="CASE">
              <th>type</th>
              <th>Pattern</th>
              <th>values</th>
            </tr>
            <tr>
              <td>palette</td>
              <td>
                <pre class="p-3 c# c16 o-6 -d-ib -r-l">.c-*</pre>
              </td>
              <td>
                <pre class="c# m-n">values {rd,grn,bl,bl-gry,lt-grn,pnk,prpl,dp-prpl,indg,lt-bl,cn,tl,lm,ylw,ambr,orng,dp-orng,brwn,gry}</pre>
              </td>
            </tr>
            <tr>
              <td>primary &amp; secondary colors</td>
              <td>
                <pre class="p-3 c# c16 o-6 -d-ib -r-l">.c-{s,p}-*, .c-{s,p}</pre>
              </td>
              <td>
                <pre class="c# m-n">numbers {1 to 9} or {a1,a2,a4,a7} 
ex: c-s-5-t,c-s-a1</pre>
              </td>
            </tr>
            <tr>
              <td>theme colors</td>
              <td>
                <pre class="p-3 c# c16 o-6 -d-ib -r-l">.c-*</pre>
              </td>
              <td>
                <pre class="c# m-n">numbers {0 to 20}
20 is #fff and 0 is #000</pre>
              </td>
            </tr>
            <tr>
              <td>dynamic colors</td>
              <td>
                <pre class="p-3 c# c16 o-6 -d-ib -r-l">.c*, l-*, d-*</pre>
              </td>
              <td>
                <pre class="c# m-n">numbers {0 to 20}
20 is #fff and 0 is #000 on light mode
20 is #000 and 0 is #fff on dark mode
For more customization:
  l-*: only on light
  d-*: only on dark</pre>
              </td>
            </tr>
            <tr>
              <td>static colors</td>
              <td>
                <pre class="p-3 c# c16 o-6 -d-ib -r-l">.c-*</pre>
              </td>
              <td>
                <pre class="c# m-n">values {err,wrn,scc}</pre>
              </td>
            </tr>
            <tr>
              <td>more</td>
              <td>
                <pre class="p-3 c# c16 o-6 -d-ib -r-l">.c-*</pre>
              </td>
              <td>
                <pre class="c# m-n">values {i,n}
  n: transparent
  i: inherit
  c: currentColor
note: "c-*-f", fill in svg only in this 3 values</pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
