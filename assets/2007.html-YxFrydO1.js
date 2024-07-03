import{_ as i,o as e,c as s,b as n,a as l}from"./app-I-dmI9S2.js";const d={},a=n("p",null,"一个整数数组 original 可以转变成一个 双倍 数组 changed ，转变方式为将 original 中每个元素 值乘以 2 加入数组中，然后将所有元素 随机打乱 。",-1),c=n("p",null,"给你一个数组 changed ，如果 change 是 双倍 数组，那么请你返回 original数组，否则请返回空数组。original 的元素可以以 任意 顺序返回。",-1),r=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,"排序后，利用双指针寻找，配对成功的则将标志位设置为true，当某次配对未找到组合时则直接跳出返回空数组。")],-1),t=l(`<p>实现code：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Solution {
public:
    vector&lt;int&gt; findOriginalArray(vector&lt;int&gt;&amp; changed) {
      vector&lt;int&gt; ans{};
      if (changed.size() % 2 != 0) {
        return ans;
      }
      sort(changed.begin(), changed.end());
      vector&lt;bool&gt; used(changed.size(), false);
      
      int i = 0, j = 1;
      while (i &lt; changed.size())
      {
        if (used[i]) {
          i++;
          continue;
        }
        used[i] = true;
        while (j &lt; changed.size() &amp;&amp; (changed[j] != 2 * changed[i] || used[j]))
        {
          j++;
        }
        if (j != changed.size()) {
          ans.push_back(changed[i]);
          used[j] = true;
          i++;
        } else {
          return vector&lt;int&gt;{};
        }
      }
      return ans;
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[a,c,r,t];function u(o,m){return e(),s("div",null,v)}const g=i(d,[["render",u],["__file","2007.html.vue"]]);export{g as default};
