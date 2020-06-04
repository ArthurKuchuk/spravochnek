"use strict";

let htmlTerms = [
  {
    title: "<!-- -->",
    contentModel: "",
    category: false,
    desc: "Коментарий, все внутреннее содержимое игнорируется при выполнении кода"
  },
  {
    title: "<!DOCTYPE>",
    contentModel: "",
    category: false,
    desc: "Обьявление типа документа, в основном просто <!DOCTYPE html>"
  },
  {
    title: "<a>",
    contentModel: "transparent",
    category: ["flow", "phrasing", "interactive"],
    desc: "Ссылка, может быть в роли якоря, при нажатии совершает переход на ссылаемый объект, будь то другая страница, будь это блок внутри документа.",
    attr: ["href", "target", "download", "rel", "hreflang", "type"],
    link: "http://spec.piraruco.com/html5/text-level-semantics.htm#the-a-element"
  },
  {
    title: "<abbr>",
    contentModel: "",
    category: ["heading", "aaa"],
    desc: ""
  },
  {
    title: "<address>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<area>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<article>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<aside>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<audio>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<b>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<base>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<bdi>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<bdo>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<blockquote>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<body>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<br>",
    contentModel: "",
    category: ""
  },
  {
    title: "<button>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<canvas>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<caption>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<cite>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<code>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<col>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<colgroup>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<command>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<datalist>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<del>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<details>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<dfn>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<div>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<dd>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<dl>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<dt>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<em>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<embed>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<fieldset>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<figcaption>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<figure>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<footer>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<form>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<h1> - <h6>",
    contentModel: "",
    category: false,
    desc: ""

  },
  {
    title: "<head>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<header>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<hr>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<html>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<i>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<iframe>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<img>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<input>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<ins>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<kbd>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<keygen>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<label>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<legend>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<li>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<link>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<main>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<map>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<mark>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<menu>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<meta>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<meter>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<nav>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<nobr>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<noembed>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<noframes>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<noscript>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<object>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<ol>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<optgroup>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<option>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<output>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<p>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<param>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<pre>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<progress>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<q>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<rp>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<rt>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<ruby>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<s>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<samp>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<script>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<section>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<select>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<small>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<source>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<span>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<strong>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<style>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<sub>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<sup>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<summary>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<table>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<tbody>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<td>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<tfoot>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<th>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<thead>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<tr>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<title>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<textarea>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<time>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<track>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<tt>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<ul>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<var>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<video>",
    contentModel: "",
    category: false,
    desc: ""
  },
  {
    title: "<wbr>",
    contentModel: "",
    category: false,
    desc: ""
  }
]