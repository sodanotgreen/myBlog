import{_ as a,o as t,c as p,b as n,d as s,a as o}from"./app-I-dmI9S2.js";const e={},c=n("p",null,"给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。",-1),l=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,[s("对于这类寻找所有可行解的题，我们都可以尝试用「搜索回溯」的方法来解决, 而dfs是实现的主要手段。此外需要充分考虑剪枝，防止超时。"),n("br"),s(" 对于该题我们可以从前往后搜索，防止在dfs时向前搜索导致重复，即可以避免了hash去重的过程，也可以实现剪枝。")])],-1),i=o(`<p>实现code：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
  vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;&gt;</span> <span class="token function">combinationSum</span><span class="token punctuation">(</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> candidates<span class="token punctuation">,</span> <span class="token keyword">int</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;&gt;</span> res<span class="token punctuation">;</span>
    <span class="token keyword">int</span> length <span class="token operator">=</span> candidates<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    std<span class="token double-colon punctuation">::</span>function<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">,</span> vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">&gt;</span> dfs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">&amp;</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token keyword">int</span> preIndex<span class="token punctuation">,</span> <span class="token keyword">int</span> preSum<span class="token punctuation">,</span> vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> preList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span>size_t i <span class="token operator">=</span> preIndex<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
        <span class="token keyword">int</span> t <span class="token operator">=</span> preSum <span class="token operator">+</span> candidates<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>t <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">r</span> <span class="token punctuation">(</span>preList<span class="token punctuation">)</span><span class="token punctuation">;</span>
          r<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>candidates<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          res<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>t <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token function">r</span> <span class="token punctuation">(</span>preList<span class="token punctuation">)</span><span class="token punctuation">;</span>
          r<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>candidates<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token function">dfs</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> t<span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token generic-function"><span class="token function">vector</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),u=[c,l,i];function r(k,d){return t(),p("div",null,u)}const m=a(e,[["render",r],["__file","39.html.vue"]]);export{m as default};