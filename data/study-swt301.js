window.SWT301_STUDY = {
  "meta": {
    "course": "SWT301",
    "title": "Kiến thức dễ hiểu, Mẹo gỡ rối & Phân biệt câu SWT301",
    "description": "Giải thích bình dân đọc hiểu ngay cho mọi dạng Testing/Analysis, từ khóa auto chọn/gạch và 30 nhóm câu dễ nhầm trong 367 câu.",
    "questionCount": 367,
    "source": "Software Testing — Semester 5",
    "knowledgeOnly": true,
    "searchPlaceholder": "Tìm nhanh: Unit, Integration, Load, Stress, Regression, Static analysis...",
    "recallPlaceholder": "Ví dụ: verification, validation, inspection, decision table...",
    "distinctionsPlaceholder": "Ví dụ: static analysis, Test Plan, branch coverage, exit criteria, stop testing..."
  },
  "lessons": [],
  "chapters": [
    {
      "number": 1,
      "title": "Chương 1: Khái niệm gốc & 7 Nguyên lý (Hiểu trong 2 phút)",
      "badge": "108 câu",
      "flow": "Người nhầm (Error) ➔ Sinh ra bug nằm trong code (Defect/Fault) ➔ Chạy app văng lỗi trước mặt khách (Failure)",
      "concepts": [
        {
          "term": "Error vs Defect (Fault) vs Failure & Testing vs Debugging",
          "what": "Phân biệt ai làm sai, cái gì sai và ai đi sửa.",
          "bullets": [
            "Error: Con người lỡ nhầm ➔ Defect/Fault: Lỗi nằm trong code/tài liệu ➔ Failure: Lỗi phát tác khi đang chạy app.",
            "Fault Masking: Lỗi này che khuất làm không thấy lỗi kia.",
            "Testing (Tester): Chạy để TÌM ra lỗi & báo mức độ rủi ro · Debugging (Dev): Mở code ra SỬA lỗi."
          ],
          "qIds": [
            4,
            27,
            69,
            97,
            99,
            185,
            262,
            268,
            327
          ]
        },
        {
          "term": "Verification vs Validation & QA vs QC",
          "what": "2 cặp khái niệm cực hay bị đề tráo chữ.",
          "bullets": [
            "Verification = Làm ĐÚNG như bản thiết kế chưa ('building product right', gồm Review/Inspection).",
            "Validation = App làm ra có ĐÚNG thứ người dùng cần không ('built the right product').",
            "QA = Giữ chuẩn quy trình · QC = Soi chất lượng sản phẩm."
          ],
          "qIds": [
            6,
            7,
            53,
            136,
            207,
            306
          ]
        },
        {
          "term": "7 Nguyên lý nghề Test & Tâm lý làm việc với Dev",
          "what": "Tại sao không thể test sạch 100% và tại sao Dev không nên tự test?",
          "bullets": [
            "Không thể test vét cạn mọi trường hợp (Exhaustive is impossible) & không thể chứng minh app sạch 100% bug ➔ Phải ưu tiên chỗ RỦI RO CAO trước.",
            "Test càng sớm sửa càng rẻ (Early testing — lỗi ở Requirements sửa đắt nhất nếu để lọt!).",
            "Pesticide paradox: Xài mãi bộ test cũ sẽ nhờn, không bắt được lỗi mới.",
            "Dev thiếu khách quan với code mình đẻ ra ('Lack of Objectivity') ➔ Cần Tester độc lập, báo bug lịch sự mang tính xây dựng."
          ],
          "qIds": [
            5,
            116,
            122,
            124,
            162,
            255,
            283,
            284,
            292,
            329,
            330,
            331
          ]
        }
      ],
      "questionPatterns": [
        {
          "type": "Mẹo bắt câu hỏi gài chữ NOT / EXCEPT ở Chương 1",
          "cue": "Không thuộc mục tiêu test ➔ Debugging · Không phải nguyên lý ➔ Exhaustive testing · Không thuộc chuẩn chất lượng ISO 9126 / Testability ➔ Supportability, Development cost, Robustness.",
          "qIds": [
            21,
            27,
            30,
            31,
            48,
            68
          ]
        }
      ]
    },
    {
      "number": 2,
      "title": "Chương 2: Phân biệt sạch sành sanh các dạng '... Testing' (Tưởng tượng xây 1 con App)",
      "badge": "67 câu",
      "flow": "Test lẻ 1 hàm (Unit) ➔ Ráp nối các phần (Integration) ➔ Chạy nguyên con app (System) ➔ Khách nghiệm thu nhận hàng (Acceptance)",
      "concepts": [
        {
          "term": "4 Cấp độ ráp App: Unit ➔ Integration ➔ System ➔ Acceptance",
          "what": "Đi từ mảnh nhỏ nhất đến lúc giao tận tay khách hàng.",
          "bullets": [
            "Unit / Component: Test lẻ 1 hàm/class đứng riêng ('single/individual unit, isolated').",
            "Integration: Test MỐI NỐI giữa các phần ('interfaces & interaction'). Ráp từ đáy lên = Bottom-up (dùng Driver giả thằng gọi); ráp từ trên xuống = Top-down (dùng Stub giả thằng bị gọi); gom hết quăng vào 1 lần = Big-bang.",
            "System: Ráp xong test NGUYÊN HỆ THỐNG ('entire system'), gồm cả tính năng lẫn tốc độ/bảo mật.",
            "Acceptance: Khách nghiệm thu theo nhu cầu kinh doanh ('business requirements'). Alpha = test ở công ty Dev; Beta/Field = mang về nhà khách."
          ],
          "qIds": [
            1,
            17,
            51,
            63,
            84,
            89,
            111,
            130,
            145,
            155,
            164,
            343
          ]
        },
        {
          "term": "Chức năng vs Phi chức năng: Usability · Performance · Load · Stress",
          "what": "Làm được việc gì (Functional) khác với Chạy mượt cỡ nào (Non-functional).",
          "bullets": [
            "Functional: App có tính đúng tiền, đăng nhập được không? · Non-functional: Chạy nhanh, an toàn, dễ bấm cỡ nào?.",
            "Usability = giao diện dễ xài · Performance = độ nhanh mượt.",
            "Load testing = cho khách vào mức BÌNH THƯỜNG DỰ KIẾN ('varying workloads') · Stress testing = nhồi VƯỢT QUÁ SỨC CHỊU ĐỰNG ('limitations exceeded')."
          ],
          "qIds": [
            12,
            66,
            79,
            81,
            85,
            100,
            150,
            234,
            248,
            305
          ]
        },
        {
          "term": "Sau khi sửa code: Confirmation (Re-test) vs Regression vs Impact Analysis",
          "what": "Sửa xong 1 con bug thì phải làm 2 việc khác nhau:",
          "bullets": [
            "Confirmation (Re-testing): Chạy lại ĐÚNG con bug vừa sửa xem hết bệnh thật chưa ('confirm defect fixed').",
            "Regression testing: Đi kiểm tra CÁC CHỖ CŨ KHÔNG SỬA ('unchanged areas') xem có bị vạ lây hỏng theo không.",
            "Impact Analysis: Ngồi tính xem vết sửa này lan rộng cỡ nào để biết cần test Regression nhiều hay ít ('how much regression testing')."
          ],
          "qIds": [
            62,
            94,
            166,
            257,
            276,
            291,
            332,
            335,
            350
          ]
        }
      ],
      "questionPatterns": [
        {
          "type": "Siêu bẫy câu vs về 'Performance testing'",
          "cue": "Hỏi 'Which IS non-functional?' ➔ Performance testing. Hỏi 'What is NOT test type?' ➔ CŨNG chọn Performance testing (vì nó chỉ là nhánh con nằm trong Non-functional)!",
          "qIds": [
            12,
            81
          ]
        }
      ]
    },
    {
      "number": 3,
      "title": "Chương 3: Đọc nguội không chạy code — Review & Static Analysis",
      "badge": "52 câu",
      "flow": "Informal (Ngó hộ) ➔ Walkthrough (Tác giả tự dẫn) ➔ Technical/Peer (Chuyên gia soi, cấm Sếp) ➔ Inspection (Moderator cầm trịch, gắt nhất)",
      "concepts": [
        {
          "term": "4 Kiểu họp Review & Ai làm gì trong phòng họp?",
          "what": "Soi lỗi tài liệu/code bằng mắt trước khi bấm chạy app.",
          "bullets": [
            "Informal: Xem nhanh giá rẻ, không biên bản · Walkthrough: TÁC GIẢ (Author) tự trình bày kịch bản để chia sẻ & xin góp ý.",
            "Technical / Peer Review: Anh em chuyên gia tự soi kỹ thuật, KHÔNG có Sếp (Management) ngồi dự.",
            "Inspection: Căng nhất — có MODERATOR chuyên nghiệp điều hành & hòa giải, có SCRIBE ngồi chép biên bản lỗi, dùng Checklist."
          ],
          "qIds": [
            70,
            82,
            98,
            129,
            132,
            133,
            148,
            223,
            254,
            260,
            279,
            307
          ]
        },
        {
          "term": "Static Analysis vs Dynamic Analysis (Tại sao hay nhầm Memory Leak?)",
          "what": "Quét code lúc chưa chạy khác với theo dõi RAM lúc đang chạy.",
          "bullets": [
            "Static Analysis: Giống cảnh sát bắt lỗi chính tả code (code thừa unreachable, biến chưa tạo, sai chuẩn trình bày) — KHÔNG chạy app nên KHÔNG đo được độ phủ code và KHÔNG bắt được tràn RAM.",
            "Dynamic Analysis: Bật app chạy thật để rình bắt rò rỉ bộ nhớ."
          ],
          "qIds": [
            16,
            44,
            59,
            73,
            88,
            120,
            141,
            325,
            336,
            355,
            356
          ]
        }
      ],
      "questionPatterns": [
        {
          "type": "Đừng lộn bước Planning với bước Kick-off của buổi Review",
          "cue": "Chọn người & chia vai ('allocating roles') = Planning · Giải thích mục tiêu tài liệu ('explaining objective') = Kick-off. Luôn nhớ Planning đứng đầu tiên!",
          "qIds": [
            46,
            77,
            156,
            214,
            274,
            275
          ]
        }
      ]
    },
    {
      "number": 4,
      "title": "Chương 4: Cách chế Test Case & Mẹo nhẩm bài tính số Test",
      "badge": "54 câu",
      "flow": "Hộp đen không nhìn code (Chia khúc EP, Sát mép BVA, Bảng điều kiện, Đổi trạng thái, Kịch bản) · Hộp trắng soi code (Statement, Branch, Path)",
      "concepts": [
        {
          "term": "5 Chiêu Hộp đen (Black-box): EP · BVA · Decision Table · State · Use Case",
          "what": "Không cần biết code bên trong, chỉ nhìn đề bài để chọn số test khôn ngoan.",
          "bullets": [
            "Equivalence Partitioning (EP): Chia thành từng khúc đúng/sai, mỗi khúc nhặt ĐÚNG 1 SỐ đại diện (ví dụ 10..21 lấy 3, 10, 22).",
            "Boundary Value (BVA): Bắt lỗi ngay mép ranh giới (10..21 thì lấy sát mép: 9, 10, 21, 22).",
            "Decision Table: Ghép NHIỀU ĐIỀU KIỆN lại ('combinations of inputs') · State Transition: Soi ĐỔI TRẠNG THÁI ('changes in state') · Use Case: Theo LUỒNG NGƯỜI DÙNG THẬT ('process flows / real-world use')."
          ],
          "qIds": [
            56,
            90,
            176,
            180,
            181,
            239,
            252,
            261,
            351,
            361
          ]
        },
        {
          "term": "Hộp trắng (White-box) & Đoán lỗi kinh nghiệm (Error Guessing / Exploratory)",
          "what": "Đếm dòng code lệnh IF và ứng biến khi thiếu tài liệu.",
          "bullets": [
            "IF không có ELSE ➔ chỉ cần 1 test Statement, 2 test Branch. IF CÓ ELSE ➔ cần 2 test Statement, 2 test Branch. Hỏi Paths của 2 IF rời ➔ 2 × 2 = 4.",
            "Cyclomatic Complexity = L - N + 2P.",
            "Error Guessing = đoán lỗi sau khi đã test chuẩn · Exploratory = vừa mò vừa chạy test cùng lúc khi GẤP & thiếu tài liệu."
          ],
          "qIds": [
            28,
            105,
            169,
            170,
            216,
            219,
            225,
            226,
            236,
            272,
            294,
            322,
            353
          ]
        }
      ],
      "questionPatterns": [
        {
          "type": "Bẫy 1 chữ chết người: 'Decision table' vs 'Decision testing' & bài",
          "cue": "'Decision TABLE' là Black-box, còn 'Decision TESTING' là White-box! Ở câu code y hệt nhưng đề bảo ĐÃ ĐỦ 100% rồi hỏi cần THÊM bao nhiêu ('How many MORE') ➔ chọn None!",
          "qIds": [
            28,
            90,
            170,
            353
          ]
        }
      ]
    },
    {
      "number": 5,
      "title": "Chương 5: Quản lý Test, Rủi ro, Mức độ lỗi & Khi nào nghỉ Test",
      "badge": "68 câu",
      "flow": "Leader (Quản lý) ≠ Tester (Thực thi) · Project Risk (Người/Lịch) ≠ Product Risk (App lỗi) · Severity (Hỏng nặng) ≠ Priority (Sửa gấp)",
      "concepts": [
        {
          "term": "Leader vs Tester, Test Plan & Khi nào được dừng Test?",
          "what": "Ai làm việc nấy và nguyên tắc chốt điểm dừng.",
          "bullets": [
            "Leader làm việc với hãng bán tool & viết báo cáo tổng kết · Tester viết Test Spec, chuẩn bị Data & bấm chạy test.",
            "Test Plan là kế hoạch tổng thể nên KHÔNG nhét chi tiết nhỏ như Expected results, Test scripts, Test spec hay Quality plans.",
            "Dừng test khi nào? Nhìn đáp án theo thứ tự ưu tiên: (1) Phụ thuộc Rủi ro ➔ (2) Đạt tiêu chí hoàn thành ➔ (3) Hết giờ."
          ],
          "qIds": [
            15,
            23,
            144,
            193,
            195,
            199,
            210,
            298,
            363,
            364
          ]
        },
        {
          "term": "Project vs Product Risk · Severity vs Priority · Quản lý phiên bản (CM)",
          "what": "3 cặp khái niệm quản lý đi thi cực hay hỏi.",
          "bullets": [
            "Project Risk = rắc rối con người, tổ chức, lịch trình, nhà cung cấp ≠ Product Risk = bản thân con app viết dởm, hay lỗi.",
            "Severity = lỗi phá hệ thống NẶNG cỡ nào ≠ Priority = cần SỬA GẤP trước hay sau. Phiếu báo bug KHÔNG viết lời giải sửa code.",
            "Configuration Management (CM): Giữ đúng phiên bản code & bộ test như Git."
          ],
          "qIds": [
            14,
            19,
            24,
            26,
            67,
            95,
            137,
            163,
            270,
            278,
            367
          ]
        }
      ],
      "questionPatterns": [
        {
          "type": "Bẫy dự án trễ 6 tuần, cấm dời ngày giao & cấm giảm chất lượng",
          "cue": "Đừng chọn tuyển thêm người hay bắt tăng ca (càng thêm bug)! Đáp án chuẩn duy nhất là cắt bớt tính năng chưa làm ('Eliminate some of the requirements').",
          "qIds": [
            201,
            212,
            316
          ]
        }
      ]
    },
    {
      "number": 6,
      "title": "Chương 6: Các loại Tool kiểm thử — Đừng râu ông nọ cắm cằm bà kia!",
      "badge": "18 câu",
      "flow": "Tìm tool: Xem mình cần gì trước ➔ Mua về: Cho 1 nhóm nhỏ xài thử Pilot ➔ Cấm quăng vào dự án đang trễ lịch!",
      "concepts": [
        {
          "term": "Nhớ đúng nghề của từng Tool (Chỉ 1 dòng mỗi loại)",
          "what": "Mỗi tool chỉ giỏi đúng việc của nó, không làm thay người được hết.",
          "bullets": [
            "Requirements tool: Lưu yêu cầu, kiểm tra mâu thuẫn & nối dây truy vết.",
            "Test management tool: Lên lịch, quản lý tiến độ & log sự cố.",
            "Test design tool: Phụ đẻ ra test case.",
            "Test execution / Capture-Playback: Tự bấm chạy lại test — tiết kiệm tiền nhất, cực ngon để CHẠY Regression, nhưng KHÔNG tự nghĩ ra đáp án đúng!"
          ],
          "qIds": [
            10,
            11,
            80,
            87,
            91,
            102,
            109,
            157,
            238,
            295,
            352
          ]
        }
      ],
      "questionPatterns": [
        {
          "type": "Cặp câu Mua Tool mới",
          "cue": "Mới ĐỊNH tìm tool ➔ Phân tích nhu cầu của mình trước ('Analyze your needs') · ĐÃ MUA về rồi ➔ Đưa 1 nhóm nhỏ xài thử ('A small team').",
          "qIds": [
            20,
            168,
            189,
            190,
            299
          ]
        }
      ]
    }
  ],
  "conceptBank": [
    {
      "id": "error-mistake",
      "term": "Error / Mistake (Con người nhầm lẫn)",
      "what": "Lập trình viên hoặc BA lỡ tay gõ nhầm, hiểu nhầm trong đầu.",
      "points": [
        "Con người nhầm (Error) ➔ tạo ra Bug nằm trong code (Defect/Fault) ➔ chạy app bị lỗi (Failure)."
      ],
      "triggers": [
        "an error",
        "a mistake",
        "mistakes of the requirement",
        "mistake made by a developer"
      ],
      "qIds": [
        97,
        268,
        301
      ]
    },
    {
      "id": "defect-fault-bug",
      "term": "Defect / Fault / Bug (Lỗi nằm trong code/tài liệu)",
      "what": "Chỗ viết sai đang nằm im trong code hoặc trong tài liệu yêu cầu.",
      "points": [
        "Hay phát sinh nhất ở khâu lấy Yêu cầu (Requirements) và để càng muộn về lúc chạy thật thì sửa càng tốn tiền."
      ],
      "triggers": [
        "a fault",
        "a defect",
        "faults in requirements",
        "cost of fixing a fault",
        "defects are recorded"
      ],
      "qIds": [
        4,
        9,
        118,
        122,
        283,
        349,
        360
      ]
    },
    {
      "id": "failure",
      "term": "Failure (Sự cố đập vào mắt người dùng)",
      "what": "App đang chạy mà văng lỗi, tính sai tiền hoặc đứng hình trước mặt người dùng.",
      "points": [
        "Chỉ gọi là Failure khi ĐANG CHẠY thực tế (in operation / visible to end-users). App đáng tin (reliable) là app ít bị failure."
      ],
      "triggers": [
        "a failure",
        "\"failure\"",
        "reason for a failure",
        "visible to end-users is a deviation",
        "cause a failure",
        "extemal failure",
        "external failure"
      ],
      "qIds": [
        97,
        123,
        185,
        268,
        313
      ]
    },
    {
      "id": "fault-masking",
      "term": "Fault Masking (Lỗi này che mắt lỗi kia)",
      "what": "Có 2 lỗi cùng chỗ nhưng lỗi A làm văng sớm khiến mình không nhìn thấy lỗi B phía sau.",
      "points": [
        "Chốt cụm: 'Error condition hiding another error condition'."
      ],
      "triggers": [
        "fault masking"
      ],
      "qIds": [
        327
      ]
    },
    {
      "id": "testing-objectives",
      "term": "Testing vs Debugging (Test khác Gỡ code thế nào?)",
      "what": "Testing (Tester làm) là chạy thử để VẠCH RA chỗ có lỗi; còn Debugging (Dev làm) là MỞ CODE SỬA lỗi đó.",
      "points": [
        "Trước khi tung sản phẩm ra (release), test chủ yếu để đánh giá rủi ro xem dám phát hành chưa ('risk based decision')."
      ],
      "triggers": [
        "testing objectives",
        "objectives for software testing",
        "best definition for testing",
        "software testing is necessary",
        "testing does not help",
        "debugging",
        "de-bugging"
      ],
      "qIds": [
        9,
        27,
        43,
        55,
        60,
        69,
        99,
        179,
        258,
        262,
        277,
        301,
        358,
        359
      ]
    },
    {
      "id": "quality-qa-qc",
      "term": "QA vs QC & Quality (Đảm bảo vs Kiểm soát chất lượng)",
      "what": "Quality là làm đúng yêu cầu ('Conformance to requirements'). QA lo giữ chuẩn QUY TRÌNH, còn QC đi soi lỗi SẢN PHẨM.",
      "points": [
        "Bẫy hay gặp: Câu lấy việc 'so sánh chất lượng sản phẩm' (của QC) gán cho QA nên là Sai (False)!"
      ],
      "triggers": [
        "quality assurance",
        "definition of quality",
        "software quality is not relevant",
        "better development methods"
      ],
      "qIds": [
        6,
        128,
        136,
        142,
        306
      ]
    },
    {
      "id": "iso-9126-testability",
      "term": "ISO 9126 & Testability (6 tiêu chí chất lượng phần mềm)",
      "what": "Bộ chuẩn đo phần mềm tốt gồm 6 mặt: Chức năng, Tin cậy, Dễ dùng, Hiệu quả, Dễ bảo trì, Dễ di chuyển.",
      "points": [
        "Gạt bỏ ngay các chữ ngoại lai: Supportability, Development cost, Viability, Robustness."
      ],
      "triggers": [
        "iso 9126",
        "testability",
        "software characteristics",
        "supportability",
        "maintainability",
        "reliability"
      ],
      "qIds": [
        30,
        48,
        68,
        142,
        172
      ]
    },
    {
      "id": "verification-vs-validation",
      "term": "Verification vs Validation (Đúng thiết kế vs Đúng ý khách)",
      "what": "Verification = Làm ĐÚNG bản vẽ thiết kế chưa? ('building product right'). Validation = Cái làm ra có ĐÚNG thứ khách cần xài không? ('built the right product').",
      "points": [
        "Review / Inspection thuộc Verification. Còn IV&V là thuê bên độc lập ngoài dự án vào kiểm chứng."
      ],
      "triggers": [
        "verification",
        "validation"
      ],
      "qIds": [
        7,
        53,
        57,
        207,
        334
      ]
    },
    {
      "id": "exhaustive-complete-testing",
      "term": "Exhaustive Testing (Test vét cạn 100% mọi trường hợp)",
      "what": "Thử sạch sành sanh mọi kiểu nhập liệu trên đời — điều này là BẤT KHẢ THI ngoài thực tế!",
      "points": [
        "Vì không thể test hết mọi thứ nên phải ưu tiên test chỗ RỦI RO CAO trước ('risks and priorities' / 'best testing in time available')."
      ],
      "triggers": [
        "exhaustive testing",
        "complete testing",
        "remove all defects",
        "testing shows presence of defects",
        "test are prioritized",
        "prioritized"
      ],
      "qIds": [
        5,
        31,
        116,
        134,
        162,
        290,
        329,
        331,
        339,
        345
      ]
    },
    {
      "id": "seven-principles",
      "term": "7 Nguyên lý Kiểm thử (Quy luật gốc của nghề Test)",
      "what": "Test chỉ chứng minh CÓ lỗi chứ không chứng minh SẠCH lỗi; phải test từ SỚM (Early testing) cho đỡ tốn tiền sửa.",
      "points": [
        "Pesticide paradox (nhờn thuốc): Chạy đi chạy lại mãi 1 bộ test cũ thì không bắt thêm được bug mới · Defect clustering: Bug hay tụ tập ở vài module nhất định."
      ],
      "triggers": [
        "testing principle",
        "early testing",
        "pesticide paradox",
        "defect clustering",
        "context in testing",
        "early test design"
      ],
      "qIds": [
        31,
        200,
        220,
        250,
        255,
        258,
        267,
        303,
        329,
        330,
        331
      ]
    },
    {
      "id": "fundamental-test-process",
      "term": "5 Pha làm Kiểm thử (Từ lên kế hoạch đến đóng dự án)",
      "what": "Lập kế hoạch (Planning) ➔ Phân tích & Thiết kế (Analysis & Design) ➔ Chuẩn bị & Chạy test (Implementation & Execution) ➔ Đánh giá tiêu chí dừng ➔ Đóng dự án (Closure).",
      "points": [
        "Móc khóa dễ nhầm: Chốt tiêu chí dừng = Planning · Đọc tài liệu & THIẾT KẾ môi trường = Analysis & Design · Dựng môi trường, gom bộ test & báo bug = Implementation & Execution · Bàn giao/cất giữ tài liệu = Closure."
      ],
      "triggers": [
        "fundamental test process",
        "planning and control",
        "test analysis and design",
        "test implementation and execution",
        "evaluating exit criteria",
        "test closure"
      ],
      "qIds": [
        29,
        38,
        83,
        107,
        113,
        114,
        121,
        131,
        165,
        194,
        211,
        213,
        271,
        280,
        281,
        308,
        341
      ]
    },
    {
      "id": "testware-ieee829-specs",
      "term": "Các loại tài liệu Test: Case vs Procedure vs Scenario vs Suite",
      "what": "Mỗi tên chỉ khác nhau đúng 1 chức năng: Case = Đầu vào + Kết quả mong đợi; Procedure = Các bước bấm chạy; Scenario = Luồng từ đầu tới cuối; Suite = Gom nhóm để lên lịch chạy.",
      "points": [
        "Kết quả mong đợi (Expected results) bắt buộc phải ghi rõ TRƯỚC khi bấm chạy test!"
      ],
      "triggers": [
        "test case specification",
        "test design specification",
        "test procedure specification",
        "test scenario",
        "test suite",
        "test conditions",
        "expected results",
        "testware"
      ],
      "qIds": [
        52,
        74,
        143,
        151,
        153,
        323,
        337,
        344,
        347
      ]
    },
    {
      "id": "psychology-independence",
      "term": "Tâm lý & Tester độc lập (Sao Dev không tự test được?)",
      "what": "Dev tự viết code như 'con đẻ' nên hay chủ quan không thấy lỗi ('Lack of Objectivity'); cần người độc lập soi mới ra nhiều bug.",
      "points": [
        "Độc lập cao nhất là thuê đội từ công ty/tổ chức khác. Khi báo bug cho Dev phải lịch sự, góp ý xây dựng ('constructive feedback')."
      ],
      "triggers": [
        "independent testing",
        "level of independence",
        "lack of objectivity",
        "psychological",
        "testers and developers",
        "reporting faults found to developers"
      ],
      "qIds": [
        124,
        249,
        259,
        265,
        284,
        287,
        292,
        297,
        318,
        333,
        334,
        342
      ]
    },
    {
      "id": "standards-acronyms",
      "term": "Các mã chuẩn & Từ viết tắt cần nhớ",
      "what": "BS7925-2 = chuẩn test đơn vị (Component); IEEE 829 = chuẩn mẫu tài liệu test; IEEE 610 = từ điển chung (KHÔNG phải chuẩn riêng về test).",
      "points": [
        "CAST = Computer Aided Software Testing · EULA = End User License Agreement · PDCA = Plan, Do, Check, Act · FPA = đo độ lớn chức năng."
      ],
      "triggers": [
        "ieee829",
        "ieee 829",
        "ieee610",
        "ieee 610",
        "bs7925-1",
        "bs7925-2",
        "cast stands for",
        "eula stands for",
        "pdca",
        "fpa is used",
        "procedure",
        "workbenches"
      ],
      "qIds": [
        21,
        39,
        101,
        110,
        115,
        135,
        146,
        171,
        326
      ]
    },
    {
      "id": "sdlc-models-vmodel-waterfall",
      "term": "Mô hình V-Model, Waterfall & Phần mềm mua sẵn (COTS)",
      "what": "V-Model lồng việc chuẩn bị test song song ngay từ lúc viết yêu cầu & thiết kế (chứ không đợi code xong hết như Waterfall).",
      "points": [
        "Bắt đầu quy trình test ngay khi tài liệu Requirements được duyệt. Phần mềm mua sẵn (COTS) không thấy code bên trong, test nghiệm thu để yên tâm xài ('build confidence')."
      ],
      "triggers": [
        "v-model",
        "waterfall model",
        "development life cycle",
        "purchased/contracted software",
        "commercial off-the-shelf",
        "test process start",
        "preventative and reactive",
        "stochastic testing"
      ],
      "qIds": [
        57,
        139,
        140,
        158,
        206,
        244,
        246,
        264,
        315,
        320
      ]
    },
    {
      "id": "unit-testing",
      "term": "Unit Testing / Component Testing (Test từng linh kiện lẻ)",
      "what": "Tách riêng 1 hàm hoặc 1 class nhỏ ra test một mình nó ('isolated'), chưa nối với phần khác.",
      "points": [
        "Do Dev tự làm là chính, hay soi code (Statement & Branch). Dấu hiệu chọn: 'single unit', 'individual units', 'isolated'."
      ],
      "triggers": [
        "unit testing",
        "unit level",
        "component testing",
        "component test",
        "single unit of code",
        "individual units"
      ],
      "qIds": [
        51,
        84,
        103,
        231,
        247,
        366
      ]
    },
    {
      "id": "integration-testing",
      "term": "Integration Testing (Test mối nối khi ghép các phần lại)",
      "what": "Ráp 2 hay nhiều bộ phận lại với nhau rồi test CHỖ NỐI / GIAO TIẾP giữa chúng (ví dụ bấm Đặt hàng có truyền sang Thanh toán đúng không).",
      "points": [
        "Dấu hiệu chọn: 'interfaces' & 'interaction between integrated components'.",
        "Kiểu ráp: Bottom-up = ráp từ cục đáy/lá đi lên ('terminal/leaf') · Top-down = từ trên xuống · Big-bang = gom hết quăng vào ráp 1 phát luôn · Small = nối các module trong app vs Large = nối app mình với hệ thống khác."
      ],
      "triggers": [
        "integration testing",
        "integration level",
        "system integration",
        "top-down integration",
        "bottom-up integration",
        "module integration",
        "big-bang",
        "terminal modules",
        "lowest-level (leaf) modules"
      ],
      "qIds": [
        17,
        37,
        130,
        149,
        155,
        235,
        253,
        269,
        289,
        338
      ]
    },
    {
      "id": "driver-stub-harness",
      "term": "Driver vs Stub (Hàng giả lập khi phần kia chưa code xong)",
      "what": "Khi muốn test hàm B mà chưa có hàm A gọi nó, ta viết Driver giả làm thằng GỌI; còn thiếu hàm C bên dưới thì viết Stub giả làm thằng BỊ GỌI.",
      "points": [
        "Driver còn gọi là Test Harness / Scaffolding (chuyên nạp input điều khiển hàm đang test, dùng cho Bottom-up)."
      ],
      "triggers": [
        "driver",
        "drivers",
        "stub",
        "test harness",
        "scaffolding"
      ],
      "qIds": [
        3,
        58,
        63,
        167
      ]
    },
    {
      "id": "system-testing",
      "term": "System Testing (Test nguyên con app hoàn chỉnh)",
      "what": "Sau khi ráp xong toàn bộ, đem nguyên hệ thống hoàn chỉnh ra test tổng thể từ A–Z như lúc chạy thật.",
      "points": [
        "Test cả tính năng (Functional) lẫn độ nhanh/bảo mật (Non-functional). Chỉ chọn đáp án 'System Testing' khi đề có chữ 'testing the entire system'!"
      ],
      "triggers": [
        "system testing",
        "system level testing",
        "testing the entire system"
      ],
      "qIds": [
        37,
        164,
        343
      ]
    },
    {
      "id": "acceptance-testing",
      "term": "Acceptance Testing (Khách hàng / Nghiệp vụ nghiệm thu nhận bàn giao)",
      "what": "Bước test chốt sổ xem app có đúng ý kinh doanh và hợp đồng không để khách yên tâm đưa vào xài.",
      "points": [
        "Dấu hiệu chọn: 'meets business requirements' hoặc 'Contract and regulation'.",
        "Alpha = khách qua công ty Dev dùng thử · Beta / Field testing = đem về tận nhà/công ty khách tự dùng ('client own locations')."
      ],
      "triggers": [
        "acceptance testing",
        "user acceptance",
        "alpha testing",
        "alpha release",
        "beta testing",
        "beta release",
        "field testing",
        "contract and regulation testing"
      ],
      "qIds": [
        1,
        22,
        50,
        89,
        111,
        145,
        161,
        315
      ]
    },
    {
      "id": "functional-testing",
      "term": "Functional Testing (Test chức năng: App làm được việc gì?)",
      "what": "Kiểm tra các tính năng có chạy đúng yêu cầu không (đăng nhập được không, cộng tiền giỏ hàng đúng không?).",
      "points": [
        "Làm được ở MỌI cấp độ ('At all test levels'). Mẹo đề thi: Khi 'Functional testing' đứng lẻ 1 mình làm đáp án thì 3/3 câu đều là bẫy SAI!"
      ],
      "triggers": [
        "functional testing",
        "requirements testing",
        "requirements-based testing",
        "business process-based testing"
      ],
      "qIds": [
        12,
        104,
        256,
        302
      ]
    },
    {
      "id": "non-functional-usability",
      "term": "Non-functional & Usability Testing (App xài sướng, mượt & an toàn cỡ nào?)",
      "what": "Không hỏi có chạy được không, mà hỏi chạy TỐT THẾ NÀO ('how well'): có nhanh không, bảo mật không, dễ bấm không.",
      "points": [
        "Cứ gặp 'Internet banking' là chọn Non-functional testing!",
        "Usability testing = test độ dễ dùng, giao diện thân thiện với người dùng ('user-friendliness')."
      ],
      "triggers": [
        "non-functional",
        "usability testing",
        "usability",
        "compatibility testing",
        "not test type"
      ],
      "qIds": [
        2,
        12,
        18,
        45,
        66,
        79,
        81,
        100,
        234,
        248
      ]
    },
    {
      "id": "performance-load-stress",
      "term": "Performance vs Load vs Stress Testing (Tốc độ vs Tải bình thường vs Nhồi quá tải)",
      "what": "Cùng đo sức chịu đựng của máy chủ nhưng khác nhau ở MỨC ĐỘ NGƯỜI TRUY CẬP:",
      "points": [
        "Performance = tên chung đo tốc độ phản hồi & hiệu năng.",
        "Load testing = cho lượng người vào đúng mức DỰ KIẾN BÌNH THƯỜNG ('varying workloads / normal usage').",
        "Stress testing = nhồi nhét VƯỢT QUÁ GIỚI HẠN chịu đựng xem sập thế nào ('limitations exceeded / beyond capacity')."
      ],
      "triggers": [
        "performance testing",
        "load testing",
        "stress testing",
        "volume testing",
        "recovery testing"
      ],
      "qIds": [
        81,
        85,
        100,
        150,
        245,
        305
      ]
    },
    {
      "id": "confirmation-retesting",
      "term": "Confirmation Testing / Re-testing (Test lại đúng con bug vừa sửa)",
      "what": "Dev bảo 'tao fix xong bug A rồi đó' ➔ mình vào chạy lại ĐÚNG chỗ bug A xem hết lỗi thật chưa.",
      "points": [
        "Dấu hiệu: 'confirm that the defect has been fixed / removed'. Riêng câu hỏi phương pháp trong Maintenance Testing thì chọn 'Re-testing'."
      ],
      "triggers": [
        "confirmation testing",
        "re-testing"
      ],
      "qIds": [
        62,
        94,
        166,
        332,
        350
      ]
    },
    {
      "id": "regression-maintenance-impact",
      "term": "Regression Testing & Impact Analysis (Test hồi quy: Sợ sửa chỗ này làm hỏng chỗ kia!)",
      "what": "Sửa code xong phải quay lại kiểm tra CÁC CHỨC NĂNG CŨ KHÔNG ĐỤNG TỚI ('unchanged areas') xem có bị lỗi dây chuyền không.",
      "points": [
        "Vì lặp đi lặp lại rất mệt nên hay dùng tool tự động Record/Capture-Playback để chạy.",
        "Impact Analysis = đánh giá xem lần sửa này ảnh hưởng rộng cỡ nào để biết cần chạy Regression nhiều hay ít ('how much regression testing')."
      ],
      "triggers": [
        "regression testing",
        "regression test",
        "maintenance testing",
        "impact analysis",
        "change-related testing"
      ],
      "qIds": [
        62,
        65,
        71,
        191,
        221,
        257,
        276,
        291,
        309,
        335,
        350
      ]
    },
    {
      "id": "static-vs-dynamic-testing",
      "term": "Static Testing vs Dynamic Testing (Đọc nguội không chạy code vs Bấm chạy thật)",
      "what": "Static = Mở tài liệu hoặc code ra SOI BẰNG MẮT / TOOL mà KHÔNG BẤM CHẠY app. Dynamic = Phải BẤM CHẠY app lên mới test.",
      "points": [
        "Static bắt lỗi thiếu yêu cầu/thiết kế từ trong trứng nước cực rẻ, nhưng KHÔNG làm giảm việc phải viết tài liệu."
      ],
      "triggers": [
        "static testing",
        "static test",
        "dynamic testing",
        "code review",
        "desk checking"
      ],
      "qIds": [
        25,
        33,
        35,
        64,
        75,
        86,
        127,
        215,
        237,
        241,
        242,
        243,
        285,
        357
      ]
    },
    {
      "id": "formal-review-process",
      "term": "Các bước họp Review tài liệu (Planning vs Kick-off)",
      "what": "Lên kế hoạch (Planning) ➔ Họp mở đầu (Kick-off / Initiate) ➔ Tự đọc ở nhà (Individual) ➔ Họp chốt lỗi ➔ Sửa & Kiểm tra lại.",
      "points": [
        "Đừng lộn 2 bước đầu: Chọn người & chia vai ('allocating roles') nằm ở Planning; còn giải thích mục tiêu tài liệu ('explaining objective') nằm ở Kick-off!"
      ],
      "triggers": [
        "formal review",
        "review planning phase",
        "kick-off phase",
        "work product review process",
        "phases of a formal review",
        "cost of the reviews",
        "success factors for a review",
        "rule should not be followed for reviews"
      ],
      "qIds": [
        41,
        46,
        77,
        112,
        117,
        156,
        187,
        196,
        208,
        214,
        266,
        274,
        275
      ]
    },
    {
      "id": "review-moderator",
      "term": "Moderator (Chủ tọa điều hành & hòa giải buổi Review)",
      "what": "Người cầm trịch buổi review chính thức: lên lịch, dẫn dắt cuộc họp, giữ hòa khí ('mediates between people') và dí sửa lỗi sau họp.",
      "points": [
        "Inspection bắt buộc do Moderator đã qua đào tạo chủ trì (không để tác giả tự chủ trì)."
      ],
      "triggers": [
        "moderator"
      ],
      "qIds": [
        98,
        129,
        148,
        198,
        279,
        307
      ]
    },
    {
      "id": "review-scribe-author",
      "term": "Scribe (Thư ký ghi biên bản) & Author (Tác giả bài viết)",
      "what": "Scribe = ngồi ghi lại toàn bộ lỗi & câu hỏi mở trong cuộc họp. Author = người đẻ ra tài liệu và mang về sửa.",
      "points": [
        "Lưu ý: Sếp (Management) KHÔNG được ngồi dự buổi Technical/Peer review để anh em kỹ thuật thoải mái bắt lỗi!"
      ],
      "triggers": [
        "scribe",
        "recorder",
        "author",
        "reviewers"
      ],
      "qIds": [
        98,
        133,
        188,
        198
      ]
    },
    {
      "id": "walkthrough-informal",
      "term": "Informal Review & Walkthrough (Nhờ xem hộ & Tác giả tự thuyết trình)",
      "what": "Informal = nhờ đồng nghiệp ngó hộ nhanh, rẻ, không biên bản. Walkthrough = chính TÁC GIẢ (Author) dẫn dắt chạy thử kịch bản để chỉ bài & xin góp ý.",
      "points": [
        "Nhớ câu thần chú: Walkthrough = Author chủ trì + Scenario/Dry run + Educate & gather feedback."
      ],
      "triggers": [
        "informal review",
        "walkthrough",
        "walk through"
      ],
      "qIds": [
        25,
        35,
        70,
        223,
        254,
        260,
        279,
        307
      ]
    },
    {
      "id": "technical-review-inspection",
      "term": "Technical Review (Peer Review) & Inspection (Thanh tra gắt nhất)",
      "what": "Technical review = nhóm chuyên gia ngang hàng mổ xẻ kỹ thuật (không có sếp). Inspection = buổi thanh tra bài bản nhất do Moderator cầm trịch kèm checklist chặt chẽ.",
      "points": [
        "Inspection không chạy code nên KHÔNG THỂ biết code đã chạy phủ được bao nhiêu %."
      ],
      "triggers": [
        "technical review",
        "peer review",
        "peer reviews",
        "inspection",
        "inspections"
      ],
      "qIds": [
        25,
        35,
        75,
        82,
        132,
        133,
        188,
        196,
        223,
        279,
        307,
        312,
        336,
        356
      ]
    },
    {
      "id": "static-vs-dynamic-analysis-tools",
      "term": "Static Analysis vs Dynamic Analysis (Quét code tĩnh vs Bắt tràn bộ nhớ lúc chạy)",
      "what": "Static analysis = như 'cảnh sát chính tả code' (Dev dùng để bắt biến thừa, code chết unreachable, sai chuẩn code). Dynamic analysis = soi lúc app ĐANG CHẠY để bắt rò rỉ RAM (Memory leaks).",
      "points": [
        "Nhớ cứng: Memory leaks (tràn/rò bộ nhớ) chỉ xảy ra khi chạy thật nên Static KHÔNG tìm được, bắt buộc chọn Dynamic analysis!"
      ],
      "triggers": [
        "static analysis",
        "data flow analysis",
        "dynamic analysis",
        "memory leak",
        "memory leaks",
        "unreachable code",
        "unreachable (\"dead\") code",
        "coding standards"
      ],
      "qIds": [
        16,
        44,
        59,
        73,
        88,
        120,
        141,
        202,
        209,
        288,
        325,
        346,
        355
      ]
    },
    {
      "id": "blackbox-whitebox-graybox",
      "term": "Black-box vs White-box vs Gray-box (Không nhìn code vs Soi từng dòng code)",
      "what": "Black-box = chỉ nhìn bên ngoài nhập input đo output, không cần biết code. White-box (còn gọi là Structural / Glass / Clear box) = mở code ra soi luồng logic.",
      "points": [
        "Gray-box / Hybrid = lai cả hai. Random testing không tính là White-box theo chuẩn BS7925-2."
      ],
      "triggers": [
        "black box",
        "black-box",
        "specification-based",
        "white box",
        "white-box",
        "structural testing",
        "structure-based",
        "glass box",
        "clear box",
        "gray box",
        "hybrid testing",
        "test design technique is",
        "deciding what testing technique"
      ],
      "qIds": [
        28,
        32,
        36,
        40,
        54,
        72,
        76,
        125,
        160,
        205,
        240,
        314,
        354
      ]
    },
    {
      "id": "equivalence-partitioning",
      "term": "Equivalence Partitioning — EP (Chia khúc rồi bốc đại diện mỗi khúc 1 số)",
      "what": "Ví dụ tuổi hợp lệ là 10..21 thì chia làm 3 khúc (<10 sai, 10..21 đúng, >=22 sai), mỗi khúc chỉ cần lấy ĐÚNG 1 SỐ đại diện (như 3, 10, 22) ra test.",
      "points": [
        "Dùng được ở mọi cấp độ test để phủ cả dữ liệu đầu vào lẫn đầu ra ('input and output coverage')."
      ],
      "triggers": [
        "equivalence partitioning",
        "equivalence partition",
        "equivalence partitions",
        "equivalence class",
        "equivalence classes",
        "equivalence values"
      ],
      "qIds": [
        56,
        72,
        174,
        176,
        177,
        182,
        183,
        184,
        232,
        261,
        311,
        324
      ]
    },
    {
      "id": "boundary-value-analysis",
      "term": "Boundary Value Analysis — BVA (Soi sát ranh giới mép biên)",
      "what": "Dev rất hay gõ nhầm dấu > thành >= nên ta đem các số NẰM SÁT MÉP BIÊN ra test (ví dụ cho phép 10..21 thì test ngay 9, 10, 21, 22).",
      "points": [
        "Nếu đề hỏi 'VALID boundary' thì chỉ lấy mép nằm trong vùng đúng (ví dụ 8..12 lấy 8)."
      ],
      "triggers": [
        "boundary value",
        "boundary values",
        "valid boundary"
      ],
      "qIds": [
        36,
        173,
        178,
        180,
        181,
        183,
        361
      ]
    },
    {
      "id": "decision-table-testing",
      "term": "Decision Table Testing (Kẻ bảng ghép nhiều điều kiện Đúng/Sai)",
      "what": "Dùng khi bài toán có NHIỀU ĐIỀU KIỆN KẾT HỢP với nhau ('combinations of inputs' — ví dụ: Có thẻ Citibank + Hạng phòng Bạc thì có được nâng hạng không?).",
      "points": [
        "Coi chừng lộn tên: 'Decision TABLE' là Black-box, còn 'Decision TESTING' là White-box soi lệnh IF!"
      ],
      "triggers": [
        "decision table",
        "decision tables",
        "citibank"
      ],
      "qIds": [
        28,
        90,
        217,
        230
      ]
    },
    {
      "id": "state-transition-usecase",
      "term": "State Transition (Đổi trạng thái) & Use Case (Kịch bản người dùng thật)",
      "what": "State transition = vẽ sơ đồ chuyển trạng thái (ON/OFF, Giỏ hàng ➔ Thanh toán) để bắt các bước nhảy vô lý. Use case = viết test theo luồng thao tác thực tế của người dùng.",
      "points": [
        "Từ khóa ăn điểm: State transition = 'changes in state' · Use case = 'process flows' & 'real-world / typical use'."
      ],
      "triggers": [
        "state transition",
        "state-transition",
        "use case",
        "use cases"
      ],
      "qIds": [
        18,
        138,
        186,
        217,
        228,
        229,
        239,
        252,
        351
      ]
    },
    {
      "id": "whitebox-coverage-metrics",
      "term": "Statement vs Branch/Decision vs Path Coverage (Đếm số test đi qua code)",
      "what": "Statement = đi hết mọi dòng lệnh; Branch/Decision = đi đủ cả ngả True lẫn False của mỗi chữ IF; Path = vét mọi tổ hợp đường đi.",
      "points": [
        "Mẹo tính nhẩm 3 giây: Lệnh IF KHÔNG có ELSE ➔ 1 test Statement, 2 test Branch · Lệnh IF CÓ ELSE ➔ 2 test Statement, 2 test Branch · 2 lệnh IF rời nhau hỏi Paths ➔ 2 × 2 = 4."
      ],
      "triggers": [
        "statement coverage",
        "statement testing",
        "branch coverage",
        "branch/decision coverage",
        "decision coverage",
        "decision testing",
        "condition coverage",
        "path coverage",
        "logic coverage",
        "code coverage",
        "coverage measurement",
        "sequences of statements (paths)"
      ],
      "qIds": [
        28,
        47,
        93,
        106,
        126,
        169,
        170,
        175,
        218,
        219,
        224,
        225,
        226,
        227,
        233,
        236,
        310,
        319,
        353
      ]
    },
    {
      "id": "cyclomatic-complexity",
      "term": "Cyclomatic Complexity (Đo xem code rẽ nhánh rối cỡ nào)",
      "what": "Con số White-box đếm số đường đi độc lập trong code — số này càng to thì code càng rối và CÀNG KHÓ TEST ('Difficult to test').",
      "points": [
        "Công thức duy nhất cần nhớ: L - N + 2P."
      ],
      "triggers": [
        "cyclomatic complexity",
        "cyclometic complexity",
        "l - n + 2p"
      ],
      "qIds": [
        8,
        105,
        108,
        216
      ]
    },
    {
      "id": "error-guessing-exploratory",
      "term": "Error Guessing (Đoán lỗi) & Exploratory Testing (Vừa mò app vừa test luôn)",
      "what": "Cả 2 đều dựa vào KINH NGHIỆM nghề nghiệp ('Experience-based'): Error guessing là đoán chỗ hay sai (nhập rỗng, số 0...), còn Exploratory là vừa khám phá app vừa nghĩ test chạy luôn.",
      "points": [
        "Error guessing nên làm SAU KHI đã test bài bản. Exploratory cực hợp khi GẤP THỜI GIAN và thiếu tài liệu chi tiết."
      ],
      "triggers": [
        "experience-based",
        "error guessing",
        "error-guessing",
        "exploratory testing"
      ],
      "qIds": [
        25,
        35,
        92,
        96,
        217,
        272,
        294,
        300,
        321,
        322,
        340
      ]
    },
    {
      "id": "test-roles-leader-vs-tester",
      "term": "Test Leader / Manager vs Tester (Sếp quản lý vs Lính trực tiếp test)",
      "what": "Leader lo quản lý: lập kế hoạch, chia việc, làm việc với hãng bán tool, chốt báo cáo tổng kết. Tester lo thực chiến: viết test spec, tạo data, bấm chạy test.",
      "points": [
        "Cứ thấy 'Create Test Specifications / Prepare Test Data' là việc của Tester; thấy 'Tool Vendor / Summary Report' là việc của Leader."
      ],
      "triggers": [
        "test lead",
        "test leader",
        "test manager",
        "task of a tester",
        "test organization"
      ],
      "qIds": [
        193,
        195,
        273,
        286,
        293
      ]
    },
    {
      "id": "test-plan-scope-approach",
      "term": "Test Plan (Bản kế hoạch tổng thể — Cái gì không nhét vào đây?)",
      "what": "Tài liệu cấp quản lý ghi phạm vi (cái gì test/không test), lịch trình, nhân sự, môi trường — KHÔNG ghi chi tiết từng câu test nhỏ lẻ.",
      "points": [
        "4 thứ KHÔNG nằm trong Test Plan: Expected results, Quality plans, Test specification, Test Scripts."
      ],
      "triggers": [
        "test plan",
        "test planning",
        "test approach",
        "suspension criteria",
        "features to be tested"
      ],
      "qIds": [
        15,
        23,
        34,
        144,
        159,
        197,
        199,
        211,
        212,
        251,
        281,
        282
      ]
    },
    {
      "id": "entry-exit-stop-testing",
      "term": "Entry Criteria (Đủ đồ mới làm) & Exit Criteria (Đạt chuẩn mới nghỉ)",
      "what": "Entry = có môi trường & nguồn lực mới bắt đầu test. Exit / Completion criteria = tiêu chí đặt ra từ đầu để biết khi nào một đợt test ĐÃ XONG và được dừng.",
      "points": [
        "Hỏi 'Khi nào dừng test?': Ưu tiên 1 chọn câu có chữ 'risks' ➔ Ưu tiên 2 chọn 'completion criteria met' ➔ Ưu tiên 3 mới chọn 'time expires'."
      ],
      "triggers": [
        "entry criteria",
        "exit criteria",
        "completion criteria",
        "stop testing",
        "testing should be stopped",
        "how much testing is enough",
        "behind schedule"
      ],
      "qIds": [
        78,
        107,
        201,
        203,
        210,
        263,
        271,
        298,
        304,
        316,
        348,
        363,
        364,
        365
      ]
    },
    {
      "id": "estimation-monitoring-control",
      "term": "Estimation (Nhắm công sức) · Monitoring (Theo dõi) · Control (Điều chỉnh)",
      "what": "Estimation = nhắm tốn bao nhiêu công; Monitoring = nhìn số liệu xem chạy tới đâu rồi; Control = thấy trễ thì điều người/sửa kế hoạch.",
      "points": [
        "Measurement dysfunction: Chạy theo bệnh thành tích làm đẹp con số báo cáo nhưng chất lượng thật bị nát."
      ],
      "triggers": [
        "test estimation",
        "test monitoring",
        "test control",
        "monitoring the test progress",
        "monitor the progress",
        "function/test matrix",
        "measurement dysfunction"
      ],
      "qIds": [
        119,
        192,
        222,
        296,
        362
      ]
    },
    {
      "id": "project-vs-product-risk",
      "term": "Project Risk (Rủi ro con người/lịch trình) vs Product Risk (Rủi ro bản thân con app)",
      "what": "Project risk = chuyện nội bộ dự án (thiếu người, trễ lịch, nhà cung cấp trễ, tổ chức rối). Product risk = bản thân phần mềm dởm, hay lỗi, chạy sai.",
      "points": [
        "Mức độ rủi ro = Khả năng xảy ra (Likelihood) × Thiệt hại gây ra (Impact)."
      ],
      "triggers": [
        "project risk",
        "project risks",
        "product risk",
        "product risks",
        "level of risk",
        "not risk"
      ],
      "qIds": [
        13,
        26,
        137,
        270,
        367
      ]
    },
    {
      "id": "incident-severity-priority",
      "term": "Severity (Nặng cỡ nào) vs Priority (Gấp cỡ nào) & Báo cáo lỗi",
      "what": "Severity = lỗi làm HỎNG HỆ THỐNG nặng tới đâu. Priority = cần ưu tiên SỬA TRƯỚC HAY SAU. (Ví dụ: Sai chính tả logo trang chủ là Severity nhẹ nhưng Priority gấp!).",
      "points": [
        "Vòng đời bug: Open ➔ Assigned ➔ Fixed ➔ Closed. Phiếu báo lỗi (Incident report) chỉ mô tả lỗi, KHÔNG dạy Dev cách sửa code!"
      ],
      "triggers": [
        "incident report",
        "incident management",
        "incident logging",
        "defect management",
        "severity",
        "priority",
        "bug life cycle",
        "incidents normally not be raised"
      ],
      "qIds": [
        14,
        24,
        42,
        49,
        61,
        67,
        163,
        278,
        317
      ]
    },
    {
      "id": "configuration-management",
      "term": "Configuration Management — CM (Quản lý phiên bản kiểu Git)",
      "what": "Đánh số phiên bản và lưu kho có kiểm soát cho cả code lẫn bộ test case (Testware) để không bị test nhầm bản cũ.",
      "points": [
        "Bắt đầu làm từ lúc Test Planning; quản lý kho lưu trữ gọi là Configuration Control; KHÔNG liên quan tới kiểm toán ISO 9001."
      ],
      "triggers": [
        "configuration management",
        "configuration control",
        "status accounting",
        "deliverable base-lining"
      ],
      "qIds": [
        19,
        42,
        95,
        152,
        204,
        328,
        347
      ]
    },
    {
      "id": "req-test-management-tools",
      "term": "Requirements Tool vs Test Management Tool vs Test Design Tool",
      "what": "Requirements tool = lưu yêu cầu & nối dây truy vết (traceable). Test management tool = lên lịch chạy & quản lý tiến độ/log bug. Test design tool = hỗ trợ đẻ ra test case.",
      "points": [
        "Bẫy: Test management tool chỉ quản lý chứ KHÔNG tự đẻ ra dữ liệu test ('Generating test data')."
      ],
      "triggers": [
        "requirements management tools",
        "requirement management tools",
        "test management tool",
        "test design tool",
        "test design tools",
        "test data preparation tools"
      ],
      "qIds": [
        11,
        87,
        91,
        102,
        157,
        328
      ]
    },
    {
      "id": "test-execution-automation-tools",
      "term": "Test Execution / Capture-Playback Tool (Tool tự bấm chạy lại kịch bản)",
      "what": "Thu lại thao tác chuột/phím rồi tự chạy lặp lại — giúp tiết kiệm tiền nhiều nhất và cực sướng khi CHẠY Regression test.",
      "points": [
        "Tool là máy nên KHÔNG tự biết kết quả đúng phải là gì. Data-driven = tách file dữ liệu riêng ra khỏi code kịch bản."
      ],
      "triggers": [
        "test execution tool",
        "test execution tools",
        "capture/playback",
        "capture and replay",
        "record/playback",
        "test comparator",
        "data-driven scripts",
        "cost saving from use of cast",
        "attributes of tools and automation"
      ],
      "qIds": [
        10,
        65,
        71,
        80,
        109,
        147,
        154,
        238,
        295,
        352
      ]
    },
    {
      "id": "tool-selection-rollout",
      "term": "Mua & Áp dụng Tool mới (Đừng quăng ngay vào dự án đang cháy!)",
      "what": "Bước 1 khi muốn tìm tool: Xem kỹ mình thực sự cần gì. Khi mua về rồi: Đưa cho 1 NHÓM NHỎ dùng thử nghiệm trước.",
      "points": [
        "Tuyệt đối không đem tool mới tinh áp vào dự án đang trễ deadline và không đú theo công nghệ của đối thủ."
      ],
      "triggers": [
        "tool selection",
        "new testing tool",
        "(new) test tool",
        "implementation of a testing tool",
        "using test tools"
      ],
      "qIds": [
        20,
        168,
        189,
        190,
        299
      ]
    }
  ],
  "distinctions": [
    {
      "id": "static-analysis-1-vs-2-answers",
      "kind": "same-options",
      "title": "Static Analysis: Bộ 4 đáp án giống hệt 100% — Hỏi 1 câu đúng (#44) vs Hỏi TWO câu đúng (#355)",
      "category": "3. Static Testing",
      "badge": "Bộ 4 đáp án giống nhau 100%",
      "rule": "<strong>Siêu bẫy phòng thi SWT301:</strong> Hai câu <strong>#44</strong> và <strong>#355</strong> có 4 lựa chọn A, B, C, D giống nhau từng chữ! Chỉ khác đúng yêu cầu số lượng đáp án:<br>• Đề hỏi <strong>statements is true</strong> (chọn 1) ➔ Chọn <strong>C</strong> (<mark class=\"keyword-mark keyword-answer-mark\">Static analysis can find faults that are hard to find with dynamic testing</mark>).<br>• Đề hỏi <strong>Which TWO ... are correct?</strong> (chọn 2) ➔ Chọn cả <strong>B và C</strong> (thêm <mark class=\"keyword-mark keyword-answer-mark\">Static analysis need not be performed before imperative code is executed</mark>).",
      "items": [
        {
          "id": 44,
          "topic": "3. Static Testing",
          "tag": "Hỏi 1 ý đúng (is true) ➔ Chỉ chọn C",
          "stemHtml": "Which of the following statements <mark class=\"keyword-mark keyword-question-mark\">is true of static analysis</mark>:",
          "correctKeys": [
            "C"
          ],
          "correctText": "Static analysis can find faults that are hard to find with dynamic testing.",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Static analysis can find faults that are hard to find with dynamic testing</mark>."
        },
        {
          "id": 355,
          "topic": "3. Static Testing",
          "tag": "Hỏi 2 ý đúng (Which TWO) ➔ Chọn B, C",
          "stemHtml": "Which <mark class=\"keyword-mark keyword-question-mark\">TWO</mark> of the following statements about <mark class=\"keyword-mark keyword-question-mark\">static analysis are correct</mark>?",
          "correctKeys": [
            "B",
            "C"
          ],
          "correctText": "(B) Static analysis need not be performed before imperative code is executed | (C) Static analysis can find faults that are hard to find with dynamic testing",
          "correctTextHtml": "(B) <mark class=\"keyword-mark keyword-answer-mark\">Static analysis need not be performed before imperative code is executed</mark> | (C) <mark class=\"keyword-mark keyword-answer-mark\">Static analysis can find faults that are hard to find with dynamic testing</mark>"
        }
      ]
    },
    {
      "id": "test-lead-vs-tester-tasks",
      "kind": "same-options",
      "title": "Nhiệm vụ của Test Lead / Leader (#193) vs Tester (#195): Bộ 4 đáp án La Mã giống hệt 100%",
      "category": "5. Managing Test Activities",
      "badge": "Bộ 4 đáp án giống nhau 100%",
      "rule": "<strong>Cả 2 câu có 4 phương án A/B/C/D giống hệt 100%, đề bài cũng đối xứng nhau:</strong><br>• <strong>Test Lead / Leader (#193)</strong>: Làm việc với Vendor công cụ (i), viết Test Summary Report (ii), quyết định chiến lược Automation (iii); <strong>KHÔNG trực tiếp tạo Test Specifications (iv sai)</strong> ➔ Chọn <strong>A</strong> (<code>i, ii, iii is true and iv is false</code>).<br>• <strong>Tester (#195)</strong>: Chuẩn bị Test Data (ii), thực thi &amp; log test (iii), tạo Test Specifications (iv); <strong>KHÔNG làm việc với Tool Vendor cấp dự án (i sai)</strong> ➔ Chọn <strong>B</strong> (<code>ii, iii, iv is true and i is false</code>).<br>• Đối chiếu câu <strong>#293</strong>: Test leader <em>manages the testing process</em>, còn Tester <em>focus on test execution</em>.",
      "items": [
        {
          "id": 193,
          "topic": "5. Managing Test Activities",
          "tag": "Test Lead / Leader ➔ A (i, ii, iii đúng; iv sai)",
          "stemHtml": "Which of the following is the task of a <mark class=\"keyword-mark keyword-question-mark\">Test Lead / Leader</mark>.<br>i. Interaction with the Test Tool Vendor to identify best ways to leverage test tool on the project<br>ii. Write Test Summary Reports based on the information gathered during testing<br>iii. Decide what should be automated, to what degree and how.<br><mark class=\"keyword-mark keyword-question-mark\">iv. Create the Test Specifications</mark>",
          "correctKeys": [
            "A"
          ],
          "correctText": "i, ii, iii is true and iv is false",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">i, ii, iii is true and iv is false</mark>"
        },
        {
          "id": 195,
          "topic": "6. Test Tools",
          "tag": "Tester ➔ B (ii, iii, iv đúng; i sai)",
          "stemHtml": "Which of the following is the <mark class=\"keyword-mark keyword-question-mark\">task of a Tester</mark>?<br><mark class=\"keyword-mark keyword-question-mark\">i) Interaction with the Test Tool Vendor</mark> to identify best ways to leverage test tool on the project.<br>ii) Prepare and acquire Test Data<br>iii) Implement Tests on all test levels, execute and log the tests.<br>iv) Create the Test Specifications",
          "correctKeys": [
            "B"
          ],
          "correctText": "ii, iii, iv is true and i is false",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">ii, iii, iv is true and i is false</mark>"
        },
        {
          "id": 293,
          "topic": "5. Managing Test Activities",
          "tag": "So sánh trực tiếp Test Leader vs Tester",
          "stemHtml": "Which statement best reflects the <mark class=\"keyword-mark keyword-question-mark\">role of a test leader compared to a tester</mark>?",
          "correctKeys": [
            "C"
          ],
          "correctText": "A test leader manages the testing process while testers focus on test execution",
          "correctTextHtml": "A <mark class=\"keyword-mark keyword-answer-mark\">test leader manages the testing process while testers focus on test execution</mark>"
        },
        {
          "id": 286,
          "topic": "5. Managing Test Activities",
          "tag": "Vai trò Test Manager ➔ Quản lý quy trình & nguồn lực",
          "stemHtml": "Which of the following best describes the <mark class=\"keyword-mark keyword-question-mark\">role of a test manager</mark>?",
          "correctKeys": [
            "B"
          ],
          "correctText": "Management of the testing process and resources",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Management of the testing process and resources</mark>"
        }
      ]
    },
    {
      "id": "seven-principles-explanations-same-options",
      "kind": "same-options",
      "title": "Giải thích Nguyên lý kiểm thử: 'Early testing' (#330) vs 'Testing shows presence of defects' (#331) vs 'Exhaustive testing' (#329)",
      "category": "1. Fundamentals of Testing",
      "badge": "Bộ 4 đáp án giống nhau 100%",
      "rule": "<strong>Câu #330 và #331 dùng chung đúng 4 đoạn văn giải thích dài (chỉ hoán đổi vị trí A và B), và #329 cũng dùng chung đáp án nhiễu D:</strong><br>• Đề hỏi <strong>Early testing (#330)</strong> ➔ Tìm cụm <mark class=\"keyword-mark keyword-answer-mark\">start as early as possible</mark>.<br>• Đề hỏi <strong>Testing shows presence of defects (#331)</strong> ➔ Tìm cụm <mark class=\"keyword-mark keyword-answer-mark\">can show that defects are present, but cannot prove that there are no defects</mark>.<br>• Đề hỏi <strong>Exhaustive testing is impossible (#329)</strong> ➔ Tìm cụm <mark class=\"keyword-mark keyword-answer-mark\">Testing everything (all combinations of inputs and preconditions) is not feasible</mark>.",
      "items": [
        {
          "id": 330,
          "topic": "1. Fundamentals of Testing",
          "tag": "Early testing ➔ start as early as possible",
          "stemHtml": "Find the explanation of '<mark class=\"keyword-mark keyword-question-mark\">Early testing</mark>\":",
          "correctKeys": [
            "A"
          ],
          "correctText": "Testing activities should start as early as possible in the software or system development life cycle and should be focused on defined objectives.",
          "correctTextHtml": "Testing activities should <mark class=\"keyword-mark keyword-answer-mark\">start as early as possible</mark> in the software or system development life cycle and should be focused on defined objectives."
        },
        {
          "id": 331,
          "topic": "2. Testing Throughout SDLC",
          "tag": "Shows presence of defects ➔ cannot prove no defects",
          "stemHtml": "Find the explanation of \"<mark class=\"keyword-mark keyword-question-mark\">Testing shows presence of defects</mark>\".",
          "correctKeys": [
            "A"
          ],
          "correctText": "Testing can show that defects are present, but cannot prove that there are no defects. Testing reduces the probability of undiscovered defects remaining in the software but, even if no defects are found, it is not a proof of correctness.",
          "correctTextHtml": "Testing <mark class=\"keyword-mark keyword-answer-mark\">can show that defects are present, but cannot prove that there are no defects</mark>. Testing reduces the probability of undiscovered defects remaining in the software but, even if no defects are found, it is not a proof of correctness."
        },
        {
          "id": 329,
          "topic": "1. Fundamentals of Testing",
          "tag": "Exhaustive testing is impossible ➔ use risks and priorities",
          "stemHtml": "Find the explanation of \"<mark class=\"keyword-mark keyword-question-mark\">Exhaustive testing is impossible</mark>\".",
          "correctKeys": [
            "A"
          ],
          "correctText": "Testing everything (all combinations of inputs and preconditions) is not feasible except for trivial cases. Instead of exhaustive testing, we use risks and priorities to focus testing efforts",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Testing everything (all combinations of inputs and preconditions) is not feasible</mark> except for trivial cases. Instead of exhaustive testing, we <mark class=\"keyword-mark keyword-answer-mark\">use risks and priorities</mark> to focus testing efforts"
        }
      ]
    },
    {
      "id": "static-vs-dynamic-testing-same-options",
      "kind": "same-options",
      "title": "Định nghĩa Static Testing (#242) vs Dynamic Testing (#243): Lựa chọn A & B giống hệt nhau!",
      "category": "3. Static Testing",
      "badge": "Bộ đáp án giống nhau",
      "rule": "<strong>Hai câu #242 và #243 có 2 lựa chọn đầu (A và B) giống hệt từng chữ, đề chỉ đổi 1 từ khóa:</strong><br>• <strong>Static testing (#242, #237)</strong>: Kiểm tra tài liệu/code thủ công hoặc bằng tool nhưng <strong>KHÔNG chạy code</strong> (<mark class=\"keyword-mark keyword-answer-mark\">not executed</mark> / <mark class=\"keyword-mark keyword-answer-mark\">without executing</mark>). Vì vậy câu <strong>#357</strong> hỏi câu <em>SAI (false)</em> về static testing ➔ chọn câu nói <code>requires the running of tests</code>.<br>• <strong>Dynamic testing (#243, #241)</strong>: Phần mềm <strong>ĐƯỢC CHẠY</strong> (<mark class=\"keyword-mark keyword-answer-mark\">Software is executed</mark>) với bộ input và đối chiếu output thực tế với expected.",
      "items": [
        {
          "id": 242,
          "topic": "3. Static Testing",
          "tag": "Static testing ➔ A (examined ... but NOT executed)",
          "stemHtml": "What is <mark class=\"keyword-mark keyword-question-mark\">static testing</mark>?",
          "correctKeys": [
            "A"
          ],
          "correctText": "Software work products are examined manually, or with a set of tools, but not executed.",
          "correctTextHtml": "Software work products are examined manually, or with a set of tools, but <mark class=\"keyword-mark keyword-answer-mark\">not executed</mark>."
        },
        {
          "id": 243,
          "topic": "2. Testing Throughout SDLC",
          "tag": "Dynamic testing ➔ B (Software IS executed)",
          "stemHtml": "What is <mark class=\"keyword-mark keyword-question-mark\">dynamic testing</mark>?",
          "correctKeys": [
            "B"
          ],
          "correctText": "Software is executed using a set of input values and its output is then examined and compared to what is expected",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Software is executed</mark> using a set of input values and its output is then examined and compared to what is expected"
        },
        {
          "id": 241,
          "topic": "3. Static Testing",
          "tag": "Khác biệt chính Static vs Dynamic",
          "stemHtml": "What is a primary <mark class=\"keyword-mark keyword-question-mark\">difference between static and dynamic</mark> testing techniques?",
          "correctKeys": [
            "B"
          ],
          "correctText": "Static testing does not involve executing the code, while dynamic does",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Static testing does not involve executing the code, while dynamic does</mark>"
        },
        {
          "id": 237,
          "topic": "3. Static Testing",
          "tag": "Mục tiêu chính của Static testing",
          "stemHtml": "What is the <mark class=\"keyword-mark keyword-question-mark\">main goal of static testing</mark>?",
          "correctKeys": [
            "B"
          ],
          "correctText": "To review documents and source code without executing the software",
          "correctTextHtml": "To review documents and source code <mark class=\"keyword-mark keyword-answer-mark\">without executing the software</mark>"
        },
        {
          "id": 357,
          "topic": "3. Static Testing",
          "tag": "Phát biểu SAI (false) về Static testing",
          "stemHtml": "Which of the following statements regarding <mark class=\"keyword-mark keyword-question-mark\">static testing is false</mark>?",
          "correctKeys": [
            "A"
          ],
          "correctText": "Static testing requires the running of tests through the code",
          "correctTextHtml": "Static testing <mark class=\"keyword-mark keyword-answer-mark\">requires the running of tests through the code</mark>"
        }
      ]
    },
    {
      "id": "statement-and-branch-coverage-options",
      "kind": "same-options",
      "title": "Bộ câu 'X test for statement coverage, Y for branch coverage': Không có ELSE (#219, #225) vs Có ELSE (#226) vs Paths (#236)",
      "category": "4. Test Analysis & Design",
      "badge": "Bộ đáp án giống nhau",
      "rule": "<strong>Nhóm câu tính số test tối thiểu có bộ lựa chọn cực giống nhau — nhìn kỹ xem code CÓ <code>ELSE</code> (hoặc <code>Otherwise</code>) hay KHÔNG:</strong><br>• <strong>Chỉ có <code>IF ... THEN</code> (KHÔNG có <code>ELSE</code>) — Câu #219, #225</strong>: Chỉ cần 1 test cho mọi điều kiện True là đi qua hết câu lệnh (<code>SC = 1</code>), thêm 1 test False để đủ nhánh (<code>BC = 2</code>) ➔ Chọn <mark class=\"keyword-mark keyword-answer-mark\">1 test for statement coverage, 2 for branch coverage</mark>. (Riêng câu #224 chỉ hỏi Statement coverage của 2 IF lồng nhau không có ELSE ➔ Chọn <strong>1</strong>).<br>• <strong>CÓ nhánh <code>ELSE</code> — Câu #226</strong>: 1 test không thể đi qua cả <code>THEN</code> và <code>ELSE</code> cùng lúc nên cần <code>SC = 2</code> và <code>BC = 2</code> ➔ Chọn <mark class=\"keyword-mark keyword-answer-mark\">2 tests for statement coverage, 2 for branch coverage</mark>.<br>• <strong>Câu #218 (Newspaper &amp; Television — có <code>Otherwise</code> + <code>If</code> sau)</strong>: Đáp án chuẩn trong ngân hàng đề là <strong>E</strong> (<code>SC = 2 and DC = 3</code>).<br>• <strong>Câu #236 hỏi <code>sequences of statements (paths)</code></strong> của 2 IF độc lập: <code>2 &times; 2 =</code> <strong>4 Test Cases</strong> (hỏi <em>paths</em> chứ không phải <em>branch</em>!).",
      "items": [
        {
          "id": 219,
          "topic": "4. Test Analysis & Design",
          "tag": "2 IF độc lập KHÔNG có ELSE ➔ 1 SC, 2 BC",
          "stemHtml": "Considering the code provided, which is true about the minimal quantity of test cases necessary<br>for complete statement and branch/decision coverage?<br>Read A<br>Read B<br><mark class=\"keyword-mark keyword-question-mark\">IF A + B &gt; 50 THEN</mark><br>Print \"Sum two age\"<br>ENDIF<br><mark class=\"keyword-mark keyword-question-mark\">IF B &gt; 20 THEN</mark><br>Print \"B is of adult age\"<br>ENDIF",
          "correctKeys": [
            "C"
          ],
          "correctText": "1 test for statement coverage, 2 for branch coverage",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">1 test for statement coverage, 2 for branch coverage</mark>"
        },
        {
          "id": 225,
          "topic": "4. Test Analysis & Design",
          "tag": "1 IF KHÔNG có ELSE (outlook) ➔ 1 SC, 2 BC",
          "stemHtml": "Given the following:<br>Switch PC on<br>Start \"outlook\"<br><mark class=\"keyword-mark keyword-question-mark\">IF outlook appears THEN</mark><br>Send an email<br>Close outlook",
          "correctKeys": [
            "B"
          ],
          "correctText": "1 test for statement coverage, 2 for branch coverage",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">1 test for statement coverage, 2 for branch coverage</mark>"
        },
        {
          "id": 226,
          "topic": "4. Test Analysis & Design",
          "tag": "CÓ nhánh ELSE (C=A-B / C=A+B) ➔ 2 SC, 2 BC",
          "stemHtml": "Given the following code, which is true:<br>IF A &gt; B THEN<br>C=A-B<br><mark class=\"keyword-mark keyword-question-mark\">ELSE</mark><br>C=A+B<br>ENDIF<br>Read D<br>IF C = D Then<br>Print \"Error\"<br>ENDIF",
          "correctKeys": [
            "B"
          ],
          "correctText": "2 tests for statement coverage, 2 for branch coverage",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">2 tests for statement coverage, 2 for branch coverage</mark>"
        },
        {
          "id": 224,
          "topic": "4. Test Analysis & Design",
          "tag": "2 IF lồng nhau KHÔNG có ELSE, chỉ hỏi Statement ➔ 1",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Minimum Test Required for Statement Coverage</mark>:<br><br>Disc = 0<br>Order-qty = 0<br>Read Order-qty<br><br>If Order-qty &gt;= 20 then<br>Disc = 0.05<br><br>If Order-qty &gt;= 100 then<br>Disc = 0.1<br><br>End if<br>End if",
          "correctKeys": [
            "B"
          ],
          "correctText": "Statement coverage is 1",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Statement coverage is 1</mark>"
        },
        {
          "id": 218,
          "topic": "1. Fundamentals of Testing",
          "tag": "Newspaper & Television (Otherwise + If crossword) ➔ SC=2, DC=3",
          "stemHtml": "Consider the following:<br><br>Pick up and read the newspaper<br>Look at what is on television<br>If there is a program that you are interested in watching then<br> Switch the television on and watch the program<br><mark class=\"keyword-mark keyword-question-mark\">Otherwise</mark><br> Continue reading the newspaper<br><mark class=\"keyword-mark keyword-question-mark\">If there is a crossword</mark> in the newspaper then<br> try and complete the crossword",
          "correctKeys": [
            "E"
          ],
          "correctText": "SC = 2 and DC = 3",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">SC = 2 and DC = 3</mark>"
        },
        {
          "id": 236,
          "topic": "4. Test Analysis & Design",
          "tag": "Hỏi ALL sequences of statements (PATHS) của 2 IF ➔ 4",
          "stemHtml": "How many test cases are necessary to cover all the possible <mark class=\"keyword-mark keyword-question-mark\">sequences of statements (paths)</mark> for the<br>following program fragment? Assume that the two conditions are independent of each other<br>if (Condition 1) then<br>statement 1<br>else<br>statement 2<br>if (Condition 2) then<br>statement 3",
          "correctKeys": [
            "C"
          ],
          "correctText": "4 Test Cases",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">4 Test Cases</mark>"
        }
      ]
    },
    {
      "id": "four-test-levels-same-options",
      "kind": "same-options",
      "title": "Bộ 7 câu chung 4 lựa chọn Test Levels: Unit / Integration / System / Acceptance (Đảo vị trí A/B/C/D!)",
      "category": "2. Testing Throughout SDLC",
      "badge": "Bộ 4 đáp án giống nhau 100%",
      "rule": "<strong>Các câu này đều xoay quanh 4 lựa chọn <code>Unit / Integration / System / Acceptance testing</code> nhưng thứ tự A/B/C/D bị đảo ở từng câu (ví dụ Unit là B ở #51 nhưng là C ở #84!):</strong><br>• Thấy <code>single unit</code> / <code>isolated</code> / <code>individual units or components</code> ➔ <strong>Unit testing</strong> (#51, #84, #247).<br>• Thấy <code>interfaces and interaction between integrated components</code> ➔ <strong>Integration testing</strong> (#130, #149, #253).<br>• Thấy <code>entire system</code> / <code>meets specifications</code> ➔ <strong>System testing</strong> (#164).<br>• Thấy <code>meets business requirements</code> hoặc <code>Contract and regulation testing</code> ➔ <strong>Acceptance testing</strong> (#89, #111).",
      "items": [
        {
          "id": 51,
          "topic": "2. Testing Throughout SDLC",
          "tag": "single unit in an isolated manner ➔ Unit Testing (B)",
          "stemHtml": "_____ is the process of testing a <mark class=\"keyword-mark keyword-question-mark\">single unit of code in an isolated manner</mark> and can be a method, a class, or a module.",
          "correctKeys": [
            "B"
          ],
          "correctText": "Unit Testing",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Unit Testing</mark>"
        },
        {
          "id": 84,
          "topic": "2. Testing Throughout SDLC",
          "tag": "individual units or components ➔ Unit testing (C)",
          "stemHtml": "Which test level focuses on <mark class=\"keyword-mark keyword-question-mark\">individual units or components</mark>?",
          "correctKeys": [
            "C"
          ],
          "correctText": "Unit testing",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Unit testing</mark>"
        },
        {
          "id": 130,
          "topic": "2. Testing Throughout SDLC",
          "tag": "interfaces & interaction between components ➔ Integration (B)",
          "stemHtml": "In which testing level would you test for defects in the <mark class=\"keyword-mark keyword-question-mark\">interfaces and interaction between integrated components</mark>?",
          "correctKeys": [
            "B"
          ],
          "correctText": "Integration testing",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Integration testing</mark>"
        },
        {
          "id": 149,
          "topic": "2. Testing Throughout SDLC",
          "tag": "expose defects in interfaces & interaction ➔ Integration Level (B)",
          "stemHtml": "Testing activity which is performed to expose defects in the <mark class=\"keyword-mark keyword-question-mark\">interfaces and in the interaction between integrated components</mark> is",
          "correctKeys": [
            "B"
          ],
          "correctText": "Integration Level Testing",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Integration Level Testing</mark>"
        },
        {
          "id": 164,
          "topic": "2. Testing Throughout SDLC",
          "tag": "testing the entire system ... meets specifications ➔ System (D)",
          "stemHtml": "Which type of testing involves <mark class=\"keyword-mark keyword-question-mark\">testing the entire system</mark> to verify that all functional, information, structural, and quality requirements have been met, and uses a predetermined set of tests to demonstrate to management that the system meets specifications?",
          "correctKeys": [
            "D"
          ],
          "correctText": "System Testing",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">System Testing</mark>"
        },
        {
          "id": 89,
          "topic": "2. Testing Throughout SDLC",
          "tag": "meets business requirements ➔ Acceptance testing (D)",
          "stemHtml": "Which test level verifies the application <mark class=\"keyword-mark keyword-question-mark\">meets business requirements</mark>?",
          "correctKeys": [
            "D"
          ],
          "correctText": "Acceptance testing",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Acceptance testing</mark>"
        },
        {
          "id": 111,
          "topic": "2. Testing Throughout SDLC",
          "tag": "Contract and regulation testing ➔ Acceptance testing (B)",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Contract and regulation testing</mark> is a part of",
          "correctKeys": [
            "B"
          ],
          "correctText": "Acceptance testing",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Acceptance testing</mark>"
        }
      ]
    },
    {
      "id": "fundamental-test-process-phases-same-options",
      "kind": "same-options",
      "title": "Các pha trong Fundamental Test Process (Chung bộ lựa chọn Planning / Analysis & Design / Implementation / Closure)",
      "category": "5. Managing Test Activities",
      "badge": "Bộ đáp án giống nhau",
      "rule": "<strong>Cực dễ nhầm giữa 4 pha khi bộ đáp án lặp đi lặp lại giống hệt nhau — nhớ 5 móc khóa vàng:</strong><br>• <strong>Test Planning (#107, #281)</strong>: <em>Determine exit criteria</em> (xác định tiêu chí dừng), lên lịch <em>Scheduling</em>.<br>• <strong>Test Analysis and Design (#114, #131)</strong>: <em>Reviewing the test basis</em> VÀ <strong><em>Designing</em></strong> <em>the test environment set-up</em> (chú ý chữ <strong>Designing</strong>!).<br>• <strong>Test Implementation and Execution (#83, #165, #280, #308)</strong>: <em>Creating test suites</em>, <em>Set-up / Verifying test environment</em> (chuẩn bị môi trường sẵn sàng để chạy), <em>Reporting discrepancies as incidents</em>. Lưu ý <em>Designing the Tests</em> <strong>KHÔNG</strong> thuộc pha này (#38).<br>• <strong>Test Closure Activities (#121, #194, #341)</strong>: <em>Handover of Testware</em>, lưu trữ testware, đúc kết bài học kinh nghiệm (<em>lessons learned</em>).",
      "items": [
        {
          "id": 107,
          "topic": "5. Managing Test Activities",
          "tag": "Determine the exit criteria ➔ Test planning",
          "stemHtml": "As part of which test process do you <mark class=\"keyword-mark keyword-question-mark\">determine the exit criteria</mark>?",
          "correctKeys": [
            "A"
          ],
          "correctText": "Test planning.",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Test planning</mark>."
        },
        {
          "id": 131,
          "topic": "5. Managing Test Activities",
          "tag": "Reviewing the test Basis ➔ Test Analysis and Design",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Reviewing the test Basis</mark> is a part of which phase",
          "correctKeys": [
            "A"
          ],
          "correctText": "Test Analysis and Design",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Test Analysis and Design</mark>"
        },
        {
          "id": 114,
          "topic": "5. Managing Test Activities",
          "tag": "BẪY: DESIGNING test environment set-up ➔ Analysis & Design",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Designing the test environment set-up</mark> and identifying any required infrastructure and tools are a part of which phase",
          "correctKeys": [
            "B"
          ],
          "correctText": "Test Analysis and Design",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Test Analysis and Design</mark>"
        },
        {
          "id": 308,
          "topic": "5. Managing Test Activities",
          "tag": "Tại sao environment set-up nằm ở Implementation? ➔ Sẵn sàng chạy test",
          "stemHtml": "Why is the <mark class=\"keyword-mark keyword-question-mark\">test environment set-up included in test implementation</mark>?",
          "correctKeys": [
            "D"
          ],
          "correctText": "The environment needs to be ready for executing test cases",
          "correctTextHtml": "The environment needs to be <mark class=\"keyword-mark keyword-answer-mark\">ready for executing test cases</mark>"
        },
        {
          "id": 165,
          "topic": "5. Managing Test Activities",
          "tag": "Reporting Discrepancies as incidents ➔ Implementation & execution",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Reporting Discrepancies as incidents</mark> is a part of which phase",
          "correctKeys": [
            "B"
          ],
          "correctText": "Test Implementation and execution",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Test Implementation and execution</mark>"
        },
        {
          "id": 83,
          "topic": "5. Managing Test Activities",
          "tag": "Creates test suites ➔ Implementation and execution",
          "stemHtml": "Which activity in the fundamental test process <mark class=\"keyword-mark keyword-question-mark\">creates test suites</mark> for efficient test execution?",
          "correctKeys": [
            "A"
          ],
          "correctText": "Implementation and execution.",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Implementation and execution</mark>."
        },
        {
          "id": 38,
          "topic": "6. Test Tools",
          "tag": "KHÔNG thuộc Implementation & Execution ➔ Designing the Tests",
          "stemHtml": "Which of the following is <mark class=\"keyword-mark keyword-question-mark\">not a part of the Test Implementation and Execution Phase</mark>",
          "correctKeys": [
            "D"
          ],
          "correctText": "Designing the Tests",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Designing the Tests</mark>"
        },
        {
          "id": 121,
          "topic": "5. Managing Test Activities",
          "tag": "Handover of Testware ➔ Test Closure Activities",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Handover of Testware</mark> is a part of which Phase",
          "correctKeys": [
            "C"
          ],
          "correctText": "Test Closure Activities",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Test Closure Activities</mark>"
        }
      ]
    },
    {
      "id": "roman-numeral-combinations-same-options",
      "kind": "same-options",
      "title": "Nhóm câu tổ hợp La Mã (i, ii, iii, iv) có bộ đáp án giống hệt nhau (#201 vs #212 & #211 vs #213)",
      "category": "5. Managing Test Activities",
      "badge": "Bộ 4 đáp án giống nhau 100%",
      "rule": "<strong>Hai cặp bẫy chí mạng có bộ phương án tổ hợp <code>i, ii, iii, iv</code> gần như y hệt nhau:</strong><br>• <strong>Bẫy 'Size of the testing Team' (#201 vs #212)</strong>:<br>&nbsp;&nbsp;– Hỏi <strong>How much testing is enough (#201)</strong>: Phụ thuộc Risk (i) và Time/Budget (ii), <strong>KHÔNG phụ thuộc quy mô team test/dev (iii, iv SAI)</strong> ➔ Chọn <strong>C</strong> (<code>i, ii are true and iii, iv are false</code>).<br>&nbsp;&nbsp;– Hỏi <strong>Selection of a test approach (#212)</strong>: Xét cả Risk (i), Skills (ii), Objective (iii) VÀ <strong>Size of the testing Team (iv ĐÚNG)</strong> ➔ Chọn <strong>A</strong> (<code>i, ii, iii, iv are true</code>).<br>• <strong>Bẫy hoán vị mệnh đề giữa Planning (#211) và Implementation (#213)</strong>:<br>&nbsp;&nbsp;– <strong>Test planning (#211)</strong>: Mệnh đề iii (<em>Reviewing the Test Basis</em>) thuộc Analysis &amp; Design nên <strong>iii SAI</strong>; mệnh đề iv (<em>Determining exit criteria</em>) <strong>ĐÚNG</strong> ➔ Chọn <strong>A</strong> (<code>i, ii, iv are true and iii is false</code>).<br>&nbsp;&nbsp;– <strong>Test Implementation &amp; execution (#213)</strong>: Mệnh đề iv (<em>Determining exit criteria</em>) thuộc Planning nên <strong>iv SAI</strong> ➔ Chọn <strong>A</strong> (<code>i, ii, iii are true and iv is false</code>).",
      "items": [
        {
          "id": 201,
          "topic": "5. Managing Test Activities",
          "tag": "How much testing is enough ➔ C (i, ii đúng; Size of team SAI)",
          "stemHtml": "Deciding <mark class=\"keyword-mark keyword-question-mark\">How much testing is enough</mark> should take into account:<br>i. Level of Risk including Technical and Business product and project risk<br>ii. Project constraints such as time and budget<br><mark class=\"keyword-mark keyword-question-mark\">iii. Size of Testing Team</mark><br>iv. Size of the Development Team",
          "correctKeys": [
            "C"
          ],
          "correctText": "i, ii are true and iii, iv are false",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">i, ii are true and iii, iv are false</mark>"
        },
        {
          "id": 212,
          "topic": "5. Managing Test Activities",
          "tag": "Selection of a test approach ➔ A (Cả i, ii, iii, iv đều ĐÚNG)",
          "stemHtml": "The <mark class=\"keyword-mark keyword-question-mark\">selection of a test approach</mark> should consider the context:<br>i. Risk of Failure of the Project, hazards to the product and risks of product failure to humans<br>ii. Skills and experience of the people in the proposed technique, tools and methods<br>iii. The objective of the testing endeavor and the mission of the testing team.<br><mark class=\"keyword-mark keyword-question-mark\">iv. The size of the testing Team</mark>",
          "correctKeys": [
            "A"
          ],
          "correctText": "i, ii, iii, iv are true",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">i, ii, iii, iv are true</mark>"
        },
        {
          "id": 211,
          "topic": "5. Managing Test Activities",
          "tag": "Test planning major tasks ➔ A (i, ii, iv đúng; iii Reviewing Test Basis SAI)",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Test planning</mark> has which of the following major tasks?<br><br>i. Determining the scope and risks, and identifying the objectives of testing.<br>ii. Determining the test approach (techniques, test items, coverage, identifying and interfacing the teams involved in testing, testware).<br><mark class=\"keyword-mark keyword-question-mark\">iii. Reviewing the Test Basis</mark> (such as requirements, architecture, design, interface).<br>iv. Determining the exit criteria.",
          "correctKeys": [
            "A"
          ],
          "correctText": "i, ii, iv are true and iii is false",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">i, ii, iv are true and iii is false</mark>"
        },
        {
          "id": 213,
          "topic": "5. Managing Test Activities",
          "tag": "Test Implementation major tasks ➔ A (i, ii, iii đúng; iv Determining exit criteria SAI)",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Test Implementation and execution</mark> has which of the following major tasks?<br>i. Developing and prioritizing test cases, creating test data, writing test procedures and optionally preparing the<br>test harnesses and writing automated test scripts.<br>ii. Creating the test suite from the test cases for efficient test execution.<br>iii. Verifying that the test environment has been set up correctly.<br><mark class=\"keyword-mark keyword-question-mark\">iv. Determining the exit criteria</mark>.",
          "correctKeys": [
            "A"
          ],
          "correctText": "i, ii, iii are true and iv is false",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">i, ii, iii are true and iv is false</mark>"
        }
      ]
    },
    {
      "id": "testing-standards-same-options",
      "kind": "same-options",
      "title": "Các chuẩn quốc tế có bộ 4 đáp án giống hệt nhau: IEEE 829 / IEEE 610 / BS7925-1 / BS7925-2 (#21 vs #171, #172, #48)",
      "category": "1. Fundamentals of Testing",
      "badge": "Bộ 4 đáp án giống nhau 100%",
      "rule": "<strong>Câu #21 và #171 có cùng đúng 4 lựa chọn <code>IEEE 829 | IEEE 610 | BS7925-1 | BS7925-2</code>:</strong><br>• <strong>IEEE 610</strong>: Chuẩn thuật ngữ Kỹ thuật phần mềm chung (<em>KHÔNG phải chuẩn riêng về testing</em>) ➔ Đề hỏi <strong>NOT a standard related to testing (#21)</strong> chọn <strong>B: IEEE610</strong>.<br>• <strong>BS7925-2</strong>: Chuẩn kiểm thử thành phần (<em>Software Component Testing Standard</em>) ➔ Đề hỏi <strong>component test standard (#171)</strong> chọn <strong>D: BS7925-2</strong>. (BS7925-1 là bảng thuật ngữ kiểm thử; IEEE 829 là chuẩn tài liệu kiểm thử).<br>• <strong>ISO 9126 (#172, #48)</strong>: Chuẩn chất lượng sản phẩm phần mềm gồm 6 đặc tính (Functionality, Reliability, Usability, Efficiency, Maintainability, Portability) — <strong>KHÔNG có <code>Supportability</code> (#48)</strong> và <strong>KHÔNG có <code>Development cost</code> (#30)</strong>.",
      "items": [
        {
          "id": 21,
          "topic": "1. Fundamentals of Testing",
          "tag": "NOT a standard related to testing ➔ B: IEEE610",
          "stemHtml": "Which of the following is <mark class=\"keyword-mark keyword-question-mark\">NOT a standard related to testing</mark>?",
          "correctKeys": [
            "B"
          ],
          "correctText": "IEEE610",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">IEEE610</mark>"
        },
        {
          "id": 171,
          "topic": "5. Managing Test Activities",
          "tag": "Component test standard ➔ D: BS7925-2",
          "stemHtml": "Which of the following is the <mark class=\"keyword-mark keyword-question-mark\">component test standard</mark>?",
          "correctKeys": [
            "D"
          ],
          "correctText": "BS7925-2",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">BS7925-2</mark>"
        },
        {
          "id": 172,
          "topic": "1. Fundamentals of Testing",
          "tag": "Standard for Software product quality ➔ A: ISO 9126",
          "stemHtml": "Which of the following is the standard for the <mark class=\"keyword-mark keyword-question-mark\">Software product quality</mark>",
          "correctKeys": [
            "A"
          ],
          "correctText": "ISO 9126",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">ISO 9126</mark>"
        },
        {
          "id": 48,
          "topic": "1. Fundamentals of Testing",
          "tag": "NOT in ISO 9126 Standard ➔ C: Supportability",
          "stemHtml": "Which of the following is <mark class=\"keyword-mark keyword-question-mark\">not a quality characteristic listed in ISO 9126</mark> Standard?",
          "correctKeys": [
            "C"
          ],
          "correctText": "Supportability",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Supportability</mark>"
        },
        {
          "id": 30,
          "topic": "1. Fundamentals of Testing",
          "tag": "NOT software characteristics ➔ C: Development cost",
          "stemHtml": "Which is <mark class=\"keyword-mark keyword-question-mark\">not the software characteristics</mark>",
          "correctKeys": [
            "C"
          ],
          "correctText": "Development cost",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Development cost</mark>"
        }
      ]
    },
    {
      "id": "ieee829-test-specifications-same-options",
      "kind": "same-options",
      "title": "Đặc tả kiểm thử IEEE 829 có bộ đáp án giống nhau: Test Case Spec (#74) vs Test Procedure Spec (#143)",
      "category": "1. Fundamentals of Testing",
      "badge": "Bộ đáp án giống nhau",
      "rule": "<strong>Cả 2 câu cùng có 3 lựa chọn <code>Test Case Specification | Test Design Specification | Test Procedure Specification</code>:</strong><br>• <strong>Test Design Specification</strong>: Xác định <em>features to be tested</em> và điều kiện test tổng quát.<br>• <strong>Test Case Specification (#74)</strong>: Định nghĩa dữ liệu đầu vào cụ thể và <strong>kết quả mong đợi (<mark class=\"keyword-mark keyword-question-mark\">expected results</mark>)</strong>.<br>• <strong>Test Procedure Specification (#143)</strong>: Mô tả <strong>các bước thao tác tuần tự (<mark class=\"keyword-mark keyword-question-mark\">steps required to operate the system</mark>)</strong> để chạy test (còn gọi là manual test script).",
      "items": [
        {
          "id": 74,
          "topic": "1. Fundamentals of Testing",
          "tag": "Defines expected results ➔ A: Test case specification",
          "stemHtml": "Which of the following defines the <mark class=\"keyword-mark keyword-question-mark\">expected results</mark> of a test?",
          "correctKeys": [
            "A"
          ],
          "correctText": "Test case specification.",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Test case specification</mark>."
        },
        {
          "id": 143,
          "topic": "1. Fundamentals of Testing",
          "tag": "Describes steps required to operate system ➔ C: Test Procedure Specification",
          "stemHtml": "The specification which describes <mark class=\"keyword-mark keyword-question-mark\">steps required to operate the system</mark> and exercise test cases in order to implement the associated test design",
          "correctKeys": [
            "C"
          ],
          "correctText": "Test Procedure Specification",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Test Procedure Specification</mark>"
        }
      ]
    },
    {
      "id": "test-design-techniques-same-options",
      "kind": "same-options",
      "title": "Nhóm câu chung bộ đáp án Kỹ thuật kiểm thử: Equivalence Partitioning / Boundary Value / Decision Table / Decision Testing",
      "category": "4. Test Analysis & Design",
      "badge": "Bộ đáp án giống nhau",
      "rule": "<strong>Các câu #28, #36, #56, #72, #86, #90 chia sẻ các lựa chọn cực dễ nhìn nhầm tên:</strong><br>• ⚠️ <strong>Bẫy tên gọi sát nút</strong>: <code>Decision tables</code> / <code>Decision table testing</code> là <strong>Black-box</strong> (kết hợp nhiều điều kiện input tạo ra các action khác nhau — <strong>#90</strong>), còn <code>Decision testing</code> là <strong>White-box</strong> (nên <em>NOT a black box technique</em> ở <strong>#28</strong> chọn <strong>Decision testing</strong>!).<br>• <code>Equivalence partitioning</code>: Kỹ thuật Black-box (#72) dùng để đạt độ phủ <strong>cả input lẫn output</strong> (<em>input and output coverage</em> — <strong>#56</strong>).<br>• <code>Boundary value analysis</code>: Là Black-box nên đề hỏi <em>NOT a White box technique</em> (<strong>#36</strong>) chọn <strong>Boundary value analysis</strong>.<br>• Đề hỏi <em>static testing technique analyzes code without executing it</em> (<strong>#86</strong>) nằm chung mâm với EP, Decision table, Error guessing ➔ Chọn <strong>Code review</strong>.",
      "items": [
        {
          "id": 28,
          "topic": "4. Test Analysis & Design",
          "tag": "NOT a black box technique ➔ D: Decision testing (vì đây là White-box!)",
          "stemHtml": "Which is <mark class=\"keyword-mark keyword-question-mark\">not a black box testing technique</mark>",
          "correctKeys": [
            "D"
          ],
          "correctText": "Decision testing",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Decision testing</mark>"
        },
        {
          "id": 90,
          "topic": "4. Test Analysis & Design",
          "tag": "Different combinations of inputs -> actions ➔ B: Decision table testing",
          "stemHtml": "Which technique uses <mark class=\"keyword-mark keyword-question-mark\">different combinations of inputs</mark> to result in different actions being taken?",
          "correctKeys": [
            "B"
          ],
          "correctText": "Decision table testing",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Decision table testing</mark>"
        },
        {
          "id": 56,
          "topic": "4. Test Analysis & Design",
          "tag": "Achieve input and output coverage ➔ B: Equivalence partitioning",
          "stemHtml": "The _____ technique can be used to achieve <mark class=\"keyword-mark keyword-question-mark\">input and output coverage</mark>",
          "correctKeys": [
            "B"
          ],
          "correctText": "Equivalence partitioning",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Equivalence partitioning</mark>"
        },
        {
          "id": 72,
          "topic": "4. Test Analysis & Design",
          "tag": "Black box design technique ➔ B: Equivalence partitioning",
          "stemHtml": "Which of the following is a <mark class=\"keyword-mark keyword-question-mark\">black box design technique</mark>?",
          "correctKeys": [
            "B"
          ],
          "correctText": "Equivalence partitioning",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Equivalence partitioning</mark>"
        },
        {
          "id": 36,
          "topic": "4. Test Analysis & Design",
          "tag": "NOT a White box technique ➔ D: Boundary value analysis",
          "stemHtml": "Which of the following techniques is <mark class=\"keyword-mark keyword-question-mark\">NOT a White box technique</mark>?",
          "correctKeys": [
            "D"
          ],
          "correctText": "Boundary value analysis",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Boundary value analysis</mark>"
        },
        {
          "id": 86,
          "topic": "3. Static Testing",
          "tag": "Static technique (không chạy code) ➔ C: Code review",
          "stemHtml": "Which <mark class=\"keyword-mark keyword-question-mark\">static testing technique</mark> analyzes code <mark class=\"keyword-mark keyword-question-mark\">without executing it</mark>?",
          "correctKeys": [
            "C"
          ],
          "correctText": "Code review",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Code review</mark>"
        }
      ]
    },
    {
      "id": "roles-people-same-options",
      "kind": "same-options",
      "title": "Nhóm câu hỏi 'Ai thực hiện?' có bộ lựa chọn vai trò giống nhau (Developers / Testers / Management / Moderator / Scribe)",
      "category": "3. Static Testing",
      "badge": "Bộ đáp án giống nhau",
      "rule": "<strong>Phân biệt chính xác người thực hiện khi các lựa chọn lặp lại <code>Developers / Testers / Analysts / Management / Moderator / Scribe</code>:</strong><br>• <strong>Developers</strong>: Thường trực tiếp thực hiện <strong>Debugging</strong> (#99), dùng <strong>Static analysis tools</strong> (#141, #288), và dùng <strong>Coverage measurement + Dynamic analysis tools</strong> (#209).<br>• <strong>Management</strong>: <strong>KHÔNG tham gia Technical Reviews</strong> (#133 — <em>Peer review</em> không có sếp!), nhưng <strong>CÓ mặt trong danh sách thành phần Formal Review</strong> (#198: Manager, Moderator, Scribe đúng; <em>Assistant Manager</em> sai!).<br>• <strong>Scribe / Recorder (#98)</strong>: Ghi chép toàn bộ lỗi &amp; open points trong buổi họp review.<br>• <strong>Moderator (#129, #148)</strong>: Lên kế hoạch, dẫn dắt buổi họp, hòa giải (<em>mediates between people</em>) và theo dõi sau họp.",
      "items": [
        {
          "id": 99,
          "topic": "1. Fundamentals of Testing",
          "tag": "USUALLY perform debugging ➔ A: Developers",
          "stemHtml": "Who would USUALLY perform <mark class=\"keyword-mark keyword-question-mark\">debugging activities</mark>?",
          "correctKeys": [
            "A"
          ],
          "correctText": "Developers.",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Developers</mark>."
        },
        {
          "id": 141,
          "topic": "3. Static Testing",
          "tag": "Static analysis tools typically used by ➔ B: Developers",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Static analysis tools</mark> are typically used by",
          "correctKeys": [
            "B"
          ],
          "correctText": "Developers",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Developers</mark>"
        },
        {
          "id": 133,
          "topic": "3. Static Testing",
          "tag": "KHÔNG tham gia Technical Reviews ➔ B: Management",
          "stemHtml": "People who <mark class=\"keyword-mark keyword-question-mark\">don't participate in technical reviews</mark>",
          "correctKeys": [
            "B"
          ],
          "correctText": "Management",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Management</mark>"
        },
        {
          "id": 198,
          "topic": "3. Static Testing",
          "tag": "Formal Review gồm Manager, Moderator, Scribe (Assistant Manager SAI)",
          "stemHtml": "Who are the <mark class=\"keyword-mark keyword-question-mark\">persons involved in a Formal Review</mark><br>i) Manager<br>ii) Moderator<br>iii) Scribe / Recorder<br><mark class=\"keyword-mark keyword-question-mark\">iv) Assistant Manager</mark>",
          "correctKeys": [
            "B"
          ],
          "correctText": "i, ii, iii are true and iv is false.",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">i, ii, iii are true and iv is false</mark>."
        },
        {
          "id": 98,
          "topic": "3. Static Testing",
          "tag": "Ghi nhận toàn bộ lỗi/vấn đề trong buổi họp ➔ B: Scribe",
          "stemHtml": "Who is responsible for <mark class=\"keyword-mark keyword-question-mark\">document all the issues, problems and open point</mark> that were identified during the review meeting",
          "correctKeys": [
            "B"
          ],
          "correctText": "Scribe",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Scribe</mark>"
        },
        {
          "id": 148,
          "topic": "3. Static Testing",
          "tag": "Lên kế hoạch, dẫn dắt buổi họp & follow-up ➔ C: Moderator",
          "stemHtml": "The person who <mark class=\"keyword-mark keyword-question-mark\">leads the review</mark> of the document(s), planning the review, <mark class=\"keyword-mark keyword-question-mark\">running the meeting</mark> and follow-up after the meeting",
          "correctKeys": [
            "C"
          ],
          "correctText": "Moderator",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Moderator</mark>"
        },
        {
          "id": 129,
          "topic": "3. Static Testing",
          "tag": "Vai trò Moderator trong cuộc họp ➔ B: Mediates between people",
          "stemHtml": "In a review meeting a <mark class=\"keyword-mark keyword-question-mark\">moderator is a person who</mark>",
          "correctKeys": [
            "B"
          ],
          "correctText": "Mediates between people",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Mediates between people</mark>"
        }
      ]
    },
    {
      "id": "branch-vs-decision-coverage-options",
      "kind": "same-options",
      "title": "Bộ đáp án Coverage sát nút: Decision Coverage (#47, #310) vs Branch Coverage (#93, #106) vs Pole Coverage (#126)",
      "category": "4. Test Analysis & Design",
      "badge": "Bộ lựa chọn gần như y hệt",
      "rule": "<strong>Cực kỳ cẩn thận với câu #106 vì trong 4 đáp án có CẢ <code>C: Decision Coverage</code> lẫn <code>D: Branch coverage</code>!</strong><br>• <strong>Câu #106</strong>: Đề có cụm <code>percentage of decision directions executed</code> ➔ Đáp án ngân hàng đề là <strong>D: Branch coverage</strong>.<br>• <strong>Câu #93</strong>: Đề có cụm <code>each one of the possible branches from each decision point</code> ➔ Chọn <strong>C: Branch coverage testing</strong>.<br>• <strong>Câu #47</strong>: Hỏi câu ĐÚNG về <code>decision coverage</code> ➔ Chọn <strong>D: proportion of decision outcomes in the source code exercised by tests</strong> (Không chọn C vì C chỉ nhắc đến <code>if statements</code>, bỏ sót vòng lặp và switch-case!).<br>• <strong>Câu #126</strong>: Dạng coverage KHÔNG tồn tại (<em>Incorrect form of Logic coverage</em>) ➔ Chọn <strong>B: Pole Coverage</strong>.",
      "items": [
        {
          "id": 106,
          "topic": "4. Test Analysis & Design",
          "tag": "decision directions executed (có cả Decision & Branch!) ➔ D: Branch coverage",
          "stemHtml": "A white box testing technique that measures the number of or percentage of <mark class=\"keyword-mark keyword-question-mark\">decision directions executed</mark> by the test case designed is called",
          "correctKeys": [
            "D"
          ],
          "correctText": "Branch coverage",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Branch coverage</mark>"
        },
        {
          "id": 93,
          "topic": "4. Test Analysis & Design",
          "tag": "possible branches from each decision point ➔ C: Branch coverage testing",
          "stemHtml": "Which white box technique has the main goal of ensuring that each one of the <mark class=\"keyword-mark keyword-question-mark\">possible branches from each decision point</mark> is executed at least once?",
          "correctKeys": [
            "C"
          ],
          "correctText": "Branch coverage testing",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Branch coverage testing</mark>"
        },
        {
          "id": 47,
          "topic": "4. Test Analysis & Design",
          "tag": "Định nghĩa chuẩn Decision coverage ➔ D: proportion of decision outcomes",
          "stemHtml": "Which of the following statement is <mark class=\"keyword-mark keyword-question-mark\">CORRECT about decision coverage</mark>?",
          "correctKeys": [
            "D"
          ],
          "correctText": "Decision coverage is a measure of the proportion of decision outcomes in the source code exercised by tests",
          "correctTextHtml": "Decision coverage is a measure of the <mark class=\"keyword-mark keyword-answer-mark\">proportion of decision outcomes in the source code exercised by tests</mark>"
        },
        {
          "id": 126,
          "topic": "4. Test Analysis & Design",
          "tag": "Loại Logic coverage KHÔNG có thật ➔ B: Pole Coverage",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Incorrect form of Logic coverage</mark> is:",
          "correctKeys": [
            "B"
          ],
          "correctText": "Pole Coverage",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Pole Coverage</mark>"
        }
      ]
    },
    {
      "id": "twin-code-biggest-dimension",
      "kind": "similar-questions",
      "title": "Cặp sinh đôi CÙNG ĐOẠN CODE 'biggest_dimension' (#170 vs #353) & Bộ 3 bài tính Coverage ra 2 (#169, #170, #175)",
      "category": "4. Test Analysis & Design",
      "badge": "Cặp code giống hệt 100%",
      "rule": "<strong>Hai câu #170 và #353 dùng CHÍNH XÁC CÙNG MỘT ĐOẠN CODE <code>if width &gt; length then biggest_dimension...</code> kèm 3 dòng <code>print</code> ở cuối, nhưng đáp án khác hoàn toàn:</strong><br>• <strong>Câu #170</strong>: Hỏi <em>How many tests are required to achieve 100% branch/decision coverage?</em> ➔ Cần <strong>2</strong> test cases (1 cho True, 1 cho False). (Tương tự câu <strong>#169</strong> và <strong>#175</strong> đều có đáp án <strong>B: 2</strong>).<br>• <strong>Câu #353</strong>: Đề mở đầu <em>You have designed test cases to provide 100% statement and 100% decision coverage...</em> rồi hỏi cuối câu: <strong><em>How many MORE test cases are required?</em></strong> ➔ Vì đã đủ 100% rồi và 3 lệnh <code>print</code> không tạo nhánh mới nên chọn <strong>C: None, existing test cases can be used.</strong>!",
      "items": [
        {
          "id": 170,
          "topic": "4. Test Analysis & Design",
          "tag": "Hỏi tổng số test cần thiết (How many tests) ➔ B: 2",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">How many tests are required</mark> to achieve 100% branch/decision coverage?<br><br>if width &gt; length<br>then<br> <mark class=\"keyword-mark keyword-question-mark\">biggest_dimension</mark> = width<br>else<br> biggest_dimension = length<br>end_if<br><br>The following has been added to the bottom of the code fragment above.<br>print \"Biggest dimension is \" &amp; biggest_dimension<br>print \"Width: \" &amp; width<br>print \"Length: \" &amp; length",
          "correctKeys": [
            "B"
          ],
          "correctText": "2",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">2</mark>"
        },
        {
          "id": 353,
          "topic": "4. Test Analysis & Design",
          "tag": "Đã đủ 100%, hỏi cần THÊM bao nhiêu (How many MORE) ➔ C: None",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">You have designed test cases</mark> to provide 100% statement and 100% decision coverage for the following<br>fragment of code.<br>if width &gt; length then<br>biggest_dimension = width<br>else<br>biggest_dimension = length<br>end if<br>print \"Biggest dimension is \" &amp; biggest_dimension<br>print \"Width: \" &amp; width<br>print \"Length: \" &amp; length<br><mark class=\"keyword-mark keyword-question-mark\">How many more test cases are required?</mark>",
          "correctKeys": [
            "C"
          ],
          "correctText": "None, existing test cases can be used.",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">None, existing test cases can be used</mark>."
        },
        {
          "id": 169,
          "topic": "4. Test Analysis & Design",
          "tag": "If (x > y) ... while (x > y): 100% branch coverage ➔ B: 2",
          "stemHtml": "What is the <mark class=\"keyword-mark keyword-question-mark\">smallest number of test cases</mark> required to Provide 100% branch coverage?<br><br>If (x &gt; y) x = x + 1;<br>else y = y + 1;<br><br><mark class=\"keyword-mark keyword-question-mark\">while (x &gt; y)</mark><br>{<br> y = x * y; x = x + 1;<br>}",
          "correctKeys": [
            "B"
          ],
          "correctText": "2",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">2</mark>"
        },
        {
          "id": 175,
          "topic": "4. Test Analysis & Design",
          "tag": "2 lệnh If lồng nhau có Else: 100% statement coverage ➔ B: 2",
          "stemHtml": "If the pseudo code below were a programming language, how many tests are required to achieve <mark class=\"keyword-mark keyword-question-mark\">100% statement coverage</mark>?<br><br>1.If x = 3 then<br>2. <mark class=\"keyword-mark keyword-question-mark\">Display_messageX</mark>;<br>3.If y = 2 then<br>4. Display_messageY;<br>5.Else<br>6. Display_messageZ;<br>7.Else<br>8. Display_messageZ;",
          "correctKeys": [
            "B"
          ],
          "correctText": "2",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">2</mark>"
        }
      ]
    },
    {
      "id": "twin-numeric-10-21-22",
      "kind": "similar-questions",
      "title": "Cặp sinh đôi CÙNG ĐỀ SỐ LIỆU '10, 21, 22': Hỏi Equivalence Partitions (#176) vs Hỏi Boundary Values (#180)",
      "category": "4. Test Analysis & Design",
      "badge": "Cặp câu hỏi sinh đôi",
      "rule": "<strong>Hai câu #176 và #180 có câu mô tả bài toán giống nhau từng chữ:</strong> <code>Values less than 10 are rejected, values between 10 and 21 are accepted, values greater than or equal to 22 are rejected.</code> — Đọc kỹ câu hỏi cuối cùng!<br>• <strong>Câu #176</strong> hỏi <mark class=\"keyword-mark keyword-question-mark\">equivalence partitions</mark> (mỗi vùng <code>&lt;10</code>, <code>10..21</code>, <code>&gt;=22</code> lấy 1 đại diện) ➔ Chọn <strong>C: 3,10,22</strong>.<br>• <strong>Câu #180</strong> hỏi <mark class=\"keyword-mark keyword-question-mark\">MOST boundary values</mark> (4 mốc biên sát ranh giới hợp lệ/không hợp lệ: 9, 10 và 21, 22) ➔ Chọn <strong>B: 9,10,21,22</strong>.<br>• Đối chiếu thêm <strong>#181</strong> (năm sinh <code>1900..2004</code>, hỏi boundary values ➔ <strong>1899,1900,2004,2005</strong>) và <strong>#183</strong> (<code>10000..99999</code>, hỏi <em>ONLY valid</em> classes &amp; boundaries ➔ <strong>10000,50000,99999</strong>).",
      "items": [
        {
          "id": 176,
          "topic": "1. Fundamentals of Testing",
          "tag": "Hỏi Equivalence Partitions (3 phân vùng) ➔ C: 3,10,22",
          "stemHtml": "Values less than 10 are rejected, values between 10 and 21 are accepted, values greater than or equal to 22 are rejected.<br>Which of the following input values <mark class=\"keyword-mark keyword-question-mark\">cover all of the equivalence partitions</mark>?",
          "correctKeys": [
            "C"
          ],
          "correctText": "3,10,22",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">3,10,22</mark>"
        },
        {
          "id": 180,
          "topic": "1. Fundamentals of Testing",
          "tag": "Hỏi MOST Boundary Values (4 giá trị biên) ➔ B: 9,10,21,22",
          "stemHtml": "A program validates a numeric field as follows:<br>Values less than 10 are rejected, values between 10 and 21 are accepted, values greater than or equal to 22 are rejected. Which of the following <mark class=\"keyword-mark keyword-question-mark\">covers the MOST boundary values</mark>?",
          "correctKeys": [
            "B"
          ],
          "correctText": "9,10,21,22",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">9,10,21,22</mark>"
        },
        {
          "id": 181,
          "topic": "1. Fundamentals of Testing",
          "tag": "Năm sinh 1900..2004 (Boundary values) ➔ C: 1899,1900,2004,2005",
          "stemHtml": "An input field takes the year of birth <mark class=\"keyword-mark keyword-question-mark\">between 1900 and 2004</mark><br>The <mark class=\"keyword-mark keyword-question-mark\">boundary values</mark> for testing this field are",
          "correctKeys": [
            "C"
          ],
          "correctText": "1899,1900,2004,2005",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">1899,1900,2004,2005</mark>"
        },
        {
          "id": 183,
          "topic": "1. Fundamentals of Testing",
          "tag": "10000..99999 (ONLY VALID classes & boundaries) ➔ C: 10000,50000,99999",
          "stemHtml": "Order numbers on a stock control system can range between 10000 and 99999 inclusive. Which of the following inputs might be a result of designing tests for <mark class=\"keyword-mark keyword-question-mark\">only valid equivalence classes and valid boundaries</mark>:",
          "correctKeys": [
            "C"
          ],
          "correctText": "10000,50000,99999",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">10000,50000,99999</mark>"
        }
      ]
    },
    {
      "id": "twin-temperature-18-21",
      "kind": "similar-questions",
      "title": "Cặp sinh đôi BÀI TOÁN NHIỆT ĐỘ 'below 18' & '21 degrees': Cover ALL partitions (#177) vs Cùng 1 lớp > 21 (#184)",
      "category": "1. Fundamentals of Testing",
      "badge": "Cặp câu hỏi sinh đôi",
      "rule": "<strong>Cùng kịch bản rơ-le nhiệt tắt dưới 18 độ và bật lại ở mốc 21 độ, nhưng hỏi ngược nhau:</strong><br>• <strong>Câu #177</strong>: Hỏi <mark class=\"keyword-mark keyword-question-mark\">cover all equivalence partitions</mark> (phải có đủ 3 số đại diện cho 3 miền: <code>&lt;18</code>, <code>18..20</code>, <code>&gt;=21</code>) ➔ Chọn <strong>A: 15, 19 and 25</strong>.<br>• <strong>Câu #184</strong>: Hỏi <mark class=\"keyword-mark keyword-question-mark\">belong to the same class-When the temperature is more than 21</mark> (cả 3 số đều phải <code>&gt; 21</code>) ➔ Chọn <strong>C: 22,23,24</strong>.",
      "items": [
        {
          "id": 177,
          "topic": "1. Fundamentals of Testing",
          "tag": "Phủ TẤT CẢ các phân vùng (<18, 18..20, >=21) ➔ A: 15, 19 and 25",
          "stemHtml": "A thermometer measures temperature in whole degrees only. If the temperature falls below 18 degrees, the heating is switched off. It is switched on again when the temperature reaches 21 degrees. What are the best values in degrees to <mark class=\"keyword-mark keyword-question-mark\">cover all equivalence partitions</mark>?",
          "correctKeys": [
            "A"
          ],
          "correctText": "15, 19 and 25",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">15, 19 and 25</mark>"
        },
        {
          "id": 184,
          "topic": "1. Fundamentals of Testing",
          "tag": "Thuộc CÙNG MỘT phân vùng (> 21) ➔ C: 22,23,24",
          "stemHtml": "The Switch is switched off once the temperature falls below 18 and then it is turned on when the temperature is more than 21. Identify the Equivalence values which <mark class=\"keyword-mark keyword-question-mark\">belong to the same class-When the temperature is more than 21</mark>.",
          "correctKeys": [
            "C"
          ],
          "correctText": "22,23,24",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">22,23,24</mark>"
        }
      ]
    },
    {
      "id": "when-to-stop-testing-triplets",
      "kind": "similar-questions",
      "title": "Bộ 3 câu hỏi gần y hệt nhau: 'When to stop testing?' (#210 vs #298 vs #363) — 3 câu 3 đáp án khác hẳn nhau!",
      "category": "5. Managing Test Activities",
      "badge": "Đề giống hệt — Đáp án khác",
      "rule": "<strong>Cảnh báo đỏ! Ba câu hỏi có nghĩa tiếng Anh y hệt nhau ('Khi nào dừng kiểm thử?') nhưng tùy bộ lựa chọn mà đáp án chuẩn khác nhau:</strong><br>• <strong>Câu #210</strong> (<code>Testing should be stopped when:</code> — có 5 lựa chọn A..E): Ưu tiên cao nhất cho <strong>E</strong> (<mark class=\"keyword-mark keyword-answer-mark\">It depends on the risks for the system being tested</mark>), dù có mặt lựa chọn <code>Time has run out</code>!<br>• <strong>Câu #363</strong> (<code>When should you stop testing?</code> — có lựa chọn <code>completion criteria</code>): Ưu tiên chọn <strong>C</strong> (<mark class=\"keyword-mark keyword-answer-mark\">When the test completion criteria have been met</mark>), KHÔNG chọn <code>When time for testing has run out</code>!<br>• <strong>Câu #298</strong> (<code>When to stop Testing?</code> — KHÔNG có chữ <code>risks</code> và KHÔNG có <code>completion criteria</code>): Lúc này mới chọn <strong>A</strong> (<mark class=\"keyword-mark keyword-answer-mark\">Stop when scheduled time for testing expires</mark>).",
      "items": [
        {
          "id": 210,
          "topic": "5. Managing Test Activities",
          "tag": "Có lựa chọn 'risks' (5 đáp án A..E) ➔ E: Depends on the risks",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Testing should be stopped when</mark>:",
          "correctKeys": [
            "E"
          ],
          "correctText": "It depends on the risks for the system being tested",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">It depends on the risks for the system being tested</mark>"
        },
        {
          "id": 363,
          "topic": "5. Managing Test Activities",
          "tag": "Có 'test completion criteria' ➔ C: Completion criteria have been met",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">When should you stop testing</mark>?",
          "correctKeys": [
            "C"
          ],
          "correctText": "When the test completion criteria have been met",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">When the test completion criteria have been met</mark>"
        },
        {
          "id": 298,
          "topic": "5. Managing Test Activities",
          "tag": "Không có risks & không có criteria ➔ A: Scheduled time expires",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">When to stop Testing</mark>?",
          "correctKeys": [
            "A"
          ],
          "correctText": "Stop when scheduled time for testing expires",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Stop when scheduled time for testing expires</mark>"
        }
      ]
    },
    {
      "id": "not-included-in-test-plan",
      "kind": "similar-questions",
      "title": "Bộ 5 câu hỏi gần y hệt nhau: 'Cái gì KHÔNG nằm trong Test Plan (IEEE 829)?' (#15, #34 vs #23 vs #144 vs #199)",
      "category": "5. Managing Test Activities",
      "badge": "Đề gần giống nhau",
      "rule": "<strong>Cùng hỏi thành phần KHÔNG thuộc Test Plan nhưng mỗi câu gài một đáp án khác nhau:</strong><br>• <strong>Câu #15 &amp; #34 (trùng nhau 100%)</strong>: <code>Which of the following is not included in Test Plan.</code> ➔ <strong>D: Expected results.</strong> (Expected results nằm trong <em>Test Case Specification</em>).<br>• <strong>Câu #23</strong>: <code>...NOT included in the Test Plan document of the Test Documentation Standard:</code> ➔ <strong>D: Quality plans</strong>.<br>• <strong>Câu #144</strong>: <code>The IEEE 829 test plan documentation standard contains all of the following, EXCEPT</code> ➔ <strong>E: Test specification</strong>.<br>• <strong>Câu #199</strong>: <code>A Test Plan Outline contains which of the following</code> (i. Test Items, ii. Test Scripts, iii. Test Deliverables, iv. Responsibilities) ➔ <strong>ii. Test Scripts là SAI</strong> ➔ Chọn <strong>B: i, iii, iv are true and ii is false</strong>.",
      "items": [
        {
          "id": 15,
          "topic": "5. Managing Test Activities",
          "tag": "Test Plan (bộ 4 đáp án ngắn, trùng #34) ➔ D: Expected results",
          "stemHtml": "Which of the following is <mark class=\"keyword-mark keyword-question-mark\">not included in Test Plan</mark>.",
          "correctKeys": [
            "D"
          ],
          "correctText": "Expected results.",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Expected results</mark>."
        },
        {
          "id": 34,
          "topic": "5. Managing Test Activities",
          "tag": "Câu trùng 100% với #15 ➔ D: Expected results",
          "stemHtml": "Which of the following is <mark class=\"keyword-mark keyword-question-mark\">not included in Test Plan</mark>.",
          "correctKeys": [
            "D"
          ],
          "correctText": "Expected results.",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Expected results</mark>."
        },
        {
          "id": 23,
          "topic": "5. Managing Test Activities",
          "tag": "Test Plan of Test Documentation Standard ➔ D: Quality plans",
          "stemHtml": "Which of the following is <mark class=\"keyword-mark keyword-question-mark\">NOT included in the Test Plan document</mark> of the Test Documentation Standard:",
          "correctKeys": [
            "D"
          ],
          "correctText": "Quality plans",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Quality plans</mark>"
        },
        {
          "id": 144,
          "topic": "5. Managing Test Activities",
          "tag": "IEEE 829 test plan standard EXCEPT ➔ E: Test specification",
          "stemHtml": "The <mark class=\"keyword-mark keyword-question-mark\">IEEE 829 test plan documentation standard</mark> contains all of the following, <mark class=\"keyword-mark keyword-question-mark\">EXCEPT</mark>",
          "correctKeys": [
            "E"
          ],
          "correctText": "Test specification",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Test specification</mark>"
        },
        {
          "id": 199,
          "topic": "5. Managing Test Activities",
          "tag": "Test Plan Outline (La Mã) ➔ B: ii (Test Scripts) là FALSE",
          "stemHtml": "A <mark class=\"keyword-mark keyword-question-mark\">Test Plan Outline</mark> contains which of the following:<br>i. Test Items<br><mark class=\"keyword-mark keyword-question-mark\">ii. Test Scripts</mark><br>iii. Test Deliverables<br>iv. Responsibilities",
          "correctKeys": [
            "B"
          ],
          "correctText": "i, iii, iv are true and ii is false",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">i, iii, iv are true and ii is false</mark>"
        }
      ]
    },
    {
      "id": "how-much-testing-and-exit-criteria",
      "kind": "similar-questions",
      "title": "Câu hỏi gần giống nhau: 'How much testing is enough?' (#304 vs #365) & 'Purpose of Exit / Completion Criteria' (#263, #348, #364)",
      "category": "5. Managing Test Activities",
      "badge": "Đề gần giống nhau",
      "rule": "<strong>Nhóm câu hỏi cùng chủ đề định lượng kiểm thử &amp; tiêu chí kết thúc:</strong><br>• <strong>How much testing is enough? (#304, #365)</strong>: Luôn bám từ khóa <mark class=\"keyword-mark keyword-answer-mark\">risk</mark> (<code>use risks and priorities</code> ở #304; <code>depends on the risk for your industry, contract and special requirements</code> ở #365).<br>• <strong>Purpose of exit / test completion criteria (#263, #348, #364)</strong>:<br>&nbsp;&nbsp;– <strong>#263</strong> (<code>test completion criteria in a test plan</code>) ➔ <strong>E: To plan when to stop testing</strong>.<br>&nbsp;&nbsp;– <strong>#364</strong> (<code>What is the purpose of exit criteria?</code>) ➔ <strong>A: To define when a test level is complete</strong> (chú ý bẫy B là <code>when a test has completed</code> — thiếu chữ <code>level</code> là SAI!).<br>&nbsp;&nbsp;– <strong>#348</strong> (<code>The purpose of exit criteria is:</code>) ➔ <strong>D: All of the others</strong>.",
      "items": [
        {
          "id": 304,
          "topic": "5. Managing Test Activities",
          "tag": "How much testing is enough? (không ngoặc kép) ➔ C: Risks & priorities",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">How much testing is enough</mark>?",
          "correctKeys": [
            "C"
          ],
          "correctText": "We use risks and priorities to focus testing efforts.",
          "correctTextHtml": "We use <mark class=\"keyword-mark keyword-answer-mark\">risks and priorities</mark> to focus testing efforts."
        },
        {
          "id": 365,
          "topic": "5. Managing Test Activities",
          "tag": "\"How much testing is enough?\" (có ngoặc kép) ➔ C: Risk for industry, contract...",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">\"How much testing is enough?\"</mark>",
          "correctKeys": [
            "C"
          ],
          "correctText": "The answer depends on the risk for your industry, contract and special requirements",
          "correctTextHtml": "The answer depends on the <mark class=\"keyword-mark keyword-answer-mark\">risk for your industry, contract and special requirements</mark>"
        },
        {
          "id": 263,
          "topic": "5. Managing Test Activities",
          "tag": "Purpose of test completion criteria ➔ E: To plan when to stop testing",
          "stemHtml": "What is the purpose of <mark class=\"keyword-mark keyword-question-mark\">test completion criteria in a test plan</mark>:",
          "correctKeys": [
            "E"
          ],
          "correctText": "To plan when to stop testing",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">To plan when to stop testing</mark>"
        },
        {
          "id": 364,
          "topic": "5. Managing Test Activities",
          "tag": "Purpose of exit criteria ➔ A: Define when a TEST LEVEL is complete",
          "stemHtml": "What is the <mark class=\"keyword-mark keyword-question-mark\">purpose of exit criteria</mark>?",
          "correctKeys": [
            "A"
          ],
          "correctText": "To define when a test level is complete.",
          "correctTextHtml": "To define <mark class=\"keyword-mark keyword-answer-mark\">when a test level is complete</mark>."
        },
        {
          "id": 348,
          "topic": "5. Managing Test Activities",
          "tag": "The purpose of exit criteria is (choose one) ➔ D: All of the others",
          "stemHtml": "The <mark class=\"keyword-mark keyword-question-mark\">purpose of exit criteria is</mark>: (choose one answer)",
          "correctKeys": [
            "D"
          ],
          "correctText": "All of the others",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">All of the others</mark>"
        }
      ]
    },
    {
      "id": "formal-review-phases-and-types",
      "kind": "similar-questions",
      "title": "Thứ tự pha Formal Review (#46, #275, #187 vs #214, #117) & Phân biệt Planning vs Kick-off (#77, #156 vs #274) & Các loại Review (#279, #307)",
      "category": "3. Static Testing",
      "badge": "Đề gần giống nhau",
      "rule": "<strong>Các câu hỏi về quy trình Review rất dễ lộn thứ tự và nhầm giữa Planning với Kick-off:</strong><br>• <strong>Chuẩn 5 bước work-product review (#46, #275, #187)</strong>: <code>Planning ➔ Initiate review ➔ Individual review ➔ Issue communication &amp; analysis ➔ Fixing &amp; Reporting</code>.<br>• <strong>Chuẩn 6 bước truyền thống (#214)</strong>: <code>Planning (i) ➔ Kick Off (v) ➔ Individual Preparations (iv) ➔ Review Meeting (ii) ➔ Rework (iii) ➔ Follow Up (vi)</code> (<strong>Kick Off luôn đứng TRƯỚC Individual Preparations!</strong>). Bản rút gọn 4 bước (#117): <code>Planning, Review meeting, Rework, Follow up</code>.<br>• <strong>Planning phase (#77, #156) vs Kick-off phase (#274)</strong>: Phân bổ vai trò (<em>Selecting personnel, allocating roles</em>) thuộc <strong>Planning</strong>; Giải thích mục tiêu tài liệu (<em>Explaining the objective</em>) thuộc <strong>Kick-off</strong>!<br>• <strong>Inspection vs Walkthrough vs Technical Review vs Informal Review</strong>: Inspection do <strong>Moderator</strong> dẫn dắt, Walkthrough do <strong>Author</strong> dẫn dắt (#279, #70, #254); Technical Review (= Peer Review #132) có Moderator &amp; quy trình rõ ràng hơn Informal Review (#307, #260).",
      "items": [
        {
          "id": 46,
          "topic": "3. Static Testing",
          "tag": "5 bước Formal review (mũi tên) ➔ Planning -> Initiate -> Individual...",
          "stemHtml": "A typical formal review process consists of <mark class=\"keyword-mark keyword-question-mark\">five main steps</mark>. Which is the correct order?",
          "correctKeys": [
            "B"
          ],
          "correctText": "Planning -> Initiate review -> Individual review -> Issue communication & Analysis -> Fixing & Reporting",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Planning -&gt; Initiate review -&gt; Individual review -&gt; Issue communication &amp; Analysis -&gt; Fixing &amp; Reporting</mark>"
        },
        {
          "id": 275,
          "topic": "3. Static Testing",
          "tag": "5 bước Work product review (gạch ngang) ➔ D",
          "stemHtml": "Which of the following <mark class=\"keyword-mark keyword-question-mark\">sequences BEST shows the main activities</mark> of the work product review process?",
          "correctKeys": [
            "D"
          ],
          "correctText": "Planning — Initiate review — Individual review — Issue communication and analysis — Fixing and Reporting",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Planning — Initiate review — Individual review — Issue communication and analysis — Fixing and Reporting</mark>"
        },
        {
          "id": 214,
          "topic": "3. Static Testing",
          "tag": "6 bước truyền thống ➔ C: i, v, iv, ii, iii, vi (Kick Off trước Individual!)",
          "stemHtml": "The Phases of formal review process is mentioned below <mark class=\"keyword-mark keyword-question-mark\">arrange them in the correct order</mark>.<br><br>i) Planning<br>ii) Review Meeting<br>iii) Rework<br>iv) Individual Preparations<br><mark class=\"keyword-mark keyword-question-mark\">v) Kick Off</mark><br>vi) Follow Up",
          "correctKeys": [
            "C"
          ],
          "correctText": "i, v, iv, ii, iii, vi",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">i, v, iv, ii, iii, vi</mark>"
        },
        {
          "id": 156,
          "topic": "3. Static Testing",
          "tag": "Planning phase ➔ B: Selecting the personnel, allocating roles",
          "stemHtml": "The <mark class=\"keyword-mark keyword-question-mark\">Planning phase of a formal review</mark> includes which of the followings?",
          "correctKeys": [
            "B"
          ],
          "correctText": "Selecting the personnel, allocating roles.",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Selecting the personnel, allocating roles</mark>."
        },
        {
          "id": 274,
          "topic": "3. Static Testing",
          "tag": "Kick-off phase ➔ A: Explaining the objective (Đừng nhầm với Planning!)",
          "stemHtml": "Which of the following activities is included in the <mark class=\"keyword-mark keyword-question-mark\">kick-off phase of a formal review</mark>?",
          "correctKeys": [
            "A"
          ],
          "correctText": "Explaining the objective",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Explaining the objective</mark>"
        },
        {
          "id": 279,
          "topic": "3. Static Testing",
          "tag": "Inspection vs Walkthrough ➔ B: Inspection = Moderator, Walkthrough = Author",
          "stemHtml": "Which of the following BEST describes the <mark class=\"keyword-mark keyword-question-mark\">difference between an inspection and a walkthrough</mark>?",
          "correctKeys": [
            "B"
          ],
          "correctText": "An inspection is led by a moderator and a walkthrough is led by the author.",
          "correctTextHtml": "An <mark class=\"keyword-mark keyword-answer-mark\">inspection is led by a moderator and a walkthrough is led by the author</mark>."
        }
      ]
    },
    {
      "id": "project-risk-vs-product-risk",
      "kind": "similar-questions",
      "title": "Phân biệt Project Risk vs Product Risk (#26 vs #367 vs #137)",
      "category": "5. Managing Test Activities",
      "badge": "Cặp khái niệm đối lập",
      "rule": "<strong>Mẹo phân biệt 100% chính xác giữa Rủi ro Dự án (Project risk) và Rủi ro Sản phẩm (Product risk):</strong><br>• <strong>Project Risk</strong>: Các vấn đề về tổ chức, nhân sự, nhà cung cấp, lịch trình, ngân sách (<code>Organizational factors</code>, <code>Supplier issues</code>, <code>Technical issues</code>).<br>• <strong>Product Risk</strong>: Các vấn đề nằm trực tiếp ở chất lượng phần mềm bàn giao (<code>Poor software characteristics</code>, <code>Error-prone software delivered</code>, phần mềm chạy sai chức năng).<br>&nbsp;&nbsp;➔ Đề hỏi <strong>NOT project risks (#26)</strong> chọn <code>Error-prone software delivered</code>.<br>&nbsp;&nbsp;➔ Đề hỏi <strong>Project risk includes (#367)</strong> chọn <code>Organizational Factors</code>.<br>&nbsp;&nbsp;➔ Đề hỏi <strong>Poor software characteristics (#137)</strong> chọn <code>Only Product risks</code>.",
      "items": [
        {
          "id": 26,
          "topic": "5. Managing Test Activities",
          "tag": "NOT the project risks ➔ D: Error-prone software delivered (là Product risk)",
          "stemHtml": "Which is <mark class=\"keyword-mark keyword-question-mark\">not the project risks</mark>",
          "correctKeys": [
            "D"
          ],
          "correctText": "Error-prone software delivered",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Error-prone software delivered</mark>"
        },
        {
          "id": 367,
          "topic": "5. Managing Test Activities",
          "tag": "A Project risk includes ➔ A: Organizational Factors",
          "stemHtml": "A <mark class=\"keyword-mark keyword-question-mark\">Project risk includes</mark> which of the following?",
          "correctKeys": [
            "A"
          ],
          "correctText": "Organizational Factors",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Organizational Factors</mark>"
        },
        {
          "id": 137,
          "topic": "5. Managing Test Activities",
          "tag": "Poor software characteristics ➔ B: Only Product risks",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Poor software characteristics</mark> are",
          "correctKeys": [
            "B"
          ],
          "correctText": "Only Product risks",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Only Product risks</mark>"
        }
      ]
    },
    {
      "id": "static-analysis-vs-dynamic-analysis-memory-leaks",
      "kind": "similar-questions",
      "title": "Bẫy công cụ phân tích: Static Analysis KHÔNG tìm được Memory Leaks (#16, #59, #120, #325) vs Dynamic Analysis tìm Memory Leaks (#73, #88)",
      "category": "3. Static Testing",
      "badge": "Đề gần giống nhau",
      "rule": "<strong>Nhóm câu hỏi cực hay gài chéo nhau giữa Static Analysis và Dynamic Analysis:</strong><br>• <strong>Memory leaks &amp; unassigned pointers (rò rỉ bộ nhớ / con trỏ lúc chạy)</strong>: Static analysis <strong>KHÔNG THỂ tìm ra</strong> (#16) ➔ Phải dùng <strong>Dynamic analysis tool</strong> khi code đang chạy (#73, #88)!<br>• <strong>Unreachable ('dead') code, biến chưa khai báo, vi phạm coding standards, lỗ hổng bảo mật code</strong>: Tìm tốt nhất bằng <strong>Static analysis tool</strong> (#120, #59, #325, #202, #346).",
      "items": [
        {
          "id": 16,
          "topic": "3. Static Testing",
          "tag": "Static analysis KHÔNG tìm được gì? ➔ C: Memory leaks",
          "stemHtml": "What can <mark class=\"keyword-mark keyword-question-mark\">static analysis NOT find</mark>?",
          "correctKeys": [
            "C"
          ],
          "correctText": "Memory leaks",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Memory leaks</mark>"
        },
        {
          "id": 73,
          "topic": "1. Fundamentals of Testing",
          "tag": "Công cụ phát hiện memory leak ➔ C: Dynamic analysis",
          "stemHtml": "Which of the following tools would you use to <mark class=\"keyword-mark keyword-question-mark\">detect a memory leak</mark>?",
          "correctKeys": [
            "C"
          ],
          "correctText": "Dynamic analysis",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Dynamic analysis</mark>"
        },
        {
          "id": 88,
          "topic": "6. Test Tools",
          "tag": "Công cụ bắt memory leaks & unassigned pointers ➔ A: Dynamic analysis tool",
          "stemHtml": "Which tool will be used to test the flag <mark class=\"keyword-mark keyword-question-mark\">memory leaks and unassigned pointers</mark>",
          "correctKeys": [
            "A"
          ],
          "correctText": "Dynamic analysis tool",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Dynamic analysis tool</mark>"
        },
        {
          "id": 120,
          "topic": "3. Static Testing",
          "tag": "Unreachable (dead) code tìm tốt nhất bằng ➔ E: Static analysis tool",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Unreachable code</mark> would best be found using:",
          "correctKeys": [
            "E"
          ],
          "correctText": "A static analysis tool",
          "correctTextHtml": "A <mark class=\"keyword-mark keyword-answer-mark\">static analysis tool</mark>"
        },
        {
          "id": 59,
          "topic": "3. Static Testing",
          "tag": "Tính năng chính của Static analysis tools ➔ B: Checking coding standards",
          "stemHtml": "What is a <mark class=\"keyword-mark keyword-question-mark\">key feature of static analysis tools</mark>?",
          "correctKeys": [
            "B"
          ],
          "correctText": "Checking coding standards",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Checking coding standards</mark>"
        },
        {
          "id": 325,
          "topic": "3. Static Testing",
          "tag": "Static analysis tool hữu ích nhất cho ➔ D: Enforcement of coding standards",
          "stemHtml": "For which of the following would a <mark class=\"keyword-mark keyword-question-mark\">static analysis tool be MOST useful</mark>?",
          "correctKeys": [
            "D"
          ],
          "correctText": "Enforcement of coding standards.",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Enforcement of coding standards</mark>."
        }
      ]
    },
    {
      "id": "confirmation-regression-maintenance-impact",
      "kind": "similar-questions",
      "title": "Phân biệt Confirmation (Re-testing) vs Regression vs Maintenance Testing vs Impact Analysis (#94, #332, #291, #350, #166, #257, #276, #335)",
      "category": "2. Testing Throughout SDLC",
      "badge": "Đề gần giống nhau",
      "rule": "<strong>Bốn khái niệm kiểm thử liên quan đến thay đổi rất dễ nhầm lẫn:</strong><br>• <strong>Confirmation testing / Re-testing (#94, #332, #350)</strong>: Chạy lại đúng test case từng bị fail để <strong>xác nhận lỗi cũ đã được sửa thành công</strong>.<br>• <strong>Regression testing (#291, #257, #350)</strong>: Kiểm tra các <strong>vùng KHÔNG thay đổi (<mark class=\"keyword-mark keyword-answer-mark\">unchanged areas</mark>)</strong> xem việc sửa lỗi/nâng cấp có gây tác dụng phụ ngoài ý muốn (<em>unexpected side effects</em>) hay không. (Chú ý #291: câu C là <code>unchanged areas</code> [ĐÚNG] vs câu D là <code>changed areas</code> [SAI]!).<br>• <strong>Maintenance Testing (#166)</strong>: Phương pháp áp dụng trong câu #166 là <strong>B: Re-testing</strong> (dù có mặt <code>Confirmation Testing</code> trong đáp án!).<br>• <strong>Impact Analysis (#276, #335, #309)</strong>: Đánh giá tác động của thay đổi để quyết định <strong>cần thực hiện bao nhiêu Regression testing</strong> (<em>how much regression testing to do</em>).",
      "items": [
        {
          "id": 94,
          "topic": "2. Testing Throughout SDLC",
          "tag": "Test lại để xác nhận lỗi cũ đã được gỡ bỏ ➔ C: Confirmation testing",
          "stemHtml": "When a defect is detected and fixed then the software should be retested to confirm that the <mark class=\"keyword-mark keyword-question-mark\">original defect has been successfully removed</mark>. This is called",
          "correctKeys": [
            "C"
          ],
          "correctText": "Confirmation testing",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Confirmation testing</mark>"
        },
        {
          "id": 332,
          "topic": "2. Testing Throughout SDLC",
          "tag": "Điền khuyết Confirmation testing ➔ A: Confirm defect has indeed been fixed",
          "stemHtml": "Fill in the blank: <mark class=\"keyword-mark keyword-question-mark\">Confirmation testing</mark> _____",
          "correctKeys": [
            "A"
          ],
          "correctText": "Execute the test again to confirm that the defect has indeed been fixed",
          "correctTextHtml": "Execute the test again to <mark class=\"keyword-mark keyword-answer-mark\">confirm that the defect has indeed been fixed</mark>"
        },
        {
          "id": 291,
          "topic": "2. Testing Throughout SDLC",
          "tag": "Bẫy 1 chữ ở Regression test ➔ C: Check UNCHANGED areas (không chọn changed!)",
          "stemHtml": "Which is the best thing about the <mark class=\"keyword-mark keyword-question-mark\">regression test</mark>?",
          "correctKeys": [
            "C"
          ],
          "correctText": "Regression test will check unchanged areas of the software to see if they have been affected.",
          "correctTextHtml": "Regression test will check <mark class=\"keyword-mark keyword-answer-mark\">unchanged areas</mark> of the software to see if they have been affected."
        },
        {
          "id": 350,
          "topic": "2. Testing Throughout SDLC",
          "tag": "Phân biệt Re-testing vs Regression testing ➔ A",
          "stemHtml": "The <mark class=\"keyword-mark keyword-question-mark\">difference between re-testing and regression testing</mark> is",
          "correctKeys": [
            "A"
          ],
          "correctText": "Re-testing is running a test again; regression testing looks for unexpected side effects",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Re-testing is running a test again; regression testing looks for unexpected side effects</mark>"
        },
        {
          "id": 166,
          "topic": "2. Testing Throughout SDLC",
          "tag": "Methodologies while performing Maintenance Testing ➔ B: Re-testing",
          "stemHtml": "Methodologies adopted while performing <mark class=\"keyword-mark keyword-question-mark\">Maintenance Testing</mark>",
          "correctKeys": [
            "B"
          ],
          "correctText": "Re-testing",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Re-testing</mark>"
        },
        {
          "id": 276,
          "topic": "2. Testing Throughout SDLC",
          "tag": "Định nghĩa đúng về Impact analysis ➔ D: How much regression testing to do",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Which of the following is correct?</mark>",
          "correctKeys": [
            "D"
          ],
          "correctText": "Impact analysis assesses the effect of a change to the system to determine how much regression testing to do.",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Impact analysis assesses the effect of a change to the system to determine how much regression testing to do</mark>."
        },
        {
          "id": 335,
          "topic": "2. Testing Throughout SDLC",
          "tag": "Impact Analysis helps to decide ➔ A: How much regression testing",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Impact Analysis helps to decide</mark>:",
          "correctKeys": [
            "A"
          ],
          "correctText": "How much regression testing should be done.",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">How much regression testing should be done</mark>."
        }
      ]
    },
    {
      "id": "nonfunctional-performance-load-stress-traps",
      "kind": "similar-questions",
      "title": "Siêu bẫy 'What is NOT test type?' (#12) vs Non-functional (#81, #79, #66, #234) & Load (#150) vs Stress Testing (#85, #305)",
      "category": "2. Testing Throughout SDLC",
      "badge": "Bẫy khái niệm dễ sai",
      "rule": "<strong>Hai cụm câu hỏi cực dễ làm ngược đáp án:</strong><br>• <strong>Bẫy #12 vs #81 về <code>Performance testing</code></strong>:<br>&nbsp;&nbsp;– <strong>Câu #12 (<code>What is not test type?</code>)</strong>: Theo ISTQB chỉ có 4 Test Types cấp cao (<em>Functional, Non-functional, Structural, Change-related</em>); <code>Performance testing</code> chỉ là loại con nằm trong Non-functional ➔ Chọn <strong>D: Performance testing</strong>!<br>&nbsp;&nbsp;– <strong>Câu #81 (<code>Which is the non-functional testing</code>)</strong>: Trong 4 lựa chọn <code>Performance / Unit / Regression / Sanity</code> ➔ Chọn <strong>A: Performance testing</strong>!<br>&nbsp;&nbsp;– <strong>Cặp song sinh Internet Banking (#66 &amp; #234)</strong>: Cùng 4 đáp án y hệt nhau ➔ Luôn chọn <strong>C: Non-functional testing</strong>.<br>• <strong>Phân biệt Load Testing (#150) vs Stress Testing (#85, #305)</strong>:<br>&nbsp;&nbsp;– <strong>Load Testing</strong>: Thử nghiệm các mức tải khác nhau trong phạm vi hoạt động bình thường/kỳ vọng (<code>varying workloads</code> / <code>normal usage conditions</code>).<br>&nbsp;&nbsp;– <strong>Stress Testing</strong>: Vượt quá giới hạn/công suất thiết kế của hệ thống (<code>limitations have been exceeded</code> / <code>beyond normal operational capacity</code>).",
      "items": [
        {
          "id": 12,
          "topic": "2. Testing Throughout SDLC",
          "tag": "What is NOT test type? (4 nhóm ISTQB) ➔ D: Performance testing",
          "stemHtml": "What is <mark class=\"keyword-mark keyword-question-mark\">not test type</mark>?",
          "correctKeys": [
            "D"
          ],
          "correctText": "Performance testing",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Performance testing</mark>"
        },
        {
          "id": 81,
          "topic": "2. Testing Throughout SDLC",
          "tag": "Which IS the non-functional testing ➔ A: Performance testing",
          "stemHtml": "Which is the <mark class=\"keyword-mark keyword-question-mark\">non-functional testing</mark>",
          "correctKeys": [
            "A"
          ],
          "correctText": "Performance testing",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Performance testing</mark>"
        },
        {
          "id": 66,
          "topic": "2. Testing Throughout SDLC",
          "tag": "Internet banking solution (ngắn) ➔ C: Non-functional testing",
          "stemHtml": "What type of testing will you perform on <mark class=\"keyword-mark keyword-question-mark\">internet banking solution</mark>?",
          "correctKeys": [
            "C"
          ],
          "correctText": "Non-functional testing.",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Non-functional testing</mark>."
        },
        {
          "id": 234,
          "topic": "2. Testing Throughout SDLC",
          "tag": "Internet banking system (dài, cùng 4 đáp án với #66) ➔ C: Non-functional",
          "stemHtml": "Which type of testing focuses on evaluating quality attributes such as security, performance, reliability, and usability in an <mark class=\"keyword-mark keyword-question-mark\">Internet banking system</mark>?",
          "correctKeys": [
            "C"
          ],
          "correctText": "Non-functional testing",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Non-functional testing</mark>"
        },
        {
          "id": 150,
          "topic": "2. Testing Throughout SDLC",
          "tag": "Varying workloads (trong ngưỡng hoạt động) ➔ A: Load Testing",
          "stemHtml": "Testing wherein we subject the target of the test, to <mark class=\"keyword-mark keyword-question-mark\">varying workloads</mark> to measure and evaluate the performance behaviors and ability of the target and of the test to continue to function properly under these different workloads.",
          "correctKeys": [
            "A"
          ],
          "correctText": "Load Testing",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Load Testing</mark>"
        },
        {
          "id": 85,
          "topic": "2. Testing Throughout SDLC",
          "tag": "System limitations have been EXCEEDED ➔ A: Stress Testing",
          "stemHtml": "Which testing is used to verify that the system can perform properly when internal program or system <mark class=\"keyword-mark keyword-question-mark\">limitations have been exceeded</mark>",
          "correctKeys": [
            "A"
          ],
          "correctText": "Stress Testing",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Stress Testing</mark>"
        },
        {
          "id": 305,
          "topic": "2. Testing Throughout SDLC",
          "tag": "Stress vs Load testing ➔ C: Stress = beyond capacity, Load = normal usage",
          "stemHtml": "How does <mark class=\"keyword-mark keyword-question-mark\">stress testing differ from load testing</mark>?",
          "correctKeys": [
            "C"
          ],
          "correctText": "Stress testing evaluates system behavior beyond normal operational capacity, while load testing verifies normal usage conditions",
          "correctTextHtml": "Stress testing evaluates system behavior <mark class=\"keyword-mark keyword-answer-mark\">beyond normal operational capacity</mark>, while load testing verifies <mark class=\"keyword-mark keyword-answer-mark\">normal usage conditions</mark>"
        }
      ]
    },
    {
      "id": "test-tools-confusable-questions",
      "kind": "similar-questions",
      "title": "Phân biệt bộ câu hỏi Công cụ kiểm thử (Test Tools): Management (#11, #102) vs Design (#91) vs Execution (#10, #295) vs Mua Tool mới (#168, #299)",
      "category": "6. Test Tools",
      "badge": "Đề gần giống nhau",
      "rule": "<strong> Tránh nhầm chức năng giữa các nhóm công cụ CAST:</strong><br>• <strong>Requirements management tools (#87 &amp; #157 — song sinh)</strong>: Lưu trữ requirements, kiểm tra tính nhất quán (<em>check for consistency</em> — do đó câu #328 ghép <code>Configuration management — Check for consistence</code> là cặp <strong>MISMATCH</strong>!).<br>• <strong>Test management tool (#102, #11)</strong>: Hỗ trợ traceability, ghi nhận incident, lập lịch test; <strong>KHÔNG tự sinh test data (#11: Generating test data)</strong>. Còn hỗ trợ tạo test cases là <strong>Test design tool (#91)</strong>.<br>• <strong>Test execution tool (#10, #295)</strong>: Chạy script, so sánh kết quả nhưng <strong>KHÔNG tự nghĩ ra Expected outputs (#10)</strong>; lợi ích lớn nhất là dễ dàng <strong>CHẠY</strong> regression tests (<mark class=\"keyword-mark keyword-answer-mark\">run regression tests</mark> — #295, cẩn thận bẫy A là <em>create regression tests</em>!).<br>• <strong>Quy trình chọn &amp; triển khai tool mới (#168 vs #299)</strong>: Bắt đầu tìm tool mới (#168) ➔ <code>Analyze your needs and requirements</code>; Khi ĐÃ MUA tool mới về (#299) ➔ đưa cho <code>A small team</code> dùng thử trước (pilot).",
      "items": [
        {
          "id": 87,
          "topic": "5. Managing Test Activities",
          "tag": "Stores requirements & checks consistency (#157 giống hệt) ➔ B: Requirements management",
          "stemHtml": "Which type of tool <mark class=\"keyword-mark keyword-question-mark\">stores requirement statements, checks for consistency</mark>, allows requirements to be prioritized, and enables individual tests to be traceable to requirements, functions, and features?",
          "correctKeys": [
            "B"
          ],
          "correctText": "Requirements management tools",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Requirements management tools</mark>"
        },
        {
          "id": 157,
          "topic": "5. Managing Test Activities",
          "tag": "Câu song sinh với #87 ➔ B: Requirements management tools",
          "stemHtml": "Tool which <mark class=\"keyword-mark keyword-question-mark\">stores requirement statements, check for consistency</mark> and allow requirements to be prioritized and enable individual tests to be traceable to requirements, functions and features.",
          "correctKeys": [
            "B"
          ],
          "correctText": "Requirements management tools",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Requirements management tools</mark>"
        },
        {
          "id": 11,
          "topic": "6. Test Tools",
          "tag": "NOT a feature of test management tool ➔ B: Generating test data",
          "stemHtml": "What is <mark class=\"keyword-mark keyword-question-mark\">NOT typically a feature of a test management tool</mark>?",
          "correctKeys": [
            "B"
          ],
          "correctText": "Generating test data",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Generating test data</mark>"
        },
        {
          "id": 91,
          "topic": "6. Test Tools",
          "tag": "Tool hỗ trợ tạo test cases ➔ A: Test design tool",
          "stemHtml": "Which tool is specifically designed to support the <mark class=\"keyword-mark keyword-question-mark\">creation of test cases</mark>?",
          "correctKeys": [
            "A"
          ],
          "correctText": "Test design tool",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Test design tool</mark>"
        },
        {
          "id": 10,
          "topic": "6. Test Tools",
          "tag": "Test execution tool làm được tất cả NGOẠI TRỪ ➔ A: Generating expected outputs",
          "stemHtml": "A typical commercial <mark class=\"keyword-mark keyword-question-mark\">test execution tool</mark> would be able to perform all of the following <mark class=\"keyword-mark keyword-question-mark\">EXCEPT</mark>:",
          "correctKeys": [
            "A"
          ],
          "correctText": "Generating expected outputs",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Generating expected outputs</mark>"
        },
        {
          "id": 295,
          "topic": "6. Test Tools",
          "tag": "Bẫy 1 chữ ở Test execution tools ➔ D: Easy to RUN (không phải create!) regression tests",
          "stemHtml": "Which one of the following is MOST likely to be a <mark class=\"keyword-mark keyword-question-mark\">benefit of test execution tools</mark>?",
          "correctKeys": [
            "D"
          ],
          "correctText": "It is easy to run regression tests",
          "correctTextHtml": "It is easy to <mark class=\"keyword-mark keyword-answer-mark\">run regression tests</mark>"
        },
        {
          "id": 168,
          "topic": "6. Test Tools",
          "tag": "Bắt đầu khi MUỐN tìm tool mới ➔ C: Analyze your needs and requirements",
          "stemHtml": "The <mark class=\"keyword-mark keyword-question-mark\">place to start if you want a (new) test tool</mark> is:",
          "correctKeys": [
            "C"
          ],
          "correctText": "Analyze your needs and requirements",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Analyze your needs and requirements</mark>"
        },
        {
          "id": 299,
          "topic": "6. Test Tools",
          "tag": "Khi ĐÃ MUA tool mới, ai dùng đầu tiên? ➔ A: A small team (Pilot)",
          "stemHtml": "When a <mark class=\"keyword-mark keyword-question-mark\">new testing tool is purchased, it should be used first by</mark>:",
          "correctKeys": [
            "A"
          ],
          "correctText": "A small team to establish the best way to use the tool",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">A small team to establish the best way to use the tool</mark>"
        }
      ]
    },
    {
      "id": "exhaustive-complete-release-testing-traps",
      "kind": "similar-questions",
      "title": "Bẫy câu hỏi gần giống nhau: Exhaustive vs Complete Testing (#5, #31, #116, #134, #290) & Lý do Test trước khi Release (#262, #358 vs #60, #277)",
      "category": "1. Fundamentals of Testing",
      "badge": "Bẫy câu chữ sát nút",
      "rule": "<strong>Đọc kỹ từng chữ để không chọn ngược:</strong><br>• <strong>Exhaustive testing</strong>: Là bất khả thi (<code>possible</code> ➔ <strong>False</strong> ở #5; <code>impractical and impossible</code> ở #116; <em>NOT a testing principle</em> ở #31 vì thiếu chữ <em>impossible</em>). <strong>NHƯNG</strong> ở câu <strong>#134</strong> hỏi tên phương pháp lý thuyết kiểm tra mọi đường đi &amp; điều kiện ➔ vẫn gọi tên là <strong>B: Exhaustive Testing</strong>! Còn định nghĩa <strong>Complete testing (#290)</strong> là <code>You have discovered every bug in the program</code>.<br>• <strong>Mục đích kiểm thử chung (#60, #277, #359) vs Trước khi phát hành (#262, #358)</strong>:<br>&nbsp;&nbsp;– Hỏi định nghĩa/lý do chung ➔ Tìm lỗi (<code>identify defects</code> / <code>finding defects</code> / <code>Uncover software errors</code>).<br>&nbsp;&nbsp;– Hỏi <strong>main reason for testing software BEFORE RELEASING IT (#262 &amp; #358 — trùng 100%)</strong> ➔ <strong>KHÔNG chọn tìm nhiều bug nhất</strong> mà phải chọn <strong>D: To give information for a risk based decision about release</strong>!",
      "items": [
        {
          "id": 5,
          "topic": "1. Fundamentals of Testing",
          "tag": "Exhaustive testing is possible ➔ B: False",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Exhaustive testing is possible</mark>",
          "correctKeys": [
            "B"
          ],
          "correctText": "False",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">False</mark>"
        },
        {
          "id": 31,
          "topic": "1. Fundamentals of Testing",
          "tag": "Which is NOT a testing principle ➔ D: Exhaustive testing",
          "stemHtml": "Which is <mark class=\"keyword-mark keyword-question-mark\">not a testing principle</mark>",
          "correctKeys": [
            "D"
          ],
          "correctText": "Exhaustive testing",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Exhaustive testing</mark>"
        },
        {
          "id": 134,
          "topic": "1. Fundamentals of Testing",
          "tag": "Hỏi tên phương pháp test mọi path & condition ➔ B: Exhaustive Testing",
          "stemHtml": "Performs sufficient testing to <mark class=\"keyword-mark keyword-question-mark\">evaluate every possible path and condition</mark> in the application system.<br>The only test method that guarantees the proper functioning of the application system is called as _____",
          "correctKeys": [
            "B"
          ],
          "correctText": "Exhaustive Testing",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Exhaustive Testing</mark>"
        },
        {
          "id": 290,
          "topic": "5. Managing Test Activities",
          "tag": "Best definition of complete testing ➔ A: Discovered every bug",
          "stemHtml": "Which is the <mark class=\"keyword-mark keyword-question-mark\">best definition of complete testing</mark>:",
          "correctKeys": [
            "A"
          ],
          "correctText": "You have discovered every bug in the program.",
          "correctTextHtml": "You have <mark class=\"keyword-mark keyword-answer-mark\">discovered every bug in the program</mark>."
        },
        {
          "id": 262,
          "topic": "5. Managing Test Activities",
          "tag": "Main reason for testing BEFORE RELEASING IT (#358 trùng 100%) ➔ D: Risk based decision",
          "stemHtml": "What is the main reason for testing software <mark class=\"keyword-mark keyword-question-mark\">before releasing it</mark>?",
          "correctKeys": [
            "D"
          ],
          "correctText": "To give information for a risk based decision about release",
          "correctTextHtml": "To give information for a <mark class=\"keyword-mark keyword-answer-mark\">risk based decision about release</mark>"
        },
        {
          "id": 358,
          "topic": "5. Managing Test Activities",
          "tag": "Câu trùng 100% với #262 ➔ D: Risk based decision about release",
          "stemHtml": "What is the main reason for testing software <mark class=\"keyword-mark keyword-question-mark\">before releasing it</mark>?",
          "correctKeys": [
            "D"
          ],
          "correctText": "To give information for a risk based decision about release",
          "correctTextHtml": "To give information for a <mark class=\"keyword-mark keyword-answer-mark\">risk based decision about release</mark>"
        },
        {
          "id": 277,
          "topic": "1. Fundamentals of Testing",
          "tag": "Best definition for Testing nói chung ➔ D: Executing Software for finding defects",
          "stemHtml": "Which of the following will be the <mark class=\"keyword-mark keyword-question-mark\">best definition for Testing</mark>:",
          "correctKeys": [
            "D"
          ],
          "correctText": "Testing is executing Software for the purpose of finding defects.",
          "correctTextHtml": "Testing is <mark class=\"keyword-mark keyword-answer-mark\">executing Software for the purpose of finding defects</mark>."
        }
      ]
    },
    {
      "id": "expected-results-error-guessing-usecase-twins",
      "kind": "similar-questions",
      "title": "Các cặp câu hỏi gần giống nhau về Expected Results (#323, #337, #344), Error Guessing (#321 vs #322) & Use Case Testing (#239 vs #351)",
      "category": "4. Test Analysis & Design",
      "badge": "Đề gần giống nhau",
      "rule": "<strong>Ba bộ câu hỏi ngắn rất dễ tích nhầm đáp án mồi:</strong><br>• <strong>Expected results (#323, #337, #344)</strong>: Phải được <strong>xác định TRƯỚC khi chạy test</strong> (<code>specified in advance</code> #323 / <code>specified before execution</code> #344 — đừng bị lừa chọn câu B ở #344!). Nếu không xác định trước ➔ khó biết test pass hay fail (#337).<br>• <strong>Error guessing (#321 vs #322)</strong>:<br>&nbsp;&nbsp;– <code>Error guessing is:</code> (#321) ➔ Chọn <strong>A: An appropriate way</strong> (cấm chọn D: <em>The MOST appropriate way</em>!).<br>&nbsp;&nbsp;– <code>Error guessing is best used</code> (#322) ➔ Chọn <strong>B: After more formal techniques have been applied</strong>.<br>• <strong>Use case testing (#239 vs #351)</strong>: Tìm lỗi trong <code>process flows</code> khi dùng thực tế. Ở <strong>#351</strong>, 4 đáp án A/B/C/D giống nhau 95%, chỉ đổi chữ <code>uncovering</code> vs <code>covering</code> và <code>real world use</code> vs <code>testing use</code> ➔ Chọn <strong>A: uncovering defects ... during real world use</strong>!",
      "items": [
        {
          "id": 323,
          "topic": "2. Testing Throughout SDLC",
          "tag": "Expected results are ➔ D: Most useful when specified in advance",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Expected results are</mark>:",
          "correctKeys": [
            "D"
          ],
          "correctText": "Most useful when specified in advance",
          "correctTextHtml": "Most useful when <mark class=\"keyword-mark keyword-answer-mark\">specified in advance</mark>"
        },
        {
          "id": 344,
          "topic": "1. Fundamentals of Testing",
          "tag": "To make a test case effective ➔ C: Expected outcome specified before execution",
          "stemHtml": "To <mark class=\"keyword-mark keyword-question-mark\">make a test case effective</mark> it is most important that:",
          "correctKeys": [
            "C"
          ],
          "correctText": "The expected outcome is specified before execution.",
          "correctTextHtml": "The <mark class=\"keyword-mark keyword-answer-mark\">expected outcome is specified before execution</mark>."
        },
        {
          "id": 337,
          "topic": "1. Fundamentals of Testing",
          "tag": "If expected result is NOT specified ➔ C: Difficult to determine passed or failed",
          "stemHtml": "If an <mark class=\"keyword-mark keyword-question-mark\">expected result is not specified</mark> then:",
          "correctKeys": [
            "C"
          ],
          "correctText": "It may be difficult to determine if the test has passed or failed",
          "correctTextHtml": "It may be <mark class=\"keyword-mark keyword-answer-mark\">difficult to determine if the test has passed or failed</mark>"
        },
        {
          "id": 321,
          "topic": "4. Test Analysis & Design",
          "tag": "Error guessing is: ➔ A: AN appropriate way (không chọn THE MOST!)",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Error guessing is:</mark>",
          "correctKeys": [
            "A"
          ],
          "correctText": "An appropriate way of deriving system tests.",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">An appropriate way of deriving system tests</mark>."
        },
        {
          "id": 322,
          "topic": "4. Test Analysis & Design",
          "tag": "Error guessing is best used ➔ B: After more formal techniques",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Error guessing is best used</mark>",
          "correctKeys": [
            "B"
          ],
          "correctText": "After more formal techniques have been applied",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">After more formal techniques have been applied</mark>"
        },
        {
          "id": 351,
          "topic": "1. Fundamentals of Testing",
          "tag": "4 đáp án giống nhau 95% ➔ A: UNCOVERING defects ... REAL WORLD use",
          "stemHtml": "The Test Cases <mark class=\"keyword-mark keyword-question-mark\">Derived from use cases</mark>",
          "correctKeys": [
            "A"
          ],
          "correctText": "Are most useful in uncovering defects in the process flows during real world use of the system",
          "correctTextHtml": "Are most useful in <mark class=\"keyword-mark keyword-answer-mark\">uncovering defects</mark> in the process flows during <mark class=\"keyword-mark keyword-answer-mark\">real world use</mark> of the system"
        }
      ]
    },
    {
      "id": "duplicate-pairs-incident-static-inspection-bottomup",
      "kind": "same-options",
      "title": "Các cặp câu Song sinh chung 100% bộ đáp án: Static Technique (#25 & #35), Inspections (#336 & #356), Bottom-up (#155 & #235) & Incident Report (#14 & #24)",
      "category": "3. Static Testing",
      "badge": "Bộ 4 đáp án giống nhau 100%",
      "rule": "<strong>4 cặp câu song sinh xuất hiện lặp lại trong ngân hàng 367 câu với bộ đáp án giống hệt nhau:</strong><br>• <strong>Static testing technique (#25 &amp; #35 — trùng 100%)</strong>: <code>Walkthrough | Data flow analysis | Inspections | Error guessing</code> ➔ Không phải static là <strong>A: Error guessing</strong>.<br>• <strong>Inspections EXCEPT (#336 &amp; #356 — cùng 4 đáp án)</strong>: Inspections không chạy code nên KHÔNG thể đo độ phủ ➔ Chọn <strong>D: How much of the code has been covered</strong>.<br>• <strong>Tích hợp từ module lá/cuối (#155 &amp; #235 — cùng 4 đáp án)</strong>: Thấy <code>terminal modules</code> hoặc <code>lowest-level (leaf) modules</code> ➔ Chọn <strong>B: Bottom-up integration</strong>.<br>• <strong>Incident Report KHÔNG ghi gì (#14 &amp; #24)</strong>: Chỉ mô tả hiện tượng/môi trường tái hiện lỗi, KHÔNG đề xuất cách sửa code (<code>How to fix the fault</code> #14 / <code>Suggestions as to how to fix the problem</code> #24).",
      "items": [
        {
          "id": 25,
          "topic": "3. Static Testing",
          "tag": "NOT a static testing technique ➔ A: Error guessing",
          "stemHtml": "Which of the following is <mark class=\"keyword-mark keyword-question-mark\">not a static testing technique</mark>?",
          "correctKeys": [
            "A"
          ],
          "correctText": "Error guessing",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Error guessing</mark>"
        },
        {
          "id": 35,
          "topic": "3. Static Testing",
          "tag": "Câu trùng 100% với #25 ➔ A: Error guessing",
          "stemHtml": "Which of the following is <mark class=\"keyword-mark keyword-question-mark\">not a static testing technique</mark>?",
          "correctKeys": [
            "A"
          ],
          "correctText": "Error guessing",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Error guessing</mark>"
        },
        {
          "id": 336,
          "topic": "3. Static Testing",
          "tag": "Inspections can find all except ➔ D: How much code covered",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Inspections can find all the following except</mark>",
          "correctKeys": [
            "D"
          ],
          "correctText": "How much of the code has been covered",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">How much of the code has been covered</mark>"
        },
        {
          "id": 356,
          "topic": "3. Static Testing",
          "tag": "Inspections EXCEPT (song sinh #336) ➔ D: How much code covered",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Inspections can find all of the following defects or issues, EXCEPT</mark>:",
          "correctKeys": [
            "D"
          ],
          "correctText": "How much of the code has been covered",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">How much of the code has been covered</mark>"
        },
        {
          "id": 155,
          "topic": "2. Testing Throughout SDLC",
          "tag": "Starting with terminal modules ➔ B: Bottom-up integration",
          "stemHtml": "The process starting with the <mark class=\"keyword-mark keyword-question-mark\">terminal modules</mark> is called:",
          "correctKeys": [
            "B"
          ],
          "correctText": "Bottom-up integration",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Bottom-up integration</mark>"
        },
        {
          "id": 235,
          "topic": "2. Testing Throughout SDLC",
          "tag": "Begins with lowest-level (leaf) modules ➔ B: Bottom-up integration",
          "stemHtml": "What is the integration approach that begins with the <mark class=\"keyword-mark keyword-question-mark\">lowest-level (leaf) modules</mark> and progresses upward?",
          "correctKeys": [
            "B"
          ],
          "correctText": "Bottom-up integration",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Bottom-up integration</mark>"
        },
        {
          "id": 14,
          "topic": "5. Managing Test Activities",
          "tag": "Need NOT be in test incident report ➔ A: How to fix the fault",
          "stemHtml": "What information <mark class=\"keyword-mark keyword-question-mark\">need not be included in a test incident report</mark>:",
          "correctKeys": [
            "A"
          ],
          "correctText": "How to fix the fault",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">How to fix the fault</mark>"
        },
        {
          "id": 24,
          "topic": "5. Managing Test Activities",
          "tag": "NOT find on software incident report ➔ C: Suggestions how to fix",
          "stemHtml": "Which of the following would you <mark class=\"keyword-mark keyword-question-mark\">NOT usually find on a software incident report</mark>?",
          "correctKeys": [
            "C"
          ],
          "correctText": "Suggestions as to how to fix the problem.",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Suggestions as to how to fix the problem</mark>."
        }
      ]
    },
    {
      "id": "integration-scale-alpha-beta-vv-qa",
      "kind": "similar-questions",
      "title": "Các cặp khái niệm đối lập dễ lộn ngược: Integration Small (#289) vs Large (#338), Alpha/Beta/Field (#1, #50, #145) & V&V / QA (#7, #53, #207, #6, #306)",
      "category": "2. Testing Throughout SDLC",
      "badge": "Cặp khái niệm đối lập",
      "rule": "<strong>Đặt cạnh nhau để không bao giờ bị bẫy đảo vế:</strong><br>• <strong>Integration in the small (#289) vs in the large (#338)</strong>: <em>In the small</em> = kết hợp các module bên trong hệ thống (<em>which modules to combine when</em>); <em>In the large</em> = tích hợp hệ thống với các hệ thống bên ngoài khác (<em>combined with other systems</em>).<br>• <strong>Alpha vs Beta vs Field testing (#1, #50, #145)</strong>: Alpha tại site của tổ chức phát triển, Beta tại địa điểm khách hàng (câu #1 viết ngược nên chọn <strong>False</strong>!); bản build rất sớm gửi vài khách hàng/marketing demo là <code>Alpha release</code> (#50); test tại <em>client own locations</em> (khi đáp án không có Beta) là <code>Field testing</code> (#145).<br>• <strong>Verification (#7, #53) vs Validation (#207) &amp; QA (#6, #306)</strong>: Verification = <code>building the product right</code> (#7: True; gồm Reviews/Walkthroughs/Inspections #53); Validation = <code>built the right product</code> (#207: ii đúng). Câu #6 định nghĩa Quality Control nhưng gán tên Quality Assurance nên chọn <strong>False</strong>; còn QA dựa vào kiểm tra tuân thủ chuẩn (#306).",
      "items": [
        {
          "id": 289,
          "topic": "2. Testing Throughout SDLC",
          "tag": "Integration testing in the SMALL ➔ C: Which modules to combine when",
          "stemHtml": "Which of the following is the main purpose of the integration strategy for <mark class=\"keyword-mark keyword-question-mark\">integration testing in the small</mark>?",
          "correctKeys": [
            "C"
          ],
          "correctText": "To specify which modules to combine when and how many at once",
          "correctTextHtml": "To specify <mark class=\"keyword-mark keyword-answer-mark\">which modules to combine when and how many at once</mark>"
        },
        {
          "id": 338,
          "topic": "2. Testing Throughout SDLC",
          "tag": "Integration testing in the LARGE ➔ A: Combined with other systems",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Integration testing in the large</mark> involves:",
          "correctKeys": [
            "A"
          ],
          "correctText": "Testing the system when combined with other systems.",
          "correctTextHtml": "Testing the system when <mark class=\"keyword-mark keyword-answer-mark\">combined with other systems</mark>."
        },
        {
          "id": 1,
          "topic": "2. Testing Throughout SDLC",
          "tag": "Bẫy đảo ngược nơi thực hiện Alpha & Beta ➔ B: False",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Beta testing is performed at developing organization's site</mark> where as Alpha testing is performed by people at their own locations.",
          "correctKeys": [
            "B"
          ],
          "correctText": "False",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">False</mark>"
        },
        {
          "id": 50,
          "topic": "2. Testing Throughout SDLC",
          "tag": "Very early build cho key customers & marketing demo ➔ A: Alpha release",
          "stemHtml": "_____ is a <mark class=\"keyword-mark keyword-question-mark\">very early build</mark> intended for limited distribution to a few key customers and to marketing for <mark class=\"keyword-mark keyword-question-mark\">demonstration purposes</mark>.",
          "correctKeys": [
            "A"
          ],
          "correctText": "Alpha release",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Alpha release</mark>"
        },
        {
          "id": 145,
          "topic": "2. Testing Throughout SDLC",
          "tag": "Performed at client own locations (không có Beta) ➔ B: Field testing",
          "stemHtml": "The _____ Testing will be performed by the people at <mark class=\"keyword-mark keyword-question-mark\">client own locations</mark>",
          "correctKeys": [
            "B"
          ],
          "correctText": "Field testing",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Field testing</mark>"
        },
        {
          "id": 7,
          "topic": "1. Fundamentals of Testing",
          "tag": "Verification = 'Are we building the product right?' ➔ A: True",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Verification</mark> can be termed as 'Are we <mark class=\"keyword-mark keyword-question-mark\">building the product right</mark>?'",
          "correctKeys": [
            "A"
          ],
          "correctText": "True",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">True</mark>"
        },
        {
          "id": 53,
          "topic": "1. Fundamentals of Testing",
          "tag": "Reviews, walkthroughs, inspections thuộc ➔ C: Verification process",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Reviews, walkthroughs, and inspections</mark> are part of _____",
          "correctKeys": [
            "C"
          ],
          "correctText": "Verification process",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Verification process</mark>"
        },
        {
          "id": 207,
          "topic": "1. Fundamentals of Testing",
          "tag": "Validation = 'built the right product' ➔ B: ii is true",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Validation</mark> involves which of the following<br>i. Helps to check the Quality of the Built Product<br>ii. Helps to check that we have <mark class=\"keyword-mark keyword-question-mark\">built the right product</mark><br>iii. Helps in developing the product<br>iv. Monitoring tool wastage and obsoleteness",
          "correctKeys": [
            "B"
          ],
          "correctText": "ii is true and i, iii, iv are false",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">ii is true and i, iii, iv are false</mark>"
        },
        {
          "id": 6,
          "topic": "1. Fundamentals of Testing",
          "tag": "Bẫy định nghĩa QC gán mác Quality Assurance ➔ B: False",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Quality Assurance</mark> is the process by which <mark class=\"keyword-mark keyword-question-mark\">product quality is compared</mark> with the application standards and the action taken when nonconformance is detected.",
          "correctKeys": [
            "B"
          ],
          "correctText": "False",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">False</mark>"
        },
        {
          "id": 306,
          "topic": "1. Fundamentals of Testing",
          "tag": "Reviews hỗ trợ QA như thế nào? ➔ B: Check compliance with standards",
          "stemHtml": "How do <mark class=\"keyword-mark keyword-question-mark\">reviews support software quality assurance</mark>?",
          "correctKeys": [
            "B"
          ],
          "correctText": "By providing a way to check compliance with standards",
          "correctTextHtml": "By providing a way to <mark class=\"keyword-mark keyword-answer-mark\">check compliance with standards</mark>"
        }
      ]
    },
    {
      "id": "cost-of-defects-and-independence-traps",
      "kind": "similar-questions",
      "title": "Chi phí sửa lỗi theo giai đoạn (#122, #283, #349, #360, #113) & Mức độ độc lập của Tester (#284, #334, #342)",
      "category": "1. Fundamentals of Testing",
      "badge": "Đề gần giống nhau",
      "rule": "<strong>Hai cụm câu hỏi lý thuyết rất hay nhầm đáp án sát nghĩa:</strong><br>• <strong>Nguồn gốc &amp; Chi phí lỗi (#122, #283, #349, #360, #113)</strong>: Phần lớn lỗi phát sinh từ pha <strong>Requirements</strong> (#122) và lỗi ở <strong>Requirements</strong> cũng đắt đỏ nhất khi sửa (#283); càng về gần lúc vận hành thực tế (<em>live use</em>) chi phí sửa càng tăng (#349) vì lỗi đã ăn sâu vào tài liệu, code, test (#360). Hoạt động test tìm lỗi tiết kiệm chi phí nhất là <strong>Test Design</strong> (#113).<br>• <strong>Độ độc lập trong kiểm thử (#284, #334, #342)</strong>:<br>&nbsp;&nbsp;– Độc lập cao nhất (#284) ➔ người từ <code>a different organization</code>; IV&amp;V (#334) ➔ <code>Entity Outside the Project's sphere of influence</code>.<br>&nbsp;&nbsp;– ⚠️ <strong>Bẫy #342 (<code>Choose the incorrect sentence</code>)</strong>: Có cả câu A (<code>wrote the item under test</code>) và câu D (<code>wrote the source code</code>) ➔ Đáp án chuẩn ngân hàng đề là <strong>D: Tests by the person who wrote the source code.</strong>!",
      "items": [
        {
          "id": 122,
          "topic": "1. Fundamentals of Testing",
          "tag": "Đa số lỗi hệ thống phát sinh ở pha nào? ➔ A: Requirements Phase",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Majority of system errors occur</mark> in the _____ phase",
          "correctKeys": [
            "A"
          ],
          "correctText": "Requirements Phase.",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Requirements Phase</mark>."
        },
        {
          "id": 283,
          "topic": "1. Fundamentals of Testing",
          "tag": "Lỗi ở đâu tốn chi phí sửa ĐẮT NHẤT? ➔ C: Faults in requirements",
          "stemHtml": "Which of the following <mark class=\"keyword-mark keyword-question-mark\">statements are true</mark>?",
          "correctKeys": [
            "C"
          ],
          "correctText": "Faults in requirements are the most expensive to fix",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Faults in requirements are the most expensive to fix</mark>"
        },
        {
          "id": 349,
          "topic": "1. Fundamentals of Testing",
          "tag": "Chi phí sửa lỗi biến thiên thế nào? ➔ B: Increases towards live use",
          "stemHtml": "The <mark class=\"keyword-mark keyword-question-mark\">cost of fixing a fault</mark>:",
          "correctKeys": [
            "B"
          ],
          "correctText": "Increases as we move the product towards live use",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Increases as we move the product towards live use</mark>"
        },
        {
          "id": 360,
          "topic": "1. Fundamentals of Testing",
          "tag": "Tại sao phát hiện càng muộn sửa càng đắt? ➔ C: Built into more docs, code, tests",
          "stemHtml": "The later in the development life cycle a fault is discovered, the <mark class=\"keyword-mark keyword-question-mark\">more expensive it is to fix. Why?</mark>",
          "correctKeys": [
            "C"
          ],
          "correctText": "The fault has been built into more documentation, code, tests, etc",
          "correctTextHtml": "The fault has been <mark class=\"keyword-mark keyword-answer-mark\">built into more documentation, code, tests</mark>, etc"
        },
        {
          "id": 113,
          "topic": "5. Managing Test Activities",
          "tag": "Hoạt động test nào tìm lỗi tiết kiệm chi phí nhất? ➔ B: Design",
          "stemHtml": "During which test activity could <mark class=\"keyword-mark keyword-question-mark\">faults be found most cost effectively</mark>?",
          "correctKeys": [
            "B"
          ],
          "correctText": "Design",
          "correctTextHtml": "<mark class=\"keyword-mark keyword-answer-mark\">Design</mark>"
        },
        {
          "id": 284,
          "topic": "1. Fundamentals of Testing",
          "tag": "Mức độ độc lập CAO NHẤT ➔ C: Person from a different organization",
          "stemHtml": "Which of the following has <mark class=\"keyword-mark keyword-question-mark\">highest level of independence</mark> in which test cases are:",
          "correctKeys": [
            "C"
          ],
          "correctText": "Designed by a person from a different organization",
          "correctTextHtml": "Designed by a <mark class=\"keyword-mark keyword-answer-mark\">person from a different organization</mark>"
        },
        {
          "id": 334,
          "topic": "1. Fundamentals of Testing",
          "tag": "Independent V&V (IV&V) ➔ D: Entity Outside Project's sphere of influence",
          "stemHtml": "<mark class=\"keyword-mark keyword-question-mark\">Independent Verification &amp; Validation</mark> is",
          "correctKeys": [
            "D"
          ],
          "correctText": "Done by an Entity Outside the Project's sphere of influence",
          "correctTextHtml": "Done by an Entity <mark class=\"keyword-mark keyword-answer-mark\">Outside the Project's sphere of influence</mark>"
        },
        {
          "id": 342,
          "topic": "1. Fundamentals of Testing",
          "tag": "Bẫy câu SAI (incorrect sentence) về tester ➔ D: Wrote the source code",
          "stemHtml": "Independent testing — who is a tester? <mark class=\"keyword-mark keyword-question-mark\">Choose the incorrect sentence</mark>:",
          "correctKeys": [
            "D"
          ],
          "correctText": "Tests by the person who wrote the source code.",
          "correctTextHtml": "Tests by the person who <mark class=\"keyword-mark keyword-answer-mark\">wrote the source code</mark>."
        }
      ]
    }
  ],
  "roteSheet": {
    "rows": [
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "All of the others",
        "avoid": "All of them are true / All of i, ii, iii",
        "qIds": [
          39,
          127,
          158,
          297,
          339,
          346,
          348,
          362
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "Requirements management tools",
        "avoid": "Incident management tools / Configuration management tools",
        "qIds": [
          87,
          157
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "Bottom-up integration",
        "avoid": "Top-down integration / None of the others",
        "qIds": [
          155,
          235
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "1 test for statement coverage, 2 for branch coverage",
        "avoid": "3 for branch coverage",
        "qIds": [
          219,
          225
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "information for a risk based decision about release",
        "avoid": "find all remaining defects",
        "qIds": [
          262,
          358
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "How much of the code has been covered",
        "avoid": "Variables not defined in the code",
        "qIds": [
          336,
          356
        ]
      },
      {
        "mode": "instant",
        "chapter": 6,
        "cue": null,
        "pick": "Generating expected outputs",
        "avoid": "Recording test inputs",
        "qIds": [
          10
        ]
      },
      {
        "mode": "instant",
        "chapter": 6,
        "cue": null,
        "pick": "Generating test data",
        "avoid": "Scheduling tests / Logging test results",
        "qIds": [
          11
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "developed a library, helping to improve",
        "avoid": "Thiếu người / Trễ lịch",
        "qIds": [
          13
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "How to fix the fault",
        "avoid": "How to reproduce the fault / Test environment details",
        "qIds": [
          14
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "Memory leaks",
        "avoid": "Unreachable (\"dead\") code / Array bound violations",
        "qIds": [
          16
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "Big-bang",
        "avoid": "Top down / Bottom up",
        "qIds": [
          17
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "State-Transition",
        "avoid": "Usability / Performance",
        "qIds": [
          18
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "Auditing conformance to IS09001",
        "avoid": "Identification of test versions / Controlled library access",
        "qIds": [
          19
        ]
      },
      {
        "mode": "instant",
        "chapter": 6,
        "cue": null,
        "pick": "technologies used by the competitors",
        "avoid": "Evaluation of tools against clear...",
        "qIds": [
          20
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "IEEE610",
        "avoid": "IEEE829 / BS7925-1",
        "qIds": [
          21
        ]
      },
      {
        "mode": "instant",
        "chapter": 6,
        "cue": null,
        "pick": "Use of automated test execution tools",
        "avoid": "Testing performed by users",
        "qIds": [
          22
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "Quality plans",
        "avoid": "What is not to be tested / Test environments",
        "qIds": [
          23
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "Suggestions as to how to fix",
        "avoid": "Actual and expected results",
        "qIds": [
          24
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "Error-prone software delivered",
        "avoid": "Supplier issues / Organization factors",
        "qIds": [
          26
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Debugging defects",
        "avoid": "Finding defects / Preventing defects",
        "qIds": [
          27
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "understand the source code",
        "avoid": "Should be able to understand a functional...",
        "qIds": [
          32
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "Reducing the need for documentation",
        "avoid": "Reducing testing cost and time",
        "qIds": [
          33
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "Top-down integration testing",
        "avoid": "Business process-based testing / Requirements-based testing",
        "qIds": [
          37
        ]
      },
      {
        "mode": "instant",
        "chapter": 6,
        "cue": null,
        "pick": "Designing the Tests",
        "avoid": "Comparing actual results",
        "qIds": [
          38
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "(ii) Structural Testing",
        "avoid": "(i) Functional testing / Both of (i) and (ii)",
        "qIds": [
          40
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "All members of the reviewing team are responsible",
        "avoid": "Defects and issues are identified and...",
        "qIds": [
          41
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Deliverable base-lining",
        "avoid": "Defect prevention / Management reporting",
        "qIds": [
          42
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "not be very confident",
        "avoid": "Component testing should be black box,...",
        "qIds": [
          43
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "hard to find with dynamic testing",
        "avoid": "Static analysis is not necessary",
        "qIds": [
          44
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "non-functional requirement was not specified",
        "avoid": "This is an acceptable risk of a...",
        "qIds": [
          45
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "Planning -> Initiate review -> Individual review",
        "avoid": "Kick-off đứng đầu",
        "qIds": [
          46
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "proportion of decision outcomes",
        "avoid": "statement outcomes",
        "qIds": [
          47
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Supportability",
        "avoid": "Functionality / Usability",
        "qIds": [
          48
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Improvements suggested by users",
        "avoid": "Requirements / Documentation",
        "qIds": [
          49
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "Alpha release",
        "avoid": "Beta release / Test release document",
        "qIds": [
          50
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Verification process",
        "avoid": "Design process / Validation process",
        "qIds": [
          53
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Improve software accuracy",
        "avoid": "Find faults / Assure quality",
        "qIds": [
          55
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Unit, integration, system, validation",
        "avoid": "None of the above",
        "qIds": [
          57
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Supplies inputs to the software",
        "avoid": "Schedules tests / Manages software incidents",
        "qIds": [
          58
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "Checking coding standards",
        "avoid": "Executing the code / Testing system performance",
        "qIds": [
          59
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "To identify defects in software",
        "avoid": "To increase software complexity / To reduce software features",
        "qIds": [
          60
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "Closing the incident report",
        "avoid": "Logging the incident",
        "qIds": [
          61
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "Confirmation and regression testing",
        "avoid": "Performance and stress testing / Usability and compliance testing",
        "qIds": [
          62
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "Missing requirements or design defects",
        "avoid": "Performance-related defects / Defects in user interface design",
        "qIds": [
          64
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "(2) Record/Playback",
        "avoid": "(1) Performance / Both of (1) and (2)",
        "qIds": [
          65
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "impact of the defect on the system",
        "avoid": "urgency / priority",
        "qIds": [
          67
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Robustness",
        "avoid": "Operability / Observability",
        "qIds": [
          68
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "De-bugging",
        "avoid": "Estimating test duration / Incident Management",
        "qIds": [
          69
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "Scenario, Dry Run, Peer Group",
        "avoid": "Pre Meeting Preparations / Formal Follow Up Process",
        "qIds": [
          70
        ]
      },
      {
        "mode": "instant",
        "chapter": 6,
        "cue": null,
        "pick": "Capture/Playback",
        "avoid": "Data tester / Boundary tester",
        "qIds": [
          71
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "Allocate the individual roles",
        "avoid": "Log defects / Gather metrics",
        "qIds": [
          77
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "Experience-based testing",
        "avoid": "Black-box testing / White-box testing",
        "qIds": [
          92
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "Branch coverage testing",
        "avoid": "Basis path coverage testing / Statement coverage testing",
        "qIds": [
          93
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "During test planning",
        "avoid": "During test analysis / During test execution",
        "qIds": [
          95
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "Experience-based",
        "avoid": "Specification-based / Structure-based",
        "qIds": [
          96
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "A failure",
        "avoid": "An error / A fault",
        "qIds": [
          97
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "user-friendliness, while performance testing measures",
        "avoid": "Usability testing measures how fast the...",
        "qIds": [
          100
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "Statement and branch testing",
        "avoid": "Usability testing / Security testing",
        "qIds": [
          103
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Plain language specification model",
        "avoid": "Process flow model / State transaction model",
        "qIds": [
          104
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "Difficult to test",
        "avoid": "Large / Small",
        "qIds": [
          105
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Computer Aided Software Testing",
        "avoid": "Computer Aided Software Tools / None of the others",
        "qIds": [
          110
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "Process improvement",
        "avoid": "Review process itself / Metrics analysis",
        "qIds": [
          112
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "End User License Agreement",
        "avoid": "End Usability License Agreement / End User License Arrangement",
        "qIds": [
          115
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Is impractical and impossible",
        "avoid": "Is impractical but possible / Is practically possible",
        "qIds": [
          116
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "Planning, Review meeting, Rework, Follow up",
        "avoid": "Planning, Review meeting, Rework, Kick off",
        "qIds": [
          117
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Poor software and poor testing",
        "avoid": "Insufficient time for testing / Bad luck",
        "qIds": [
          118
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Project status report",
        "avoid": "Interim Test report / Final test report",
        "qIds": [
          119
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "A static analysis tool",
        "avoid": "Code reviews / Code inspections",
        "qIds": [
          120
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Requirements Phase",
        "avoid": "Analysis and Design Phase / Development Phase",
        "qIds": [
          122
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Extemal failure",
        "avoid": "Internal failure / Appraisal",
        "qIds": [
          123
        ]
      },
      {
        "mode": "instant",
        "chapter": 6,
        "cue": null,
        "pick": "Lack of Objectivity",
        "avoid": "Lack of technical documentation / Lack of training",
        "qIds": [
          124
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "Random testing",
        "avoid": "Data Flow testing / Statement testing",
        "qIds": [
          125
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "Pole Coverage",
        "avoid": "Statement Coverage / Condition Coverage",
        "qIds": [
          126
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Reducing test time",
        "avoid": "No change / Increasing test time",
        "qIds": [
          128
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "Mediates between people",
        "avoid": "Takes minutes of the meeting / Takes telephone calls",
        "qIds": [
          129
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Plan, Do, Check, Act",
        "avoid": "Plan, Do, Correct, Act / Plan, Debug, Check, Act",
        "qIds": [
          135
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Conformance to requirements",
        "avoid": "Quality is job one / Zero defects",
        "qIds": [
          136
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "Only Product risks",
        "avoid": "Only Project risks / Project risks and Product risks",
        "qIds": [
          137
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "Business scenarios",
        "avoid": "Performance testing / Unit testing",
        "qIds": [
          138
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "Purchased/contracted software",
        "avoid": "Traditional system development / Iterative development",
        "qIds": [
          139
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Model based testing approach",
        "avoid": "Heuristic testing approach / Methodical testing approach",
        "qIds": [
          140
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Viability",
        "avoid": "Correctness / Usability",
        "qIds": [
          142
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "Field testing",
        "avoid": "Alpha testing / Performance testing",
        "qIds": [
          145
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Procedures and standards",
        "avoid": "Tools and techniques / Processes and walkthroughs",
        "qIds": [
          146
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "Configuration Control",
        "avoid": "Status Accounting / Configuration Identification",
        "qIds": [
          152
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Generating many transactions",
        "avoid": "Measuring response time / Measuring transaction rates",
        "qIds": [
          154
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "Selecting the personnel, allocating roles",
        "avoid": "Explaining the objectives / Follow up",
        "qIds": [
          156
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "User Acceptance Test Cases",
        "avoid": "Integration Level Test Cases / Unit Level Test Cases",
        "qIds": [
          161
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "Open, Assigned, Fixed, Closed",
        "avoid": "Open, Fixed, Assigned, Closed / Assigned, Open, Closed, Fixed",
        "qIds": [
          163
        ]
      },
      {
        "mode": "instant",
        "chapter": 6,
        "cue": null,
        "pick": "Analyze your needs and requirements",
        "avoid": "Attend a tool exhibition / Invite a vendor to give a demo",
        "qIds": [
          168
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "ISO 9126",
        "avoid": "ISO 829 / ISO 1012",
        "qIds": [
          172
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "8 characters",
        "avoid": "7 characters / 13 characters",
        "qIds": [
          173
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "32, 37, 40",
        "avoid": "23, 24, 25 / 0, 12, 25",
        "qIds": [
          174
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "3,10,22",
        "avoid": "10,11,21 / 3,20,21",
        "qIds": [
          176
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "15, 19 and 25",
        "avoid": "17, 18 and 19 / 18, 20 and 22",
        "qIds": [
          177
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "4, 5, 99",
        "avoid": "5, 6, 20 / 4, 5, 80",
        "qIds": [
          178
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "40-50",
        "avoid": "10-20 / 70-80",
        "qIds": [
          179
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "9,10,21,22",
        "avoid": "9,10,11,22 / 10,11,21,22",
        "qIds": [
          180
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "1899,1900,2004,2005",
        "avoid": "0,1900,2004,2005 / 1900,2004",
        "qIds": [
          181
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "22,23,24",
        "avoid": "12,16,22 / 24,27,17",
        "qIds": [
          184
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "All of them are valid reasons for failure",
        "avoid": "2 is a valid reason; 1,3,4 & 5 are not",
        "qIds": [
          185
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "ii is true and i, iii, iv are false",
        "avoid": "Options i, ii, iii, iv are true",
        "qIds": [
          207
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "depends on the risks for the system",
        "avoid": "All faults fixed / All tests executed",
        "qIds": [
          210
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "i, v, iv, ii, iii, vi",
        "avoid": "i, ii, iii, iv, v, vi / vi, i, ii, iii, iv, v",
        "qIds": [
          214
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "(i) Identifying defects",
        "avoid": "(ii) Fixing defects / (i) and (ii)",
        "qIds": [
          215
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "L - N + 2P",
        "avoid": "N - L + 2P / N - L + P",
        "qIds": [
          216
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "Boo01k",
        "avoid": "BOOK / Book",
        "qIds": [
          232
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "Test Effectiveness",
        "avoid": "Defects / Trends analysis",
        "qIds": [
          233
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "without executing the software",
        "avoid": "To execute the software and identify defects",
        "qIds": [
          237
        ]
      },
      {
        "mode": "instant",
        "chapter": 6,
        "cue": null,
        "pick": "separate test data from scripts",
        "avoid": "They do not require external data",
        "qIds": [
          238
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "defects in process flows related to typical use",
        "avoid": "To identify defects in the connections...",
        "qIds": [
          239
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "behavior from an external perspective",
        "avoid": "internal code structure",
        "qIds": [
          240
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "Static testing does not involve executing the code",
        "avoid": "Static testing involves executing the...",
        "qIds": [
          241
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "Integration testing, system testing, acceptance testing",
        "avoid": "System testing, integration testing,...",
        "qIds": [
          244
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "To verify that the system behaves correctly under load",
        "avoid": "To ensure that the system meets...",
        "qIds": [
          245
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "integrates testing throughout the development phases",
        "avoid": "less costly and time-consuming",
        "qIds": [
          246
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "individual units or components in isolation",
        "avoid": "To perform performance testing",
        "qIds": [
          247
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "how well the system performs",
        "avoid": "It is always performed after functional...",
        "qIds": [
          248
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "misunderstandings and reduced software quality",
        "avoid": "It enhances the efficiency of the...",
        "qIds": [
          249
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "vary based on the specific context",
        "avoid": "It is irrelevant since all testing...",
        "qIds": [
          250
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "clarifies what is included and excluded",
        "avoid": "It outlines the geographical areas where...",
        "qIds": [
          251
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "changes in state within an application",
        "avoid": "The visual aspects of the user interface",
        "qIds": [
          252
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "interfaces between components, interactions",
        "avoid": "It is unit, module and program testing,...",
        "qIds": [
          253
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "educate participants and gather feedback",
        "avoid": "To detect critical defects / To automate review processes",
        "qIds": [
          254
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Same tests over time detect fewer issues",
        "avoid": "Testing must be exhaustive",
        "qIds": [
          255
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "functions according to the specified requirements",
        "avoid": "To assess the system's non-functional...",
        "qIds": [
          256
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "bug fixes and enhancements do not introduce new defects",
        "avoid": "To ensure that new features disrupt...",
        "qIds": [
          257
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "areas of the software most likely to have defects",
        "avoid": "By performing minimal testing on all features",
        "qIds": [
          258
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "interaction and effectiveness of the testing team",
        "avoid": "It allows for complete automation of the...",
        "qIds": [
          259
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "Inexpensive way to get some benefit",
        "avoid": "Find defects",
        "qIds": [
          260
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "only one value in the range becomes a test case",
        "avoid": "every value in the range",
        "qIds": [
          261
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "To plan when to stop testing",
        "avoid": "To know when a specific test has finished...",
        "qIds": [
          263
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Preventative tests are designed early; reactive tests",
        "avoid": "Preventative tests and reactive tests are...",
        "qIds": [
          264
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Cultural difference",
        "avoid": "Does not meet people needs / Relinquishments of control",
        "qIds": [
          265
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "identify defects in any software work product",
        "avoid": "To identify potential application...",
        "qIds": [
          266
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "prevent defects from being introduced",
        "avoid": "It is cheaper than designing tests during...",
        "qIds": [
          267
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "incorrect behavior of the system in operation",
        "avoid": "A mistake made by a developer",
        "qIds": [
          268
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "Integration of all components at once",
        "avoid": "Detailed and extensive planning / User involvement is mandatory",
        "qIds": [
          269
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "likelihood of an adverse event and the impact",
        "avoid": "The cost of dealing with an adverse event...",
        "qIds": [
          270
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "continuation or stoppage of testing",
        "avoid": "Finalizing the software release without...",
        "qIds": [
          271
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "Test planning and execution occur simultaneously",
        "avoid": "Ability to strictly adhere to test scripts",
        "qIds": [
          272
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "risk level and complexity of the project",
        "avoid": "The personal preferences of the test team",
        "qIds": [
          273
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "Planning — Initiate review — Individual review",
        "avoid": "Individual review đứng đầu",
        "qIds": [
          275
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "how much regression testing to do",
        "avoid": "Impact analysis assesses the effect on...",
        "qIds": [
          276
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "executing Software for the purpose of finding defects",
        "avoid": "The goal / purpose of testing is to...",
        "qIds": [
          277
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "impact of a defect on the system, while priority",
        "avoid": "Severity refers to the importance of a...",
        "qIds": [
          278
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "inspection is led by a moderator and a walkthrough is led by the author",
        "avoid": "Both inspections and walkthroughs...",
        "qIds": [
          279
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "Reporting discrepancies as incidents",
        "avoid": "Measuring and analyzing results",
        "qIds": [
          280
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "Scheduling test analysis and design tasks",
        "avoid": "Initiating corrective actions / Measuring and analyzing results",
        "qIds": [
          281
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "Available skills and experience in the proposed techniques",
        "avoid": "Availability of tools to support the...",
        "qIds": [
          282
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Faults in requirements are the most expensive to fix",
        "avoid": "Faults in program specifications are the...",
        "qIds": [
          283
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Designed by a person from a different organization",
        "avoid": "Designed by another person",
        "qIds": [
          284
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "Identifying defects early and thereby reducing rework costs",
        "avoid": "Decreasing the amount of documentation...",
        "qIds": [
          285
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "Management of the testing process and resources",
        "avoid": "Direct involvement in software programming",
        "qIds": [
          286
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "Static analysis of a software model",
        "avoid": "Technical review of a functional...",
        "qIds": [
          288
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "which modules to combine when and how many at once",
        "avoid": "all of the small modules",
        "qIds": [
          289
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "discovered every bug in the program",
        "avoid": "You have tested every statement, branch,...",
        "qIds": [
          290
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "check unchanged areas of the software",
        "avoid": "check only changed areas",
        "qIds": [
          291
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "constructive feedback and respect",
        "avoid": "Minimizing interaction between testers...",
        "qIds": [
          292
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "testers focus on test execution",
        "avoid": "A test leader focuses on test execution...",
        "qIds": [
          293
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "limited time and no detailed specifications",
        "avoid": "When detailed specifications are available",
        "qIds": [
          294
        ]
      },
      {
        "mode": "instant",
        "chapter": 6,
        "cue": null,
        "pick": "Running regression tests",
        "avoid": "Designing new test cases",
        "qIds": [
          295
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "open defects compared to closed defects",
        "avoid": "Number of passed requirements per code line",
        "qIds": [
          296
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "scheduled time for testing expires",
        "avoid": "None of the others",
        "qIds": [
          298
        ]
      },
      {
        "mode": "instant",
        "chapter": 6,
        "cue": null,
        "pick": "A small team to establish the best way",
        "avoid": "All teams at once",
        "qIds": [
          299
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "dynamic and adapt to new findings",
        "avoid": "After receiving comprehensive training in...",
        "qIds": [
          300
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "difference between the system and the requirement",
        "avoid": "We are looking for errors and fixing them",
        "qIds": [
          301
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "At all test levels",
        "avoid": "At all levels above integration",
        "qIds": [
          302
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "finding defects early when they are cheaper to fix",
        "avoid": "By delaying defect detection until after...",
        "qIds": [
          303
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "use risks and priorities to focus testing",
        "avoid": "Exhaustive testing is possible",
        "qIds": [
          304
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "beyond normal operational capacity, while load testing",
        "avoid": "Stress testing examines system...",
        "qIds": [
          305
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "check compliance with standards",
        "avoid": "By focusing solely on end-user needs",
        "qIds": [
          306
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "led by a trained moderator and follow a defined process",
        "avoid": "Technical reviews are less structured and...",
        "qIds": [
          307
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "environment needs to be ready for executing",
        "avoid": "It is only relevant during test case design",
        "qIds": [
          308
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "how changes might affect the existing system",
        "avoid": "It determines the effect of a new...",
        "qIds": [
          309
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "all branches in decision points are executed",
        "avoid": "It measures the software's performance...",
        "qIds": [
          310
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "divides input data into valid and invalid partitions",
        "avoid": "It requires thorough knowledge of the...",
        "qIds": [
          311
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "consistency and thoroughness in defect identification",
        "avoid": "To reduce the time spent on discussions",
        "qIds": [
          312
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "unlikely to cause a failure",
        "avoid": "Is likely to be fault-free",
        "qIds": [
          313
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "process for selecting test cases",
        "avoid": "A process for determining expected outputs",
        "qIds": [
          314
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "build confidence in the software's functionality",
        "avoid": "To gather evidence for a lawsuit / To train the users",
        "qIds": [
          315
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Eliminate some of the requirements",
        "avoid": "Add more testers / Work overtime",
        "qIds": [
          316
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "during testing if it contains all incidents",
        "avoid": "Only records defects / Is of limited value",
        "qIds": [
          317
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "see other and different defects and are unbiased",
        "avoid": "Independent testers are much more...",
        "qIds": [
          318
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "partial measure of test thoroughness",
        "avoid": "complete measure",
        "qIds": [
          319
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "As soon as the software requirements have been approved",
        "avoid": "After coding is complete",
        "qIds": [
          320
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "supplement to formal test design techniques",
        "avoid": "replace formal techniques",
        "qIds": [
          321
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "After more formal techniques have been applied",
        "avoid": "Before formal techniques",
        "qIds": [
          322
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "Before the test is executed",
        "avoid": "After the test is executed",
        "qIds": [
          323
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "appropriate to all levels of testing",
        "avoid": "A black box testing technique used only...",
        "qIds": [
          324
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "measure the size of the functionality",
        "avoid": "To measure the functional flow",
        "qIds": [
          326
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Error condition hiding another error condition",
        "avoid": "Masking a fault by developer / Masking a fault by a tester",
        "qIds": [
          327
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "Configuration management tools — Check for consistence",
        "avoid": "Test data preparation tools — Manipulate...",
        "qIds": [
          328
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Instead of exhaustive testing, we use risks and priorities",
        "avoid": "Math formulas for reports that the...",
        "qIds": [
          329
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "confirm that the defect has indeed been fixed",
        "avoid": "Validate the expected results",
        "qIds": [
          332
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Wait for the person to pause, acknowledge",
        "avoid": "Confront the person",
        "qIds": [
          333
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Entity Outside the Project's sphere of influence",
        "avoid": "Done by the Developer / Done by the Test Engineers",
        "qIds": [
          334
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "How much regression testing should be done",
        "avoid": "Exit Criteria",
        "qIds": [
          335
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "difficult to determine if the test has passed or failed",
        "avoid": "We cannot run the test",
        "qIds": [
          337
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "Testing the system when combined with other systems",
        "avoid": "Testing a sub-system using stubs and drivers",
        "qIds": [
          338
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "tester's experience, knowledge and intuition",
        "avoid": "Randomly generated test cases",
        "qIds": [
          340
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "analyze what was done and what could be improved",
        "avoid": "To plan the next phases of the project",
        "qIds": [
          341
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Tests by the person who wrote the source code",
        "avoid": "Tests by the person who wrote the item...",
        "qIds": [
          342
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "Non-functional and Functional requirements",
        "avoid": "Non-functional requirements only not...",
        "qIds": [
          343
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Inputs and expected results",
        "avoid": "It is easy to execute / It is unlikely to delay progress",
        "qIds": [
          344
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "best testing in the time available",
        "avoid": "You do more effective testing / You find more faults",
        "qIds": [
          345
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "Needs configuration management just like requirements",
        "avoid": "Should be newly constructed for each new...",
        "qIds": [
          347
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "Increases as we move the product towards live use",
        "avoid": "Is not important / Can never be determined",
        "qIds": [
          349
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "regression testing looks for unexpected side effects",
        "avoid": "Re-testing looks for unexpected side...",
        "qIds": [
          350
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "test execution and logging",
        "avoid": "Tool support for static testing",
        "qIds": [
          352
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "None, existing test cases can be used",
        "avoid": "One more / Two more test cases",
        "qIds": [
          353
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "The objective of the test",
        "avoid": "How well you know a particular technique",
        "qIds": [
          354
        ]
      },
      {
        "mode": "instant",
        "chapter": 3,
        "cue": null,
        "pick": "Static testing requires the running of tests",
        "avoid": "Static testing includes desk checking",
        "qIds": [
          357
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "eliminate every defect prior to release",
        "avoid": "Determine the productivity of programmers",
        "qIds": [
          359
        ]
      },
      {
        "mode": "instant",
        "chapter": 1,
        "cue": null,
        "pick": "fault has been built into more documentation, code",
        "avoid": "None of the others",
        "qIds": [
          360
        ]
      },
      {
        "mode": "instant",
        "chapter": 4,
        "cue": null,
        "pick": "on, below and above the edges",
        "avoid": "Is the same as equivalence partitioning tests",
        "qIds": [
          361
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "test completion criteria have been met",
        "avoid": "When time for testing has run out",
        "qIds": [
          363
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "define when a test level is complete",
        "avoid": "To determine when a test has completed",
        "qIds": [
          364
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "depends on the risk for your industry",
        "avoid": "This question is easy to answer",
        "qIds": [
          365
        ]
      },
      {
        "mode": "instant",
        "chapter": 2,
        "cue": null,
        "pick": "Component testing does not involve regression testing",
        "avoid": "Component testing should be performed by...",
        "qIds": [
          366
        ]
      },
      {
        "mode": "instant",
        "chapter": 5,
        "cue": null,
        "pick": "Skill and staff shortages",
        "avoid": "Poor software characteristics",
        "qIds": [
          367
        ]
      },
      {
        "mode": "standalone",
        "chapter": 5,
        "cue": "Đứng lẻ 1 mình",
        "pick": "Expected results",
        "avoid": "Actual and expected results / Validate expected results",
        "qIds": [
          15,
          34
        ]
      },
      {
        "mode": "standalone",
        "chapter": 1,
        "cue": "Đứng lẻ 1 mình",
        "pick": "Exhaustive testing",
        "avoid": "Exhaustive testing is possible / Regression testing",
        "qIds": [
          31,
          134
        ]
      },
      {
        "mode": "standalone",
        "chapter": 4,
        "cue": "Đứng lẻ 1 mình",
        "pick": "Decision testing",
        "avoid": "Decision table testing (Black-box)",
        "qIds": [
          28
        ]
      },
      {
        "mode": "standalone",
        "chapter": 1,
        "cue": "Đứng lẻ 1 mình",
        "pick": "Development cost",
        "avoid": "Usability / Reliability / Maintainability",
        "qIds": [
          30
        ]
      },
      {
        "mode": "standalone",
        "chapter": 1,
        "cue": "Đứng lẻ 1 mình",
        "pick": "Test scenario",
        "avoid": "Test Case / Test Suite",
        "qIds": [
          52
        ]
      },
      {
        "mode": "standalone",
        "chapter": 2,
        "cue": "Đứng lẻ 1 mình",
        "pick": "Driver",
        "avoid": "Drivers (số nhiều) / Stub",
        "qIds": [
          63
        ]
      },
      {
        "mode": "standalone",
        "chapter": 1,
        "cue": "Đứng lẻ 1 mình",
        "pick": "Dynamic analysis",
        "avoid": "Memory analysis / Static analysis",
        "qIds": [
          73
        ]
      },
      {
        "mode": "standalone",
        "chapter": 3,
        "cue": "Đứng lẻ 1 mình",
        "pick": "Code inspection",
        "avoid": "Unit / Integration / System testing",
        "qIds": [
          75
        ]
      },
      {
        "mode": "standalone",
        "chapter": 4,
        "cue": "Đứng lẻ 1 mình",
        "pick": "Black box testing",
        "avoid": "Glass / Clear / Structural / White box",
        "qIds": [
          76
        ]
      },
      {
        "mode": "standalone",
        "chapter": 5,
        "cue": "Đứng lẻ 1 mình",
        "pick": "Test execution",
        "avoid": "Test planning / Test analysis",
        "qIds": [
          80
        ]
      },
      {
        "mode": "standalone",
        "chapter": 5,
        "cue": "Đứng lẻ 1 mình",
        "pick": "Implementation and execution",
        "avoid": "Planning / Analysis and design",
        "qIds": [
          83
        ]
      },
      {
        "mode": "standalone",
        "chapter": 2,
        "cue": "Đứng lẻ 1 mình",
        "pick": "Stress Testing",
        "avoid": "Load / Performance / Regression testing",
        "qIds": [
          85
        ]
      },
      {
        "mode": "standalone",
        "chapter": 3,
        "cue": "Đứng lẻ 1 mình",
        "pick": "Code review",
        "avoid": "Unit / System / Usability testing",
        "qIds": [
          86
        ]
      },
      {
        "mode": "standalone",
        "chapter": 6,
        "cue": "Đứng lẻ 1 mình",
        "pick": "Dynamic analysis tool",
        "avoid": "Static analysis tool / Memory analysis",
        "qIds": [
          88
        ]
      },
      {
        "mode": "standalone",
        "chapter": 6,
        "cue": "Đứng lẻ 1 mình",
        "pick": "Test design tool",
        "avoid": "Test management / Execution tool",
        "qIds": [
          91
        ]
      },
      {
        "mode": "standalone",
        "chapter": 3,
        "cue": "Đứng lẻ 1 mình",
        "pick": "Scribe",
        "avoid": "Moderator / Author / Manager",
        "qIds": [
          98
        ]
      },
      {
        "mode": "standalone",
        "chapter": 2,
        "cue": "Đứng lẻ 1 mình",
        "pick": "Procedure",
        "avoid": "Process / Standard / Methodology",
        "qIds": [
          101
        ]
      },
      {
        "mode": "standalone",
        "chapter": 4,
        "cue": "Đứng lẻ 1 mình",
        "pick": "Branch coverage",
        "avoid": "Condition coverage / Statement testing",
        "qIds": [
          106
        ]
      },
      {
        "mode": "standalone",
        "chapter": 4,
        "cue": "Đứng lẻ 1 mình",
        "pick": "White box",
        "avoid": "Black box / Gray box",
        "qIds": [
          108
        ]
      },
      {
        "mode": "standalone",
        "chapter": 6,
        "cue": "Đứng lẻ 1 mình",
        "pick": "User requirements",
        "avoid": "Regression testing / GUI",
        "qIds": [
          109
        ]
      },
      {
        "mode": "standalone",
        "chapter": 3,
        "cue": "Đứng lẻ 1 mình",
        "pick": "Technical Review",
        "avoid": "Walkthrough / Inspection",
        "qIds": [
          132
        ]
      },
      {
        "mode": "standalone",
        "chapter": 3,
        "cue": "Đứng lẻ 1 mình",
        "pick": "Management",
        "avoid": "Developers / Testers / Analysts",
        "qIds": [
          133
        ]
      },
      {
        "mode": "standalone",
        "chapter": 5,
        "cue": "Đứng lẻ 1 mình",
        "pick": "Test specification",
        "avoid": "Features to be tested / Schedule / Risks",
        "qIds": [
          144
        ]
      },
      {
        "mode": "standalone",
        "chapter": 2,
        "cue": "Đứng lẻ 1 mình",
        "pick": "Test Suite",
        "avoid": "Test Case / Test Scenario",
        "qIds": [
          151
        ]
      },
      {
        "mode": "standalone",
        "chapter": 1,
        "cue": "Đứng lẻ 1 mình",
        "pick": "Specifications",
        "avoid": "Test cases / Test data / Test scripts",
        "qIds": [
          153
        ]
      },
      {
        "mode": "standalone",
        "chapter": 2,
        "cue": "Đứng lẻ 1 mình",
        "pick": "Re-testing",
        "avoid": "Sanity / Unit / Stress testing",
        "qIds": [
          166
        ]
      },
      {
        "mode": "standalone",
        "chapter": 1,
        "cue": "Đứng lẻ 1 mình",
        "pick": "10000,50000,99999",
        "avoid": "Bộ số có 0 hoặc 100000",
        "qIds": [
          183
        ]
      },
      {
        "mode": "standalone",
        "chapter": 3,
        "cue": "Đứng lẻ 1 mình",
        "pick": "Explaining the objective",
        "avoid": "Allocating roles (thuộc Planning)",
        "qIds": [
          274
        ]
      },
      {
        "mode": "glance",
        "chapter": 4,
        "cue": "4 đáp án là số 1 / 2 / 3 / 4",
        "pick": "2",
        "avoid": "1, 3, 4",
        "qIds": [
          169,
          170,
          175
        ]
      },
      {
        "mode": "glance",
        "chapter": 3,
        "cue": "not a static testing technique",
        "pick": "Error guessing",
        "avoid": "Walkthrough / Inspection",
        "qIds": [
          25,
          35
        ]
      },
      {
        "mode": "glance",
        "chapter": 2,
        "cue": "Beta ... at developing organization's site",
        "pick": "False",
        "avoid": "True (đảo ngược vị trí Alpha & Beta)",
        "qIds": [
          1
        ]
      },
      {
        "mode": "glance",
        "chapter": 1,
        "cue": "Configuration and compatibility ... outsourcing",
        "pick": "True",
        "avoid": "False",
        "qIds": [
          2
        ]
      },
      {
        "mode": "glance",
        "chapter": 1,
        "cue": "Drivers ... control and operate",
        "pick": "True",
        "avoid": "False",
        "qIds": [
          3
        ]
      },
      {
        "mode": "glance",
        "chapter": 1,
        "cue": "Defects are recorded into three major purposes",
        "pick": "True",
        "avoid": "False",
        "qIds": [
          4
        ]
      },
      {
        "mode": "glance",
        "chapter": 1,
        "cue": "Exhaustive testing is possible",
        "pick": "False",
        "avoid": "True",
        "qIds": [
          5
        ]
      },
      {
        "mode": "glance",
        "chapter": 1,
        "cue": "Quality Assurance ... product quality is compared",
        "pick": "False",
        "avoid": "True (so sánh sản phẩm là QC)",
        "qIds": [
          6
        ]
      },
      {
        "mode": "glance",
        "chapter": 1,
        "cue": "Verification ... building the product right",
        "pick": "True",
        "avoid": "False",
        "qIds": [
          7
        ]
      },
      {
        "mode": "glance",
        "chapter": 4,
        "cue": "control statements equals the cyclomatic complexity",
        "pick": "True",
        "avoid": "False",
        "qIds": [
          8
        ]
      },
      {
        "mode": "glance",
        "chapter": 1,
        "cue": "goal of a software tester is to find bugs ... early",
        "pick": "True",
        "avoid": "False",
        "qIds": [
          9
        ]
      },
      {
        "mode": "glance",
        "chapter": 2,
        "cue": "What is NOT test type?",
        "pick": "Performance testing",
        "avoid": "Functional / Structural / Statement",
        "qIds": [
          12
        ]
      },
      {
        "mode": "glance",
        "chapter": 5,
        "cue": "not the fundamental test process",
        "pick": "None of the others",
        "avoid": "3 pha có chữ Test ở đầu",
        "qIds": [
          29
        ]
      },
      {
        "mode": "glance",
        "chapter": 4,
        "cue": "NOT a White box technique",
        "pick": "Boundary value analysis",
        "avoid": "Statement / Condition coverage",
        "qIds": [
          36
        ]
      },
      {
        "mode": "glance",
        "chapter": 2,
        "cue": "single unit of code in an isolated manner",
        "pick": "Unit Testing",
        "avoid": "Integration / System Testing",
        "qIds": [
          51
        ]
      },
      {
        "mode": "glance",
        "chapter": 4,
        "cue": "both Black box and White Box (Gray & Hybrid)",
        "pick": "Both of (i) and (ii)",
        "avoid": "None of (i) nor (ii)",
        "qIds": [
          54
        ]
      },
      {
        "mode": "glance",
        "chapter": 4,
        "cue": "input and output coverage",
        "pick": "Equivalence partitioning",
        "avoid": "Boundary value analysis",
        "qIds": [
          56
        ]
      },
      {
        "mode": "glance",
        "chapter": 2,
        "cue": "internet banking solution",
        "pick": "Non-functional testing.",
        "avoid": "Functional / System / Requirements testing",
        "qIds": [
          66
        ]
      },
      {
        "mode": "glance",
        "chapter": 4,
        "cue": "black box design technique?",
        "pick": "Equivalence partitioning",
        "avoid": "Statement / Branch / Decision testing",
        "qIds": [
          72
        ]
      },
      {
        "mode": "glance",
        "chapter": 1,
        "cue": "defines the expected results of a test",
        "pick": "Test case specification.",
        "avoid": "Test design / Test procedure specification",
        "qIds": [
          74
        ]
      },
      {
        "mode": "glance",
        "chapter": 5,
        "cue": "common entry criteria (Choose 2)",
        "pick": "Availability of test environment + Availability of necessary resources",
        "avoid": "Exit criteria / Defect fixes",
        "qIds": [
          78
        ]
      },
      {
        "mode": "glance",
        "chapter": 2,
        "cue": "a type of non-functional testing?",
        "pick": "Usability testing.",
        "avoid": "Unit / Integration / Regression",
        "qIds": [
          79
        ]
      },
      {
        "mode": "glance",
        "chapter": 2,
        "cue": "Which is the non-functional testing",
        "pick": "Performance testing",
        "avoid": "Regression / Unit / Sanity testing",
        "qIds": [
          81
        ]
      },
      {
        "mode": "glance",
        "chapter": 3,
        "cue": "formal assessment ... trained moderator",
        "pick": "Inspection",
        "avoid": "Walkthrough / Peer review",
        "qIds": [
          82
        ]
      },
      {
        "mode": "glance",
        "chapter": 2,
        "cue": "individual units or components",
        "pick": "Unit testing",
        "avoid": "Integration / System / Acceptance",
        "qIds": [
          84
        ]
      },
      {
        "mode": "glance",
        "chapter": 2,
        "cue": "meets business requirements",
        "pick": "Acceptance testing",
        "avoid": "Unit / Integration / System",
        "qIds": [
          89
        ]
      },
      {
        "mode": "glance",
        "chapter": 4,
        "cue": "different combinations of inputs",
        "pick": "Decision table testing",
        "avoid": "Boundary value / Equivalence",
        "qIds": [
          90
        ]
      },
      {
        "mode": "glance",
        "chapter": 2,
        "cue": "confirm that the original defect has been successfully removed",
        "pick": "Confirmation testing",
        "avoid": "Regression testing",
        "qIds": [
          94
        ]
      },
      {
        "mode": "glance",
        "chapter": 1,
        "cue": "USUALLY perform debugging activities",
        "pick": "Developers.",
        "avoid": "Testers / Analysts",
        "qIds": [
          99
        ]
      },
      {
        "mode": "glance",
        "chapter": 6,
        "cue": "supports traceability, recording of incidents or scheduling",
        "pick": "A test management tool",
        "avoid": "Dynamic / Static / Execution tool",
        "qIds": [
          102
        ]
      },
      {
        "mode": "glance",
        "chapter": 5,
        "cue": "determine the exit criteria?",
        "pick": "Test planning.",
        "avoid": "Evaluating exit criteria and reporting",
        "qIds": [
          107
        ]
      },
      {
        "mode": "glance",
        "chapter": 2,
        "cue": "Contract and regulation testing",
        "pick": "Acceptance testing",
        "avoid": "System / Integration testing",
        "qIds": [
          111
        ]
      },
      {
        "mode": "glance",
        "chapter": 5,
        "cue": "faults be found most cost effectively",
        "pick": "Design",
        "avoid": "Execution / Planning / Check Exit",
        "qIds": [
          113
        ]
      },
      {
        "mode": "glance",
        "chapter": 5,
        "cue": "Designing the test environment set-up",
        "pick": "Test Analysis and Design",
        "avoid": "Test Implementation and execution",
        "qIds": [
          114
        ]
      },
      {
        "mode": "glance",
        "chapter": 5,
        "cue": "Handover of Testware",
        "pick": "Test Closure Activities",
        "avoid": "Evaluating exit criteria and reporting",
        "qIds": [
          121
        ]
      },
      {
        "mode": "glance",
        "chapter": 2,
        "cue": "interfaces and interaction between integrated components",
        "pick": "Integration testing",
        "avoid": "Unit / System testing",
        "qIds": [
          130
        ]
      },
      {
        "mode": "glance",
        "chapter": 5,
        "cue": "Reviewing the test Basis",
        "pick": "Test Analysis and Design",
        "avoid": "Evaluating exit criteria and reporting",
        "qIds": [
          131
        ]
      },
      {
        "mode": "glance",
        "chapter": 3,
        "cue": "Static analysis tools are typically used by",
        "pick": "Developers",
        "avoid": "Testers / Analysts",
        "qIds": [
          141
        ]
      },
      {
        "mode": "glance",
        "chapter": 1,
        "cue": "steps required to operate the system and exercise test cases",
        "pick": "Test Procedure Specification",
        "avoid": "Test Case / Test Design Specification",
        "qIds": [
          143
        ]
      },
      {
        "mode": "glance",
        "chapter": 1,
        "cue": "principal attributes of tools and automation",
        "pick": "Both of (1) and (2)",
        "avoid": "None of (1) nor (2)",
        "qIds": [
          147
        ]
      },
      {
        "mode": "glance",
        "chapter": 3,
        "cue": "leads the review ... planning ... running the meeting",
        "pick": "Moderator",
        "avoid": "Author / Scribe / Reviewer",
        "qIds": [
          148
        ]
      },
      {
        "mode": "glance",
        "chapter": 2,
        "cue": "interfaces and interaction between integrated components",
        "pick": "Integration level testing",
        "avoid": "Component / System level",
        "qIds": [
          149
        ]
      },
      {
        "mode": "glance",
        "chapter": 2,
        "cue": "varying workloads to measure and evaluate performance",
        "pick": "Load Testing",
        "avoid": "Stress / Volume / Recovery testing",
        "qIds": [
          150
        ]
      },
      {
        "mode": "glance",
        "chapter": 5,
        "cue": "inputs for developing a test plan are taken from",
        "pick": "Project plan",
        "avoid": "Business plan / Support plan",
        "qIds": [
          159
        ]
      },
      {
        "mode": "glance",
        "chapter": 4,
        "cue": "White Box Techniques are also called as",
        "pick": "Structural Testing",
        "avoid": "Design based / Error guessing",
        "qIds": [
          160
        ]
      },
      {
        "mode": "glance",
        "chapter": 1,
        "cue": "possible to remove all defects",
        "pick": "False",
        "avoid": "True",
        "qIds": [
          162
        ]
      },
      {
        "mode": "glance",
        "chapter": 2,
        "cue": "testing the entire system",
        "pick": "System Testing",
        "avoid": "Unit / Integration / Acceptance",
        "qIds": [
          164
        ]
      },
      {
        "mode": "glance",
        "chapter": 5,
        "cue": "Reporting Discrepancies as incidents",
        "pick": "Test Implementation and execution",
        "avoid": "Evaluating exit criteria and reporting",
        "qIds": [
          165
        ]
      },
      {
        "mode": "glance",
        "chapter": 2,
        "cue": "Drivers are also known as",
        "pick": "ii, iii are true and i is false",
        "avoid": "All of i, ii and iii are true",
        "qIds": [
          167
        ]
      },
      {
        "mode": "glance",
        "chapter": 5,
        "cue": "component test standard",
        "pick": "BS7925-2",
        "avoid": "IEEE 829 / IEEE 610 / BS7925-1",
        "qIds": [
          171
        ]
      },
      {
        "mode": "glance",
        "chapter": 1,
        "cue": "Equivalence Partitioning ... discount (Select all)",
        "pick": "Chọn đủ 3 khoảng tuổi (1—12, 13-64, 65+)",
        "avoid": "None of the others",
        "qIds": [
          182
        ]
      },
      {
        "mode": "glance",
        "chapter": 4,
        "cue": "defects is use case testing MOST likely to uncover",
        "pick": "i, iii.",
        "avoid": "ii, iv",
        "qIds": [
          186
        ]
      },
      {
        "mode": "glance",
        "chapter": 3,
        "cue": "5 main activities of a formal review",
        "pick": "1, 2, 4, 7, 8",
        "avoid": "Các dãy số khác",
        "qIds": [
          187
        ]
      },
      {
        "mode": "glance",
        "chapter": 3,
        "cue": "TRUE for Technical Review",
        "pick": "I, III and IV",
        "avoid": "Câu có II (Management)",
        "qIds": [
          188
        ]
      },
      {
        "mode": "glance",
        "chapter": 6,
        "cue": "implementation of a testing tool",
        "pick": "i, ii, iv",
        "avoid": "Câu có iii (dự án đang trễ lịch)",
        "qIds": [
          189
        ]
      },
      {
        "mode": "glance",
        "chapter": 6,
        "cue": "benefits ... using test tools",
        "pick": "i and iv",
        "avoid": "ii and iii",
        "qIds": [
          190
        ]
      },
      {
        "mode": "glance",
        "chapter": 2,
        "cue": "characteristic of regression testing",
        "pick": "ii, iii",
        "avoid": "Câu có i (chỉ chạy 1 lần)",
        "qIds": [
          191
        ]
      },
      {
        "mode": "glance",
        "chapter": 1,
        "cue": "monitoring the test progress",
        "pick": "i, ii, iii is correct",
        "avoid": "Câu có iv",
        "qIds": [
          192
        ]
      },
      {
        "mode": "glance",
        "chapter": 5,
        "cue": "task of a Test Lead / Leader",
        "pick": "i, ii, iii is true and iv is false",
        "avoid": "iv (Create Test Specifications)",
        "qIds": [
          193
        ]
      },
      {
        "mode": "glance",
        "chapter": 5,
        "cue": "part of Test Closure Activities",
        "pick": "All of them are true",
        "avoid": "Các câu loại trừ 1 ý",
        "qIds": [
          194
        ]
      },
      {
        "mode": "glance",
        "chapter": 6,
        "cue": "task of a Tester",
        "pick": "ii, iii, iv is true and i is false",
        "avoid": "ii, iii, iv ARE true / câu i (Tool Vendor)",
        "qIds": [
          195
        ]
      },
      {
        "mode": "glance",
        "chapter": 3,
        "cue": "Formal Review / Inspection",
        "pick": "i, iii, iv are true and ii is false",
        "avoid": "Câu có ii (led by author)",
        "qIds": [
          196
        ]
      },
      {
        "mode": "glance",
        "chapter": 5,
        "cue": "activities belong to Test Planning",
        "pick": "ii & iii are true, i, iv & v are false.",
        "avoid": "Các tổ hợp khác",
        "qIds": [
          197
        ]
      },
      {
        "mode": "glance",
        "chapter": 3,
        "cue": "persons involved in a Formal Review",
        "pick": "i, ii, iii are true and iv is false.",
        "avoid": "ii, iii, iv are true",
        "qIds": [
          198
        ]
      },
      {
        "mode": "glance",
        "chapter": 5,
        "cue": "Test Plan Outline contains",
        "pick": "i, iii, iv are true and ii is false",
        "avoid": "Câu có ii (Test Scripts)",
        "qIds": [
          199
        ]
      },
      {
        "mode": "glance",
        "chapter": 1,
        "cue": "early test design",
        "pick": "i, iii & iv are true, ii & v are false",
        "avoid": "Các tổ hợp khác",
        "qIds": [
          200
        ]
      },
      {
        "mode": "glance",
        "chapter": 5,
        "cue": "Deciding How much testing is enough",
        "pick": "i, ii are true and iii, iv are false",
        "avoid": "ii, iii, iv are true",
        "qIds": [
          201
        ]
      },
      {
        "mode": "glance",
        "chapter": 3,
        "cue": "found by static analysis tools",
        "pick": "i, ii, iii, iv is correct",
        "avoid": "Các câu thiếu ý",
        "qIds": [
          202
        ]
      },
      {
        "mode": "glance",
        "chapter": 5,
        "cue": "Exit criteria may consist of",
        "pick": "i, ii, iii is correct and iv is incorrect",
        "avoid": "Các tổ hợp khác",
        "qIds": [
          203
        ]
      },
      {
        "mode": "glance",
        "chapter": 5,
        "cue": "purpose of Configuration Management",
        "pick": "i, ii and iv",
        "avoid": "Câu có iii",
        "qIds": [
          204
        ]
      },
      {
        "mode": "glance",
        "chapter": 4,
        "cue": "characteristics of White Box testing",
        "pick": "i, ii are true and iii and iv are false",
        "avoid": "Các tổ hợp khác",
        "qIds": [
          205
        ]
      },
      {
        "mode": "glance",
        "chapter": 2,
        "cue": "Match V-model test levels",
        "pick": "i-c, ii-a, iii-d, iv-b",
        "avoid": "Các cặp ghép khác",
        "qIds": [
          206
        ]
      },
      {
        "mode": "glance",
        "chapter": 3,
        "cue": "success factors for a review",
        "pick": "ii, iii, iv are correct and i is incorrect",
        "avoid": "Câu có i (no predefined objective)",
        "qIds": [
          208
        ]
      },
      {
        "mode": "glance",
        "chapter": 1,
        "cue": "tools are geared more for developer use",
        "pick": "ii and iv are more for developers",
        "avoid": "Test management / Performance tools",
        "qIds": [
          209
        ]
      },
      {
        "mode": "glance",
        "chapter": 5,
        "cue": "Test planning has which ... major tasks",
        "pick": "i, ii, iv are true and iii is false",
        "avoid": "ii, iii, iv are true",
        "qIds": [
          211
        ]
      },
      {
        "mode": "glance",
        "chapter": 5,
        "cue": "selection of a test approach",
        "pick": "i, ii, iii, iv are true",
        "avoid": "ii, iii, iv are true",
        "qIds": [
          212
        ]
      },
      {
        "mode": "glance",
        "chapter": 5,
        "cue": "Test Implementation and execution ... major tasks",
        "pick": "i, ii, iii are true and iv is false",
        "avoid": "ii, iii, iv are true",
        "qIds": [
          213
        ]
      },
      {
        "mode": "glance",
        "chapter": 4,
        "cue": "Match 4 test design techniques",
        "pick": "1Y, 2Z, 3X, 4W",
        "avoid": "Các cặp ghép khác",
        "qIds": [
          217
        ]
      },
      {
        "mode": "glance",
        "chapter": 1,
        "cue": "Pick up and read the newspaper",
        "pick": "SC = 2 and DC = 3",
        "avoid": "SC = 1 / DC = 2",
        "qIds": [
          218
        ]
      },
      {
        "mode": "glance",
        "chapter": 1,
        "cue": "Defect clustering & Pareto (1 and 2)",
        "pick": "1 and 2 are true, 3 and 4 are false",
        "avoid": "Các tổ hợp khác",
        "qIds": [
          220
        ]
      },
      {
        "mode": "glance",
        "chapter": 2,
        "cue": "Regression testing should be performed",
        "pick": "w & y are true, v, x & z are false",
        "avoid": "All of them are true",
        "qIds": [
          221
        ]
      },
      {
        "mode": "glance",
        "chapter": 5,
        "cue": "Match Estimation / Control / Monitoring",
        "pick": "1-b, 2-c, 3-a",
        "avoid": "Các cặp ghép khác",
        "qIds": [
          222
        ]
      },
      {
        "mode": "glance",
        "chapter": 3,
        "cue": "Match 4 types of Reviews (s, t, u, v)",
        "pick": "s = 4 and 5, t = 3, u = 2, v = 1",
        "avoid": "Các cặp ghép khác",
        "qIds": [
          223
        ]
      },
      {
        "mode": "glance",
        "chapter": 4,
        "cue": "Minimum Test ... Statement Coverage (Order-qty)",
        "pick": "Statement coverage is 1",
        "avoid": "Statement coverage is 2, 3, 4",
        "qIds": [
          224
        ]
      },
      {
        "mode": "glance",
        "chapter": 4,
        "cue": "IF A > B THEN ... ELSE ... ENDIF (có chữ ELSE)",
        "pick": "2 tests for statement coverage, 2 for branch coverage",
        "avoid": "1 test for statement / 3 for branch",
        "qIds": [
          226
        ]
      },
      {
        "mode": "glance",
        "chapter": 4,
        "cue": "Sơ đồ đường đi vwy, vwz, vxy, vxz",
        "pick": "A",
        "avoid": "ABCD, ABD, ACD",
        "qIds": [
          227
        ]
      },
      {
        "mode": "glance",
        "chapter": 4,
        "cue": "Sơ đồ công tắc OFF / ON / FAULT (invalid)",
        "pick": "FAULT to ON",
        "avoid": "OFF to ON / ON to FAULT",
        "qIds": [
          228
        ]
      },
      {
        "mode": "glance",
        "chapter": 4,
        "cue": "Sơ đồ Giỏ hàng Login - Browse - Basket",
        "pick": "Login Browse Basket Checkout Basket Logout",
        "avoid": "3 câu có chữ Pay",
        "qIds": [
          229
        ]
      },
      {
        "mode": "glance",
        "chapter": 1,
        "cue": "Bảng quyết định thẻ Citibank (Silver room)",
        "pick": "A - Offer upgrade to Gold, B - Don't offer any upgrade",
        "avoid": "Các phương án khác",
        "qIds": [
          230
        ]
      },
      {
        "mode": "glance",
        "chapter": 2,
        "cue": "Component Testing is also called as",
        "pick": "i, ii, iii are true and iv is false",
        "avoid": "All of them are true",
        "qIds": [
          231
        ]
      },
      {
        "mode": "glance",
        "chapter": 2,
        "cue": "reliability, performance, security, and usability",
        "pick": "Non-functional testing",
        "avoid": "Functional / Requirements testing",
        "qIds": [
          234
        ]
      },
      {
        "mode": "glance",
        "chapter": 4,
        "cue": "sequences of statements (paths)",
        "pick": "4 Test Cases",
        "avoid": "2 / 3 Test Cases",
        "qIds": [
          236
        ]
      },
      {
        "mode": "glance",
        "chapter": 3,
        "cue": "What is static testing?",
        "pick": "examined manually, or with a set of tools, but not executed",
        "avoid": "Software is executed...",
        "qIds": [
          242
        ]
      },
      {
        "mode": "glance",
        "chapter": 2,
        "cue": "What is dynamic testing?",
        "pick": "Software is executed using a set of input values",
        "avoid": "not executed",
        "qIds": [
          243
        ]
      },
      {
        "mode": "glance",
        "chapter": 1,
        "cue": "minimize psychological conflicts (Select all)",
        "pick": "Chọn 3 câu tích cực (Fostering, Ensuring, Encouraging)",
        "avoid": "Câu có chữ belittles the coder",
        "qIds": [
          287
        ]
      },
      {
        "mode": "glance",
        "chapter": 3,
        "cue": "static analysis MOST likely to find",
        "pick": "Unreachable (\"dead\") code",
        "avoid": "Memory leaks (thuộc câu NOT find)",
        "qIds": [
          325
        ]
      },
      {
        "mode": "glance",
        "chapter": 1,
        "cue": "explanation of 'Early testing'",
        "pick": "start as early as possible in the software or system development life cycle",
        "avoid": "Các giải thích nguyên lý khác",
        "qIds": [
          330
        ]
      },
      {
        "mode": "glance",
        "chapter": 2,
        "cue": "explanation of 'Testing shows presence of defects'",
        "pick": "can show that defects are present, but cannot prove that there are no defects",
        "avoid": "Các giải thích nguyên lý khác",
        "qIds": [
          331
        ]
      },
      {
        "mode": "glance",
        "chapter": 1,
        "cue": "Test Cases Derived from use cases",
        "pick": "uncovering defects in the process flows during real world use",
        "avoid": "individual components / boundary defects",
        "qIds": [
          351
        ]
      },
      {
        "mode": "glance",
        "chapter": 3,
        "cue": "Which TWO ... static analysis",
        "pick": "need not be performed before... + hard to find with dynamic testing",
        "avoid": "2 câu còn lại",
        "qIds": [
          355
        ]
      }
    ],
    "zeroTraps": [
      {
        "bad": "All of them are true",
        "note": "Cấm khoanh bừa! Chỉ đúng duy nhất khi đề hỏi Test Closure Activities",
        "qIds": [
          221,
          231
        ]
      },
      {
        "bad": "All of i, ii and iii are true",
        "note": "Bẫy câu Drivers (Spade là tên giả, chỉ chọn ii & iii)",
        "qIds": [
          167
        ]
      },
      {
        "bad": "None of the above / None of (i) nor (ii) / None of the mentioned",
        "note": "Sai tuyệt đối ở mọi câu — thấy là gạch ngay",
        "qIds": [
          40,
          52,
          54,
          57,
          65,
          94,
          147,
          215
        ]
      },
      {
        "bad": "None of the others",
        "note": "Gạch bỏ! Chỉ đúng duy nhất khi đề hỏi 'not the fundamental test process'",
        "qIds": [
          42,
          63,
          87,
          110,
          141,
          143,
          155,
          298
        ]
      },
      {
        "bad": "ii, iii, iv are true and i is false",
        "note": "Tổ hợp La Mã mồi nhử — gặp là loại đầu tiên",
        "qIds": [
          198,
          201,
          211,
          212,
          213
        ]
      },
      {
        "bad": "i, iv are true and ii is false",
        "note": "Tổ hợp La Mã mồi nhử — không bao giờ đúng",
        "qIds": [
          193,
          195,
          199
        ]
      },
      {
        "bad": "Walkthrough (đứng lẻ 1 mình)",
        "note": "Khi đứng riêng 1 mình làm đáp án luôn là bẫy",
        "qIds": [
          25,
          35,
          82,
          132
        ]
      },
      {
        "bad": "Evaluating exit criteria and reporting",
        "note": "Đứng làm đáp án hỏi pha kiểm thử đều sai",
        "qIds": [
          107,
          121,
          131,
          165
        ]
      },
      {
        "bad": "Functional testing (đứng lẻ 1 mình)",
        "note": "Đứng trơ trọi 1 mình luôn sai (Internet Banking chọn Non-functional)",
        "qIds": [
          12,
          66,
          234
        ]
      },
      {
        "bad": "Regression testing (đứng lẻ 1 mình)",
        "note": "Đứng lẻ 1 mình luôn sai (chỉ đúng khi đi đôi 'Confirmation and regression testing')",
        "qIds": [
          81,
          94,
          134
        ]
      },
      {
        "bad": "Usability (thiếu chữ testing) / Testers (đứng lẻ)",
        "note": "Từ đơn đặt làm mồi nhử — gạch thẳng tay",
        "qIds": [
          18,
          30,
          48,
          99,
          133,
          141,
          142
        ]
      },
      {
        "bad": "State / Memory / Coverage / Data flow / Trends / Metrics analysis",
        "note": "Toàn bộ 6 cụm '... analysis' này đứng lẻ đều là đáp án giả",
        "qIds": [
          73,
          106,
          112,
          120,
          233
        ]
      },
      {
        "bad": "Sanity / Smoke / Recovery / Volume / Requirements testing",
        "note": "Tên testing phụ gây nhiễu — gặp đứng lẻ là loại",
        "qIds": [
          66,
          81,
          85,
          150,
          166,
          234
        ]
      },
      {
        "bad": "Condition coverage / 1 test for statement, 3 for branch",
        "note": "Bẫy phần White-box (1 lệnh IF không bao giờ sinh ra 3 branch)",
        "qIds": [
          36,
          93,
          106,
          126,
          219,
          225,
          226
        ]
      }
    ]
  },
  "questionTips": {
    "1": {
      "mode": "glance",
      "chapter": 2,
      "cue": "Beta ... at developing organization's site",
      "pick": "False",
      "avoid": "True (đảo ngược vị trí Alpha & Beta)"
    },
    "2": {
      "mode": "glance",
      "chapter": 1,
      "cue": "Configuration and compatibility ... outsourcing",
      "pick": "True",
      "avoid": "False"
    },
    "3": {
      "mode": "glance",
      "chapter": 1,
      "cue": "Drivers ... control and operate",
      "pick": "True",
      "avoid": "False"
    },
    "4": {
      "mode": "glance",
      "chapter": 1,
      "cue": "Defects are recorded into three major purposes",
      "pick": "True",
      "avoid": "False"
    },
    "5": {
      "mode": "glance",
      "chapter": 1,
      "cue": "Exhaustive testing is possible",
      "pick": "False",
      "avoid": "True"
    },
    "6": {
      "mode": "glance",
      "chapter": 1,
      "cue": "Quality Assurance ... product quality is compared",
      "pick": "False",
      "avoid": "True (so sánh sản phẩm là QC)"
    },
    "7": {
      "mode": "glance",
      "chapter": 1,
      "cue": "Verification ... building the product right",
      "pick": "True",
      "avoid": "False"
    },
    "8": {
      "mode": "glance",
      "chapter": 4,
      "cue": "control statements equals the cyclomatic complexity",
      "pick": "True",
      "avoid": "False"
    },
    "9": {
      "mode": "glance",
      "chapter": 1,
      "cue": "goal of a software tester is to find bugs ... early",
      "pick": "True",
      "avoid": "False"
    },
    "10": {
      "mode": "instant",
      "chapter": 6,
      "cue": null,
      "pick": "Generating expected outputs",
      "avoid": "Recording test inputs"
    },
    "11": {
      "mode": "instant",
      "chapter": 6,
      "cue": null,
      "pick": "Generating test data",
      "avoid": "Scheduling tests / Logging test results"
    },
    "12": {
      "mode": "glance",
      "chapter": 2,
      "cue": "What is NOT test type?",
      "pick": "Performance testing",
      "avoid": "Functional / Structural / Statement"
    },
    "13": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "developed a library, helping to improve",
      "avoid": "Thiếu người / Trễ lịch"
    },
    "14": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "How to fix the fault",
      "avoid": "How to reproduce the fault / Test environment details"
    },
    "15": {
      "mode": "standalone",
      "chapter": 5,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Expected results",
      "avoid": "Actual and expected results / Validate expected results"
    },
    "16": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "Memory leaks",
      "avoid": "Unreachable (\"dead\") code / Array bound violations"
    },
    "17": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "Big-bang",
      "avoid": "Top down / Bottom up"
    },
    "18": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "State-Transition",
      "avoid": "Usability / Performance"
    },
    "19": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "Auditing conformance to IS09001",
      "avoid": "Identification of test versions / Controlled library access"
    },
    "20": {
      "mode": "instant",
      "chapter": 6,
      "cue": null,
      "pick": "technologies used by the competitors",
      "avoid": "Evaluation of tools against clear..."
    },
    "21": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "IEEE610",
      "avoid": "IEEE829 / BS7925-1"
    },
    "22": {
      "mode": "instant",
      "chapter": 6,
      "cue": null,
      "pick": "Use of automated test execution tools",
      "avoid": "Testing performed by users"
    },
    "23": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "Quality plans",
      "avoid": "What is not to be tested / Test environments"
    },
    "24": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "Suggestions as to how to fix",
      "avoid": "Actual and expected results"
    },
    "25": {
      "mode": "glance",
      "chapter": 3,
      "cue": "not a static testing technique",
      "pick": "Error guessing",
      "avoid": "Walkthrough / Inspection"
    },
    "26": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "Error-prone software delivered",
      "avoid": "Supplier issues / Organization factors"
    },
    "27": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Debugging defects",
      "avoid": "Finding defects / Preventing defects"
    },
    "28": {
      "mode": "standalone",
      "chapter": 4,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Decision testing",
      "avoid": "Decision table testing (Black-box)"
    },
    "29": {
      "mode": "glance",
      "chapter": 5,
      "cue": "not the fundamental test process",
      "pick": "None of the others",
      "avoid": "3 pha có chữ Test ở đầu"
    },
    "30": {
      "mode": "standalone",
      "chapter": 1,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Development cost",
      "avoid": "Usability / Reliability / Maintainability"
    },
    "31": {
      "mode": "standalone",
      "chapter": 1,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Exhaustive testing",
      "avoid": "Exhaustive testing is possible / Regression testing"
    },
    "32": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "understand the source code",
      "avoid": "Should be able to understand a functional..."
    },
    "33": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "Reducing the need for documentation",
      "avoid": "Reducing testing cost and time"
    },
    "34": {
      "mode": "standalone",
      "chapter": 5,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Expected results",
      "avoid": "Actual and expected results / Validate expected results"
    },
    "35": {
      "mode": "glance",
      "chapter": 3,
      "cue": "not a static testing technique",
      "pick": "Error guessing",
      "avoid": "Walkthrough / Inspection"
    },
    "36": {
      "mode": "glance",
      "chapter": 4,
      "cue": "NOT a White box technique",
      "pick": "Boundary value analysis",
      "avoid": "Statement / Condition coverage"
    },
    "37": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "Top-down integration testing",
      "avoid": "Business process-based testing / Requirements-based testing"
    },
    "38": {
      "mode": "instant",
      "chapter": 6,
      "cue": null,
      "pick": "Designing the Tests",
      "avoid": "Comparing actual results"
    },
    "39": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "All of the others",
      "avoid": "All of them are true / All of i, ii, iii"
    },
    "40": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "(ii) Structural Testing",
      "avoid": "(i) Functional testing / Both of (i) and (ii)"
    },
    "41": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "All members of the reviewing team are responsible",
      "avoid": "Defects and issues are identified and..."
    },
    "42": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Deliverable base-lining",
      "avoid": "Defect prevention / Management reporting"
    },
    "43": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "not be very confident",
      "avoid": "Component testing should be black box,..."
    },
    "44": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "hard to find with dynamic testing",
      "avoid": "Static analysis is not necessary"
    },
    "45": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "non-functional requirement was not specified",
      "avoid": "This is an acceptable risk of a..."
    },
    "46": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "Planning -> Initiate review -> Individual review",
      "avoid": "Kick-off đứng đầu"
    },
    "47": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "proportion of decision outcomes",
      "avoid": "statement outcomes"
    },
    "48": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Supportability",
      "avoid": "Functionality / Usability"
    },
    "49": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Improvements suggested by users",
      "avoid": "Requirements / Documentation"
    },
    "50": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "Alpha release",
      "avoid": "Beta release / Test release document"
    },
    "51": {
      "mode": "glance",
      "chapter": 2,
      "cue": "single unit of code in an isolated manner",
      "pick": "Unit Testing",
      "avoid": "Integration / System Testing"
    },
    "52": {
      "mode": "standalone",
      "chapter": 1,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Test scenario",
      "avoid": "Test Case / Test Suite"
    },
    "53": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Verification process",
      "avoid": "Design process / Validation process"
    },
    "54": {
      "mode": "glance",
      "chapter": 4,
      "cue": "both Black box and White Box (Gray & Hybrid)",
      "pick": "Both of (i) and (ii)",
      "avoid": "None of (i) nor (ii)"
    },
    "55": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Improve software accuracy",
      "avoid": "Find faults / Assure quality"
    },
    "56": {
      "mode": "glance",
      "chapter": 4,
      "cue": "input and output coverage",
      "pick": "Equivalence partitioning",
      "avoid": "Boundary value analysis"
    },
    "57": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Unit, integration, system, validation",
      "avoid": "None of the above"
    },
    "58": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Supplies inputs to the software",
      "avoid": "Schedules tests / Manages software incidents"
    },
    "59": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "Checking coding standards",
      "avoid": "Executing the code / Testing system performance"
    },
    "60": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "To identify defects in software",
      "avoid": "To increase software complexity / To reduce software features"
    },
    "61": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "Closing the incident report",
      "avoid": "Logging the incident"
    },
    "62": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "Confirmation and regression testing",
      "avoid": "Performance and stress testing / Usability and compliance testing"
    },
    "63": {
      "mode": "standalone",
      "chapter": 2,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Driver",
      "avoid": "Drivers (số nhiều) / Stub"
    },
    "64": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "Missing requirements or design defects",
      "avoid": "Performance-related defects / Defects in user interface design"
    },
    "65": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "(2) Record/Playback",
      "avoid": "(1) Performance / Both of (1) and (2)"
    },
    "66": {
      "mode": "glance",
      "chapter": 2,
      "cue": "internet banking solution",
      "pick": "Non-functional testing.",
      "avoid": "Functional / System / Requirements testing"
    },
    "67": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "impact of the defect on the system",
      "avoid": "urgency / priority"
    },
    "68": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Robustness",
      "avoid": "Operability / Observability"
    },
    "69": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "De-bugging",
      "avoid": "Estimating test duration / Incident Management"
    },
    "70": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "Scenario, Dry Run, Peer Group",
      "avoid": "Pre Meeting Preparations / Formal Follow Up Process"
    },
    "71": {
      "mode": "instant",
      "chapter": 6,
      "cue": null,
      "pick": "Capture/Playback",
      "avoid": "Data tester / Boundary tester"
    },
    "72": {
      "mode": "glance",
      "chapter": 4,
      "cue": "black box design technique?",
      "pick": "Equivalence partitioning",
      "avoid": "Statement / Branch / Decision testing"
    },
    "73": {
      "mode": "standalone",
      "chapter": 1,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Dynamic analysis",
      "avoid": "Memory analysis / Static analysis"
    },
    "74": {
      "mode": "glance",
      "chapter": 1,
      "cue": "defines the expected results of a test",
      "pick": "Test case specification.",
      "avoid": "Test design / Test procedure specification"
    },
    "75": {
      "mode": "standalone",
      "chapter": 3,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Code inspection",
      "avoid": "Unit / Integration / System testing"
    },
    "76": {
      "mode": "standalone",
      "chapter": 4,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Black box testing",
      "avoid": "Glass / Clear / Structural / White box"
    },
    "77": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "Allocate the individual roles",
      "avoid": "Log defects / Gather metrics"
    },
    "78": {
      "mode": "glance",
      "chapter": 5,
      "cue": "common entry criteria (Choose 2)",
      "pick": "Availability of test environment + Availability of necessary resources",
      "avoid": "Exit criteria / Defect fixes"
    },
    "79": {
      "mode": "glance",
      "chapter": 2,
      "cue": "a type of non-functional testing?",
      "pick": "Usability testing.",
      "avoid": "Unit / Integration / Regression"
    },
    "80": {
      "mode": "standalone",
      "chapter": 5,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Test execution",
      "avoid": "Test planning / Test analysis"
    },
    "81": {
      "mode": "glance",
      "chapter": 2,
      "cue": "Which is the non-functional testing",
      "pick": "Performance testing",
      "avoid": "Regression / Unit / Sanity testing"
    },
    "82": {
      "mode": "glance",
      "chapter": 3,
      "cue": "formal assessment ... trained moderator",
      "pick": "Inspection",
      "avoid": "Walkthrough / Peer review"
    },
    "83": {
      "mode": "standalone",
      "chapter": 5,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Implementation and execution",
      "avoid": "Planning / Analysis and design"
    },
    "84": {
      "mode": "glance",
      "chapter": 2,
      "cue": "individual units or components",
      "pick": "Unit testing",
      "avoid": "Integration / System / Acceptance"
    },
    "85": {
      "mode": "standalone",
      "chapter": 2,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Stress Testing",
      "avoid": "Load / Performance / Regression testing"
    },
    "86": {
      "mode": "standalone",
      "chapter": 3,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Code review",
      "avoid": "Unit / System / Usability testing"
    },
    "87": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "Requirements management tools",
      "avoid": "Incident management tools / Configuration management tools"
    },
    "88": {
      "mode": "standalone",
      "chapter": 6,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Dynamic analysis tool",
      "avoid": "Static analysis tool / Memory analysis"
    },
    "89": {
      "mode": "glance",
      "chapter": 2,
      "cue": "meets business requirements",
      "pick": "Acceptance testing",
      "avoid": "Unit / Integration / System"
    },
    "90": {
      "mode": "glance",
      "chapter": 4,
      "cue": "different combinations of inputs",
      "pick": "Decision table testing",
      "avoid": "Boundary value / Equivalence"
    },
    "91": {
      "mode": "standalone",
      "chapter": 6,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Test design tool",
      "avoid": "Test management / Execution tool"
    },
    "92": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "Experience-based testing",
      "avoid": "Black-box testing / White-box testing"
    },
    "93": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "Branch coverage testing",
      "avoid": "Basis path coverage testing / Statement coverage testing"
    },
    "94": {
      "mode": "glance",
      "chapter": 2,
      "cue": "confirm that the original defect has been successfully removed",
      "pick": "Confirmation testing",
      "avoid": "Regression testing"
    },
    "95": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "During test planning",
      "avoid": "During test analysis / During test execution"
    },
    "96": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "Experience-based",
      "avoid": "Specification-based / Structure-based"
    },
    "97": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "A failure",
      "avoid": "An error / A fault"
    },
    "98": {
      "mode": "standalone",
      "chapter": 3,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Scribe",
      "avoid": "Moderator / Author / Manager"
    },
    "99": {
      "mode": "glance",
      "chapter": 1,
      "cue": "USUALLY perform debugging activities",
      "pick": "Developers.",
      "avoid": "Testers / Analysts"
    },
    "100": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "user-friendliness, while performance testing measures",
      "avoid": "Usability testing measures how fast the..."
    },
    "101": {
      "mode": "standalone",
      "chapter": 2,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Procedure",
      "avoid": "Process / Standard / Methodology"
    },
    "102": {
      "mode": "glance",
      "chapter": 6,
      "cue": "supports traceability, recording of incidents or scheduling",
      "pick": "A test management tool",
      "avoid": "Dynamic / Static / Execution tool"
    },
    "103": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "Statement and branch testing",
      "avoid": "Usability testing / Security testing"
    },
    "104": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Plain language specification model",
      "avoid": "Process flow model / State transaction model"
    },
    "105": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "Difficult to test",
      "avoid": "Large / Small"
    },
    "106": {
      "mode": "standalone",
      "chapter": 4,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Branch coverage",
      "avoid": "Condition coverage / Statement testing"
    },
    "107": {
      "mode": "glance",
      "chapter": 5,
      "cue": "determine the exit criteria?",
      "pick": "Test planning.",
      "avoid": "Evaluating exit criteria and reporting"
    },
    "108": {
      "mode": "standalone",
      "chapter": 4,
      "cue": "Đứng lẻ 1 mình",
      "pick": "White box",
      "avoid": "Black box / Gray box"
    },
    "109": {
      "mode": "standalone",
      "chapter": 6,
      "cue": "Đứng lẻ 1 mình",
      "pick": "User requirements",
      "avoid": "Regression testing / GUI"
    },
    "110": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Computer Aided Software Testing",
      "avoid": "Computer Aided Software Tools / None of the others"
    },
    "111": {
      "mode": "glance",
      "chapter": 2,
      "cue": "Contract and regulation testing",
      "pick": "Acceptance testing",
      "avoid": "System / Integration testing"
    },
    "112": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "Process improvement",
      "avoid": "Review process itself / Metrics analysis"
    },
    "113": {
      "mode": "glance",
      "chapter": 5,
      "cue": "faults be found most cost effectively",
      "pick": "Design",
      "avoid": "Execution / Planning / Check Exit"
    },
    "114": {
      "mode": "glance",
      "chapter": 5,
      "cue": "Designing the test environment set-up",
      "pick": "Test Analysis and Design",
      "avoid": "Test Implementation and execution"
    },
    "115": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "End User License Agreement",
      "avoid": "End Usability License Agreement / End User License Arrangement"
    },
    "116": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Is impractical and impossible",
      "avoid": "Is impractical but possible / Is practically possible"
    },
    "117": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "Planning, Review meeting, Rework, Follow up",
      "avoid": "Planning, Review meeting, Rework, Kick off"
    },
    "118": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Poor software and poor testing",
      "avoid": "Insufficient time for testing / Bad luck"
    },
    "119": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Project status report",
      "avoid": "Interim Test report / Final test report"
    },
    "120": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "A static analysis tool",
      "avoid": "Code reviews / Code inspections"
    },
    "121": {
      "mode": "glance",
      "chapter": 5,
      "cue": "Handover of Testware",
      "pick": "Test Closure Activities",
      "avoid": "Evaluating exit criteria and reporting"
    },
    "122": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Requirements Phase",
      "avoid": "Analysis and Design Phase / Development Phase"
    },
    "123": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Extemal failure",
      "avoid": "Internal failure / Appraisal"
    },
    "124": {
      "mode": "instant",
      "chapter": 6,
      "cue": null,
      "pick": "Lack of Objectivity",
      "avoid": "Lack of technical documentation / Lack of training"
    },
    "125": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "Random testing",
      "avoid": "Data Flow testing / Statement testing"
    },
    "126": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "Pole Coverage",
      "avoid": "Statement Coverage / Condition Coverage"
    },
    "127": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "All of the others",
      "avoid": "All of them are true / All of i, ii, iii"
    },
    "128": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Reducing test time",
      "avoid": "No change / Increasing test time"
    },
    "129": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "Mediates between people",
      "avoid": "Takes minutes of the meeting / Takes telephone calls"
    },
    "130": {
      "mode": "glance",
      "chapter": 2,
      "cue": "interfaces and interaction between integrated components",
      "pick": "Integration testing",
      "avoid": "Unit / System testing"
    },
    "131": {
      "mode": "glance",
      "chapter": 5,
      "cue": "Reviewing the test Basis",
      "pick": "Test Analysis and Design",
      "avoid": "Evaluating exit criteria and reporting"
    },
    "132": {
      "mode": "standalone",
      "chapter": 3,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Technical Review",
      "avoid": "Walkthrough / Inspection"
    },
    "133": {
      "mode": "standalone",
      "chapter": 3,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Management",
      "avoid": "Developers / Testers / Analysts"
    },
    "134": {
      "mode": "standalone",
      "chapter": 1,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Exhaustive Testing",
      "avoid": "Exhaustive testing is possible / Regression testing"
    },
    "135": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Plan, Do, Check, Act",
      "avoid": "Plan, Do, Correct, Act / Plan, Debug, Check, Act"
    },
    "136": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Conformance to requirements",
      "avoid": "Quality is job one / Zero defects"
    },
    "137": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "Only Product risks",
      "avoid": "Only Project risks / Project risks and Product risks"
    },
    "138": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "Business scenarios",
      "avoid": "Performance testing / Unit testing"
    },
    "139": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "Purchased/contracted software",
      "avoid": "Traditional system development / Iterative development"
    },
    "140": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Model based testing approach",
      "avoid": "Heuristic testing approach / Methodical testing approach"
    },
    "141": {
      "mode": "glance",
      "chapter": 3,
      "cue": "Static analysis tools are typically used by",
      "pick": "Developers",
      "avoid": "Testers / Analysts"
    },
    "142": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Viability",
      "avoid": "Correctness / Usability"
    },
    "143": {
      "mode": "glance",
      "chapter": 1,
      "cue": "steps required to operate the system and exercise test cases",
      "pick": "Test Procedure Specification",
      "avoid": "Test Case / Test Design Specification"
    },
    "144": {
      "mode": "standalone",
      "chapter": 5,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Test specification",
      "avoid": "Features to be tested / Schedule / Risks"
    },
    "145": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "Field testing",
      "avoid": "Alpha testing / Performance testing"
    },
    "146": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Procedures and standards",
      "avoid": "Tools and techniques / Processes and walkthroughs"
    },
    "147": {
      "mode": "glance",
      "chapter": 1,
      "cue": "principal attributes of tools and automation",
      "pick": "Both of (1) and (2)",
      "avoid": "None of (1) nor (2)"
    },
    "148": {
      "mode": "glance",
      "chapter": 3,
      "cue": "leads the review ... planning ... running the meeting",
      "pick": "Moderator",
      "avoid": "Author / Scribe / Reviewer"
    },
    "149": {
      "mode": "glance",
      "chapter": 2,
      "cue": "interfaces and interaction between integrated components",
      "pick": "Integration level testing",
      "avoid": "Component / System level"
    },
    "150": {
      "mode": "glance",
      "chapter": 2,
      "cue": "varying workloads to measure and evaluate performance",
      "pick": "Load Testing",
      "avoid": "Stress / Volume / Recovery testing"
    },
    "151": {
      "mode": "standalone",
      "chapter": 2,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Test Suite",
      "avoid": "Test Case / Test Scenario"
    },
    "152": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "Configuration Control",
      "avoid": "Status Accounting / Configuration Identification"
    },
    "153": {
      "mode": "standalone",
      "chapter": 1,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Specifications",
      "avoid": "Test cases / Test data / Test scripts"
    },
    "154": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Generating many transactions",
      "avoid": "Measuring response time / Measuring transaction rates"
    },
    "155": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "Bottom-up integration",
      "avoid": "Top-down integration / None of the others"
    },
    "156": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "Selecting the personnel, allocating roles",
      "avoid": "Explaining the objectives / Follow up"
    },
    "157": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "Requirements management tools",
      "avoid": "Incident management tools / Configuration management tools"
    },
    "158": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "All of the others",
      "avoid": "All of them are true / All of i, ii, iii"
    },
    "159": {
      "mode": "glance",
      "chapter": 5,
      "cue": "inputs for developing a test plan are taken from",
      "pick": "Project plan",
      "avoid": "Business plan / Support plan"
    },
    "160": {
      "mode": "glance",
      "chapter": 4,
      "cue": "White Box Techniques are also called as",
      "pick": "Structural Testing",
      "avoid": "Design based / Error guessing"
    },
    "161": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "User Acceptance Test Cases",
      "avoid": "Integration Level Test Cases / Unit Level Test Cases"
    },
    "162": {
      "mode": "glance",
      "chapter": 1,
      "cue": "possible to remove all defects",
      "pick": "False",
      "avoid": "True"
    },
    "163": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "Open, Assigned, Fixed, Closed",
      "avoid": "Open, Fixed, Assigned, Closed / Assigned, Open, Closed, Fixed"
    },
    "164": {
      "mode": "glance",
      "chapter": 2,
      "cue": "testing the entire system",
      "pick": "System Testing",
      "avoid": "Unit / Integration / Acceptance"
    },
    "165": {
      "mode": "glance",
      "chapter": 5,
      "cue": "Reporting Discrepancies as incidents",
      "pick": "Test Implementation and execution",
      "avoid": "Evaluating exit criteria and reporting"
    },
    "166": {
      "mode": "standalone",
      "chapter": 2,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Re-testing",
      "avoid": "Sanity / Unit / Stress testing"
    },
    "167": {
      "mode": "glance",
      "chapter": 2,
      "cue": "Drivers are also known as",
      "pick": "ii, iii are true and i is false",
      "avoid": "All of i, ii and iii are true"
    },
    "168": {
      "mode": "instant",
      "chapter": 6,
      "cue": null,
      "pick": "Analyze your needs and requirements",
      "avoid": "Attend a tool exhibition / Invite a vendor to give a demo"
    },
    "169": {
      "mode": "glance",
      "chapter": 4,
      "cue": "4 đáp án là số 1 / 2 / 3 / 4",
      "pick": "2",
      "avoid": "1, 3, 4"
    },
    "170": {
      "mode": "glance",
      "chapter": 4,
      "cue": "4 đáp án là số 1 / 2 / 3 / 4",
      "pick": "2",
      "avoid": "1, 3, 4"
    },
    "171": {
      "mode": "glance",
      "chapter": 5,
      "cue": "component test standard",
      "pick": "BS7925-2",
      "avoid": "IEEE 829 / IEEE 610 / BS7925-1"
    },
    "172": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "ISO 9126",
      "avoid": "ISO 829 / ISO 1012"
    },
    "173": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "8 characters",
      "avoid": "7 characters / 13 characters"
    },
    "174": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "32, 37, 40",
      "avoid": "23, 24, 25 / 0, 12, 25"
    },
    "175": {
      "mode": "glance",
      "chapter": 4,
      "cue": "4 đáp án là số 1 / 2 / 3 / 4",
      "pick": "2",
      "avoid": "1, 3, 4"
    },
    "176": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "3,10,22",
      "avoid": "10,11,21 / 3,20,21"
    },
    "177": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "15, 19 and 25",
      "avoid": "17, 18 and 19 / 18, 20 and 22"
    },
    "178": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "4, 5, 99",
      "avoid": "5, 6, 20 / 4, 5, 80"
    },
    "179": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "40-50",
      "avoid": "10-20 / 70-80"
    },
    "180": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "9,10,21,22",
      "avoid": "9,10,11,22 / 10,11,21,22"
    },
    "181": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "1899,1900,2004,2005",
      "avoid": "0,1900,2004,2005 / 1900,2004"
    },
    "182": {
      "mode": "glance",
      "chapter": 1,
      "cue": "Equivalence Partitioning ... discount (Select all)",
      "pick": "Chọn đủ 3 khoảng tuổi (1—12, 13-64, 65+)",
      "avoid": "None of the others"
    },
    "183": {
      "mode": "standalone",
      "chapter": 1,
      "cue": "Đứng lẻ 1 mình",
      "pick": "10000,50000,99999",
      "avoid": "Bộ số có 0 hoặc 100000"
    },
    "184": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "22,23,24",
      "avoid": "12,16,22 / 24,27,17"
    },
    "185": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "All of them are valid reasons for failure",
      "avoid": "2 is a valid reason; 1,3,4 & 5 are not"
    },
    "186": {
      "mode": "glance",
      "chapter": 4,
      "cue": "defects is use case testing MOST likely to uncover",
      "pick": "i, iii.",
      "avoid": "ii, iv"
    },
    "187": {
      "mode": "glance",
      "chapter": 3,
      "cue": "5 main activities of a formal review",
      "pick": "1, 2, 4, 7, 8",
      "avoid": "Các dãy số khác"
    },
    "188": {
      "mode": "glance",
      "chapter": 3,
      "cue": "TRUE for Technical Review",
      "pick": "I, III and IV",
      "avoid": "Câu có II (Management)"
    },
    "189": {
      "mode": "glance",
      "chapter": 6,
      "cue": "implementation of a testing tool",
      "pick": "i, ii, iv",
      "avoid": "Câu có iii (dự án đang trễ lịch)"
    },
    "190": {
      "mode": "glance",
      "chapter": 6,
      "cue": "benefits ... using test tools",
      "pick": "i and iv",
      "avoid": "ii and iii"
    },
    "191": {
      "mode": "glance",
      "chapter": 2,
      "cue": "characteristic of regression testing",
      "pick": "ii, iii",
      "avoid": "Câu có i (chỉ chạy 1 lần)"
    },
    "192": {
      "mode": "glance",
      "chapter": 1,
      "cue": "monitoring the test progress",
      "pick": "i, ii, iii is correct",
      "avoid": "Câu có iv"
    },
    "193": {
      "mode": "glance",
      "chapter": 5,
      "cue": "task of a Test Lead / Leader",
      "pick": "i, ii, iii is true and iv is false",
      "avoid": "iv (Create Test Specifications)"
    },
    "194": {
      "mode": "glance",
      "chapter": 5,
      "cue": "part of Test Closure Activities",
      "pick": "All of them are true",
      "avoid": "Các câu loại trừ 1 ý"
    },
    "195": {
      "mode": "glance",
      "chapter": 6,
      "cue": "task of a Tester",
      "pick": "ii, iii, iv is true and i is false",
      "avoid": "ii, iii, iv ARE true / câu i (Tool Vendor)"
    },
    "196": {
      "mode": "glance",
      "chapter": 3,
      "cue": "Formal Review / Inspection",
      "pick": "i, iii, iv are true and ii is false",
      "avoid": "Câu có ii (led by author)"
    },
    "197": {
      "mode": "glance",
      "chapter": 5,
      "cue": "activities belong to Test Planning",
      "pick": "ii & iii are true, i, iv & v are false.",
      "avoid": "Các tổ hợp khác"
    },
    "198": {
      "mode": "glance",
      "chapter": 3,
      "cue": "persons involved in a Formal Review",
      "pick": "i, ii, iii are true and iv is false.",
      "avoid": "ii, iii, iv are true"
    },
    "199": {
      "mode": "glance",
      "chapter": 5,
      "cue": "Test Plan Outline contains",
      "pick": "i, iii, iv are true and ii is false",
      "avoid": "Câu có ii (Test Scripts)"
    },
    "200": {
      "mode": "glance",
      "chapter": 1,
      "cue": "early test design",
      "pick": "i, iii & iv are true, ii & v are false",
      "avoid": "Các tổ hợp khác"
    },
    "201": {
      "mode": "glance",
      "chapter": 5,
      "cue": "Deciding How much testing is enough",
      "pick": "i, ii are true and iii, iv are false",
      "avoid": "ii, iii, iv are true"
    },
    "202": {
      "mode": "glance",
      "chapter": 3,
      "cue": "found by static analysis tools",
      "pick": "i, ii, iii, iv is correct",
      "avoid": "Các câu thiếu ý"
    },
    "203": {
      "mode": "glance",
      "chapter": 5,
      "cue": "Exit criteria may consist of",
      "pick": "i, ii, iii is correct and iv is incorrect",
      "avoid": "Các tổ hợp khác"
    },
    "204": {
      "mode": "glance",
      "chapter": 5,
      "cue": "purpose of Configuration Management",
      "pick": "i, ii and iv",
      "avoid": "Câu có iii"
    },
    "205": {
      "mode": "glance",
      "chapter": 4,
      "cue": "characteristics of White Box testing",
      "pick": "i, ii are true and iii and iv are false",
      "avoid": "Các tổ hợp khác"
    },
    "206": {
      "mode": "glance",
      "chapter": 2,
      "cue": "Match V-model test levels",
      "pick": "i-c, ii-a, iii-d, iv-b",
      "avoid": "Các cặp ghép khác"
    },
    "207": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "ii is true and i, iii, iv are false",
      "avoid": "Options i, ii, iii, iv are true"
    },
    "208": {
      "mode": "glance",
      "chapter": 3,
      "cue": "success factors for a review",
      "pick": "ii, iii, iv are correct and i is incorrect",
      "avoid": "Câu có i (no predefined objective)"
    },
    "209": {
      "mode": "glance",
      "chapter": 1,
      "cue": "tools are geared more for developer use",
      "pick": "ii and iv are more for developers",
      "avoid": "Test management / Performance tools"
    },
    "210": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "depends on the risks for the system",
      "avoid": "All faults fixed / All tests executed"
    },
    "211": {
      "mode": "glance",
      "chapter": 5,
      "cue": "Test planning has which ... major tasks",
      "pick": "i, ii, iv are true and iii is false",
      "avoid": "ii, iii, iv are true"
    },
    "212": {
      "mode": "glance",
      "chapter": 5,
      "cue": "selection of a test approach",
      "pick": "i, ii, iii, iv are true",
      "avoid": "ii, iii, iv are true"
    },
    "213": {
      "mode": "glance",
      "chapter": 5,
      "cue": "Test Implementation and execution ... major tasks",
      "pick": "i, ii, iii are true and iv is false",
      "avoid": "ii, iii, iv are true"
    },
    "214": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "i, v, iv, ii, iii, vi",
      "avoid": "i, ii, iii, iv, v, vi / vi, i, ii, iii, iv, v"
    },
    "215": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "(i) Identifying defects",
      "avoid": "(ii) Fixing defects / (i) and (ii)"
    },
    "216": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "L - N + 2P",
      "avoid": "N - L + 2P / N - L + P"
    },
    "217": {
      "mode": "glance",
      "chapter": 4,
      "cue": "Match 4 test design techniques",
      "pick": "1Y, 2Z, 3X, 4W",
      "avoid": "Các cặp ghép khác"
    },
    "218": {
      "mode": "glance",
      "chapter": 1,
      "cue": "Pick up and read the newspaper",
      "pick": "SC = 2 and DC = 3",
      "avoid": "SC = 1 / DC = 2"
    },
    "219": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "1 test for statement coverage, 2 for branch coverage",
      "avoid": "3 for branch coverage"
    },
    "220": {
      "mode": "glance",
      "chapter": 1,
      "cue": "Defect clustering & Pareto (1 and 2)",
      "pick": "1 and 2 are true, 3 and 4 are false",
      "avoid": "Các tổ hợp khác"
    },
    "221": {
      "mode": "glance",
      "chapter": 2,
      "cue": "Regression testing should be performed",
      "pick": "w & y are true, v, x & z are false",
      "avoid": "All of them are true"
    },
    "222": {
      "mode": "glance",
      "chapter": 5,
      "cue": "Match Estimation / Control / Monitoring",
      "pick": "1-b, 2-c, 3-a",
      "avoid": "Các cặp ghép khác"
    },
    "223": {
      "mode": "glance",
      "chapter": 3,
      "cue": "Match 4 types of Reviews (s, t, u, v)",
      "pick": "s = 4 and 5, t = 3, u = 2, v = 1",
      "avoid": "Các cặp ghép khác"
    },
    "224": {
      "mode": "glance",
      "chapter": 4,
      "cue": "Minimum Test ... Statement Coverage (Order-qty)",
      "pick": "Statement coverage is 1",
      "avoid": "Statement coverage is 2, 3, 4"
    },
    "225": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "1 test for statement coverage, 2 for branch coverage",
      "avoid": "3 for branch coverage"
    },
    "226": {
      "mode": "glance",
      "chapter": 4,
      "cue": "IF A > B THEN ... ELSE ... ENDIF (có chữ ELSE)",
      "pick": "2 tests for statement coverage, 2 for branch coverage",
      "avoid": "1 test for statement / 3 for branch"
    },
    "227": {
      "mode": "glance",
      "chapter": 4,
      "cue": "Sơ đồ đường đi vwy, vwz, vxy, vxz",
      "pick": "A",
      "avoid": "ABCD, ABD, ACD"
    },
    "228": {
      "mode": "glance",
      "chapter": 4,
      "cue": "Sơ đồ công tắc OFF / ON / FAULT (invalid)",
      "pick": "FAULT to ON",
      "avoid": "OFF to ON / ON to FAULT"
    },
    "229": {
      "mode": "glance",
      "chapter": 4,
      "cue": "Sơ đồ Giỏ hàng Login - Browse - Basket",
      "pick": "Login Browse Basket Checkout Basket Logout",
      "avoid": "3 câu có chữ Pay"
    },
    "230": {
      "mode": "glance",
      "chapter": 1,
      "cue": "Bảng quyết định thẻ Citibank (Silver room)",
      "pick": "A - Offer upgrade to Gold, B - Don't offer any upgrade",
      "avoid": "Các phương án khác"
    },
    "231": {
      "mode": "glance",
      "chapter": 2,
      "cue": "Component Testing is also called as",
      "pick": "i, ii, iii are true and iv is false",
      "avoid": "All of them are true"
    },
    "232": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "Boo01k",
      "avoid": "BOOK / Book"
    },
    "233": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "Test Effectiveness",
      "avoid": "Defects / Trends analysis"
    },
    "234": {
      "mode": "glance",
      "chapter": 2,
      "cue": "reliability, performance, security, and usability",
      "pick": "Non-functional testing",
      "avoid": "Functional / Requirements testing"
    },
    "235": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "Bottom-up integration",
      "avoid": "Top-down integration / None of the others"
    },
    "236": {
      "mode": "glance",
      "chapter": 4,
      "cue": "sequences of statements (paths)",
      "pick": "4 Test Cases",
      "avoid": "2 / 3 Test Cases"
    },
    "237": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "without executing the software",
      "avoid": "To execute the software and identify defects"
    },
    "238": {
      "mode": "instant",
      "chapter": 6,
      "cue": null,
      "pick": "separate test data from scripts",
      "avoid": "They do not require external data"
    },
    "239": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "defects in process flows related to typical use",
      "avoid": "To identify defects in the connections..."
    },
    "240": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "behavior from an external perspective",
      "avoid": "internal code structure"
    },
    "241": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "Static testing does not involve executing the code",
      "avoid": "Static testing involves executing the..."
    },
    "242": {
      "mode": "glance",
      "chapter": 3,
      "cue": "What is static testing?",
      "pick": "examined manually, or with a set of tools, but not executed",
      "avoid": "Software is executed..."
    },
    "243": {
      "mode": "glance",
      "chapter": 2,
      "cue": "What is dynamic testing?",
      "pick": "Software is executed using a set of input values",
      "avoid": "not executed"
    },
    "244": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "Integration testing, system testing, acceptance testing",
      "avoid": "System testing, integration testing,..."
    },
    "245": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "To verify that the system behaves correctly under load",
      "avoid": "To ensure that the system meets..."
    },
    "246": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "integrates testing throughout the development phases",
      "avoid": "less costly and time-consuming"
    },
    "247": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "individual units or components in isolation",
      "avoid": "To perform performance testing"
    },
    "248": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "how well the system performs",
      "avoid": "It is always performed after functional..."
    },
    "249": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "misunderstandings and reduced software quality",
      "avoid": "It enhances the efficiency of the..."
    },
    "250": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "vary based on the specific context",
      "avoid": "It is irrelevant since all testing..."
    },
    "251": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "clarifies what is included and excluded",
      "avoid": "It outlines the geographical areas where..."
    },
    "252": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "changes in state within an application",
      "avoid": "The visual aspects of the user interface"
    },
    "253": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "interfaces between components, interactions",
      "avoid": "It is unit, module and program testing,..."
    },
    "254": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "educate participants and gather feedback",
      "avoid": "To detect critical defects / To automate review processes"
    },
    "255": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Same tests over time detect fewer issues",
      "avoid": "Testing must be exhaustive"
    },
    "256": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "functions according to the specified requirements",
      "avoid": "To assess the system's non-functional..."
    },
    "257": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "bug fixes and enhancements do not introduce new defects",
      "avoid": "To ensure that new features disrupt..."
    },
    "258": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "areas of the software most likely to have defects",
      "avoid": "By performing minimal testing on all features"
    },
    "259": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "interaction and effectiveness of the testing team",
      "avoid": "It allows for complete automation of the..."
    },
    "260": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "Inexpensive way to get some benefit",
      "avoid": "Find defects"
    },
    "261": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "only one value in the range becomes a test case",
      "avoid": "every value in the range"
    },
    "262": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "information for a risk based decision about release",
      "avoid": "find all remaining defects"
    },
    "263": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "To plan when to stop testing",
      "avoid": "To know when a specific test has finished..."
    },
    "264": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Preventative tests are designed early; reactive tests",
      "avoid": "Preventative tests and reactive tests are..."
    },
    "265": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Cultural difference",
      "avoid": "Does not meet people needs / Relinquishments of control"
    },
    "266": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "identify defects in any software work product",
      "avoid": "To identify potential application..."
    },
    "267": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "prevent defects from being introduced",
      "avoid": "It is cheaper than designing tests during..."
    },
    "268": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "incorrect behavior of the system in operation",
      "avoid": "A mistake made by a developer"
    },
    "269": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "Integration of all components at once",
      "avoid": "Detailed and extensive planning / User involvement is mandatory"
    },
    "270": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "likelihood of an adverse event and the impact",
      "avoid": "The cost of dealing with an adverse event..."
    },
    "271": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "continuation or stoppage of testing",
      "avoid": "Finalizing the software release without..."
    },
    "272": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "Test planning and execution occur simultaneously",
      "avoid": "Ability to strictly adhere to test scripts"
    },
    "273": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "risk level and complexity of the project",
      "avoid": "The personal preferences of the test team"
    },
    "274": {
      "mode": "standalone",
      "chapter": 3,
      "cue": "Đứng lẻ 1 mình",
      "pick": "Explaining the objective",
      "avoid": "Allocating roles (thuộc Planning)"
    },
    "275": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "Planning — Initiate review — Individual review",
      "avoid": "Individual review đứng đầu"
    },
    "276": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "how much regression testing to do",
      "avoid": "Impact analysis assesses the effect on..."
    },
    "277": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "executing Software for the purpose of finding defects",
      "avoid": "The goal / purpose of testing is to..."
    },
    "278": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "impact of a defect on the system, while priority",
      "avoid": "Severity refers to the importance of a..."
    },
    "279": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "inspection is led by a moderator and a walkthrough is led by the author",
      "avoid": "Both inspections and walkthroughs..."
    },
    "280": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "Reporting discrepancies as incidents",
      "avoid": "Measuring and analyzing results"
    },
    "281": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "Scheduling test analysis and design tasks",
      "avoid": "Initiating corrective actions / Measuring and analyzing results"
    },
    "282": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "Available skills and experience in the proposed techniques",
      "avoid": "Availability of tools to support the..."
    },
    "283": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Faults in requirements are the most expensive to fix",
      "avoid": "Faults in program specifications are the..."
    },
    "284": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Designed by a person from a different organization",
      "avoid": "Designed by another person"
    },
    "285": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "Identifying defects early and thereby reducing rework costs",
      "avoid": "Decreasing the amount of documentation..."
    },
    "286": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "Management of the testing process and resources",
      "avoid": "Direct involvement in software programming"
    },
    "287": {
      "mode": "glance",
      "chapter": 1,
      "cue": "minimize psychological conflicts (Select all)",
      "pick": "Chọn 3 câu tích cực (Fostering, Ensuring, Encouraging)",
      "avoid": "Câu có chữ belittles the coder"
    },
    "288": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "Static analysis of a software model",
      "avoid": "Technical review of a functional..."
    },
    "289": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "which modules to combine when and how many at once",
      "avoid": "all of the small modules"
    },
    "290": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "discovered every bug in the program",
      "avoid": "You have tested every statement, branch,..."
    },
    "291": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "check unchanged areas of the software",
      "avoid": "check only changed areas"
    },
    "292": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "constructive feedback and respect",
      "avoid": "Minimizing interaction between testers..."
    },
    "293": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "testers focus on test execution",
      "avoid": "A test leader focuses on test execution..."
    },
    "294": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "limited time and no detailed specifications",
      "avoid": "When detailed specifications are available"
    },
    "295": {
      "mode": "instant",
      "chapter": 6,
      "cue": null,
      "pick": "Running regression tests",
      "avoid": "Designing new test cases"
    },
    "296": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "open defects compared to closed defects",
      "avoid": "Number of passed requirements per code line"
    },
    "297": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "All of the others",
      "avoid": "All of them are true / All of i, ii, iii"
    },
    "298": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "scheduled time for testing expires",
      "avoid": "None of the others"
    },
    "299": {
      "mode": "instant",
      "chapter": 6,
      "cue": null,
      "pick": "A small team to establish the best way",
      "avoid": "All teams at once"
    },
    "300": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "dynamic and adapt to new findings",
      "avoid": "After receiving comprehensive training in..."
    },
    "301": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "difference between the system and the requirement",
      "avoid": "We are looking for errors and fixing them"
    },
    "302": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "At all test levels",
      "avoid": "At all levels above integration"
    },
    "303": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "finding defects early when they are cheaper to fix",
      "avoid": "By delaying defect detection until after..."
    },
    "304": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "use risks and priorities to focus testing",
      "avoid": "Exhaustive testing is possible"
    },
    "305": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "beyond normal operational capacity, while load testing",
      "avoid": "Stress testing examines system..."
    },
    "306": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "check compliance with standards",
      "avoid": "By focusing solely on end-user needs"
    },
    "307": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "led by a trained moderator and follow a defined process",
      "avoid": "Technical reviews are less structured and..."
    },
    "308": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "environment needs to be ready for executing",
      "avoid": "It is only relevant during test case design"
    },
    "309": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "how changes might affect the existing system",
      "avoid": "It determines the effect of a new..."
    },
    "310": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "all branches in decision points are executed",
      "avoid": "It measures the software's performance..."
    },
    "311": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "divides input data into valid and invalid partitions",
      "avoid": "It requires thorough knowledge of the..."
    },
    "312": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "consistency and thoroughness in defect identification",
      "avoid": "To reduce the time spent on discussions"
    },
    "313": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "unlikely to cause a failure",
      "avoid": "Is likely to be fault-free"
    },
    "314": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "process for selecting test cases",
      "avoid": "A process for determining expected outputs"
    },
    "315": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "build confidence in the software's functionality",
      "avoid": "To gather evidence for a lawsuit / To train the users"
    },
    "316": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Eliminate some of the requirements",
      "avoid": "Add more testers / Work overtime"
    },
    "317": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "during testing if it contains all incidents",
      "avoid": "Only records defects / Is of limited value"
    },
    "318": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "see other and different defects and are unbiased",
      "avoid": "Independent testers are much more..."
    },
    "319": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "partial measure of test thoroughness",
      "avoid": "complete measure"
    },
    "320": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "As soon as the software requirements have been approved",
      "avoid": "After coding is complete"
    },
    "321": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "supplement to formal test design techniques",
      "avoid": "replace formal techniques"
    },
    "322": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "After more formal techniques have been applied",
      "avoid": "Before formal techniques"
    },
    "323": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "Before the test is executed",
      "avoid": "After the test is executed"
    },
    "324": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "appropriate to all levels of testing",
      "avoid": "A black box testing technique used only..."
    },
    "325": {
      "mode": "glance",
      "chapter": 3,
      "cue": "static analysis MOST likely to find",
      "pick": "Unreachable (\"dead\") code",
      "avoid": "Memory leaks (thuộc câu NOT find)"
    },
    "326": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "measure the size of the functionality",
      "avoid": "To measure the functional flow"
    },
    "327": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Error condition hiding another error condition",
      "avoid": "Masking a fault by developer / Masking a fault by a tester"
    },
    "328": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "Configuration management tools — Check for consistence",
      "avoid": "Test data preparation tools — Manipulate..."
    },
    "329": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Instead of exhaustive testing, we use risks and priorities",
      "avoid": "Math formulas for reports that the..."
    },
    "330": {
      "mode": "glance",
      "chapter": 1,
      "cue": "explanation of 'Early testing'",
      "pick": "start as early as possible in the software or system development life cycle",
      "avoid": "Các giải thích nguyên lý khác"
    },
    "331": {
      "mode": "glance",
      "chapter": 2,
      "cue": "explanation of 'Testing shows presence of defects'",
      "pick": "can show that defects are present, but cannot prove that there are no defects",
      "avoid": "Các giải thích nguyên lý khác"
    },
    "332": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "confirm that the defect has indeed been fixed",
      "avoid": "Validate the expected results"
    },
    "333": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Wait for the person to pause, acknowledge",
      "avoid": "Confront the person"
    },
    "334": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Entity Outside the Project's sphere of influence",
      "avoid": "Done by the Developer / Done by the Test Engineers"
    },
    "335": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "How much regression testing should be done",
      "avoid": "Exit Criteria"
    },
    "336": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "How much of the code has been covered",
      "avoid": "Variables not defined in the code"
    },
    "337": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "difficult to determine if the test has passed or failed",
      "avoid": "We cannot run the test"
    },
    "338": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "Testing the system when combined with other systems",
      "avoid": "Testing a sub-system using stubs and drivers"
    },
    "339": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "All of the others",
      "avoid": "All of them are true / All of i, ii, iii"
    },
    "340": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "tester's experience, knowledge and intuition",
      "avoid": "Randomly generated test cases"
    },
    "341": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "analyze what was done and what could be improved",
      "avoid": "To plan the next phases of the project"
    },
    "342": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Tests by the person who wrote the source code",
      "avoid": "Tests by the person who wrote the item..."
    },
    "343": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "Non-functional and Functional requirements",
      "avoid": "Non-functional requirements only not..."
    },
    "344": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Inputs and expected results",
      "avoid": "It is easy to execute / It is unlikely to delay progress"
    },
    "345": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "best testing in the time available",
      "avoid": "You do more effective testing / You find more faults"
    },
    "346": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "All of the others",
      "avoid": "All of them are true / All of i, ii, iii"
    },
    "347": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "Needs configuration management just like requirements",
      "avoid": "Should be newly constructed for each new..."
    },
    "348": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "All of the others",
      "avoid": "All of them are true / All of i, ii, iii"
    },
    "349": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "Increases as we move the product towards live use",
      "avoid": "Is not important / Can never be determined"
    },
    "350": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "regression testing looks for unexpected side effects",
      "avoid": "Re-testing looks for unexpected side..."
    },
    "351": {
      "mode": "glance",
      "chapter": 1,
      "cue": "Test Cases Derived from use cases",
      "pick": "uncovering defects in the process flows during real world use",
      "avoid": "individual components / boundary defects"
    },
    "352": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "test execution and logging",
      "avoid": "Tool support for static testing"
    },
    "353": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "None, existing test cases can be used",
      "avoid": "One more / Two more test cases"
    },
    "354": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "The objective of the test",
      "avoid": "How well you know a particular technique"
    },
    "355": {
      "mode": "glance",
      "chapter": 3,
      "cue": "Which TWO ... static analysis",
      "pick": "need not be performed before... + hard to find with dynamic testing",
      "avoid": "2 câu còn lại"
    },
    "356": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "How much of the code has been covered",
      "avoid": "Variables not defined in the code"
    },
    "357": {
      "mode": "instant",
      "chapter": 3,
      "cue": null,
      "pick": "Static testing requires the running of tests",
      "avoid": "Static testing includes desk checking"
    },
    "358": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "information for a risk based decision about release",
      "avoid": "find all remaining defects"
    },
    "359": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "eliminate every defect prior to release",
      "avoid": "Determine the productivity of programmers"
    },
    "360": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "fault has been built into more documentation, code",
      "avoid": "None of the others"
    },
    "361": {
      "mode": "instant",
      "chapter": 4,
      "cue": null,
      "pick": "on, below and above the edges",
      "avoid": "Is the same as equivalence partitioning tests"
    },
    "362": {
      "mode": "instant",
      "chapter": 1,
      "cue": null,
      "pick": "All of the others",
      "avoid": "All of them are true / All of i, ii, iii"
    },
    "363": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "test completion criteria have been met",
      "avoid": "When time for testing has run out"
    },
    "364": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "define when a test level is complete",
      "avoid": "To determine when a test has completed"
    },
    "365": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "depends on the risk for your industry",
      "avoid": "This question is easy to answer"
    },
    "366": {
      "mode": "instant",
      "chapter": 2,
      "cue": null,
      "pick": "Component testing does not involve regression testing",
      "avoid": "Component testing should be performed by..."
    },
    "367": {
      "mode": "instant",
      "chapter": 5,
      "cue": null,
      "pick": "Skill and staff shortages",
      "avoid": "Poor software characteristics"
    }
  }
};
