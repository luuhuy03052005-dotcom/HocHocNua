window.PRJ301_STUDY_EXTRA = {
  meta: {
    title: "Kiến thức nền và mẹo làm 567 câu PRJ301",
    basedOnQuestions: 567
  },
  studyPath: [
    "Nắm luồng Browser → HTTP → Servlet → Service/DAO → JSP → Response.",
    "Học 8 Lesson theo cặp: khái niệm và dấu hiệu nhận diện trong câu hỏi.",
    "Thuộc các bảng cú pháp, scope, lifecycle và giá trị trả về thường bị tráo.",
    "Luyện theo cụm 10 câu; sai câu nào quay lại đúng Lesson và quy tắc phản xạ.",
    "Thi thử câu đã học, ưu tiên ôn câu sai và câu còn phân vân trước khi mở cụm mới."
  ],
  examTips: [
    { title: "Nhìn delimiter trước", text: "Với JSP, xác định <%! declaration, <% scriptlet, <%= expression, <%@ directive trước khi đọc logic." },
    { title: "Nhớ đúng chủ thể", text: "Client gửi parameter; server gắn attribute; container gọi lifecycle method; browser tạo request mới khi redirect." },
    { title: "So phạm vi sống", text: "page < request < session < application. Chọn scope nhỏ nhất vẫn đáp ứng tình huống." },
    { title: "Forward hay redirect", text: "Cần giữ request/attribute → forward. Cần URL mới/request mới → sendRedirect." },
    { title: "Query hay update", text: "SELECT → executeQuery + ResultSet. INSERT/UPDATE/DELETE → executeUpdate + số dòng." },
    { title: "NOT / EXCEPT", text: "Đánh dấu từ phủ định, kiểm tra từng lựa chọn đúng/sai rồi chọn phương án nằm ngoài nhóm." },
    { title: "Đọc code theo vòng đời", text: "Xác định code ở cấp class, init, mỗi request hay destroy; đừng suy luận chỉ từ tên method." }
  ],
  numberFacts: [
    { label: "Servlet lifecycle", value: "3: init → service → destroy" },
    { label: "JSP scopes", value: "4: page → request → session → application" },
    { label: "JSP scripting forms", value: "3: declaration, scriptlet, expression" },
    { label: "Classic tag flow", value: "start → body → afterBody → end" },
    { label: "JDBC transaction", value: "autoCommit(false) → commit / rollback" },
    { label: "Session tracking", value: "Cookie, URL rewriting, hidden field, HttpSession" }
  ],
  foundationModules: [
    {
      title: "Luồng xử lý một request",
      summary: "Biết dữ liệu đi đâu và lớp nào chịu trách nhiệm.",
      terms: [
        { term: "Browser", meaning: "Gửi HTTP request và nhận response." },
        { term: "Servlet / Controller", meaning: "Đọc input, kiểm tra luồng, gọi nghiệp vụ và chọn View." },
        { term: "Service / DAO", meaning: "Service xử lý nghiệp vụ; DAO làm việc với database." },
        { term: "JSP / View", meaning: "Đọc attribute bằng EL/JSTL và chỉ tập trung hiển thị." }
      ],
      tips: [
        "Parameter đi từ browser vào; attribute do server tạo để chuyển dữ liệu nội bộ.",
        "Controller không nên viết HTML dài; JSP không nên chứa JDBC hoặc nghiệp vụ."
      ]
    },
    {
      title: "Chọn đúng scope",
      summary: "Ai dùng dữ liệu và dữ liệu cần sống bao lâu?",
      terms: [
        { term: "page", meaning: "Chỉ trong một JSP hiện tại." },
        { term: "request", meaning: "Một chuỗi xử lý cùng request, kể cả forward." },
        { term: "session", meaning: "Nhiều request của cùng một user." },
        { term: "application", meaning: "Dùng chung toàn web app cho mọi user." }
      ],
      tips: [
        "Danh sách kết quả để mở JSP ngay → request.",
        "Giỏ hàng/login của từng người → session; cấu hình dùng chung → application."
      ]
    },
    {
      title: "Bảng cú pháp dễ nhầm",
      summary: "Nhìn ký hiệu là xác định được loại code.",
      terms: [
        { term: "<%! ... %>", meaning: "Field/method cấp class." },
        { term: "<% ... %>", meaning: "Java statement trong _jspService()." },
        { term: "<%= ... %>", meaning: "In expression; không có dấu ; trong expression." },
        { term: "${...}", meaning: "Expression Language đọc attribute/property." },
        { term: "<%@ ... %>", meaning: "Directive xử lý ở giai đoạn dịch JSP." }
      ],
      tips: [
        "Method không được khai báo bên trong scriptlet như một local method Java.",
        "EL property name gọi getter tương ứng: ${user.name} → getName()."
      ]
    },
    {
      title: "Vòng đời và người gọi",
      summary: "Container gọi method nào, bao nhiêu lần?",
      terms: [
        { term: "Servlet", meaning: "init một lần; service mỗi request; destroy một lần." },
        { term: "Filter", meaning: "doFilter mỗi request khớp mapping; chain.doFilter cho đi tiếp." },
        { term: "Listener", meaning: "Callback khi context/session/request hoặc attribute đổi trạng thái." },
        { term: "JSP", meaning: "Dịch thành servlet; _jspService xử lý request." },
        { term: "Custom tag", meaning: "Classic tag theo start/body/end; SimpleTag dùng doTag." }
      ],
      tips: [
        "Câu hỏi ‘called once’ thường hướng tới init/destroy, không phải service/doGet/doPost.",
        "Filter có thể xử lý cả trước và sau chain.doFilter()."
      ]
    },
    {
      title: "JDBC và transaction",
      summary: "Chọn API theo loại SQL và bảo toàn dữ liệu.",
      terms: [
        { term: "DataSource", meaning: "Nguồn Connection, thường hỗ trợ pooling và cấu hình bên ngoài code." },
        { term: "PreparedStatement", meaning: "SQL tham số hóa bằng ?, giảm lỗi và SQL injection." },
        { term: "ResultSet", meaning: "Con trỏ kết quả SELECT; gọi next() trước khi đọc cột." },
        { term: "commit / rollback", meaning: "Xác nhận toàn bộ hoặc hoàn tác transaction khi lỗi." },
        { term: "try-with-resources", meaning: "Tự đóng tài nguyên JDBC kể cả khi có exception." }
      ],
      tips: [
        "Không ghép input người dùng trực tiếp vào SQL.",
        "Nhiều thay đổi phải cùng thành công → tắt auto-commit và rollback khi lỗi."
      ]
    }
  ],
  lessonSupplements: {
    "1": {
      terms: [
        ["stateless", "HTTP không tự nhớ request trước"],
        ["idempotent", "Lặp lại cùng request vẫn có cùng tác động mong đợi"],
        ["context path", "Đường dẫn nhận diện web application"],
        ["query string", "Phần sau ? chứa tham số URL"]
      ],
      tips: ["Đọc HTTP method, nơi chứa dữ liệu và mục tiêu request trước.", "MVC: Servlet điều phối, JSP hiển thị, model/DAO xử lý dữ liệu."],
      traps: ["POST không tự động mã hóa hay bảo mật; HTTPS mới bảo vệ đường truyền.", "GET không phù hợp dữ liệu nhạy cảm vì tham số thường hiện trên URL."]
    },
    "2": {
      terms: [
        ["getParameter", "Đọc dữ liệu client gửi"],
        ["getAttribute", "Đọc object server đã gắn"],
        ["RequestDispatcher", "forward/include nội bộ server"],
        ["sendRedirect", "Yêu cầu browser gửi request mới"]
      ],
      tips: ["init không chạy cho mọi request; service mới là điểm phân phối request.", "Context dùng chung app, Config riêng từng servlet."],
      traps: ["Redirect không giữ request attribute.", "Servlet có nhiều thread; tránh dùng instance field cho dữ liệu từng request."]
    },
    "3": {
      terms: [
        ["url-pattern", "Mẫu URL được ánh xạ"],
        ["FilterChain", "Chuỗi filter và tài nguyên đích"],
        ["Listener", "Callback theo sự kiện vòng đời"],
        ["WEB-INF", "Vùng không truy cập trực tiếp từ client"]
      ],
      tips: ["Authentication/logging/encoding thường là filter.", "Khởi tạo tài nguyên dùng chung khi app start thường là context listener."],
      traps: ["Không gọi chain.doFilter thì request có thể dừng tại filter.", "Listener không thay thế servlet mapping."]
    },
    "4": {
      terms: [
        ["getSession(false)", "Lấy session hiện có, không tạo mới"],
        ["invalidate", "Kết thúc toàn bộ session"],
        ["setMaxAge", "Tuổi thọ cookie tính bằng giây"],
        ["encodeURL", "Thêm session id vào URL khi cần"]
      ],
      tips: ["Đăng xuất → invalidate; xóa một dữ liệu → removeAttribute.", "Giỏ hàng mỗi user thường ở session."],
      traps: ["Cookie ở client, session data chủ yếu ở server.", "Session timeout là thời gian không hoạt động, không phải tổng thời gian đăng nhập cố định."]
    },
    "5": {
      terms: [
        ["declaration", "<%! field hoặc method %>"],
        ["scriptlet", "<% Java statements %>"],
        ["expression", "<%= value %>"],
        ["page directive", "import, errorPage, session, contentType..."],
        ["jsp:useBean", "Tìm hoặc tạo bean theo id/scope"]
      ],
      tips: ["Include directive là static/translation time; jsp:include là dynamic/request time.", "exception chỉ có ở error page khai báo isErrorPage=true."],
      traps: ["Expression không đặt dấu ;.", "Biến local trong scriptlet phải khởi tạo trước khi dùng như Java bình thường."]
    },
    "6": {
      terms: [
        ["pageScope/requestScope", "Truy cập scope tường minh"],
        ["param", "Map tham số request"],
        ["empty", "null/rỗng"],
        ["c:forEach", "Lặp collection hoặc khoảng số"],
        ["c:choose", "Nhiều nhánh điều kiện"]
      ],
      tips: ["Tên trùng nhau ở nhiều scope → EL lấy scope gần nhất.", "Dùng [] khi key động hoặc có ký tự không hợp lệ cho dot notation."],
      traps: ["c:if không có nhánh else; dùng c:choose.", "format là hiển thị, parse là chuyển chuỗi sang kiểu dữ liệu."]
    },
    "7": {
      terms: [
        ["TLD", "Khai báo thư viện và metadata của tag"],
        ["SKIP_BODY", "Không đánh giá body"],
        ["EVAL_BODY_AGAIN", "Lặp lại body"],
        ["EVAL_PAGE", "Tiếp tục phần còn lại JSP"],
        ["doTag", "Entry point của SimpleTag"]
      ],
      tips: ["Câu hỏi method nào → xác định đang ở start, after body hay end.", "SimpleTag không dùng bộ hằng số lifecycle y hệt classic tag."],
      traps: ["SKIP_BODY và SKIP_PAGE tác động khác nhau.", "URI trong taglib directive phải khớp khai báo thư viện, không nhất thiết là URL internet."]
    },
    "8": {
      terms: [
        ["PreparedStatement", "SQL có placeholder và bind parameter"],
        ["executeQuery", "SELECT → ResultSet"],
        ["executeUpdate", "DML → số dòng"],
        ["rollback", "Hoàn tác transaction"],
        ["JavaBean property", "Truy cập qua getter/setter"]
      ],
      tips: ["Gọi ResultSet.next() trước khi đọc bản ghi.", "DAO nhận/trả object, Servlet điều phối, JSP chỉ trình bày."],
      traps: ["executeQuery không dành cho INSERT/UPDATE/DELETE.", "Đóng Connection quá sớm trước khi đọc ResultSet có thể làm kết quả không dùng được."]
    }
  },
  sources: [
    { title: "Ngân hàng 567 câu PRJ301", url: "PRJ301_Questions_Answers/index.html" }
  ]
};
