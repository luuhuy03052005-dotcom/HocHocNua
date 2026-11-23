window.PRJ301_STUDY = {
  meta: {
    course: "PRJ301",
    title: "PRJ301 — Kiến thức cốt lõi",
    source: "Tổng hợp từ 567 câu PRJ301",
    lessonCount: 8,
    questionCount: 567,
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
  ]
};
