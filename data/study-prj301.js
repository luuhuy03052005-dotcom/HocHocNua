window.PRJ301_STUDY = {
  meta: {
    course: "PRJ301",
    title: "Kiến thức trọng tâm PRJ301",
    source: "Đối chiếu 567 câu PRJ301 trong ngân hàng hiện tại",
    lessonCount: 8,
    questionCount: 567,
    description: "8 nhóm kiến thức cốt lõi, trình bày theo khái niệm → cần nhớ → dấu hiệu chọn đáp án.",
    guideDescription: "Nắm luồng HTTP → Servlet → JSP/EL → JDBC, sau đó luyện nhận diện cú pháp và vòng đời.",
    foundationDescription: "5 sơ đồ tư duy ngắn giúp nối các khái niệm đang bị rời rạc trong bộ câu hỏi.",
    searchPlaceholder: "Tìm Lesson, servlet, JSP, session, JDBC...",
    recallPlaceholder: "Ví dụ: doGet, forward, session, <%=, c:forEach..."
  },
  lessons: [
    {
      number: 1,
      title: "Web, HTTP, HTML Form & MVC",
      badge: "98 câu",
      summary: "Luồng request/response, GET–POST, URL, form và vai trò MVC.",
      points: [
        { term: "HTTP", text: "Giao thức request–response và stateless; mỗi request độc lập nếu không dùng session/cookie." },
        { term: "GET / POST", text: "GET đọc dữ liệu, tham số thường ở URL; POST gửi dữ liệu trong body và phù hợp thao tác thay đổi." },
        { term: "HTML form", text: "action là URL nhận dữ liệu; method là GET/POST; name tạo tên tham số để server đọc." },
        { term: "URL parts", text: "scheme://host:port/context/servlet/path?query; phân biệt contextPath, servletPath và pathInfo." },
        { term: "MVC", text: "Controller nhận request, Model xử lý dữ liệu, View hiển thị; Servlet thường là Controller, JSP là View." }
      ],
      remember: "Đọc câu hỏi theo luồng: trình duyệt gửi request → controller xử lý → model lấy dữ liệu → view trả response."
    },
    {
      number: 2,
      title: "Servlet API & Lifecycle",
      badge: "114 câu",
      summary: "Vòng đời servlet, request/response, điều hướng và phạm vi dữ liệu.",
      points: [
        { term: "Lifecycle", text: "Container gọi init() một lần → service() mỗi request → destroy() một lần trước khi gỡ servlet." },
        { term: "doGet / doPost", text: "HttpServlet.service() tự phân phối request tới phương thức tương ứng HTTP method." },
        { term: "Parameter / Attribute", text: "Parameter do client gửi và đọc bằng getParameter; attribute do server gắn bằng setAttribute." },
        { term: "Forward / Redirect", text: "forward chạy nội bộ, giữ request; redirect trả 3xx để trình duyệt tạo request mới." },
        { term: "Config / Context", text: "ServletConfig thuộc một servlet; ServletContext dùng chung toàn web application." }
      ],
      remember: "Muốn giữ request attribute thì forward; muốn đổi URL và tạo request mới thì sendRedirect."
    },
    {
      number: 3,
      title: "web.xml, Filter & Listener",
      badge: "86 câu",
      summary: "Cấu hình ứng dụng, ánh xạ URL, tiền/hậu xử lý và bắt sự kiện.",
      points: [
        { term: "web.xml", text: "Deployment descriptor nằm trong WEB-INF; khai báo servlet, mapping, filter, listener, security và error page." },
        { term: "URL mapping", text: "Ghép servlet-name với url-pattern; pattern exact, path /*, extension *.jsp hoặc default /." },
        { term: "Filter", text: "Chặn request/response trước hoặc sau tài nguyên; phải gọi chain.doFilter() nếu muốn đi tiếp." },
        { term: "Listener", text: "Nhận sự kiện tạo/hủy context, session, request hoặc thay đổi attribute; không xử lý URL như filter." },
        { term: "WEB-INF", text: "Client không truy cập trực tiếp tài nguyên trong thư mục này; server vẫn có thể forward tới đó." }
      ],
      remember: "Filter = đi qua chuỗi xử lý; Listener = nghe sự kiện; web.xml = nơi cấu hình và ánh xạ."
    },
    {
      number: 4,
      title: "Session, Cookie & URL Rewriting",
      badge: "32 câu",
      summary: "Duy trì trạng thái giữa nhiều request và chọn đúng phạm vi lưu dữ liệu.",
      points: [
        { term: "HttpSession", text: "Lưu dữ liệu theo một người dùng qua nhiều request; getSession() tạo nếu chưa có, false thì không tạo." },
        { term: "Session lifecycle", text: "invalidate() kết thúc ngay; setMaxInactiveInterval() đặt thời gian không hoạt động tính bằng giây." },
        { term: "Cookie", text: "Cặp name/value lưu phía client; setMaxAge điều khiển thời gian sống, addCookie gửi về trình duyệt." },
        { term: "URL rewriting", text: "Gắn session id vào URL khi cookie không dùng được; ưu tiên response.encodeURL()." },
        { term: "4 scopes", text: "page < request < session < application; chọn phạm vi nhỏ nhất đủ thời gian và đối tượng sử dụng." }
      ],
      remember: "Một request → request scope; nhiều request cùng user → session; toàn ứng dụng → application."
    },
    {
      number: 5,
      title: "JSP Scripting, Directives & Actions",
      badge: "128 câu",
      summary: "Cú pháp JSP, implicit objects, include/forward và JavaBean.",
      points: [
        { term: "<%! ... %>", text: "Declaration tạo field hoặc method ở cấp lớp servlet sinh ra từ JSP." },
        { term: "<% ... %>", text: "Scriptlet chứa lệnh Java chạy trong _jspService(); biến khai báo ở đây là local variable." },
        { term: "<%= ... %>", text: "Expression in giá trị ra response; không đặt dấu chấm phẩy trong biểu thức." },
        { term: "Directive / Action", text: "<%@ include %> ghép lúc dịch; <jsp:include> chạy lúc request; <jsp:forward> chuyển xử lý." },
        { term: "Implicit objects", text: "request, response, session, application, out, config, pageContext, page và exception." }
      ],
      remember: "Thấy đoạn JSP, kiểm tra delimiter trước; sau đó xác định code ở cấp lớp hay trong _jspService()."
    },
    {
      number: 6,
      title: "Expression Language & JSTL",
      badge: "35 câu",
      summary: "Truy cập dữ liệu không dùng scriptlet và chọn đúng tag điều khiển/định dạng.",
      points: [
        { term: "EL ${...}", text: "Đọc bean, map, list và scope; object.property tương đương getter, object[index] dùng cho key/index động." },
        { term: "Scope lookup", text: "Không ghi scope thì EL tìm lần lượt page → request → session → application." },
        { term: "empty", text: "Kiểm tra null, chuỗi rỗng hoặc collection rỗng; dùng eq/ne/and/or cho biểu thức dễ đọc." },
        { term: "JSTL core", text: "c:if cho một nhánh; c:choose/when/otherwise cho nhiều nhánh; c:forEach để lặp." },
        { term: "fmt tags", text: "formatNumber/formatDate để hiển thị; parseNumber/parseDate để chuyển chuỗi thành giá trị." }
      ],
      remember: "JSP hiện đại: Servlet chuẩn bị dữ liệu → setAttribute → JSP đọc bằng EL/JSTL, tránh Java scriptlet trong View."
    },
    {
      number: 7,
      title: "Custom Tags & TLD",
      badge: "39 câu",
      summary: "Khai báo thư viện tag và vòng đời classic/simple tag handler.",
      points: [
        { term: "TLD", text: "Mô tả tag library: uri, tag name, handler class, body-content và attributes." },
        { term: "doStartTag", text: "Trả SKIP_BODY để bỏ body hoặc EVAL_BODY_INCLUDE/EVAL_BODY_BUFFERED để đánh giá body." },
        { term: "doAfterBody", text: "Trả EVAL_BODY_AGAIN để lặp body hoặc SKIP_BODY để kết thúc vòng lặp body." },
        { term: "doEndTag", text: "Trả EVAL_PAGE để tiếp tục JSP hoặc SKIP_PAGE để dừng phần còn lại của trang." },
        { term: "SimpleTag", text: "SimpleTagSupport dùng doTag(); gọi getJspBody().invoke(null) khi muốn chạy body." }
      ],
      remember: "Câu classic tag thường hỏi đúng method + hằng số trả về; SimpleTag gom xử lý vào doTag()."
    },
    {
      number: 8,
      title: "JDBC, DataSource & JavaBeans",
      badge: "35 câu",
      summary: "Kết nối database, chạy SQL an toàn, transaction và cấu trúc bean/DAO.",
      points: [
        { term: "PreparedStatement", text: "SQL có placeholder ?, gán tham số bằng setXxx; an toàn và rõ hơn nối chuỗi SQL." },
        { term: "Query / Update", text: "executeQuery() trả ResultSet cho SELECT; executeUpdate() trả số dòng cho INSERT/UPDATE/DELETE." },
        { term: "Transaction", text: "setAutoCommit(false) → chạy các lệnh → commit; lỗi thì rollback." },
        { term: "Resources", text: "Đóng ResultSet, Statement và Connection; ưu tiên try-with-resources để luôn giải phóng." },
        { term: "JavaBean / DAO", text: "Bean có constructor rỗng, property qua getter/setter; DAO tách logic truy cập dữ liệu khỏi servlet/JSP." }
      ],
      remember: "SELECT → executeQuery/ResultSet; thay đổi dữ liệu → executeUpdate; nhiều lệnh cùng nghiệp vụ → transaction."
    }
  ]
};
