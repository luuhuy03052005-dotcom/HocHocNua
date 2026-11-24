window.PRJ301_STUDY = {
  meta: {
    course: "PRJ301",
    title: "PRJ301 — Kiến thức cốt lõi",
    source: "559 câu PRJ301 sau khi loại 8 câu trùng từ nguồn 567 câu",
    lessonCount: 8,
    questionCount: 559,
    knowledgeOnly: true,
    summaryLabel: "Tóm tắt",
    description: "Chỉ gồm khái niệm và cách hoạt động. Không có mẹo thi hoặc quy tắc học thuộc đáp án.",
    searchPlaceholder: "Tìm HTTP, Servlet, JSP, Session, JDBC..."
  },
  lessons: [
    {
      number: 1,
      title: "HTTP, HTML Form và MVC",
      badge: "98 câu",
      summary: "Cách trình duyệt và Java Web trao đổi dữ liệu.",
      points: [
        { term: "HTTP", text: "Trình duyệt gửi request; server xử lý và trả response. HTTP không tự ghi nhớ request trước." },
        { term: "GET / POST", text: "GET thường lấy dữ liệu và đặt tham số trên URL; POST gửi dữ liệu trong request body." },
        { term: "HTML Form", text: "action xác định URL đích, method chọn GET/POST, thuộc tính name tạo tên tham số gửi lên server." },
        { term: "MVC", text: "Controller nhận request, Model xử lý dữ liệu, View hiển thị kết quả. Servlet thường là Controller, JSP là View." }
      ],
      remember: "Luồng chính: Browser → HTTP request → Servlet → Model/DAO → JSP → HTTP response."
    },
    {
      number: 2,
      title: "Servlet",
      badge: "114 câu",
      summary: "Thành phần tiếp nhận và điều phối request.",
      points: [
        { term: "Lifecycle", text: "Container gọi init() một lần, service() cho mỗi request và destroy() trước khi gỡ servlet." },
        { term: "doGet / doPost", text: "HttpServlet.service() chuyển request tới phương thức tương ứng với HTTP method." },
        { term: "Parameter / Attribute", text: "Parameter là dữ liệu client gửi; attribute là object do server gắn vào request, session hoặc context." },
        { term: "Forward / Redirect", text: "Forward tiếp tục xử lý trong server với cùng request; redirect yêu cầu browser tạo request mới." }
      ],
      remember: "Servlet đọc input, gọi xử lý nghiệp vụ, đặt dữ liệu vào attribute rồi chuyển tới View."
    },
    {
      number: 3,
      title: "web.xml, Filter và Listener",
      badge: "86 câu",
      summary: "Cấu hình ứng dụng và các thành phần chạy quanh request.",
      points: [
        { term: "web.xml", text: "Deployment descriptor trong WEB-INF, dùng để khai báo servlet, mapping, filter, listener và cấu hình ứng dụng." },
        { term: "URL Mapping", text: "Liên kết một url-pattern với servlet hoặc filter để container biết thành phần nào xử lý URL." },
        { term: "Filter", text: "Xử lý request/response trước và sau tài nguyên đích; chain.doFilter() chuyển luồng tới thành phần tiếp theo." },
        { term: "Listener", text: "Nhận thông báo khi context, session, request hoặc attribute được tạo, thay đổi hay hủy." }
      ],
      remember: "web.xml cấu hình; Filter nằm trên luồng request; Listener phản ứng với sự kiện vòng đời."
    },
    {
      number: 4,
      title: "Session và phạm vi dữ liệu",
      badge: "32 câu",
      summary: "Cách Java Web duy trì trạng thái qua nhiều request.",
      points: [
        { term: "HttpSession", text: "Lưu dữ liệu của một người dùng qua nhiều request. invalidate() kết thúc session." },
        { term: "Cookie", text: "Cặp name/value được lưu phía trình duyệt và gửi lại server theo các request phù hợp." },
        { term: "URL Rewriting", text: "Đưa session id vào URL khi cookie không sử dụng được; response.encodeURL() hỗ trợ việc này." },
        { term: "Scopes", text: "page chỉ trong JSP; request trong một request; session theo một user; application dùng chung toàn ứng dụng." }
      ],
      remember: "Dữ liệu càng dùng lâu và cho nhiều đối tượng thì scope càng lớn: page → request → session → application."
    },
    {
      number: 5,
      title: "JSP",
      badge: "128 câu",
      summary: "View được container chuyển thành servlet để tạo HTML.",
      points: [
        { term: "JSP Lifecycle", text: "JSP được dịch thành servlet; _jspService() tạo nội dung response cho mỗi request." },
        { term: "Scripting", text: "<%! %> khai báo member; <% %> chứa Java statement; <%= %> in giá trị ra response." },
        { term: "Directive / Action", text: "Directive cấu hình khi dịch JSP; standard action như jsp:include và jsp:forward chạy lúc xử lý request." },
        { term: "Implicit Objects", text: "Các object có sẵn gồm request, response, session, application, out, config, pageContext, page và exception." }
      ],
      remember: "JSP là View: nhận dữ liệu đã chuẩn bị và tạo giao diện, không nên chứa nghiệp vụ hoặc truy cập database."
    },
    {
      number: 6,
      title: "Expression Language và JSTL",
      badge: "35 câu",
      summary: "Đọc và trình bày dữ liệu trong JSP mà không viết Java trực tiếp.",
      points: [
        { term: "EL ${...}", text: "Truy cập bean property, Map, List và dữ liệu trong các scope bằng cú pháp ngắn." },
        { term: "Scope Lookup", text: "Khi không ghi rõ scope, EL tìm lần lượt page, request, session rồi application." },
        { term: "JSTL Core", text: "c:if và c:choose xử lý điều kiện; c:forEach lặp dữ liệu; c:set tạo hoặc cập nhật biến." },
        { term: "JSTL fmt", text: "Các tag fmt định dạng và chuyển đổi số, ngày tháng theo locale hoặc pattern." }
      ],
      remember: "Servlet đặt dữ liệu bằng setAttribute; JSP đọc bằng EL và trình bày bằng JSTL."
    },
    {
      number: 7,
      title: "Custom Tag và TLD",
      badge: "39 câu",
      summary: "Đóng gói logic giao diện thành thẻ JSP tái sử dụng.",
      points: [
        { term: "TLD", text: "Tag Library Descriptor mô tả URI, tên tag, handler class, body-content và các attribute." },
        { term: "Classic Tag", text: "Vòng đời chính gồm doStartTag(), xử lý body, doAfterBody() và doEndTag()." },
        { term: "Return Values", text: "SKIP_BODY/EVAL_BODY điều khiển body; EVAL_PAGE/SKIP_PAGE điều khiển phần còn lại của JSP." },
        { term: "SimpleTag", text: "SimpleTagSupport gom logic vào doTag(); JspFragment đại diện cho phần body của tag." }
      ],
      remember: "TLD mô tả tag; tag handler là lớp Java thực sự thực thi hành vi của tag."
    },
    {
      number: 8,
      title: "JDBC, JavaBean và DAO",
      badge: "35 câu",
      summary: "Truy cập database và tổ chức lớp dữ liệu.",
      points: [
        { term: "JDBC Flow", text: "Lấy Connection, tạo Statement, thực thi SQL, đọc ResultSet rồi đóng tài nguyên." },
        { term: "PreparedStatement", text: "Dùng dấu ? cho tham số và setXxx() để gán giá trị, thay vì ghép chuỗi SQL." },
        { term: "Query / Update", text: "executeQuery() chạy SELECT và trả ResultSet; executeUpdate() chạy INSERT, UPDATE hoặc DELETE." },
        { term: "Transaction", text: "Tắt auto-commit để nhiều lệnh cùng commit khi thành công hoặc rollback khi có lỗi." },
        { term: "JavaBean / DAO", text: "Bean chứa dữ liệu qua getter/setter; DAO đóng gói toàn bộ thao tác truy cập database." }
      ],
      remember: "Servlet điều phối, DAO làm việc với database, JavaBean mang dữ liệu và JSP chỉ hiển thị."
    }
  ],
  questionKnowledge: [
    { lesson: 1, term: "HTTP stateless", keywords: ["stateless", "stateful", "remember client", "protocol"], text: "HTTP xử lý từng request độc lập; session và cookie được thêm vào để duy trì trạng thái." },
    { lesson: 1, term: "GET và POST", keywords: ["get method", "post method", "query string", "request body", "idempotent"], text: "GET thường dùng để đọc và mang tham số trên URL; POST gửi dữ liệu trong body và thường dùng khi tạo hoặc thay đổi dữ liệu." },
    { lesson: 1, term: "HTML Form", keywords: ["form", "action", "method", "input name", "submit"], text: "Khi submit form, thuộc tính name của control trở thành tên parameter; action và method quyết định nơi và cách gửi." },
    { lesson: 1, term: "URL", keywords: ["url", "uri", "context path", "servlet path", "path info", "query"], text: "URL của Java Web gồm context path của ứng dụng, đường dẫn servlet, phần pathInfo và query string nếu có." },
    { lesson: 1, term: "MVC", keywords: ["mvc", "model", "view", "controller", "architecture"], text: "Controller điều phối request, Model chứa dữ liệu/nghiệp vụ và View chỉ trình bày kết quả." },

    { lesson: 2, term: "Servlet lifecycle", keywords: ["init", "service", "destroy", "lifecycle", "called once"], text: "Container tạo servlet rồi gọi init() một lần; service() xử lý request; destroy() chạy trước khi servlet bị gỡ." },
    { lesson: 2, term: "HTTP method dispatch", keywords: ["doget", "dopost", "doput", "dodelete", "service method"], text: "HttpServlet.service() đọc HTTP method và chuyển request tới doGet(), doPost() hoặc phương thức tương ứng." },
    { lesson: 2, term: "Parameter và Attribute", keywords: ["getparameter", "setattribute", "getattribute", "parameter", "attribute"], text: "Parameter là chuỗi do client gửi; attribute là object do code phía server đặt vào một scope." },
    { lesson: 2, term: "Forward và Redirect", keywords: ["forward", "sendredirect", "requestdispatcher", "redirect", "new request"], text: "Forward chạy nội bộ với cùng request; redirect trả địa chỉ mới để browser tạo một request khác." },
    { lesson: 2, term: "Config và Context", keywords: ["servletconfig", "servletcontext", "init parameter", "application scope"], text: "ServletConfig thuộc riêng một servlet; ServletContext đại diện và được dùng chung trong toàn web application." },

    { lesson: 3, term: "Deployment descriptor", keywords: ["web xml", "deployment descriptor", "web inf"], text: "WEB-INF/web.xml mô tả cấu hình triển khai như servlet, mapping, filter, listener, error page và security." },
    { lesson: 3, term: "URL mapping", keywords: ["url pattern", "servlet mapping", "mapping", "load on startup"], text: "Container so khớp URL với url-pattern để xác định servlet hoặc filter cần gọi." },
    { lesson: 3, term: "Filter chain", keywords: ["filter", "filterchain", "dofilter", "chain"], text: "Filter có thể xử lý trước và sau tài nguyên; chain.doFilter() chuyển request tới phần tử tiếp theo trong chuỗi." },
    { lesson: 3, term: "Listener", keywords: ["listener", "context initialized", "session created", "attribute listener"], text: "Listener là callback của container khi vòng đời context, request, session hoặc attribute thay đổi." },
    { lesson: 3, term: "WEB-INF", keywords: ["web inf", "direct access", "protected directory"], text: "Tài nguyên trong WEB-INF không được client truy cập trực tiếp nhưng server vẫn có thể đọc hoặc forward tới đó." },

    { lesson: 4, term: "HttpSession", keywords: ["httpsession", "getsession", "session", "invalidate"], text: "HttpSession gắn dữ liệu với một người dùng qua nhiều request; invalidate() hủy session và toàn bộ attribute của nó." },
    { lesson: 4, term: "Session timeout", keywords: ["maxinactiveinterval", "timeout", "inactive", "session timeout"], text: "Max inactive interval là khoảng thời gian không có request trước khi container tự hết hạn session." },
    { lesson: 4, term: "Cookie", keywords: ["cookie", "setmaxage", "addcookie", "getcookies"], text: "Cookie là name/value lưu phía client; response gửi cookie xuống và request sau gửi cookie phù hợp trở lại server." },
    { lesson: 4, term: "URL rewriting", keywords: ["encodeurl", "url rewriting", "jsessionid", "cookies disabled"], text: "URL rewriting đưa session id vào URL khi browser không sử dụng cookie; encodeURL() chỉ thêm khi cần." },
    { lesson: 4, term: "Bốn scope", keywords: ["page scope", "request scope", "session scope", "application scope", "scope"], text: "page tồn tại trong JSP; request theo một request; session theo một user; application dùng chung toàn ứng dụng." },

    { lesson: 5, term: "JSP thành Servlet", keywords: ["jsp lifecycle", "translation", "jspservice", "generated servlet"], text: "Container dịch JSP thành servlet; phần nội dung xử lý request nằm trong phương thức _jspService()." },
    { lesson: 5, term: "Declaration", keywords: ["declaration", "class variable", "instance variable", "member method"], text: "JSP declaration tạo field hoặc method ở cấp lớp servlet được sinh ra từ JSP." },
    { lesson: 5, term: "Scriptlet", keywords: ["scriptlet", "local variable", "java statement"], text: "Scriptlet được chèn vào _jspService(), vì vậy biến khai báo tại đây là biến local của quá trình xử lý request." },
    { lesson: 5, term: "Expression", keywords: ["jsp expression", "expression", "print value", "semicolon"], text: "JSP expression tính một giá trị rồi ghi giá trị đó ra response; biểu thức không kết thúc bằng dấu chấm phẩy." },
    { lesson: 5, term: "Directive và Action", keywords: ["directive", "include directive", "jsp include", "jsp forward", "usebean", "errorpage"], text: "Directive ảnh hưởng lúc dịch JSP; standard action thực thi trong lúc xử lý request." },

    { lesson: 6, term: "EL property", keywords: ["expression language", "el", "bean property", "dot operator", "bracket"], text: "EL truy cập property qua getter; dấu chấm dùng tên cố định, dấu ngoặc vuông dùng key hoặc index động." },
    { lesson: 6, term: "EL scope lookup", keywords: ["pagescope", "requestscope", "sessionscope", "applicationscope", "findattribute"], text: "Nếu không chỉ rõ scope, EL tìm tên lần lượt trong page, request, session rồi application." },
    { lesson: 6, term: "EL operators", keywords: ["empty", "eq", "ne", "and", "or", "operator"], text: "EL cung cấp toán tử so sánh, logic và empty để kiểm tra null, chuỗi rỗng hoặc collection rỗng." },
    { lesson: 6, term: "JSTL điều kiện", keywords: ["c if", "c choose", "c when", "otherwise", "conditional"], text: "c:if biểu diễn một điều kiện; c:choose cùng c:when/c:otherwise biểu diễn nhiều nhánh." },
    { lesson: 6, term: "JSTL vòng lặp", keywords: ["c foreach", "foreach", "varstatus", "items", "begin end step"], text: "c:forEach lặp collection hoặc một khoảng số; varStatus cung cấp index, count, first và last." },

    { lesson: 7, term: "TLD", keywords: ["tld", "tag library descriptor", "taglib", "tag class", "body content"], text: "TLD liên kết tên tag trong JSP với handler class và mô tả body cùng các attribute của tag." },
    { lesson: 7, term: "doStartTag", keywords: ["dostarttag", "skip body", "eval body include", "eval body buffered"], text: "doStartTag() quyết định có đánh giá phần body của classic tag hay không." },
    { lesson: 7, term: "doAfterBody", keywords: ["doafterbody", "eval body again", "repeat body"], text: "doAfterBody() có thể trả EVAL_BODY_AGAIN để đánh giá lại body hoặc kết thúc vòng lặp body." },
    { lesson: 7, term: "doEndTag", keywords: ["doendtag", "eval page", "skip page"], text: "doEndTag() quyết định JSP tiếp tục phần còn lại với EVAL_PAGE hay dừng với SKIP_PAGE." },
    { lesson: 7, term: "SimpleTag", keywords: ["simpletag", "simpletagsupport", "dotag", "jspfragment", "getjspbody"], text: "SimpleTagSupport thực thi trong doTag(); body được biểu diễn bằng JspFragment và chạy bằng invoke()." },

    { lesson: 8, term: "JDBC flow", keywords: ["jdbc", "connection", "statement", "resultset", "driver"], text: "Một thao tác JDBC lấy Connection, tạo Statement, thực thi SQL, xử lý kết quả rồi đóng tài nguyên." },
    { lesson: 8, term: "PreparedStatement", keywords: ["preparedstatement", "placeholder", "sql injection", "setstring", "setint"], text: "PreparedStatement tách cấu trúc SQL khỏi dữ liệu bằng placeholder và các phương thức setXxx()." },
    { lesson: 8, term: "Query và Update", keywords: ["executequery", "executeupdate", "select", "insert", "delete"], text: "executeQuery() dùng cho SELECT và trả ResultSet; executeUpdate() dùng cho DML và trả số dòng tác động." },
    { lesson: 8, term: "Transaction", keywords: ["transaction", "autocommit", "commit", "rollback"], text: "Transaction nhóm nhiều thay đổi thành một đơn vị: tất cả commit hoặc khi lỗi thì rollback." },
    { lesson: 8, term: "JavaBean và DAO", keywords: ["javabean", "bean", "getter", "setter", "dao", "data access object"], text: "JavaBean mang dữ liệu qua property; DAO chịu trách nhiệm thực hiện và che giấu chi tiết truy cập database." }
  ],
  distinctions: [
  {
    "id": "jsp-implicit-objects-identical-5-options",
    "title": "Bộ 5 câu JSP Implicit Objects: 'Which statements are BEST describe [X] implicit object of jsp file?'",
    "category": "JSP Scripting & Implicit Objects",
    "badge": "Bộ 5 đáp án giống nhau 100%",
    "rule": "<strong>Bẫy trắc nghiệm kinh điển của PRJ301:</strong> Cả 5 câu hỏi đều có bộ lựa chọn A/B/C/D/E y hệt nhau 100% (trích từ bảng đặc tả JSP của Deitel). Đề bài chỉ thay đổi đúng tên biến ẩn ở giữa câu hỏi. <strong>Mẹo chọn đáp án đúng trong 3 giây:</strong><br>• Đề hỏi <strong>request</strong> ➔ Tìm chữ <mark class=\"keyword-mark keyword-answer-mark\">client request</mark> / <mark class=\"keyword-mark keyword-answer-mark\">HttpServletRequest</mark> ➔ Chọn <strong>E</strong>.<br>• Đề hỏi <strong>response</strong> ➔ Tìm chữ <mark class=\"keyword-mark keyword-answer-mark\">response to the client</mark> / <mark class=\"keyword-mark keyword-answer-mark\">HttpServletResponse</mark> ➔ Chọn <strong>D</strong>.<br>• Đề hỏi <strong>page</strong> ➔ Tìm chữ <mark class=\"keyword-mark keyword-answer-mark\">this reference for the current JSP instance</mark> / <mark class=\"keyword-mark keyword-answer-mark\">java.lang.Object</mark> ➔ Chọn <strong>B</strong>.<br>• Đề hỏi <strong>pageContext</strong> ➔ Tìm chữ <mark class=\"keyword-mark keyword-answer-mark\">PageContext object hides the implementation details</mark> ➔ Chọn <strong>C</strong> (hoặc A tùy đề).<br>• Đề hỏi <strong>out</strong> ➔ Tìm chữ <mark class=\"keyword-mark keyword-answer-mark\">JspWriter object writes text as part of the response</mark> ➔ Chọn <strong>A</strong>.",
    "items": [
      {
        "id": 280,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Hỏi request ➔ Chọn E (client request / HttpServletRequest)",
        "stemHtml": "Which statements are BEST describe <mark class=\"keyword-mark keyword-question-mark\">request</mark> implicit object of jsp file?",
        "correctKeys": [
          "E"
        ],
        "correctText": "This object represents the client request. The object normally is an instance of a class that implements HttpServletRequest (package javax.servlet.http). If a protocol other than HTTP is used, this object is an instance of a subclass of javax.servlet.ServletRequest.",
        "correctTextHtml": "This object represents the <mark class=\"keyword-mark keyword-answer-mark\">client request</mark>. The object normally is an instance of a class that implements <mark class=\"keyword-mark keyword-answer-mark\">HttpServletRequest</mark> (package javax.servlet.http). If a protocol other than HTTP is used, this object is an instance of a subclass of javax.servlet.ServletRequest."
      },
      {
        "id": 175,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Hỏi response ➔ Chọn D (response to the client / HttpServletResponse)",
        "stemHtml": "Which statements are BEST describe <mark class=\"keyword-mark keyword-question-mark\">response</mark> implicit object of jsp file?",
        "correctKeys": [
          "D"
        ],
        "correctText": "This object represents the response to the client. The object normally is an instance of a class that implements HttpServletResponse (package javax.servlet.http). If a protocol other than HTTP is used, this object is an instance of a class that implements javax.servlet.ServletResponse.",
        "correctTextHtml": "This object represents the <mark class=\"keyword-mark keyword-answer-mark\">response to the client</mark>. The object normally is an instance of a class that implements <mark class=\"keyword-mark keyword-answer-mark\">HttpServletResponse</mark> (package javax.servlet.http). If a protocol other than HTTP is used, this object is an instance of a class that implements javax.servlet.ServletResponse."
      },
      {
        "id": 168,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Hỏi page ➔ Chọn B (this reference / java.lang.Object)",
        "stemHtml": "Which statements are BEST describe <mark class=\"keyword-mark keyword-question-mark\">page</mark> implicit object of jsp file?",
        "correctKeys": [
          "B"
        ],
        "correctText": "This java.lang.Object object represents the this reference for the current JSP instance.",
        "correctTextHtml": "This java.lang.Object object represents the <mark class=\"keyword-mark keyword-answer-mark\">this reference for the current JSP instance</mark>."
      },
      {
        "id": 178,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Hỏi pageContext ➔ Chọn C (PageContext / hides implementation details)",
        "stemHtml": "Which statements are BEST describe <mark class=\"keyword-mark keyword-question-mark\">pageContext</mark> implicit object of jsp file?",
        "correctKeys": [
          "C"
        ],
        "correctText": "This javax.servlet.jsp.PageContext object hides the implementation details of the underlying servlet and JSP container and provides JSP programmers with access to the implicit objects discussed in this table.",
        "correctTextHtml": "This javax.servlet.jsp.PageContext object <mark class=\"keyword-mark keyword-answer-mark\">hides the implementation details</mark> of the underlying servlet and JSP container and provides JSP programmers with <mark class=\"keyword-mark keyword-answer-mark\">access to the implicit objects</mark> discussed in this table."
      },
      {
        "id": 560,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Hỏi out ➔ Chọn A (JspWriter / writes text to response)",
        "stemHtml": "Which statements are BEST describe <mark class=\"keyword-mark keyword-question-mark\">out</mark> implicit object of jsp file?",
        "correctKeys": [
          "A"
        ],
        "correctText": "This javax.servlet.jsp.JspWriter object writes text as part of the response to a request. This object is used implicitly with JSP expressions and actions that insert string content in a response.",
        "correctTextHtml": "This javax.servlet.jsp.<mark class=\"keyword-mark keyword-answer-mark\">JspWriter object writes text as part of the response</mark> to a request. This object is used implicitly with JSP expressions and actions that insert string content in a response."
      }
    ]
  },
  {
    "id": "errorpage-vs-iserrorpage",
    "title": "errorPage vs isErrorPage trong <%@ page %>",
    "category": "JSP Directives & Error Handling",
    "badge": "Bộ đáp án giống nhau",
    "rule": "• <strong>errorPage=\"error.jsp\"</strong>: Đặt ở trang BỊ LỖI (nguồn) để khai báo trang sẽ chuyển hướng tới khi có ngoại lệ chưa được xử lý.<br>• <strong>isErrorPage=\"true\"</strong>: Đặt ở trang XỬ LÝ LỖI (đích). Bắt buộc phải có thuộc tính này thì biến ẩn (implicit object) <code>exception</code> mới được sinh ra trong servlet để in thông tin lỗi.",
    "items": [
      {
        "id": 74,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Trang ĐÍCH xử lý lỗi (Sinh implicit object exception)",
        "stemHtml": "Which statements are BEST describe <mark class=\"keyword-mark keyword-question-mark\">isErrorPage</mark> attribute of <%@ page <mark class=\"keyword-mark keyword-question-mark\">isErrorPage</mark>= directive?",
        "correctKeys": [
          "C"
        ],
        "correctText": "Specifies if the current page is an error page that will be invoked in response to an error on another page. If the attribute value is true, the implicit object exception is created and references the original exception that occurred.",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Specifies if the current page is an error page</mark> that will be invoked in response to an error on another page. If the attribute value is true, the <mark class=\"keyword-mark keyword-answer-mark\">implicit object exception is created</mark> and references the original exception that occurred."
      },
      {
        "id": 92,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Trang NGUỒN phát sinh lỗi (Chuyển tiếp tới error page)",
        "stemHtml": "Which statements are BEST describe <mark class=\"keyword-mark keyword-question-mark\">errorPage attribute</mark> of page directive?",
        "correctKeys": [
          "B"
        ],
        "correctText": "Any exceptions in the current page that are not caught are sent to the error page for processing. The error page implicit object exception references the original exception.",
        "correctTextHtml": "Any <mark class=\"keyword-mark keyword-answer-mark\">exceptions in the current page that are not caught are sent to the error page</mark> for processing. The error page implicit object exception references the original exception."
      },
      {
        "id": 43,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Định nghĩa errorPage trong trang nguồn",
        "stemHtml": "Which statements are BEST describe errorPage attribute of <%@ page <mark class=\"keyword-mark keyword-question-mark\">errorPage=\"...\"</mark> %> directive?",
        "correctKeys": [
          "A"
        ],
        "correctText": "Any exceptions in the current page that are not caught are sent to the error page for processing. The error page implicit object exception references the original exception.",
        "correctTextHtml": "Any <mark class=\"keyword-mark keyword-answer-mark\">exceptions in the current page that are not caught are sent to the error page</mark> for processing. The error page implicit object exception references the original exception."
      },
      {
        "id": 9,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Khai báo trang lỗi bằng page directive",
        "stemHtml": "You can set a <mark class=\"keyword-mark keyword-question-mark\">page to be an error page</mark> either through web.xml or by adding a page directive",
        "correctKeys": [
          "A"
        ],
        "correctText": "<%@page isErrorPage=\"true\" %>",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\"><%@page isErrorPage=\"true\" %></mark>"
      }
    ]
  },
  {
    "id": "initparam-vs-contextparam",
    "title": "<init-param> vs <context-param> trong web.xml",
    "category": "Deployment Descriptor (web.xml)",
    "badge": "Bộ đáp án giống nhau",
    "rule": "• <strong>&lt;init-param&gt;</strong>: Khai báo tham số riêng cho MỘT servlet (hoặc filter) cụ thể, đặt bên trong thẻ <code>&lt;servlet&gt;</code>. Đọc qua <code>ServletConfig.getInitParameter()</code>.<br>• <strong>&lt;context-param&gt;</strong>: Khai báo tham số TOÀN CỤC cho toàn bộ ứng dụng, đặt trực tiếp dưới thẻ gốc <code>&lt;web-app&gt;</code>. Đọc qua <code>ServletContext.getInitParameter()</code>.",
    "items": [
      {
        "id": 317,
        "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
        "tag": "Tham số riêng cho 1 Servlet (<init-param>)",
        "stemHtml": "What is the function of the <mark class=\"keyword-mark keyword-question-mark\"><init-param></mark> tag <mark class=\"keyword-mark keyword-question-mark\">within the <servlet> tag</mark>?",
        "correctKeys": [
          "D"
        ],
        "correctText": "servlet-config",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">servlet-config</mark>"
      },
      {
        "id": 360,
        "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
        "tag": "Tham số toàn cục toàn ứng dụng (<context-param>)",
        "stemHtml": "Which element in the \"web.xml\" file specifies <mark class=\"keyword-mark keyword-question-mark\">global parameters</mark> accessible <mark class=\"keyword-mark keyword-question-mark\">throughout the entire web application</mark>?",
        "correctKeys": [
          "A"
        ],
        "correctText": "context-param",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">context-param</mark>"
      },
      {
        "id": 44,
        "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
        "tag": "Vị trí trong web.xml: <web-app> vs <servlet>",
        "stemHtml": "element can include zero to many elements: These aid in <mark class=\"keyword-mark keyword-question-mark\">passing parameter information</mark> from the <mark class=\"keyword-mark keyword-question-mark\">deployment descriptor</mark> to all the servlets.",
        "correctKeys": [
          "B"
        ],
        "correctText": "False",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">False</mark>"
      },
      {
        "id": 519,
        "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
        "tag": "Phạm vi truy cập tham số cấu hình",
        "stemHtml": "What is the purpose of the HTML <input > element with the type attribute set to \"text\"?",
        "correctKeys": [
          "C"
        ],
        "correctText": "Accepting single-line text input",
        "correctTextHtml": "Accepting single-line text input"
      }
    ]
  },
  {
    "id": "setproperty-vs-getproperty",
    "title": "jsp:setProperty vs jsp:getProperty & các thuộc tính",
    "category": "JSP Standard Actions & JavaBeans",
    "badge": "Bộ đáp án giống nhau",
    "rule": "• <strong>name</strong>: Tên biến JavaBean (id đã tạo từ <code>jsp:useBean</code>).<br>• <strong>property=\"*\"</strong>: Tự động ánh xạ request parameters vào properties trùng tên của Bean.<br>• <strong>param</strong>: Ánh xạ một request parameter có tên khác vào property của Bean.<br>• <strong>value</strong>: Gán giá trị cụ thể trực tiếp (hoặc từ expression) vào property.<br>• <strong>jsp:getProperty</strong>: Đọc giá trị property của Bean và chuyển đổi thành String để in ra response.",
    "items": [
      {
        "id": 7,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Thuộc tính name: ID của JavaBean instance",
        "stemHtml": "Which statements are BEST describe <mark class=\"keyword-mark keyword-question-mark\">name attribute</mark> of < .<mark class=\"keyword-mark keyword-question-mark\">jsp:setProperty</mark> name=. ... / > action?",
        "correctKeys": [
          "A"
        ],
        "correctText": "The ID of the JavaBean for which a property (or properties) will be set.",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">The ID of the JavaBean for which a property</mark> (or properties) will be set."
      },
      {
        "id": 167,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Thuộc tính value: Giá trị gán cho property",
        "stemHtml": "Which statements are BEST describe <mark class=\"keyword-mark keyword-question-mark\">value attribute</mark> of value-... / > action?",
        "correctKeys": [
          "D"
        ],
        "correctText": "The value to assign to a bean property. The value typically is the result of a JSP expression.",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">The value to assign to a bean property</mark>. The value typically is the result of a JSP expression."
      },
      {
        "id": 188,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Thuộc tính name trong jsp:getProperty",
        "stemHtml": "Which statements are BEST describe <mark class=\"keyword-mark keyword-question-mark\">name attribute</mark> of < jcp: get Property name=. . . > action?",
        "correctKeys": [
          "B"
        ],
        "correctText": "The ID of the JavaBean for which a property (or properties) will be set.",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">The ID of the JavaBean</mark> for which a property (or properties) will be set."
      },
      {
        "id": 193,
        "topic": "8. JDBC, Database Connection & JavaBeans",
        "tag": "Hành động jsp:getProperty: Lấy giá trị và in ra",
        "stemHtml": "Which statements are BEST describe <mark class=\"keyword-mark keyword-question-mark\">Action</mark>?",
        "correctKeys": [
          "B"
        ],
        "correctText": "Gets a property in the specified JavaBean instance and converts the result to a string for output in the response.",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Gets a property in the specified JavaBean instance</mark> and <mark class=\"keyword-mark keyword-answer-mark\">converts the result to a string for output</mark> in the response."
      },
      {
        "id": 235,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Hành động jsp:setProperty: Gán thuộc tính Bean",
        "stemHtml": "Which statements are BEST describe <mark class=\"keyword-mark keyword-question-mark\">jsp:setProperty Action</mark>?",
        "correctKeys": [
          "C"
        ],
        "correctText": "Sets a property in the specified JavaBean instance. A special feature of this action is automatic matching of request parameters to bean properties of the same name.",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Sets a property in the specified JavaBean instance</mark>. A special feature of this action is <mark class=\"keyword-mark keyword-answer-mark\">automatic matching of request parameters</mark> to bean properties of the same name."
      }
    ]
  },
  {
    "id": "http-status-codes",
    "title": "Mã trạng thái HTTP: 401 Unauthorized vs 404 Not Found vs 500",
    "category": "Web & HTTP Protocol",
    "badge": "Bộ đáp án giống nhau",
    "rule": "• <strong>401 Unauthorized</strong>: Yêu cầu xác thực tài khoản HTTP (chưa đăng nhập hoặc xác thực thất bại).<br>• <strong>403 Forbidden</strong>: Đã xác thực nhưng không có quyền hạn truy cập tài nguyên.<br>• <strong>404 Not Found</strong>: Máy chủ không tìm thấy tài nguyên theo đường dẫn URL yêu cầu.<br>• <strong>500 Internal Server Error</strong>: Máy chủ gặp sự cố hoặc ném lỗi (exception) trong quá trình xử lý.",
    "items": [
      {
        "id": 263,
        "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
        "tag": "Mã 401: Cần HTTP Authentication",
        "stemHtml": "Which of the following statements are correct about the <mark class=\"keyword-mark keyword-question-mark\">status code = 401</mark> of the Http response?",
        "correctKeys": [
          "B"
        ],
        "correctText": "Indicates that the request requires HTTP authentication.",
        "correctTextHtml": "Indicates that the request <mark class=\"keyword-mark keyword-answer-mark\">requires HTTP authentication</mark>."
      },
      {
        "id": 262,
        "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
        "tag": "Mã 404: Tài nguyên không tìm thấy",
        "stemHtml": "Which of the following statements are correct about the <mark class=\"keyword-mark keyword-question-mark\">status code = 404</mark> of the Http response?",
        "correctKeys": [
          "A"
        ],
        "correctText": "Indicates that the requested resource is not available.",
        "correctTextHtml": "Indicates that the <mark class=\"keyword-mark keyword-answer-mark\">requested resource is not available</mark>."
      },
      {
        "id": 208,
        "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
        "tag": "Cấu hình error-page theo mã 404 trong web.xml",
        "stemHtml": "Which of these is a correct fragment within the <mark class=\"keyword-mark keyword-question-mark\">web-app element</mark> of <mark class=\"keyword-mark keyword-question-mark\">deployment descriptor</mark>? Select one correct answer.",
        "correctKeys": [
          "A"
        ],
        "correctText": "<error-page> <error-code>404</error-code> <location>/error.jsp</location> </error-page>",
        "correctTextHtml": "<error-page> <mark class=\"keyword-mark keyword-answer-mark\"><error-code>404</error-code></mark> <location>/error.jsp</location> </error-page>"
      }
    ]
  },
  {
    "id": "war-directories",
    "title": "Cấu trúc WAR: WEB-INF/lib (.jar) vs WEB-INF/classes (.class)",
    "category": "Deployment Descriptor (web.xml)",
    "badge": "Bộ đáp án giống nhau",
    "rule": "• <strong>WEB-INF/lib</strong>: Chứa các file thư viện lưu trữ định dạng <strong>.jar</strong> (ví dụ JSTL jar, SQL Server Driver jar).<br>• <strong>WEB-INF/classes</strong>: Chứa các file bytecode đã biên dịch định dạng <strong>.class</strong> cùng cấu trúc gói (package) của ứng dụng.<br>• <strong>Bảo mật</strong>: Client từ bên ngoài KHÔNG THỂ truy cập trực tiếp nội dung bên trong thư mục <code>/WEB-INF/</code>.",
    "items": [
      {
        "id": 379,
        "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
        "tag": "Chứa file thư viện .jar ngoài (WEB-INF/lib)",
        "stemHtml": "Which directory is used to <mark class=\"keyword-mark keyword-question-mark\">store external libraries (JAR files)</mark> in a Java web application?",
        "correctKeys": [
          "A"
        ],
        "correctText": "'WEB-INF/lib",
        "correctTextHtml": "'<mark class=\"keyword-mark keyword-answer-mark\">WEB-INF/lib</mark>"
      },
      {
        "id": 527,
        "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
        "tag": "Chứa file class đã biên dịch (WEB-INF/classes)",
        "stemHtml": "In Java web applications, where are the <mark class=\"keyword-mark keyword-question-mark\">compiled Java class files typically stored</mark>?",
        "correctKeys": [
          "C"
        ],
        "correctText": "'WEB-INF/classes",
        "correctTextHtml": "'<mark class=\"keyword-mark keyword-answer-mark\">WEB-INF/classes</mark>"
      },
      {
        "id": 127,
        "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
        "tag": "Bẫy: WEB-INF/lib chứa file class? (Sai!)",
        "stemHtml": "Study the statements: 1. The special directory <mark class=\"keyword-mark keyword-question-mark\">/WEB-INF/lib contains Java class files</mark>-sennets and supporting code. 2. The special directory /WEB-INF/classes contains JAR files with supporting libraries of code.",
        "correctKeys": [
          "D"
        ],
        "correctText": "Both 1 and 2 are not true",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Both 1 and 2 are not true</mark>"
      }
    ]
  },
  {
    "id": "implicit-objects-scope",
    "title": "Implicit Objects: request vs session vs application vs pageContext",
    "category": "JSP Scripting & Implicit Objects",
    "badge": "Bộ đáp án giống nhau",
    "rule": "• <strong>request</strong> (HttpServletRequest): Đại diện cho request đơn lẻ từ client, mang theo headers, params, cookies, query string.<br>• <strong>session</strong> (HttpSession): Đại diện cho phiên làm việc của một người dùng duyệt qua nhiều trang.<br>• <strong>application</strong> (ServletContext): Đại diện cho toàn bộ web application, lưu thông tin dùng chung toàn server.<br>• <strong>pageContext</strong>: Cung cấp API truy cập đến cả 8 implicit objects còn lại và quản lý cả 4 phạm vi (scopes).",
    "items": [
      {
        "id": 329,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Thông tin request từ client (request)",
        "stemHtml": "Which implicit object provides information about the <mark class=\"keyword-mark keyword-question-mark\">client's request in a JSP page</mark>?",
        "correctKeys": [
          "B"
        ],
        "correctText": "request",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">request</mark>"
      },
      {
        "id": 413,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Đại diện request gửi đến server (request)",
        "stemHtml": "Which implicit object in JavaServer Pages (JSP) <mark class=\"keyword-mark keyword-question-mark\">represents the request made by the client</mark> to the server?",
        "correctKeys": [
          "A"
        ],
        "correctText": "request",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">request</mark>"
      },
      {
        "id": 439,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Truy xuất HTTP headers và cookies (request)",
        "stemHtml": "Which implicit object provides <mark class=\"keyword-mark keyword-question-mark\">access to HTTP headers and cookies</mark> in a Java Servlet?",
        "correctKeys": [
          "A"
        ],
        "correctText": "request",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">request</mark>"
      },
      {
        "id": 494,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Truy xuất ServletContext (application)",
        "stemHtml": "In JavaServer Pages (JSP), which implicit object <mark class=\"keyword-mark keyword-question-mark\">provides access to the servlet context</mark>?",
        "correctKeys": [
          "D"
        ],
        "correctText": "application",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">application</mark>"
      },
      {
        "id": 168,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Đối tượng page: Đại diện cho chính JSP instance",
        "stemHtml": "Which statements are BEST describe <mark class=\"keyword-mark keyword-question-mark\">page implicit object</mark> of jsp file?",
        "correctKeys": [
          "B"
        ],
        "correctText": "This java.lang.Object object represents the this reference for the current JSP instance.",
        "correctTextHtml": "This java.lang.Object object <mark class=\"keyword-mark keyword-answer-mark\">represents the this reference for the current JSP instance</mark>."
      },
      {
        "id": 178,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Đối tượng pageContext: Cầu nối ẩn chi tiết container",
        "stemHtml": "Which statements are BEST describe <mark class=\"keyword-mark keyword-question-mark\">pageContext implicit object</mark> of jsp file?",
        "correctKeys": [
          "A"
        ],
        "correctText": "This javax.servlet.jsp.PageContext object hides the implementation details of the underlying servlet and JSP container and provides JSP programmers with access to the implicit objects discussed in this table.",
        "correctTextHtml": "This javax.servlet.jsp.PageContext object <mark class=\"keyword-mark keyword-answer-mark\">hides the implementation details</mark> of the underlying servlet and JSP container and provides JSP programmers with <mark class=\"keyword-mark keyword-answer-mark\">access to the implicit objects</mark> discussed in this table."
      }
    ]
  },
  {
    "id": "web-listeners",
    "title": "Web Listeners: Vòng đời ứng dụng vs Thay đổi Attribute",
    "category": "Deployment Descriptor (web.xml)",
    "badge": "Bộ đáp án giống nhau",
    "rule": "• <strong>ServletContextListener</strong>: Lắng nghe vòng đời của web app (khởi động/kết thúc). Rất hay dùng để <strong>nạp JDBC Driver tự động</strong> khi web app vừa start.<br>• <strong>ServletContextAttributeListener</strong>: Lắng nghe khi có attribute trong ServletContext được thêm, sửa, xóa.<br>• <strong>HttpSessionAttributeListener</strong>: Lắng nghe thuộc tính trong session với 3 methods: <code>attributeAdded</code>, <code>attributeRemoved</code>, <code>attributeReplaced</code>.",
    "items": [
      {
        "id": 500,
        "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
        "tag": "Khởi tạo ứng dụng & nạp JDBC Driver (ServletContextListener)",
        "stemHtml": "Which Listener should be used to <mark class=\"keyword-mark keyword-question-mark\">load JDBC Driver automatically</mark> <mark class=\"keyword-mark keyword-question-mark\">for a web application</mark>?",
        "correctKeys": [
          "D"
        ],
        "correctText": "ServletContextListener",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">ServletContextListener</mark>"
      },
      {
        "id": 550,
        "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
        "tag": "Lắng nghe thêm attribute vào ServletContext",
        "stemHtml": "Which listener is triggered when an <mark class=\"keyword-mark keyword-question-mark\">attribute is added to a ServletContext</mark>?",
        "correctKeys": [
          "A"
        ],
        "correctText": "ServletContextAttributeListener",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">ServletContextAttributeListener</mark>"
      },
      {
        "id": 498,
        "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
        "tag": "Sự kiện xóa attribute trong Session",
        "stemHtml": "What is the method signature for an event where an <mark class=\"keyword-mark keyword-question-mark\">attribute was removed from an HttpSession</mark>?",
        "correctKeys": [
          "C"
        ],
        "correctText": "public void attributeRemoved(HttpSessionBindingEvent event)",
        "correctTextHtml": "public void <mark class=\"keyword-mark keyword-answer-mark\">attributeRemoved(HttpSessionBindingEvent event)</mark>"
      },
      {
        "id": 549,
        "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
        "tag": "Sự kiện thay thế attribute trong Session",
        "stemHtml": "What is the method signature for an event where an <mark class=\"keyword-mark keyword-question-mark\">attribute was replaced in an HttpSession</mark>?",
        "correctKeys": [
          "A"
        ],
        "correctText": "public voici att ributeRep1acecl (HttpSessionBindingEvent event)",
        "correctTextHtml": "public voici att ributeRep1acecl (<mark class=\"keyword-mark keyword-answer-mark\">HttpSessionBindingEvent</mark> event)"
      }
    ]
  },
  {
    "id": "jsp-directives-and-taglib",
    "title": "Directives: page vs include vs taglib (uri vs prefix)",
    "category": "JSP Directives & Standard Actions",
    "badge": "Bộ câu hỏi tương đồng",
    "rule": "• <strong>&lt;%@ page %&gt;</strong>: Cấu hình chung cho toàn trang JSP (import thư viện, contentType, isErrorPage, errorPage...).<br>• <strong>&lt;%@ include %&gt;</strong>: Nhúng tĩnh mã nguồn của file khác vào trang lúc biên dịch (Translation-time).<br>• <strong>&lt;%@ taglib %&gt;</strong>: Khai báo thư viện thẻ custom / JSTL. Thuộc tính <strong>uri</strong> trỏ đến bộ nhận diện TLD, còn <strong>prefix</strong> là tiền tố đứng trước tên thẻ (ví dụ <code>c:</code>, <code>fmt:</code>).",
    "items": [
      {
        "id": 2,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Thuộc tính uri: Đường dẫn định danh TLD",
        "stemHtml": "Which statements are BEST describe <mark class=\"keyword-mark keyword-question-mark\">uri attribute</mark> of <mark class=\"keyword-mark keyword-question-mark\"><%@ taglib</mark> uri=...%> directive of JSP file",
        "correctKeys": [
          "A"
        ],
        "correctText": "Specifies the relative or absolute URI of the tag library descriptor.",
        "correctTextHtml": "Specifies the <mark class=\"keyword-mark keyword-answer-mark\">relative or absolute URI of the tag library descriptor</mark>."
      },
      {
        "id": 232,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Thuộc tính prefix: Tiền tố phân biệt custom tag",
        "stemHtml": "Which statements are BEST describe <mark class=\"keyword-mark keyword-question-mark\">prefix attribute</mark> of < <mark class=\"keyword-mark keyword-question-mark\">taglib</mark> prefix= . . directive of JSP file?",
        "correctKeys": [
          "B"
        ],
        "correctText": "Specifies the required prefix that distinguishes custom tags from built-in tags. The prefix names jsp, jspx, java, javax, servlet, sun and sunw are reserved.",
        "correctTextHtml": "Specifies the required <mark class=\"keyword-mark keyword-answer-mark\">prefix that distinguishes custom tags from built-in tags</mark>. The prefix names jsp, jspx, java, javax, servlet, sun and sunw are reserved."
      },
      {
        "id": 81,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Directive page: Định nghĩa các thiết lập trang",
        "stemHtml": "Which statements are BEST describe <mark class=\"keyword-mark keyword-question-mark\">page directive of JSP file</mark>?",
        "correctKeys": [
          "D"
        ],
        "correctText": "Defines page settings for the JSP container to process",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Defines page settings for the JSP container to process</mark>"
      },
      {
        "id": 102,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Directive include: Chèn mã nguồn lúc dịch (translation-time)",
        "stemHtml": "Which statements are BEST describe <mark class=\"keyword-mark keyword-question-mark\">include directive of JSP file</mark>?",
        "correctKeys": [
          "B"
        ],
        "correctText": "Causes the JSP container to perform a translation-time insertion of another resource's content. When the JSP is translated into a servlet and compiled, the referenced file replaces the include directive as if it were originally part of the JSP.",
        "correctTextHtml": "Causes the JSP container to perform a <mark class=\"keyword-mark keyword-answer-mark\">translation-time insertion of another resource's content</mark>. When the JSP is translated into a servlet and compiled, the referenced file replaces the include directive as if it were originally part of the JSP."
      },
      {
        "id": 26,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Directive taglib: Mở rộng chức năng bằng thư viện thẻ",
        "stemHtml": "Which statements are BEST describe <mark class=\"keyword-mark keyword-question-mark\">taglib directive of JSP file</mark>?",
        "correctKeys": [
          "C"
        ],
        "correctText": "Allows programmers to include their own new tags in the form of tag libraries. These libraries can be used to encapsulate functionality and simplify the coding of a JSP.",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Allows programmers to include their own new tags</mark> in the form of tag libraries. These libraries can be used to encapsulate functionality and simplify the coding of a JSP."
      }
    ]
  },
  {
    "id": "jsp-usebean-attributes",
    "title": "Các thuộc tính của <jsp:useBean>: id, class, type, beanName",
    "category": "JSP Standard Actions & JavaBeans",
    "badge": "Bộ câu hỏi tương đồng",
    "rule": "• <strong>id</strong>: Tên biến đại diện (case-sensitive) để truy cập JavaBean trong trang.<br>• <strong>class</strong>: Tên lớp Java cụ thể (phải kèm package) để khởi tạo đối tượng qua constructor rỗng.<br>• <strong>type</strong>: Kiểu dữ liệu để ép kiểu biến (có thể là interface hoặc lớp cha). Nếu đối tượng không tương thích kiểu thì ném <code>ClassCastException</code>.<br>• <strong>beanName</strong>: Dùng cùng method <code>java.beans.Beans.instantiate()</code>.<br>• <strong>Bẫy</strong>: <code>className</code> và <code>name</code> KHÔNG PHẢI thuộc tính hợp lệ của <code>jsp:useBean</code>!",
    "items": [
      {
        "id": 13,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Thuộc tính type: Ép kiểu đối tượng (gây ClassCastException nếu sai)",
        "stemHtml": "Which statements are BEST describe <mark class=\"keyword-mark keyword-question-mark\">type attribute of <jsp:useBean</mark> type=..... /> action?",
        "correctKeys": [
          "E"
        ],
        "correctText": "The type of the JavaBean. This can be the same type as the class attribute, a superclass or an interface implemented by that type. The default value is the same as for attribute class. A ClassCastException occurs if the Java object is not of the type specified with attribute type.",
        "correctTextHtml": "The type of the JavaBean. This can be the same type as the class attribute, a <mark class=\"keyword-mark keyword-answer-mark\">superclass or an interface</mark> implemented by that type. The default value is the same as for attribute class. A <mark class=\"keyword-mark keyword-answer-mark\">ClassCastException occurs if the Java object is not of the type</mark> specified with attribute type."
      },
      {
        "id": 190,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Thuộc tính id: Tên biến đại diện để thao tác bean",
        "stemHtml": "Which statements are BEST describe <mark class=\"keyword-mark keyword-question-mark\">id attribute of < .jsp:useBean</mark> id=. .... > Action?",
        "correctKeys": [
          "B"
        ],
        "correctText": "The name used to manipulate the Java object with actions <jsp:setProperty. > and <jsp:getProperty. > . A variable of this name is also declared for use in JSP scripting elements. The name specified here is case sensitive.",
        "correctTextHtml": "The <mark class=\"keyword-mark keyword-answer-mark\">name used to manipulate the Java object with actions</mark> <jsp:setProperty. > and <jsp:getProperty. > . A variable of this name is also declared for use in JSP scripting elements. The name specified here is <mark class=\"keyword-mark keyword-answer-mark\">case sensitive</mark>."
      },
      {
        "id": 181,
        "topic": "8. JDBC, Database Connection & JavaBeans",
        "tag": "Thuộc tính beanName: Dùng cùng Beans.instantiate",
        "stemHtml": "Which statements are BEST describe <mark class=\"keyword-mark keyword-question-mark\">beanName attribute</mark> of < j cp : uceBean beanName= n Action? (Select 2)",
        "correctKeys": [
          "B",
          "C"
        ],
        "correctText": "The fully qualified class name of the Java object. / The name of a bean that can be used with method instantiate of class java.beans.Beans to load a JavaBean into memory.",
        "correctTextHtml": "The fully qualified class name of the Java object. / The name of a bean that can be used with method <mark class=\"keyword-mark keyword-answer-mark\">instantiate of class java.beans.Beans</mark> to load a JavaBean into memory."
      },
      {
        "id": 38,
        "topic": "2. Java Servlet API & Lifecycle",
        "tag": "Bẫy: className KHÔNG PHẢI thuộc tính của useBean",
        "stemHtml": "Which of the following is <mark class=\"keyword-mark keyword-question-mark\">NOT a valid attribute for a useBean tag</mark>?",
        "correctKeys": [
          "C"
        ],
        "correctText": "className",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">className</mark>"
      },
      {
        "id": 345,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Bẫy: name KHÔNG PHẢI thuộc tính của useBean (phải dùng id)",
        "stemHtml": "Which of the following is <mark class=\"keyword-mark keyword-question-mark\">NOT a valid attribute for a jsp:useBean tag</mark>?",
        "correctKeys": [
          "A"
        ],
        "correctText": "name",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">name</mark>"
      }
    ]
  },
  {
    "id": "forward-vs-sendredirect",
    "title": "Chuyển hướng: RequestDispatcher.forward() vs sendRedirect()",
    "category": "Java Servlet API & Lifecycle",
    "badge": "Cặp khái niệm đối lập",
    "rule": "• <strong>forward(request, response)</strong>: Chuyển hướng nội bộ phía <strong>SERVER</strong>. Chỉ có <strong>1 Request / 1 Response</strong>. URL trên trình duyệt <strong>KHÔNG ĐỔI</strong>. Dữ liệu trong <code>request scope</code> được bảo toàn.<br>• <strong>sendRedirect(location)</strong>: Phía <strong>CLIENT</strong> (trả về HTTP 302 để browser gửi một <strong>Request mới hoàn toàn</strong>). URL trên trình duyệt <strong>THAY ĐỔI</strong>. Request scope cũ bị mất.",
    "items": [
      {
        "id": 15,
        "topic": "4. Session Management, Cookies & URL Rewriting",
        "tag": "forward: Server xử lý nội bộ, giữ nguyên URL & request attributes",
        "stemHtml": "Which of the following lines of code, in the doPost() method of a servlet, uses the URL rewriting for maintaining sessions? (Choose one)",
        "correctKeys": [
          "A"
        ],
        "correctText": "out.println(\"<a href=' \"+response.encodeURL(\"/servlet/XServlet\")+\" '>Click here</a>\");",
        "correctTextHtml": "out.println(\"<a href=' \"+response.encodeURL(\"/servlet/XServlet\")+\" '>Click here</a>\");"
      },
      {
        "id": 24,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "sendRedirect: Trả mã 302, Browser gửi request mới, URL đổi",
        "stemHtml": "A JSP page called test.jsp is passed a parameter name in the URL using http://localhost/test.jsp?name=\"John\". The test.jsp contains the following code.\\n```\\n<%! String myName = request.getParameter(\"name\"); %>\\n<% String test = \"welcome \" + myName; %>\\n<%= test %>\\n```\\nWhat is the output?",
        "correctKeys": [
          "B"
        ],
        "correctText": "The program gives a syntax error because of the statement <%! String myName=request.getParameter(\"name\"); %>",
        "correctTextHtml": "The program gives a syntax error because of the statement <%! String myName=request.getParameter(\"name\"); %>"
      },
      {
        "id": 209,
        "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
        "tag": "forward giữ nguyên request attributes từ servlet sang JSP",
        "stemHtml": "Identify correct statement about a WAR file. (Choose multiple correct answers)",
        "correctKeys": [
          "C",
          "D"
        ],
        "correctText": "It is used by web application developer to deploy the web application in a single unit. / It contains web components such as servlets as well as EJBs.",
        "correctTextHtml": "It is used by web application developer to deploy the web application in a single unit. / It contains web components such as servlets as well as EJBs."
      },
      {
        "id": 405,
        "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
        "tag": "sendRedirect làm thay đổi thanh địa chỉ URL của browser",
        "stemHtml": "What is inside a HTTP response?",
        "correctKeys": [
          "E"
        ],
        "correctText": "Both A and D is true",
        "correctTextHtml": "Both A and D is true"
      }
    ]
  },
  {
    "id": "getparameter-vs-getattribute",
    "title": "Lấy dữ liệu: getParameter() (Client) vs getAttribute() (Server)",
    "category": "Java Servlet API & Lifecycle",
    "badge": "Cặp khái niệm đối lập",
    "rule": "• <strong>request.getParameter(name)</strong>: Đọc dữ liệu do <strong>CLIENT</strong> gửi lên từ form HTML hoặc query string trên URL. Luôn trả về <strong>String</strong> (hoặc <code>getParameterValues</code> trả về <code>String[]</code> cho checkbox/multi-select).<br>• <strong>request.getAttribute(name) / session.getAttribute(name)</strong>: Đọc đối tượng do <strong>SERVER</strong> lưu vào scope qua <code>setAttribute()</code>. Luôn trả về <strong>Object</strong> (cần ép kiểu về class ban đầu).",
    "items": [
      {
        "id": 86,
        "topic": "2. Java Servlet API & Lifecycle",
        "tag": "getParameter: Lấy chuỗi do client nhập từ form HTML",
        "stemHtml": "Consider the <mark class=\"keyword-mark keyword-question-mark\">HTML code below</mark>. Which of the following method calls can <mark class=\"keyword-mark keyword-question-mark\">retrieve the \"email\"</mark> value sent from the browser? (Choose one)",
        "correctKeys": [
          "A"
        ],
        "correctText": "getParameter(\"email\") of ServletRequest",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">getParameter(\"email\") of ServletRequest</mark>"
      },
      {
        "id": 475,
        "topic": "2. Java Servlet API & Lifecycle",
        "tag": "getParameter: Lấy userName do client submit",
        "stemHtml": "Consider the <mark class=\"keyword-mark keyword-question-mark\">HTML code below</mark>. Which of the following method calls can <mark class=\"keyword-mark keyword-question-mark\">retrieve the \"userName\"</mark> value sent from the browser? (Choose one)",
        "correctKeys": [
          "C"
        ],
        "correctText": "getParameter(\"userName\") of ServletRequest",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">getParameter(\"userName\") of ServletRequest</mark>"
      },
      {
        "id": 179,
        "topic": "2. Java Servlet API & Lifecycle",
        "tag": "getAttribute: Lấy đối tượng đã lưu từ session scope",
        "stemHtml": "Which of the following method calls can be used to <mark class=\"keyword-mark keyword-question-mark\">retrieve an object from the session</mark> that was stored with the name \"<mark class=\"keyword-mark keyword-question-mark\">roleName</mark>\"?",
        "correctKeys": [
          "E"
        ],
        "correctText": "getAttribute( \" roleName \" ) ;",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">getAttribute( \" roleName \" ) ;</mark>"
      },
      {
        "id": 221,
        "topic": "2. Java Servlet API & Lifecycle",
        "tag": "getAttribute: Đọc object roleName từ session",
        "stemHtml": "Which of the following method calls can be used to retrieve an object from the session that was stored using the name \"roleName\"?",
        "correctKeys": [
          "D"
        ],
        "correctText": "getAttribute(\"roleName\");",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">getAttribute(\"roleName\");</mark>"
      },
      {
        "id": 36,
        "topic": "2. Java Servlet API & Lifecycle",
        "tag": "getAttribute: Đọc object userid từ session",
        "stemHtml": "Which of the following method calls can be used to <mark class=\"keyword-mark keyword-question-mark\">retrieve an object from the session</mark> that was stored with the name \"<mark class=\"keyword-mark keyword-question-mark\">userid</mark>\"?",
        "correctKeys": [
          "D"
        ],
        "correctText": "getAttribute( \" userid \" ) ;",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">getAttribute( \" userid \" ) ;</mark>"
      },
      {
        "id": 254,
        "topic": "2. Java Servlet API & Lifecycle",
        "tag": "getAttribute: Đọc object userid từ session (chuẩn cú pháp)",
        "stemHtml": "Which of the following method calls can be used to retrieve an object from the session that was stored using the name \"userid\"?",
        "correctKeys": [
          "D"
        ],
        "correctText": "getAttribute(\"userid\");",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">getAttribute(\"userid\");</mark>"
      }
    ]
  },
  {
    "id": "jsp-scripting-delimiters",
    "title": "Cú pháp JSP: <%! Declaration %> vs <% Scriptlet %> vs <%= Expression %>",
    "category": "JSP Scripting & Delimiters",
    "badge": "Cặp khái niệm đối lập",
    "rule": "• <strong>&lt;%! ... %&gt; (Declaration)</strong>: Khai báo biến/phương thức ở cấp LỚP (class member). Biến là instance variable, lưu trạng thái xuyên suốt nhiều request!<br>• <strong>&lt;% ... %&gt; (Scriptlet)</strong>: Code Java nằm trong thân phương thức <code>_jspService()</code>. Biến là local variable, được tạo mới và hủy mỗi khi có request.<br>• <strong>&lt;%= ... %&gt; (Expression)</strong>: Đánh giá biểu thức và in kết quả ra response (`out.print(...)`). <strong>Cấm có dấu chấm phẩy ; ở cuối</strong>.<br>• <em>Đặc biệt</em>: Các method trong <code>&lt;%! %&gt;</code> có thể gọi lẫn nhau bất kể thứ tự khai báo (như câu 5: <code>methodA()</code> gọi <code>methodB()</code> hoàn toàn hợp lệ)!",
    "items": [
      {
        "id": 5,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Declaration: Khai báo methodA và methodB gọi lẫn nhau hợp lệ",
        "stemHtml": "What is the result of attempting to access the following JSP page?\\n```\\n<html>\\n<body>\\n<%! public String <mark class=\"keyword-mark keyword-question-mark\">methodA()</mark> {\\n    return <mark class=\"keyword-mark keyword-question-mark\">methodB()</mark>;\\n}\\n%>\\n<%! public String <mark class=\"keyword-mark keyword-question-mark\">methodB()</mark> {\\n    <mark class=\"keyword-mark keyword-question-mark\">return \"JAD Final Test\";</mark>\\n}\\n%>\\n<h2><%= <mark class=\"keyword-mark keyword-question-mark\">methodA()</mark> %></h2>\\n</body>\\n</html>\\n```",
        "correctKeys": [
          "A"
        ],
        "correctText": "\"JAD Final Test\" is output to the resulting web page.",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">\"JAD Final Test\" is output to the resulting web page</mark>."
      },
      {
        "id": 1,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Declaration: Khai báo biến Date d ở cấp lớp (phải có dấu ;)",
        "stemHtml": "Which of the following is a <mark class=\"keyword-mark keyword-question-mark\">correct JSP declaration</mark> for a variable of class <mark class=\"keyword-mark keyword-question-mark\">java.util.Date</mark>?",
        "correctKeys": [
          "A"
        ],
        "correctText": "<%! Date d = new Date(); %>",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\"><%! Date d = new Date(); %></mark>"
      },
      {
        "id": 19,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Expression: In trực tiếp giá trị ra HTML output",
        "stemHtml": "A <mark class=\"keyword-mark keyword-question-mark\">JSP expression is used to insert values directly into the output</mark>.",
        "correctKeys": [
          "A"
        ],
        "correctText": "True",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">True</mark>"
      },
      {
        "id": 57,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Bẫy cú pháp: Expression không được có dấu chấm phẩy ;",
        "stemHtml": "A JSP page needs to generate an XML file. Which attribute of page directive may be used to specify that the JSP page is generating an XML file?",
        "correctKeys": [
          "A"
        ],
        "correctText": "<%@page contentType=\"text/xml\">",
        "correctTextHtml": "<%@page contentType=\"text/xml\">"
      }
    ]
  },
  {
    "id": "include-directive-vs-action",
    "title": "Chèn trang: <%@ include %> Directive vs <jsp:include> Action",
    "category": "JSP Directives & Standard Actions",
    "badge": "Cặp khái niệm đối lập",
    "rule": "• <strong>&lt;%@ include file=\"...\" %&gt; (Directive)</strong>: Nhúng tĩnh tại <strong>Translation-time</strong> (khi dịch JSP thành servlet .java). Toàn bộ nội dung file được dán vào trước khi biên dịch.<br>• <strong>&lt;jsp:include page=\"...\" /&gt; (Standard Action)</strong>: Nhúng động tại <strong>Request-time</strong> (khi trang đang chạy nhận request). Trang được gọi thực thi độc lập rồi chèn HTML kết quả vào response.",
    "items": [
      {
        "id": 27,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Bẫy: <jsp:include> chạy lúc translation-time? (Sai! Nó chạy lúc request-time)",
        "stemHtml": "Action <mark class=\"keyword-mark keyword-question-mark\">< j cp : include> is evaluated once at page translation time</mark>.",
        "correctKeys": [
          "B"
        ],
        "correctText": "False",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">False</mark>"
      },
      {
        "id": 102,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "include directive: Chèn mã nguồn lúc dịch (translation-time)",
        "stemHtml": "Which statements are BEST describe <mark class=\"keyword-mark keyword-question-mark\">include directive of JSP file</mark>?",
        "correctKeys": [
          "B"
        ],
        "correctText": "Causes the JSP container to perform a translation-time insertion of another resource's content. When the JSP is translated into a servlet and compiled, the referenced file replaces the include directive as if it were originally part of the JSP.",
        "correctTextHtml": "Causes the JSP container to perform a <mark class=\"keyword-mark keyword-answer-mark\">translation-time insertion of another resource's content</mark>. When the JSP is translated into a servlet and compiled, the referenced file replaces the include directive as if it were originally part of the JSP."
      },
      {
        "id": 123,
        "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
        "tag": "include action: Nhúng tài nguyên động lúc request",
        "stemHtml": "Which of the following defines the class name of a tag in a TLD?",
        "correctKeys": [
          "B"
        ],
        "correctText": "tag-class",
        "correctTextHtml": "tag-class"
      },
      {
        "id": 306,
        "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
        "tag": "Phân biệt thời điểm thực thi giữa Directive và Action",
        "stemHtml": "What is the role of the setBodyContent() method in the Body Tag interface?",
        "correctKeys": [
          "A"
        ],
        "correctText": "It sets the body content of the custom tag.",
        "correctTextHtml": "It sets the body content of the custom tag."
      }
    ]
  },
  {
    "id": "custom-tag-lifecycle-returns",
    "title": "Giá trị trả về của Custom Tag: doStartTag() (BODY) vs doEndTag() (PAGE)",
    "category": "Custom Tags & Tag Library Descriptor (TLD)",
    "badge": "Bẫy hằng số trả về & Đổi tên method",
    "rule": "<strong>Quy tắc vàng phân biệt giá trị trả về trong TagSupport:</strong><br>\n• <strong>doStartTag()</strong> ➔ Chỉ xử lý <strong>BODY (thân thẻ)</strong>: Hợp lệ gồm <mark class=\"keyword-mark keyword-answer-mark\">SKIP_BODY</mark> (bỏ qua body) hoặc <mark class=\"keyword-mark keyword-answer-mark\">EVAL_BODY_INCLUDE</mark> (đánh giá body vào output). (Nếu kế thừa <code>BodyTagSupport</code> thì có thêm <code>EVAL_BODY_BUFFERED</code>). <em>Tuyệt đối không có chữ PAGE!</em><br>\n• <strong>doEndTag()</strong> ➔ Chỉ xử lý <strong>PAGE (trang JSP)</strong>: Hợp lệ gồm <mark class=\"keyword-mark keyword-answer-mark\">EVAL_PAGE</mark> (tiếp tục chạy phần JSP còn lại) hoặc <mark class=\"keyword-mark keyword-answer-mark\">SKIP_PAGE</mark> (dừng trang, bỏ qua phần JSP sau thẻ). <em>Tuyệt đối không có chữ BODY!</em><br>\n• <strong>doAfterBody()</strong> ➔ Chỉ gồm <mark class=\"keyword-mark keyword-answer-mark\">EVAL_BODY_AGAIN</mark> (lặp body) hoặc <mark class=\"keyword-mark keyword-answer-mark\">SKIP_BODY</mark> (dừng lặp).<br>\n• ⚠️ <strong>Các hằng số BỊA để gài bẫy:</strong> <code>EVAL_BODY</code> (SAI), <code>EVAL_PAGE_INCLUDE</code> (SAI) ➔ Thấy là loại ngay!",
    "items": [
      {
        "id": 16,
        "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
        "tag": "Hỏi doEndTag ➔ Chỉ chọn hằng số có chữ PAGE (EVAL_PAGE)",
        "stemHtml": "Which of these is legal return types of the <mark class=\"keyword-mark keyword-question-mark\">doEndTag</mark> method defined in a class that extends TagSupport class? Select one correct answer.",
        "correctKeys": [
          "A"
        ],
        "correctText": "EVAL_PAGE",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">EVAL_PAGE</mark> (Hợp lệ cho doEndTag; các lựa chọn khác hoặc là bịa hoặc chỉ thuộc về doStartTag)"
      },
      {
        "id": 72,
        "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
        "tag": "Hỏi doStartTag ➔ Chỉ chọn hằng số có chữ BODY (EVAL_BODY_INCLUDE / SKIP_BODY)",
        "stemHtml": "Which of these is a legal return value of <mark class=\"keyword-mark keyword-question-mark\">doStartTag()</mark> in a class that extends TagSupport?",
        "correctKeys": [
          "D"
        ],
        "correctText": "EVAL_BODY_INCLUDE",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">EVAL_BODY_INCLUDE</mark> (Hợp lệ cho doStartTag; EVAL_PAGE thuộc doEndTag, EVAL_BODY/EVAL_PAGE_INCLUDE là hằng số bịa)"
      },
      {
        "id": 226,
        "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
        "tag": "Ứng dụng doEndTag trả về SKIP_PAGE ➔ Dừng trang, không in phần sau thẻ (chỉ in START)",
        "stemHtml": "Given the following JSP and tag handler code: doEndTag() returns <mark class=\"keyword-mark keyword-question-mark\">SKIP_PAGE</mark>. What is the result?",
        "correctKeys": [
          "A"
        ],
        "correctText": "START",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">START</mark> (Vì doEndTag trả về SKIP_PAGE nên container dừng xử lý phần còn lại của JSP, chữ END phía dưới không bao giờ được in ra)"
      },
      {
        "id": 124,
        "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
        "tag": "doStartTag(): Luôn luôn được gọi khi gặp thẻ mở",
        "stemHtml": "In which of the following case will the <mark class=\"keyword-mark keyword-question-mark\">method doStartTag() of a tag handler be invoked</mark>?",
        "correctKeys": [
          "A"
        ],
        "correctText": "This method is always invoked whenever the tag's use is encountered in the jsp page.",
        "correctTextHtml": "This method is <mark class=\"keyword-mark keyword-answer-mark\">always invoked whenever the tag's use is encountered in the jsp page</mark>."
      },
      {
        "id": 133,
        "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
        "tag": "doEndTag(): Chỉ được gọi khi doStartTag và doAfterBody thành công",
        "stemHtml": "In which of the following cases will the <mark class=\"keyword-mark keyword-question-mark\">method doEndTag() of a tag handler be invoked</mark>?",
        "correctKeys": [
          "A"
        ],
        "correctText": "It will be invoked only if doStartTag() and doAfterBody() complete successfully.",
        "correctTextHtml": "It will be invoked <mark class=\"keyword-mark keyword-answer-mark\">only if doStartTag() and doAfterBody() complete successfully</mark>."
      },
      {
        "id": 78,
        "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
        "tag": "Thẻ không có body: TagSupport vs BodyTagSupport",
        "stemHtml": "When implementing a tag, if the <mark class=\"keyword-mark keyword-question-mark\">tag does not include the body</mark>, then the tag handler class must extend the BodyTagSupport class. Is this statement true of false?",
        "correctKeys": [
          "B"
        ],
        "correctText": "False",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">False</mark>"
      },
      {
        "id": 344,
        "topic": "2. Java Servlet API & Lifecycle",
        "tag": "doStartTag return: SKIP_BODY vs EVAL_BODY_INCLUDE",
        "stemHtml": "How to store a value in ServletContext from a Servlet?",
        "correctKeys": [
          "A"
        ],
        "correctText": "context . set Att ribute (\"key\" value) ;",
        "correctTextHtml": "context . set Att ribute (\"key\" value) ;"
      },
      {
        "id": 409,
        "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
        "tag": "doEndTag return: EVAL_PAGE vs SKIP_PAGE",
        "stemHtml": "What is the purpose of the element in the servlet mapping configuration?",
        "correctKeys": [
          "C"
        ],
        "correctText": "To set the URL address that maps to a servlet",
        "correctTextHtml": "To set the URL address that maps to a servlet"
      }
    ]
  },
  {
    "id": "jdbc-statement-types",
    "title": "JDBC Statements: Statement vs PreparedStatement vs CallableStatement",
    "category": "JDBC, Database Connection & JavaBeans",
    "badge": "Bộ câu hỏi tương đồng",
    "rule": "• <strong>Statement</strong>: Dùng cho truy vấn SQL tĩnh không tham số.<br>• <strong>PreparedStatement</strong>: Câu SQL được biên dịch trước, tham số truyền qua dấu chấm hỏi <code>?</code> (gán bằng <code>setInt</code>, <code>setString</code>). Có khả năng <strong>ngăn ngừa triệt để SQL Injection</strong> và thực thi nhanh khi lặp lại.<br>• <strong>CallableStatement</strong>: Dùng để gọi <strong>Stored Procedure</strong> trong Database qua cú pháp <code>{call procedureName(?, ?)}</code>.",
    "items": [
      {
        "id": 200,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "PreparedStatement: Dùng dấu ? và chống SQL Injection",
        "stemHtml": "Which statements are BEST describe jsp:include Action?",
        "correctKeys": [
          "C"
        ],
        "correctText": "Dynamically includes another resource in a JSP. As the JSP executes, the referenced resource is included and processed.",
        "correctTextHtml": "Dynamically includes another resource in a JSP. As the JSP executes, the referenced resource is included and processed."
      },
      {
        "id": 276,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "CallableStatement: Gọi Stored Procedure trong Database",
        "stemHtml": "What is the main purpose of JSP in a web application?",
        "correctKeys": [
          "B"
        ],
        "correctText": "To handle server-side logic and generate dynamic content.",
        "correctTextHtml": "To handle server-side logic and generate dynamic content."
      },
      {
        "id": 280,
        "topic": "8. JDBC, Database Connection & JavaBeans",
        "tag": "Statement: Truy vấn tĩnh thông thường",
        "stemHtml": "What's the purpose of the close method when handling JDBC resources?",
        "correctKeys": [
          "A"
        ],
        "correctText": "resultSet.close(); statement.close(); connection.close();",
        "correctTextHtml": "resultSet.close(); <mark class=\"keyword-mark keyword-answer-mark\">statement</mark>.close(); connection.close();"
      },
      {
        "id": 335,
        "topic": "8. JDBC, Database Connection & JavaBeans",
        "tag": "Thiết lập tham số PreparedStatement bằng setString / setInt",
        "stemHtml": "How do you manage database transaction with JDBC driver?",
        "correctKeys": [
          "D"
        ],
        "correctText": "Invoke con.commit() or con.rollback()",
        "correctTextHtml": "Invoke con.commit() or con.rollback()"
      }
    ]
  },
  {
    "id": "jdbc-executequery-vs-update",
    "title": "Thực thi SQL: executeQuery() (SELECT) vs executeUpdate() (DML/DDL)",
    "category": "JDBC, Database Connection & JavaBeans",
    "badge": "Cặp khái niệm đối lập",
    "rule": "• <strong>executeQuery()</strong>: Chỉ dùng duy nhất cho câu lệnh <strong>SELECT</strong>. Trả về đối tượng <strong>ResultSet</strong> đại diện cho tập kết quả trả về từ database.<br>• <strong>executeUpdate()</strong>: Dùng cho các câu lệnh thay đổi dữ liệu (<strong>INSERT, UPDATE, DELETE</strong>) hoặc cấu trúc bảng (<strong>CREATE, ALTER, DROP</strong>). Trả về một số nguyên <strong>int</strong> là số dòng bị ảnh hưởng.",
    "items": [
      {
        "id": 358,
        "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
        "tag": "executeQuery: Chạy lệnh SELECT và trả về ResultSet",
        "stemHtml": "What is filter mapping used for in a Java web application?",
        "correctKeys": [
          "C"
        ],
        "correctText": "To specify which URL patterns or servlets the filter should intercept.",
        "correctTextHtml": "To specify which URL patterns or servlets the filter should intercept."
      },
      {
        "id": 474,
        "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
        "tag": "executeUpdate: Chạy INSERT/UPDATE/DELETE và trả về int",
        "stemHtml": "Assess the role and importance of form validation in HTML. Which attribute is used for ensuring that a required field must be filled out before submitting the form?",
        "correctKeys": [
          "B"
        ],
        "correctText": "required",
        "correctTextHtml": "required"
      },
      {
        "id": 511,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Phương thức thích hợp cho câu lệnh SELECT",
        "stemHtml": "Which implicit object in JSP provides access to the servlet context and can be used to store and retrieve application-wide information?",
        "correctKeys": [
          "C"
        ],
        "correctText": "application",
        "correctTextHtml": "application"
      },
      {
        "id": 537,
        "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
        "tag": "Phương thức thích hợp cho câu lệnh UPDATE/DELETE",
        "stemHtml": "How is the deployment descriptor of a web application typically named?",
        "correctKeys": [
          "B"
        ],
        "correctText": "web.xml",
        "correctTextHtml": "web.xml"
      }
    ]
  },
  {
    "id": "servlet-lifecycle-methods",
    "title": "Vòng đời Servlet: init() vs service() vs destroy()",
    "category": "Java Servlet API & Lifecycle",
    "badge": "Cặp khái niệm đối lập",
    "rule": "• <strong>init(ServletConfig)</strong>: Chạy <strong>ĐÚNG 1 LẦN DUY NHẤT</strong> khi Servlet được nạp vào bộ nhớ để khởi tạo tài nguyên.<br>• <strong>service(request, response)</strong>: Chạy <strong>MỖI KHI CÓ REQUEST</strong> gửi đến. Nó phân tích HTTP method và điều phối tới <code>doGet()</code>, <code>doPost()</code>... tương ứng.<br>• <strong>destroy()</strong>: Chạy <strong>ĐÚNG 1 LẦN DUY NHẤT</strong> trước khi Servlet bị hủy bỏ hoặc khi server dừng.",
    "items": [
      {
        "id": 64,
        "topic": "2. Java Servlet API & Lifecycle",
        "tag": "Kế thừa HttpServlet và ghi đè doGet/doPost",
        "stemHtml": "To be a servlet, a class should <mark class=\"keyword-mark keyword-question-mark\">extend HttpServlet and override doGet or doPost</mark>, depending on whether the data is being sent by GET or by POST.",
        "correctKeys": [
          "A"
        ],
        "correctText": "True",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">True</mark>"
      },
      {
        "id": 107,
        "topic": "2. Java Servlet API & Lifecycle",
        "tag": "Các phương thức vòng đời servlet chạy tự động bởi Container",
        "stemHtml": "The following statement is True or False? Statement: <mark class=\"keyword-mark keyword-question-mark\">Servlet methods are executed automatically</mark>.",
        "correctKeys": [
          "A"
        ],
        "correctText": "True",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">True</mark>"
      },
      {
        "id": 130,
        "topic": "2. Java Servlet API & Lifecycle",
        "tag": "doGet và doPost gọi chung logic để xử lý cả hai method",
        "stemHtml": "If you want the same Servlet to <mark class=\"keyword-mark keyword-question-mark\">handle both GET and POST</mark> and to <mark class=\"keyword-mark keyword-question-mark\">take the same action</mark> for both, simply have doGet call doPost, or vice versa.",
        "correctKeys": [
          "A"
        ],
        "correctText": "True",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">True</mark>"
      },
      {
        "id": 203,
        "topic": "2. Java Servlet API & Lifecycle",
        "tag": "Khai báo servlet trong web.xml: servlet-name và servlet-class",
        "stemHtml": "The <mark class=\"keyword-mark keyword-question-mark\"><servlet > element</mark> holds declarative information about a servlet. It has only <mark class=\"keyword-mark keyword-question-mark\">two mandatory subelements</mark>- a logical name for the servlet, and < cervlet- ciazc > , the fully qualified Java name without the .class extension.",
        "correctKeys": [
          "A"
        ],
        "correctText": "True",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">True</mark>"
      },
      {
        "id": 225,
        "topic": "2. Java Servlet API & Lifecycle",
        "tag": "Nhấn Submit với method=\"post\" -> Container gọi doPost",
        "stemHtml": "Which method of <mark class=\"keyword-mark keyword-question-mark\">LoginServlet</mark> will be called when the user clicks on \"<mark class=\"keyword-mark keyword-question-mark\">Submit</mark>\" <mark class=\"keyword-mark keyword-question-mark\">button</mark> for the following form? Assume that <mark class=\"keyword-mark keyword-question-mark\">LoginServlet</mark> does not override the service() method of HttpServlet class. (Choose one)\\n```\\n<html>\\n<body>\\n<form action=\"/myapp/<mark class=\"keyword-mark keyword-question-mark\">LoginServlet</mark>\" method=\"POST\">\\n  <input type=\"text\" name=\"name\">\\n  <input type=\"password\" name=\"password\">\\n  <input type=\"<mark class=\"keyword-mark keyword-question-mark\">submit</mark>\" value=\"<mark class=\"keyword-mark keyword-question-mark\">Submit</mark>\">\\n</form>\\n</body>\\n</html>\\n```",
        "correctKeys": [
          "A"
        ],
        "correctText": "doPost(HttpServletRequest, HttpServletResponse);",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">doPost(HttpServletRequest, HttpServletResponse);</mark>"
      }
    ]
  },
  {
    "id": "session-cookie-timeout",
    "title": "Quản lý Session & Cookie: Timeout Phút vs Giây & session.invalidate()",
    "category": "Session Management, Cookies & URL Rewriting",
    "badge": "Bẫy đơn vị thời gian",
    "rule": "• <strong>&lt;session-timeout&gt; trong web.xml</strong>: Đơn vị tính bằng <strong>PHÚT</strong>.<br>• <strong>session.setMaxInactiveInterval(seconds)</strong>: Đơn vị tính bằng <strong>GIÂY</strong>.<br>• <strong>cookie.setMaxAge(seconds)</strong>: Đơn vị tính bằng <strong>GIÂY</strong>. Giá trị âm: cookie phiên (mất khi đóng browser); bằng 0: xóa cookie lập tức.<br>• <strong>session.invalidate()</strong>: Hủy session ngay lập tức.<br>• <strong>Bẫy</strong>: Đặt session timeout = 0 qua setMaxInactiveInterval KHÔNG PHẢI là kỹ thuật chuẩn để hủy session (thậm chí có container hiểu là không bao giờ timeout).",
    "items": [
      {
        "id": 50,
        "topic": "4. Session Management, Cookies & URL Rewriting",
        "tag": "Bẫy: Đặt timeout = 0 KHÔNG PHẢI kỹ thuật chuẩn để hủy session",
        "stemHtml": "Which is <mark class=\"keyword-mark keyword-question-mark\">NOT a technique for a session be definitely invalidated</mark>?",
        "correctKeys": [
          "D"
        ],
        "correctText": "If the session time out is set to 0 using setMaxlnactivelnterval() method.",
        "correctTextHtml": "If the <mark class=\"keyword-mark keyword-answer-mark\">session time out is set to 0 using setMaxlnactivelnterval()</mark> method."
      },
      {
        "id": 420,
        "topic": "4. Session Management, Cookies & URL Rewriting",
        "tag": "Bẫy chuẩn hóa: timeout = 0 không hủy session dứt khoát",
        "stemHtml": "Which is <mark class=\"keyword-mark keyword-question-mark\">NOT a standard technique for a session be definitely invalidated</mark>?",
        "correctKeys": [
          "C"
        ],
        "correctText": "If the session time out is set to 0 using setMaxlnactivelnterval() method.",
        "correctTextHtml": "If the <mark class=\"keyword-mark keyword-answer-mark\">session time out is set to 0 using setMaxlnactivelnterval()</mark> method."
      },
      {
        "id": 54,
        "topic": "4. Session Management, Cookies & URL Rewriting",
        "tag": "Hủy session dứt khoát: Gọi HttpSession.invalidate()",
        "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Session death</mark> can come about through an explicit call (in Servlet code) to <mark class=\"keyword-mark keyword-question-mark\">HttpSession.invalidate()</mark>.",
        "correctKeys": [
          "A"
        ],
        "correctText": "True",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">True</mark>"
      },
      {
        "id": 35,
        "topic": "2. Java Servlet API & Lifecycle",
        "tag": "Bẫy: Cookie không bao giờ hết hạn? (Sai! Hết hạn theo MaxAge)",
        "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Cookies never expire</mark>.",
        "correctKeys": [
          "B"
        ],
        "correctText": "False",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">False</mark>"
      },
      {
        "id": 89,
        "topic": "4. Session Management, Cookies & URL Rewriting",
        "tag": "HttpSession lưu trữ cặp key-value qua setAttribute",
        "stemHtml": "HttpSession objects have a built-in data structure that lets you store any number of keys and associated values.",
        "correctKeys": [
          "B"
        ],
        "correctText": "True",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">True</mark>"
      },
      {
        "id": 222,
        "topic": "4. Session Management, Cookies & URL Rewriting",
        "tag": "Đọc cookie từ client gửi lên: Gọi request.getCookies()",
        "stemHtml": "To <mark class=\"keyword-mark keyword-question-mark\">read the cookies that come back</mark> from the client, you call <mark class=\"keyword-mark keyword-question-mark\">getCookies on the HttpServletRequest</mark>.",
        "correctKeys": [
          "A"
        ],
        "correctText": "True",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">True</mark>"
      }
    ]
  },
  {
    "id": "error-page-config-webxml",
    "title": "Cấu hình <error-page>: <error-code> vs <exception-type>",
    "category": "Deployment Descriptor (web.xml)",
    "badge": "Bộ câu hỏi tương đồng",
    "rule": "• <strong>&lt;error-code&gt;</strong>: Bắt lỗi theo mã HTTP (ví dụ: <code>&lt;error-code&gt;404&lt;/error-code&gt;</code> hoặc <code>500</code>).<br>• <strong>&lt;exception-type&gt;</strong>: Bắt lỗi theo tên lớp ngoại lệ Java (ví dụ: <code>&lt;exception-type&gt;java.lang.Throwable&lt;/exception-type&gt;</code>).<br>• Cả 2 thẻ đều nằm trong <code>&lt;error-page&gt;</code> và bắt buộc đi kèm thẻ con <code>&lt;location&gt;/error.jsp&lt;/location&gt;</code>.",
    "items": [
      {
        "id": 119,
        "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
        "tag": "Cấu hình bắt lỗi theo exception-type trong web.xml",
        "stemHtml": "Which of these is a correct fragment within the <mark class=\"keyword-mark keyword-question-mark\">web-app element of deployment descriptor</mark>? Select 1 correct answer",
        "correctKeys": [
          "B"
        ],
        "correctText": "<error-page> <exception-type> mypackage.MyException</exception-type> <location> /error.jsp</location> </error-page>",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\"><error-page> <exception-type> mypackage.MyException</exception-type> <location> /error.jsp</location> </error-page></mark>"
      },
      {
        "id": 208,
        "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
        "tag": "Cấu hình bắt lỗi theo error-code trong web.xml",
        "stemHtml": "Which of these is a correct fragment within the <mark class=\"keyword-mark keyword-question-mark\">web-app element of deployment descriptor</mark>? Select one correct answer.",
        "correctKeys": [
          "A"
        ],
        "correctText": "<error-page> <error-code>404</error-code> <location>/error.jsp</location> </error-page>",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\"><error-page> <error-code>404</error-code> <location>/error.jsp</location> </error-page></mark>"
      }
    ]
  },
  {
    "id": "auth-concept",
    "title": "Bảo mật Web: Authentication (Xác thực) vs Authorization (Phân quyền)",
    "category": "Web & HTTP Protocol",
    "badge": "Cặp khái niệm đối lập",
    "rule": "• <strong>Authentication (Xác thực)</strong>: Xác minh danh tính người dùng (Bạn là ai? - Kiểm tra username/password, token, certificate).<br>• <strong>Authorization (Phân quyền)</strong>: Xác định quyền hạn truy cập tài nguyên (Bạn được phép làm gì? - Kiểm tra vai trò Role/Permission đối với URL được bảo vệ).",
    "items": [
      {
        "id": 82,
        "topic": "2. Java Servlet API & Lifecycle",
        "tag": "Authorization: Xác định quyền hạn truy cập tài nguyên",
        "stemHtml": "Which of the following statement is correct? (choose one)",
        "correctKeys": [
          "C"
        ],
        "correctText": "Authorization means determining whether one has access to a particular resource or not.",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Authorization means determining whether one has access to a particular resource or not</mark>."
      },
      {
        "id": 163,
        "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
        "tag": "Bảo mật HTTPS: Phiên làm việc an toàn",
        "stemHtml": "Which of the following statements is correct? (Choose one)",
        "correctKeys": [
          "B"
        ],
        "correctText": "If a web application uses HTTPS, the HTTPS response stream may be used to identify the session.",
        "correctTextHtml": "If a web application uses HTTPS, the <mark class=\"keyword-mark keyword-answer-mark\">HTTPS response stream may be used to identify the session</mark>."
      }
    ]
  },
  {
    "id": "scope-vs-implicit-object-trap",
    "title": "4 Scopes vs Implicit Objects: 'response' KHÔNG PHẢI là Scope!",
    "category": "JSP Scripting & Implicit Objects",
    "badge": "Bộ lựa chọn gần như y hệt",
    "rule": "<strong>Bẫy danh từ cực kỳ nguy hiểm:</strong> Cả 2 câu đều có các lựa chọn: <code>page</code>, <code>request</code>, <code>session</code>, <code>application</code>, <code>response</code>.<br>• Trong JSP chỉ có đúng <strong>4 Scopes</strong> (từ hẹp đến rộng): <code>page &lt; request &lt; session &lt; application</code>. <strong>response KHÔNG PHẢI là một Scope!</strong><br>• Giá trị scope mặc định của <code>&lt;jsp:useBean&gt;</code> nếu không khai báo là <strong>page</strong>.<br>• Biến ẩn cung cấp thông tin client gửi lên là <strong>request</strong>.",
    "items": [
      {
        "id": 117,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Bẫy Scope: Cái nào KHÔNG PHẢI là scope? ➔ Chọn response",
        "stemHtml": "Which is <mark class=\"keyword-mark keyword-question-mark\">NOT a scope</mark> of implicit objects of JSP file?",
        "correctKeys": [
          "E"
        ],
        "correctText": "response",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">response</mark> (Chỉ có 4 scopes: page, request, session, application; response là implicit object chứ không phải scope!)"
      },
      {
        "id": 112,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Scope mặc định của jsp:useBean ➔ page",
        "stemHtml": "Name the <mark class=\"keyword-mark keyword-question-mark\">default value</mark> of the <mark class=\"keyword-mark keyword-question-mark\">scope</mark> attribute of &lt;jsp:useBean&gt;",
        "correctKeys": [
          "A"
        ],
        "correctText": "page",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">page</mark> (Nếu không khai báo thuộc tính scope, đối tượng bean mặc định nằm ở page scope)"
      },
      {
        "id": 329,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Biến ẩn đại diện client request ➔ request",
        "stemHtml": "Which implicit object provides information about the <mark class=\"keyword-mark keyword-question-mark\">client's request</mark> in a JSP page?",
        "correctKeys": [
          "B"
        ],
        "correctText": "request",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">request</mark>"
      }
    ]
  },
  {
    "id": "servlet-methods-frequency",
    "title": "Vòng đời Servlet: Phương thức nào được gọi nhiều lần nhất?",
    "category": "Java Servlet API & Lifecycle",
    "badge": "Bộ đáp án giống nhau",
    "rule": "<strong>Bẫy tần suất gọi trong Servlet:</strong> Các lựa chọn gồm <code>init()</code>, <code>service()</code>, <code>destroy()</code>, <code>doGet()</code>.<br>• <strong>init()</strong>: Chỉ gọi <strong>1 lần duy nhất</strong> khi Servlet được nạp vào bộ nhớ.<br>• <strong>destroy()</strong>: Chỉ gọi <strong>1 lần duy nhất</strong> trước khi Servlet bị dỡ bỏ.<br>• <strong>service()</strong>: Được gọi <strong>MỖI KHI CÓ REQUEST</strong> gửi tới (gọi nhiều nhất trong toàn bộ vòng đời!).",
    "items": [
      {
        "id": 320,
        "topic": "2. Java Servlet API & Lifecycle",
        "tag": "Phương thức gọi nhiều nhất trong Servlet ➔ service()",
        "stemHtml": "Which method is <mark class=\"keyword-mark keyword-question-mark\">invoked most</mark> during servlet operation?",
        "correctKeys": [
          "B"
        ],
        "correctText": "service()",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">service()</mark> (Vì service() chạy cho mọi request gửi tới, còn init() và destroy() chỉ chạy đúng 1 lần)"
      },
      {
        "id": 363,
        "topic": "2. Java Servlet API & Lifecycle",
        "tag": "Phương thức chịu trách nhiệm xử lý request ➔ service()",
        "stemHtml": "Which method of the javax.servlet.Servlet interface is <mark class=\"keyword-mark keyword-question-mark\">responsible for handling requests</mark>?",
        "correctKeys": [
          "B"
        ],
        "correctText": "service()",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">service()</mark>"
      }
    ]
  },
  {
    "id": "jsp-execution-outside-service",
    "title": "Phần tử JSP nào KHÔNG thực thi trong _jspService()?",
    "category": "JSP Scripting & Delimiters",
    "badge": "Bộ đáp án giống nhau",
    "rule": "<strong>Bẫy vị trí sinh mã khi dịch JSP sang Servlet:</strong><br>• <strong>Scriptlet (&lt;% %&gt;) và Expression (&lt;%= %&gt;)</strong>: Mã Java được đặt <strong>BÊN TRONG</strong> phương thức <code>_jspService()</code> ➔ Thực thi mỗi khi có request.<br>• <strong>Declaration (&lt;%! %&gt;)</strong>: Mã Java được đặt ở <strong>CẤP LỚP (class level)</strong> bên ngoài <code>_jspService()</code> ➔ Dùng để khai báo instance field và method.<br>• <strong>Directive (&lt;%@ %&gt;)</strong>: Được xử lý tại <strong>Translation-time (lúc dịch)</strong> ➔ KHÔNG thực thi trong <code>_jspService()</code>.",
    "items": [
      {
        "id": 459,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Phần tử KHÔNG chạy trong _jspService() ➔ Declaration & Directive",
        "stemHtml": "Which JSP element is <mark class=\"keyword-mark keyword-question-mark\">NOT executed at the service()</mark> method of the servlet? (Choose two)",
        "correctKeys": [
          "C",
          "D"
        ],
        "correctText": "Declaration / Directive",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Declaration</mark> (cấp class) và <mark class=\"keyword-mark keyword-answer-mark\">Directive</mark> (xử lý lúc dịch), trong khi Scriptlet và Expression đặt trong _jspService()"
      },
      {
        "id": 252,
        "topic": "5. JSP Scripting, Directives & Standard Actions",
        "tag": "Định nghĩa method/field nằm ngoài _jspService() ➔ declaration (<%! %>)",
        "stemHtml": "A JSP lets you define methods or fields that get inserted into the main body of the servlet class (<mark class=\"keyword-mark keyword-question-mark\">outside of the service method</mark>). Which tag is used?",
        "correctKeys": [
          "A"
        ],
        "correctText": "declaration",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">declaration</mark> (&lt;%! ... %&gt;)"
      }
    ]
  },
  {
    "id": "http-methods-valid-vs-sql",
    "title": "Phương thức HTTP 1.1: 'UPDATE' là lệnh SQL, KHÔNG PHẢI HTTP!",
    "category": "Web & HTTP Protocol",
    "badge": "Bộ lựa chọn gần như y hệt",
    "rule": "<strong>Bẫy lẫn lộn HTTP Method và SQL Command:</strong><br>• Các phương thức chuẩn của <strong>HTTP 1.1</strong> gồm: <code>GET, POST, PUT, DELETE, HEAD, OPTIONS, TRACE, CONNECT</code>.<br>• ⚠️ <strong>UPDATE</strong> là lệnh trong cơ sở dữ liệu <strong>SQL (DML)</strong>, tuyệt đối <strong>KHÔNG PHẢI là HTTP Method</strong>!<br>• Khi truyền dữ liệu nhạy cảm (mật khẩu, thông tin thẻ), phải dùng <strong>POST</strong> (gửi trong body, không lưu cache, không hiện trên URL như GET).",
    "items": [
      {
        "id": 359,
        "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
        "tag": "Cái nào KHÔNG PHẢI method của HTTP 1.1? ➔ UPDATE",
        "stemHtml": "What are <mark class=\"keyword-mark keyword-question-mark\">NOT the methods of HTTP 1.1</mark> request?",
        "correctKeys": [
          "E"
        ],
        "correctText": "UPDATE",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">UPDATE</mark> (Đây là câu lệnh SQL DML, còn HTTP chỉ có GET, POST, PUT, DELETE...)"
      },
      {
        "id": 506,
        "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
        "tag": "Phương thức an toàn hơn để truyền mật khẩu ➔ POST",
        "stemHtml": "Which method is <mark class=\"keyword-mark keyword-question-mark\">more secure</mark> when transferring sensitive data like passwords?",
        "correctKeys": [
          "B"
        ],
        "correctText": "poST",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">POST</mark> (Dữ liệu gửi trong request body, không lộ trên URL query string)"
      },
      {
        "id": 135,
        "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
        "tag": "Bẫy: Hai HTTP request phổ biến nhất là get và put? ➔ False",
        "stemHtml": "The two most common HTTP requests are <mark class=\"keyword-mark keyword-question-mark\">get and put</mark>.",
        "correctKeys": [
          "B"
        ],
        "correctText": "False",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">False</mark> (Phải là GET và POST mới là 2 phương thức phổ biến nhất)"
      },
      {
        "id": 250,
        "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
        "tag": "Hai HTTP request phổ biến nhất là get và post ➔ True",
        "stemHtml": "The two most common HTTP requests are <mark class=\"keyword-mark keyword-question-mark\">get and post</mark>.",
        "correctKeys": [
          "A"
        ],
        "correctText": "True",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">True</mark>"
      }
    ]
  },
  {
    "id": "mvc-roles-and-traps",
    "title": "Vai trò trong mô hình MVC2: 'Database' và 'Service Layer' KHÔNG thuộc chữ MVC!",
    "category": "Web & HTTP Protocol",
    "badge": "Bộ lựa chọn gần như y hệt",
    "rule": "<strong>Bẫy thành phần trong kiến trúc MVC:</strong><br>• <strong>Model</strong>: Chứa dữ liệu nghiệp vụ và business logic (JavaBean, DAO, Entity).<br>• <strong>View</strong>: Trình bày dữ liệu ra giao diện người dùng (<strong>JSP</strong>).<br>• <strong>Controller</strong>: Tiếp nhận request, điều phối xử lý và chuyển hướng (<strong>Servlet</strong>).<br>• ⚠️ <strong>Bẫy:</strong> <code>Database</code> và <code>Service Layer</code> KHÔNG PHẢI là một thành phần đại diện trong chữ viết tắt MVC (Model - View - Controller)!",
    "items": [
      {
        "id": 389,
        "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
        "tag": "Thành phần chịu trách nhiệm hiển thị dữ liệu ➔ View (JSP)",
        "stemHtml": "Which component of the MVC architecture is <mark class=\"keyword-mark keyword-question-mark\">responsible for presenting data</mark> to the user?",
        "correctKeys": [
          "B"
        ],
        "correctText": "View",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">View</mark> (Thường là trang JSP)"
      },
      {
        "id": 531,
        "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
        "tag": "Vai trò của Servlet trong kiến trúc MVC2 ➔ Controller",
        "stemHtml": "In MVC2 architecture, what <mark class=\"keyword-mark keyword-question-mark\">role does the servlet</mark> typically play?",
        "correctKeys": [
          "B"
        ],
        "correctText": "Controller",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Controller</mark> (Điều phối luồng dữ liệu giữa Model và View)"
      },
      {
        "id": 390,
        "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
        "tag": "Cái nào KHÔNG PHẢI thành phần tiêu chuẩn của MVC? ➔ Database",
        "stemHtml": "Which is <mark class=\"keyword-mark keyword-question-mark\">NOT considered a standard component</mark> of a typical MVC architecture?",
        "correctKeys": [
          "A"
        ],
        "correctText": "Database",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Database</mark> (MVC chỉ gồm 3 phần: Model, View, Controller; Database nằm phía sau Model)"
      },
      {
        "id": 464,
        "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
        "tag": "Cái nào KHÔNG PHẢI thành phần của chữ MVC? ➔ Service Layer",
        "stemHtml": "Which is <mark class=\"keyword-mark keyword-question-mark\">NOT a component</mark> of the MVC architecture in Java web frameworks?",
        "correctKeys": [
          "A"
        ],
        "correctText": "Service Layer",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Service Layer</mark>"
      }
    ]
  },
  {
    "id": "statement-1-vs-statement-2",
    "title": "Dạng bài: 'Only 1 is true' vs 'Only 2 is true' vs 'Both true/false'",
    "category": "Deployment Descriptor (web.xml)",
    "badge": "Bộ 4 đáp án giống nhau 100%",
    "rule": "<strong>Bẫy nhận định 1 & 2 với 4 phương án y hệt nhau:</strong><br>• <strong>Câu 97</strong>: Nhận định 1 nói deployment descriptor là <code>web.xml</code> và nằm trong <code>WEB-INF</code> ➔ Đúng! Nhận định 2 nói có thể đặt tên bất kỳ ➔ Sai! ➔ Chọn <strong>Only statement 1 is true</strong>.<br>• <strong>Câu 127</strong>: Nhận định 1 nói thư mục <code>/WEB-INF/lib</code> chứa file class ➔ Sai (lib chứa file .jar, classes mới chứa file .class)! ➔ Chọn <strong>Both 1 and 2 are not true</strong>.<br>• <strong>Câu 164</strong>: Nhận định 1 nói mỗi web app có unique context path ➔ Đúng! Nhận định 2 nói context path do admin/server cấu hình ➔ Đúng! ➔ Chọn <strong>Both 1 and 2 are true</strong>.",
    "items": [
      {
        "id": 97,
        "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
        "tag": "web.xml bắt buộc đặt tên web.xml và nằm trong WEB-INF ➔ Only 1 is true",
        "stemHtml": "Study the statements about web.xml file:<br>1. The deployment descriptor file is called web.xml, and it resides in the /WEB-INF directory...<br>2. Can have any name...",
        "correctKeys": [
          "A"
        ],
        "correctText": "Only statement 1 is true",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Only statement 1 is true</mark> (Tên file bắt buộc là web.xml, không thể đặt tên tùy ý)"
      },
      {
        "id": 127,
        "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
        "tag": "WEB-INF/lib chứa file class? ➔ Both 1 and 2 are not true",
        "stemHtml": "Study the statements:<br>1. The special directory <mark class=\"keyword-mark keyword-question-mark\">/WEB-INF/lib contains Java class files</mark>...<br>2. /WEB-INF/classes contains jar files...",
        "correctKeys": [
          "D"
        ],
        "correctText": "Both 1 and 2 are not true",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Both 1 and 2 are not true</mark> (Bị đảo ngược: /WEB-INF/lib chứa file .jar, còn /WEB-INF/classes mới chứa file .class!)"
      },
      {
        "id": 164,
        "topic": "2. Java Servlet API & Lifecycle",
        "tag": "Context path duy nhất trong container ➔ Both 1 and 2 are true",
        "stemHtml": "Study the statements:<br>1. Every web application within a web container has a <mark class=\"keyword-mark keyword-question-mark\">unique context path</mark>.<br>2. Context path configures by deployer/server...",
        "correctKeys": [
          "C"
        ],
        "correctText": "Both 1 and 2 are true",
        "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Both 1 and 2 are true</mark>"
      }
    ]
  }
]
};
