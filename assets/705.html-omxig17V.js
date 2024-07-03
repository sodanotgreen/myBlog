import{_ as a,o as t,c as p,b as n,d as s,a as o}from"./app-I-dmI9S2.js";const e={mounted(){this.$page.lastUpdated="2022/1/6 下午6:09:09"}},c=n("p",null,[s("不使用任何内建的哈希表库设计一个哈希集合（HashSet）。"),n("br"),s(" 哈希函数：能够将任意元素映射到一个固定范围的整数值，并将该元素存储到整数值对应的数组地址上。")],-1),i=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,[s("冲突处理：由于不同元素可能映射到相同的数组下标，因此需要在整数值出现「冲突」时，需要进行冲突处理。常见策略："),n("br"),s("   链地址法：为每个哈希值维护一个链表，并将具有相同哈希值的元素都放入这一链表当中。"),n("br"),s("   开放地址法：当发现哈希值在a下标处产生冲突时，根据某种策略，从a出发找到下一个不冲突的位置。例如，一种最简单的策略是，不断地检查 a+1,a+2,a+3...这些整数对应的位置。")])],-1),l=o(`<p>地址链表法实现code：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">MyHashSet</span> <span class="token punctuation">{</span>
  vector<span class="token operator">&lt;</span>list<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;&gt;</span> mySet<span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token keyword">const</span> <span class="token keyword">int</span> base <span class="token operator">=</span> <span class="token number">769</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">hash</span><span class="token punctuation">(</span><span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> key <span class="token operator">%</span> base<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token keyword">public</span><span class="token operator">:</span>
  <span class="token function">MyHashSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token function">mySet</span><span class="token punctuation">(</span>base<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
    
  <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">auto</span> <span class="token operator">&amp;</span> a <span class="token operator">=</span> mySet<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">find</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">cbegin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token function">cend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token operator">==</span> a<span class="token punctuation">.</span><span class="token function">cend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      a<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
    
  <span class="token keyword">void</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">auto</span> <span class="token operator">&amp;</span> a <span class="token operator">=</span> mySet<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
    a<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
    
  <span class="token keyword">bool</span> <span class="token function">contains</span><span class="token punctuation">(</span><span class="token keyword">int</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">auto</span> <span class="token operator">&amp;</span> a <span class="token operator">=</span> mySet<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token operator">!</span><span class="token punctuation">(</span><span class="token function">find</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">cbegin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token function">cend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token operator">==</span> a<span class="token punctuation">.</span><span class="token function">cend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),u=[c,i,l];function k(r,d,v,m,b,y){return t(),p("div",null,u)}const f=a(e,[["render",k],["__file","705.html.vue"]]);export{f as default};
