window.PRJ301_RECALL = {
  meta: {
    title: "Thấy thuật ngữ → nhớ ngay → chọn đúng",
    description: "48 quy tắc phản xạ ngắn bám theo 8 nhóm của ngân hàng 567 câu PRJ301."
  },
  numberDetails: {
    "Servlet lifecycle": "init một lần → service mỗi request → destroy một lần.",
    "JSP scopes": "page nhỏ nhất; request giữ qua forward; session theo user; application toàn app.",
    "JSP scripting forms": "<%! declaration; <% scriptlet; <%= expression.",
    "Classic tag flow": "doStartTag → body → doAfterBody → doEndTag.",
    "JDBC transaction": "Tắt auto-commit; thành công commit, thất bại rollback.",
    "Session tracking": "HttpSession là API server; cookie/URL rewriting thường mang session id."
  },
  groups: [
    { lesson: 1, title: "Web, HTTP, HTML Form & MVC", rules: [
      { see: ["stateless", "independent requests"], ask: "HTTP có tự nhớ người dùng không?", remember: "HTTP stateless, muốn nhớ phải thêm cơ chế trạng thái.", choose: "session, cookie hoặc URL rewriting", avoid: "Không chọn HTTP tự lưu lịch sử request." },
      { see: ["read only", "bookmark", "query string", "idempotent"], ask: "GET hay POST?", remember: "GET thiên về đọc và tham số thường nằm trên URL.", choose: "GET", avoid: "Dữ liệu nhạy cảm hoặc thay đổi trạng thái không nên chọn GET." },
      { see: ["form body", "create", "update", "large data"], ask: "GET hay POST?", remember: "POST gửi dữ liệu trong request body và hợp thao tác thay đổi.", choose: "POST", avoid: "POST không tự đồng nghĩa bảo mật; vẫn cần HTTPS." },
      { see: ["action", "method", "name"], ask: "HTML form gửi gì?", remember: "action chọn đích, method chọn HTTP method, name tạo parameter.", choose: "input name → request parameter", avoid: "id không thay thế name khi submit." },
      { see: ["Controller", "Model", "View"], ask: "Thành phần nào làm gì?", remember: "Servlet điều phối; Model/DAO xử lý dữ liệu; JSP hiển thị.", choose: "Servlet → Controller, JSP → View", avoid: "Không đưa JDBC trực tiếp vào JSP." },
      { see: ["contextPath", "servletPath", "pathInfo"], ask: "Phần nào của URL?", remember: "context nhận diện app; servlet khớp mapping; pathInfo là phần dư sau servlet path.", choose: "tách URL theo mapping", avoid: "Đừng coi toàn bộ URI là servletPath." }
    ]},
    { lesson: 2, title: "Servlet API & Lifecycle", rules: [
      { see: ["called once", "initialize", "before requests"], ask: "Lifecycle method nào?", remember: "init() được container gọi một lần sau khi tạo servlet.", choose: "init", avoid: "service/doGet chạy theo request." },
      { see: ["each request", "dispatch by method"], ask: "Method nào nhận request?", remember: "service() xử lý và phân phối tới doGet/doPost.", choose: "service → doGet/doPost", avoid: "Không gọi init cho từng request." },
      { see: ["client input", "form field", "query parameter"], ask: "Đọc bằng API nào?", remember: "Parameter do client gửi.", choose: "request.getParameter(name)", avoid: "getAttribute dành cho object server gắn." },
      { see: ["same request", "keep attribute", "server side"], ask: "Forward hay redirect?", remember: "Forward nội bộ và dùng lại request/response.", choose: "RequestDispatcher.forward", avoid: "Redirect tạo request mới." },
      { see: ["new URL", "browser request", "PRG pattern"], ask: "Forward hay redirect?", remember: "sendRedirect trả response để browser gọi URL khác.", choose: "response.sendRedirect", avoid: "Request attribute cũ không tự đi theo." },
      { see: ["one servlet", "whole application"], ask: "ServletConfig hay ServletContext?", remember: "Config riêng servlet; Context dùng chung web app.", choose: "init-param riêng → Config; shared → Context", avoid: "Context không riêng từng user." }
    ]},
    { lesson: 3, title: "web.xml, Filter & Listener", rules: [
      { see: ["deployment descriptor", "WEB-INF"], ask: "File cấu hình nào?", remember: "web.xml đặt tại WEB-INF/web.xml.", choose: "deployment descriptor", avoid: "Client không truy cập trực tiếp WEB-INF." },
      { see: ["servlet-name", "url-pattern"], ask: "Ánh xạ URL bằng gì?", remember: "servlet và servlet-mapping nối với nhau qua servlet-name.", choose: "matching servlet-name + url-pattern", avoid: "Tên class không tự là URL mapping." },
      { see: ["before and after", "logging", "encoding", "authentication"], ask: "Dùng component nào?", remember: "Filter tiền/hậu xử lý request/response.", choose: "Filter.doFilter", avoid: "Listener không chặn luồng request." },
      { see: ["continue chain", "target resource"], ask: "Làm sao request đi tiếp?", remember: "chain.doFilter(request,response) gọi phần còn lại.", choose: "FilterChain.doFilter", avoid: "Bỏ lời gọi có thể dừng request tại filter." },
      { see: ["context initialized", "session created", "attribute changed"], ask: "Dùng component nào?", remember: "Listener nhận callback theo sự kiện vòng đời/thay đổi.", choose: "đúng loại Listener", avoid: "Filter không thay thế lifecycle listener." },
      { see: ["welcome file", "error page", "security constraint"], ask: "Cấu hình ở đâu?", remember: "Các cấu hình triển khai truyền thống nằm trong web.xml.", choose: "welcome-file-list / error-page / security-constraint", avoid: "Không phải init-param của servlet." }
    ]},
    { lesson: 4, title: "Session, Cookie & URL Rewriting", rules: [
      { see: ["existing session only", "do not create"], ask: "Gọi getSession thế nào?", remember: "false chỉ trả session đang tồn tại hoặc null.", choose: "request.getSession(false)", avoid: "getSession() mặc định có thể tạo mới." },
      { see: ["logout", "terminate session"], ask: "Kết thúc session bằng gì?", remember: "invalidate() vô hiệu toàn session.", choose: "session.invalidate()", avoid: "removeAttribute chỉ xóa một giá trị." },
      { see: ["inactive interval", "timeout"], ask: "Đặt timeout bằng gì?", remember: "setMaxInactiveInterval nhận số giây không hoạt động.", choose: "session.setMaxInactiveInterval(seconds)", avoid: "Không phải tuổi thọ tuyệt đối từ lúc login." },
      { see: ["client side", "name/value", "max age"], ask: "Cơ chế nào?", remember: "Cookie được gửi giữa browser và server.", choose: "new Cookie + response.addCookie", avoid: "Dữ liệu session không mặc định lưu toàn bộ trong cookie." },
      { see: ["cookies disabled", "jsessionid in URL"], ask: "Theo dõi session thế nào?", remember: "URL rewriting mang session id trong URL.", choose: "response.encodeURL(url)", avoid: "Không tự nối chuỗi nếu API có thể mã hóa đúng." },
      { see: ["one request", "same user", "all users"], ask: "Scope nào?", remember: "request / session / application theo phạm vi tăng dần.", choose: "chọn scope nhỏ nhất đủ dùng", avoid: "Không đặt dữ liệu từng user vào application." }
    ]},
    { lesson: 5, title: "JSP Scripting, Directives & Actions", rules: [
      { see: ["<%!", "field", "method declaration"], ask: "JSP element nào?", remember: "Declaration tạo member cấp class.", choose: "<%! ... %>", avoid: "Scriptlet nằm trong _jspService và không khai báo local method." },
      { see: ["<%", "Java statements", "local variable"], ask: "JSP element nào?", remember: "Scriptlet chứa statement trong _jspService.", choose: "<% ... %>", avoid: "Biến local phải khởi tạo trước khi dùng." },
      { see: ["<%=", "print value"], ask: "JSP element nào?", remember: "Expression in giá trị ra output.", choose: "<%= expression %>", avoid: "Không thêm ; bên trong expression." },
      { see: ["translation time", "static include"], ask: "Include nào?", remember: "Include directive ghép nội dung khi dịch JSP.", choose: "<%@ include file=... %>", avoid: "jsp:include chạy theo request." },
      { see: ["request time", "dynamic include"], ask: "Include nào?", remember: "jsp:include gọi tài nguyên khi xử lý request.", choose: "<jsp:include page=...>", avoid: "Không nhầm với directive." },
      { see: ["exception implicit object", "error page"], ask: "Khi nào dùng được exception?", remember: "Chỉ error page có isErrorPage=true mới có implicit exception.", choose: "page directive isErrorPage=true", avoid: "errorPage chỉ định trang đích, không tự biến trang hiện tại thành error page." }
    ]},
    { lesson: 6, title: "Expression Language & JSTL", rules: [
      { see: ["${user.name}", "bean property"], ask: "EL truy cập gì?", remember: "Dot notation gọi property/getter của bean hoặc key của map.", choose: "getName() / property name", avoid: "Không gọi field private trực tiếp." },
      { see: ["dynamic key", "list index", "map key"], ask: "Cú pháp EL nào?", remember: "Bracket notation dùng key/index động.", choose: "object[index]", avoid: "Dot notation không hợp mọi key đặc biệt." },
      { see: ["same name in many scopes"], ask: "EL tìm theo thứ tự nào?", remember: "page → request → session → application.", choose: "scope gần nhất trước", avoid: "Không mặc định ưu tiên session." },
      { see: ["null", "empty string", "empty collection"], ask: "Toán tử nào?", remember: "empty kiểm tra null hoặc rỗng.", choose: "empty value", avoid: "Không chỉ so với chuỗi rỗng." },
      { see: ["if else", "multiple branches"], ask: "JSTL tag nào?", remember: "c:if một nhánh; c:choose/when/otherwise nhiều nhánh.", choose: "c:choose cho if–else", avoid: "c:if không có thuộc tính else." },
      { see: ["loop collection", "varStatus"], ask: "JSTL tag nào?", remember: "c:forEach lặp collection hoặc range và có varStatus.", choose: "c:forEach", avoid: "c:forTokens dành cho chuỗi phân tách token." }
    ]},
    { lesson: 7, title: "Custom Tags & TLD", rules: [
      { see: ["uri", "tag-class", "body-content", "attribute"], ask: "File nào mô tả?", remember: "TLD mô tả tag library và từng tag.", choose: "Tag Library Descriptor", avoid: "web.xml không chứa toàn bộ metadata của custom tag." },
      { see: ["do not evaluate body", "start tag"], ask: "Trả hằng số nào?", remember: "doStartTag trả SKIP_BODY để bỏ body.", choose: "SKIP_BODY", avoid: "SKIP_PAGE thuộc doEndTag." },
      { see: ["evaluate body", "again", "loop tag"], ask: "Trả hằng số nào?", remember: "doAfterBody trả EVAL_BODY_AGAIN để lặp body.", choose: "EVAL_BODY_AGAIN", avoid: "EVAL_PAGE không dùng để lặp body." },
      { see: ["continue JSP page", "end tag"], ask: "Trả hằng số nào?", remember: "doEndTag trả EVAL_PAGE để tiếp tục trang.", choose: "EVAL_PAGE", avoid: "SKIP_PAGE dừng phần còn lại JSP." },
      { see: ["SimpleTagSupport", "single method"], ask: "Entry point nào?", remember: "SimpleTag xử lý trong doTag().", choose: "doTag", avoid: "Không dùng doStartTag của classic TagSupport." },
      { see: ["evaluate simple tag body", "JspFragment"], ask: "Gọi body thế nào?", remember: "getJspBody() trả JspFragment; invoke để chạy body.", choose: "getJspBody().invoke(null)", avoid: "Kiểm tra null nếu tag có thể không có body." }
    ]},
    { lesson: 8, title: "JDBC, DataSource & JavaBeans", rules: [
      { see: ["placeholder ?", "SQL injection", "bind parameter"], ask: "Statement nào?", remember: "PreparedStatement tham số hóa SQL.", choose: "prepareStatement + setXxx", avoid: "Không nối input trực tiếp vào SQL." },
      { see: ["SELECT", "ResultSet"], ask: "Method thực thi nào?", remember: "executeQuery trả ResultSet.", choose: "executeQuery()", avoid: "executeUpdate trả số dòng, không phải ResultSet." },
      { see: ["INSERT", "UPDATE", "DELETE", "affected rows"], ask: "Method thực thi nào?", remember: "executeUpdate trả số dòng bị tác động.", choose: "executeUpdate()", avoid: "Không dùng executeQuery cho DML." },
      { see: ["all or nothing", "multiple SQL statements"], ask: "Cần cơ chế nào?", remember: "Transaction gom nhiều thay đổi thành một đơn vị.", choose: "setAutoCommit(false), commit, rollback", avoid: "Đừng commit từng câu nếu nghiệp vụ phải atomic." },
      { see: ["connection pool", "JNDI", "managed connection"], ask: "Nguồn kết nối nào?", remember: "DataSource tách cấu hình kết nối và thường hỗ trợ pooling.", choose: "DataSource.getConnection()", avoid: "Không mở DriverManager rải rác khắp servlet." },
      { see: ["property", "getter setter", "no-arg constructor"], ask: "Đối tượng nào?", remember: "JavaBean biểu diễn dữ liệu qua property và accessor chuẩn.", choose: "bean + DAO", avoid: "JSP không nên tự thực thi SQL." }
    ]}
  ]
};
