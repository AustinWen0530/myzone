(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{383:function(t,a,s){t.exports=s.p+"assets/img/duizhan.f0da7d82.png"},384:function(t,a,s){t.exports=s.p+"assets/img/diaoyongzhan.791de5a7.png"},443:function(t,a,s){"use strict";s.r(a);var e=s(2),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("JavaScript从诞生起就是一门单线程的语言。至于为什么被设计成单线程？因为该语言的作者当时认为它只是在浏览器执行的脚本语言，对它功能性的要求不是很高。早期的网页对JavaScript需求没那么高，都是轻量级的，而且要求写起来的程序一定要简单，而如果涉及成支持多线程的，程序逻辑会造成交互、DOM 操作变得十分复杂。")]),t._v(" "),e("p",[t._v("单线程的缺点是任务执行会阻塞，表现到网页里是：发起数据请求 --\x3e http延迟 --\x3e 等待完成，等待的过程中，其他操作无法执行，导致页面长时间无响应。")]),t._v(" "),e("p",[t._v("JavaScript用**异步回调（asynchronous callback）**去解决这些问题。实现异步回调的特性，其实是基于Event Loop（事件循环）。")]),t._v(" "),e("blockquote",[e("p",[t._v("为了尽量保持原意，本篇一些专有名词尽量使用英文，而不是采用中文翻译。")])]),t._v(" "),e("h2",{attrs:{id:"_11-1-先了解一点基础知识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-1-先了解一点基础知识"}},[t._v("#")]),t._v(" 11.1 "),e("strong",[t._v("先了解一点基础知识")])]),t._v(" "),e("h3",{attrs:{id:"_1-javascript的-engine-和-runtime"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-javascript的-engine-和-runtime"}},[t._v("#")]),t._v(" "),e("strong",[t._v("1.")]),t._v(" JavaScript的 Engine 和 Runtime")]),t._v(" "),e("p",[t._v("简单来说，为了让 JavaScript 运行起来，要完成两部分工作（当然实际比这复杂得多）：")]),t._v(" "),e("p",[t._v("第一部分是"),e("strong",[t._v("Engine（JS引擎）")]),t._v("：编译并执行 JavaScript 代码，完成内存分配、垃圾回收等；"),e("br"),t._v("\n第二部分是"),e("strong",[t._v("Runtime（运行时）")]),t._v("：为 JavaScript 提供一些对象或机制，使它能够与外界交互。")]),t._v(" "),e("p",[t._v("举个例子：")]),t._v(" "),e("p",[t._v("Chrome浏览器 和 Node.js 都使用了 V8 Engine。V8 实现并提供了 ECMAScript 标准中的所有数据类型、操作符、对象和方法（注意并没有 DOM）。 但它们的 Runtime 并不一样：Chrome 提供了 window、DOM，而 Node.js 则是 require、process 等等。")]),t._v(" "),e("h3",{attrs:{id:"_2-浏览器的线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-浏览器的线程"}},[t._v("#")]),t._v(" "),e("strong",[t._v("2. 浏览器的线程")])]),t._v(" "),e("p",[t._v("JS引擎是单线程的，但是浏览器是多线程的。现代浏览器的一个 tab ，其中的线程包括但不局限于：")]),t._v(" "),e("ul",[e("li",[t._v("GUI 渲染线程")]),t._v(" "),e("li",[t._v("JS引擎线程")]),t._v(" "),e("li",[t._v("事件触发线程")]),t._v(" "),e("li",[t._v("定时器触发线程")]),t._v(" "),e("li",[t._v("异步http请求线程")])]),t._v(" "),e("p",[t._v("JavaScript中的异步回调是通过 WebAPIs 去支持的，常见的有 "),e("code",[t._v("XMLHttpRequest")]),t._v("，"),e("code",[t._v("setTimeout")]),t._v("，事件回调（"),e("code",[t._v("onclik")]),t._v(", "),e("code",[t._v("onscroll")]),t._v("等）。而这几个 API 浏览器都提供了单独的线程去运行，所以才会有合适的地方去处理定时器的计时、各种请求的回调。即当代码中出现这几个定义的异步任务，"),e("strong",[t._v("是由浏览器实现了它们与JS引擎的通信，与JS引擎不在同一个线程")]),t._v("。")]),t._v(" "),e("p",[t._v("另外，GUI 渲染和JavaScript执行是互斥的。虽然两者属于不同的线程，但是由于JavaScript执行结果可能会对页面产生影响，所以浏览器对此做了处理，大部分情况下JavaScript线程执行，执行渲染（render）的线程就会暂停，等JavaScript的同步代码执行完再去渲染。")]),t._v(" "),e("h2",{attrs:{id:"_11-2-event-loop的定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-2-event-loop的定义"}},[t._v("#")]),t._v(" 11.2 Event loop的定义")]),t._v(" "),e("p",[t._v("Event Loop（事件循环） 是让 JavaScript 做到既是单线程，又绝对不会阻塞的核心机制，也是 JavaScript 并发模型（Concurrency Model）的基础，是用来协调各种事件、用户交互、脚本执行、UI 渲染、网络请求等的一种机制。Event Loop的作用很简单： 监控"),e("strong",[t._v("调用栈")]),t._v("和"),e("strong",[t._v("任务队列")]),t._v('（见 壹.2.8.3），如果调用栈是空的，它就会取出队列中的第一个"callback函数"，然后将它压入到调用栈中，然后执行它。')]),t._v(" "),e("p",[t._v("总的来说，Event Loop 是"),e("strong",[t._v("实现异步回调的一种机制")]),t._v("而已。")]),t._v(" "),e("h3",{attrs:{id:"_1-分两种"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-分两种"}},[t._v("#")]),t._v(" 1.分两种")]),t._v(" "),e("p",[t._v("Event Loop 分为两种，一种存在于 Browsing Context 中，还有一种在 Worker 中。")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("Browsing Context")]),t._v(" 是指一种用来将 Document（文档）展现给用户的环境。例如浏览器中的 tab，window 或 iframe 等，通常都包含 Browsing Context。")]),t._v(" "),e("li",[e("strong",[t._v("Worker")]),t._v(" 是指一种独立于 UI 脚本，可在后台执行脚本的 API。常用来在后台处理一些计算密集型的任务。")])]),t._v(" "),e("p",[t._v("本篇重点介绍的是 Browsing Context 中的 Event Loop，相比 Worker 中的 Event Loop，它也更加复杂一些。")]),t._v(" "),e("blockquote",[e("p",[t._v("另外，Event Loop 并不是在 ECMAScript 标准中定义的，而是在 HTML 标准中定义的。在 JS引擎中（以V8为例），只是实现了 ECMAScript 标准，而并不关心什么 Event Loop。也就是说 "),e("strong",[t._v("Event Loop 是属于 JavaScript Runtime")]),t._v(" 的，是由宿主环境（比如浏览器）提供的。所以千万不要理解错了，这也是前面介绍 JavaScript Engine 和 Runtime 的原因。")])]),t._v(" "),e("h3",{attrs:{id:"_2-独立"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-独立"}},[t._v("#")]),t._v(" 2.独立")]),t._v(" "),e("p",[t._v("每个”线程“都有自己的 Event Loop。所以，每个 web worker 拥有独立的 Event Loop，它们都可以独立运行；"),e("a",{attrs:{href:"https://html.spec.whatwg.org/#similar-origin-window-agent",target:"_blank",rel:"noopener noreferrer"}},[t._v("同源的 windows"),e("OutboundLink")],1),t._v(" 共享一个 Event Loop，它们之间可以互相通信。")]),t._v(" "),e("h2",{attrs:{id:"_11-3-内存模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-3-内存模型"}},[t._v("#")]),t._v(" 11.3 内存模型")]),t._v(" "),e("p",[t._v("从 JavaScript 内存模型的角度，我们可以将内存划分为调用栈（Call Stack）、堆（Heap）以及任务队列（Queue）等几个部分：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(383),alt:"内存模型"}})]),t._v(" "),e("h3",{attrs:{id:"_1-调用栈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-调用栈"}},[t._v("#")]),t._v(" 1. 调用栈")]),t._v(" "),e("p",[t._v("调用栈会记录所有的函数调用信息，当我们调用某个函数时，会将其参数与局部变量等以栈帧的形式压入栈中（入栈）；在执行完毕后，会弹出栈顶的帧。让我们来看一看下面的例子：")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("multiply")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" y"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("printSquare")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("multiply")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("printSquare")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("p",[t._v("当程序开始执行的时候，调用栈是空的，然后，步骤如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:s(384),alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_2-堆"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-堆"}},[t._v("#")]),t._v(" 2. 堆")]),t._v(" "),e("p",[t._v("堆则则存放了大量的非结构化数据，譬如程序分配的变量与对象。")]),t._v(" "),e("h3",{attrs:{id:"_3-任务队列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-任务队列"}},[t._v("#")]),t._v(" 3. 任务队列")]),t._v(" "),e("p",[t._v("任务队列包含了一系列待处理的信息与相关联的回调函数。任务队列又分为 "),e("strong",[t._v("MacroTask Queue")]),t._v(" 和 "),e("strong",[t._v("MicroTask Queue")]),t._v(" 两种。")]),t._v(" "),e("h2",{attrs:{id:"_11-4-macrotask-和-microtask"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-4-macrotask-和-microtask"}},[t._v("#")]),t._v(" 11.4 MacroTask 和 MicroTask")]),t._v(" "),e("h3",{attrs:{id:"_1-macrotask-queue（宏任务队列）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-macrotask-queue（宏任务队列）"}},[t._v("#")]),t._v(" 1. MacroTask Queue（宏任务队列）")]),t._v(" "),e("p",[t._v("Event Loop 会有一个或多个 MacroTask Queue，这是一个先进先出（FIFO）的有序列表，存放着来自不同 "),e("strong",[t._v("Task Source")]),t._v("（任务源）的 Task（也即MacroTask）。")]),t._v(" "),e("blockquote",[e("p",[t._v("关于 Task，常有人通俗地称它为 MarcoTask，但其实 HTML 标准中并没有这种说法。然而，为了方便理解，本书仍沿用通俗的称谓MacroTask。")])]),t._v(" "),e("p",[t._v("在 HTML 标准中，定义了几种常见的 Task Source：")]),t._v(" "),e("ul",[e("li",[t._v("DOM manipulation（DOM 操作）；")]),t._v(" "),e("li",[t._v("User interaction（用户交互）；")]),t._v(" "),e("li",[t._v("Networking（网络请求）；")]),t._v(" "),e("li",[t._v("History traversal（History API 操作）。")])]),t._v(" "),e("p",[t._v("MacroTask Source 的定义非常的宽泛，常见的鼠标、键盘事件，AJAX，数据库操作（例如 IndexedDB），以及定时器相关的 setTimeout、setInterval 等等都属于 Task Source，所有来自这些 MacroTask Source 的 MacroTask 都会被放到对应的 MacroTask Queue 中等待处理。")]),t._v(" "),e("p",[t._v("对于 MacroTask、MacroTask Queue 和 Task Source，有如下规定：")]),t._v(" "),e("ol",[e("li",[t._v("来自相同 Task Source 的 MacroTask，必须放在同一个 MacroTask Queue 中；")]),t._v(" "),e("li",[t._v("来自不同 Task Source 的 MacroTask，可以放在不同的 MacroTask Queue 中；")]),t._v(" "),e("li",[t._v("同一个 MacroTask Queue 内的 MacroTask 是按顺序执行的；")]),t._v(" "),e("li",[t._v("但对于不同的 MacroTask Queue（Task Source），浏览器会进行调度，允许优先执行来自特定 Task Source 的 MacroTask。")])]),t._v(" "),e("blockquote",[e("p",[t._v("例如，鼠标、键盘事件和网络请求都有各自的 MacroTask Queue，当两者同时存时，浏览器可以优先从用户交互相关的 MacroTask Queue 中挑选 MacroTask 并执行，比如这里的鼠标、键盘事件，从而保证流畅的用户体验。")])]),t._v(" "),e("h3",{attrs:{id:"_2-microtask-queue（微任务队列）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-microtask-queue（微任务队列）"}},[t._v("#")]),t._v(" 2. MicroTask Queue（微任务队列）")]),t._v(" "),e("p",[t._v("MicroTask Queue 与 MacroTask Queue 类似，也是一个有序列表。不同之处在于，"),e("strong",[t._v("一个 Event Loop 只有一个 MicroTask Queue")]),t._v("。")]),t._v(" "),e("p",[t._v("在 HTML 标准中，并没有明确规定 MicroTask Source，通常认为有以下几种：")]),t._v(" "),e("ul",[e("li",[t._v("Promise")])]),t._v(" "),e("blockquote",[e("p",[t._v("在 Promises/A+ Note 3.1 中提到了 then、onFulfilled、onRejected 的实现方法，但 Promise 本身属于平台代码，由具体实现来决定是否使用 Microtask，因此在不同浏览器上可能会出现执行顺序不一致的问题。不过好在目前的共识是用 Microtask 来实现事件队列。")])]),t._v(" "),e("ul",[e("li",[t._v("MutationObserver")]),t._v(" "),e("li",[t._v("Object.observe (已废弃)")])]),t._v(" "),e("p",[t._v("这里要特别提一下：网上有很多文章把 Node.js 的 "),e("code",[t._v("process.nextTick")]),t._v(" 和 Microtask 混为一谈，事实上虽然两者层级（运行时机）非常接近，但并不是同一个东西。"),e("code",[t._v("process.nextTick")]),t._v(" 是 Node.js 自身定义实现的一种机制，有自己的 nextTickQueue，与 HTML 标准中的 MicroTask 不是一回事。在 Node.js 中，"),e("code",[t._v("process.nextTick")]),t._v(" 会先于 Microtask Queue 被执行。")]),t._v(" "),e("h3",{attrs:{id:"_3-二者关系图例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-二者关系图例"}},[t._v("#")]),t._v(" 3. 二者关系图例")]),t._v(" "),e("p",[t._v("Event Loop中，每一次循环称为tick，每一次tick的任务细节如下：")]),t._v(" "),e("ul",[e("li",[t._v("调用栈选择最先进入队列的MacroTask（通常是script整体代码），如果有则执行；")]),t._v(" "),e("li",[t._v("检查是否存在 MicroTask，如果存在则不停的执行，直至清空 MicroTask Queue；")]),t._v(" "),e("li",[t._v("浏览器更新渲染（render），每一次事件循环，浏览器都可能会去更新渲染；")]),t._v(" "),e("li",[t._v("重复以上步骤。")])]),t._v(" "),e("p",[t._v("MacroTask Queue和MicroTask Queue二者的关系如下图：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://pic1.zhimg.com/80/v2-a24e582fda37065755f10bd4dc5a3dc0_hd.jpg",alt:""}})]),t._v(" "),e("p",[t._v("如图所示，二者互相穿插：MacroTask --\x3e MicroTask Queue --\x3e MacroTask。")]),t._v(" "),e("p",[e("strong",[t._v("一个Event Loop会有一个或多个 MacroTask Queue，而 Event Loop 仅有一个 MicroTask Queue。")])]),t._v(" "),e("p",[t._v("这句话可能比较令人费解，因为上图中似乎有2 个MicroTask Queue！怎么回事呢？")]),t._v(" "),e("p",[t._v("其实是这样的，每个 MacroTask Queue 都保证按照回调函数（callback）入队列的顺序依次执行MacroTask，在 MacroTask 或者 MicroTask 中产生的新 MicroTask 会被压入到 MicroTask Queue中并执行。而在 执行两个MacroTask之间，也即在执行下一个MacroTask之前，"),e("strong",[t._v("会优先执行完所有MicroTask，也即会优先清空已有的 MicroTask Queue")]),t._v("。因此，图中第二个MicroTask Queue产生的时候，第一个MicroTask Queue其实已经被清空了。所以Event Loop实际上仅有一个MicroTask Queue。")]),t._v(" "),e("h2",{attrs:{id:"_11-5-javascript-runtime-的运行机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-5-javascript-runtime-的运行机制"}},[t._v("#")]),t._v(" 11.5 JavaScript Runtime 的运行机制")]),t._v(" "),e("p",[t._v("了解了 Event Loop 和任务队列的基本概念后，就可以从相对宏观的角度先了解一下 JavaScript Runtime 的运行机制了，简化后的步骤如下：")]),t._v(" "),e("ol",[e("li",[t._v("主线程不断循环；")]),t._v(" "),e("li",[t._v("对于"),e("strong",[t._v("同步任务")]),t._v("，创建执行上下文（Execution Context），按顺序进入调用栈；")]),t._v(" "),e("li",[t._v("对于"),e("strong",[t._v("异步任务")]),t._v("：\n"),e("ul",[e("li",[t._v("与步骤 2 相同，同步执行这段代码；")]),t._v(" "),e("li",[t._v("将相应的 MacroTask（或 Microtask）添加到任务队列；")]),t._v(" "),e("li",[t._v("由其他线程来执行具体的异步操作。")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("其他线程是指：尽管 JavaScript 是单线程的，但浏览器内核是多线程的，它会将 GUI 渲染、定时器触发、HTTP 请求等工作交给专门的线程来处理。另外，在 Node.js 中，异步操作会优先由 OS 或第三方系统提供的"),e("strong",[t._v("异步接口")]),t._v("来执行，然后才由线程池处理。")])]),t._v(" "),e("ol",[e("li",[t._v("当主线程执行完当前调用栈中的所有任务，就会去读取 Event Loop 的任务队列，取出并执行任务；")]),t._v(" "),e("li",[t._v("重复以上步骤。")])]),t._v(" "),e("p",[t._v("用一张简图来表示一下这种运行机制：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-64476c110e4efcd85df76dc49b510abb_hd.jpg",alt:""}})]),t._v(" "),e("p",[t._v("还是拿 setTimeout 举例：")]),t._v(" "),e("ol",[e("li",[t._v("主线程同步执行这个 setTimeout 函数本身。")]),t._v(" "),e("li",[t._v("将负责执行这个 setTimeout 的回调函数的 MacroTask 添加到 MacroTask Queue。")]),t._v(" "),e("li",[t._v("定时器开始工作（实际上是靠 Event Loop 不断循环检查系统时间来判断是否已经到达指定的时间点）。")]),t._v(" "),e("li",[t._v("主线程继续执行其他任务。")]),t._v(" "),e("li",[t._v("当调用栈为空，且定时器触发时，主线程取出 MacroTask 并执行相应的回调函数。")])]),t._v(" "),e("p",[t._v("很明显，执行 setTimeout 不会导致阻塞。当然，如果主线程很忙的话（调用栈一直非空），就会出现明明时间已经到了，却也不执行回调的现象，所以类似 setTimeout 这样的回调函数都是没法保证执行时机的。")]),t._v(" "),e("blockquote",[e("p",[t._v("setTimeout和setInterval取的时间是不准确的，因为当调用栈若不为空，它们的回调函数永远不会别执行。所以，我们会经常碰到setTimeout和setInterval用来做动画的时候，很不流畅或者卡顿。")])]),t._v(" "),e("h2",{attrs:{id:"_11-6-面试题解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-6-面试题解析"}},[t._v("#")]),t._v(" 11.6 面试题解析")]),t._v(" "),e("p",[t._v("在面试中我们常常会碰到如下类似的代码题，面试官要你写出输出结果，其要目的是考察对JavaScript不同任务的执行先后顺序的理解：")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行顺序问题，考察频率挺高")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])]),e("p",[t._v("根据本文的解析，我们可以得到：")]),t._v(" "),e("ol",[e("li",[t._v("先执行同步代码\n"),e("ul",[e("li",[t._v("首先，执行"),e("code",[t._v("new Promise")]),t._v("中的"),e("code",[t._v("console.log(2)")]),t._v("，then后面的属于MicroTask所以跳过；")]),t._v(" "),e("li",[t._v("然后，执行"),e("code",[t._v("console.log(4)")]),t._v("。")])])]),t._v(" "),e("li",[t._v("执行完script这个MacroTask后，执行MicroTask（也即"),e("code",[t._v("Promise.then")]),t._v("） 中的"),e("code",[t._v("console.log(val)")]),t._v("，此时"),e("code",[t._v("val")]),t._v("的值由"),e("code",[t._v("resolve(3)")]),t._v("传递过来，值为"),e("code",[t._v("3")]),t._v("。后面无其他微任务。")]),t._v(" "),e("li",[t._v("执行另一个MacroTask也即定时器"),e("code",[t._v("setTimeout")]),t._v("中的"),e("code",[t._v("console.log(1)")]),t._v("。 根据本文的内容，可以很轻松，且有理有据的猜出写出正确答案：2，4，3，1。")])])])}),[],!1,null,null,null);a.default=n.exports}}]);