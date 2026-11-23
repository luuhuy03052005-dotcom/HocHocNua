window.PRJ301_DATA = {
  "meta": {
    "course": "PRJ301",
    "title": "Java Web Application Development — Semester 4",
    "totalQuestions": 559,
    "sourceQuestions": 567,
    "duplicatesRemoved": 8,
    "totalSlides": 559,
    "topics": [
      "1. Web & HTTP, HTML Forms & MVC Architecture",
      "2. Java Servlet API & Lifecycle",
      "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "4. Session Management, Cookies & URL Rewriting",
      "5. JSP Scripting, Directives & Standard Actions",
      "6. Expression Language (EL) & JSTL",
      "7. Custom Tags & Tag Library Descriptor (TLD)",
      "8. JDBC, Database Connection & JavaBeans"
    ]
  },
  "questions": [
    {
      "id": 1,
      "slideNumber": null,
      "question": "Which of the following is a correct JSP declaration for a variable of class java.util.Date?",
      "options": [
        {
          "key": "A",
          "text": "<%! Date d = new Date(); %>"
        },
        {
          "key": "B",
          "text": "<%! Date d = new Date() %>"
        },
        {
          "key": "C",
          "text": "<%@ Date d = new Date() %>"
        },
        {
          "key": "D",
          "text": "<% Date d = new Date() %>"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. <%! Date d = new Date(); %>",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 2,
      "slideNumber": null,
      "question": "Which statements are BEST describe uri attribute of <%@ taglib uri=...%> directive of JSP file",
      "options": [
        {
          "key": "A",
          "text": "Specifies the relative or absolute URI of the tag library descriptor."
        },
        {
          "key": "B",
          "text": "Specifies the required prefix that distinguishes custom tags from built-in tags. The prefix names java, javax, sennet, sun and sunw are reserved."
        },
        {
          "key": "C",
          "text": "Allows programmers to include their own new tags in the form of tag libraries. These libraries are used to encapsulate functionality and simplify the coding of a JSP."
        },
        {
          "key": "D",
          "text": "The scripting language used in the JSP. Currently, the only valid value for this attribute is \"java\"."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Specifies the relative or absolute URI of the tag library descriptor.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 3,
      "slideNumber": null,
      "question": "Consider the following tag declaration in a TLD file:\n```\n<tag>\n  <name>simpleInterest</name>\n  <tag-class>SimpleInterestTag</tag-class>\n  //1\n</tag>\n```\nSimpleInterestTag calculates simple interest for any amount and requires two attributes 'amount' and 'rate'. Which of the following sub elements would you need to add inside the <tag> element in the TLD file as shown above?",
      "options": [
        {
          "key": "A",
          "text": "Two separate <attribute> elements."
        },
        {
          "key": "B",
          "text": "One <amount> element and one <rate> element"
        },
        {
          "key": "C",
          "text": "One <attribute> element with sub-elements"
        },
        {
          "key": "D",
          "text": "One <attribute-list> element with sub-elements"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: A (Cộng đồng: B · FUO AI: A).\nLựa chọn đúng: A. Two separate <attribute> elements.",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 4,
      "slideNumber": null,
      "question": "The HttpServletRequest has methods by which you can find out about incoming information :",
      "options": [
        {
          "key": "A",
          "text": "form data"
        },
        {
          "key": "B",
          "text": "HTTP request headers"
        },
        {
          "key": "C",
          "text": "the client's hostname"
        },
        {
          "key": "D",
          "text": "cookies"
        },
        {
          "key": "E",
          "text": "All of the others"
        }
      ],
      "correctKeys": [
        "E"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: E.\nLựa chọn đúng: E. All of the others",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 5,
      "slideNumber": null,
      "question": "What is the result of attempting to access the following JSP page?\n```\n<html>\n<body>\n<%! public String methodA() {\n    return methodB();\n}\n%>\n<%! public String methodB() {\n    return \"JAD Final Test\";\n}\n%>\n<h2><%= methodA() %></h2>\n</body>\n</html>\n```",
      "options": [
        {
          "key": "A",
          "text": "\"JAD Final Test\" is output to the resulting web page."
        },
        {
          "key": "B",
          "text": "A translation error occurs."
        },
        {
          "key": "C",
          "text": "A runtime error occurs."
        },
        {
          "key": "D",
          "text": "The web page is blank."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. \"JAD Final Test\" is output to the resulting web page.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 6,
      "slideNumber": null,
      "question": "Which of the following is indicated by URL, which is used on the Internet?",
      "options": [
        {
          "key": "A",
          "text": "Information resources(sources) on the Internet"
        },
        {
          "key": "B",
          "text": "E-mail addresses for use in the Internet"
        },
        {
          "key": "C",
          "text": "IP addresses of servers connected to the Internet"
        },
        {
          "key": "D",
          "text": "Owners of PCs connected to the Internet"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Information resources(sources) on the Internet",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 7,
      "slideNumber": null,
      "question": "Which statements are BEST describe name attribute of < .jsp:setProperty name=. ... / > action?",
      "options": [
        {
          "key": "A",
          "text": "The ID of the JavaBean for which a property (or properties) will be set."
        },
        {
          "key": "B",
          "text": "The name of the property to set. Specifying \"*\" for this attribute causes the JSP to match parameters to the properties of the bean."
        },
        {
          "key": "C",
          "text": "If request parameter names do not match bean property names, this attribute can be used to specify which request parameter should be used to obtain the value for a specific bean property."
        },
        {
          "key": "D",
          "text": "The value to assign to a bean property. The value typically is the result of a JSP expression."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. The ID of the JavaBean for which a property (or properties) will be set.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 8,
      "slideNumber": null,
      "question": "(Choose 1 answer)\nFollowing is the code for doGet() and doPost() method of TestServlet. Which of the statement is correct?\n```\npublic void doGet(HttpServletRequest req, HttpServletResponse res)\n{\n    try\n    {\n        PrintWriter pw = res.getWriter();\n        pw.println(\"<html><head></head><body>\");\n        String name = req.getParameter(\"name\");\n        String[] hobbies = req.getParameterValues(\"hobbies\");\n        pw.println(\"Hello, \"+name+\"<br> As I understand, your hobbies are\");\n        for(int i=0; i< hobbies.length; i++) pw.println(\"<br>\"+hobbies[i]);\n        pw.println(\"</body></html>\");\n    }\n    catch(Exception e)\n    {\n        e.printStackTrace();\n    }\n}\n\npublic void doPost(HttpServletRequest req, HttpServletResponse res)\n{\n    doGet(req, res);\n}\n```",
      "options": [
        {
          "key": "A",
          "text": "This will only work for HTTP GET requests"
        },
        {
          "key": "B",
          "text": "This will only work for HTTP POST requests"
        },
        {
          "key": "C",
          "text": "It'll throw an exception at runtime, as you cannot call doGet() from doPost()."
        },
        {
          "key": "D",
          "text": "This will work for HTTP GET as well as POST requests."
        },
        {
          "key": "E",
          "text": "It'll throw an exception at runtime only if a POST request is sent to it."
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. This will work for HTTP GET as well as POST requests.",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 9,
      "slideNumber": null,
      "question": "You can set a page to be an error page either through web.xml or by adding a page directive",
      "options": [
        {
          "key": "A",
          "text": "<%@page isErrorPage=\"true\" %>"
        },
        {
          "key": "B",
          "text": "<%@page isErrorPage=\"false\" %>"
        },
        {
          "key": "C",
          "text": "<%@page errorPage=\"errorPage.jsp\" %>"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. <%@page isErrorPage=\"true\" %>",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 10,
      "slideNumber": null,
      "question": "includes a static file in a JSP file, parsing the file's JSP elements",
      "options": [
        {
          "key": "A",
          "text": "< j sp: inciucie >"
        },
        {
          "key": "B",
          "text": "include directive"
        },
        {
          "key": "C",
          "text": "import directive"
        },
        {
          "key": "D",
          "text": "<jsp : useBear, >"
        },
        {
          "key": "E",
          "text": "<jsp : forward >"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. include directive",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 11,
      "slideNumber": null,
      "question": "Which class that includes the getSession method that is used to get the HttpSession object?",
      "options": [
        {
          "key": "A",
          "text": "HttpServletRequest"
        },
        {
          "key": "B",
          "text": "HttpServletResponse"
        },
        {
          "key": "C",
          "text": "SessionContext"
        },
        {
          "key": "D",
          "text": "SessionConfig"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. HttpServletRequest",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 12,
      "slideNumber": null,
      "question": "Consider the following doGet method code of a servlet:\n```\npublic void doGet(HttpServletRequest req, HttpServletResponse res) {\n    String command = req.getParameter(\"command\");\n    if (\"remove\".equals(command)) {\n        HttpSession session = req.getSession();\n        // insert code here\n    }\n}\n```\nIf the command equals remove, you want to remove all the attributes from the session. Which option will you use? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "session.removeAll();"
        },
        {
          "key": "B",
          "text": "session.invalidate();"
        },
        {
          "key": "C",
          "text": "Enumerate the attribute names and remove them one by one from the session using removeAttribute(name) method."
        },
        {
          "key": "D",
          "text": "session.unbind();"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Enumerate the attribute names and remove them one by one from the session using removeAttribute(name) method.",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 13,
      "slideNumber": null,
      "question": "Which statements are BEST describe type attribute of <jsp:useBean type=..... /> action?",
      "options": [
        {
          "key": "A",
          "text": "The name used to manipulate the Java object with actions <jsp:setProperty> and <jsp:getProperty>. The variable of this name is also declared for use in JSP scripting elements. The name specified is case sensitive."
        },
        {
          "key": "B",
          "text": "The scope in which the Java object is accessible—page, request, session or application. The default is page."
        },
        {
          "key": "C",
          "text": "The fully qualified class name of the Java object."
        },
        {
          "key": "D",
          "text": "The name of a bean that can be used with method instantiate of class java.beans.Beans to instantiate the JavaBean into memory."
        },
        {
          "key": "E",
          "text": "The type of the JavaBean. This can be the same type as the class attribute, a superclass or an interface implemented by that type. The default value is the same as for attribute class. A ClassCastException occurs if the Java object is not of the type specified with attribute type."
        }
      ],
      "correctKeys": [
        "E"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: E.\nLựa chọn đúng: E. The type of the JavaBean. This can be the same type as the class attribute, a superclass or an interface implemented by that type. The default value is the same as for attribute class. A ClassCastException occurs if the Java object is not of the type specified with attribute type.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 14,
      "slideNumber": null,
      "question": "Which of these is legal attribute of page directive?.",
      "options": [
        {
          "key": "A",
          "text": "include"
        },
        {
          "key": "B",
          "text": "scope"
        },
        {
          "key": "C",
          "text": "errorPage"
        },
        {
          "key": "D",
          "text": "debug"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. errorPage",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 15,
      "slideNumber": null,
      "question": "Which of the following lines of code, in the doPost() method of a servlet, uses the URL rewriting for maintaining sessions? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "out.println(\"<a href=' \"+response.encodeURL(\"/servlet/XServlet\")+\" '>Click here</a>\");"
        },
        {
          "key": "B",
          "text": "out.println(\"<a href=' \"+request.rewrite(\"/servlet/XServlet\")+\" '>Click here</a>\");"
        },
        {
          "key": "C",
          "text": "out.println(response.rewrite(\"<a href='/servlet/XServlet'>Click here</a>\"));"
        },
        {
          "key": "D",
          "text": "request.useURLRewriting();"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. out.println(\"<a href=' \"+response.encodeURL(\"/servlet/XServlet\")+\" '>Click here</a>\");",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 16,
      "slideNumber": null,
      "question": "Which of these is legal return types of the doEndTag method defined in a class that extends TagSupport class? Select one correct answer.",
      "options": [
        {
          "key": "A",
          "text": "EVAL_PAGE"
        },
        {
          "key": "B",
          "text": "EVAL_BODY"
        },
        {
          "key": "C",
          "text": "EVAL_PAGE_INCLUDE"
        },
        {
          "key": "D",
          "text": "EVAL_BODY_INCLUDE"
        },
        {
          "key": "E",
          "text": "SKIP_BODY"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. EVAL_PAGE",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 17,
      "slideNumber": null,
      "question": "Given that a servlet has been mapped to laccount/. Identity the HttpServ/etRequest method the /myapp segement for the URI: /myapp/account/.",
      "options": [
        {
          "key": "A",
          "text": "getContextPath"
        },
        {
          "key": "B",
          "text": "getServletPath"
        },
        {
          "key": "C",
          "text": "getPathlnfo"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. getContextPath",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 18,
      "slideNumber": null,
      "question": "Your servlet may receive a request, which the servlet cannot handle. In such cases, you want to send the request to another resource which may or may not be a part of the same web application. Which of the following options can be used to achieve this objective?",
      "options": [
        {
          "key": "A",
          "text": "```\nresponse.sendRedirect(\"some url\");\n```"
        },
        {
          "key": "B",
          "text": "```\nRequestDispatcher rd = this.getServletContext().getRequestDispatcher(\"some url\");\nrd.forward(request, response);\n```"
        },
        {
          "key": "C",
          "text": "```\nRequestDispatcher rd = request.getRequestDispatcher(\"some url\");\nrd.forward(request, response);\n```"
        },
        {
          "key": "D",
          "text": "```\nrequest.sendRedirect(\"some url\");\n```"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. response.sendRedirect(\"some url\");",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 19,
      "slideNumber": null,
      "question": "A JSP expression is used to insert values directly into the output.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. True",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 20,
      "slideNumber": null,
      "question": "is the well-known host name that refers to your own computer.",
      "options": [
        {
          "key": "A",
          "text": "localhost"
        },
        {
          "key": "B",
          "text": "computer name"
        },
        {
          "key": "C",
          "text": "DNS"
        },
        {
          "key": "D",
          "text": "ip"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. localhost",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 21,
      "slideNumber": null,
      "question": "Which statement(s) about Servlet Life Cycle is(are) correct? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "When the servlet is first created, its init method is invoked, so that is where you put one-time initialization code."
        },
        {
          "key": "B",
          "text": "Each user request results in a thread that calls the service method of the previously created servlet."
        },
        {
          "key": "C",
          "text": "Multiple concurrent requests normally result in multiple threads calling service simultaneously."
        },
        {
          "key": "D",
          "text": "Servlet can implement a special interface that stipulates that only a single thread is permitted to execute the service method at one time."
        },
        {
          "key": "E",
          "text": "When the server decides to unload a servlet, it first calls the servlet's destroy method."
        },
        {
          "key": "F",
          "text": "All the others"
        }
      ],
      "correctKeys": [
        "F"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: F.\nLựa chọn đúng: F. All the others",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 22,
      "slideNumber": null,
      "question": "Which of the following statements is correct? Select the one correct answer.",
      "options": [
        {
          "key": "A",
          "text": "The response from the server to a HEAD request consists of status liner content type and a document."
        },
        {
          "key": "B",
          "text": "The response from the server to a GET request does not contain a document."
        },
        {
          "key": "C",
          "text": "The setStatus method defined in the HttpServletRequest class takes an int as an argument to set the status of Http response."
        },
        {
          "key": "D",
          "text": "The HttpSetvletResponse defines constants like SC_NOT_FOUND that may be used as an argument to the setStatus method."
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. The HttpSetvletResponse defines constants like SC_NOT_FOUND that may be used as an argument to the setStatus method.",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 23,
      "slideNumber": null,
      "question": "Consider the following HTML code. Which method of MyFirstServlet will be invoked when you click on the url shown by the page?\n```\n<html>\n<body>\n<a href=\"/myapp/MyFirstServlet\">Click here to make me say Hello World!</a>\n</body>\n</html>\n```",
      "options": [
        {
          "key": "A",
          "text": "GET"
        },
        {
          "key": "B",
          "text": "doPOST"
        },
        {
          "key": "C",
          "text": "doPost"
        },
        {
          "key": "D",
          "text": "POST"
        },
        {
          "key": "E",
          "text": "doGET"
        },
        {
          "key": "F",
          "text": "doGet"
        }
      ],
      "correctKeys": [
        "F"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: F.\nLựa chọn đúng: F. doGet",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 24,
      "slideNumber": null,
      "question": "A JSP page called test.jsp is passed a parameter name in the URL using http://localhost/test.jsp?name=\"John\". The test.jsp contains the following code.\n```\n<%! String myName = request.getParameter(\"name\"); %>\n<% String test = \"welcome \" + myName; %>\n<%= test %>\n```\nWhat is the output?",
      "options": [
        {
          "key": "A",
          "text": "The program prints \"welcome John\""
        },
        {
          "key": "B",
          "text": "The program gives a syntax error because of the statement <%! String myName=request.getParameter(\"name\"); %>"
        },
        {
          "key": "C",
          "text": "The program gives a syntax error because of the statement <% String test= \"welcome\" + myName; %>"
        },
        {
          "key": "D",
          "text": "The program gives a syntax error because of the statement <%= test %>"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. The program gives a syntax error because of the statement <%! String myName=request.getParameter(\"name\"); %>",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 25,
      "slideNumber": null,
      "question": "Which of the following is true statement about the JavaServer Page life cycle? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "The _jspService() method is called from the generated servlet's service() method."
        },
        {
          "key": "B",
          "text": "jsplnit() is only ever called on the first request to a JSP instance."
        },
        {
          "key": "C",
          "text": "jspDestroy() is only ever called on the last request to a JSP instance."
        },
        {
          "key": "D",
          "text": "All servlet methods are accessible from the jsplnit() method."
        },
        {
          "key": "E",
          "text": "You can override or provide a no-parameter init() method in a JSP page."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. The _jspService() method is called from the generated servlet's service() method.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 26,
      "slideNumber": null,
      "question": "Which statements are BEST describe taglib directive of JSP file?",
      "options": [
        {
          "key": "A",
          "text": "Defines page settings for the JSP container to process"
        },
        {
          "key": "B",
          "text": "Causes the JSP container to perform a translation-time insertion of another resource's content. When the JSP is translated into a servlet and compiled, the referenced file replaces the include directive as if it were originally part of the JSP."
        },
        {
          "key": "C",
          "text": "Allows programmers to include their own new tags in the form of tag libraries. These libraries can be used to encapsulate functionality and simplify the coding of a JSP."
        },
        {
          "key": "D",
          "text": "The scripting language used in the JSP. Currently, the only valid value for this attribute is \"java\"."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Allows programmers to include their own new tags in the form of tag libraries. These libraries can be used to encapsulate functionality and simplify the coding of a JSP.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 27,
      "slideNumber": null,
      "question": "Action < j cp : include> is evaluated once at page translation time.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. False",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 28,
      "slideNumber": null,
      "question": "The HTTP protocol provides information that enables web servers to maintain state information about particular clients.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. False",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 29,
      "slideNumber": null,
      "question": "A bean with a property color is loaded using the following statement:\n```\n<jsp:useBean id=\"fruit\" class=\"Fruit\"/>\n```\nWhat happens when the following statement is executed? Select the one correct answer.\n```\n<jsp:setProperty name=\"fruit\" property=\"*\"/>\n```",
      "options": [
        {
          "key": "A",
          "text": "This is incorrect syntax of <jsp:setProperty/> and will generate a compilation error. Either value or param attribute must be defined."
        },
        {
          "key": "B",
          "text": "All the properties of the fruit bean are initialized to a value of null."
        },
        {
          "key": "C",
          "text": "All the properties of the fruit bean are assigned the values of input parameters of the JSP request that have the same name."
        },
        {
          "key": "D",
          "text": "All the properties of the fruit bean are initialized to a value of *."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. All the properties of the fruit bean are assigned the values of input parameters of the JSP request that have the same name.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 30,
      "slideNumber": null,
      "question": "Is this statement true or false? The deployment descriptor of a web application must have the name web.xml. In the same way the tag library descriptor file must be called taglib.xml.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. False",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 31,
      "slideNumber": null,
      "question": "Which of the following defines the name of a tag in a taglibrary descriptor?",
      "options": [
        {
          "key": "A",
          "text": "name"
        },
        {
          "key": "B",
          "text": "tag-name"
        },
        {
          "key": "C",
          "text": "tag-action"
        },
        {
          "key": "D",
          "text": "tagaction"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. name",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 32,
      "slideNumber": null,
      "question": "For what reason does the following JSP fail to translate and compile?\n```\n<html>\n<body>\n<%! int x; %>\n<%\n    public String getDescription() {\n        return \"JAD Final Test\";\n    }\n%>\n<%=getDescription() %>\n</body>\n</html>\n```",
      "options": [
        {
          "key": "A",
          "text": "Expression embedded in declaration."
        },
        {
          "key": "B",
          "text": "Data member x not initialized before use."
        },
        {
          "key": "C",
          "text": "Local variable x not initialized before use."
        },
        {
          "key": "D",
          "text": "The page actually compiles and translates without any problem."
        },
        {
          "key": "E",
          "text": "Method declared in scriptlet."
        }
      ],
      "correctKeys": [
        "E"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: E.\nLựa chọn đúng: E. Method declared in scriptlet.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 33,
      "slideNumber": null,
      "question": "Host names are translated into IP addresses by web servers.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: B (Cộng đồng: B · FUO AI: không có).\nLựa chọn đúng: B. False",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 34,
      "slideNumber": null,
      "question": "A(n) enables a web application to obtain a Connection to a database.",
      "options": [
        {
          "key": "A",
          "text": "Web server"
        },
        {
          "key": "B",
          "text": "DataSource"
        },
        {
          "key": "C",
          "text": "Netbean"
        },
        {
          "key": "D",
          "text": "Eclipse"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. DataSource",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 35,
      "slideNumber": null,
      "question": "Cookies never expire.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. False",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 36,
      "slideNumber": null,
      "question": "Which of the following method calls can be used to retrieve an object from the session that was stored with the name \"userid\"?",
      "options": [
        {
          "key": "A",
          "text": "getObject( \" userid \" ) ;"
        },
        {
          "key": "B",
          "text": "getValue( \"userid\" ) ;"
        },
        {
          "key": "C",
          "text": "get( \"userid\" ) ;"
        },
        {
          "key": "D",
          "text": "getAttribute( \" userid \" ) ;"
        },
        {
          "key": "E",
          "text": "getParameter ( \" userid\" ) ;"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. getAttribute( \" userid \" ) ;",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 37,
      "slideNumber": null,
      "question": "You need to modify the deployment descriptor for a web application installed in MyWebApp. Which file would you look for?",
      "options": [
        {
          "key": "A",
          "text": "web.xml in MyWebApp/WEB-INF"
        },
        {
          "key": "B",
          "text": "MyWebApp.xml in MyWebApp"
        },
        {
          "key": "C",
          "text": "MyWebApp.xml in MyWebApp/WEB-INF"
        },
        {
          "key": "D",
          "text": "web.xml in MyWebApp"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. web.xml in MyWebApp/WEB-INF",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 38,
      "slideNumber": null,
      "question": "Which of the following is NOT a valid attribute for a useBean tag?",
      "options": [
        {
          "key": "A",
          "text": "scope"
        },
        {
          "key": "B",
          "text": "beanName"
        },
        {
          "key": "C",
          "text": "className"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. className",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 39,
      "slideNumber": null,
      "question": "The following statement is true or false? \"If the isThreadSafe attribute of the page directive is true, then the generated servlet impleme[nts] SingleThreadModel interface.\"",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. False",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 40,
      "slideNumber": null,
      "question": "Identify the correct element is required for a valid <taglib> tag in web.xml (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "<uri>"
        },
        {
          "key": "B",
          "text": "<tag-uri>"
        },
        {
          "key": "C",
          "text": "<uri-name>"
        },
        {
          "key": "D",
          "text": "<uri-location>"
        },
        {
          "key": "E",
          "text": "<taglib-uri>"
        }
      ],
      "correctKeys": [
        "E"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: E.\nLựa chọn đúng: E. <taglib-uri>",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 41,
      "slideNumber": null,
      "question": "What sub element of <attribute. > tag defines the name of the attribute that might be passed to the tag? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "<attribute-name. >"
        },
        {
          "key": "B",
          "text": "<name >"
        },
        {
          "key": "C",
          "text": "<attributename >"
        },
        {
          "key": "D",
          "text": "<param-name. >"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. <name >",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 42,
      "slideNumber": null,
      "question": "Consider the code shown in the exhibit for the init() method of a HTTP servlet. Which of the following LOC \"may\" correctly retrieve the DBURL parameter at //1? (Assume that servletcontext is a reference to ServletContext for this servlet.) (Choose one)\n```\npublic void init()\n{\n    Class.forName(\"sun.jdbc.odbc.JdbcOdbcDriver\");\n    // 1 Get DBURL here\n    theConnection = DriverManager.getConnection(dbUrl, \"admin\", \"admin\");\n}\n```",
      "options": [
        {
          "key": "A",
          "text": "this.getInitParameter(\"DBURL\");"
        },
        {
          "key": "B",
          "text": "this.getParameter(\"DBURL\");"
        },
        {
          "key": "C",
          "text": "this.getContextParameter(\"DBURL\");"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. this.getInitParameter(\"DBURL\");",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 43,
      "slideNumber": null,
      "question": "Which statements are BEST describe errorPage attribute of <%@ page errorPage=\"...\" %> directive?",
      "options": [
        {
          "key": "A",
          "text": "Any exceptions in the current page that are not caught are sent to the error page for processing. The error page implicit object exception references the original exception."
        },
        {
          "key": "B",
          "text": "Specifies if the current page is an error page that will be invoked in response to an error. If the attribute value is truer the implicit object exception is created and references the original exception that occurred."
        },
        {
          "key": "C",
          "text": "Specifies the MIME type of the data in the response to the client. The default type is text/html"
        },
        {
          "key": "D",
          "text": "Specifies the class from which the translated JSP will be inherited. This attribute must be a package and class name."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Any exceptions in the current page that are not caught are sent to the error page for processing. The error page implicit object exception references the original exception.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 44,
      "slideNumber": null,
      "question": "element can include zero to many elements: These aid in passing parameter information from the deployment descriptor to all the servlets.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. False",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 45,
      "slideNumber": null,
      "question": "Which method would you use to put the session id into the URL to support sessions using URL rewriting?",
      "options": [
        {
          "key": "A",
          "text": "encodeURL() of HttpServletResponse"
        },
        {
          "key": "B",
          "text": "encodelJRL() of HttpServletRequest"
        },
        {
          "key": "C",
          "text": "rewritelJRL0 of HttpSetvletResponse"
        },
        {
          "key": "D",
          "text": "encodeURL0 of HttpServlet"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. encodeURL() of HttpServletResponse",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 46,
      "slideNumber": null,
      "question": "See the extract from web.xml of web application \"mywebapp\" on server named myserver, port 8080:\n```\n<servlet-mapping>\n    <servlet-name>ServletA</servlet-name>\n    <url-pattern>/</url-pattern>\n</servlet-mapping>\n<servlet-mapping>\n    <servlet-name>ServletB</servlet-name>\n    <url-pattern>/bservlet.html</url-pattern>\n</servlet-mapping>\n<servlet-mapping>\n    <servlet-name>ServletC</servlet-name>\n    <url-pattern>*.servletC</url-pattern>\n</servlet-mapping>\n<servlet-mapping>\n    <servlet-name>ServletD</servlet-name>\n    <url-pattern>/dservlet/*</url-pattern>\n</servlet-mapping>\n```\nGiven that a user enters the following into her browser, which (if any) of the mapped servlets will execute? (Choose one.)\nhttp://myserver:8080/mywebapp",
      "options": [
        {
          "key": "A",
          "text": "ServletA"
        },
        {
          "key": "B",
          "text": "ServletB"
        },
        {
          "key": "C",
          "text": "ServletC"
        },
        {
          "key": "D",
          "text": "ServletD"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. ServletA",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 47,
      "slideNumber": null,
      "question": "Which of the given jsp statement is equivalent to <%= userbean.getAge() %> ? Assume that userbean.getAge() returns an integer. (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "<jsp:getProperty name=\"userbean\" property=\"age\"/>"
        },
        {
          "key": "B",
          "text": "<jsp:getProperty name=\"userbean\" property=\"Age\"/>"
        },
        {
          "key": "C",
          "text": "<jsp:getProperty name=\"userbean\" property=\"getAge\"/>"
        },
        {
          "key": "D",
          "text": "<jsp:getProperty name=\"userbean\" method=\"getAge\"/>"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. <jsp:getProperty name=\"userbean\" property=\"age\"/>",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 48,
      "slideNumber": null,
      "question": "Identify the method used to get an object available in a session. (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "getAttribute of HttpSession"
        },
        {
          "key": "B",
          "text": "getAttribute of Session"
        },
        {
          "key": "C",
          "text": "getValue of HttpSession"
        },
        {
          "key": "D",
          "text": "getValue of Session"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. getAttribute of HttpSession",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 49,
      "slideNumber": null,
      "question": "has a name, a single value, and optional attributes such as a comment, path and a maximum age, and a version number.",
      "options": [
        {
          "key": "A",
          "text": "Cookie"
        },
        {
          "key": "B",
          "text": "Session"
        },
        {
          "key": "C",
          "text": "Request"
        },
        {
          "key": "D",
          "text": "Response"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Cookie",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 50,
      "slideNumber": null,
      "question": "Which is NOT a technique for a session be definitely invalidated?",
      "options": [
        {
          "key": "A",
          "text": "The container is shutdown and brought up again."
        },
        {
          "key": "B",
          "text": "No request comes from the client for more than \"session timeout\" period."
        },
        {
          "key": "C",
          "text": "A servlet explicitly calls invalidate() on a session object."
        },
        {
          "key": "D",
          "text": "If the session time out is set to 0 using setMaxlnactivelnterval() method."
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. If the session time out is set to 0 using setMaxlnactivelnterval() method.",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 51,
      "slideNumber": null,
      "question": "Which of the following XML fragments correctly define a security constraint in web.xml? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "```\n<security-constraint>\n  <web-resource>\n    <web-resource-name>Info</web-resource-name>\n    <url-pattern>/info/*</url-pattern>\n    <http-method>GET</http-method>\n  </web-resource>\n  <auth-constraint>\n    <role-name>manager</role-name>\n  </auth-constraint>\n  <user-data-constraint>\n    <transport-guarantee>CONFIDENTIAL</transport-guarantee>\n  </user-data-constraint>\n</security-constraint>\n```"
        },
        {
          "key": "B",
          "text": "```\n<security-constraint>\n  <web-resource-collection>\n    <web-resource-name>Info</web-resource-name>\n    <url-pattern>/info/*</url-pattern>\n    <http-method>GET</http-method>\n  </web-resource-collection>\n  <auth-constraint>\n    <role-name>manager</role-name>\n  </auth-constraint>\n</security-constraint>\n```"
        },
        {
          "key": "C",
          "text": "```\n<security-constraint>\n  <web-resource>\n    <web-resource-name>Info</web-resource-name>\n    <url-pattern>/info/*</url-pattern>\n    <http-method>GET</http-method>\n  </web-resource>\n  <login-config>\n    <auth-method>FORM</auth-method>\n    <role-name>manager</role-name>\n  </login-config>\n</security-constraint>\n```"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. <security-constraint> <web-resource-collection> <web-resource-name>Info</web-resource-name> <url-pattern>/info/*</url-pattern> <http-method>GET</http-method> </web-resource-collection> <auth-constraint> <role-name>manager</role-name> </auth-constraint> </security-constraint>",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 52,
      "slideNumber": null,
      "question": "Which of the following statement correctly store an object associated with a name at a place where all the servlets/jsps of the same webapp participating in a session can access it? Assume that request, response, name, value etc. are references to objects of appropriate types.",
      "options": [
        {
          "key": "A",
          "text": "request . set Att r ibute (name, value) ;"
        },
        {
          "key": "B",
          "text": "reauest . set Para:neter (name, value)"
        },
        {
          "key": "C",
          "text": "response . setAttribute (name, value) ;"
        },
        {
          "key": "D",
          "text": "request . get Session ( ) . set Att ribute (name, value) ;"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. request . get Session ( ) . set Att ribute (name, value) ;",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 53,
      "slideNumber": null,
      "question": "Which statement is true?",
      "options": [
        {
          "key": "A",
          "text": "When isThreadSafe attribute of page directive is set to true, a thread is created for each request for the page"
        },
        {
          "key": "B",
          "text": "If isThreadSafe attribute of page directive is set to true, then JSP container dispatches request for the page sequentially"
        },
        {
          "key": "C",
          "text": "Setting ThreadSafe attribute to true for JSP pages, can lead to poor performance."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. When isThreadSafe attribute of page directive is set to true, a thread is created for each request for the page",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 54,
      "slideNumber": null,
      "question": "Session death can come about through an explicit call (in Servlet code) to HttpSession.invalidate().",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. True",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 55,
      "slideNumber": null,
      "question": "Which of the following defines the type of the content that a tag can accept?",
      "options": [
        {
          "key": "A",
          "text": "body-content"
        },
        {
          "key": "B",
          "text": "content"
        },
        {
          "key": "C",
          "text": "content-type"
        },
        {
          "key": "D",
          "text": "tag-content-type"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. body-content",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 56,
      "slideNumber": null,
      "question": "Name the implicit variable is available to JSP pages that may be used to access all the other implicit objects.",
      "options": [
        {
          "key": "A",
          "text": "request"
        },
        {
          "key": "B",
          "text": "response"
        },
        {
          "key": "C",
          "text": "pageContext"
        },
        {
          "key": "D",
          "text": "out"
        },
        {
          "key": "E",
          "text": "page"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. pageContext",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 57,
      "slideNumber": null,
      "question": "A JSP page needs to generate an XML file. Which attribute of page directive may be used to specify that the JSP page is generating an XML file?",
      "options": [
        {
          "key": "A",
          "text": "<%@page contentType=\"text/xml\">"
        },
        {
          "key": "B",
          "text": "<%@page contentType=\"xml\">"
        },
        {
          "key": "C",
          "text": "<%@page contentType=\"text/html\">"
        },
        {
          "key": "D",
          "text": "<%@page contentType=\"html/xml\">"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. <%@page contentType=\"text/xml\">",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 58,
      "slideNumber": null,
      "question": "Which of the following are valid iteration mechanisms in jsp?",
      "options": [
        {
          "key": "A",
          "text": "< .jsp:for loop='5' > \"Hello World\" </jsp:for. >"
        },
        {
          "key": "B",
          "text": "< .% int i = 0; while(i<S) { \"Hello World\" i++; } %. >"
        },
        {
          "key": "C",
          "text": "< .% int i = e; for(;i<S; i++) { %. > \"Hello World\"; < } 70. >"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. < .% int i = e; for(;i<S; i++) { %. > \"Hello World\"; < } 70. >",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 59,
      "slideNumber": null,
      "question": "Given the following deployment descriptor:\n```\n<web-app>\n  <context-param>\n    <param-name>jdbcDriver</param-name>\n    <param-value>sun.jdbc.odbc.JdbcOdbcDriver</param-value>\n  </context-param>\n  <servlet>\n    <servlet-name>InitParamsServlet</servlet-name>\n    <servlet-class>InitParamsServlet</servlet-class>\n  </servlet>\n</web-app>\n```\nWhat is the outcome of running the following servlet? (Choose one.)\n```\npublic class InitParamsServlet extends HttpServlet {\n    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {\n        ServletContext sc = this.getServletContext();\n        PrintWriter out = response.getWriter();\n        out.write(\"Initialization Parameter is: \" + sc.getInitParameter(\"jdbcDriver\"));\n    }\n}\n```",
      "options": [
        {
          "key": "A",
          "text": "\"Initialization Parameter is: sun.jdbc.odbc.JdbcOdbcDriver\" returned to the requester"
        },
        {
          "key": "B",
          "text": "\"Initialization Parameter is: null\" written to the console"
        },
        {
          "key": "C",
          "text": "A runtime error"
        },
        {
          "key": "D",
          "text": "\"Initialization Parameter is: null\" returned to the requester"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. \"Initialization Parameter is: sun.jdbc.odbc.JdbcOdbcDriver\" returned to the requester",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 60,
      "slideNumber": null,
      "question": "For application and session JSP scopes, what class of object is used to store the attributes? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "ServletContext for both."
        },
        {
          "key": "B",
          "text": "ServletsContextDB"
        },
        {
          "key": "C",
          "text": "ServletContext and HttpSession respectively."
        },
        {
          "key": "D",
          "text": "HttpSession and ServletsContextDB respectively"
        },
        {
          "key": "E",
          "text": "HttpSession for both."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. ServletContext and HttpSession respectively.",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 61,
      "slideNumber": null,
      "question": "Consider the following taglibrary descriptor element:\n```\n<tag>\n  <name>myTag</name>\n  <tag-class>com.abc.MyTag</tag-class>\n  <body-content> ___ </body-content>\n</tag>\n```\nWhich of the following is NOT a valid value for <body-content> element?",
      "options": [
        {
          "key": "A",
          "text": "generic"
        },
        {
          "key": "B",
          "text": "tagdependent"
        },
        {
          "key": "C",
          "text": "JSP"
        },
        {
          "key": "D",
          "text": "empty"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. generic",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 62,
      "slideNumber": null,
      "question": "Which of the following is true about Data Integrity?",
      "options": [
        {
          "key": "A",
          "text": "The information/data is never modified."
        },
        {
          "key": "B",
          "text": "The information/data is not read by parties other than it's intended recipients."
        },
        {
          "key": "C",
          "text": "The information/data is accessible only to users who are authenticated."
        },
        {
          "key": "D",
          "text": "The information/data is not tampered with, in transit from host to client."
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. The information/data is not tampered with, in transit from host to client.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 63,
      "slideNumber": null,
      "question": "Data Integrity is the biggest issue for your web application. What will you do? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "Use HTTPS instead of HTTP."
        },
        {
          "key": "B",
          "text": "Use HTTP digest authentication."
        },
        {
          "key": "C",
          "text": "Use LDAP to store user credentials."
        },
        {
          "key": "D",
          "text": "Use form-based authentication."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: A (Cộng đồng: D · FUO AI: B).\nLựa chọn đúng: A. Use HTTPS instead of HTTP.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 64,
      "slideNumber": null,
      "question": "To be a servlet, a class should extend HttpServlet and override doGet or doPost, depending on whether the data is being sent by GET or by POST.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. True",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 65,
      "slideNumber": null,
      "question": "A JavaBeans component has the following field:\n```\nprivate boolean enabled;\n```\nWhich pairs of method declarations follow the JavaBeans standard for accessing this field?",
      "options": [
        {
          "key": "A",
          "text": "public Boolean setEnabled( boolean enabled) ; public boolean isEnabled()"
        },
        {
          "key": "B",
          "text": "public boolean setEnabled( boolean enabled) ; public boolean getEnabled()"
        },
        {
          "key": "C",
          "text": "public void setEnabled( boolean enabled) ; public void isEnabled()"
        },
        {
          "key": "D",
          "text": "public void setEnabled( boolean enabled) ; public boolean getEnabled()"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. public void setEnabled( boolean enabled) ; public boolean getEnabled()",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 66,
      "slideNumber": null,
      "question": "Classes HttpServlet and GenericServlet implement the interface.",
      "options": [
        {
          "key": "A",
          "text": "HttpServletRequest"
        },
        {
          "key": "B",
          "text": "Http"
        },
        {
          "key": "C",
          "text": "HttpServletResponse"
        },
        {
          "key": "D",
          "text": "Servlet"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. Servlet",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 67,
      "slideNumber": null,
      "question": "A web application is located in \"helloapp\" directory. Which directory should it's deployment descriptor be in?",
      "options": [
        {
          "key": "A",
          "text": "helloapp/WEB-INF"
        },
        {
          "key": "B",
          "text": "helloapp/WEBlNF"
        },
        {
          "key": "C",
          "text": "helloapp/WEB INF"
        },
        {
          "key": "D",
          "text": "helloapp"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. helloapp/WEB-INF",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 68,
      "slideNumber": null,
      "question": "Consider the code of ReportServlet servlet of a web application. Assuming generateReport() is valid method and have no problems, which of the following statement about these servlet is true?\n```\n// In file ReportServlet.java\npublic class ReportServlet extends HttpServlet {\n    public void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {\n        String userid = req.getSession();\n        if (userid != null) generateReport(req, res);\n    }\n}\n```",
      "options": [
        {
          "key": "A",
          "text": "ReportServlet will throw exception at runtime."
        },
        {
          "key": "B",
          "text": "ReportServlet.java will compile and run without any problems."
        },
        {
          "key": "C",
          "text": "ReportServlet.java won't compile."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. ReportServlet.java won't compile.",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 69,
      "slideNumber": null,
      "question": "A programmer is designing a class to encapsulate the information about an inventory item. A JavaBeans component is needed to do this. The InventoryItem class has private instance variables to store the item information:\n```\n10. private int itemId;\n11. private String name;\n12. private String description;\n```\nWhich method signature follows the JavaBeans naming standards for modifying the itemId instance variable?",
      "options": [
        {
          "key": "A",
          "text": "mutateItemId(int itemId)"
        },
        {
          "key": "B",
          "text": "update(int itemId)"
        },
        {
          "key": "C",
          "text": "itemID(int itemId)"
        },
        {
          "key": "D",
          "text": "setItemId(int itemId)"
        },
        {
          "key": "E",
          "text": "updateItemID(int itemId)"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. setItemId(int itemId)",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 70,
      "slideNumber": null,
      "question": "Which of the following element of web.xml defines a mapping between a servlet and a URL pattern? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "servlet-mapping"
        },
        {
          "key": "B",
          "text": "url_pattern"
        },
        {
          "key": "C",
          "text": "servlet-url"
        },
        {
          "key": "D",
          "text": "mapping"
        },
        {
          "key": "E",
          "text": "url_mapping"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. servlet-mapping",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 71,
      "slideNumber": null,
      "question": "For what reason does the following JSP fail to translate and compile?\n```\n<html>\n<body>\n<%! int x; %>\n<%=x ; %>\n</body>\n</html>\n```",
      "options": [
        {
          "key": "A",
          "text": "Error in JSP Expression."
        },
        {
          "key": "B",
          "text": "Local variable x not initialized before use."
        },
        {
          "key": "C",
          "text": "Data member x not initialized before use."
        },
        {
          "key": "D",
          "text": "Method declared in scriptlet."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Error in JSP Expression.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 72,
      "slideNumber": null,
      "question": "Which of these is a legal return value of doStartTag() in a class that extends TagSupport?",
      "options": [
        {
          "key": "A",
          "text": "EVAL_PAGE"
        },
        {
          "key": "B",
          "text": "EVAL_BODY"
        },
        {
          "key": "C",
          "text": "EVAL_PAGE_INCLUDE"
        },
        {
          "key": "D",
          "text": "EVAL_BODY_INCLUDE"
        },
        {
          "key": "E",
          "text": "SKIP_PAGE"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: D (Cộng đồng: D · FUO AI: D).\nLựa chọn đúng: D. EVAL_BODY_INCLUDE",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 73,
      "slideNumber": null,
      "question": "Which of the following element are required for a valid <taglib> tag in web.xml? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "<tag-uri>"
        },
        {
          "key": "B",
          "text": "<taglib-name>"
        },
        {
          "key": "C",
          "text": "<taglib-location>"
        },
        {
          "key": "D",
          "text": "<taglib_uri>"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. <taglib-location>",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 74,
      "slideNumber": null,
      "question": "Which statements are BEST describe isErrorPage attribute of <%@ page isErrorPage= directive?",
      "options": [
        {
          "key": "A",
          "text": "Specifies the MIME type of the data in the response to the client. The default type is text/html."
        },
        {
          "key": "B",
          "text": "Specifies the class from which the translated JSP will be inherited. This attribute must be a fully qualified package and class name."
        },
        {
          "key": "C",
          "text": "Specifies if the current page is an error page that will be invoked in response to an error on another page. If the attribute value is true, the implicit object exception is created and references the original exception that occurred."
        },
        {
          "key": "D",
          "text": "Any exceptions in the current page that are not caught are sent to the error page for processing. The error page implicit object exception references the original exception."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Specifies if the current page is an error page that will be invoked in response to an error on another page. If the attribute value is true, the implicit object exception is created and references the original exception that occurred.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 75,
      "slideNumber": null,
      "question": "Which of the elements defined within the taglib element of taglib descriptor file are required? Select one correct answer.",
      "options": [
        {
          "key": "A",
          "text": "info"
        },
        {
          "key": "B",
          "text": "taguri"
        },
        {
          "key": "C",
          "text": "display-name"
        },
        {
          "key": "D",
          "text": "taglib-location"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. taglib-location",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 76,
      "slideNumber": null,
      "question": "Action has the ability to match request parameters to properties of the same name in a bean by specifying for attribute property.",
      "options": [
        {
          "key": "A",
          "text": "< j sp: ir:ciucie >"
        },
        {
          "key": "B",
          "text": "< isp : use3ean >"
        },
        {
          "key": "C",
          "text": "< j sp : set P ropert"
        },
        {
          "key": "D",
          "text": "< j sp : get P ropert y >"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. < j sp : set P ropert",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 77,
      "slideNumber": null,
      "question": "Which jsp tag can be used to set bean property?",
      "options": [
        {
          "key": "A",
          "text": "jsp:property"
        },
        {
          "key": "B",
          "text": "jsp:setProperty"
        },
        {
          "key": "C",
          "text": "jsp:useBean.setProperW"
        },
        {
          "key": "D",
          "text": "jsp:useBean"
        },
        {
          "key": "E",
          "text": "jsp:useBean.property"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. jsp:setProperty",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 78,
      "slideNumber": null,
      "question": "When implementing a tag, if the tag does not include the body, then the tag handler class must extend the BodyTagSupport class. Is this statement true of false?",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. False",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 79,
      "slideNumber": null,
      "question": "provides a way to identify a user across more than one page request or visit to a Web site and to store information about that user.",
      "options": [
        {
          "key": "A",
          "text": "Hidden Field"
        },
        {
          "key": "B",
          "text": "Cookie"
        },
        {
          "key": "C",
          "text": "URL Rewrite"
        },
        {
          "key": "D",
          "text": "Session management"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. Session management",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 80,
      "slideNumber": null,
      "question": "Which HTTP method is used in FORM based Authentication?",
      "options": [
        {
          "key": "A",
          "text": "FORM"
        },
        {
          "key": "B",
          "text": "GET"
        },
        {
          "key": "C",
          "text": "HEAD"
        },
        {
          "key": "D",
          "text": "poST"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. poST",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 81,
      "slideNumber": null,
      "question": "Which statements are BEST describe page directive of JSP file?",
      "options": [
        {
          "key": "A",
          "text": "Allows programmers to include their own new tags in the form of tag libraries. These libraries can be used to encapsulate functionality and simplify the coding of a JSP."
        },
        {
          "key": "B",
          "text": "Causes the JSP container to perform a translation-time insertion of another resource's content. As the JSP is translated into a servlet and compiled, the referenced file replaces the include directive and is translated as if it were originally part of the JSP."
        },
        {
          "key": "C",
          "text": "The scripting language used in the JSP. Currently, the only valid value for this attribute is java."
        },
        {
          "key": "D",
          "text": "Defines page settings for the JSP container to process"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. Defines page settings for the JSP container to process",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 82,
      "slideNumber": null,
      "question": "Which of the following statement is correct? (choose one)",
      "options": [
        {
          "key": "A",
          "text": "Confidentiality and Authorization are one and the same thing."
        },
        {
          "key": "B",
          "text": "Authentication means determining whether one has access to a particular resource or not."
        },
        {
          "key": "C",
          "text": "Authorization means determining whether one has access to a particular resource or not."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Authorization means determining whether one has access to a particular resource or not.",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 83,
      "slideNumber": null,
      "question": "Which of the following statement is correct?",
      "options": [
        {
          "key": "A",
          "text": "Data Integrity means that the data cannot be viewed by anybody other than it's intended recepient."
        },
        {
          "key": "B",
          "text": "Data Integrity means that the data is not modified in transit between the sender and the receiver."
        },
        {
          "key": "C",
          "text": "Authentication means determining whether one has access to a particular resource or not."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Data Integrity means that the data is not modified in transit between the sender and the receiver.",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 84,
      "slideNumber": null,
      "question": "Each page has its own instances of the page-scope implicit objects.",
      "options": [
        {
          "key": "A",
          "text": "False"
        },
        {
          "key": "B",
          "text": "True"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. True",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 85,
      "slideNumber": null,
      "question": "The connection between client and server is almost always broken after each HTTP request.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. False",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 86,
      "slideNumber": null,
      "question": "Consider the HTML code below. Which of the following method calls can retrieve the \"email\" value sent from the browser? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "getParameter(\"email\") of ServletRequest"
        },
        {
          "key": "B",
          "text": "getFormValue(\"email\") of HttpServletRequest"
        },
        {
          "key": "C",
          "text": "getField(\"email\") of HttpServletRequest"
        },
        {
          "key": "D",
          "text": "getParameters(\"email\") of HttpServlet"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. getParameter(\"email\") of ServletRequest",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 87,
      "slideNumber": null,
      "question": "Which of these is true about include directive? Select the one correct answer.",
      "options": [
        {
          "key": "A",
          "text": "The included file must have jsp extension."
        },
        {
          "key": "B",
          "text": "The XML syntax of include directive in <jsp: include >"
        },
        {
          "key": "C",
          "text": "The content of file included using include directive, cannot refer to variables local to the original page."
        },
        {
          "key": "D",
          "text": "When using the include directive, the JSP container treats the file to be included as if it was part of the original file."
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. When using the include directive, the JSP container treats the file to be included as if it was part of the original file.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 88,
      "slideNumber": null,
      "question": "HttpSessions expire only when the browsing session ends or when the invalidate method is called.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. False",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 89,
      "slideNumber": null,
      "question": "HttpSession objects have a built-in data structure that lets you store any number of keys and associated values.",
      "options": [
        {
          "key": "A",
          "text": "False"
        },
        {
          "key": "B",
          "text": "True"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. True",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 90,
      "slideNumber": null,
      "question": "The < servlet -mapping > element (in web.xml) provides a means of defining URLs to use the servlet resources.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. True",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 91,
      "slideNumber": null,
      "question": "Session death is more likely to come about through a time-out mechanism. If there is no activity on a session for a predefined length of time, the web container invalidates the session.",
      "options": [
        {
          "key": "A",
          "text": "False"
        },
        {
          "key": "B",
          "text": "True"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. True",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 92,
      "slideNumber": null,
      "question": "Which statements are BEST describe errorPage attribute of page directive?",
      "options": [
        {
          "key": "A",
          "text": "Specifies if the current page is an error page that will be invoked in response to an error on another page. If the attribute value is true, the implicit object exception is created and references the original exception that occurred."
        },
        {
          "key": "B",
          "text": "Any exceptions in the current page that are not caught are sent to the error page for processing. The error page implicit object exception references the original exception."
        },
        {
          "key": "C",
          "text": "Specifies the MIME type of the data in the response to the client. The default type is text/html."
        },
        {
          "key": "D",
          "text": "Specifies the class from which the translated JSP will be inherited. This attribute must be a fully qualified package and class name."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Any exceptions in the current page that are not caught are sent to the error page for processing. The error page implicit object exception references the original exception.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 93,
      "slideNumber": null,
      "question": "Which of the following statements are correct about HTTP Basic authentication mechanism?",
      "options": [
        {
          "key": "A",
          "text": "HTML FORM is used to capture username and password."
        },
        {
          "key": "B",
          "text": "Password is transmitted either in encrypted text or in plain text depending on the browser."
        },
        {
          "key": "C",
          "text": "Password is transmitted as text."
        },
        {
          "key": "D",
          "text": "Password is transmitted in an encrypted form."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Password is transmitted as text.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 94,
      "slideNumber": null,
      "question": "Which element of the deployment descriptor of a web application includes the welcome-file-list element as a sub element?",
      "options": [
        {
          "key": "A",
          "text": "web-app"
        },
        {
          "key": "B",
          "text": "Web"
        },
        {
          "key": "C",
          "text": "App"
        },
        {
          "key": "D",
          "text": "Index"
        },
        {
          "key": "E",
          "text": "Application"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. web-app",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 96,
      "slideNumber": null,
      "question": "To send binary output in a response, which of the following method of HttpServletResponse get the appropriate Writer/Stream object?",
      "options": [
        {
          "key": "A",
          "text": "getStream"
        },
        {
          "key": "B",
          "text": "getOutputStream"
        },
        {
          "key": "C",
          "text": "getBinaryStream"
        },
        {
          "key": "D",
          "text": "getWriter"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. getOutputStream",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 97,
      "slideNumber": null,
      "question": "Study the statements about web.xml file:\n1. The deployment descriptor file is called web.xml, and it must be located in the WEB-INF\ndirectory.\n2. web.xml is in XML (extended markup language) format. Its root element is <web >",
      "options": [
        {
          "key": "A",
          "text": "Only statement 1 is true"
        },
        {
          "key": "B",
          "text": "Only statement 2 is true"
        },
        {
          "key": "C",
          "text": "Both 1 and 2 are true"
        },
        {
          "key": "D",
          "text": "Both 1 and 2 are not true"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Only statement 1 is true",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 98,
      "slideNumber": null,
      "question": "Which interface you CANNOT use to obtain a RequestDispatcher Object?",
      "options": [
        {
          "key": "A",
          "text": "ServletContext"
        },
        {
          "key": "B",
          "text": "HttpSetvletResponse"
        },
        {
          "key": "C",
          "text": "ServletRequest"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. HttpSetvletResponse",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 99,
      "slideNumber": null,
      "question": "Which security mechanism proves that data has not been tampered with during its transit through the network?",
      "options": [
        {
          "key": "A",
          "text": "Data validation"
        },
        {
          "key": "B",
          "text": "Data integrity"
        },
        {
          "key": "C",
          "text": "Authentication"
        },
        {
          "key": "D",
          "text": "Packet sniffing"
        },
        {
          "key": "E",
          "text": "Data privacy"
        },
        {
          "key": "F",
          "text": "Authorization"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Data integrity",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 100,
      "slideNumber": null,
      "question": "Which interface can you use to retrieve a resource that belongs to the current web application?",
      "options": [
        {
          "key": "A",
          "text": "ServletContext"
        },
        {
          "key": "B",
          "text": "HttpServletRequest"
        },
        {
          "key": "C",
          "text": "HttpSeNletResponse"
        },
        {
          "key": "D",
          "text": "HttpServlet"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. ServletContext",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 101,
      "slideNumber": null,
      "question": "Your jsp page uses classes from java.util package. Which of the following statement would allow you to import the package? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "<%@ page"
        },
        {
          "key": "B",
          "text": "<%@ import java . utii.@ %>"
        },
        {
          "key": "C",
          "text": "<% %>"
        },
        {
          "key": "D",
          "text": "<%@ page import = \"java . %>"
        },
        {
          "key": "E",
          "text": "<% page %>"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. <%@ page",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 102,
      "slideNumber": null,
      "question": "Which statements are BEST describe include directive of JSP file?",
      "options": [
        {
          "key": "A",
          "text": "Defines page settings for the JSP container to process"
        },
        {
          "key": "B",
          "text": "Causes the JSP container to perform a translation-time insertion of another resource's content. When the JSP is translated into a servlet and compiled, the referenced file replaces the include directive as if it were originally part of the JSP."
        },
        {
          "key": "C",
          "text": "Allows programmers to include their own new tags in the form of tag libraries. These libraries help to encapsulate functionality and simplify the coding of a JSP."
        },
        {
          "key": "D",
          "text": "The scripting language used in the JSP. Currently, the only valid value for this attribute is \"java\"."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Causes the JSP container to perform a translation-time insertion of another resource's content. When the JSP is translated into a servlet and compiled, the referenced file replaces the include directive as if it were originally part of the JSP.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 103,
      "slideNumber": null,
      "question": "Which syntax is correct for JSP Declarations?",
      "options": [
        {
          "key": "A",
          "text": "< .%! code %. >"
        },
        {
          "key": "B",
          "text": "< .% code %. >"
        },
        {
          "key": "C",
          "text": "< .%= code% >"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. < .%! code %. >",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 104,
      "slideNumber": null,
      "question": "When you obtain a session (using getSession() of HttpServletRequest object), the web container manufactures a unique ID string for the session. This is passed as a token between the client and the server.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. True",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 105,
      "slideNumber": null,
      "question": "Which statements are BEST describe page attribute of < .jsp:include page = > Action?",
      "options": [
        {
          "key": "A",
          "text": "Specifies the relative URI path of the resource to include. The resource must be part of the application."
        },
        {
          "key": "B",
          "text": "Dynamically includes another resource in a JSP. As the JSP executes, the referenced resource is included and processed."
        },
        {
          "key": "C",
          "text": "Forwards request processing to another JSP, servlet or static page. This action terminates the current JSP's execution."
        },
        {
          "key": "D",
          "text": "Specifies that the JSP uses a JavaBean instance. This action specifies the scope of the bean and gives it an ID that scripting components can use to manipulate the bean."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Specifies the relative URI path of the resource to include. The resource must be part of the application.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 106,
      "slideNumber": null,
      "question": "The following statement is True or False? Statement: A URL contains information that directs a browser to the resource that the user wants to access.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. True",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 107,
      "slideNumber": null,
      "question": "The following statement is True or False? Statement: Servlet methods are executed automatically.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: A (Cộng đồng: B · FUO AI: A).\nLựa chọn đúng: A. True",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 108,
      "slideNumber": null,
      "question": "Regarding URL rewriting for session support, which of the following is true?",
      "options": [
        {
          "key": "A",
          "text": "Every URL that the client uses must include jsessionid."
        },
        {
          "key": "B",
          "text": "Only the first request that the client makes must include jsessionid."
        },
        {
          "key": "C",
          "text": "All the URLs should include IP address in the URL."
        },
        {
          "key": "D",
          "text": "Both, IP and machine name should be included in all the URLs."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Every URL that the client uses must include jsessionid.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 110,
      "slideNumber": null,
      "question": "What is output to the web page on the second access to the same instance of the following JSP?\n```\n<html>\n<body>\n<%! int x = 0; %>\n<%= x++ %>\n</body>\n</html>\n```",
      "options": [
        {
          "key": "A",
          "text": "0"
        },
        {
          "key": "B",
          "text": "1"
        },
        {
          "key": "C",
          "text": "2"
        },
        {
          "key": "D",
          "text": "3"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. 1",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 111,
      "slideNumber": null,
      "question": "The form attribute specifies the server-side form handler, i.e., the program that handles the request.",
      "options": [
        {
          "key": "A",
          "text": "action"
        },
        {
          "key": "B",
          "text": "name"
        },
        {
          "key": "C",
          "text": "id"
        },
        {
          "key": "D",
          "text": "localhost"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. action",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 112,
      "slideNumber": null,
      "question": "Name the default value of the scope attribute of < j : uceBean>",
      "options": [
        {
          "key": "A",
          "text": "page"
        },
        {
          "key": "B",
          "text": "session"
        },
        {
          "key": "C",
          "text": "application"
        },
        {
          "key": "D",
          "text": "request"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. page",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 113,
      "slideNumber": null,
      "question": "Which element defined within the taglib element of taglib descriptor file is required? Select one",
      "options": [
        {
          "key": "A",
          "text": "Tag"
        },
        {
          "key": "B",
          "text": "Description"
        },
        {
          "key": "C",
          "text": "Validator"
        },
        {
          "key": "D",
          "text": "Name"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Tag",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 114,
      "slideNumber": null,
      "question": "Which of the following are correct JSP expressions?",
      "options": [
        {
          "key": "A",
          "text": "<%= new Date() %>"
        },
        {
          "key": "B",
          "text": "<% \"Hello World\"; %>"
        },
        {
          "key": "C",
          "text": "<%= \"Hello World\"; %>"
        },
        {
          "key": "D",
          "text": "<%= out.println(\"hello\"); %>"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. <%= new Date() %>",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 115,
      "slideNumber": null,
      "question": "Which security mechanism limits access to the availability of resources to permitted groups or programs?",
      "options": [
        {
          "key": "A",
          "text": "Authentication"
        },
        {
          "key": "B",
          "text": "Authorization"
        },
        {
          "key": "C",
          "text": "Data integrity"
        },
        {
          "key": "D",
          "text": "Confidentiality"
        },
        {
          "key": "E",
          "text": "Checksum validation"
        },
        {
          "key": "F",
          "text": "MD5 encryption"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Authorization",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 116,
      "slideNumber": null,
      "question": "The following statement is True or False? Statement: Tag libraries are part of the tag extension mechanism that enables programmers tags that encapsulate complex Java functionality.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. True",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 117,
      "slideNumber": null,
      "question": "Which is NOT a scope of implicit objects of JSP file?",
      "options": [
        {
          "key": "A",
          "text": "application"
        },
        {
          "key": "B",
          "text": "page"
        },
        {
          "key": "C",
          "text": "request"
        },
        {
          "key": "D",
          "text": "session"
        },
        {
          "key": "E",
          "text": "response"
        }
      ],
      "correctKeys": [
        "E"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: E.\nLựa chọn đúng: E. response",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 118,
      "slideNumber": null,
      "question": "Which of the following statement correctly set a cookie from a servlet code? (Choose one) Assume that response and request refer to HttpServletResponse and HttpServletRequest respectively.",
      "options": [
        {
          "key": "A",
          "text": "re sponge . aciciCookie ( mycooki en"
        },
        {
          "key": "B",
          "text": "response . set Cookie ( \"rnycookien"
        },
        {
          "key": "C",
          "text": "request . set Cookie (\"mycookie\", \"value\") ;"
        },
        {
          "key": "D",
          "text": "response . addCookie (new Cookie (\":nycookie\", \"value ) ;"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. response . addCookie (new Cookie (\":nycookie\", \"value ) ;",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 119,
      "slideNumber": null,
      "question": "Which of these is a correct fragment within the web-app element of deployment descriptor? Select 1 correct answer",
      "options": [
        {
          "key": "A",
          "text": "<exception> <exception-type> mypackage.MyException</exception-type> <location> /er </exception>"
        },
        {
          "key": "B",
          "text": "<error-page> <exception-type> mypackage.MyException</exception-type> <location> /error.jsp</location> </error-page>"
        },
        {
          "key": "C",
          "text": "<error-page> <exception> mypackage.MyException </exception-type> <location> /error. </error-page>"
        },
        {
          "key": "D",
          "text": "<error-page> <exception-type> mypackage.MyException</exception-type> </error-page>"
        },
        {
          "key": "E",
          "text": "<error-page> <servlet-name> myservlet</servlet-name> <exception-type> mypackage.MyException</exception-type> </error-page>"
        },
        {
          "key": "F",
          "text": "<exception> <servlet-name> myservlet</servlet-name> <exception-type> mypackage.MyException</exception-type> </exception>"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. <error-page> <exception-type> mypackage.MyException</exception-type> <location> /error.jsp</location> </error-page>",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 120,
      "slideNumber": null,
      "question": "Assume that you need to write a JSP page that adds numbers from one to ten, and then print the sum.\n```\n<% int sum = 0;\nfor(j = 0; j < 10; j++) { %>\n// XXX --- Add j to sum\n<% } %>\n// YYY --- Display the sum\n```\nWhich statement when placed at the location XXX can be used to compute the sum?",
      "options": [
        {
          "key": "A",
          "text": "<% sum = sum + j %>"
        },
        {
          "key": "B",
          "text": "<% sum = sum + j; %>"
        },
        {
          "key": "C",
          "text": "<%= sum = sum + j %>"
        },
        {
          "key": "D",
          "text": "<%= sum = sum + j; %>"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. <% sum = sum + j; %>",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 121,
      "slideNumber": null,
      "question": "sends a request to an object and includes the result in a JSP file.",
      "options": [
        {
          "key": "A",
          "text": "< j sp: inciucie >"
        },
        {
          "key": "B",
          "text": "< isp : forward >"
        },
        {
          "key": "C",
          "text": "include directive"
        },
        {
          "key": "D",
          "text": "import directive"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. < j sp: inciucie >",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 122,
      "slideNumber": null,
      "question": "Which of the following represents a correct syntax for using a Javabean?",
      "options": [
        {
          "key": "A",
          "text": "<jsp:useBean id=\"fruit\" scope=\"page\"/>"
        },
        {
          "key": "B",
          "text": "<jsp:useBean id=\"fruit\" scope=\"page\" type=\"String\"/>"
        },
        {
          "key": "C",
          "text": "<jsp:useBean id=\"fruit\" class=\"Fruit\" beanName=\"Fruit\"/>"
        },
        {
          "key": "D",
          "text": "None of these"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: B (Cộng đồng: C · FUO AI: D).\nLựa chọn đúng: B. <jsp:useBean id=\"fruit\" scope=\"page\" type=\"String\"/>",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 123,
      "slideNumber": null,
      "question": "Which of the following defines the class name of a tag in a TLD?",
      "options": [
        {
          "key": "A",
          "text": "tag-class-name"
        },
        {
          "key": "B",
          "text": "tag-class"
        },
        {
          "key": "C",
          "text": "class-name"
        },
        {
          "key": "D",
          "text": "class"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. tag-class",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 124,
      "slideNumber": null,
      "question": "In which of the following case will the method doStartTag() of a tag handler be invoked?",
      "options": [
        {
          "key": "A",
          "text": "This method is always invoked whenever the tag's use is encountered in the jsp page."
        },
        {
          "key": "B",
          "text": "It will be invoked only if the use of that tag is not enclosed in another custom tag."
        },
        {
          "key": "C",
          "text": "This method is invoked if doTag() method returns DO_START"
        },
        {
          "key": "D",
          "text": "This method is invoked if doTag() method returns true."
        },
        {
          "key": "E",
          "text": "If doEndTag() returns EVAL TAG AGAIN."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. This method is always invoked whenever the tag's use is encountered in the jsp page.",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 125,
      "slideNumber": null,
      "question": "manages the threading for the servlets and JSPs and provides the necessary interface to the Web server.",
      "options": [
        {
          "key": "A",
          "text": "Web Container"
        },
        {
          "key": "B",
          "text": "EJB Container"
        },
        {
          "key": "C",
          "text": "Servlets"
        },
        {
          "key": "D",
          "text": "Applets"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Web Container",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 126,
      "slideNumber": null,
      "question": "Your jsp page uses java.util.TreeMap. Adding which of the following statement will ensure that class is available to the page? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "<%@ page import java . ut i I. TreeMap\" %>"
        },
        {
          "key": "B",
          "text": "<%! page import=njava . ut i l. Treetvlap\" %>"
        },
        {
          "key": "C",
          "text": "<%! java . ut il . TreeMap\" %>"
        },
        {
          "key": "D",
          "text": "<%@ java . util. TreeMap\" %>"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. <%@ page import java . ut i I. TreeMap\" %>",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 127,
      "slideNumber": null,
      "question": "Study the statements: 1. The special directory /WEB-INF/lib contains Java class files-sennets and supporting code. 2. The special directory /WEB-INF/classes contains JAR files with supporting libraries of code.",
      "options": [
        {
          "key": "A",
          "text": "Only statement 1 is true"
        },
        {
          "key": "B",
          "text": "Only statement 2 is true"
        },
        {
          "key": "C",
          "text": "Both 1 and 2 are true"
        },
        {
          "key": "D",
          "text": "Both 1 and 2 are not true"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. Both 1 and 2 are not true",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 128,
      "slideNumber": null,
      "question": "Which of the following statements is true? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "Session data is shared across multiple webapps in the same webserver/servlet container"
        },
        {
          "key": "B",
          "text": "Any serializable object can be put into a session."
        },
        {
          "key": "C",
          "text": "A session can only be invalidated after \"session-timeout\" minutes of inactivity."
        },
        {
          "key": "D",
          "text": "To use session, the client browser must support cookies."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Any serializable object can be put into a session.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 129,
      "slideNumber": null,
      "question": "The following line of code exists in the doGet method of Servlet:\n```\nString sid = request.getParameter(\"jsessionid\");\n```\nWhich of the option is NOT a standard technique for retrieving the HttpSession associated with the request? (Assume that the session has already been created.)",
      "options": [
        {
          "key": "A",
          "text": "HttpSession session = request.getSession();"
        },
        {
          "key": "B",
          "text": "HttpSession session = request.getSession(true);"
        },
        {
          "key": "C",
          "text": "HttpSession session = request.getSession(false);"
        },
        {
          "key": "D",
          "text": "HttpSession session = request.getSession(sid);"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. HttpSession session = request.getSession(sid);",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 130,
      "slideNumber": null,
      "question": "If you want the same Servlet to handle both GET and POST and to take the same action for both, simply have doGet call doPost, or vice versa.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. True",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 131,
      "slideNumber": null,
      "question": "What gets printed when the following JSP code is invoked in a browser? Select one correct answer.\n```\n<% if (Math.random() < 0.5) { %>\n    hello\n<% } else { %>\n    hi\n<% } %>\n```",
      "options": [
        {
          "key": "A",
          "text": "The browser will print either hello or hi based upon the return value of random."
        },
        {
          "key": "B",
          "text": "The string hello will always get printed."
        },
        {
          "key": "C",
          "text": "The string hi will always get printed."
        },
        {
          "key": "D",
          "text": "The JSP file will not compile."
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. The JSP file will not compile.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 132,
      "slideNumber": null,
      "question": "A JSP page has the following page directives:\n```\n<%@ page isErrorPage='false' %>\n<%@ page errorPage='/jsp/myerror.jsp' %>\n```\nWhich of the following implicit object is NOT available to the jsp page?",
      "options": [
        {
          "key": "A",
          "text": "session"
        },
        {
          "key": "B",
          "text": "exception"
        },
        {
          "key": "C",
          "text": "application"
        },
        {
          "key": "D",
          "text": "response"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. exception",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 133,
      "slideNumber": null,
      "question": "In which of the following cases will the method doEndTag() of a tag handler be invoked?",
      "options": [
        {
          "key": "A",
          "text": "It will be invoked only if doStartTag() and doAfterBody() complete successfully."
        },
        {
          "key": "B",
          "text": "It will be invoked in all case even if doStartTag() or doAfterBody() throw an exception."
        },
        {
          "key": "C",
          "text": "This method is invoked if doStartTag() method returns true."
        },
        {
          "key": "D",
          "text": "It will be invoked only if doStartTag() or doAfterBody() return Tag.DO_END_TAG."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. It will be invoked only if doStartTag() and doAfterBody() complete successfully.",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 134,
      "slideNumber": null,
      "question": "A bean present in the page and identified as 'mybean' has a property named 'name'. Which is the correct way to print the value of this property?",
      "options": [
        {
          "key": "A",
          "text": "<jsp:getProperty name=\"mybean\" property=\"name\"/>"
        },
        {
          "key": "B",
          "text": "<%out.println(mybean.getName())%>"
        },
        {
          "key": "C",
          "text": "<%=out.println(mybean.getName())%>"
        },
        {
          "key": "D",
          "text": "<%=jsp:getProperty name=\"mybean\" property=\"name\"%>"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. <jsp:getProperty name=\"mybean\" property=\"name\"/>",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 135,
      "slideNumber": null,
      "question": "The two most common HTTP requests are get and put.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. False",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 136,
      "slideNumber": null,
      "question": "You have declared a useBean tag as:\n```\n<jsp:useBean id=\"man\" class=\"animal.Human\" scope=\"application\" />\n```\nIn which type of object will this bean be kept?",
      "options": [
        {
          "key": "A",
          "text": "Servlet"
        },
        {
          "key": "B",
          "text": "HttpSession"
        },
        {
          "key": "C",
          "text": "ServletContext"
        },
        {
          "key": "D",
          "text": "ServletConfig"
        },
        {
          "key": "E",
          "text": "ApplicationContext"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. ServletContext",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 137,
      "slideNumber": null,
      "question": "Your web application logs a user in when she supplies username/password. At that time a\nsession is created for the user. Your want to let the user to be logged in only for 20 minutes.\nThe application should redirect the user to the login page upon any request after 20 minutes\nof activity. Which of the following HttpSession methods would be helpful to you for\nimplementing this functionality?",
      "options": [
        {
          "key": "A",
          "text": "getCreationTime0"
        },
        {
          "key": "B",
          "text": "getLastAccessTime0"
        },
        {
          "key": "C",
          "text": "getLastAccessedTime0"
        },
        {
          "key": "D",
          "text": "getMaxlnactivelnterva10"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. getLastAccessedTime0",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 138,
      "slideNumber": null,
      "question": "JavaServer Pages (JSP) technology enables you to mix regular, static HTML with dynamical content from servlets. You simply write the regular HTML in the normal manner, using familiar Web-page-building tools.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. True",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 139,
      "slideNumber": null,
      "question": "A bean with a property color is loaded using the following statement\n```\n<jsp:useBean id=\"fruit\" class=\"Fruit\"/>\n```\nWhich statement may be used to set the color property of the bean.",
      "options": [
        {
          "key": "A",
          "text": "<jsp:setColor id=\"fruit\" property=\"color\" value=\"white\"/>"
        },
        {
          "key": "B",
          "text": "<jsp:setColor name=\"fruit\" property=\"color\" value=\"white\"/>"
        },
        {
          "key": "C",
          "text": "<jsp:setValue name=\"fruit\" property=\"color\" value=\"white\"/>"
        },
        {
          "key": "D",
          "text": "<jsp:setProperty name=\"fruit\" property=\"color\" value=\"white\">"
        },
        {
          "key": "E",
          "text": "<jsp:setProperty name=\"fruit\" property=\"color\" value=\"white\"/>"
        },
        {
          "key": "F",
          "text": "<jsp:setProperty id=\"fruit\" property=\"color\" value=\"white\">"
        }
      ],
      "correctKeys": [
        "E"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: E.\nLựa chọn đúng: E. <jsp:setProperty name=\"fruit\" property=\"color\" value=\"white\"/>",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 140,
      "slideNumber": null,
      "question": "Which of the following task may happen in the translation phase of JSP page? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "Creation of the servlet class corresponding to the JSP file."
        },
        {
          "key": "B",
          "text": "Execution of _jspService() method."
        },
        {
          "key": "C",
          "text": "Instantiation of the servlet class."
        },
        {
          "key": "D",
          "text": "None of the others"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Creation of the servlet class corresponding to the JSP file.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 141,
      "slideNumber": null,
      "question": "Sessions will automatically become inactive when the amount of time between client accesses exceeds the interval specified by getMaxlnactivelnterval.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. True",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 142,
      "slideNumber": null,
      "question": "Which of the following is a properly formatted taglib element occurring in web.xml?",
      "options": [
        {
          "key": "A",
          "text": "<taglib> <uri>/graph</uri> <location>/WEB-INF/Charts.tld</location> </taglib>"
        },
        {
          "key": "B",
          "text": "<taglib> <lib-uri>/graph</lib-uri> <lib-location>/WEB-INF/Charts.tld</lib-location> </taglib>"
        },
        {
          "key": "C",
          "text": "<taglib> <taglib-name>/graph</taglib-name> <taglib-location>/WEB-INF/Charts.tld</taglib-location> </taglib>"
        },
        {
          "key": "D",
          "text": "<taglib> <taglib-uri>/graph</taglib-uri> <taglib-location>/WEB-INF/Charts.tld</taglib-location> </taglib>"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. <taglib> <taglib-uri>/graph</taglib-uri> <taglib-location>/WEB-INF/Charts.tld</taglib-location> </taglib>",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 143,
      "slideNumber": null,
      "question": "The HttpServletResponse lets you:",
      "options": [
        {
          "key": "A",
          "text": "specify outgoing information such as HTTP status codes (200, 404, etc.)"
        },
        {
          "key": "B",
          "text": "specify response headers (Content-Type, Set-Cookie, etc.)"
        },
        {
          "key": "C",
          "text": "obtain a PrintWriter used to send the document content back to the client."
        },
        {
          "key": "D",
          "text": "All the others"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. All the others",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 144,
      "slideNumber": null,
      "question": "Consider the Servlet definition in a web.xml file below. (see picture) What will the following line of code return if present in the init() method of TestServlet? getInitParameter(1);\n```\n<web-app>\n  <servlet>\n    <servlet-name>TestServlet</servlet-name>\n    <servlet-class>com.abc.TestServlet</servlet-class>\n    <init-param>\n      <param-name>locale</param-name>\n      <param-value>US</param-value>\n    </init-param>\n    <init-param>\n      <param-name>timezone</param-name>\n      <param-value>eastern</param-value>\n    </init-param>\n  </servlet>\n</web-app>\n```",
      "options": [
        {
          "key": "A",
          "text": "It will return \"US\"."
        },
        {
          "key": "B",
          "text": "Compilation error."
        },
        {
          "key": "C",
          "text": "Runtime error."
        },
        {
          "key": "D",
          "text": "It will return \"eastern\"."
        },
        {
          "key": "E",
          "text": "It will return null."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Compilation error.",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 145,
      "slideNumber": null,
      "question": "What are the different scope values for the <jcp : uceBean > ? (Choose one correct answer)",
      "options": [
        {
          "key": "A",
          "text": "session, page, application, request"
        },
        {
          "key": "B",
          "text": "session, page, application, global"
        },
        {
          "key": "C",
          "text": "session, page, application, context"
        },
        {
          "key": "D",
          "text": "session, page, response, request"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. session, page, application, request",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 146,
      "slideNumber": null,
      "question": "Which method can be invoked on a session object so that it is never invalidated by the servlet automatically?",
      "options": [
        {
          "key": "A",
          "text": "setMaxlnactivelnterval(-1 )"
        },
        {
          "key": "B",
          "text": "setTimeOut(lnteger.MAX INT)"
        },
        {
          "key": "C",
          "text": "setMaxlnactivelnterval(lnteger.MAX INT)"
        },
        {
          "key": "D",
          "text": "setTimeOut(-1)"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. setMaxlnactivelnterval(-1 )",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 147,
      "slideNumber": null,
      "question": "Which of the following XML fragments correctly specify the name used for a servlet class in the descriptor of a web application?",
      "options": [
        {
          "key": "A",
          "text": "<servlet-name>OrderServlet</servlet-name>"
        },
        {
          "key": "B",
          "text": "<name>OrderServlet</name>"
        },
        {
          "key": "C",
          "text": "<servlet>OrderServlet</servlet>"
        },
        {
          "key": "D",
          "text": "<servlet_name>OrderServlet</servlet_name>"
        },
        {
          "key": "E",
          "text": "The outermost tag's name containing servlet properties itself is the name of the servlet."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. <servlet-name>OrderServlet</servlet-name>",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 148,
      "slideNumber": null,
      "question": "Which of the following is valid servlet method that does NOT match up with HTTP methods?",
      "options": [
        {
          "key": "A",
          "text": "doGet()"
        },
        {
          "key": "B",
          "text": "doPost()"
        },
        {
          "key": "C",
          "text": "doConnect()"
        },
        {
          "key": "D",
          "text": "doOptions()"
        },
        {
          "key": "E",
          "text": "doHead()"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. doConnect()",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 149,
      "slideNumber": null,
      "question": "Which of the following methods will be invoked if the doStartTag() method of a tag returns Tag.SKIP_BODY?",
      "options": [
        {
          "key": "A",
          "text": "doEndTag()"
        },
        {
          "key": "B",
          "text": "skipBody()"
        },
        {
          "key": "C",
          "text": "doAfterBody()"
        },
        {
          "key": "D",
          "text": "None of these."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. doEndTag()",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 150,
      "slideNumber": null,
      "question": "Directives specify global information that is not associated with a particular JSP request.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. True",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 152,
      "slideNumber": null,
      "question": "Identify correct statement about a WAR file. (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "It is an XML document."
        },
        {
          "key": "B",
          "text": "It cannot be unpackaged by the container."
        },
        {
          "key": "C",
          "text": "It may contain third party jar and class files."
        },
        {
          "key": "D",
          "text": "It contains web components such as servlets as well as EJBs."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: C (Cộng đồng: D · FUO AI: C).\nLựa chọn đúng: C. It may contain third party jar and class files.",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 153,
      "slideNumber": null,
      "question": "```\n<html>\n<body>\n<form action=\"loginPage.jsp\">\n  Login ID: <input type=\"text\" name=\"txtId\">\n  Password: <input type=\"password\" name=\"txtPass\">\n  <input type=\"submit\" value=\"Login\">\n  <input type=\"reset\" value=\"Clear\">\n</form>\n</body>\n</html>\n```\nStudy the above html code. Assume that user clicks button Login.\nWhich is the correct statement?",
      "options": [
        {
          "key": "A",
          "text": "The form inputs are submitted by GET method."
        },
        {
          "key": "B",
          "text": "The loginPage.jsp is called."
        },
        {
          "key": "C",
          "text": "The value of two text inputs appended to the requested URL."
        },
        {
          "key": "D",
          "text": "All of the others"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. All of the others",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 154,
      "slideNumber": null,
      "question": "A tag library defines a set of elements that can be inserted into the JSP file.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. True",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 155,
      "slideNumber": null,
      "question": "Which statements are BEST describe scope attribute of < j cp : uzeBean ccope=\" Action?",
      "options": [
        {
          "key": "A",
          "text": "The name used to manipulate the Java object with actions < j sp: set ? ropert y > and < j sp : get ? roperty > A variable of this name is also declared for use in JSP scripting elements. The name specified is case sensitive."
        },
        {
          "key": "B",
          "text": "The scope in which the Java object is accessible-page, request, session or application. The default value is page."
        },
        {
          "key": "C",
          "text": "The fully qualified class name of the Java object."
        },
        {
          "key": "D",
          "text": "The name of a bean that can be used with method instantiate of class java. beans. Beans . JavaBean into memory."
        },
        {
          "key": "E",
          "text": "The type of the JavaBean. This can be the same type as the class attribute, a superclass or interface implemented by that type. The default value is the same as for attribute class. A ClassCastException occurs if the Java object is not of the type specified with attribute type."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. The scope in which the Java object is accessible-page, request, session or application. The default value is page.",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 156,
      "slideNumber": null,
      "question": "Which statements are BEST describe contentType attribute of page contentType=. .. % >",
      "options": [
        {
          "key": "A",
          "text": "Any exceptions in the current page that are not caught are sent to the error page for processing. The error page implicit object exception references the original exception."
        },
        {
          "key": "B",
          "text": "Specifies if the current page is an error page that will be invoked in response to an error . If the attribute value is truer the implicit object exception is created and references the original exception that occurred."
        },
        {
          "key": "C",
          "text": "Specifies the MIME type of the data in the response to the client. The default type is text/html."
        },
        {
          "key": "D",
          "text": "Specifies the class from which the translated JSP will be inherited. This attribute must be the fully qualified package and class name."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Specifies the MIME type of the data in the response to the client. The default type is text/html.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 157,
      "slideNumber": null,
      "question": "What is the output of the following code snippet of a JSP page?\n```\n${empty \"\"}<br>\n${empty \"sometext\"}\n```\n(Trong các lựa chọn, dấu \"/\" biểu thị xuống dòng.)",
      "options": [
        {
          "key": "A",
          "text": "true / false"
        },
        {
          "key": "B",
          "text": "false / true"
        },
        {
          "key": "C",
          "text": "true"
        },
        {
          "key": "D",
          "text": "false"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. true / false",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 158,
      "slideNumber": null,
      "question": "What will be the result of pressing the submit button in the following HTML form?\n```\n<form action=\"register.jsp\">\n  <input type=\"text\" name=\"fullName\" value=\"Type name here\">\n  <input type=\"submit\" name=\"sbmButton\" />\n</form>\n```",
      "options": [
        {
          "key": "A",
          "text": "A request is sent with the HTTP method HEAD."
        },
        {
          "key": "B",
          "text": "A request is sent with the HTTP method POST."
        },
        {
          "key": "C",
          "text": "A request is sent with the HTTP method GET."
        },
        {
          "key": "D",
          "text": "The parameter fullName is the only parameter passed to the web server in the request URL."
        },
        {
          "key": "E",
          "text": "The parameter fullName is the only parameter passed to the web server as part of the request body."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. A request is sent with the HTTP method GET.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 159,
      "slideNumber": null,
      "question": "What should be the value of <body-content > subelement of element in a TLD file if the tag doesn't have any contents as its body?",
      "options": [
        {
          "key": "A",
          "text": "blank"
        },
        {
          "key": "B",
          "text": "empty"
        },
        {
          "key": "C",
          "text": "null"
        },
        {
          "key": "D",
          "text": "false"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. empty",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 160,
      "slideNumber": null,
      "question": "Which of the following constitute valid ways of importing Java classes into JSP page source?",
      "options": [
        {
          "key": "A",
          "text": "<%! import java util.@ ; %>"
        },
        {
          "key": "B",
          "text": "<%@ import tava.util.w %>"
        },
        {
          "key": "C",
          "text": "<%@ page import = \"java . util. %>"
        },
        {
          "key": "D",
          "text": "None of the others"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. <%@ page import = \"java . util. %>",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 161,
      "slideNumber": null,
      "question": "The web.xml file for a webapp contains the following XML fragment for configuring session timeout:\n```\n<session-config>\n  <session-timeout>300</session-timeout>\n</session-config>\n```\nWhat would be the session timeout interval for the sessions created in this web application?",
      "options": [
        {
          "key": "A",
          "text": "300 minutes"
        },
        {
          "key": "B",
          "text": "300 seconds"
        },
        {
          "key": "C",
          "text": "300 milli seconds"
        },
        {
          "key": "D",
          "text": "300 hours"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. 300 minutes",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 162,
      "slideNumber": null,
      "question": "Class HttpServlet defines the methods and to respond to get and post requests from a client.",
      "options": [
        {
          "key": "A",
          "text": "doGet, doPost"
        },
        {
          "key": "B",
          "text": "DoPost"
        },
        {
          "key": "C",
          "text": "Get, Post"
        },
        {
          "key": "D",
          "text": "doGET, doPOST"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. doGet, doPost",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 163,
      "slideNumber": null,
      "question": "Which of the following statements is correct? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "To support sessions using URL rewriting, <url-rewriting. > true</url-rewriting > must be specified in the deployment descriptor."
        },
        {
          "key": "B",
          "text": "If a web application uses HTTPS, the HTTPS response stream may be used to identify the session."
        },
        {
          "key": "C",
          "text": "Access to attributes stored in a session is guaranteed to be thread safe."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: B (Cộng đồng: A · FUO AI: B).\nLựa chọn đúng: B. If a web application uses HTTPS, the HTTPS response stream may be used to identify the session.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 164,
      "slideNumber": null,
      "question": "Study the statements:\n1. Every web application within a web container has a unique context path.\n2. The context path and any directories you choose to create within it contain resources that\nare accessible through HTTP.",
      "options": [
        {
          "key": "A",
          "text": "Only statement 1 is true"
        },
        {
          "key": "B",
          "text": "Only statement 2 is true"
        },
        {
          "key": "C",
          "text": "Both 1 and 2 are true"
        },
        {
          "key": "D",
          "text": "Both 1 and 2 are not true"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Both 1 and 2 are true",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 165,
      "slideNumber": null,
      "question": "A bean with a property color is loaded using the following statement\n```\n<jsp:useBean id=\"fruit\" class=\"Fruit\"/>\n```\nWhich of the following statements may be used to print the value of color property of the bean? Select one correct answer.",
      "options": [
        {
          "key": "A",
          "text": "<jsp:getColor bean=\"fruit\"/>"
        },
        {
          "key": "B",
          "text": "<jsp:getProperty id=\"fruit\" property=\"color\"/>"
        },
        {
          "key": "C",
          "text": "<jsp:getProperty bean=\"fruit\" property=\"color\"/>"
        },
        {
          "key": "D",
          "text": "<jsp:getProperty name=\"fruit\" property=\"color\"/>"
        },
        {
          "key": "E",
          "text": "<jsp:getProperty class=\"Fruit\" property=\"color\"/>"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. <jsp:getProperty name=\"fruit\" property=\"color\"/>",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 166,
      "slideNumber": null,
      "question": "You do not want the user to see the data and the format being passed to your server when they submit the information for registering with your site. Which HTTP method would you use?",
      "options": [
        {
          "key": "A",
          "text": "GET"
        },
        {
          "key": "B",
          "text": "POST"
        },
        {
          "key": "C",
          "text": "PUT"
        },
        {
          "key": "D",
          "text": "HIDDEN"
        },
        {
          "key": "E",
          "text": "HEAD"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. POST",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 167,
      "slideNumber": null,
      "question": "Which statements are BEST describe value attribute of value-... / > action?",
      "options": [
        {
          "key": "A",
          "text": "The ID of the JavaBean for which a property (or properties) will be set."
        },
        {
          "key": "B",
          "text": "The name of the property to set. Specifying \"*\" for this attribute causes the JSP to match parameters to the properties of the bean."
        },
        {
          "key": "C",
          "text": "If request parameter names do not match bean property names, this attribute can be used to specify which request parameter should be used to obtain the value for a specific bean property."
        },
        {
          "key": "D",
          "text": "The value to assign to a bean property. The value typically is the result of a JSP expression."
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. The value to assign to a bean property. The value typically is the result of a JSP expression.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 168,
      "slideNumber": null,
      "question": "Which statements are BEST describe page implicit object of jsp file?",
      "options": [
        {
          "key": "A",
          "text": "This javax.servlet.jsp.JspWriter object writes text as part of the response to a request. This is used implicitly with JSP expressions and actions that insert string content in a response."
        },
        {
          "key": "B",
          "text": "This java.lang.Object object represents the this reference for the current JSP instance."
        },
        {
          "key": "C",
          "text": "This javax.servlet.jsp.PageContext object hides the implementation details of the underlying JSP container and provides JSP programmers with access to the implicit objects discussed"
        },
        {
          "key": "D",
          "text": "This object represents the response to the client. The object normally is an instance of a class that implements HttpServletResponse (package javax.servlet.http). If a protocol other than HTTP is used, this object is an instance of a class that implements javax.servlet.ServletResponse"
        },
        {
          "key": "E",
          "text": "This object represents the client request. The object normally is an instance of a class that implements HttpServletRequest (package javax.servlet.http). If a protocol other than HTTP is used, this object is an instance of a subclass of javax.servlet.ServletRequest."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. This java.lang.Object object represents the this reference for the current JSP instance.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 169,
      "slideNumber": null,
      "question": "Which of the following is correct statement?",
      "options": [
        {
          "key": "A",
          "text": "The getRequestDispatcher method of ServletContext class takes the full path of the servilet. The getRequestDispatcher method of HttpSetvletRequest class takes the path of the servlet relative to the ServletContext."
        },
        {
          "key": "B",
          "text": "The include method defined in the RequestDispatcher class can be used to access one servlet from another. But it can be invoked only if no output has been sent to the server."
        },
        {
          "key": "C",
          "text": "The getNamedDispatcher(String) defined in HttpServletRequest class takes the name of the servlet and returns an object of RequestDispatcher class"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. The getRequestDispatcher method of ServletContext class takes the full path of the servilet. The getRequestDispatcher method of HttpSetvletRequest class takes the path of the servlet relative to the ServletContext.",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 170,
      "slideNumber": null,
      "question": "(Choose 1 answer)\nWhich are the correct lines of code to get information in the following <init-param> tag in the web.xml file?\n```\n<servlet>\n  <servlet-name>ServletName</servlet-name>\n  <servlet-class>ServletName</servlet-class>\n  <init-param>\n    <param-name>InitParamaterName</param-name>\n    <param-value>InitParamaterValue</param-value>\n  </init-param>\n</servlet>\n```",
      "options": [
        {
          "key": "A",
          "text": "ServletContext sc = getServletContext();"
        },
        {
          "key": "B",
          "text": "response.getParameter(\"InitParamaterName\");"
        },
        {
          "key": "C",
          "text": "request.getParameter(\"InitParamaterName\");"
        },
        {
          "key": "D",
          "text": "ServletConfig sc = getServletConfig();"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. ServletConfig sc = getServletConfig();",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 171,
      "slideNumber": null,
      "question": "Identify the technique that can be used to implement 'sessions' if the client browser does not cookies.(Choose one)",
      "options": [
        {
          "key": "A",
          "text": "Hidden form fields."
        },
        {
          "key": "B",
          "text": "It cannot be done without cookie support."
        },
        {
          "key": "C",
          "text": "Using Http headers."
        },
        {
          "key": "D",
          "text": "URL Writing"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: D (Cộng đồng: A · FUO AI: D).\nLựa chọn đúng: D. URL Writing",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 172,
      "slideNumber": null,
      "question": "The exception-type element specifies an exception type and is used to handle exceptions generated by a servlet. Which element of the deployment descriptor includes the exception- type as a sub-element? (include the element in enclosing parenthesis)",
      "options": [
        {
          "key": "A",
          "text": "exception-page"
        },
        {
          "key": "B",
          "text": "Error"
        },
        {
          "key": "C",
          "text": "error-page"
        },
        {
          "key": "D",
          "text": "Exception"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. error-page",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 173,
      "slideNumber": null,
      "question": "Which technique is likely to return an initialization parameter for a JSP page?",
      "options": [
        {
          "key": "A",
          "text": "<% String s = getInitParameter(\"myParm\"); %>"
        },
        {
          "key": "B",
          "text": "<%= request.getParameter(\"myParm\") %>"
        },
        {
          "key": "C",
          "text": "<%= application.getInitParameter(\"myParm\") %>"
        },
        {
          "key": "D",
          "text": "<% String s = getAttribute(\"myParm\"); %>"
        },
        {
          "key": "E",
          "text": "<%= getParameter(\"myParm\") %>"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. <% String s = getInitParameter(\"myParm\"); %>",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 174,
      "slideNumber": null,
      "question": "Which of the following file is the correct name and location of deployment descriptor of a web application? Assume that the web application is rooted at \\doc-root. Select one correct answer.",
      "options": [
        {
          "key": "A",
          "text": "\\doc-root\\dd.xml"
        },
        {
          "key": "B",
          "text": "\\doc-root\\web.xml"
        },
        {
          "key": "C",
          "text": "\\doc-root\\WEB-INF\\web.xml"
        },
        {
          "key": "D",
          "text": "\\doc-root\\WEB_INF\\dd.xml"
        },
        {
          "key": "E",
          "text": "\\doc-root\\WEB-INF\\dd.xml"
        },
        {
          "key": "F",
          "text": "\\doc-root\\WEB_INF\\web.xml"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. \\doc-root\\WEB-INF\\web.xml",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 175,
      "slideNumber": null,
      "question": "How can you ensure the continuity of the session while using HttpServletResponse.sendRedirect() when cookies are not supported by the client?",
      "options": [
        {
          "key": "A",
          "text": "By enconding the redirect path with HttpServletResponse.encodeRedirectURL() method."
        },
        {
          "key": "B",
          "text": "By using hidden parameters."
        },
        {
          "key": "C",
          "text": "By using HttpServletRequest.encodeURL() method."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. By enconding the redirect path with HttpServletResponse.encodeRedirectURL() method.",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 176,
      "slideNumber": null,
      "question": "Where the bean is declared using the following useBean tag accessible?\n```\n<jsp:useBean id=\"jbean\" class=\"jclass.JBean\" />\n```",
      "options": [
        {
          "key": "A",
          "text": "throughout all future invocations of the JSP as long as the session is not expired"
        },
        {
          "key": "B",
          "text": "Throughout the remainder of the page."
        },
        {
          "key": "C",
          "text": "within other servlets and JSP pages of the same web applications."
        },
        {
          "key": "D",
          "text": "throughout all future invocations of the JSP as long as the servlet engine is running."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Throughout the remainder of the page.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 177,
      "slideNumber": null,
      "question": "A JSP file uses a tag as cmyTag1ib:myTag > . The myTag element here should be defined in of the taglib element in the tag library descriptor file ?.",
      "options": [
        {
          "key": "A",
          "text": "tagname"
        },
        {
          "key": "B",
          "text": "name"
        },
        {
          "key": "C",
          "text": "tag"
        },
        {
          "key": "D",
          "text": "prefix"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. name",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 178,
      "slideNumber": null,
      "question": "Which statements are BEST describe pageContext implicit object of jsp file?",
      "options": [
        {
          "key": "A",
          "text": "This javax.servlet.jsp.PageContext object hides the implementation details of the underlying servlet and JSP container and provides JSP programmers with access to the implicit objects discussed in this table."
        },
        {
          "key": "B",
          "text": "This object represents the response to the client. The object normally is an instance of a class that implements HttpServletResponse (package javax.servlet.http). If a protocol other than HTTP is used, this object is an instance of a class that implements javax.servlet.ServletResponse."
        },
        {
          "key": "C",
          "text": "This object represents the client request. The object normally is an instance of a class that implements HttpServletRequest (package javax.servlet.http). If a protocol other than HTTP is used, this object is an instance of a subclass of javax.servlet.ServletRequest."
        },
        {
          "key": "D",
          "text": "This java.lang.Object object represents the this reference for the current JSP instance."
        },
        {
          "key": "E",
          "text": "This javax.servlet.jsp.JspWriter object writes text as part of the response to a request. This object is used implicitly with JSP expressions and actions that insert string content in a response."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. This javax.servlet.jsp.PageContext object hides the implementation details of the underlying servlet and JSP container and provides JSP programmers with access to the implicit objects discussed in this table.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 179,
      "slideNumber": null,
      "question": "Which of the following method calls can be used to retrieve an object from the session that was stored with the name \"roleName\"?",
      "options": [
        {
          "key": "A",
          "text": "getValue( \" roleName\" ) ;"
        },
        {
          "key": "B",
          "text": "get ( \"roleName\") ;"
        },
        {
          "key": "C",
          "text": "getObject ( \" roleName\" ) ;"
        },
        {
          "key": "D",
          "text": "getParameter( \" roleName \" ) ;"
        },
        {
          "key": "E",
          "text": "getAttribute( \" roleName \" ) ;"
        }
      ],
      "correctKeys": [
        "E"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: E.\nLựa chọn đúng: E. getAttribute( \" roleName \" ) ;",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 180,
      "slideNumber": null,
      "question": "Which of the following represents the XML equivalent of this statement <%@ include file=\"a.jsp\" %>? Select one correct statement",
      "options": [
        {
          "key": "A",
          "text": "<jsp:include file=\"a.jsp\"/>"
        },
        {
          "key": "B",
          "text": "<jsp:include page=\"a.jsp\"/>"
        },
        {
          "key": "C",
          "text": "<jsp:directive.include file=\"a.jsp\"/>"
        },
        {
          "key": "D",
          "text": "There is no XML equivalent of include directive."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. <jsp:directive.include file=\"a.jsp\"/>",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 181,
      "slideNumber": null,
      "question": "Which statements are BEST describe beanName attribute of < j cp : uceBean beanName= n Action? (Select 2)",
      "options": [
        {
          "key": "A",
          "text": "The name used to manipulate the Java object with actions < j sp: set ? ropert y > and < j sp : get ? roperty > A variable of this name is also declared for use in JSP scripting elements. The name specified here is case sensitive."
        },
        {
          "key": "B",
          "text": "The fully qualified class name of the Java object."
        },
        {
          "key": "C",
          "text": "The name of a bean that can be used with method instantiate of class java.beans.Beans to load a JavaBean into memory."
        },
        {
          "key": "D",
          "text": "The type of the JavaBean. This can be the same type as the class attribute, a superclass of that type or an interface implemented by that type. The default value is the same as for attribute class. A ClassCastException occurs if the Java object is not of the type specified with attribute type."
        },
        {
          "key": "E",
          "text": "The scope in which the Java object is accessible-page, request, session or application. The default scope is page."
        }
      ],
      "correctKeys": [
        "B",
        "C"
      ],
      "isMulti": true,
      "explanation": "Đáp án Cộng đồng & FUO AI: BC.\nLựa chọn đúng: B. The fully qualified class name of the Java object. | C. The name of a bean that can be used with method instantiate of class java.beans.Beans to load a JavaBean into memory.",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 183,
      "slideNumber": null,
      "question": "Which syntax is correct for JSP Expressions?",
      "options": [
        {
          "key": "A",
          "text": "< .% expression %. >"
        },
        {
          "key": "B",
          "text": "< .% expression;%. >"
        },
        {
          "key": "C",
          "text": "< .%=expression %. >"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. < .%=expression %. >",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 184,
      "slideNumber": null,
      "question": "Identify the technique that can be used to implement 'sessions' if the client browser does not support cookies. (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "URL Writing"
        },
        {
          "key": "B",
          "text": "Using Http headers."
        },
        {
          "key": "C",
          "text": "Hidden form fields."
        },
        {
          "key": "D",
          "text": "It cannot be done without cookie support."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: A (Cộng đồng: C · FUO AI: A).\nLựa chọn đúng: A. URL Writing",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 185,
      "slideNumber": null,
      "question": "Which directory is legal location for the deployment descriptor file? Note that all paths are shown as from root of the web application directory.",
      "options": [
        {
          "key": "A",
          "text": "\\WEB-lNFxxml"
        },
        {
          "key": "B",
          "text": "IWEB-lNF\\classes"
        },
        {
          "key": "C",
          "text": "WEB-INF"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. WEB-INF",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 187,
      "slideNumber": null,
      "question": "Which statements are BEST describe beanName attribute of < .jsp:useBean beanName=\" . \" /. > Action? (Select 2)",
      "options": [
        {
          "key": "A",
          "text": "The name of a bean that can be used with method instantiate of classjava.beans.Beans to load a JavaBean into memory."
        },
        {
          "key": "B",
          "text": "The scope in which the Java object is accessible-paget request, session or application. The default scope is page."
        },
        {
          "key": "C",
          "text": "The name used to manipulate the Java object with actions <jsp:setProperty > and <jsp:getProperty > . A variable of this name is also declared for use in JSP scripting elements. The name specified here is case sensitive."
        },
        {
          "key": "D",
          "text": "The type of the JavaBean. This can be the same type as the class attributer a superclass of that type or an interface implemented by that type. The default value is the same as for attribute class. A ClassCastException occurs if the Java object is not of the type specified with attribute type."
        },
        {
          "key": "E",
          "text": "The fully qualified class name of the Java object."
        }
      ],
      "correctKeys": [
        "A",
        "E"
      ],
      "isMulti": true,
      "explanation": "Đáp án Cộng đồng & FUO AI: AE.\nLựa chọn đúng: A. The name of a bean that can be used with method instantiate of classjava.beans.Beans to load a JavaBean into memory. | E. The fully qualified class name of the Java object.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 188,
      "slideNumber": null,
      "question": "Which statements are BEST describe name attribute of < jcp: get Property name=. . . > action?",
      "options": [
        {
          "key": "A",
          "text": "The value to assign to a bean property. The value typically is the result of a JSP expression."
        },
        {
          "key": "B",
          "text": "The ID of the JavaBean for which a property (or properties) will be set."
        },
        {
          "key": "C",
          "text": "The name of the property to set. Specifying \"s\" for this attribute causes the JSP to match the request parameters to the properties of the bean."
        },
        {
          "key": "D",
          "text": "If request parameter names do not match bean properw names, this attribute can be used to specify which request parameter should be used to obtain the value for a specific bean property."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. The ID of the JavaBean for which a property (or properties) will be set.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 189,
      "slideNumber": null,
      "question": "What will happen when a servlet makes the following call within its doGet() method?\n```\ngetServletContext().setAttribute(\"userid\", userid);\n```",
      "options": [
        {
          "key": "A",
          "text": "The code in complied error"
        },
        {
          "key": "B",
          "text": "A SessionContextListener will be invoked."
        },
        {
          "key": "C",
          "text": "The userid attribute is placed in application scope."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. The userid attribute is placed in application scope.",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 190,
      "slideNumber": null,
      "question": "Which statements are BEST describe id attribute of < .jsp:useBean id=. .... > Action?",
      "options": [
        {
          "key": "A",
          "text": "The type of the JavaBean. This can be the same type as the class attribute, a superclass of that type or an interface implemented by that type. The default value is the same as for attribute class. A ClassCastException occurs if the Java object is not of the type specified with attribute type."
        },
        {
          "key": "B",
          "text": "The name used to manipulate the Java object with actions <jsp:setProperty. > and <jsp:getProperty. > . A variable of this name is also declared for use in JSP scripting elements. The name specified here is case sensitive."
        },
        {
          "key": "C",
          "text": "The scope in which the Java object is accessible-page, request, session or application. The default scope is page."
        },
        {
          "key": "D",
          "text": "The name of a bean that can be used with method instantiate of class java.beans.Beans to load the bean."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. The name used to manipulate the Java object with actions <jsp:setProperty. > and <jsp:getProperty. > . A variable of this name is also declared for use in JSP scripting elements. The name specified here is case sensitive.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 191,
      "slideNumber": null,
      "question": "Which are the correct lines of code to get information in the following <context-param> tag in the web.xml file? Assume that response and request refer to HttpServletResponse and HttpServletRequest respectively.\n```\n<web-app>\n  <context-param>\n    <param-name>machineName</param-name>\n    <param-value>Server</param-value>\n  </context-param>\n</web-app>\n```",
      "options": [
        {
          "key": "A",
          "text": "request.getParameter(\"machineName\");"
        },
        {
          "key": "B",
          "text": "ServletConfig sc = getServletConfig();"
        },
        {
          "key": "C",
          "text": "ServletContext sc = getServletContext();"
        },
        {
          "key": "D",
          "text": "response.getParameter(\"machineName\");"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. ServletContext sc = getServletContext();",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 192,
      "slideNumber": null,
      "question": "You have to send a pdf file to the client as a response to a request. Which of the following calls will you have to make? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "response.setContentType(\"image/pdf\");"
        },
        {
          "key": "B",
          "text": "response.setType(\"image/pdf\");"
        },
        {
          "key": "C",
          "text": "response.setContentType(\"application/pdf\");"
        },
        {
          "key": "D",
          "text": "response.setType(\"application/pdf\");"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. response.setContentType(\"application/pdf\");",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 193,
      "slideNumber": null,
      "question": "Which statements are BEST describe Action?",
      "options": [
        {
          "key": "A",
          "text": "Sets a property in the specified JavaBean instance. A special feature of this action is automatic matching of request parameters to bean properties of the same name."
        },
        {
          "key": "B",
          "text": "Gets a property in the specified JavaBean instance and converts the result to a string for output in the response."
        },
        {
          "key": "C",
          "text": "Specifies the relative URI path of the resource to include. The resource must be part of the same Web application."
        },
        {
          "key": "D",
          "text": "Dynamically includes another resource in a JSP. As the JSP executes, the referenced resource is included and processed."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Gets a property in the specified JavaBean instance and converts the result to a string for output in the response.",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 194,
      "slideNumber": null,
      "question": "Which is NOT a core component of JSP?",
      "options": [
        {
          "key": "A",
          "text": "actions"
        },
        {
          "key": "B",
          "text": "tag libraries"
        },
        {
          "key": "C",
          "text": "directives"
        },
        {
          "key": "D",
          "text": "scriptlets"
        },
        {
          "key": "E",
          "text": "name of a jsp file"
        }
      ],
      "correctKeys": [
        "E"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: E.\nLựa chọn đúng: E. name of a jsp file",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 195,
      "slideNumber": null,
      "question": "Your web application named 'IFWorks'I uses SpecialMath.class. This is an unbundled class and is not contained in any jar file. Where will you keep this class file?",
      "options": [
        {
          "key": "A",
          "text": "FWorks/WEB-INF/lib/classes"
        },
        {
          "key": "B",
          "text": "FWorks/WEB-INF/classes"
        },
        {
          "key": "C",
          "text": "FWorks/classes"
        },
        {
          "key": "D",
          "text": "FWorks/WEB-INF"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. FWorks/WEB-INF/classes",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 196,
      "slideNumber": null,
      "question": "Consider the following java code:\n```\n//in file Book.java\npackage com.bookstore;\npublic class Book\n{\n    private long isbn;\n    public Book(){ isbn = 0; }\n    public long getIsbn(){ return isbn; }\n    public void setIsbn(long value){ this.isbn = value; }\n}\n```\nCode for browse.jsp:\n```\n<jsp:useBean class=\"com.bookstore.Book\" id=\"newbook\" />\nLINE 1 : <jsp:setProperty name=\"newbook\" property=\"isbn\" value=\"1000\"/>\n```\nWhich of the following statements are correct?",
      "options": [
        {
          "key": "A",
          "text": "It will throw an exception at request time because \"1000\" is a string and isbn is a long."
        },
        {
          "key": "B",
          "text": "The isbn property of newbook will be set to 1000."
        },
        {
          "key": "C",
          "text": "It will not compile."
        },
        {
          "key": "D",
          "text": "The isbn property of newbook will be set to 1000 if 'value' attribute of 'setProperty' tag is given as: value=1000"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. The isbn property of newbook will be set to 1000.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 197,
      "slideNumber": null,
      "question": "Objects with application scope are part of a particular Web application.",
      "options": [
        {
          "key": "A",
          "text": "False"
        },
        {
          "key": "B",
          "text": "True"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. True",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 198,
      "slideNumber": null,
      "question": "How can you explicitly expunge the session object?",
      "options": [
        {
          "key": "A",
          "text": "By calling delete() on session object."
        },
        {
          "key": "B",
          "text": "You cannot. It can only be expunged automatically after session timeout expires."
        },
        {
          "key": "C",
          "text": "By calling finalize() on session object."
        },
        {
          "key": "D",
          "text": "By calling invalidate() on session object."
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. By calling invalidate() on session object.",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 199,
      "slideNumber": null,
      "question": "The sendRedirect method defined in the HttpServlet class is equivalent to invoking the setStatus method the following parameter and a Location header in the URL. Select one correct answer.",
      "options": [
        {
          "key": "A",
          "text": "SC MOVED TEMPORARILY"
        },
        {
          "key": "B",
          "text": "SC NOT FOUND"
        },
        {
          "key": "C",
          "text": "SC INTERNAL SERVER ERROR"
        },
        {
          "key": "D",
          "text": "SC 0K"
        },
        {
          "key": "E",
          "text": "ESC BAD REQUEST"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. SC MOVED TEMPORARILY",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 200,
      "slideNumber": null,
      "question": "Which statements are BEST describe jsp:include Action?",
      "options": [
        {
          "key": "A",
          "text": "Specifies the relative URI path of the resource to include. The resource must be part of the same Web application."
        },
        {
          "key": "B",
          "text": "Specifies that the JSP uses a JavaBean instance. This action specifies the scope of the bean and assigns it an ID that scripting components can use to manipulate the bean."
        },
        {
          "key": "C",
          "text": "Dynamically includes another resource in a JSP. As the JSP executes, the referenced resource is included and processed."
        },
        {
          "key": "D",
          "text": "Forwards request processing to another JSP, servlet or static page. This action terminates the current JSP's execution."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Dynamically includes another resource in a JSP. As the JSP executes, the referenced resource is included and processed.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 201,
      "slideNumber": null,
      "question": "You have to send a gif image to the client as a response to a request. Which of the following calls will you have to make? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "response . set Cont eat Type applicat ion/ bin\") ;"
        },
        {
          "key": "B",
          "text": "response . set 'Cont eat Type (\"image/gif\") ;"
        },
        {
          "key": "C",
          "text": "response . set Type (\"applicat ion/gif\") ;"
        },
        {
          "key": "D",
          "text": "response . set Type ('l image/ gift') ;"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. response . set 'Cont eat Type (\"image/gif\") ;",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 202,
      "slideNumber": null,
      "question": "Which of the following techniques would correctly put a bean into application scope? (You can assume that any necessary page directives are present and correct elsewhere in the JSP page.) (Choose one.)",
      "options": [
        {
          "key": "A",
          "text": "<% AddressBean ab5 = new AddressBean(); pageContext.setAttribute(\"app5\", ab5); %>"
        },
        {
          "key": "B",
          "text": "<jsp:useBean id=\"app1\" class=\"webcert.ch07.examp0701.AddressBean\" scope=\"application\" />"
        },
        {
          "key": "C",
          "text": "<jsp:useBean name=\"app6\" class=\"webcert.ch07.examp0701.AddressBean\" scope=\"application\" />"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. <jsp:useBean id=\"app1\" class=\"webcert.ch07.examp0701.AddressBean\" scope=\"application\" />",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 203,
      "slideNumber": null,
      "question": "The <servlet > element holds declarative information about a servlet. It has only two mandatory subelements- a logical name for the servlet, and < cervlet- ciazc > , the fully qualified Java name without the .class extension.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. True",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 204,
      "slideNumber": null,
      "question": "Complete the statement: element in the Web application deployment descriptor is used to",
      "options": [
        {
          "key": "A",
          "text": "specify the mapping of the name and the TLD file for a tag library."
        },
        {
          "key": "B",
          "text": "specify a URI identifying a tag library."
        },
        {
          "key": "C",
          "text": "specify the parameters needed by a tag library."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. specify the mapping of the name and the TLD file for a tag library.",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 205,
      "slideNumber": null,
      "question": "Which of the following code snippet of HTML document are correct structured?",
      "options": [
        {
          "key": "A",
          "text": "```\n<HTML>\n<HEAD><TITLE>...</TITLE>...</HEAD>\n<BODY ...>\n...\n</BODY>\n</HTML>\n```"
        },
        {
          "key": "B",
          "text": "```\n<HTML>\n<BODY ...>\n<HEAD><TITLE>...</TITLE>...</HEAD>\n...\n</BODY>\n</HTML>\n```"
        },
        {
          "key": "C",
          "text": "```\n<HEAD><TITLE>...</TITLE>...</HEAD>\n<HTML>\n<BODY ...>\n...\n</BODY>\n</HTML>\n```"
        },
        {
          "key": "D",
          "text": "```\n<HTML>\n<HEAD>\n<BODY ...>\n<TITLE>...</TITLE>\n</HEAD>\n</BODY>\n</HTML>\n```"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. <HTML> <HEAD><TITLE>...</TITLE>...</HEAD> <BODY ...> ... </BODY> </HTML>",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 206,
      "slideNumber": null,
      "question": "Which of the following classes define the methods setStatus(...) and sendError(...) used to send an HTTP error back to the browser? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "HttpServletResponse and ServletResponse respectively."
        },
        {
          "key": "B",
          "text": "ServletResponse and HttpServletResponse respectively."
        },
        {
          "key": "C",
          "text": "Both are defined in HttpServletResponse."
        },
        {
          "key": "D",
          "text": "Both are defined in ServletResponse"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Both are defined in HttpServletResponse.",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 207,
      "slideNumber": null,
      "question": "Which of the following are valid implicit variables that are always available for any jsp page? (Choose two)",
      "options": [
        {
          "key": "A",
          "text": "page"
        },
        {
          "key": "B",
          "text": "application"
        },
        {
          "key": "C",
          "text": "session"
        },
        {
          "key": "D",
          "text": "servlet"
        }
      ],
      "correctKeys": [
        "A",
        "B"
      ],
      "isMulti": true,
      "explanation": "Đáp án đã kiểm chứng: A, B (Cộng đồng: BC · FUO AI: AB).\nLựa chọn đúng: A. page | B. application",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 208,
      "slideNumber": null,
      "question": "Which of these is a correct fragment within the web-app element of deployment descriptor? Select one correct answer.",
      "options": [
        {
          "key": "A",
          "text": "<error-page> <error-code>404</error-code> <location>/error.jsp</location> </error-page>"
        },
        {
          "key": "B",
          "text": "<error-page> <exception-type>mypackage.MyException</exception-type> <error-code>404</error-code> <location>/error.jsp</location> </error-page>"
        },
        {
          "key": "C",
          "text": "<error-page> <exception-type>mypackage.MyException</exception-type> <error-code>404</error-code> </error-page>"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. <error-page> <error-code>404</error-code> <location>/error.jsp</location> </error-page>",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 209,
      "slideNumber": null,
      "question": "Identify correct statement about a WAR file. (Choose multiple correct answers)",
      "options": [
        {
          "key": "A",
          "text": "It cannot contain third party jar and class files."
        },
        {
          "key": "B",
          "text": "It cannot be unpackaged by the container."
        },
        {
          "key": "C",
          "text": "It is used by web application developer to deploy the web application in a single unit."
        },
        {
          "key": "D",
          "text": "It contains web components such as servlets as well as EJBs."
        },
        {
          "key": "E",
          "text": "It is an XML document."
        }
      ],
      "correctKeys": [
        "C",
        "D"
      ],
      "isMulti": true,
      "explanation": "Đáp án Cộng đồng & FUO AI: CD.\nLựa chọn đúng: C. It is used by web application developer to deploy the web application in a single unit. | D. It contains web components such as servlets as well as EJBs.",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 210,
      "slideNumber": null,
      "question": "You want to use a bean that is stored in com/enthu/GUl.ser file. Which of following statements correctly defines the tag that accesses the bean?",
      "options": [
        {
          "key": "A",
          "text": "<jsp:useBean id=\"pref\" beanName=\"com.enthu.GUl\" type=\"com.enthu.GUl\"/>"
        },
        {
          "key": "B",
          "text": "<jsp:useBean name=.com/enthu/GUl.ser\""
        },
        {
          "key": "C",
          "text": "<jsp:useBean id=\"pref\" name=\"com.enthu.GUl\" />"
        },
        {
          "key": "D",
          "text": "<jsp:useBean id=\"pref\" type=.com/enthu/GUl.ser\""
        },
        {
          "key": "E",
          "text": "<jsp:useBean class=\"com.enthu.GUl.ser\" />"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. <jsp:useBean id=\"pref\" beanName=\"com.enthu.GUl\" type=\"com.enthu.GUl\"/>",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 211,
      "slideNumber": null,
      "question": "A JSP page will not have access to session implicit variable if:",
      "options": [
        {
          "key": "A",
          "text": "the user's browser does not support URL rewriting."
        },
        {
          "key": "B",
          "text": "the user has closed all his/her browser windows."
        },
        {
          "key": "C",
          "text": "the session attribute of page directive is set to false."
        },
        {
          "key": "D",
          "text": "the request is the first request from the user."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. the session attribute of page directive is set to false.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 212,
      "slideNumber": null,
      "question": "HttpServletRequest.getSession() method returns a object.",
      "options": [
        {
          "key": "A",
          "text": "HttpRequestSession."
        },
        {
          "key": "B",
          "text": "HttpResponseSession."
        },
        {
          "key": "C",
          "text": "HttpServletSession."
        },
        {
          "key": "D",
          "text": "HttpSession."
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. HttpSession.",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 213,
      "slideNumber": null,
      "question": "Which jsp tag is needed to ensure that implicit variable 'exception' is available in the page that is meant to be an error page? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "<%@ page isErrorPage=\"true\"%>"
        },
        {
          "key": "B",
          "text": "<%@errorPage=\"true\"%>"
        },
        {
          "key": "C",
          "text": "<%@isErrorPage=\"true\"%>"
        },
        {
          "key": "D",
          "text": "<%@ page errorPage=\"this\"%>"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. <%@ page isErrorPage=\"true\"%>",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 215,
      "slideNumber": null,
      "question": "Objects with session scope exist for the client's entire browsing session.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. True",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 216,
      "slideNumber": null,
      "question": "JSP let you insert arbitrary code into the servlet's _jspService method (which is called by service).",
      "options": [
        {
          "key": "A",
          "text": "scriptlets"
        },
        {
          "key": "B",
          "text": "declarations"
        },
        {
          "key": "C",
          "text": "expressions"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. scriptlets",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 217,
      "slideNumber": null,
      "question": "Which of the following correctly represents the following JSP statement? Select one correct answer. <%=x%>",
      "options": [
        {
          "key": "A",
          "text": "<jsp:expression=x/>"
        },
        {
          "key": "B",
          "text": "<jsp:expression>x</jsp:expression>"
        },
        {
          "key": "C",
          "text": "<jsp:statement>x</jsp:statement>"
        },
        {
          "key": "D",
          "text": "<jsp:declaration>x</jsp:declaration>"
        },
        {
          "key": "E",
          "text": "<jsp:scriptlet>x</jsp:scriptlet>"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. <jsp:expression>x</jsp:expression>",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 218,
      "slideNumber": null,
      "question": "Which is the name of a deployment descriptor element that contains <error-page> element?",
      "options": [
        {
          "key": "A",
          "text": "<web-app>"
        },
        {
          "key": "B",
          "text": "<servlet>"
        },
        {
          "key": "C",
          "text": "<config>"
        },
        {
          "key": "D",
          "text": "<error-page-config>"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. <web-app>",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 219,
      "slideNumber": null,
      "question": "Which of the following elements defines the properties of an attribute that a tag needs?",
      "options": [
        {
          "key": "A",
          "text": "attribute"
        },
        {
          "key": "B",
          "text": "tag-attribute"
        },
        {
          "key": "C",
          "text": "tag-attribute-type"
        },
        {
          "key": "D",
          "text": "attribute-type"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. attribute",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 220,
      "slideNumber": null,
      "question": "Which JSP directive declares the usage of a tag library in a JSP page?",
      "options": [
        {
          "key": "A",
          "text": "taglib"
        },
        {
          "key": "B",
          "text": "taglibrary"
        },
        {
          "key": "C",
          "text": "tag-lib"
        },
        {
          "key": "D",
          "text": "import"
        },
        {
          "key": "E",
          "text": "page"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. taglib",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 221,
      "slideNumber": null,
      "question": "Which of the following method calls can be used to retrieve an object from the session that was stored using the name \"roleName\"?",
      "options": [
        {
          "key": "A",
          "text": "getObject(\"roleName\");"
        },
        {
          "key": "B",
          "text": "getValue(\"roleName\");"
        },
        {
          "key": "C",
          "text": "get(\"roleName\");"
        },
        {
          "key": "D",
          "text": "getAttribute(\"roleName\");"
        },
        {
          "key": "E",
          "text": "getParameter(\"roleName\");"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. getAttribute(\"roleName\");",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 222,
      "slideNumber": null,
      "question": "To read the cookies that come back from the client, you call getCookies on the HttpServletRequest.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. True",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 223,
      "slideNumber": null,
      "question": "Which of the following methods can be used to add cookies to a servlet response?",
      "options": [
        {
          "key": "A",
          "text": "HttpServletResponse.addCookie(Cookie cookie)"
        },
        {
          "key": "B",
          "text": "ServletResponse.addCookie(Cookie cookie)"
        },
        {
          "key": "C",
          "text": "HttpServletResponse.addCookie(String contents)"
        },
        {
          "key": "D",
          "text": "ServletResponse.addCookie(String contents)"
        },
        {
          "key": "E",
          "text": "ServletResponse.addHeader(String name, String value)"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. HttpServletResponse.addCookie(Cookie cookie)",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 224,
      "slideNumber": null,
      "question": "Which of the following is a valid standard action that can be used by a jsp page to import content generated by another JSP file named another.jsp?",
      "options": [
        {
          "key": "A",
          "text": "< jsp: ir:ciucie page='another. jsp'/ >"
        },
        {
          "key": "B",
          "text": "< isp: import page='another. jsp'/ >"
        },
        {
          "key": "C",
          "text": "< jsp: include fiie='another.jsp'/ >"
        },
        {
          "key": "D",
          "text": "<jsp: import f iie=' another. / >"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. < jsp: ir:ciucie page='another. jsp'/ >",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 225,
      "slideNumber": null,
      "question": "Which method of LoginServlet will be called when the user clicks on \"Submit\" button for the following form? Assume that LoginServlet does not override the service() method of HttpServlet class. (Choose one)\n```\n<html>\n<body>\n<form action=\"/myapp/LoginServlet\" method=\"POST\">\n  <input type=\"text\" name=\"name\">\n  <input type=\"password\" name=\"password\">\n  <input type=\"submit\" value=\"Submit\">\n</form>\n</body>\n</html>\n```",
      "options": [
        {
          "key": "A",
          "text": "doPost(HttpServletRequest, HttpServletResponse);"
        },
        {
          "key": "B",
          "text": "servicePost(HttpServletRequest, HttpServletResponse);"
        },
        {
          "key": "C",
          "text": "post(HttpServletRequest, HttpServletResponse);"
        },
        {
          "key": "D",
          "text": "doPUT(HttpServletRequest, HttpServletResponse);"
        },
        {
          "key": "E",
          "text": "doPOST(HttpServletRequest, HttpServletResponse);"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. doPost(HttpServletRequest, HttpServletResponse);",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 226,
      "slideNumber": null,
      "question": "Given the following JSP and tag handler code, what is the result of accessing the JSP?\n\nJSP Page Source\n```\n<html>\n<body>\n  START\n  <br>\n  <%@taglib uri=\"test_taglib\" prefix=\"myTag\"%>\n  <myTag:TestTag/>\n  <br>\n  END\n</body>\n</html>\n```\nTag Handler Code for <myTag:TestTag />\n```\npackage examples;\nimport javax.servlet.jsp.*;\nimport javax.servlet.jsp.tagext.*;\n\npublic class TestTag extends TagSupport {\n    public int doStartTag() throws JspException {\n        return EVAL_PAGE;\n    }\n    public int doEndTag() throws JspException {\n        return SKIP_PAGE;\n    }\n}\n```",
      "options": [
        {
          "key": "A",
          "text": "START"
        },
        {
          "key": "B",
          "text": "START END"
        },
        {
          "key": "C",
          "text": "A translation error occurs"
        },
        {
          "key": "D",
          "text": "A runtime exception is thrown"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: A (Cộng đồng: F · FUO AI: A).\nLựa chọn đúng: A. START",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 227,
      "slideNumber": null,
      "question": "Which of the following is INCORRECT statement about implicit objects and scope?",
      "options": [
        {
          "key": "A",
          "text": "application can't be used to access other web application resources."
        },
        {
          "key": "B",
          "text": "page is of type java.lang.Object."
        },
        {
          "key": "C",
          "text": "PageContext.findAttribute() can't be used to return a session scope attribute if an attribute of the same name exists in page scope."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. application can't be used to access other web application resources.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 228,
      "slideNumber": null,
      "question": "What is the implication of using the HTTP GET method for a form submission? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "The parameters will be appended to the URL as a query string."
        },
        {
          "key": "B",
          "text": "You cannot send multiple values for one parameter to the server."
        },
        {
          "key": "C",
          "text": "You can only reply with the HEADER information in the response."
        },
        {
          "key": "D",
          "text": "None of the others"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. The parameters will be appended to the URL as a query string.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 230,
      "slideNumber": null,
      "question": "GET requests and POST requests can both be used to send form data to a web server.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. True",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 231,
      "slideNumber": null,
      "question": "Consider the contents of 2 jsp files:\n```\n<!-- In File : test.jsp -->\n<html>\n<body>\n<% String s = \"Hello\"; %>\n//1 insert LOC here.\n<%=s%>\n</body>\n</html>\n<!-- In File : test2.jsp -->\n<% s = s+\" world\"; %>\n```\nWhat can be inserted at //1 so that it prints \"Hello world\" when test.jsp is requested?",
      "options": [
        {
          "key": "A",
          "text": "<%@ include file=\"test2.jsp\"%>"
        },
        {
          "key": "B",
          "text": "<jsp:directive.include page=\"test2.jsp\"/>"
        },
        {
          "key": "C",
          "text": "<jsp:include page=\"test2.jsp\"/>"
        },
        {
          "key": "D",
          "text": "<%! include file=\"test2.jsp\"%>"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. <%@ include file=\"test2.jsp\"%>",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 232,
      "slideNumber": null,
      "question": "Which statements are BEST describe prefix attribute of < taglib prefix= . . directive of JSP file?",
      "options": [
        {
          "key": "A",
          "text": "Specifies the relative or absolute URI of the tag library descriptor."
        },
        {
          "key": "B",
          "text": "Specifies the required prefix that distinguishes custom tags from built-in tags. The prefix names jsp, jspx, java, javax, servlet, sun and sunw are reserved."
        },
        {
          "key": "C",
          "text": "Allows programmers to include their own new tags in the form of tag libraries. These libraries can be used to encapsulate functionality and simplify the coding of a JSP."
        },
        {
          "key": "D",
          "text": "The scripting language used in the JSP. Currently, the only valid value for this attribute is java."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Specifies the required prefix that distinguishes custom tags from built-in tags. The prefix names jsp, jspx, java, javax, servlet, sun and sunw are reserved.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 233,
      "slideNumber": null,
      "question": "A parameter is defined in a > element of the deployment descriptor for a web application. Which of the following statements is correct?",
      "options": [
        {
          "key": "A",
          "text": "It is accessible to all the servlets of the webapp."
        },
        {
          "key": "B",
          "text": "It is accessible to all the servlets of all the webapps of the container."
        },
        {
          "key": "C",
          "text": "It is accessible only to the servlet it is defined for."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. It is accessible to all the servlets of the webapp.",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 234,
      "slideNumber": null,
      "question": "Which of the following is a sensible way of sending an error page to the client in case of a business exception that extends from java.lang.Exception? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "Catch the exception, wrap it into ServletException and define the 'business exception to error-page' mapping in web.xml"
        },
        {
          "key": "B",
          "text": "Don't catch the exception and define the 'exception to error-page' mapping in web.xml"
        },
        {
          "key": "C",
          "text": "Don't do anything, the servlet container will automatically send a default error page."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Catch the exception, wrap it into ServletException and define the 'business exception to error-page' mapping in web.xml",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 235,
      "slideNumber": null,
      "question": "Which statements are BEST describe jsp:setProperty Action?",
      "options": [
        {
          "key": "A",
          "text": "Specifies the relative URI path of the resource to include. The resource must be part of the same Web application."
        },
        {
          "key": "B",
          "text": "Dynamically includes another resource in a JSP. As the JSP executes, the referenced resource is included and processed."
        },
        {
          "key": "C",
          "text": "Sets a property in the specified JavaBean instance. A special feature of this action is automatic matching of request parameters to bean properties of the same name."
        },
        {
          "key": "D",
          "text": "Gets a property in the specified JavaBean instance and converts the result to a string for output in the response."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Sets a property in the specified JavaBean instance. A special feature of this action is automatic matching of request parameters to bean properties of the same name.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 236,
      "slideNumber": null,
      "question": "The path in a URL typically specifies a resource's exact location on the server.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. True",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 237,
      "slideNumber": null,
      "question": "Which of the following are potentially illegal lines of JSP source?",
      "options": [
        {
          "key": "A",
          "text": "```\n<jsp:useBean id=\"beanName1\" class=\"a.b.MyBean\" type=\"a.b.MyInterface\" />\n```"
        },
        {
          "key": "B",
          "text": "```\n<% String className = \"a.b.MyBean\"; %>\n<jsp:useBean id=\"beanName2\" class=\"<%=className%>\" />\n```"
        },
        {
          "key": "C",
          "text": "```\n<% String beanName = \"beanName3\"; %>\n<jsp:useBean id=\"<%=beanName3%>\" class=\"a.b.MyBean\" />\n```"
        },
        {
          "key": "D",
          "text": "```\n<% String propName = \"soleProp\"; %>\n<jsp:getProperty name=\"beanName1\" property=\"<%=propName%>\" />\n```"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. <% String beanName = \"beanName3\"; %> <jsp:useBean id=\"<%=beanName3%>\" class=\"a.b.MyBean\" />",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 238,
      "slideNumber": null,
      "question": "Which of the following JSP variable is not available within a JSP expression? Select one correct answer",
      "options": [
        {
          "key": "A",
          "text": "out"
        },
        {
          "key": "B",
          "text": "session"
        },
        {
          "key": "C",
          "text": "request"
        },
        {
          "key": "D",
          "text": "response"
        },
        {
          "key": "E",
          "text": "httpsession"
        },
        {
          "key": "F",
          "text": "page"
        }
      ],
      "correctKeys": [
        "E"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: E.\nLựa chọn đúng: E. httpsession",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 239,
      "slideNumber": null,
      "question": "Which of the following statement is a correct JSP directive? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "<%@ taglib uri=\"http://www.abc.com/tags/util\" prefix=\"util\" %>"
        },
        {
          "key": "B",
          "text": "<%! page import='java.util.*' %>"
        },
        {
          "key": "C",
          "text": "<% include file=\"/copyright.html\"%>"
        },
        {
          "key": "D",
          "text": "<%! taglib uri=\"http://www.abc.com/tags/util\" prefix=\"util\" %>"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. <%@ taglib uri=\"http://www.abc.com/tags/util\" prefix=\"util\" %>",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 240,
      "slideNumber": null,
      "question": "Which of the following elements are used for error handling and are child elements of <web-app> of a deployment descriptor?",
      "options": [
        {
          "key": "A",
          "text": "<error>"
        },
        {
          "key": "B",
          "text": "<error-page>"
        },
        {
          "key": "C",
          "text": "<error_page>"
        },
        {
          "key": "D",
          "text": "<error-location>"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. <error-page>",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 241,
      "slideNumber": null,
      "question": "What would be the best directory in which to store a supporting JAR file for a web application? Note that in the list below, all directories begin from the context root.",
      "options": [
        {
          "key": "A",
          "text": "\\WEB-INF"
        },
        {
          "key": "B",
          "text": "IWEB-lNF\\classes"
        },
        {
          "key": "C",
          "text": "\\jars"
        },
        {
          "key": "D",
          "text": "\\WEB-lNFMib"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. \\WEB-lNFMib",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 242,
      "slideNumber": null,
      "question": "For JSP scopes of request and page, what type of object is used to store the attributes?",
      "options": [
        {
          "key": "A",
          "text": "HttpServletRequest and ServletContext respectively."
        },
        {
          "key": "B",
          "text": "ServletRequest and ServletConfig respectively."
        },
        {
          "key": "C",
          "text": "ServletRequest and PageContext respectively."
        },
        {
          "key": "D",
          "text": "HttpServletRequest and PageContext respectively."
        },
        {
          "key": "E",
          "text": "ServletConfig for both."
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. HttpServletRequest and PageContext respectively.",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 243,
      "slideNumber": null,
      "question": "Which of the following is example of JSP directive? Select one correct answer.",
      "options": [
        {
          "key": "A",
          "text": "include"
        },
        {
          "key": "B",
          "text": "exclude"
        },
        {
          "key": "C",
          "text": "import"
        },
        {
          "key": "D",
          "text": "taglibrary"
        },
        {
          "key": "E",
          "text": "servlet"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. include",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 244,
      "slideNumber": null,
      "question": "Which method of LoginServlet will be called when the user clicks on \"Submit\" button for the following form? Assume that LoginServlet does not override the service() method of HttpServlet class.\n```\n<html>\n<body>\n<form action=\"/myapp/LoginServlet\" method=\"POST\">\n  <input type=\"text\" name=\"name\">\n  <input type=\"password\" name=\"password\">\n  <input type=\"submit\" value=\"Submit\">\n</form>\n</body>\n</html>\n```",
      "options": [
        {
          "key": "A",
          "text": "doPUT(HttpServletRequest, HttpServletResponse);"
        },
        {
          "key": "B",
          "text": "servicePost(HttpServletRequest, HttpServletResponse);"
        },
        {
          "key": "C",
          "text": "post(HttpServletRequest, HttpServletResponse);"
        },
        {
          "key": "D",
          "text": "doPost(HttpServletRequest, HttpServletResponse);"
        },
        {
          "key": "E",
          "text": "doPOST(HttpServletRequest, HttpServletResponse);"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. doPost(HttpServletRequest, HttpServletResponse);",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 245,
      "slideNumber": null,
      "question": "Which of the statements regarding the following code are correct?\n```\npublic void doPost(HttpServletRequest req, HttpServletResponse res)\n    throws IOException, ServletException\n{\n    res.getWriter().print(\"Hello \");\n    RequestDispatcher rd = getServletContext().getRequestDispatcher(\"/test.jsp\");\n    rd.include(req, res);\n    res.getWriter().print(\"World\");\n}\n```",
      "options": [
        {
          "key": "A",
          "text": "Only \"Hello\" will be a part of the output."
        },
        {
          "key": "B",
          "text": "Only \"World\" will be a part of the output."
        },
        {
          "key": "C",
          "text": "\"Hello\" and \"World\" both will be a part of the output."
        },
        {
          "key": "D",
          "text": "Neither will be a part of the output."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. \"Hello\" and \"World\" both will be a part of the output.",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 246,
      "slideNumber": null,
      "question": "Which of the following statement correctly store an object associated with a name at a place\nwhere all the servlets/jsps of the same webapp participating in a session can access it? Assume\nthat request, response, name, value etc. are references to objects of appropriate types.(Choose\none)",
      "options": [
        {
          "key": "A",
          "text": "request.getSession().setAttribute(name, value);"
        },
        {
          "key": "B",
          "text": "response.setAttribute(name, value);"
        },
        {
          "key": "C",
          "text": "request.setAttribute(name, value);"
        },
        {
          "key": "D",
          "text": "request.setParameter(name, value)"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. request.getSession().setAttribute(name, value);",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 247,
      "slideNumber": null,
      "question": "What is the consequence of attempting to access the following JSP page?\n```\n<html>\n<body>\n<%!\n  public void _jspService(HttpServletRequest request, HttpServletResponse response) {\n    out.write(\"A\");\n  }\n%>\n<% out.write(\"B\"); %>\n</body>\n</html>\n```",
      "options": [
        {
          "key": "A",
          "text": "Duplicate method compilation error."
        },
        {
          "key": "B",
          "text": "\"A\" is output to the response."
        },
        {
          "key": "C",
          "text": "\"B\" is output to the response."
        },
        {
          "key": "D",
          "text": "\"A\" is output to the response before \"B\"."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Duplicate method compilation error.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 248,
      "slideNumber": null,
      "question": "Servlet Container calls the init method on a servlet instance",
      "options": [
        {
          "key": "A",
          "text": "Only once in the life time of the servlet instance."
        },
        {
          "key": "B",
          "text": "For each request to the servlet."
        },
        {
          "key": "C",
          "text": "If the request is from the user whose session has expired."
        },
        {
          "key": "D",
          "text": "For each request to the sennet that causes a new thread to be created."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Only once in the life time of the servlet instance.",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 249,
      "slideNumber": null,
      "question": "Which of the following is NOT a standard technique for providing a sense of \"state\" to HTTP?",
      "options": [
        {
          "key": "A",
          "text": "Cookies"
        },
        {
          "key": "B",
          "text": "URL rewriting"
        },
        {
          "key": "C",
          "text": "SSL Sessions"
        },
        {
          "key": "D",
          "text": "HTTP is already a stateful protocol."
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. HTTP is already a stateful protocol.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 250,
      "slideNumber": null,
      "question": "The two most common HTTP requests are get and post.",
      "options": [
        {
          "key": "A",
          "text": "True"
        },
        {
          "key": "B",
          "text": "False"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. True",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 251,
      "slideNumber": null,
      "question": "Given the following JSP and tag handler code, what is the result of accessing the JSP?\n\nJSP Page Source\n```\n<html>\n<body>\n  START\n  <br>\n  <%@taglib uri=\"test_taglib\" prefix=\"myTag\"%>\n  <myTag:TestTag/>\n  <br>\n  END\n</body>\n</html>\n```\nTag Handler Code for <myTag:TestTag />\n```\npackage examples;\nimport javax.servlet.jsp.*;\nimport javax.servlet.jsp.tagext.*;\n\npublic class TestTag extends TagSupport {\n    public int doStartTag() throws JspException {\n        return EVAL_PAGE;\n    }\n    public int doEndTag() throws JspException {\n        return SKIP_PAGE;\n    }\n}\n```\nAssume *.tld and web.xml files are correct.",
      "options": [
        {
          "key": "A",
          "text": "START END"
        },
        {
          "key": "B",
          "text": "START"
        },
        {
          "key": "C",
          "text": "END"
        },
        {
          "key": "D",
          "text": "END START"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. START",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 252,
      "slideNumber": null,
      "question": "A JSP lets you define methods or fields that get inserted into the main body of the servlet class (outside of the _jspService method that is called by service to process the request).",
      "options": [
        {
          "key": "A",
          "text": "declaration"
        },
        {
          "key": "B",
          "text": "scriptlet"
        },
        {
          "key": "C",
          "text": "expression"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. declaration",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 253,
      "slideNumber": null,
      "question": "Which is NOT the main type of JSP constructs that you embed in a page?",
      "options": [
        {
          "key": "A",
          "text": "directives"
        },
        {
          "key": "B",
          "text": "actions"
        },
        {
          "key": "C",
          "text": "scripting elements"
        },
        {
          "key": "D",
          "text": "HTML code"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. HTML code",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 254,
      "slideNumber": null,
      "question": "Which of the following method calls can be used to retrieve an object from the session that was stored using the name \"userid\"?",
      "options": [
        {
          "key": "A",
          "text": "getObject(\"userid\");"
        },
        {
          "key": "B",
          "text": "getValue(\"userid\");"
        },
        {
          "key": "C",
          "text": "get(\"userid\");"
        },
        {
          "key": "D",
          "text": "getAttribute(\"userid\");"
        },
        {
          "key": "E",
          "text": "getParameter(\"userid\");"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. getAttribute(\"userid\");",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 255,
      "slideNumber": null,
      "question": "The page directive is used to convey information about the page to JSP container. Which statement is legal page directive. Select one correct statement",
      "options": [
        {
          "key": "A",
          "text": "< page page\" %>"
        },
        {
          "key": "B",
          "text": "<%@ page page\" %>"
        },
        {
          "key": "C",
          "text": "<%@ page . jspn >"
        },
        {
          "key": "D",
          "text": "<%@ page is ThreaciSaEe=t rue >"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. <%@ page page\" %>",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 256,
      "slideNumber": null,
      "question": "Identify the line of code that is doing the same task as ticket . get? rice { )",
      "options": [
        {
          "key": "A",
          "text": "< icket\" property=\"price >"
        },
        {
          "key": "B",
          "text": "< ticket . price %>"
        },
        {
          "key": "C",
          "text": "<% t icket . get? rice ( ) %>"
        },
        {
          "key": "D",
          "text": "<% = ticket . get? rice() ; %>"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. < icket\" property=\"price >",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 257,
      "slideNumber": null,
      "question": "Which of the following statements are correct about the status of the Http response? Select the one correct answer",
      "options": [
        {
          "key": "A",
          "text": "A status of 200 to 299 signifies that the request was successful."
        },
        {
          "key": "B",
          "text": "A status of 300 to 399 is informational messages."
        },
        {
          "key": "C",
          "text": "A status of 400 to 499 indicates an error in the server"
        },
        {
          "key": "D",
          "text": "A status of 500 to 599 indicates an error in the client."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. A status of 200 to 299 signifies that the request was successful.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 258,
      "slideNumber": null,
      "question": "Which interface and method should be used to retrieve a servlet initialization parameter value? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "ServletConfig : getInitParameter(String name)"
        },
        {
          "key": "B",
          "text": "ServletConfig : getParameter(String name)"
        },
        {
          "key": "C",
          "text": "ServletContext : getInitParameter(String name))"
        },
        {
          "key": "D",
          "text": "ServletConfig : getlnitParameterNames(String name)"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. ServletConfig : getInitParameter(String name)",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 259,
      "slideNumber": null,
      "question": "Consider the following doGet method code of a servlet:\n```\npublic void doGet(HttpServletRequest req, HttpServletResponse res) {\n    String command = req.getParameter(\"command\");\n    if (\"remove\".equals(command)) {\n        HttpSession session = req.getSession();\n        // insert code here\n    }\n}\n```\nIf the command equals remove, you want to unbind an attribute named \"user\" from the session. Which of the following option will you use? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "session.unbind(\"user\");"
        },
        {
          "key": "B",
          "text": "session.remove(\"user\");"
        },
        {
          "key": "C",
          "text": "session.deleteAttribute(\"user\");"
        },
        {
          "key": "D",
          "text": "session.removeAttribute(\"user\");"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. session.removeAttribute(\"user\");",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 260,
      "slideNumber": null,
      "question": "Which is NOT a technique that can be used to implement 'sessions' if the client browser does not support cookies?",
      "options": [
        {
          "key": "A",
          "text": "Using Http headers."
        },
        {
          "key": "B",
          "text": "Using https protocol."
        },
        {
          "key": "C",
          "text": "Hidden form fields."
        },
        {
          "key": "D",
          "text": "URL rewriting"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Using https protocol.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 261,
      "slideNumber": null,
      "question": "Which of the following is NOT a technique used for maintaining sessions?",
      "options": [
        {
          "key": "A",
          "text": "HttpSession objects"
        },
        {
          "key": "B",
          "text": "URL rewriting"
        },
        {
          "key": "C",
          "text": "session.invalidate();"
        },
        {
          "key": "D",
          "text": "Hidden form fields"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. session.invalidate();",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 262,
      "slideNumber": null,
      "question": "Which of the following statements are correct about the status code = 404 of the Http response?",
      "options": [
        {
          "key": "A",
          "text": "Indicates that the requested resource is not available."
        },
        {
          "key": "B",
          "text": "Indicates that the request requires HTTP authentication."
        },
        {
          "key": "C",
          "text": "Indicates an error inside the HTTP server which prevented it from fulfilling the request."
        },
        {
          "key": "D",
          "text": "Indicates that the HTTP server is temporarily overloaded, and unable to handle the request."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Indicates that the requested resource is not available.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 263,
      "slideNumber": null,
      "question": "Which of the following statements are correct about the status code = 401 of the Http response?",
      "options": [
        {
          "key": "A",
          "text": "Indicates that the requested resource is not available."
        },
        {
          "key": "B",
          "text": "Indicates that the request requires HTTP authentication."
        },
        {
          "key": "C",
          "text": "Indicates an error inside the HTTP server which prevented it from fulfilling the request."
        },
        {
          "key": "D",
          "text": "Indicates that the HTTP server is temporarily overloaded, and unable to handle the request."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Indicates that the request requires HTTP authentication.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 264,
      "slideNumber": null,
      "question": "How to create a choice list where users are allowed to choose only one item?",
      "options": [
        {
          "key": "A",
          "text": "By using the radio input type"
        },
        {
          "key": "B",
          "text": "By using the checkbox input type"
        },
        {
          "key": "C",
          "text": "By using the hidden input type"
        },
        {
          "key": "D",
          "text": "By using the text input type"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. By using the radio input type",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 265,
      "slideNumber": null,
      "question": "What is the purpose of an HTML form in web development?",
      "options": [
        {
          "key": "A",
          "text": "To define the structure of a webpage"
        },
        {
          "key": "B",
          "text": "To style web content"
        },
        {
          "key": "C",
          "text": "To collect user input"
        },
        {
          "key": "D",
          "text": "To display images"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. To collect user input",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 266,
      "slideNumber": null,
      "question": "Assess the role of \"servlet-mapping\" in the \"web.xml\" file. What does this element define?",
      "options": [
        {
          "key": "A",
          "text": "Configuring error pages for specific servlets"
        },
        {
          "key": "B",
          "text": "Specifying how URLs should be routed to specific servlets"
        },
        {
          "key": "C",
          "text": "Managing session attributes in servlets"
        },
        {
          "key": "D",
          "text": "Defining request parameters for the servlets"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Specifying how URLs should be routed to specific servlets",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 267,
      "slideNumber": null,
      "question": "Which Java class is used to create a servlet in a Java Webserver?",
      "options": [
        {
          "key": "A",
          "text": "HttpServlet"
        },
        {
          "key": "B",
          "text": "JavaServlet"
        },
        {
          "key": "C",
          "text": "WebServlet"
        },
        {
          "key": "D",
          "text": "ServletClass"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. HttpServlet",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 268,
      "slideNumber": null,
      "question": "What is the syntax for defining a context parameter in a deployment descriptor?",
      "options": [
        {
          "key": "A",
          "text": "```\n<context-param>\n  <param-name>name</param-name>\n  <param-value>value</param-value>\n</context-param>\n```"
        },
        {
          "key": "B",
          "text": "```\n<context-param>\n  <name>name</name>\n  <value>value</value>\n</context-param>\n```"
        },
        {
          "key": "C",
          "text": "```\n<parameter>\n  <name>name</name>\n  <value>value</value>\n</parameter>\n```"
        },
        {
          "key": "D",
          "text": "```\n<Context-param>\n  <Param-name>name</Param-name>\n  <Param-value>value</Param-value>\n</Context-param>\n```"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. <context-param> <param-name>name</param-name> <param-value>value</param-value> </context-param>",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 269,
      "slideNumber": null,
      "question": "What does the <error-page> tag in the deployment descriptor signify?",
      "options": [
        {
          "key": "A",
          "text": "Set custom error pages for specific exceptions"
        },
        {
          "key": "B",
          "text": "Define error codes for server-side exceptions"
        },
        {
          "key": "C",
          "text": "Configure error log settings"
        },
        {
          "key": "D",
          "text": "Redirect errors to the homepage"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Set custom error pages for specific exceptions",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 270,
      "slideNumber": null,
      "question": "What objects are received when a servlet accepts a call from the client?",
      "options": [
        {
          "key": "A",
          "text": "HttpServletRequest and HttpServletResponse"
        },
        {
          "key": "B",
          "text": "ServletRequest and ServletResponse"
        },
        {
          "key": "C",
          "text": "ServletContext and ServletConfig"
        },
        {
          "key": "D",
          "text": "ServletRegistration and ServletRequestListener"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. HttpServletRequest and HttpServletResponse",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 271,
      "slideNumber": null,
      "question": "During the servlet life cycle in a Java web application, when is the service() method called by the servlet container?",
      "options": [
        {
          "key": "A",
          "text": "Only during the initialization phase."
        },
        {
          "key": "B",
          "text": "Only during the destruction phase."
        },
        {
          "key": "C",
          "text": "Whenever a client sends a request to the servlet."
        },
        {
          "key": "D",
          "text": "After the init() method and before the destroy() method."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Whenever a client sends a request to the servlet.",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 272,
      "slideNumber": null,
      "question": "Which structure of Status Line in Response Message is",
      "options": [
        {
          "key": "A",
          "text": "[HTTP Version] [Response Code] [Status]"
        },
        {
          "key": "B",
          "text": "[HTTP Method] [Protocol Version] [Requested Resource forming URI]"
        },
        {
          "key": "C",
          "text": "[HTTP Version] [Response Code] [Http Method]"
        },
        {
          "key": "D",
          "text": "HTTP Version] [Protocol Code] [Http Method]"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. [HTTP Version] [Response Code] [Status]",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 273,
      "slideNumber": null,
      "question": "What is the purpose of request attributes in servlet collaboration?",
      "options": [
        {
          "key": "A",
          "text": "To store data that can be shared across multiple servlets within the same request."
        },
        {
          "key": "B",
          "text": "To store data that can be shared only within the same servlet."
        },
        {
          "key": "C",
          "text": "To store data that can be shared across multiple servlets in the same session."
        },
        {
          "key": "D",
          "text": "To store data that can be accessed by any servlet in the application."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. To store data that can be shared across multiple servlets within the same request.",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 274,
      "slideNumber": null,
      "question": "What are tasks for define a custom JSP tag",
      "options": [
        {
          "key": "A",
          "text": "Create the Tag handler class"
        },
        {
          "key": "B",
          "text": "Create the Tag Library Descriptor (TLD) file and define tags."
        },
        {
          "key": "C",
          "text": "Create the JSP file that uses the Custom tag defined in the TLD file"
        },
        {
          "key": "D",
          "text": "Create the JSP file that uses the JSTL tag"
        }
      ],
      "correctKeys": [
        "A",
        "B",
        "C"
      ],
      "isMulti": true,
      "explanation": "Đáp án Cộng đồng & FUO AI: ABC.\nLựa chọn đúng: A. Create the Tag handler class | B. Create the Tag Library Descriptor (TLD) file and define tags. | C. Create the JSP file that uses the Custom tag defined in the TLD file",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 275,
      "slideNumber": null,
      "question": "How can you include another JSP file within a JSP page?",
      "options": [
        {
          "key": "A",
          "text": "Using the <import> tag."
        },
        {
          "key": "B",
          "text": "Using the <%@ include %> directive."
        },
        {
          "key": "C",
          "text": "Using the <link> tag."
        },
        {
          "key": "D",
          "text": "Using the <external> tag."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Using the <%@ include %> directive.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 276,
      "slideNumber": null,
      "question": "What is the main purpose of JSP in a web application?",
      "options": [
        {
          "key": "A",
          "text": "To define the structure and layout of a web page."
        },
        {
          "key": "B",
          "text": "To handle server-side logic and generate dynamic content."
        },
        {
          "key": "C",
          "text": "To execute client-side JavaScript code."
        },
        {
          "key": "D",
          "text": "To define the styles and presentation of a web page."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. To handle server-side logic and generate dynamic content.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 277,
      "slideNumber": null,
      "question": "What is the default behavior of a JSP page if an exception is thrown and not caught?",
      "options": [
        {
          "key": "A",
          "text": "The server returns a blank page"
        },
        {
          "key": "B",
          "text": "The server returns a 404 error"
        },
        {
          "key": "C",
          "text": "The server redirects to the configured error page."
        },
        {
          "key": "D",
          "text": "The server displays the exception details on the page."
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. The server displays the exception details on the page.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 278,
      "slideNumber": null,
      "question": "Where should an java web application handle error?",
      "options": [
        {
          "key": "A",
          "text": "Define error page for each JSP page by <%@ page errorPage=\" . . . \" %>"
        },
        {
          "key": "B",
          "text": "Define error page for the whole application in web.xml"
        },
        {
          "key": "C",
          "text": "Catching error and exception in coding and testing"
        },
        {
          "key": "D",
          "text": "Catching runtime error and exception"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Define error page for the whole application in web.xml",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 279,
      "slideNumber": null,
      "question": "Which of the following files is commonly used to configure database connections and other environment-specific settings in a Java web application during deployment?",
      "options": [
        {
          "key": "A",
          "text": "web.xml"
        },
        {
          "key": "B",
          "text": "context.xml"
        },
        {
          "key": "C",
          "text": "index.html"
        },
        {
          "key": "D",
          "text": "META-INF/MANIFEST.MF"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. context.xml",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 280,
      "slideNumber": null,
      "question": "What's the purpose of the close method when handling JDBC resources?",
      "options": [
        {
          "key": "A",
          "text": "resultSet.close(); statement.close(); connection.close();"
        },
        {
          "key": "B",
          "text": "connection.release(); statement.release(); resultSet.release();"
        },
        {
          "key": "C",
          "text": "connection.end(); statement.end(); resultSet.end();"
        },
        {
          "key": "D",
          "text": "resultSet.close(); statement.end(); connection.close();"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. resultSet.close(); statement.close(); connection.close();",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 281,
      "slideNumber": null,
      "question": "What method is used to execute a SQL query and obtain the result set?",
      "options": [
        {
          "key": "A",
          "text": "int result = stat ement . executeUpaate (\"SEZECT FROM table _ name\") ;"
        },
        {
          "key": "B",
          "text": "Result Set result Set = st ement . execute (\"SELECT FROM table _ name\") ;"
        },
        {
          "key": "C",
          "text": "Result Set result Set = statement . executeQuery (\"SELECT FROM t able _ name\") ;"
        },
        {
          "key": "D",
          "text": "boolean result = stat e:nent . execute (\"SELECT FROM table _ name\") ;"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Result Set result Set = statement . executeQuery (\"SELECT FROM t able _ name\") ;",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 282,
      "slideNumber": null,
      "question": "In JDBC, what is the effect of calling setAutoCommit(false) on a Connection object?",
      "options": [
        {
          "key": "A",
          "text": "It disables the transaction management feature."
        },
        {
          "key": "B",
          "text": "It turns on auto-commit mode for each SQL statement."
        },
        {
          "key": "C",
          "text": "It requires each transaction to be committed or rolled back manually."
        },
        {
          "key": "D",
          "text": "It automatically rolls back transactions if an error occurs."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: C (Cộng đồng: C · FUO AI: không có).\nLựa chọn đúng: C. It requires each transaction to be committed or rolled back manually.",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 283,
      "slideNumber": null,
      "question": "How does the MVC architecture help in scaling an application?",
      "options": [
        {
          "key": "A",
          "text": "By allowing separate scaling of user interface and data processing components."
        },
        {
          "key": "B",
          "text": "By minimizing the amount of data stored in a database."
        },
        {
          "key": "C",
          "text": "By consolidating all logic into a single component."
        },
        {
          "key": "D",
          "text": "By enforcing stateful interactions between components."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: A (Cộng đồng: A · FUO AI: không có).\nLựa chọn đúng: A. By allowing separate scaling of user interface and data processing components.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 284,
      "slideNumber": null,
      "question": "Your JSP MVC application involves handling user authentication and authorization. Explain how you would design the Controller to manage user access rights and ensure secure navigation through different views.",
      "options": [
        {
          "key": "A",
          "text": "Implement authentication and authorization logic directly within the JSP pages."
        },
        {
          "key": "B",
          "text": "Utilize servlet filters for handling user authentication."
        },
        {
          "key": "C",
          "text": "Delegate authentication and authorization to a dedicated SecurityManager class in the Model."
        },
        {
          "key": "D",
          "text": "Use JavaScript to handle user authentication on the client side."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: B (Cộng đồng: B · FUO AI: không có).\nLựa chọn đúng: B. Utilize servlet filters for handling user authentication.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 285,
      "slideNumber": null,
      "question": "In a JSP MVC application, you are tasked with implementing a registration form where user data needs to be validated on the client side before submission. Explain how you would structure the MVC components to achieve this, and what role each component plays.",
      "options": [
        {
          "key": "A",
          "text": "Place client-side validation logic in the Controller."
        },
        {
          "key": "B",
          "text": "Implement client-side validation in the View using JavaScript."
        },
        {
          "key": "C",
          "text": "Create a separate Validator class in the Model to handle client-side validation."
        },
        {
          "key": "D",
          "text": "Use a custom tag library for client-side validation."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: B (Cộng đồng: B · FUO AI: không có).\nLựa chọn đúng: B. Implement client-side validation in the View using JavaScript.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 286,
      "slideNumber": null,
      "question": "What are differences between MVCI and MVC2?",
      "options": [
        {
          "key": "A",
          "text": "They differ in the way the controller is organized"
        },
        {
          "key": "B",
          "text": "They differ in the scale of the application"
        },
        {
          "key": "C",
          "text": "MVCI is page-centric where as MVC2 is controller-centric"
        },
        {
          "key": "D",
          "text": "They differ in the complexity of the application"
        }
      ],
      "correctKeys": [
        "A",
        "C"
      ],
      "isMulti": true,
      "explanation": "Đáp án đã kiểm chứng: A, C (Cộng đồng: AC · FUO AI: không có).\nLựa chọn đúng: A. They differ in the way the controller is organized | C. MVCI is page-centric where as MVC2 is controller-centric",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 287,
      "slideNumber": null,
      "question": "How would you synthesize the multi-tier architecture principles to enhance data security in an application that is heavily reliant on user-generated content?",
      "options": [
        {
          "key": "A",
          "text": "Place all user-generated content in a single tier to simplify security protocols."
        },
        {
          "key": "B",
          "text": "Distribute user-generated content across multiple tiers, applying appropriate security measures at each level."
        },
        {
          "key": "C",
          "text": "Centralize all business logic in the presentation tier to control access to user-generated content."
        },
        {
          "key": "D",
          "text": "Utilize a fiat architecture to avoid the complexity of multi-tier security."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: B (Cộng đồng: B · FUO AI: không có).\nLựa chọn đúng: B. Distribute user-generated content across multiple tiers, applying appropriate security measures at each level.",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 288,
      "slideNumber": null,
      "question": "How do you retrieve the value of a session attribute named 'userRole' in Java Servlets?",
      "options": [
        {
          "key": "A",
          "text": "String role = (String) session.getAttribute(\"userRole\");"
        },
        {
          "key": "B",
          "text": "String role = session.retrieveAttribute(\"userRole\");"
        },
        {
          "key": "C",
          "text": "String role = request.getParameter(\"userRole\");"
        },
        {
          "key": "D",
          "text": "String role = getAttribute(\"userRole\");"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: A (Cộng đồng: A · FUO AI: không có).\nLựa chọn đúng: A. String role = (String) session.getAttribute(\"userRole\");",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 289,
      "slideNumber": null,
      "question": "```\npublic class SessionExampleServlet extends HttpServlet {\n    protected void doGet(HttpServletRequest request, HttpServletResponse response)\n        throws ServletException, IOException {\n        // TODO: Your code here\n    }\n}\n```\nIn the doGet method, how to create a new session for the user if the session doesn't exist?",
      "options": [
        {
          "key": "A",
          "text": "HttpSession session = request.createSession();"
        },
        {
          "key": "B",
          "text": "HttpSession session = request.getSession();"
        },
        {
          "key": "C",
          "text": "HttpSession session = new HttpSession();"
        },
        {
          "key": "D",
          "text": "HttpSession session = response.createSession();"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: B (Cộng đồng: B · FUO AI: không có).\nLựa chọn đúng: B. HttpSession session = request.getSession();",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 290,
      "slideNumber": null,
      "question": "What is the purpose of the response.sendRedirect method in Java Servlets when performing URL rewriting?",
      "options": [
        {
          "key": "A",
          "text": "It forwards the request to another servlet."
        },
        {
          "key": "B",
          "text": "It sends an HTTP redirect response to the client with a new URL."
        },
        {
          "key": "C",
          "text": "It appends parameters to the current URL."
        },
        {
          "key": "D",
          "text": "It retrieves the content of another URL and includes it in the response"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: B (Cộng đồng: B · FUO AI: không có).\nLựa chọn đúng: B. It sends an HTTP redirect response to the client with a new URL.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 291,
      "slideNumber": null,
      "question": "If a user logs into a web application from a public computer, what method of session tracking might less secure?",
      "options": [
        {
          "key": "A",
          "text": "Secure connections using HTTPS."
        },
        {
          "key": "B",
          "text": "Cookies with enhanced security features (safe cookies)."
        },
        {
          "key": "C",
          "text": "URL rewriting for session tracking."
        },
        {
          "key": "D",
          "text": "Cookies with an extended expiration time (long cookies)."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: C (Cộng đồng: C · FUO AI: không có).\nLựa chọn đúng: C. URL rewriting for session tracking.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 292,
      "slideNumber": null,
      "question": "How long is a ServletContext attribute available after it is set?",
      "options": [
        {
          "key": "A",
          "text": "Only during servlet initialization"
        },
        {
          "key": "B",
          "text": "For the lifecycle of the web application (ServletContext), unless it is removed"
        },
        {
          "key": "C",
          "text": "Only while one HTTP request is being processed"
        },
        {
          "key": "D",
          "text": "Only during servlet destruction"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: B (Cộng đồng: B · FUO AI: không có).\nLựa chọn đúng: B. For the lifecycle of the web application (ServletContext), unless it is removed",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 293,
      "slideNumber": null,
      "question": "What is the correct syntax for accessing the first element of a List named \"myList\" in EL?",
      "options": [
        {
          "key": "A",
          "text": "${myList[0]}"
        },
        {
          "key": "B",
          "text": "${myList.getFirst()}"
        },
        {
          "key": "C",
          "text": "${myList.first}"
        },
        {
          "key": "D",
          "text": "${myList.getFirst}"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: A (Cộng đồng: A · FUO AI: không có).\nLựa chọn đúng: A. ${myList[0]}",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 294,
      "slideNumber": null,
      "question": "Which EL operator would you use to concatenate strings in JSP?",
      "options": [
        {
          "key": "A",
          "text": "+="
        },
        {
          "key": "B",
          "text": "&"
        },
        {
          "key": "C",
          "text": "&&"
        },
        {
          "key": "D",
          "text": "copy"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: A (Cộng đồng: A · FUO AI: không có).\nLựa chọn đúng: A. +=",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 295,
      "slideNumber": null,
      "question": "```\npublic class MyAppContextListener implements ServletContextListener {\n    public void contextInitialized(ServletContextEvent event) {\n        // TODO: Your code here\n    }\n\n    public void contextDestroyed(ServletContextEvent event) {\n        // TODO: Your code here\n    }\n}\n```\nWhich task is appropriate for contextInitialized when the application needs a shared database resource?",
      "options": [
        {
          "key": "A",
          "text": "Handling user requests"
        },
        {
          "key": "B",
          "text": "Initializing an application-wide database connection pool"
        },
        {
          "key": "C",
          "text": "Creating session objects"
        },
        {
          "key": "D",
          "text": "Changing global settings after the application has already started"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: B (Cộng đồng: B · FUO AI: không có).\nLựa chọn đúng: B. Initializing an application-wide database connection pool",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 296,
      "slideNumber": null,
      "question": "```\npublic class MySessionListener implements HttpSessionListener {\n    public void sessionCreated(HttpSessionEvent event) {\n        // TODO: Your code here\n    }\n\n    public void sessionDestroyed(HttpSessionEvent event) {\n        // TODO: Your code here\n    }\n}\n```\nWhich task is appropriate in sessionDestroyed when a user's session is invalidated?",
      "options": [
        {
          "key": "A",
          "text": "Releasing resources owned specifically by that session"
        },
        {
          "key": "B",
          "text": "Handling user authentication"
        },
        {
          "key": "C",
          "text": "Initializing a new session"
        },
        {
          "key": "D",
          "text": "Handling HTTP requests"
        },
        {
          "key": "E",
          "text": "None of the others"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: A (Cộng đồng: A · FUO AI: không có).\nLựa chọn đúng: A. Releasing resources owned specifically by that session",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 297,
      "slideNumber": null,
      "question": "What does a session listener do in a web application?",
      "options": [
        {
          "key": "A",
          "text": "It listens to and records conversations"
        },
        {
          "key": "B",
          "text": "It watches for changes in user sessions, like when someone logs in or out"
        },
        {
          "key": "C",
          "text": "It changes session data"
        },
        {
          "key": "D",
          "text": "It helps users navigate through the application"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: B (Cộng đồng: B · FUO AI: không có).\nLựa chọn đúng: B. It watches for changes in user sessions, like when someone logs in or out",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 298,
      "slideNumber": null,
      "question": "Which event is typically handled by HttpSessionListener's sessionDestroyed method?",
      "options": [
        {
          "key": "A",
          "text": "Context initialization"
        },
        {
          "key": "B",
          "text": "Session creation"
        },
        {
          "key": "C",
          "text": "Session destruction"
        },
        {
          "key": "D",
          "text": "Request handling"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: C (Cộng đồng: C · FUO AI: không có).\nLựa chọn đúng: C. Session destruction",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 299,
      "slideNumber": null,
      "question": "Which JSTL core tag is used for iterating over a collection in Java Servlet?",
      "options": [
        {
          "key": "A",
          "text": "<c:set>"
        },
        {
          "key": "B",
          "text": "<c:forEach>"
        },
        {
          "key": "C",
          "text": "<c:choose>"
        },
        {
          "key": "D",
          "text": "<c:if>"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: B (Cộng đồng: B · FUO AI: không có).\nLựa chọn đúng: B. <c:forEach>",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 300,
      "slideNumber": null,
      "question": "What's the point of using < Emt : cetzocale> in a JSP?",
      "options": [
        {
          "key": "A",
          "text": "To pick the main language for the website."
        },
        {
          "key": "B",
          "text": "To tell other tags which language and country format to use."
        },
        {
          "key": "C",
          "text": "To change the user's language settings."
        },
        {
          "key": "D",
          "text": "To choose the language for database information."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. To tell other tags which language and country format to use.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 301,
      "slideNumber": null,
      "question": "Which descriptor file is used to map the custom tag to its tag handler class?",
      "options": [
        {
          "key": "A",
          "text": "web . x:nl"
        },
        {
          "key": "B",
          "text": "index . html"
        },
        {
          "key": "C",
          "text": "t agiib.t ld"
        },
        {
          "key": "D",
          "text": "deployment . descriptor"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. t agiib.t ld",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 302,
      "slideNumber": null,
      "question": "When developing a custom tag, what must you define in the Tag Library Descriptor (TLD) file?",
      "options": [
        {
          "key": "A",
          "text": "The CSS styles for the custom tag."
        },
        {
          "key": "B",
          "text": "The Java class that implements the tag and its associated attributes."
        },
        {
          "key": "C",
          "text": "The HTML output of the tag."
        },
        {
          "key": "D",
          "text": "The database connection details used by the tag."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. The Java class that implements the tag and its associated attributes.",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 303,
      "slideNumber": null,
      "question": "What is the role of the SimpleTag interface in custom tag development?",
      "options": [
        {
          "key": "A",
          "text": "It is used to create complex tags with body content."
        },
        {
          "key": "B",
          "text": "It simplifies custom tag creation by providing a simple handle to tag processing."
        },
        {
          "key": "C",
          "text": "It handles HTTP requests and responses for the tag."
        },
        {
          "key": "D",
          "text": "It manages the lifecycle of JSP pages."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. It simplifies custom tag creation by providing a simple handle to tag processing.",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 304,
      "slideNumber": null,
      "question": "What is the main difference between Simple Tag Handlers and Classic Tag Handlers?",
      "options": [
        {
          "key": "A",
          "text": "Simple Tag Handlers support dynamic attributes"
        },
        {
          "key": "B",
          "text": "Classic Tag Handlers have a simpler lifecycle"
        },
        {
          "key": "C",
          "text": "Simple Tag Handlers have access to the JSP page context"
        },
        {
          "key": "D",
          "text": "Classic Tag Handlers can be implemented in Java classes"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Simple Tag Handlers support dynamic attributes",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 305,
      "slideNumber": null,
      "question": "What functionality does the doTag() method provide in a custom tag handler?",
      "options": [
        {
          "key": "A",
          "text": "It connects to a database to retrieve data."
        },
        {
          "key": "B",
          "text": "It specifies the custom tag's output to the JSP page."
        },
        {
          "key": "C",
          "text": "It sets the HTTP headers for the response."
        },
        {
          "key": "D",
          "text": "It parses XML content within the custom tag."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. It specifies the custom tag's output to the JSP page.",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 306,
      "slideNumber": null,
      "question": "What is the role of the setBodyContent() method in the Body Tag interface?",
      "options": [
        {
          "key": "A",
          "text": "It sets the body content of the custom tag."
        },
        {
          "key": "B",
          "text": "It returns the body content as a string."
        },
        {
          "key": "C",
          "text": "It initializes the BodyContent object for the tag."
        },
        {
          "key": "D",
          "text": "It releases any resources associated with the body content."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. It sets the body content of the custom tag.",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 307,
      "slideNumber": null,
      "question": "What is the NOT the use of filter in JSP?",
      "options": [
        {
          "key": "A",
          "text": "Authentication blocking request based on user identity."
        },
        {
          "key": "B",
          "text": "Logging and auditing - Tracking uses of a web application."
        },
        {
          "key": "C",
          "text": "Image Conversion - Scaling maps and so on."
        },
        {
          "key": "D",
          "text": "Link to my bootstrap.min.css in a JSP file"
        },
        {
          "key": "E",
          "text": "Data Compression - Making downloads smaller"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. Link to my bootstrap.min.css in a JSP file",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 308,
      "slideNumber": null,
      "question": "In the context of web filters, what does \"pre-processing\" of a request mean?",
      "options": [
        {
          "key": "A",
          "text": "Changing the response sent to the client."
        },
        {
          "key": "B",
          "text": "Handling the request before it reaches the servlet or resource."
        },
        {
          "key": "C",
          "text": "Altering the client's browser settings."
        },
        {
          "key": "D",
          "text": "Encrypting the request data."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Handling the request before it reaches the servlet or resource.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 309,
      "slideNumber": null,
      "question": "When multiple filters are applied to a servlet, what determines the order of execution?",
      "options": [
        {
          "key": "A",
          "text": "The order in which the filters are defined in the web.xml file."
        },
        {
          "key": "B",
          "text": "The filter's priority attribute."
        },
        {
          "key": "C",
          "text": "The order in which the filters were added to the web application."
        },
        {
          "key": "D",
          "text": "The servlet's URL pattern."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. The order in which the filters are defined in the web.xml file.",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 310,
      "slideNumber": null,
      "question": "What will a HTTP request contain?",
      "options": [
        {
          "key": "A",
          "text": "A request method"
        },
        {
          "key": "B",
          "text": "A request URL"
        },
        {
          "key": "C",
          "text": "Header fields"
        },
        {
          "key": "D",
          "text": "Body"
        },
        {
          "key": "E",
          "text": "All of the others"
        }
      ],
      "correctKeys": [
        "E"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: E.\nLựa chọn đúng: E. All of the others",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 311,
      "slideNumber": null,
      "question": "Which attribute makes an input field unalterable but still submit its value when the form is submitted?",
      "options": [
        {
          "key": "A",
          "text": "readonly"
        },
        {
          "key": "B",
          "text": "disabled"
        },
        {
          "key": "C",
          "text": "locked"
        },
        {
          "key": "D",
          "text": "unchangeable"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. readonly",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 312,
      "slideNumber": null,
      "question": "Which input type is used for uploading files in an HTML form?",
      "options": [
        {
          "key": "A",
          "text": "type=\"file\""
        },
        {
          "key": "B",
          "text": "type=\"upload\""
        },
        {
          "key": "C",
          "text": "type=\"text\""
        },
        {
          "key": "D",
          "text": "type=\"input\""
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. type=\"file\"",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 313,
      "slideNumber": null,
      "question": "What is the primary role of the web.xml file in a Java web application?",
      "options": [
        {
          "key": "A",
          "text": "Storing HTML content"
        },
        {
          "key": "B",
          "text": "Defining the structure of the application's directories"
        },
        {
          "key": "C",
          "text": "Configuring servlets, filters, and error pages"
        },
        {
          "key": "D",
          "text": "Managing database connections"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Configuring servlets, filters, and error pages",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 314,
      "slideNumber": null,
      "question": "Analyze the purpose of the servlet container in a Java web server. What is the function of the \"context initialization parameter\" in this context?",
      "options": [
        {
          "key": "A",
          "text": "Controlling the user sessions and session attributes"
        },
        {
          "key": "B",
          "text": "Managing database connections and transactions"
        },
        {
          "key": "C",
          "text": "Initializing global configuration parameters for the web application"
        },
        {
          "key": "D",
          "text": "Controlling the server ports and protocols"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Initializing global configuration parameters for the web application",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 315,
      "slideNumber": null,
      "question": "How can the Servlet Container handle concurrent requests in a Servlet?",
      "options": [
        {
          "key": "A",
          "text": "By making the service() method synchronized"
        },
        {
          "key": "B",
          "text": "By creating a new thread for each request"
        },
        {
          "key": "C",
          "text": "By using the Singleton design pattern"
        },
        {
          "key": "D",
          "text": "By using the wait() and notify() methods"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. By creating a new thread for each request",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 316,
      "slideNumber": null,
      "question": "What is the syntax for defining an initialization parameter of a servlet in a deployment descriptor?",
      "options": [
        {
          "key": "A",
          "text": "```\n<servlet>\n  <servlet-name>name</servlet-name>\n  <servlet-class>class</servlet-class>\n  <init-param>\n    <param-name>name</param-name>\n    <param-value>value</param-value>\n  </init-param>\n</servlet>\n```"
        },
        {
          "key": "B",
          "text": "```\n<servlet>\n  <servlet>name</servlet>\n  <class>class</class>\n  <init-param>\n    <param-name>name</param-name>\n    <param-value>value</param-value>\n  </init-param>\n</servlet>\n```"
        },
        {
          "key": "C",
          "text": "```\n<servlet>\n  <servlet-name>name</servlet-name>\n  <servlet-class>class</servlet-class>\n  <initialized-param>\n    <param-name>name</param-name>\n    <param-value>value</param-value>\n  </initialized-param>\n</servlet>\n```"
        },
        {
          "key": "D",
          "text": "```\n<servlet>\n  <servlet-name>name</servlet-name>\n  <servlet-class>class</servlet-class>\n  <initialized-param>\n    <name>name</name>\n    <value>value</value>\n  </initialized-param>\n</servlet>\n```"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. <servlet> <servlet-name>name</servlet-name> <servlet-class>class</servlet-class> <init-param> <param-name>name</param-name> <param-value>value</param-value> </init-param> </servlet>",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 317,
      "slideNumber": null,
      "question": "What is the function of the <init-param> tag within the <servlet> tag?",
      "options": [
        {
          "key": "A",
          "text": "context-param"
        },
        {
          "key": "B",
          "text": "global-settings"
        },
        {
          "key": "C",
          "text": "app-parameters"
        },
        {
          "key": "D",
          "text": "servlet-config"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. servlet-config",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 318,
      "slideNumber": null,
      "question": "What is the role of the ServletRequest interface in a servlet?",
      "options": [
        {
          "key": "A",
          "text": "Manages session attributes"
        },
        {
          "key": "B",
          "text": "Represents client request parameters"
        },
        {
          "key": "C",
          "text": "Handles server-side scripting"
        },
        {
          "key": "D",
          "text": "Manages context initialization"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Represents client request parameters",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 319,
      "slideNumber": null,
      "question": "What's the primary role of the service() method in a servlet?",
      "options": [
        {
          "key": "A",
          "text": "Initializing variables"
        },
        {
          "key": "B",
          "text": "Handling specific HTTP requests"
        },
        {
          "key": "C",
          "text": "Managing session attributes"
        },
        {
          "key": "D",
          "text": "Terminating the servlet"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Handling specific HTTP requests",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 320,
      "slideNumber": null,
      "question": "Which method is invoked most during servlet operation?",
      "options": [
        {
          "key": "A",
          "text": "init()"
        },
        {
          "key": "B",
          "text": "service()"
        },
        {
          "key": "C",
          "text": "destroy()"
        },
        {
          "key": "D",
          "text": "doGet()"
        },
        {
          "key": "E",
          "text": "doPost()"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. service()",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 321,
      "slideNumber": null,
      "question": "What can happen when java web server receives a request to a jsp page?",
      "options": [
        {
          "key": "A",
          "text": "Forwards page to JSP engine"
        },
        {
          "key": "B",
          "text": "Translates page to servlet"
        },
        {
          "key": "C",
          "text": "Compile page into servlet"
        },
        {
          "key": "D",
          "text": "Compile servlet into bytecode"
        }
      ],
      "correctKeys": [
        "A",
        "B"
      ],
      "isMulti": true,
      "explanation": "Đáp án đã kiểm chứng: A, B (Cộng đồng: BC · FUO AI: AB).\nLựa chọn đúng: A. Forwards page to JSP engine | B. Translates page to servlet",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 322,
      "slideNumber": null,
      "question": "How does a servlet obtain client data sent in an HTTP request?",
      "options": [
        {
          "key": "A",
          "text": "Using the getParameter() method of HttpServletRequest."
        },
        {
          "key": "B",
          "text": "Using the getParameter() method of HttpServletResponse."
        },
        {
          "key": "C",
          "text": "Using the getAttribute() method of HttpServletRequest."
        },
        {
          "key": "D",
          "text": "Using the getAttribute() method of HttpServletResponse."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Using the getParameter() method of HttpServletRequest.",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 323,
      "slideNumber": null,
      "question": "Which of the followings is a correct syntax of the method that is used to get the initialized parameter in ServletContext or ServletConfig?",
      "options": [
        {
          "key": "A",
          "text": "String getlnitializedParameter(String name)"
        },
        {
          "key": "B",
          "text": "String getInitParameter(String name)"
        },
        {
          "key": "C",
          "text": "String getContextParameter(String name)"
        },
        {
          "key": "D",
          "text": "String getBoolParameter(String name)"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. String getInitParameter(String name)",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 324,
      "slideNumber": null,
      "question": "Which of the following elements in the web.xml deployment descriptor is used to map a servlet to a URL pattern in a Java web application?",
      "options": [
        {
          "key": "A",
          "text": "<servlet-name>"
        },
        {
          "key": "B",
          "text": "<servlet-class>"
        },
        {
          "key": "C",
          "text": "<url-pattern>"
        },
        {
          "key": "D",
          "text": "<mapping>"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. <url-pattern>",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 325,
      "slideNumber": null,
      "question": "Which syntax is correct for JSP Scriptlets?",
      "options": [
        {
          "key": "A",
          "text": "%=code%"
        },
        {
          "key": "B",
          "text": "<%--code%>"
        },
        {
          "key": "C",
          "text": "<%code%>"
        },
        {
          "key": "D",
          "text": "(Trống)"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. <%code%>",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 326,
      "slideNumber": null,
      "question": "Which mission of JSP Engine does?",
      "options": [
        {
          "key": "A",
          "text": "Parse JSP File, Generate Servlet Code, Compile Servlet, and Instantize Servlet"
        },
        {
          "key": "B",
          "text": "Generate Servlet Code, Compile Servlet, Generate Mapping into Web Deployment Descriptor (web.xml), and Instantize Servlet"
        },
        {
          "key": "C",
          "text": "Compile JSP into Java Class, Generate Mapping into Web Deployment Descriptor (web.xml), Generate Request and Response Object, Forward to Resource"
        },
        {
          "key": "D",
          "text": "Generate HTML Code, Compile Servlet, Generate Mapping into Web Deployment Descriptor (web.xml), and Instantize Servlet"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Parse JSP File, Generate Servlet Code, Compile Servlet, and Instantize Servlet",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 327,
      "slideNumber": null,
      "question": "What is the role of the <%@ page %> directive in JSP?",
      "options": [
        {
          "key": "A",
          "text": "To include external JavaScript files."
        },
        {
          "key": "B",
          "text": "To import Java packages and set page attributes."
        },
        {
          "key": "C",
          "text": "To define the layout of the web page."
        },
        {
          "key": "D",
          "text": "To include external CSS stylesheets."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. To import Java packages and set page attributes.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 328,
      "slideNumber": null,
      "question": "Which of the following code snippets is a correct example of a JSP scriptlet?",
      "options": [
        {
          "key": "A",
          "text": "< jsp: int i = %>"
        },
        {
          "key": "B",
          "text": "<%! int i %>"
        },
        {
          "key": "C",
          "text": "<% int %>"
        },
        {
          "key": "D",
          "text": "int >"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. <% int %>",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 329,
      "slideNumber": null,
      "question": "Which implicit object provides information about the client's request in a JSP page?",
      "options": [
        {
          "key": "A",
          "text": "response"
        },
        {
          "key": "B",
          "text": "request"
        },
        {
          "key": "C",
          "text": "session"
        },
        {
          "key": "D",
          "text": "application"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. request",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 330,
      "slideNumber": null,
      "question": "Through which implicit object can you access parameters passed to the JSP page?",
      "options": [
        {
          "key": "A",
          "text": "params"
        },
        {
          "key": "B",
          "text": "request"
        },
        {
          "key": "C",
          "text": "input"
        },
        {
          "key": "D",
          "text": "getParameters"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. request",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 331,
      "slideNumber": null,
      "question": "What best describes a characteristic of a Type 4 (Thin Driver) JDBC driver?",
      "options": [
        {
          "key": "A",
          "text": "It uses a pure Java driver to communicate with the database."
        },
        {
          "key": "B",
          "text": "It relies on a native library provided by the database vendor."
        },
        {
          "key": "C",
          "text": "It translates JDBC calls into the database-specific protocol and communicates with the database server over a network."
        },
        {
          "key": "D",
          "text": "It bridges JDBC calls to ODBC, which is then translated to the database-specific protocol."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: C (Cộng đồng: A · FUO AI: C).\nLựa chọn đúng: C. It translates JDBC calls into the database-specific protocol and communicates with the database server over a network.",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 332,
      "slideNumber": null,
      "question": "What are common errors of JDBC connection to a database?",
      "options": [
        {
          "key": "A",
          "text": "JDBC driver not found"
        },
        {
          "key": "B",
          "text": "Database URL is not recognized by JDBC driver"
        },
        {
          "key": "C",
          "text": "Unauthorized user on DBMS"
        },
        {
          "key": "D",
          "text": "URL statement is invalid or wrong syntax"
        }
      ],
      "correctKeys": [
        "A",
        "B",
        "C"
      ],
      "isMulti": true,
      "explanation": "Đáp án đã kiểm chứng: A, B, C (Cộng đồng: ABC · FUO AI: ABD).\nLựa chọn đúng: A. JDBC driver not found | B. Database URL is not recognized by JDBC driver | C. Unauthorized user on DBMS",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 333,
      "slideNumber": null,
      "question": "What is the role of the Connection interface in JDBC when managing database operations in a Java web application?",
      "options": [
        {
          "key": "A",
          "text": "To represent the result set of a SQL query."
        },
        {
          "key": "B",
          "text": "To encapsulate a connection to the database."
        },
        {
          "key": "C",
          "text": "To define the structure of a database table."
        },
        {
          "key": "D",
          "text": "To handle HTTP requests and responses."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. To encapsulate a connection to the database.",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 334,
      "slideNumber": null,
      "question": "Which JDBC statement is used to execute stored procedures in a Java web application?",
      "options": [
        {
          "key": "A",
          "text": "Statement"
        },
        {
          "key": "B",
          "text": "PreparedStatement"
        },
        {
          "key": "C",
          "text": "CallableStatement"
        },
        {
          "key": "D",
          "text": "ResultSet"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. CallableStatement",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 335,
      "slideNumber": null,
      "question": "How do you manage database transaction with JDBC driver?",
      "options": [
        {
          "key": "A",
          "text": "Explicit transaction management by invoke con.beginTrans()"
        },
        {
          "key": "B",
          "text": "Turn off auto-commit mode from DBSM for implicit transaction"
        },
        {
          "key": "C",
          "text": "It is automatically managed by DBMS"
        },
        {
          "key": "D",
          "text": "Invoke con.commit() or con.rollback()"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. Invoke con.commit() or con.rollback()",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 336,
      "slideNumber": null,
      "question": "You are tasked with improving the performance of a JSP MVC application, which currently experiences slow page loading times. Propose a strategy for optimizing the application, considering MVC principles.",
      "options": [
        {
          "key": "A",
          "text": "Increase the server's hardware capacity to handle more concurrent requests."
        },
        {
          "key": "B",
          "text": "Implement caching mechanisms within the View to store rendered pages."
        },
        {
          "key": "C",
          "text": "Optimize database queries within the Model to reduce data retrieval times."
        },
        {
          "key": "D",
          "text": "Minimize the use of MVC architecture and revert to a monolithic design for performance."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Optimize database queries within the Model to reduce data retrieval times.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 337,
      "slideNumber": null,
      "question": "You are developing a JSP MVC application for an online shopping platform. Each product has complex pricing logic based on discounts, promotions, and user roles. Describe how you would design the Model to handle this intricate pricing logic efficiently.",
      "options": [
        {
          "key": "A",
          "text": "Embed pricing logic directly in the JSP pages."
        },
        {
          "key": "B",
          "text": "Delegate pricing logic to a dedicated PricingService class in the Model."
        },
        {
          "key": "C",
          "text": "Utilize a separate database table for storing pricing rules."
        },
        {
          "key": "D",
          "text": "Implement pricing calculations within the Controller."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Delegate pricing logic to a dedicated PricingService class in the Model.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 338,
      "slideNumber": null,
      "question": "```\npublic class MyControllerServlet extends HttpServlet {\n    protected void doGet(HttpServletRequest request, HttpServletResponse response)\n        throws ServletException, IOException {\n        String data = \"Hello from Controller\";\n        request.setAttribute(\"message\", data);\n        RequestDispatcher dispatcher = request.getRequestDispatcher(\"/myView.jsp\");\n        dispatcher.forward(request, response);\n    }\n}\n```\nIn the above source code, how to pass message from Controller to JSP for display?",
      "options": [
        {
          "key": "A",
          "text": "Use 'response.sendData(\"Hello from Controller\");'"
        },
        {
          "key": "B",
          "text": "Use 'response.writeAttribute(\"message\", \"Hello from Controller\");'"
        },
        {
          "key": "C",
          "text": "Use 'request.set(\"message\", \"Hello from Controller\");'"
        },
        {
          "key": "D",
          "text": "Use 'request.setAttribute(\"message\", \"Hello from Controller\");'"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. Use 'request.setAttribute(\"message\", \"Hello from Controller\");'",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 339,
      "slideNumber": null,
      "question": "In a multi-tier data model, which layer is responsible for handling application logic?",
      "options": [
        {
          "key": "A",
          "text": "User Interface App Layer"
        },
        {
          "key": "B",
          "text": "Application Logic Layer"
        },
        {
          "key": "C",
          "text": "Data Layer"
        },
        {
          "key": "D",
          "text": "Connection Layer"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Application Logic Layer",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 340,
      "slideNumber": null,
      "question": "Evaluate the implications of storing large amounts of data in a user's session object.",
      "options": [
        {
          "key": "A",
          "text": "It ensures faster access to data due to client-side storage."
        },
        {
          "key": "B",
          "text": "It can lead to increased memory usage on the server and potential scalability issues."
        },
        {
          "key": "C",
          "text": "It has no impact on server performance since session data is maintained client-side."
        },
        {
          "key": "D",
          "text": "It is a recommended practice for enhancing security."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. It can lead to increased memory usage on the server and potential scalability issues.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 341,
      "slideNumber": null,
      "question": "What are the implications of maintaining user roles and permissions within the session object?",
      "options": [
        {
          "key": "A",
          "text": "This method is both secure and eficient, providing immediate retrieval of authorization details"
        },
        {
          "key": "B",
          "text": "It is often considered unsafe because there is a risk that someone could change the session information, which could lead to unauthorized access to higher privileges.."
        },
        {
          "key": "C",
          "text": "Advisable to reduce the frequency of database queries, hence optimizing performance."
        },
        {
          "key": "D",
          "text": "There are no identified disadvantages; this technique is widely endorsed for managing access controls"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. It is often considered unsafe because there is a risk that someone could change the session information, which could lead to unauthorized access to higher privileges..",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 342,
      "slideNumber": null,
      "question": "What is the correct code to perform URL rewriting by appending a parameter named 'sessionID' with value '123' to the current URL in a Java Servlet?",
      "options": [
        {
          "key": "A",
          "text": "String url = response.appendParameterToURL(\"sessionID\", \"123\");"
        },
        {
          "key": "B",
          "text": "String url = request.appendURLParameter(\"sessionID\", \"123\");"
        },
        {
          "key": "C",
          "text": "response.sendRedirect(\"currentURL?sessionID=123\");"
        },
        {
          "key": "D",
          "text": "String url = response.encodeURL(\"currentURL?sessionID=123\");"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. String url = response.encodeURL(\"currentURL?sessionID=123\");",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 343,
      "slideNumber": null,
      "question": "```\npublic class CookieExampleServlet extends HttpServlet {\n    protected void doGet(HttpServletRequest request, HttpServletResponse response)\n        throws ServletException, IOException {\n        // TODO: Your code here\n    }\n}\n```\nIn the doGet method, how to create a Cookie and send it to the client?",
      "options": [
        {
          "key": "A",
          "text": "Cookie newCookie = new Cookie(\"username\", \"john_doe\");\nresponse.addCookie(newCookie);"
        },
        {
          "key": "B",
          "text": "response.setCookie(\"username\", \"john_doe\");"
        },
        {
          "key": "C",
          "text": "request.createCookie(\"username\", \"john_doe\"); response.sendCookie();"
        },
        {
          "key": "D",
          "text": "Cookie.create(\"username\", \"john_doe\"); response.writeCookie();"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Cookie newCookie = new Cookie(\"username\", \"john_doe\"); response.addCookie(newCookie);",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 344,
      "slideNumber": null,
      "question": "How to store a value in ServletContext from a Servlet?",
      "options": [
        {
          "key": "A",
          "text": "context . set Att ribute (\"key\" value) ;"
        },
        {
          "key": "B",
          "text": "reauest . set Att ribute ( \"key\" value) ;"
        },
        {
          "key": "C",
          "text": "session. set At tribute (\"key n, value) ;"
        },
        {
          "key": "D",
          "text": "response . set Attribute (\"key\", value) ;"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. context . set Att ribute (\"key\" value) ;",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 345,
      "slideNumber": null,
      "question": "Which of the following is NOT a valid attribute for a jsp:useBean tag?",
      "options": [
        {
          "key": "A",
          "text": "name"
        },
        {
          "key": "B",
          "text": "id"
        },
        {
          "key": "C",
          "text": "class"
        },
        {
          "key": "D",
          "text": "scope"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. name",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 346,
      "slideNumber": null,
      "question": "What is the purpose of the empty keyword in EL when used with a collection?",
      "options": [
        {
          "key": "A",
          "text": "Checks if the collection is null"
        },
        {
          "key": "B",
          "text": "Checks if the collection is not empty"
        },
        {
          "key": "C",
          "text": "Checks if the collection is empty"
        },
        {
          "key": "D",
          "text": "Retrieves the size of the collection"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Checks if the collection is empty",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 347,
      "slideNumber": null,
      "question": "What would you use the <c:catch> tag for?",
      "options": [
        {
          "key": "A",
          "text": "To play a game of catch."
        },
        {
          "key": "B",
          "text": "To store data in a session."
        },
        {
          "key": "C",
          "text": "To deal with errors that happen when the JSP page is running."
        },
        {
          "key": "D",
          "text": "To capture user input."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. To deal with errors that happen when the JSP page is running.",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 348,
      "slideNumber": null,
      "question": "What syntax does EL use to access an element in a list?",
      "options": [
        {
          "key": "A",
          "text": "${list(index))"
        },
        {
          "key": "B",
          "text": "${list.get(index))"
        },
        {
          "key": "C",
          "text": "${list[index]}"
        },
        {
          "key": "D",
          "text": "${list.element(index)}"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. ${list[index]}",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 349,
      "slideNumber": null,
      "question": "What is a Web Application Listener in the context of Java EE applications?",
      "options": [
        {
          "key": "A",
          "text": "A component responsible for handling HTTP requests in application"
        },
        {
          "key": "B",
          "text": "A mechanism for managing database connections"
        },
        {
          "key": "C",
          "text": "An interface for intercepting events that occur in a web application"
        },
        {
          "key": "D",
          "text": "A tool for compressing and decompressing web resources"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. An interface for intercepting events that occur in a web application",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 350,
      "slideNumber": null,
      "question": "Which of the following events is typically handled by a ServletContextListener?",
      "options": [
        {
          "key": "A",
          "text": "Session creation"
        },
        {
          "key": "B",
          "text": "Request handling"
        },
        {
          "key": "C",
          "text": "Context initialization"
        },
        {
          "key": "D",
          "text": "Form submission"
        },
        {
          "key": "E",
          "text": "None of the others"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Context initialization",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 351,
      "slideNumber": null,
      "question": "Which of the following correct code to get information in the following tag in the web.xml file?\n```\n<web-app>\n  <context-param>\n    <param-name>studentName</param-name>\n    <param-value>abcJhn</param-value>\n  </context-param>\n</web-app>\n```",
      "options": [
        {
          "key": "A",
          "text": "request.getParameter(\"studentName\");"
        },
        {
          "key": "B",
          "text": "ServletContext sc = getServletContext();"
        },
        {
          "key": "C",
          "text": "ServletConfig sc = getServletConfig();"
        },
        {
          "key": "D",
          "text": "response.getParameter(\"studentName\");"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. ServletContext sc = getServletContext();",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 352,
      "slideNumber": null,
      "question": "When does HttpSessionListener's sessionCreated method get invoked?",
      "options": [
        {
          "key": "A",
          "text": "When a user submits a form"
        },
        {
          "key": "B",
          "text": "When a new session is created"
        },
        {
          "key": "C",
          "text": "When the servlet context is initialized"
        },
        {
          "key": "D",
          "text": "When a session is invalidated"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. When a new session is created",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 353,
      "slideNumber": null,
      "question": "What does the : chooce> tag provide in JSTL?",
      "options": [
        {
          "key": "A",
          "text": "Looping functionality"
        },
        {
          "key": "B",
          "text": "Conditional branching"
        },
        {
          "key": "C",
          "text": "Variable assignment"
        },
        {
          "key": "D",
          "text": "Arithmetic operations"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Conditional branching",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 354,
      "slideNumber": null,
      "question": "How are <fmt:parseDate> and <fmt:formatDate> different?",
      "options": [
        {
          "key": "A",
          "text": "<fmt:parseDate> turns a date into text, and <fmt:formatDate> turns text into a date."
        },
        {
          "key": "B",
          "text": "<fmt:parseDate> turns text into a date, and <fmt:formatDate> turns a date into text."
        },
        {
          "key": "C",
          "text": "They do the same thing."
        },
        {
          "key": "D",
          "text": "<fmt:parseDate> is for calculations, and <fmt:formatDate> is for showing dates."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. <fmt:parseDate> turns text into a date, and <fmt:formatDate> turns a date into text.",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 355,
      "slideNumber": null,
      "question": "```\n<tag>\n  <name>customTag</name>\n  <tag-class>com.example.MyCustomTagHandler</tag-class>\n  <body-content>empty</body-content>\n  <attribute>\n    <name>message</name>\n    <required>true</required>\n    <rtexprvalue>true</rtexprvalue>\n  </attribute>\n</tag>\n```\nWhat does the <rtexprvalue> element specify in the TLD?",
      "options": [
        {
          "key": "A",
          "text": "The return type of the custom tag handler class with realtime"
        },
        {
          "key": "B",
          "text": "Whether the attribute can accept runtime expressions"
        },
        {
          "key": "C",
          "text": "The body content type of the custom tag"
        },
        {
          "key": "D",
          "text": "The tag handler class"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Whether the attribute can accept runtime expressions",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 356,
      "slideNumber": null,
      "question": "How can a Simple Tag Handler access the body content of the custom tag?",
      "options": [
        {
          "key": "A",
          "text": "By using the getWriter() method of the JspWriter class."
        },
        {
          "key": "B",
          "text": "By implementing the BodyTag interface in the tag handler class."
        },
        {
          "key": "C",
          "text": "By calling getJspBody() and invoking the returned JspFragment."
        },
        {
          "key": "D",
          "text": "By using the getParent() method of the javax.servlet.jsp.tagext.Tag interface."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: C (Cộng đồng: B · FUO AI: C).\nLựa chọn đúng: C. By calling getJspBody() and invoking the returned JspFragment.",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 357,
      "slideNumber": null,
      "question": "In custom tag development, how does the BodyTag interface differ from the SimpleTag interface? (Choose two)",
      "options": [
        {
          "key": "A",
          "text": "BodyTag is used for tags without body content, while SimpleTag is for tags with body content."
        },
        {
          "key": "B",
          "text": "BodyTag provides more control over the tag's body content processing than SimpleTag."
        },
        {
          "key": "C",
          "text": "SimpleTag is the newer, simpler interface, while BodyTag belongs to the classic tag API."
        },
        {
          "key": "D",
          "text": "BodyTag is not used in custom tag development, whereas SimpleTag is the only standard."
        }
      ],
      "correctKeys": [
        "B",
        "C"
      ],
      "isMulti": true,
      "explanation": "Đáp án đã kiểm chứng: B, C (Cộng đồng: BD · FUO AI: BC).\nLựa chọn đúng: B. BodyTag provides more control over the tag's body content processing than SimpleTag. | C. SimpleTag is the newer, simpler interface, while BodyTag belongs to the classic tag API.",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 358,
      "slideNumber": null,
      "question": "What is filter mapping used for in a Java web application?",
      "options": [
        {
          "key": "A",
          "text": "To create a visual representation of the application's data fiow."
        },
        {
          "key": "B",
          "text": "To define the order in which filters are applied."
        },
        {
          "key": "C",
          "text": "To specify which URL patterns or servlets the filter should intercept."
        },
        {
          "key": "D",
          "text": "To map filter attributes to HTML elements."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. To specify which URL patterns or servlets the filter should intercept.",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 359,
      "slideNumber": null,
      "question": "What are NOT the methods of HTTP 1.1 request?",
      "options": [
        {
          "key": "A",
          "text": "GET"
        },
        {
          "key": "B",
          "text": "HEAD"
        },
        {
          "key": "C",
          "text": "PUT"
        },
        {
          "key": "D",
          "text": "poST"
        },
        {
          "key": "E",
          "text": "UPDATE"
        },
        {
          "key": "F",
          "text": "DELETE"
        }
      ],
      "correctKeys": [
        "E"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: E.\nLựa chọn đúng: E. UPDATE",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 360,
      "slideNumber": null,
      "question": "Which element in the \"web.xml\" file specifies global parameters accessible throughout the entire web application?",
      "options": [
        {
          "key": "A",
          "text": "context-param"
        },
        {
          "key": "B",
          "text": "global-settings"
        },
        {
          "key": "C",
          "text": "app-parameters"
        },
        {
          "key": "D",
          "text": "servlet-config"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. context-param",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 361,
      "slideNumber": null,
      "question": "Where is the deployment descriptor located?",
      "options": [
        {
          "key": "A",
          "text": "The deployment descriptor is located in the WEB-INF directory of the web application."
        },
        {
          "key": "B",
          "text": "The deployment descriptor is located in the WEB-INFS directory of the web application."
        },
        {
          "key": "C",
          "text": "The deployment descriptor is located in the WEBS-INF directory of the web application."
        },
        {
          "key": "D",
          "text": "The deployment descriptor is located in the WEBS directory of the web application."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. The deployment descriptor is located in the WEB-INF directory of the web application.",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 362,
      "slideNumber": null,
      "question": "What is the correct order of the servlet life-cycle?\n1. Servlet class is loaded.\n2. Init method is invoked.\n3. Service method is invoked.\n4. Servlet instance is created.\n5. Destroy method is invoked.",
      "options": [
        {
          "key": "A",
          "text": "1, 2, 3, 4, 5"
        },
        {
          "key": "B",
          "text": "2, 1, 4, 3, 5"
        },
        {
          "key": "C",
          "text": "1, 4, 2, 3, 5"
        },
        {
          "key": "D",
          "text": "1, 3, 2, 4, 5"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. 1, 4, 2, 3, 5",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 363,
      "slideNumber": null,
      "question": "Which method of the javax.servlet.Servlet interface is responsible for handling client requests and generating responses during the servlet life cycle in a Java web application?",
      "options": [
        {
          "key": "A",
          "text": "init()"
        },
        {
          "key": "B",
          "text": "service()"
        },
        {
          "key": "C",
          "text": "doGet()"
        },
        {
          "key": "D",
          "text": "destroy()"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. service()",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 364,
      "slideNumber": null,
      "question": "In a Java web application, what is the purpose of a servlet container within an application server?",
      "options": [
        {
          "key": "A",
          "text": "To manage database connections."
        },
        {
          "key": "B",
          "text": "To handle HTTP requests and responses."
        },
        {
          "key": "C",
          "text": "To define the structure of HTML pages."
        },
        {
          "key": "D",
          "text": "To execute SQL queries and retrieve results."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. To handle HTTP requests and responses.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 365,
      "slideNumber": null,
      "question": "What does a URL pattern in servlet mapping specify?",
      "options": [
        {
          "key": "A",
          "text": "The protocol used by the servlet"
        },
        {
          "key": "B",
          "text": "The port number on which the servlet listens"
        },
        {
          "key": "C",
          "text": "The actual path in the URL that triggers the servlet"
        },
        {
          "key": "D",
          "text": "The IP address of the servlet container"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. The actual path in the URL that triggers the servlet",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 366,
      "slideNumber": null,
      "question": "How can you define a servlet mapping without using web.xml?",
      "options": [
        {
          "key": "A",
          "text": "By using annotations like @WebServlet(urlPatterns = {\"/example\"}) in the servlet."
        },
        {
          "key": "B",
          "text": "By configuring servlet mapping in a separate properties file."
        },
        {
          "key": "C",
          "text": "By defining servlet mappings in the servlet class using the setMapping() method."
        },
        {
          "key": "D",
          "text": "Servlet mapping without web.xml is not supported."
        },
        {
          "key": "E",
          "text": "None of the others"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. By using annotations like @WebServlet(urlPatterns = {\"/example\"}) in the servlet.",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 367,
      "slideNumber": null,
      "question": "Which tag is used to declare a variable or method in JSP?",
      "options": [
        {
          "key": "A",
          "text": "<var>"
        },
        {
          "key": "B",
          "text": "<declare>"
        },
        {
          "key": "C",
          "text": "<scriptlet>"
        },
        {
          "key": "D",
          "text": "<%! %>"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. <%! %>",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 368,
      "slideNumber": null,
      "question": "What is the purpose of the error-code element in the <error-page > configuration of the web.xml file in a Java web application?",
      "options": [
        {
          "key": "A",
          "text": "To define the structure of a web page."
        },
        {
          "key": "B",
          "text": "To handle HTTP requests and responses."
        },
        {
          "key": "C",
          "text": "To specify the default error page for the entire web application."
        },
        {
          "key": "D",
          "text": "To map a specific HTTP error code to a designated error page."
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. To map a specific HTTP error code to a designated error page.",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 369,
      "slideNumber": null,
      "question": "How does DBMS deal with concurrent multi-user?",
      "options": [
        {
          "key": "A",
          "text": "Connection pool is provided by DBMS server and application server"
        },
        {
          "key": "B",
          "text": "Using 1 connection sharing by multi user"
        },
        {
          "key": "C",
          "text": "Eliminate connection leaks in database applications"
        },
        {
          "key": "D",
          "text": "Always manage database tasks with transaction"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: D (Cộng đồng: D · FUO AI: A).\nLựa chọn đúng: D. Always manage database tasks with transaction",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 370,
      "slideNumber": null,
      "question": "You are working on a JSP MVC application where multiple views need to display the same set of data. Discuss how you would avoid code duplication and ensure a consistent data presentation across different views.",
      "options": [
        {
          "key": "A",
          "text": "Duplicate the data retrieval logic in each JSP page."
        },
        {
          "key": "B",
          "text": "Implement a shared DataProvider class in the Model."
        },
        {
          "key": "C",
          "text": "Use global variables within the JSP pages to store and share data."
        },
        {
          "key": "D",
          "text": "Embed the data retrieval logic within each individual JSP page."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Implement a shared DataProvider class in the Model.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 371,
      "slideNumber": null,
      "question": "What is the main purpose of session management?",
      "options": [
        {
          "key": "A",
          "text": "Increase network performance"
        },
        {
          "key": "B",
          "text": "Track user activities"
        },
        {
          "key": "C",
          "text": "Long-term data storage"
        },
        {
          "key": "D",
          "text": "Protect data transmitted from client to server"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Track user activities",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 372,
      "slideNumber": null,
      "question": "In EL, assuming employeeNames is a list in Java, how can you check if it contains the name \"John\"?",
      "options": [
        {
          "key": "A",
          "text": "${'John' in employeeNames}"
        },
        {
          "key": "B",
          "text": "${employeeNames.contains('John')}"
        },
        {
          "key": "C",
          "text": "${employeeNames.indexOf('John') != -1}"
        },
        {
          "key": "D",
          "text": "${fn:contains(employeeNames, 'John')}"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. ${employeeNames.contains('John')}",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 373,
      "slideNumber": null,
      "question": "Which interface should a class implement to create a Simple Tag Handler?",
      "options": [
        {
          "key": "A",
          "text": "Tag"
        },
        {
          "key": "B",
          "text": "SimpleTag"
        },
        {
          "key": "C",
          "text": "CustomTag"
        },
        {
          "key": "D",
          "text": "TagSupport"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. SimpleTag",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 374,
      "slideNumber": null,
      "question": "What is the purpose of the Tag Description in the TLD file in Java Servlet?",
      "options": [
        {
          "key": "A",
          "text": "To provide metadata about custom tags."
        },
        {
          "key": "B",
          "text": "To define the tag handlers for custom tags."
        },
        {
          "key": "C",
          "text": "To specify the tag's attributes and their types."
        },
        {
          "key": "D",
          "text": "To declare the location of the JSP file that uses the tag."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. To provide metadata about custom tags.",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 375,
      "slideNumber": null,
      "question": "What is the purpose of the Body Tag interface in Java Servlet?",
      "options": [
        {
          "key": "A",
          "text": "To define the methods for manipulating tag attribute values."
        },
        {
          "key": "B",
          "text": "To handle the body content of a custom tag."
        },
        {
          "key": "C",
          "text": "To provide lifecycle management for custom tags."
        },
        {
          "key": "D",
          "text": "To retrieve information about the request or response."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. To handle the body content of a custom tag.",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 376,
      "slideNumber": null,
      "question": "What is the purpose of the FilterChain in a filter?",
      "options": [
        {
          "key": "A",
          "text": "To chain multiple filters together"
        },
        {
          "key": "B",
          "text": "To filter multiple requests simultaneously"
        },
        {
          "key": "C",
          "text": "To maintain the order of filter execution"
        },
        {
          "key": "D",
          "text": "To manage session data"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. To chain multiple filters together",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 377,
      "slideNumber": null,
      "question": "In a Java Servlet, what is the purpose of the doPost method?",
      "options": [
        {
          "key": "A",
          "text": "Handling HTTP GET requests"
        },
        {
          "key": "B",
          "text": "Handling HTTP POST requests"
        },
        {
          "key": "C",
          "text": "Handling HTTP PUT requests"
        },
        {
          "key": "D",
          "text": "Handling HTTP DELETE requests"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Handling HTTP POST requests",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 378,
      "slideNumber": null,
      "question": "What error code is returned when a requested method is not supported by the server?",
      "options": [
        {
          "key": "A",
          "text": "500"
        },
        {
          "key": "B",
          "text": "400"
        },
        {
          "key": "C",
          "text": "501"
        },
        {
          "key": "D",
          "text": "403"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. 501",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 379,
      "slideNumber": null,
      "question": "Which directory is used to store external libraries (JAR files) in a Java web application?",
      "options": [
        {
          "key": "A",
          "text": "'WEB-INF/lib"
        },
        {
          "key": "B",
          "text": "'WEB-INF/classes"
        },
        {
          "key": "C",
          "text": "'META-INF"
        },
        {
          "key": "D",
          "text": "Root directory"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. 'WEB-INF/lib",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 380,
      "slideNumber": null,
      "question": "In what unit is the value specified in the web.xml file?",
      "options": [
        {
          "key": "A",
          "text": "Seconds"
        },
        {
          "key": "B",
          "text": "Milliseconds"
        },
        {
          "key": "C",
          "text": "Minutes"
        },
        {
          "key": "D",
          "text": "HourS"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Minutes",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 381,
      "slideNumber": null,
      "question": "How can you deploy a Web application to a Java EE application server like Apache Tomcat?",
      "options": [
        {
          "key": "A",
          "text": "Copy the Web Archive file to the server's webapps directory and start the server"
        },
        {
          "key": "B",
          "text": "Run a deployment script provided by the server"
        },
        {
          "key": "C",
          "text": "Convert the Web Archive file to a Java Archive file and deploy it using the server's management console"
        },
        {
          "key": "D",
          "text": "Email the Web Archive file to the server administrator for deployment"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Copy the Web Archive file to the server's webapps directory and start the server",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 382,
      "slideNumber": null,
      "question": "What is the purpose of query parameters in an HTTP request URL?",
      "options": [
        {
          "key": "A",
          "text": "To store sensitive information"
        },
        {
          "key": "B",
          "text": "To define the type of HTTP method to be used"
        },
        {
          "key": "C",
          "text": "To pass data to the server as key-value pairs"
        },
        {
          "key": "D",
          "text": "To enable encryption for the request"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. To pass data to the server as key-value pairs",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 383,
      "slideNumber": null,
      "question": "What is the first step in the life cycle of a JavaServer Page (JSP) when a client sends a request to the server?",
      "options": [
        {
          "key": "A",
          "text": "Compilation"
        },
        {
          "key": "B",
          "text": "Initialization"
        },
        {
          "key": "C",
          "text": "Execution"
        },
        {
          "key": "D",
          "text": "Translation"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. Translation",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 384,
      "slideNumber": null,
      "question": "What is the purpose of a JSP scriptlet in a web application?",
      "options": [
        {
          "key": "A",
          "text": "To define custom tag libraries"
        },
        {
          "key": "B",
          "text": "To declare variables and execute Java code"
        },
        {
          "key": "C",
          "text": "To include external resources like CSS and JavaScript"
        },
        {
          "key": "D",
          "text": "To define servlet mappings"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. To declare variables and execute Java code",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 385,
      "slideNumber": null,
      "question": "Which attribute marks a JSP page as an error page?",
      "options": [
        {
          "key": "A",
          "text": "isErrorPage=\"true\""
        },
        {
          "key": "B",
          "text": "errorPage=\"true\""
        },
        {
          "key": "C",
          "text": "error=\"true\""
        },
        {
          "key": "D",
          "text": "isError=\"true\""
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. isErrorPage=\"true\"",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 386,
      "slideNumber": null,
      "question": "Which type of JDBC driver provides the highest level of performance and is platform- independent?",
      "options": [
        {
          "key": "A",
          "text": "Type 1 driver"
        },
        {
          "key": "B",
          "text": "Type 2 driver"
        },
        {
          "key": "C",
          "text": "Type 3 driver"
        },
        {
          "key": "D",
          "text": "Type 4 driver"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. Type 4 driver",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 387,
      "slideNumber": null,
      "question": "What is a connection pool in the context of database connections in web applications?",
      "options": [
        {
          "key": "A",
          "text": "A pool of HTTP connections maintained by the web server"
        },
        {
          "key": "B",
          "text": "A cache for storing session data"
        },
        {
          "key": "C",
          "text": "A pool of pre-initialized database connections for reuse"
        },
        {
          "key": "D",
          "text": "A collection of JavaScript functions for handling database operations"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. A pool of pre-initialized database connections for reuse",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 388,
      "slideNumber": null,
      "question": "What happens to a database transaction if an error occurs during its execution in a web application?",
      "options": [
        {
          "key": "A",
          "text": "It is automatically rolled back"
        },
        {
          "key": "B",
          "text": "It continues with the next statement"
        },
        {
          "key": "C",
          "text": "It is committed regardless of the error"
        },
        {
          "key": "D",
          "text": "It waits for user intervention"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. It is automatically rolled back",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 389,
      "slideNumber": null,
      "question": "Which component of the MVC architecture is responsible for presenting data to the user in a web application?",
      "options": [
        {
          "key": "A",
          "text": "Model"
        },
        {
          "key": "B",
          "text": "View"
        },
        {
          "key": "C",
          "text": "Controller"
        },
        {
          "key": "D",
          "text": "Service"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. View",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 390,
      "slideNumber": null,
      "question": "Which is NOT considered a standard component of a typical MVC architecture in web applications?",
      "options": [
        {
          "key": "A",
          "text": "Database"
        },
        {
          "key": "B",
          "text": "Model"
        },
        {
          "key": "C",
          "text": "View"
        },
        {
          "key": "D",
          "text": "Controller"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Database",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 391,
      "slideNumber": null,
      "question": "What is the correct code to set the time out for a session to 30 minutes in Java Servlets?",
      "options": [
        {
          "key": "A",
          "text": "session.setMaxInactiveInterval(30 * 60);"
        },
        {
          "key": "B",
          "text": "session.setInactiveInterval(1800);"
        },
        {
          "key": "C",
          "text": "session.setTimeout(30 * 60);"
        },
        {
          "key": "D",
          "text": "setSessionTimeout(session, 30);"
        },
        {
          "key": "E",
          "text": "None of the other"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. session.setMaxInactiveInterval(30 * 60);",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 392,
      "slideNumber": null,
      "question": "You are developing a JSP application that requires user authentication. Explain how you would use session management to track the user's login status and securely store user information.\n```\n<%@ page import=\"javax.servlet.http.HttpSession\" %>\n<%\n  HttpSession session = request.getSession(); session.setAttribute(\"loggedInUser\", username);\n%>\n```",
      "options": [
        {
          "key": "A",
          "text": "Describe the purpose of the provided code and how the session is utilized for user authentication."
        },
        {
          "key": "B",
          "text": "Propose enhancements to ensure secure session management and prevent session hijacking."
        },
        {
          "key": "C",
          "text": "Explain how the code handles session timeouts."
        },
        {
          "key": "D",
          "text": "Discuss the role of cookies in session management."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Describe the purpose of the provided code and how the session is utilized for user authentication.",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 393,
      "slideNumber": null,
      "question": "What method is used to store an attribute in the ServletContext object?",
      "options": [
        {
          "key": "A",
          "text": "setContextAttribute()"
        },
        {
          "key": "B",
          "text": "addAttribute()"
        },
        {
          "key": "C",
          "text": "setAttribute()"
        },
        {
          "key": "D",
          "text": "addContextAttribute()"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. setAttribute()",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 394,
      "slideNumber": null,
      "question": "Which EL operator is used to access properties or attributes of objects?",
      "options": [
        {
          "key": "A",
          "text": ". (dot)"
        },
        {
          "key": "B",
          "text": "+ (plus)"
        },
        {
          "key": "C",
          "text": "* (asterisk)"
        },
        {
          "key": "D",
          "text": ": (colon)"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. . (dot)",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 395,
      "slideNumber": null,
      "question": "For what purpose is the < lict ener > tag used in a web deployment descriptor?",
      "options": [
        {
          "key": "A",
          "text": "Configuring context parameters"
        },
        {
          "key": "B",
          "text": "Mapping listener to URL patterns"
        },
        {
          "key": "C",
          "text": "Defining listener classes that handle web events"
        },
        {
          "key": "D",
          "text": "Specifying servlet initialization parameters"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Defining listener classes that handle web events",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 396,
      "slideNumber": null,
      "question": "What is the purpose of a Session Listener in a Java web application?",
      "options": [
        {
          "key": "A",
          "text": "To listen for changes in session attributes"
        },
        {
          "key": "B",
          "text": "To listen for changes in application context parameters"
        },
        {
          "key": "C",
          "text": "To listen for changes in request parameters"
        },
        {
          "key": "D",
          "text": "To listen for changes in session lifecycle events"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. To listen for changes in session lifecycle events",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 397,
      "slideNumber": null,
      "question": "Which Java statement does the : when > tag within < c : chooce> resemble?",
      "options": [
        {
          "key": "A",
          "text": "If"
        },
        {
          "key": "B",
          "text": "while"
        },
        {
          "key": "C",
          "text": "for"
        },
        {
          "key": "D",
          "text": "switch-case"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. switch-case",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 398,
      "slideNumber": null,
      "question": "Which JSTL tag is used to format numbers according to the default user's locale?",
      "options": [
        {
          "key": "A",
          "text": "<fmt:parseNumber>"
        },
        {
          "key": "B",
          "text": "<fmt:setNumber>"
        },
        {
          "key": "C",
          "text": "<fmt:formatNumber>"
        },
        {
          "key": "D",
          "text": "<fmt:setLocale>"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. <fmt:formatNumber>",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 399,
      "slideNumber": null,
      "question": "Which attribute of the <tag> element in a tag library descriptor (TLD) file specifies the Java class that implements the custom tag?",
      "options": [
        {
          "key": "A",
          "text": "<tag-class>"
        },
        {
          "key": "B",
          "text": "<name>"
        },
        {
          "key": "C",
          "text": "<body-content>"
        },
        {
          "key": "D",
          "text": "<description>"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. <tag-class>",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 400,
      "slideNumber": null,
      "question": "In a Tag Library Descriptor (TLD) file, what does the element typically contain?",
      "options": [
        {
          "key": "A",
          "text": "The path to the JSP file where the tag is defined"
        },
        {
          "key": "B",
          "text": "Details about the tag's purpose and usage"
        },
        {
          "key": "C",
          "text": "The Java package name of the tag handler class"
        },
        {
          "key": "D",
          "text": "The URI of the tag library"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Details about the tag's purpose and usage",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 401,
      "slideNumber": null,
      "question": "What is the primary purpose of a filter in a web application?",
      "options": [
        {
          "key": "A",
          "text": "To modify the header content before sending it to the client"
        },
        {
          "key": "B",
          "text": "To intercept and manipulate requests and responses"
        },
        {
          "key": "C",
          "text": "To authenticate users before accessing public resources"
        },
        {
          "key": "D",
          "text": "To handle database operations"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. To intercept and manipulate requests and responses",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 402,
      "slideNumber": null,
      "question": "What is the first method called when a filter is initialized in a web application?",
      "options": [
        {
          "key": "A",
          "text": "initFilter()"
        },
        {
          "key": "B",
          "text": "initialize()"
        },
        {
          "key": "C",
          "text": "init()"
        },
        {
          "key": "D",
          "text": "setupFilter()"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. init()",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 403,
      "slideNumber": null,
      "question": "What is the purpose of the <filter> element in the web.xml deployment descriptor of a Java web application?",
      "options": [
        {
          "key": "A",
          "text": "To define the structure of HTML pages."
        },
        {
          "key": "B",
          "text": "To handle HTTP requests and responses."
        },
        {
          "key": "C",
          "text": "To map a servlet to a URL pattern, specifying the URL at which the servlet will respond."
        },
        {
          "key": "D",
          "text": "To configure and define filters that can intercept requests and responses in the web application."
        },
        {
          "key": "E",
          "text": "None of the others"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. To configure and define filters that can intercept requests and responses in the web application.",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 404,
      "slideNumber": null,
      "question": "Which method is called by a filter to intercept an incoming HTTP request?",
      "options": [
        {
          "key": "A",
          "text": "doFilter()"
        },
        {
          "key": "B",
          "text": "init()"
        },
        {
          "key": "C",
          "text": "service()"
        },
        {
          "key": "D",
          "text": "filterRequest()"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. doFilter()",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 405,
      "slideNumber": null,
      "question": "What is inside a HTTP response?",
      "options": [
        {
          "key": "A",
          "text": "A result code and Header fields"
        },
        {
          "key": "B",
          "text": "A request code and response code"
        },
        {
          "key": "C",
          "text": "Body and ACK flag"
        },
        {
          "key": "D",
          "text": "Body and Header fields"
        },
        {
          "key": "E",
          "text": "Both A and D is true"
        },
        {
          "key": "F",
          "text": "All of above"
        }
      ],
      "correctKeys": [
        "E"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: E.\nLựa chọn đúng: E. Both A and D is true",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 406,
      "slideNumber": null,
      "question": "Which status code is returned when a request cannot be fulfilled due to bad syntax?",
      "options": [
        {
          "key": "A",
          "text": "500"
        },
        {
          "key": "B",
          "text": "400"
        },
        {
          "key": "C",
          "text": "404"
        },
        {
          "key": "D",
          "text": "302"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. 400",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 407,
      "slideNumber": null,
      "question": "In a standard Java web application, where is the deployment descriptor (web.xml) typically located?",
      "options": [
        {
          "key": "A",
          "text": "'WEB-INF"
        },
        {
          "key": "B",
          "text": "'META-INF"
        },
        {
          "key": "C",
          "text": "'WEB-INF/classes"
        },
        {
          "key": "D",
          "text": "Root directory"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. 'WEB-INF",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 408,
      "slideNumber": null,
      "question": "Which interface must a servlet implement in order to handle HTTP requests and responses?",
      "options": [
        {
          "key": "A",
          "text": "Servletlnterface"
        },
        {
          "key": "B",
          "text": "HttpServlet"
        },
        {
          "key": "C",
          "text": "WebServlet"
        },
        {
          "key": "D",
          "text": "HttpRequestResponseHandler"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. HttpServlet",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 409,
      "slideNumber": null,
      "question": "What is the purpose of the element in the servlet mapping configuration?",
      "options": [
        {
          "key": "A",
          "text": "To define the servlet's class name"
        },
        {
          "key": "B",
          "text": "To specify the context path of the web application"
        },
        {
          "key": "C",
          "text": "To set the URL address that maps to a servlet"
        },
        {
          "key": "D",
          "text": "To configure filter mappings"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. To set the URL address that maps to a servlet",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 410,
      "slideNumber": null,
      "question": "All JSP pages is translated into",
      "options": [
        {
          "key": "A",
          "text": "JavaBean"
        },
        {
          "key": "B",
          "text": "Servlet class"
        },
        {
          "key": "C",
          "text": "Java Class"
        },
        {
          "key": "D",
          "text": "XML Document"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Servlet class",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 411,
      "slideNumber": null,
      "question": "What is the purpose of the taglib directive in JSP?",
      "options": [
        {
          "key": "A",
          "text": "To import custom tag libraries"
        },
        {
          "key": "B",
          "text": "To specify error page mappings"
        },
        {
          "key": "C",
          "text": "To set the character encoding of the response"
        },
        {
          "key": "D",
          "text": "To declare page-wide variables and methods"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. To import custom tag libraries",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 412,
      "slideNumber": null,
      "question": "In a JSP scriptlet, what is the correct syntax for declaring an integer variable named \"count\" and initializing it to 10?",
      "options": [
        {
          "key": "A",
          "text": "< int count ="
        },
        {
          "key": "B",
          "text": "<% count - 10; %>"
        },
        {
          "key": "C",
          "text": "<% var count %>"
        },
        {
          "key": "D",
          "text": "<% int count = 10 %>"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. < int count =",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 413,
      "slideNumber": null,
      "question": "Which implicit object in JavaServer Pages (JSP) represents the request made by the client to the server?",
      "options": [
        {
          "key": "A",
          "text": "request"
        },
        {
          "key": "B",
          "text": "response"
        },
        {
          "key": "C",
          "text": "session"
        },
        {
          "key": "D",
          "text": "application"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. request",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 414,
      "slideNumber": null,
      "question": "Which of the following is NOT a step involved in using JDBC to interact with a database in a web application?",
      "options": [
        {
          "key": "A",
          "text": "Loading the appropriate JDBC driver"
        },
        {
          "key": "B",
          "text": "Establishing a database connection"
        },
        {
          "key": "C",
          "text": "Writing SQL queries to manipulate data"
        },
        {
          "key": "D",
          "text": "Parsing HTML forms"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. Parsing HTML forms",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 415,
      "slideNumber": null,
      "question": "What is the purpose of a DataSource object in JDBC?",
      "options": [
        {
          "key": "A",
          "text": "To store and retrieve session data"
        },
        {
          "key": "B",
          "text": "To define the structure of a database table"
        },
        {
          "key": "C",
          "text": "To manage a pool of database connections"
        },
        {
          "key": "D",
          "text": "To execute SQL queries"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. To manage a pool of database connections",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 416,
      "slideNumber": null,
      "question": "Which method is used to retrieve a string value from a ResultSet in JDBC?",
      "options": [
        {
          "key": "A",
          "text": "getString(\"columnName\")"
        },
        {
          "key": "B",
          "text": "getString(1 )"
        },
        {
          "key": "C",
          "text": "getString(index)"
        },
        {
          "key": "D",
          "text": "getResult(\"columnName\")"
        }
      ],
      "correctKeys": [
        "A",
        "B"
      ],
      "isMulti": true,
      "explanation": "Đáp án đã kiểm chứng: A, B (Cộng đồng: AC · FUO AI: AB).\nLựa chọn đúng: A. getString(\"columnName\") | B. getString(1 )",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 417,
      "slideNumber": null,
      "question": "What is the purpose of using database transactions in a web application with multiple database operations?",
      "options": [
        {
          "key": "A",
          "text": "To ensure all operations are executed simultaneously"
        },
        {
          "key": "B",
          "text": "To group operations together as a single unit of work"
        },
        {
          "key": "C",
          "text": "To increase the likelihood of data corruption"
        },
        {
          "key": "D",
          "text": "To decrease database performance"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. To group operations together as a single unit of work",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 418,
      "slideNumber": null,
      "question": "What is the purpose of using Java Beans in a Model-View-Controller (MVC) architecture for web development?",
      "options": [
        {
          "key": "A",
          "text": "To control the fiow of navigation between web pages or controller layers"
        },
        {
          "key": "B",
          "text": "To provide a convenient way to store session data"
        },
        {
          "key": "C",
          "text": "To encapsulate data and behavior for better modularity and reusability"
        },
        {
          "key": "D",
          "text": "To manage database connections and transactions"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. To encapsulate data and behavior for better modularity and reusability",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 419,
      "slideNumber": null,
      "question": "Which layer in a multi-tier architecture is responsible for implementing business rules and logic?",
      "options": [
        {
          "key": "A",
          "text": "Presentation layer"
        },
        {
          "key": "B",
          "text": "Data access layer"
        },
        {
          "key": "C",
          "text": "Business logic layer"
        },
        {
          "key": "D",
          "text": "Data storage layer"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Business logic layer",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 420,
      "slideNumber": null,
      "question": "Which is NOT a standard technique for a session be definitely invalidated?",
      "options": [
        {
          "key": "A",
          "text": "The container is shutdown and brought up again."
        },
        {
          "key": "B",
          "text": "No request comes from the client for more than \"session timeout\" period."
        },
        {
          "key": "C",
          "text": "If the session time out is set to 0 using setMaxlnactivelnterval() method."
        },
        {
          "key": "D",
          "text": "A servlet explicitly calls invalidate() on a session object."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. If the session time out is set to 0 using setMaxlnactivelnterval() method.",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 421,
      "slideNumber": null,
      "question": "Which HTTP header is used to send cookies from the server to the client in a web application?",
      "options": [
        {
          "key": "A",
          "text": "Set-Cookie"
        },
        {
          "key": "B",
          "text": "Cookie-Set"
        },
        {
          "key": "C",
          "text": "Cookie"
        },
        {
          "key": "D",
          "text": "Set-Cookie-Header"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Set-Cookie",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 422,
      "slideNumber": null,
      "question": "What is the ServletContext in a Java web application?",
      "options": [
        {
          "key": "A",
          "text": "An object representing a single servlet instance"
        },
        {
          "key": "B",
          "text": "An interface for interacting with the client's web browser"
        },
        {
          "key": "C",
          "text": "An object representing the entire web application"
        },
        {
          "key": "D",
          "text": "A mechanism for managing session data"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. An object representing the entire web application",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 423,
      "slideNumber": null,
      "question": "Which of the following EL expressions correctly accesses the \"name\" property of a JavaBean named \"user\" stored in the session scope?",
      "options": [
        {
          "key": "A",
          "text": "$ { sessionScope . user . name}"
        },
        {
          "key": "B",
          "text": "$ {user . name }"
        },
        {
          "key": "C",
          "text": "$ f session . user . name }"
        },
        {
          "key": "D",
          "text": "$ f request Scope . user . name"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. $ { sessionScope . user . name}",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 424,
      "slideNumber": null,
      "question": "Which EL operator is used to perform a null-safe navigation, avoiding NullPointerExceptions?",
      "options": [
        {
          "key": "A",
          "text": "?"
        },
        {
          "key": "B",
          "text": "??"
        },
        {
          "key": "C",
          "text": "!:"
        },
        {
          "key": "D",
          "text": "?."
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. ?.",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 425,
      "slideNumber": null,
      "question": "How would you use EL to access a property named title from a Map object within a List named bookList at index 2?",
      "options": [
        {
          "key": "A",
          "text": "${bookList[2].title}"
        },
        {
          "key": "B",
          "text": "${bookList.get(2).title}"
        },
        {
          "key": "C",
          "text": "${bookList[\"2\"].title}"
        },
        {
          "key": "D",
          "text": "${bookList.title[2]}"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: A (Cộng đồng: B · FUO AI: C).\nLựa chọn đúng: A. ${bookList[2].title}",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 426,
      "slideNumber": null,
      "question": "Which interface must be implemented to create a custom listener for session-related events in Java web development?",
      "options": [
        {
          "key": "A",
          "text": "HttpSessionListener"
        },
        {
          "key": "B",
          "text": "ServletRequestListener"
        },
        {
          "key": "C",
          "text": "ServletContextListener"
        },
        {
          "key": "D",
          "text": "ServletResponseListener"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. HttpSessionListener",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 427,
      "slideNumber": null,
      "question": "Which JSTL core tag is used to conditionally render content based on a boolean expression?",
      "options": [
        {
          "key": "A",
          "text": "< c: If >"
        },
        {
          "key": "B",
          "text": "< c: choose>"
        },
        {
          "key": "C",
          "text": "< c: whera>"
        },
        {
          "key": "D",
          "text": "\".c:otherwise >"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. < c: If >",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 428,
      "slideNumber": null,
      "question": "In JSTL, how can you test if a variable is defined or not?",
      "options": [
        {
          "key": "A",
          "text": "Using the <c:exists> tag."
        },
        {
          "key": "B",
          "text": "Using the <c:if> tag with a condition checking for null."
        },
        {
          "key": "C",
          "text": "Using the <c:isNull> tag."
        },
        {
          "key": "D",
          "text": "Using the <c:defined> tag."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Using the <c:if> tag with a condition checking for null.",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 429,
      "slideNumber": null,
      "question": "Which of the following files is used to define custom tags in a JSP application?",
      "options": [
        {
          "key": "A",
          "text": ".html files"
        },
        {
          "key": "B",
          "text": ".jsp files"
        },
        {
          "key": "C",
          "text": ".tag files"
        },
        {
          "key": "D",
          "text": ".java files"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. .tag files",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 430,
      "slideNumber": null,
      "question": "Which attribute of the element is used to specify the name of the custom tag?",
      "options": [
        {
          "key": "A",
          "text": "name"
        },
        {
          "key": "B",
          "text": "class"
        },
        {
          "key": "C",
          "text": "body-content"
        },
        {
          "key": "D",
          "text": "description"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. name",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 431,
      "slideNumber": null,
      "question": "In filter mapping, what does the URL pattern \"11*\" indicate?",
      "options": [
        {
          "key": "A",
          "text": "It matches any single character in the URL"
        },
        {
          "key": "B",
          "text": "It matches any URL that ends with a specific extension"
        },
        {
          "key": "C",
          "text": "It matches any URL under the web application root"
        },
        {
          "key": "D",
          "text": "It matches any URL"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. It matches any URL under the web application root",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 432,
      "slideNumber": null,
      "question": "Suppose the following HTML code is used to enter user information and call the servlet url-pattern \"Record\":\n```\n<html>\n  <body>\n    <form action=\"Record\" >\n      User:<input type=\"text\" id=\"txtname1\" name=\"txtname2\"><br>\n      Address:<input type=\"text\" id=\"txtadd1\" name=\"txtadd2\"><br>\n      <input type=\"submit\" value=\"GotoZone\">\n    </form>\n  </body>\n</html>\n```\nWhich of the Servlet code takes input from an html form and displays it on the browser?",
      "options": [
        {
          "key": "A",
          "text": "```\npublic class RecordServlet extends HttpServlet {\n    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {\n        PrintWriter pw = res.getWriter();\n        res.setContentType(\"text/html\");\n        String account = req.getParameter(\"txtname1\");\n        String Addr = req.getParameter(\"txtadd1\");\n        pw.println(\"Hello \" + account + \" from\" + Addr);\n        pw.close();\n    }\n}\n```"
        },
        {
          "key": "B",
          "text": "```\npublic class RecordServlet extends HttpServlet {\n    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {\n        PrintWriter pw = res.getWriter();\n        res.setContentType(\"text/html\");\n        String account = req.getParameter(\"txtname2\");\n        String Addr = req.getParameter(\"txtadd2\");\n        pw.println(\"Hello \" + account + \" from\" + Addr);\n        pw.close();\n    }\n}\n```"
        },
        {
          "key": "C",
          "text": "```\npublic class RecordServlet extends HttpServlet {\n    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {\n        PrintWriter pw = res.getWriter();\n        res.setContentType(\"text/html\");\n        String account = req.getParameter(\"txtname2\");\n        String Addr = req.getParameter(\"txtadd2\");\n        pw.println(\"Hello \" + account + \" from\" + Addr);\n        pw.close();\n    }\n}\n```"
        },
        {
          "key": "D",
          "text": "```\npublic class RecordServlet extends HttpServlet {\n    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {\n        PrintWriter pw = res.getWriter();\n        res.setContentType(\"text/html\");\n        String account = req.getParameter(\"txtname1\");\n        String Addr = req.getParameter(\"txtadd1\");\n        pw.println(\"Hello \" + account + \" from\" + Addr);\n        pw.close();\n    }\n}\n```"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: C (Cộng đồng: D · FUO AI: B).\nLựa chọn đúng: C. public class RecordServlet extends HttpServlet { protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException { PrintWriter pw = res.getWriter(); res.setContentType(\"text/html\"); String account = req.getParameter(\"txtname2\"); String Addr = req.getParameter(\"txtadd2\"); pw.println(\"Hello \" + account + \" from\" + Addr); pw.close(); } }",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 433,
      "slideNumber": null,
      "question": "What HTTP method should be used to update partial resources on the server?",
      "options": [
        {
          "key": "A",
          "text": "PATCH"
        },
        {
          "key": "B",
          "text": "POST"
        },
        {
          "key": "C",
          "text": "GET"
        },
        {
          "key": "D",
          "text": "DELETE"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. PATCH",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 434,
      "slideNumber": null,
      "question": "What is the role of a servlet container in the context of a Java web application?",
      "options": [
        {
          "key": "A",
          "text": "Managing database transactions"
        },
        {
          "key": "B",
          "text": "Hosting and executing servlets"
        },
        {
          "key": "C",
          "text": "Serving static content"
        },
        {
          "key": "D",
          "text": "Handling client-side scripting"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Hosting and executing servlets",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 435,
      "slideNumber": null,
      "question": "What is the primary function of a web server in the client-server architecture?",
      "options": [
        {
          "key": "A",
          "text": "Generating HTML code"
        },
        {
          "key": "B",
          "text": "Processing and responding to client requests"
        },
        {
          "key": "C",
          "text": "Managing client-side scripts"
        },
        {
          "key": "D",
          "text": "Storing user session data"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Processing and responding to client requests",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 436,
      "slideNumber": null,
      "question": "JavaScript clients of SignalR application call public methods on hubs via the invoke method of the HubConnection. The invoke method accepts the name of the hub method and any arguments defined in the hub method.\n\nSupport that you already have defined the following code:\n```\nvar connection = new signalR.HubConnectionBuilder()\n    .withUrl(\"/chatHub\")\n    .create();\nconnection.start();\n```\nWhich the following codes you can call \"invoke\" method?",
      "options": [
        {
          "key": "A",
          "text": "try { await connection.invoke(\"SendMessage\", user, message); } catch (err) { console.error(err); }"
        },
        {
          "key": "B",
          "text": "try { await connection.invoke(user, message, \"SendMessage\"); } catch (err) { console.error(err); }"
        },
        {
          "key": "C",
          "text": "None of the mentioned"
        },
        {
          "key": "D",
          "text": "All of the the mentioned"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. try { await connection.invoke(\"SendMessage\", user, message); } catch (err) { console.error(err); }",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 437,
      "slideNumber": null,
      "question": "Which of the following is the correct order of servlet life cycle phase methods?",
      "options": [
        {
          "key": "A",
          "text": "init(), service(), destroy()"
        },
        {
          "key": "B",
          "text": "service(), destroy()"
        },
        {
          "key": "C",
          "text": "init(), execute(), destroy()"
        },
        {
          "key": "D",
          "text": "init(), service(), delete()"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. init(), service(), destroy()",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 438,
      "slideNumber": null,
      "question": "During which method call are the JSPts form data and cookies available?",
      "options": [
        {
          "key": "A",
          "text": "jsplnit()"
        },
        {
          "key": "B",
          "text": "_jspService()"
        },
        {
          "key": "C",
          "text": "jspDestroy()"
        },
        {
          "key": "D",
          "text": "jspDoStart()"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. _jspService()",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 439,
      "slideNumber": null,
      "question": "Which implicit object provides access to HTTP headers and cookies in a Java Servlet?",
      "options": [
        {
          "key": "A",
          "text": "request"
        },
        {
          "key": "B",
          "text": "response"
        },
        {
          "key": "C",
          "text": "session"
        },
        {
          "key": "D",
          "text": "application"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. request",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 440,
      "slideNumber": null,
      "question": "In a Java web application, which of the following statements is used to execute an SQL query against a database?",
      "options": [
        {
          "key": "A",
          "text": "executeUpdate()"
        },
        {
          "key": "B",
          "text": "executeQuery()"
        },
        {
          "key": "C",
          "text": "executeStatement()"
        },
        {
          "key": "D",
          "text": "executeSQL()"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. executeQuery()",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 441,
      "slideNumber": null,
      "question": "In MVC2 architecture, what is the primary role of the JSP page?",
      "options": [
        {
          "key": "A",
          "text": "Handling user input"
        },
        {
          "key": "B",
          "text": "Executing business logic"
        },
        {
          "key": "C",
          "text": "Rendering the user interface"
        },
        {
          "key": "D",
          "text": "Managing database connections"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Rendering the user interface",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 442,
      "slideNumber": null,
      "question": "Which is NOT a method of session tracking in Java web applications?",
      "options": [
        {
          "key": "A",
          "text": "Cookies"
        },
        {
          "key": "B",
          "text": "SSL certificates"
        },
        {
          "key": "C",
          "text": "URL rewriting"
        },
        {
          "key": "D",
          "text": "Hidden fields"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. SSL certificates",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 443,
      "slideNumber": null,
      "question": "What is URL rewriting in the context of web applications?",
      "options": [
        {
          "key": "A",
          "text": "A technique for obfuscating URLs to prevent unauthorized access"
        },
        {
          "key": "B",
          "text": "A method of redirecting users to different web pages"
        },
        {
          "key": "C",
          "text": "A mechanism for appending session information to URLs"
        },
        {
          "key": "D",
          "text": "A process of compressing URLs to improve website performance"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. A mechanism for appending session information to URLs",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 444,
      "slideNumber": null,
      "question": "Which EL expression is used to access elements of a collection by index?",
      "options": [
        {
          "key": "A",
          "text": "$ {collect ion [ index)"
        },
        {
          "key": "B",
          "text": "${collect ion . get (index) }"
        },
        {
          "key": "C",
          "text": "$1 collect ion. element (itzclex)"
        },
        {
          "key": "D",
          "text": "$ f collect ion (get Index ( )"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. $ {collect ion [ index)",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 445,
      "slideNumber": null,
      "question": "In Java web development, what is the primary role of a ServletContextListener?",
      "options": [
        {
          "key": "A",
          "text": "Handling HTTP requests and generating responses."
        },
        {
          "key": "B",
          "text": "Managing sessions and cookies for clients."
        },
        {
          "key": "C",
          "text": "Observing changes in the lifecycle of the ServletContext."
        },
        {
          "key": "D",
          "text": "Interacting with databases to perform CRUD operations."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Observing changes in the lifecycle of the ServletContext.",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 446,
      "slideNumber": null,
      "question": "Which JSTL core tag is used to output a value onto the JSP page?",
      "options": [
        {
          "key": "A",
          "text": "< c : out >"
        },
        {
          "key": "B",
          "text": "< c i splays"
        },
        {
          "key": "C",
          "text": "< c: print >"
        },
        {
          "key": "D",
          "text": "\".c : value >"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. < c : out >",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 447,
      "slideNumber": null,
      "question": "What is the purpose of the Ze : catch > tag in JSTL?",
      "options": [
        {
          "key": "A",
          "text": "It catches exceptions thrown during the execution of its body content."
        },
        {
          "key": "B",
          "text": "It handles errors thrown by JSP expressions."
        },
        {
          "key": "C",
          "text": "It catches HTTP errors and redirects to an error page."
        },
        {
          "key": "D",
          "text": "It encapsulates code to be executed asynchronously."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. It catches exceptions thrown during the execution of its body content.",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 448,
      "slideNumber": null,
      "question": "In JSTL, what is the purpose of the fmt:bundle tag?",
      "options": [
        {
          "key": "A",
          "text": "To include external JavaScript files"
        },
        {
          "key": "B",
          "text": "To define localization bundles"
        },
        {
          "key": "C",
          "text": "To format numbers"
        },
        {
          "key": "D",
          "text": "To handle user sessions"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. To define localization bundles",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 449,
      "slideNumber": null,
      "question": "Which attribute of the < j op: direct ive . tag> element is used to specify the Java class that implements a Simple Tag Handler?",
      "options": [
        {
          "key": "A",
          "text": "tagclass"
        },
        {
          "key": "B",
          "text": "class"
        },
        {
          "key": "C",
          "text": "handler"
        },
        {
          "key": "D",
          "text": "implementation"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. tagclass",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 450,
      "slideNumber": null,
      "question": "What is the purpose of a filter initialization parameter in the web.xml file?",
      "options": [
        {
          "key": "A",
          "text": "To define the URL pattern to which the filter is applied"
        },
        {
          "key": "B",
          "text": "To specify the order in which filters are executed"
        },
        {
          "key": "C",
          "text": "To provide configuration options specific to the filter"
        },
        {
          "key": "D",
          "text": "To set session attributes"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. To provide configuration options specific to the filter",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 451,
      "slideNumber": null,
      "question": "During the filter lifecycle in a web application, when is the init() method typically called?",
      "options": [
        {
          "key": "A",
          "text": "Every time a request is made"
        },
        {
          "key": "B",
          "text": "Only once when the filter is first instantiated"
        },
        {
          "key": "C",
          "text": "Only when the application server is restarted"
        },
        {
          "key": "D",
          "text": "After the doFilter() method is executed"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Only once when the filter is first instantiated",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 452,
      "slideNumber": null,
      "question": "How does the GET method handle sensitive data compared to the POST method?",
      "options": [
        {
          "key": "A",
          "text": "GET encrypts data, ensuring secure transmission."
        },
        {
          "key": "B",
          "text": "POST is more suitable for secure data transfer."
        },
        {
          "key": "C",
          "text": "GET exposes sensitive data in the URL."
        },
        {
          "key": "D",
          "text": "GET can handle larger data volumes than POST."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. GET exposes sensitive data in the URL.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 453,
      "slideNumber": null,
      "question": "How can you create a drop-down list in an HTML form?",
      "options": [
        {
          "key": "A",
          "text": "Using the <dropdown> element"
        },
        {
          "key": "B",
          "text": "Using the <list> element"
        },
        {
          "key": "C",
          "text": "Using the <select> element"
        },
        {
          "key": "D",
          "text": "Using the <options> element"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Using the <select> element",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 454,
      "slideNumber": null,
      "question": "Which method is called when a servlet is being removed from service?",
      "options": [
        {
          "key": "A",
          "text": "destroy()"
        },
        {
          "key": "B",
          "text": "stop()"
        },
        {
          "key": "C",
          "text": "end()"
        },
        {
          "key": "D",
          "text": "dispose()"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. destroy()",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 455,
      "slideNumber": null,
      "question": "Which file is commonly used to specify deployment descriptors and configurations for a Java web application?",
      "options": [
        {
          "key": "A",
          "text": "web.config"
        },
        {
          "key": "B",
          "text": "web.xml"
        },
        {
          "key": "C",
          "text": "app.properties"
        },
        {
          "key": "D",
          "text": "deployment.ini"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. web.xml",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 456,
      "slideNumber": null,
      "question": "Which of the following is true about HTTP Get method??",
      "options": [
        {
          "key": "A",
          "text": "Called by the server (via the service method) to allow a servlet to handle a GET request."
        },
        {
          "key": "B",
          "text": "The GET method is the default method to pass information from browser to web server."
        },
        {
          "key": "C",
          "text": "Both of the above."
        },
        {
          "key": "D",
          "text": "None of the above."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Both of the above.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 457,
      "slideNumber": null,
      "question": "What is the correct order of the servlet life cycle phases?",
      "options": [
        {
          "key": "A",
          "text": "Initialization, Service, Destroy"
        },
        {
          "key": "B",
          "text": "Service, Initialization, Destroy"
        },
        {
          "key": "C",
          "text": "Destroy, Service, Initialization"
        },
        {
          "key": "D",
          "text": "Initialization, Destroy, Service"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Initialization, Service, Destroy",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 458,
      "slideNumber": null,
      "question": "Which URL pattern maps a servlet to every request under the /pages directory and its subdirectories?",
      "options": [
        {
          "key": "A",
          "text": "/*"
        },
        {
          "key": "B",
          "text": "/servlet/*"
        },
        {
          "key": "C",
          "text": "*.html"
        },
        {
          "key": "D",
          "text": "/pages/*"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: D (Cộng đồng: D · FUO AI: B).\nLựa chọn đúng: D. /pages/*",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 459,
      "slideNumber": null,
      "question": "Which JSP element is NOT executed at the service() method of the servlet?",
      "options": [
        {
          "key": "A",
          "text": "Scriptlet"
        },
        {
          "key": "B",
          "text": "Expression"
        },
        {
          "key": "C",
          "text": "Declaration"
        },
        {
          "key": "D",
          "text": "Directive"
        }
      ],
      "correctKeys": [
        "C",
        "D"
      ],
      "isMulti": true,
      "explanation": "Đáp án Cộng đồng & FUO AI: CD.\nLựa chọn đúng: C. Declaration | D. Directive",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 460,
      "slideNumber": null,
      "question": "In a JSP error page, how can you access the exception object thrown by the server?",
      "options": [
        {
          "key": "A",
          "text": "Using the <error > tag"
        },
        {
          "key": "B",
          "text": "Using the exception implicit object"
        },
        {
          "key": "C",
          "text": "Using the error implicit object"
        },
        {
          "key": "D",
          "text": "Using the < except tag"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Using the exception implicit object",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 461,
      "slideNumber": null,
      "question": "Which of the following statements best describes the role of JDBC in web applications?",
      "options": [
        {
          "key": "A",
          "text": "JDBC is used to create dynamic web pages."
        },
        {
          "key": "B",
          "text": "JDBC is a protocol for transferring data between web servers and browsers."
        },
        {
          "key": "C",
          "text": "JDBC is a standard Java API for interacting with databases."
        },
        {
          "key": "D",
          "text": "JDBC is a web server for serving Java applications."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. JDBC is a standard Java API for interacting with databases.",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 462,
      "slideNumber": null,
      "question": "What is NOT a valid JDBC Statement type?",
      "options": [
        {
          "key": "A",
          "text": "BatchStatement"
        },
        {
          "key": "B",
          "text": "PreparedStatement"
        },
        {
          "key": "C",
          "text": "CallableStatement"
        },
        {
          "key": "D",
          "text": "Statement"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. BatchStatement",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 463,
      "slideNumber": null,
      "question": "What is MVC architecture?",
      "options": [
        {
          "key": "A",
          "text": "Multi-View Controller"
        },
        {
          "key": "B",
          "text": "Module-View-Controller"
        },
        {
          "key": "C",
          "text": "Model-View-Controller"
        },
        {
          "key": "D",
          "text": "Model-Value-Configuration"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Model-View-Controller",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 464,
      "slideNumber": null,
      "question": "Which is NOT a component of the MVC architecture in Java web frameworks?",
      "options": [
        {
          "key": "A",
          "text": "Service Layer"
        },
        {
          "key": "B",
          "text": "Model"
        },
        {
          "key": "C",
          "text": "View"
        },
        {
          "key": "D",
          "text": "Controller"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Service Layer",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 465,
      "slideNumber": null,
      "question": "How are sessions typically identified on the server side in web development?",
      "options": [
        {
          "key": "A",
          "text": "IP address of the client"
        },
        {
          "key": "B",
          "text": "User-agent string"
        },
        {
          "key": "C",
          "text": "Session ID"
        },
        {
          "key": "D",
          "text": "Server-generated random token"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Session ID",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 466,
      "slideNumber": null,
      "question": "What syntax is used to denote an EL expression in a JSP page?",
      "options": [
        {
          "key": "A",
          "text": "${ }"
        },
        {
          "key": "B",
          "text": "#{ }"
        },
        {
          "key": "C",
          "text": "@{ }"
        },
        {
          "key": "D",
          "text": "*{ }"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. ${ }",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 467,
      "slideNumber": null,
      "question": "How is the EL expression ${user.name} executed in JSP?",
      "options": [
        {
          "key": "A",
          "text": "It calls user.getName()"
        },
        {
          "key": "B",
          "text": "It accesses the name property of the user object"
        },
        {
          "key": "C",
          "text": "It is a scriptlet"
        },
        {
          "key": "D",
          "text": "It is a declaration"
        }
      ],
      "correctKeys": [
        "A",
        "B"
      ],
      "isMulti": true,
      "explanation": "Đáp án Cộng đồng & FUO AI: AB.\nLựa chọn đúng: A. It calls user.getName() | B. It accesses the name property of the user object",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 468,
      "slideNumber": null,
      "question": "What is the correct syntax for accessing the length of a String stored in a request attribute named \"message\" using EL?",
      "options": [
        {
          "key": "A",
          "text": "$(message.length)"
        },
        {
          "key": "B",
          "text": "${requestScope.message.size)"
        },
        {
          "key": "C",
          "text": "${message.length())"
        },
        {
          "key": "D",
          "text": "${fn:length(message)}"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. ${fn:length(message)}",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 469,
      "slideNumber": null,
      "question": "When is the contextlnitialized() method of a ServletContextListener invoked?",
      "options": [
        {
          "key": "A",
          "text": "After the web server receives an HTTP request."
        },
        {
          "key": "B",
          "text": "When a new session is created for a client."
        },
        {
          "key": "C",
          "text": "When the web application is deployed or started."
        },
        {
          "key": "D",
          "text": "After the response is sent back to the client."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. When the web application is deployed or started.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 470,
      "slideNumber": null,
      "question": "What is the purpose of the contextDestroyed(ServletContextEvent sce) method in a ServletContextListener?",
      "options": [
        {
          "key": "A",
          "text": "To initialize servlets in the web application."
        },
        {
          "key": "B",
          "text": "To handle exceptions thrown during servlet initialization."
        },
        {
          "key": "C",
          "text": "To clean up resources when the web application is shutting down."
        },
        {
          "key": "D",
          "text": "To manage session expiration and removal."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. To clean up resources when the web application is shutting down.",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 471,
      "slideNumber": null,
      "question": "What is the purpose of the pattern attribute in the fmt:formatNumber tag?",
      "options": [
        {
          "key": "A",
          "text": "To specify the language of the formatted number"
        },
        {
          "key": "B",
          "text": "To define the number format pattern"
        },
        {
          "key": "C",
          "text": "To set the currency symbol"
        },
        {
          "key": "D",
          "text": "To set the time zone for the formatting"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. To define the number format pattern",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 472,
      "slideNumber": null,
      "question": "What purpose does a logging filter serve in a Java web application?",
      "options": [
        {
          "key": "A",
          "text": "Modifies the content of a response."
        },
        {
          "key": "B",
          "text": "Logs requests and responses for monitoring."
        },
        {
          "key": "C",
          "text": "Manages session timeouts."
        },
        {
          "key": "D",
          "text": "Redirects requests to different servers."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Logs requests and responses for monitoring.",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 473,
      "slideNumber": null,
      "question": "Which of the following is responsible for storing session data on the client side?",
      "options": [
        {
          "key": "A",
          "text": "Cookies"
        },
        {
          "key": "B",
          "text": "Web server"
        },
        {
          "key": "C",
          "text": "Application server"
        },
        {
          "key": "D",
          "text": "Database server"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Cookies",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 474,
      "slideNumber": null,
      "question": "Assess the role and importance of form validation in HTML. Which attribute is used for ensuring that a required field must be filled out before submitting the form?",
      "options": [
        {
          "key": "A",
          "text": "validate"
        },
        {
          "key": "B",
          "text": "required"
        },
        {
          "key": "C",
          "text": "check"
        },
        {
          "key": "D",
          "text": "confirm"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. required",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 475,
      "slideNumber": null,
      "question": "Consider the HTML code below. Which of the following method calls can retrieve the \"userName\" value sent from the browser? (Choose one)",
      "options": [
        {
          "key": "A",
          "text": "getFormValue(\"userName\") of HttpServletRequest"
        },
        {
          "key": "B",
          "text": "getField(\"userName\") of HttpServletRequest"
        },
        {
          "key": "C",
          "text": "getParameter(\"userName\") of ServletRequest"
        },
        {
          "key": "D",
          "text": "getParameters(\"userName\") of HttpServlet"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. getParameter(\"userName\") of ServletRequest",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 476,
      "slideNumber": null,
      "question": "Upon compilation, a JSP file is turned into what type of Java class?",
      "options": [
        {
          "key": "A",
          "text": "An applet"
        },
        {
          "key": "B",
          "text": "A servlet"
        },
        {
          "key": "C",
          "text": "A standard Java class"
        },
        {
          "key": "D",
          "text": "A WebSocket"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. A servlet",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 477,
      "slideNumber": null,
      "question": "For generating an HTML page in JSP, which content type must be set using the page directive?",
      "options": [
        {
          "key": "A",
          "text": "text/xml"
        },
        {
          "key": "B",
          "text": "text/plain"
        },
        {
          "key": "C",
          "text": "text/html"
        },
        {
          "key": "D",
          "text": "application/json"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. text/html",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 478,
      "slideNumber": null,
      "question": "In JSP, what do scriptlets allow developers to embed within a page?",
      "options": [
        {
          "key": "A",
          "text": "Direct SQL commands"
        },
        {
          "key": "B",
          "text": "JavaScript code"
        },
        {
          "key": "C",
          "text": "Arbitrary Java code"
        },
        {
          "key": "D",
          "text": "HTML tags only"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Arbitrary Java code",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 479,
      "slideNumber": null,
      "question": "What does the \"thin\" in \"Thin Driver\" refer to in JDBC terminology?",
      "options": [
        {
          "key": "A",
          "text": "It refers to the driver being thin in terms of size and memory footprint."
        },
        {
          "key": "B",
          "text": "It indicates that the driver is designed to work with thin client applications."
        },
        {
          "key": "C",
          "text": "It suggests that the driver uses a thin layer to communicate directly with the database server."
        },
        {
          "key": "D",
          "text": "It signifies that the driver is thin in terms of functionality, providing only basic database access."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. It suggests that the driver uses a thin layer to communicate directly with the database server.",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 480,
      "slideNumber": null,
      "question": "In which architecture does the JSP page act as both the view and the model?",
      "options": [
        {
          "key": "A",
          "text": "MVCI"
        },
        {
          "key": "B",
          "text": "MVC2"
        },
        {
          "key": "C",
          "text": "MVVM"
        },
        {
          "key": "D",
          "text": "MVP"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. MVCI",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 481,
      "slideNumber": null,
      "question": "When is the contextlnitialized(ServletContextEvent sce) method called in a ServletContextListener?",
      "options": [
        {
          "key": "A",
          "text": "When a servlet is initialized."
        },
        {
          "key": "B",
          "text": "When the web application is deployed."
        },
        {
          "key": "C",
          "text": "When a session is created."
        },
        {
          "key": "D",
          "text": "When a request is received."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. When the web application is deployed.",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 482,
      "slideNumber": null,
      "question": "Which URI is correct for accessing the JSTL core library?",
      "options": [
        {
          "key": "A",
          "text": "http;djava.sun.com/jspljstl/core"
        },
        {
          "key": "B",
          "text": "httpfljavax.servlet.isæjstl/core"
        },
        {
          "key": "C",
          "text": "httpdjava.sun.com/istl/core"
        },
        {
          "key": "D",
          "text": "httpdjstljava.net/core"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. http;djava.sun.com/jspljstl/core",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 483,
      "slideNumber": null,
      "question": "What does the tag in JSTL correspond to statement in Java?",
      "options": [
        {
          "key": "A",
          "text": "switch"
        },
        {
          "key": "B",
          "text": "if else"
        },
        {
          "key": "C",
          "text": "if"
        },
        {
          "key": "D",
          "text": "All of others"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. if",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 484,
      "slideNumber": null,
      "question": "Which JSTL tag is used to set the locale for formatting and parsing in a JSP page?",
      "options": [
        {
          "key": "A",
          "text": "<fmt:setLocale>"
        },
        {
          "key": "B",
          "text": "<fmt:setTimeZone>"
        },
        {
          "key": "C",
          "text": "<fmt:formatDate>"
        },
        {
          "key": "D",
          "text": "<fmt:message>"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. <fmt:setLocale>",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 485,
      "slideNumber": null,
      "question": "What is the primary purpose of developing custom tags in JSP?",
      "options": [
        {
          "key": "A",
          "text": "Enhance database connectivity"
        },
        {
          "key": "B",
          "text": "Improve session management"
        },
        {
          "key": "C",
          "text": "Encapsulate reusable functionality"
        },
        {
          "key": "D",
          "text": "Handle internationalization and localization"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Encapsulate reusable functionality",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 486,
      "slideNumber": null,
      "question": "Which lifecycle method is invoked when a Simple Tag Handler is first initialized?",
      "options": [
        {
          "key": "A",
          "text": "doTag()"
        },
        {
          "key": "B",
          "text": "init()"
        },
        {
          "key": "C",
          "text": "processTag()"
        },
        {
          "key": "D",
          "text": "doStartTag()"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: A (Cộng đồng: B · FUO AI: A).\nLựa chọn đúng: A. doTag()",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 487,
      "slideNumber": null,
      "question": "When is the destroy() method of a servlet filter called?",
      "options": [
        {
          "key": "A",
          "text": "At the end of the filter's lifecycle"
        },
        {
          "key": "B",
          "text": "Before each doFilter() method call"
        },
        {
          "key": "C",
          "text": "After the web application is undeployed"
        },
        {
          "key": "D",
          "text": "Immediately after the filter's first invocation"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. At the end of the filter's lifecycle",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 488,
      "slideNumber": null,
      "question": "Which XML elements are used to define a servlet filter in the web.xml file?",
      "options": [
        {
          "key": "A",
          "text": "<filter> and <filter-mapping>"
        },
        {
          "key": "B",
          "text": "<filter-definition> and <filter-mapping>"
        },
        {
          "key": "C",
          "text": "<filter> and <application-filter>"
        },
        {
          "key": "D",
          "text": "<servlet-filter> and <filter-mapping>"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. <filter> and <filter-mapping>",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 489,
      "slideNumber": null,
      "question": "What is a Server Listener in the context of web applications?",
      "options": [
        {
          "key": "A",
          "text": "A component responsible for managing database connections."
        },
        {
          "key": "B",
          "text": "A mechanism for intercepting and reacting to lifecycle events of a web application."
        },
        {
          "key": "C",
          "text": "A module for handling HTTP requests and generating responses."
        },
        {
          "key": "D",
          "text": "A tool for optimizing server performance and resource utilization."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. A mechanism for intercepting and reacting to lifecycle events of a web application.",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 490,
      "slideNumber": null,
      "question": "What is the role of a web server in a client-server architecture?",
      "options": [
        {
          "key": "A",
          "text": "Hosts the website's static content"
        },
        {
          "key": "B",
          "text": "Processes client requests and returns dynamic content"
        },
        {
          "key": "C",
          "text": "Manages database connections"
        },
        {
          "key": "D",
          "text": "Authenticates user sessions"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Processes client requests and returns dynamic content",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 491,
      "slideNumber": null,
      "question": "Which element of web.xml is used to specify the error handler in servlets?",
      "options": [
        {
          "key": "A",
          "text": "error-page"
        },
        {
          "key": "B",
          "text": "error-handler"
        },
        {
          "key": "C",
          "text": "exception"
        },
        {
          "key": "D",
          "text": "exception-handler"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. error-page",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 492,
      "slideNumber": null,
      "question": "In an HttpServlet, what method is responsible for processing both GET and POST requests?",
      "options": [
        {
          "key": "A",
          "text": "doGet()"
        },
        {
          "key": "B",
          "text": "doPost()"
        },
        {
          "key": "C",
          "text": "service()"
        },
        {
          "key": "D",
          "text": "processRequest()"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. service()",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 493,
      "slideNumber": null,
      "question": "What is the purpose of the RequestDispatcher interface in servlets?",
      "options": [
        {
          "key": "A",
          "text": "To redirect the client to another web page"
        },
        {
          "key": "B",
          "text": "To forward the request to another resource"
        },
        {
          "key": "C",
          "text": "To handle HTTP POST requests"
        },
        {
          "key": "D",
          "text": "To handle form submissions"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. To forward the request to another resource",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 494,
      "slideNumber": null,
      "question": "In JavaServer Pages (JSP), which implicit object provides access to the servlet context?",
      "options": [
        {
          "key": "A",
          "text": "request"
        },
        {
          "key": "B",
          "text": "response"
        },
        {
          "key": "C",
          "text": "session"
        },
        {
          "key": "D",
          "text": "application"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. application",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 495,
      "slideNumber": null,
      "question": "What method should be used to retrieve the result of a SELECT query in JDBC? (Select all that apply)",
      "options": [
        {
          "key": "A",
          "text": "execute()"
        },
        {
          "key": "B",
          "text": "executeQuery()"
        },
        {
          "key": "C",
          "text": "executeUpdate()"
        },
        {
          "key": "D",
          "text": "executeBatch()"
        }
      ],
      "correctKeys": [
        "A",
        "B"
      ],
      "isMulti": true,
      "explanation": "Đáp án Cộng đồng & FUO AI: AB.\nLựa chọn đúng: A. execute() | B. executeQuery()",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 496,
      "slideNumber": null,
      "question": "In MVC architecture, what does the Controller component handle?",
      "options": [
        {
          "key": "A",
          "text": "Data presentation"
        },
        {
          "key": "B",
          "text": "Business logic"
        },
        {
          "key": "C",
          "text": "Data storage"
        },
        {
          "key": "D",
          "text": "Controlling the way that a user interacts with an MVC application."
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. Controlling the way that a user interacts with an MVC application.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 497,
      "slideNumber": null,
      "question": "Which component is responsible for managing the application's data and business logic in the MVC architecture?",
      "options": [
        {
          "key": "A",
          "text": "Servlet"
        },
        {
          "key": "B",
          "text": "JSP page"
        },
        {
          "key": "C",
          "text": "Model"
        },
        {
          "key": "D",
          "text": "View"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Model",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 498,
      "slideNumber": null,
      "question": "What is the method signature for an event where an attribute was removed from an HttpSession?",
      "options": [
        {
          "key": "A",
          "text": "public void attributeDeleted(HttpSessionBindingEvent event)"
        },
        {
          "key": "B",
          "text": "public void removeAttribute(HttpSessionBindingEvent event)"
        },
        {
          "key": "C",
          "text": "public void attributeRemoved(HttpSessionBindingEvent event)"
        },
        {
          "key": "D",
          "text": "public void sessionInvalidate(HttpSessionEvent event)"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. public void attributeRemoved(HttpSessionBindingEvent event)",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 499,
      "slideNumber": null,
      "question": "Which method of the ServletContextListener interface is called when the ServletContext is initialized?",
      "options": [
        {
          "key": "A",
          "text": "contextlnitialized()"
        },
        {
          "key": "B",
          "text": "contextCreated()"
        },
        {
          "key": "C",
          "text": "initContext()"
        },
        {
          "key": "D",
          "text": "initializeContext()"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. contextlnitialized()",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 500,
      "slideNumber": null,
      "question": "Which Listener should be used to load JDBC Driver automatically for a web application?",
      "options": [
        {
          "key": "A",
          "text": "ServletContextAttributeListener"
        },
        {
          "key": "B",
          "text": "ServletRequestListener"
        },
        {
          "key": "C",
          "text": "HttpSessionListener"
        },
        {
          "key": "D",
          "text": "ServletContextListener"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. ServletContextListener",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 501,
      "slideNumber": null,
      "question": "What output does this JSTL code produce?\n```\n<%@ taglib uri=\"http://java.sun.com/jsp/jstl/core\" prefix=\"c\" %>\n<c:set var=\"item\" value=\"5\"/>\n<c:forEach var=\"item\" begin=\"1\" end=\"1\">\n  <c:out value=\"${item}\"/>\n</c:forEach>\n```",
      "options": [
        {
          "key": "A",
          "text": "1"
        },
        {
          "key": "B",
          "text": "5"
        },
        {
          "key": "C",
          "text": "No output"
        },
        {
          "key": "D",
          "text": "Error"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. 1",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 502,
      "slideNumber": null,
      "question": "What does the var attribute in the fmt:message tag define?",
      "options": [
        {
          "key": "A",
          "text": "The name of the internationalization bundle"
        },
        {
          "key": "B",
          "text": "The variable to store the formatted message"
        },
        {
          "key": "C",
          "text": "The message key to look up in the resource bundle"
        },
        {
          "key": "D",
          "text": "The scope of the message variable"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. The variable to store the formatted message",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 503,
      "slideNumber": null,
      "question": "Which JSTL tag is used to format dates and times according to the user's locale?",
      "options": [
        {
          "key": "A",
          "text": "<fmt:setTimeZone>"
        },
        {
          "key": "B",
          "text": "<fmt:setLocale>"
        },
        {
          "key": "C",
          "text": "<fmt:formatDate>"
        },
        {
          "key": "D",
          "text": "<fmt:setBundle>"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. <fmt:formatDate>",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 504,
      "slideNumber": null,
      "question": "Which method in the Simple Tag Handler class is responsible for processing the tag?",
      "options": [
        {
          "key": "A",
          "text": "cioSt art Tag ( )"
        },
        {
          "key": "B",
          "text": "cioEndTag ( )"
        },
        {
          "key": "C",
          "text": "aoTag ( )"
        },
        {
          "key": "D",
          "text": "doPost ( )"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. aoTag ( )",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 505,
      "slideNumber": null,
      "question": "What is the primary purpose of the tag in HTML?",
      "options": [
        {
          "key": "A",
          "text": "To define the structure of the webpage"
        },
        {
          "key": "B",
          "text": "To specify the background color of the webpage"
        },
        {
          "key": "C",
          "text": "To contain the visible content of the webpage"
        },
        {
          "key": "D",
          "text": "To include external JavaScript files"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. To contain the visible content of the webpage",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 506,
      "slideNumber": null,
      "question": "Which method is more secure when transferring sensitive data like passwords or user information? Which HTTP method is more secure when transferring sensitive data like passwords or user information?",
      "options": [
        {
          "key": "A",
          "text": "GET"
        },
        {
          "key": "B",
          "text": "poST"
        },
        {
          "key": "C",
          "text": "DELETE"
        },
        {
          "key": "D",
          "text": "PUT"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. poST",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 507,
      "slideNumber": null,
      "question": "Which HTML element is used to create a form in a Java web application?",
      "options": [
        {
          "key": "A",
          "text": "<form>"
        },
        {
          "key": "B",
          "text": "<input>"
        },
        {
          "key": "C",
          "text": "<from>"
        },
        {
          "key": "D",
          "text": "<section>"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. <form>",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 508,
      "slideNumber": null,
      "question": "What file is commonly used for packaging a Java web application, including servlets and JSP files?",
      "options": [
        {
          "key": "A",
          "text": ".zip"
        },
        {
          "key": "B",
          "text": "ajar"
        },
        {
          "key": "C",
          "text": ".war"
        },
        {
          "key": "D",
          "text": "sear"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. .war",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 509,
      "slideNumber": null,
      "question": "What is the lifecycle method called when a Servlet is being initialized?",
      "options": [
        {
          "key": "A",
          "text": "init()"
        },
        {
          "key": "B",
          "text": "start()"
        },
        {
          "key": "C",
          "text": "begin()"
        },
        {
          "key": "D",
          "text": "initialize()"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. init()",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 510,
      "slideNumber": null,
      "question": "What is the difference between < jcp: include> and < j op: forward>",
      "options": [
        {
          "key": "A",
          "text": "< j sp: inciucie > includes content at runtime; < isp: forward > stops page execution."
        },
        {
          "key": "B",
          "text": "< isp : forward > includes another resource; <jsp: include > forwards the request."
        },
        {
          "key": "C",
          "text": "Both tags perform the same function."
        },
        {
          "key": "D",
          "text": "None of the others"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. < j sp: inciucie > includes content at runtime; < isp: forward > stops page execution.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 511,
      "slideNumber": null,
      "question": "Which implicit object in JSP provides access to the servlet context and can be used to store and retrieve application-wide information?",
      "options": [
        {
          "key": "A",
          "text": "pageContext"
        },
        {
          "key": "B",
          "text": "request"
        },
        {
          "key": "C",
          "text": "application"
        },
        {
          "key": "D",
          "text": "session"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. application",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 512,
      "slideNumber": null,
      "question": "Which JDBC method return a ResultSet?",
      "options": [
        {
          "key": "A",
          "text": "execute()"
        },
        {
          "key": "B",
          "text": "executeQuery()"
        },
        {
          "key": "C",
          "text": "executeUpdate()"
        },
        {
          "key": "D",
          "text": "updateQuery()"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. executeQuery()",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 513,
      "slideNumber": null,
      "question": "What is a common technique used to implement session management using cookies?",
      "options": [
        {
          "key": "A",
          "text": "Encrypting session data"
        },
        {
          "key": "B",
          "text": "Storing session ID in a cookie"
        },
        {
          "key": "C",
          "text": "Using a separate database for session storage"
        },
        {
          "key": "D",
          "text": "Sending session data in the URL"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Storing session ID in a cookie",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 514,
      "slideNumber": null,
      "question": "Which JSTL tag is used to loop over a collection of objects?",
      "options": [
        {
          "key": "A",
          "text": "< c : forEach>"
        },
        {
          "key": "B",
          "text": "< c: iterates"
        },
        {
          "key": "C",
          "text": "< c: Zooe"
        },
        {
          "key": "D",
          "text": "ec : repeat >"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. < c : forEach>",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 515,
      "slideNumber": null,
      "question": "How can custom tags be declared in a JSP file?",
      "options": [
        {
          "key": "A",
          "text": "Using the < j sp : t aglib > directive."
        },
        {
          "key": "B",
          "text": "Using the < jsp: include > directive."
        },
        {
          "key": "C",
          "text": "Using the < j sp: at t r ibute > directive."
        },
        {
          "key": "D",
          "text": "Using the <use3ean > directive."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Using the < j sp : t aglib > directive.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 516,
      "slideNumber": null,
      "question": "What is a Simple Tag Handler in JSP?",
      "options": [
        {
          "key": "A",
          "text": "A Java class that extends javax.servlet.jsp.tagext.TagSupport."
        },
        {
          "key": "B",
          "text": "A Java class that implements the javax.servlet.jsp.tagext.SimpleTag interface."
        },
        {
          "key": "C",
          "text": "A JSP page that defines custom tags."
        },
        {
          "key": "D",
          "text": "A JSP tag file that contains custom tag definitions."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. A Java class that implements the javax.servlet.jsp.tagext.SimpleTag interface.",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 517,
      "slideNumber": null,
      "question": "How can the Body Tag interface be implemented in a custom tag handler class?",
      "options": [
        {
          "key": "A",
          "text": "By extending the BodyTagSupport class."
        },
        {
          "key": "B",
          "text": "By implementing the BodyTag interface directly."
        },
        {
          "key": "C",
          "text": "By extending the TagSupport class."
        },
        {
          "key": "D",
          "text": "By implementing the Tag interface directly."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. By extending the BodyTagSupport class.",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 518,
      "slideNumber": null,
      "question": "What is the primary purpose of the doFilter() method in a filter's life cycle?",
      "options": [
        {
          "key": "A",
          "text": "To initialize the filter."
        },
        {
          "key": "B",
          "text": "To define the filter's URL mapping."
        },
        {
          "key": "C",
          "text": "To perform the actual filtering of requests and responses."
        },
        {
          "key": "D",
          "text": "To destroy the filter."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. To perform the actual filtering of requests and responses.",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 519,
      "slideNumber": null,
      "question": "What is the purpose of the HTML <input > element with the type attribute set to \"text\"?",
      "options": [
        {
          "key": "A",
          "text": "Displaying a multiline text area"
        },
        {
          "key": "B",
          "text": "Creating a checkbox"
        },
        {
          "key": "C",
          "text": "Accepting single-line text input"
        },
        {
          "key": "D",
          "text": "Selecting items from a dropdown list"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Accepting single-line text input",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 520,
      "slideNumber": null,
      "question": "What is the function of the <cont ext -param > tag in the web deployment descriptor?",
      "options": [
        {
          "key": "A",
          "text": "Defines a context-wide parameter"
        },
        {
          "key": "B",
          "text": "Maps servlets to URL patterns"
        },
        {
          "key": "C",
          "text": "Configures session timeout"
        },
        {
          "key": "D",
          "text": "Specifies security constraints"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Defines a context-wide parameter",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 521,
      "slideNumber": null,
      "question": "What is the major difference between < j cp : forward> and rezponce . cendRedirect ( ) ina JSP page?",
      "options": [
        {
          "key": "A",
          "text": "< j sp: forward > forwards to another resource within the server; ser:ciRecii rect ( ) sends a new request from the client."
        },
        {
          "key": "B",
          "text": "< isp : forward > sends a new request from the client; senclRecii rect ( ) forwards to another resource within the server."
        },
        {
          "key": "C",
          "text": "Both forward and redirect happen entirely on the client-side."
        },
        {
          "key": "D",
          "text": "There is no difference in functionality between the two."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. < j sp: forward > forwards to another resource within the server; ser:ciRecii rect ( ) sends a new request from the client.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 522,
      "slideNumber": null,
      "question": "What is the purpose of JSP directives in a web application?",
      "options": [
        {
          "key": "A",
          "text": "To declare variables and methods"
        },
        {
          "key": "B",
          "text": "To import Java classes"
        },
        {
          "key": "C",
          "text": "To provide instructions to the JSP container"
        },
        {
          "key": "D",
          "text": "All of the above"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: C (Cộng đồng: D · FUO AI: C).\nLựa chọn đúng: C. To provide instructions to the JSP container",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 523,
      "slideNumber": null,
      "question": "What is the primary benefit of using implicit objects in web development?",
      "options": [
        {
          "key": "A",
          "text": "They simplify the code and reduce redundancy"
        },
        {
          "key": "B",
          "text": "They improve security by encapsulating sensitive data"
        },
        {
          "key": "C",
          "text": "They enhance performance by reducing memory usage"
        },
        {
          "key": "D",
          "text": "They enable parallel processing of requests"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. They simplify the code and reduce redundancy",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 524,
      "slideNumber": null,
      "question": "In a Java web application, what is the typical process for obtaining a database connection before executing SQL statements?",
      "options": [
        {
          "key": "A",
          "text": "Use the getConnection() method of the DriverManager class"
        },
        {
          "key": "B",
          "text": "Call the createConnection() method of the ConnectionFactory class"
        },
        {
          "key": "C",
          "text": "Instantiate a new Connection object directly"
        },
        {
          "key": "D",
          "text": "Execute a SQL query to establish a connection dynamically"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Use the getConnection() method of the DriverManager class",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 526,
      "slideNumber": null,
      "question": "What is a Web Application?",
      "options": [
        {
          "key": "A",
          "text": "A software or program which is accessible using any web browser"
        },
        {
          "key": "B",
          "text": "Its frontend is usually created using languages like HTML, CSS, Javascript, which are supported by major browsers"
        },
        {
          "key": "C",
          "text": "It can be used on any platform: Windows, Linux, Mac.. as they all support modern browsers"
        },
        {
          "key": "D",
          "text": "All of the mentioned"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. All of the mentioned",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 527,
      "slideNumber": null,
      "question": "In Java web applications, where are the compiled Java class files typically stored?",
      "options": [
        {
          "key": "A",
          "text": "'META-INF"
        },
        {
          "key": "B",
          "text": "'WEB-INF/lib"
        },
        {
          "key": "C",
          "text": "'WEB-INF/classes"
        },
        {
          "key": "D",
          "text": "Root directory"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. 'WEB-INF/classes",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 528,
      "slideNumber": null,
      "question": "What is the main purpose of HttpServlet in Java web applications?",
      "options": [
        {
          "key": "A",
          "text": "To handle HTTP requests and responses"
        },
        {
          "key": "B",
          "text": "To connect to databases"
        },
        {
          "key": "C",
          "text": "To manage session tracking"
        },
        {
          "key": "D",
          "text": "Request forwarding is slower than a redirect."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. To handle HTTP requests and responses",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 529,
      "slideNumber": null,
      "question": "Which of the following is true about Cleanup phase in JSP life cycle?",
      "options": [
        {
          "key": "A",
          "text": "The destruction phase of the JSP life cycle represents when a JSP is being removed from use by a container."
        },
        {
          "key": "B",
          "text": "The jspDestroy() method is the JSP equivalent of the destroy method for servlets."
        },
        {
          "key": "C",
          "text": "Both of the above."
        },
        {
          "key": "D",
          "text": "None of the above"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Both of the above.",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 530,
      "slideNumber": null,
      "question": "Which is true about JDBC?",
      "options": [
        {
          "key": "A",
          "text": "The JDBC API is an extension of the ODBC API"
        },
        {
          "key": "B",
          "text": "All JDBC drivers are pure Java."
        },
        {
          "key": "C",
          "text": "JDBC is used to connect to MOM (Message-Oriented Middleware Product)"
        },
        {
          "key": "D",
          "text": "The JDBC API is included in J2SE"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. The JDBC API is included in J2SE",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 531,
      "slideNumber": null,
      "question": "In MVC2 architecture, what role does the servlet typically play?",
      "options": [
        {
          "key": "A",
          "text": "View"
        },
        {
          "key": "B",
          "text": "Controller"
        },
        {
          "key": "C",
          "text": "Model"
        },
        {
          "key": "D",
          "text": "None, servlets are not used in MVC2 architecture"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Controller",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 532,
      "slideNumber": null,
      "question": "If a session attribute named \"cart\" stores a List of items, how can you access the second item in the list using EL?",
      "options": [
        {
          "key": "A",
          "text": "${cart.get(1)}"
        },
        {
          "key": "B",
          "text": "${cart[1]}"
        },
        {
          "key": "C",
          "text": "${cart(1)}"
        },
        {
          "key": "D",
          "text": "${cart.item(1)}"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. ${cart[1]}",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 533,
      "slideNumber": null,
      "question": "Which interface needs to be implemented to create a custom tag handler class?",
      "options": [
        {
          "key": "A",
          "text": "javax.servlet.Servlet"
        },
        {
          "key": "B",
          "text": "javax.servlet.filter.Filter"
        },
        {
          "key": "C",
          "text": "javax.servlet.jsp.tagext.Tag"
        },
        {
          "key": "D",
          "text": "javax.servlet.http.HttpServlet"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. javax.servlet.jsp.tagext.Tag",
      "topic": "7. Custom Tags & Tag Library Descriptor (TLD)",
      "images": []
    },
    {
      "id": 534,
      "slideNumber": null,
      "question": "Can HTML forms directly send data using the PUT method?",
      "options": [
        {
          "key": "A",
          "text": "No, HTML forms only support the GET and POST methods."
        },
        {
          "key": "B",
          "text": "Yes, you can specify method=\"PUT\" in the form tag."
        },
        {
          "key": "C",
          "text": "Yes, but only if the server is configured to accept PUT requests from forms."
        },
        {
          "key": "D",
          "text": "No, the PUT method is only used for file uploads."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. No, HTML forms only support the GET and POST methods.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 535,
      "slideNumber": null,
      "question": "Which of the following best describes HTTP protocol?",
      "options": [
        {
          "key": "A",
          "text": "Stateful"
        },
        {
          "key": "B",
          "text": "Stateless"
        },
        {
          "key": "C",
          "text": "Encrypted by default"
        },
        {
          "key": "D",
          "text": "Persistent"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Stateless",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 536,
      "slideNumber": null,
      "question": "In a Java web application, which HTTP status code indicates a successful response for a GET request?",
      "options": [
        {
          "key": "A",
          "text": "200"
        },
        {
          "key": "B",
          "text": "404"
        },
        {
          "key": "C",
          "text": "500"
        },
        {
          "key": "D",
          "text": "201"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. 200",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 537,
      "slideNumber": null,
      "question": "How is the deployment descriptor of a web application typically named?",
      "options": [
        {
          "key": "A",
          "text": "application.xml"
        },
        {
          "key": "B",
          "text": "web.xml"
        },
        {
          "key": "C",
          "text": "config.xml"
        },
        {
          "key": "D",
          "text": "server .xml"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. web.xml",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 538,
      "slideNumber": null,
      "question": "When a servlet is requested, what information the web server may be received?",
      "options": [
        {
          "key": "A",
          "text": "only the URL."
        },
        {
          "key": "B",
          "text": "The servlet class and request parameters."
        },
        {
          "key": "C",
          "text": "The servlet name and HTTP method."
        },
        {
          "key": "D",
          "text": "The request parameters only."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. The servlet name and HTTP method.",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 539,
      "slideNumber": null,
      "question": "When doPost() method of servlet gets called?",
      "options": [
        {
          "key": "A",
          "text": "It is called by the server to allow a servlet to handle HTTP request type as POST"
        },
        {
          "key": "B",
          "text": "The service() method checks the HTTP request type as POST and calls doPost() method."
        },
        {
          "key": "C",
          "text": "Both of the above."
        },
        {
          "key": "D",
          "text": "None of the above."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Both of the above.",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 540,
      "slideNumber": null,
      "question": "Scriptlets in JSP are used to embed code into the JSP page.",
      "options": [
        {
          "key": "A",
          "text": "HTML"
        },
        {
          "key": "B",
          "text": "XML"
        },
        {
          "key": "C",
          "text": "Java"
        },
        {
          "key": "D",
          "text": "JavaScript"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Java",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 541,
      "slideNumber": null,
      "question": "What is the purpose of the Translation phase in the JSP life cycle?",
      "options": [
        {
          "key": "A",
          "text": "Generating servlet code from JSP source"
        },
        {
          "key": "B",
          "text": "Converting JSP into HTML markup"
        },
        {
          "key": "C",
          "text": "Initializing servlet context parameters"
        },
        {
          "key": "D",
          "text": "Executing Java code embedded within JSP"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. Generating servlet code from JSP source",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 542,
      "slideNumber": null,
      "question": "The object is used to execute SQL queries and update statements in JDBC.",
      "options": [
        {
          "key": "A",
          "text": "ResultSet"
        },
        {
          "key": "B",
          "text": "Connection"
        },
        {
          "key": "C",
          "text": "Statement"
        },
        {
          "key": "D",
          "text": "CallableStatement."
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Statement",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 543,
      "slideNumber": null,
      "question": "When establishing a JDBC connection, the object provides the URL and credentials for the database.",
      "options": [
        {
          "key": "A",
          "text": "DriverManager"
        },
        {
          "key": "B",
          "text": "Connection"
        },
        {
          "key": "C",
          "text": "Statement"
        },
        {
          "key": "D",
          "text": "PreparedStatement"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. DriverManager",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 544,
      "slideNumber": null,
      "question": "Which statement about JDBC is TRUE?",
      "options": [
        {
          "key": "A",
          "text": "JDBC can only use with relational databases."
        },
        {
          "key": "B",
          "text": "JDBC supports both synchronous and asynchronous execution."
        },
        {
          "key": "C",
          "text": "JDBC is a protocol for database communication."
        },
        {
          "key": "D",
          "text": "JDBC requires Java runtime only."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: A (Cộng đồng: A · FUO AI: D).\nLựa chọn đúng: A. JDBC can only use with relational databases.",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 545,
      "slideNumber": null,
      "question": "In a Java web application, where are Java Beans commonly used?",
      "options": [
        {
          "key": "A",
          "text": "In the presentation layer for rendering HTML"
        },
        {
          "key": "B",
          "text": "In the business logic layer for processing data"
        },
        {
          "key": "C",
          "text": "In the persistence layer for database access"
        },
        {
          "key": "D",
          "text": "In the server configuration for managing resources"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. In the business logic layer for processing data",
      "topic": "1. Web & HTTP, HTML Forms & MVC Architecture",
      "images": []
    },
    {
      "id": 546,
      "slideNumber": null,
      "question": "Which symbol represents placeholders in a SQL query within a PreparedStatement?",
      "options": [
        {
          "key": "A",
          "text": "*"
        },
        {
          "key": "B",
          "text": "%"
        },
        {
          "key": "C",
          "text": "?"
        },
        {
          "key": "D",
          "text": "&"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. ?",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 547,
      "slideNumber": null,
      "question": "What is the purpose of the JSP directive?",
      "options": [
        {
          "key": "A",
          "text": "To declare custom error pages for specific HTTP error codes"
        },
        {
          "key": "B",
          "text": "To handle exceptions thrown by Java code in the JSP"
        },
        {
          "key": "C",
          "text": "To define global error handling for the entire web application"
        },
        {
          "key": "D",
          "text": "To include additional resources in the JSP page"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. To handle exceptions thrown by Java code in the JSP",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 548,
      "slideNumber": null,
      "question": "Which JDBC interface represents a pre-compiled SQL statement?",
      "options": [
        {
          "key": "A",
          "text": "Statement"
        },
        {
          "key": "B",
          "text": "PreparedStatement"
        },
        {
          "key": "C",
          "text": "Connection"
        },
        {
          "key": "D",
          "text": "SQLStatement"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. PreparedStatement",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 549,
      "slideNumber": null,
      "question": "What is the method signature for an event where an attribute was replaced in an HttpSession?",
      "options": [
        {
          "key": "A",
          "text": "public voici att ributeRep1acecl (HttpSessionBindingEvent event)"
        },
        {
          "key": "B",
          "text": "public voici attributeAaaea (EttpSession3indingEvent event )"
        },
        {
          "key": "C",
          "text": "public void attributeRemoveci (Ht tpSessionBir:clingEvent event)"
        },
        {
          "key": "D",
          "text": "public void sessionCreatecl (HttpSessionEvet1t event"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. public voici att ributeRep1acecl (HttpSessionBindingEvent event)",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 550,
      "slideNumber": null,
      "question": "Which listener is triggered when an attribute is added to a ServletContext?",
      "options": [
        {
          "key": "A",
          "text": "ServletContextAttributeListener"
        },
        {
          "key": "B",
          "text": "ServletRequestListener"
        },
        {
          "key": "C",
          "text": "HttpSessionListener"
        },
        {
          "key": "D",
          "text": "ServletContextListener"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. ServletContextAttributeListener",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 551,
      "slideNumber": null,
      "question": "Which servlet method retrieves a servlet's initialization parameter defined in the web.xml?",
      "options": [
        {
          "key": "A",
          "text": "get Servlet Config ( ) . get InitParameter ( \"pararnrame\")"
        },
        {
          "key": "B",
          "text": "get Servlet Cont ext ( ) . get Init?arameter ( \"paramna:ne\")"
        },
        {
          "key": "C",
          "text": "get : nit Para:neter ( 't para:nName'l"
        },
        {
          "key": "D",
          "text": "get Config ( ) . get ?arameter (\"paramNamen )"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. get Servlet Config ( ) . get InitParameter ( \"pararnrame\")",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 552,
      "slideNumber": null,
      "question": "Evaluate the impact of adopting an MVC2 architecture on the testability of a web application.",
      "options": [
        {
          "key": "A",
          "text": "It would make the application harder to test due to increased complexity"
        },
        {
          "key": "B",
          "text": "It would improve testability by allowing the components to be tested in isolation"
        },
        {
          "key": "C",
          "text": "It would have no impact on testability as the architecture doesn't influence testing approaches"
        },
        {
          "key": "D",
          "text": "It would reduce testability due to the tight coupling between view and controller"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. It would improve testability by allowing the components to be tested in isolation",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 553,
      "slideNumber": null,
      "question": "What annotation can be used to declare a Servlet Filter in Java 3.0 and later?",
      "options": [
        {
          "key": "A",
          "text": "@WebServlet"
        },
        {
          "key": "B",
          "text": "@WebFilter"
        },
        {
          "key": "C",
          "text": "@Filtermapping"
        },
        {
          "key": "D",
          "text": "@ServletFilter"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. @WebFilter",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 554,
      "slideNumber": null,
      "question": "What is the output of the following code? recponce . cendkedirect { \"home . j cp\") ;",
      "options": [
        {
          "key": "A",
          "text": "The current request is forwarded to home.jsp"
        },
        {
          "key": "B",
          "text": "The browser is instructed to make a new request to home.jsp"
        },
        {
          "key": "C",
          "text": "The server will create a new page named home.jsp and redirect the results to that page."
        },
        {
          "key": "D",
          "text": "An error occurs"
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. The browser is instructed to make a new request to home.jsp",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 555,
      "slideNumber": null,
      "question": "Which technology helps to manage session in Java Web?",
      "options": [
        {
          "key": "A",
          "text": "Cookies"
        },
        {
          "key": "B",
          "text": "HttpSession"
        },
        {
          "key": "C",
          "text": "URL Rewriting"
        },
        {
          "key": "D",
          "text": "Both A, B and C"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. Both A, B and C",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 556,
      "slideNumber": null,
      "question": "Which method is used to handle POST requests in a servlet?",
      "options": [
        {
          "key": "A",
          "text": "doPost()"
        },
        {
          "key": "B",
          "text": "doGet()"
        },
        {
          "key": "C",
          "text": "processRequest()"
        },
        {
          "key": "D",
          "text": "handlePost()"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. doPost()",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 557,
      "slideNumber": null,
      "question": "What is the correct sequence of the servlet life cycle methods?",
      "options": [
        {
          "key": "A",
          "text": "init(), destroy(), service()"
        },
        {
          "key": "B",
          "text": "service(), init(), destroy()"
        },
        {
          "key": "C",
          "text": "init(), service(), destroy()"
        },
        {
          "key": "D",
          "text": "destroy(), init(), service()"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. init(), service(), destroy()",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 558,
      "slideNumber": null,
      "question": "When using PreparedStatement, what is the main benefit over Statement?",
      "options": [
        {
          "key": "A",
          "text": "Better performance with repeated queries"
        },
        {
          "key": "B",
          "text": "Avoid SQL Injection errors"
        },
        {
          "key": "C",
          "text": "Automatically commit transactions"
        },
        {
          "key": "D",
          "text": "Both A and B are correct"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: D.\nLựa chọn đúng: D. Both A and B are correct",
      "topic": "8. JDBC, Database Connection & JavaBeans",
      "images": []
    },
    {
      "id": 559,
      "slideNumber": null,
      "question": "In a web application, if you store a variable in the ServletContext, it can be accessed by:",
      "options": [
        {
          "key": "A",
          "text": "All Servlets in the same application"
        },
        {
          "key": "B",
          "text": "Only the Servlet that created it"
        },
        {
          "key": "C",
          "text": "Only Servlets in the same package"
        },
        {
          "key": "D",
          "text": "Only Servlets running on the same thread"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. All Servlets in the same application",
      "topic": "2. Java Servlet API & Lifecycle",
      "images": []
    },
    {
      "id": 560,
      "slideNumber": null,
      "question": "Consider the code in the servlet:\n```\nHttpSession session = request.getSession();\nif(session.getAttribute(\"cart\") == null)\n    session.setAttribute(\"cart\", new Hashtable<Integer, Integer>());\n```\nAnd some explanations: A: Retrieves the current session object associated with the request. If no session exists, a new session is created automatically. B: Retrieves the current session object associated with the request. If no session exists, throw an exception. C: Checks if an attribute named \"cart\" not exists in the session, Creates a new shopping cart using a Hashtable<Integer, Integer>. D: If cart is found, remove an existed cart and create a new cart using Hashtable<Integer,Integer>. E: Create a new session automatically\n\nSelect and arrange the statements above to match the given code appropriately.",
      "options": [
        {
          "key": "A",
          "text": "AC"
        },
        {
          "key": "B",
          "text": "B"
        },
        {
          "key": "C",
          "text": "AD"
        },
        {
          "key": "D",
          "text": "CD"
        },
        {
          "key": "E",
          "text": "ACD"
        },
        {
          "key": "F",
          "text": "ED"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. AC",
      "topic": "4. Session Management, Cookies & URL Rewriting",
      "images": []
    },
    {
      "id": 561,
      "slideNumber": null,
      "question": "Which of the following statements MOST accurately describes the characteristics of Implicit Expression Language (EL) variables in the context of Java web applications?",
      "options": [
        {
          "key": "A",
          "text": "The cookie variable is a Set containing all cookies transmitted by the user's browser with the request."
        },
        {
          "key": "B",
          "text": "The param variable is a Map<String, String> that includes only the first value for any parameter with multiple values."
        },
        {
          "key": "C",
          "text": "The sessionScope variable is a Map<String, Object> that stores all session and cookie attributes to identify the user accessing the application."
        },
        {
          "key": "D",
          "text": "The requestScope variable requires invoking a method on the request object to retrieve its attributes."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. The param variable is a Map<String, String> that includes only the first value for any parameter with multiple values.",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 562,
      "slideNumber": null,
      "question": "Which JSTL tag is used to check if a variable or attribute is null or empty?",
      "options": [
        {
          "key": "A",
          "text": "< c: if rnyVar}\" >"
        },
        {
          "key": "B",
          "text": "< c: when test=\" $ myVa r >"
        },
        {
          "key": "C",
          "text": "< c: check >"
        },
        {
          "key": "D",
          "text": "\".c:vaiiciate my Var}\" >"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. < c: if rnyVar}\" >",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 563,
      "slideNumber": null,
      "question": "Which of the following JSTL usages correctly generates the URL https://fpt.edu.vn/student?code=SE123456",
      "options": [
        {
          "key": "A",
          "text": "```\n<c:url value=\"https://fpt.edu.vn/student\">\n    <c:param name=\"code\" value=\"SE123456\" />\n</c:url>\n```"
        },
        {
          "key": "B",
          "text": "```\n<c:url value=\"https://fpt.edu.vn/student\">\n    <c:param code=\"SE123456\" />\n</c:url>\n```"
        },
        {
          "key": "C",
          "text": "```\n<c:link value=\"https://fpt.edu.vn/student\">\n    <c:param code=\"SE123456\" />\n</c:link>\n```"
        },
        {
          "key": "D",
          "text": "```\n<c:link value=\"https://fpt.edu.vn/student\">\n    <c:param name=\"code\" value=\"SE123456\" />\n</c:link>\n```"
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. <c:url value=\"https://fpt.edu.vn/student\"> <c:param name=\"code\" value=\"SE123456\" /> </c:url>",
      "topic": "6. Expression Language (EL) & JSTL",
      "images": []
    },
    {
      "id": 564,
      "slideNumber": null,
      "question": "After declaring its tag library, which syntax invokes a custom tag named tagName with the prefix customTag?",
      "options": [
        {
          "key": "A",
          "text": "<jsp:useTag>"
        },
        {
          "key": "B",
          "text": "<jsp:include>"
        },
        {
          "key": "C",
          "text": "<%@ taglib %>"
        },
        {
          "key": "D",
          "text": "<customTag:tagName>"
        }
      ],
      "correctKeys": [
        "D"
      ],
      "isMulti": false,
      "explanation": "Đáp án đã kiểm chứng: D (Cộng đồng: C · FUO AI: D).\nLựa chọn đúng: D. <customTag:tagName>",
      "topic": "5. JSP Scripting, Directives & Standard Actions",
      "images": []
    },
    {
      "id": 565,
      "slideNumber": null,
      "question": "Filter can be defined in which file?",
      "options": [
        {
          "key": "A",
          "text": "web.xml"
        },
        {
          "key": "B",
          "text": "In Java @WebFilter annotation"
        },
        {
          "key": "C",
          "text": "Both A and B"
        },
        {
          "key": "D",
          "text": "No need to define, just implement in Servlet"
        }
      ],
      "correctKeys": [
        "C"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: C.\nLựa chọn đúng: C. Both A and B",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 566,
      "slideNumber": null,
      "question": "When a web request enters a Java web application with filters, how can the operation of the filters be best described?",
      "options": [
        {
          "key": "A",
          "text": "Filters are processed in a random order, not resembling any data structure."
        },
        {
          "key": "B",
          "text": "Filters are added to a stack-like structure as the request proceeds."
        },
        {
          "key": "C",
          "text": "Filters form a queue where the first filter in is the first one out."
        },
        {
          "key": "D",
          "text": "Filters operate in the alphabetical order of the filters name."
        }
      ],
      "correctKeys": [
        "B"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: B.\nLựa chọn đúng: B. Filters are added to a stack-like structure as the request proceeds.",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    },
    {
      "id": 567,
      "slideNumber": null,
      "question": "In a Java web application, when two filters match an incoming request-one via a URL pattern and the other via a Servlet name-which filter takes precedence in the processing chain?",
      "options": [
        {
          "key": "A",
          "text": "The filter matching the request via a URL pattern."
        },
        {
          "key": "B",
          "text": "The filter matching the request via a servlet name."
        },
        {
          "key": "C",
          "text": "The filter declared first in the deployment descriptor."
        },
        {
          "key": "D",
          "text": "The filter processed in alphabetical order based on its name."
        }
      ],
      "correctKeys": [
        "A"
      ],
      "isMulti": false,
      "explanation": "Đáp án Cộng đồng & FUO AI: A.\nLựa chọn đúng: A. The filter matching the request via a URL pattern.",
      "topic": "3. Deployment Descriptor (web.xml), Filters & Listeners",
      "images": []
    }
  ]
};
