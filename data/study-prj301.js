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
  ]
};
