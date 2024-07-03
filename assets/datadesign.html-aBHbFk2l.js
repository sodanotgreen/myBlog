import{_ as n,o as s,c as a,a as p}from"./app-I-dmI9S2.js";const t="/myBlog/assets/dd1-1-6OJRxdS1.png",e="/myBlog/assets/dd1-2-Q18FMZcI.png",o={},l=p(`<h1 id="数据结构设计" tabindex="-1"><a class="header-anchor" href="#数据结构设计" aria-hidden="true">#</a> 数据结构设计</h1><p>使用业界规范的数据结构，例如vnode结构<br> 节点应该使用数组，以表面节点之间的顺序<br> 单一数据源，可以计算，但要避免两个数据之间的相互同步</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">work</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;作品标题&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">setting</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">/* 一些可能的配置项，用不到就先预留, 拓展性  */</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token comment">/* 页面body的一些设置，如背景色 */</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// components要用数组，有序结构</span>
      <span class="token comment">// 单个node要符合常见的vnode格式</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;xxx&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 每个组件都有id，不重复</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;文本1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">&#39;20px&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;文本1&#39;</span> <span class="token comment">// 文本内容，有时候放在children，有时候放在attrs或者props，没有标准，看实际情况来确定</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;yyy&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;图片1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">tag</span><span class="token operator">:</span> <span class="token string">&#39;image&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">&#39;xxx.png&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;100px&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token keyword">null</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 图层，vuex getter</span>
<span class="token punctuation">{</span>
  <span class="token function-variable function">layers</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>work<span class="token punctuation">.</span>components<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> c<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> c<span class="token punctuation">.</span>name
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+t+'" alt="alt text"></p><h2 id="数据流转" tabindex="-1"><a class="header-anchor" href="#数据流转" aria-hidden="true">#</a> 数据流转</h2><p><img src="'+e+'" alt="alt text"></p><h2 id="目的" tabindex="-1"><a class="header-anchor" href="#目的" aria-hidden="true">#</a> 目的</h2><p>论证可行性、拓展性、复杂度，不需要保证未来的细节。</p>',8),c=[l];function r(i,u){return s(),a("div",null,c)}const k=n(o,[["render",r],["__file","datadesign.html.vue"]]);export{k as default};
