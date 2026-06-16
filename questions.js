// ============================================================
// IS 366 - AI for Decision Support Systems
// Complete Question Bank (compiled from all course files + extra practice)
// Topics: AI Concepts (Ch2), Data Mining (Ch4), Machine Learning,
//         Text/Web Mining & Sentiment (Ch7), DSS Framework & Analytics
// ============================================================

const QUESTIONS = [

// =====================================================================
// TOPIC 1: DECISION SUPPORT FRAMEWORK, ANALYTICS & DSS BASICS
// =====================================================================

{ id:"dss1", topic:"DSS & Analytics", type:"mc",
  q:"In the decision-making process proposed by Simon (1977), which phase comes FIRST?",
  options:["Design","Implementation","Choice","Intelligence"], answer:3,
  exp:"Simon's process order is: Intelligence → Design → Choice → Implementation. Intelligence is first: you identify and define the problem before designing or choosing solutions."},

{ id:"dss2", topic:"DSS & Analytics", type:"mc",
  q:"Verification and testing of the proposed solution comes after which stage of the decision-making process?",
  options:["Intelligence","Design","Choice","Implementation"], answer:2,
  exp:"After Choice (selecting a solution), you verify and test it before Implementation. Note: some exam versions phrase this as 'after the Design stage' — read carefully, because verification/testing of the *proposed solution* logically follows Choice."},

{ id:"dss3", topic:"DSS & Analytics", type:"mc",
  q:"Data collection is an activity that should be completed during which stage of the decision-making process?",
  options:["Intelligence","Design","Choice","Implementation"], answer:0,
  exp:"Data collection belongs to the Intelligence phase — gathering information to recognize and understand the problem."},

{ id:"dss4", topic:"DSS & Analytics", type:"mc",
  q:"Which of the following is NOT a step/activity in the design phase of the decision-making process?",
  options:["Set criteria for choice","Search for alternatives","Data collection","Formulate a model"], answer:2,
  exp:"Data collection is part of the Intelligence phase, not Design. The Design phase involves formulating a model, searching for alternatives, and setting criteria for choice."},

{ id:"dss5", topic:"DSS & Analytics", type:"mc",
  q:"In the classic decision support framework, types of decisions are broken into all EXCEPT:",
  options:["Structured","Semi-structured","Unstructured","Undefined"], answer:3,
  exp:"The three decision types are Structured, Semi-structured, and Unstructured. 'Undefined' is not a category."},

{ id:"dss6", topic:"DSS & Analytics", type:"mc",
  q:"A decision support system is needed mainly to solve which type of problems?",
  options:["Semi-structured only","Unstructured only","Structured only","Both Semi-structured and Unstructured"], answer:3,
  exp:"DSS targets semi-structured and unstructured problems. Structured problems can be handled by routine/automated systems (typical information systems)."},

{ id:"dss7", topic:"DSS & Analytics", type:"mc",
  q:"Structured types of decision problems can be solved by typical types of information systems. (Recognize the true/false fact)",
  options:["True — structured problems suit routine information systems","False — they always need a DSS","False — structured problems can't be solved by computers","True — but only by expert systems"], answer:0,
  exp:"TRUE. Structured problems have clear procedures and can be solved by typical/routine information systems. DSS is reserved for semi/unstructured problems."},

{ id:"dss8", topic:"DSS & Analytics", type:"mc",
  q:"Under which type of control in the decision support framework does 'monitoring investment portfolio' typically fall?",
  options:["Managerial","Strategic Planning","Operational","All options are true"], answer:0,
  exp:"Monitoring/managing an investment portfolio is a managerial (management) control activity. (Strategic planning is long-range; operational is day-to-day routine.)"},

{ id:"dss9", topic:"DSS & Analytics", type:"mc",
  q:"The three types of control described in the decision support framework are:",
  options:["Operational, Managerial, Strategic Planning","Operational, Managerial, Organizational","Tactical, Managerial, Strategic","Operational, Tactical, Strategic"], answer:0,
  exp:"The three control types are Strategic Planning, Managerial (Management) Control, and Operational Control. Watch out: 'organizational control' is a wrong distractor."},

{ id:"dss10", topic:"DSS & Analytics", type:"mc",
  q:"What type of external decision-making factor is included by government policy?",
  options:["Political factors","Economic factors","Sociological and psychological factors","Environmental factors"], answer:0,
  exp:"Government policy falls under POLITICAL factors among the external environment factors affecting decisions."},

{ id:"dss11", topic:"DSS & Analytics", type:"mc",
  q:"Which of the following creates a greater need for companies to use decision support systems?",
  options:["More companies using software as a service (SaaS)","The greater number of point-of-sale (POS) terminals","Fast changing business requirements and growing competition","Greater speed and availability of the Internet"], answer:2,
  exp:"Fast-changing business requirements and growing competition increase the need for better, faster decision support."},

{ id:"dss12", topic:"DSS & Analytics", type:"mc",
  q:"A main characteristic of a decision support system is:",
  options:["Provides data access","Provides models","Can be web-based","All options are true"], answer:3,
  exp:"DSS characteristics include providing data access, providing models, and being web-based — all true."},

{ id:"dss13", topic:"DSS & Analytics", type:"mc",
  q:"Business Intelligence (BI) can be characterized as a transformation of:",
  options:["Data → information → decisions → actions","Big Data → data → information → decisions","Actions → decisions → feedback → information","Data → processing → information → actions"], answer:0,
  exp:"BI is the transformation of data → information → decisions → actions."},

{ id:"dss14", topic:"DSS & Analytics", type:"mc",
  q:"What type of analytics answers questions like 'What happened?'",
  options:["Descriptive analytics","Predictive analytics","Prescriptive analytics","Replication"], answer:0,
  exp:"Descriptive analytics describes the current/past situation — 'what happened?'"},

{ id:"dss15", topic:"DSS & Analytics", type:"mc",
  q:"What type of analytics answers questions like 'What will happen?'",
  options:["Descriptive analytics","Predictive analytics","Prescriptive analytics","Business intelligence"], answer:1,
  exp:"Predictive analytics forecasts future outcomes — 'what will happen?'"},

{ id:"dss16", topic:"DSS & Analytics", type:"mc",
  q:"What type of analytics answers questions like 'What should I do?'",
  options:["Descriptive","Predictive","Prescriptive","Business intelligence"], answer:2,
  exp:"Prescriptive analytics recommends actions to take — 'what should I do?'"},

{ id:"dss17", topic:"DSS & Analytics", type:"mc",
  q:"Knowing what is happening in the organization and understanding underlying trends and causes is achieved by:",
  options:["Descriptive analytics","Predictive analytics","Prescriptive analytics","Business intelligence"], answer:0,
  exp:"Understanding current happenings, trends, and causes = descriptive analytics."},

{ id:"dss18", topic:"DSS & Analytics", type:"mc",
  q:"Being able to come up with accurate projections of future events falls under which type of business analytics?",
  options:["Descriptive","Predictive","Prescriptive","Replication"], answer:1,
  exp:"Projecting/forecasting future events = predictive analytics."},

{ id:"dss19", topic:"DSS & Analytics", type:"mc",
  q:"Predictive analytics aims to:",
  options:["Understand what happened in the past","Understand why something happened in the past","Determine what is likely to happen in the future","Describe what is currently occurring"], answer:2,
  exp:"Predictive analytics determines what is likely to happen in the future."},

{ id:"dss20", topic:"DSS & Analytics", type:"mc",
  q:"Making a recommendation of an action to take falls under which type of business analytics?",
  options:["Descriptive","Predictive","Prescriptive","Replication"], answer:2,
  exp:"Recommending an action = prescriptive analytics."},

{ id:"dss21", topic:"DSS & Analytics", type:"mc",
  q:"Which of the following is an enabler of prescriptive analytics?",
  options:["Dashboards","Forecasting","Business reporting","Decision Modeling"], answer:3,
  exp:"Decision modeling/optimization enables prescriptive analytics (recommending best actions). Dashboards/reporting are descriptive; forecasting is predictive."},

{ id:"dss22", topic:"DSS & Analytics", type:"mc",
  q:"What type of system is most suitable for saving daily operational transactions and issuing daily reports?",
  options:["Data Warehouse","Excel","ERP","POS"], answer:2,
  exp:"ERP (Enterprise Resource Planning) handles daily operational transactions and reports across departments. (POS only handles point-of-sale; a data warehouse stores historical, not daily transactional, data.)"},

{ id:"dss23", topic:"DSS & Analytics", type:"mc",
  q:"Which is most suitable for reflecting daily transactions and issuing daily reports?",
  options:["ERP","Data mart","Data Warehouse","All options are true"], answer:0,
  exp:"ERP reflects daily functional transactions across the organization."},

{ id:"dss24", topic:"DSS & Analytics", type:"mc",
  q:"A system that creates a single-source of truth for data items on daily functional activities:",
  options:["Data Warehousing","Enterprise Resource Planning (ERP)","Expert System","Executive Information Systems"], answer:1,
  exp:"ERP integrates daily functional activities into a single source of truth."},

{ id:"dss25", topic:"DSS & Analytics", type:"mc",
  q:"A system that relies mostly on historical and comprehensive data:",
  options:["Enterprise Resource Planning (ERP)","Data Warehousing","Expert System","Executive Information Systems"], answer:1,
  exp:"A Data Warehouse stores historical and comprehensive data for analysis."},

{ id:"dss26", topic:"DSS & Analytics", type:"mc",
  q:"A system that relies mostly on heuristics (what-if-then):",
  options:["Enterprise Resource Planning","Expert System","Executive Information Systems","Data Warehousing"], answer:1,
  exp:"Expert Systems rely on heuristics and if-then rules captured from human experts."},

{ id:"dss27", topic:"DSS & Analytics", type:"mc",
  q:"A system that relies mostly on providing dashboards and easy-to-understand graphics:",
  options:["Enterprise Resource Planning","Expert System","Executive Information Systems","Data Warehousing"], answer:2,
  exp:"Executive Information Systems (EIS) provide dashboards and easy-to-read graphics for executives."},

{ id:"dss28", topic:"DSS & Analytics", type:"mc",
  q:"Which of the following is considered the oldest computerized tool/concept used for decision support?",
  options:["Expert Systems","Business Intelligence","Analytics","Executive Information Systems"], answer:3,
  exp:"Executive Information Systems (EIS) are the oldest of these decision-support tools."},

{ id:"dss29", topic:"DSS & Analytics", type:"mc",
  q:"One of the most important systems that make business intelligence possible is:",
  options:["Enterprise Resource Planning","Expert System","Executive Information Systems","Data Warehousing"], answer:3,
  exp:"Data Warehousing is the foundation that makes business intelligence possible."},

{ id:"dss30", topic:"DSS & Analytics", type:"mc",
  q:"Which of the following is considered the foundation of the business intelligence architecture?",
  options:["Data Mining","Cloud Computing","Big Data","Data Warehousing"], answer:3,
  exp:"Data Warehousing is the foundation of BI architecture."},

{ id:"dss31", topic:"DSS & Analytics", type:"mc",
  q:"Which of the following is considered a smaller subject-based type of data warehouse?",
  options:["Robo advisor","Data mart","Dashboard","Software-as-a-Service (SaaS)"], answer:1,
  exp:"A Data Mart is a smaller, subject-based subset of a data warehouse dedicated to a special business function."},

{ id:"dss32", topic:"DSS & Analytics", type:"mc",
  q:"What is a data mart?",
  options:["A web-based database where clients see transaction history","A system where companies buy data about customers","A smaller subset of a data warehouse dedicated to a special business function","A much larger system than a data warehouse that includes external data"], answer:2,
  exp:"A data mart is a smaller subset of a data warehouse dedicated to a specific business function."},

{ id:"dss33", topic:"DSS & Analytics", type:"mc",
  q:"The letters in the ETL process stand for:",
  options:["Extract, Transform, Load","Enhance, Toggle, Load","Extend, Track, Load","Extract, Terminate, Load"], answer:0,
  exp:"ETL = Extract, Transform, Load — the process of moving data into a warehouse. NOTE: 'Select' and 'Execute' are NOT ETL steps."},

{ id:"dss34", topic:"DSS & Analytics", type:"mc",
  q:"In the Data Warehouse Framework, which of the following is NOT one of the ETL processes?",
  options:["Select","Load","Execute","Integrate"], answer:2,
  exp:"ETL = Extract, Transform, Load. 'Execute' is NOT part of ETL. (Be careful — some versions ask which IS NOT, and the expected wrong-fit answer is 'Execute'.)"},

{ id:"dss35", topic:"DSS & Analytics", type:"mc",
  q:"What does OLAP stand for?",
  options:["Open Language Architecture Protocol","On-Line Analytical Processing","Object Loading App Processor","Organizational Leadership Access Program"], answer:1,
  exp:"OLAP = On-Line Analytical Processing."},

{ id:"dss36", topic:"DSS & Analytics", type:"mc",
  q:"Which of the following is a problem that ERP systems solved?",
  options:["All of the following options are true","Inability to run queries on the database","Inability to create daily reports","Inability to access data from different departments"], answer:3,
  exp:"ERP solved the inability to access/integrate data from different departments (siloed data)."},

{ id:"dss37", topic:"DSS & Analytics", type:"mc",
  q:"Which of the following can be used for forecasting future events?",
  options:["Data warehousing","Data mining","Big data","All of the options are true"], answer:3,
  exp:"All listed (data warehousing, data mining, big data) can support forecasting future events."},

{ id:"dss38", topic:"DSS & Analytics", type:"mc",
  q:"Which of the following is NOT a main feature of a data warehouse?",
  options:["Reflects daily transactions","Holds select historical data","Collects data from different systems","Enables forecasting and predictive analysis"], answer:0,
  exp:"A data warehouse holds HISTORICAL data — it does NOT reflect daily live transactions (that's ERP/transactional systems)."},

{ id:"dss39", topic:"DSS & Analytics", type:"mc",
  q:"Which of the following is closely related to Business Intelligence?",
  options:["Data warehousing","Data mining","Executive information systems","All of the options are true"], answer:3,
  exp:"All of these (data warehousing, data mining, EIS) relate to Business Intelligence."},

{ id:"dss40", topic:"DSS & Analytics", type:"mc",
  q:"A well-known characteristic of big data is that:",
  options:["The data cannot be stored in one location","Social media is one important source of big data","Data processing is conducted on distributed systems","All options are true"], answer:3,
  exp:"All are true characteristics of big data: distributed storage/processing, and social media as a key source."},

{ id:"dss41", topic:"DSS & Analytics", type:"tf",
  q:"Decisions made at the strategic planning level are typically made by people in middle management.",
  answer:false,
  exp:"FALSE. Strategic planning decisions are made by TOP/senior management, not middle management. Middle management handles managerial control."},

{ id:"dss42", topic:"DSS & Analytics", type:"tf",
  q:"One of the characteristics of a decision support system is that it allows easy development by end users.",
  answer:true,
  exp:"TRUE. Ease of development by end users is a recognized DSS characteristic."},

{ id:"dss43", topic:"DSS & Analytics", type:"tf",
  q:"One of the main components of a decision support system is the knowledge-based subsystem.",
  answer:true,
  exp:"TRUE. A DSS can include a knowledge-based (intelligence) subsystem along with data and model subsystems."},

{ id:"dss44", topic:"DSS & Analytics", type:"tf",
  q:"The analytics approach uses programming, machine learning, advanced modeling, and data engineering.",
  answer:false,
  exp:"Per the exam key this was marked FALSE — the textbook's 'analytics' is framed around statistics, management science, and operations research rather than that specific list. (Analytics is most known for using data, statistics, big data, and mathematical modeling.)"},

{ id:"dss45", topic:"DSS & Analytics", type:"mc",
  q:"Analytics is most known for using the following, EXCEPT:",
  options:["Knowledge","Statistics","Big Data","Mathematical Modeling"], answer:0,
  exp:"Analytics is known for using statistics, big data, and mathematical modeling. 'Knowledge' (as in knowledge-based expert systems) is the exception."},

{ id:"dss46", topic:"DSS & Analytics", type:"mc",
  q:"As per the course textbook, which of the following is NOT one of the main disciplines/areas used in Analytics?",
  options:["Statistics","Cognitive computing","Operations research","Management science"], answer:1,
  exp:"The main analytics disciplines are statistics, operations research, and management science. Cognitive computing is an AI technology, not an analytics discipline."},

{ id:"dss47", topic:"DSS & Analytics", type:"mc",
  q:"What is one of the main problems of analytics?",
  options:["It uses mathematical modeling","Used data may not be accurate","It uses statistical analysis","All of the options are true"], answer:1,
  exp:"A main problem of analytics: the model is only as good as the input data — poor/inaccurate data leads to poor results."},

{ id:"dss48", topic:"DSS & Analytics", type:"mc",
  q:"Which of the following is a problem with analytics?",
  options:["Changes in environment factors","Quality of data","Quality of the model","All options are true"], answer:3,
  exp:"All are problems: changing environment, data quality, and model quality."},

{ id:"dss49", topic:"DSS & Analytics", type:"tf",
  q:"Among the problems of analytics in meeting enterprise objectives is that models are only as good as the input data used with those models.",
  answer:true,
  exp:"TRUE. 'Garbage in, garbage out' — models are only as good as the input data."},

{ id:"dss50", topic:"DSS & Analytics", type:"tf",
  q:"The outcome of Descriptive analytics is simply: best possible business decisions and actions.",
  answer:false,
  exp:"FALSE. That describes PRESCRIPTIVE analytics. Descriptive analytics simply describes what is/was happening."},

{ id:"dss51", topic:"DSS & Analytics", type:"tf",
  q:"Big data is a subset of structured data.",
  answer:false,
  exp:"FALSE. It's the opposite — most big data is UNSTRUCTURED. Structured data is the smaller, organized subset."},

// =====================================================================
// TOPIC 2: ARTIFICIAL INTELLIGENCE CONCEPTS (Chapter 2 + LLMs)
// =====================================================================

{ id:"ai1", topic:"AI Concepts", type:"mc",
  q:"One possible definition of AI is:",
  options:["A machine that stores large databases","The capabilities of a machine to imitate intelligent human behavior","A program that only follows fixed rules","A system that replaces all human jobs"], answer:1,
  exp:"AI = the capabilities of a machine to imitate intelligent human behavior, concerned with studying and duplicating human thought processes in machines."},

{ id:"ai2", topic:"AI Concepts", type:"tf",
  q:"AI studies the human thought processes while trying to duplicate those processes in machines.",
  answer:true,
  exp:"TRUE. AI studies human thought processes and represents/duplicates them in machines."},

{ id:"ai3", topic:"AI Concepts", type:"tf",
  q:"Learning to do things better over time is NOT a major goal of AI.",
  answer:false,
  exp:"FALSE. Learning to do things better over time IS a major goal of AI (continuous improvement / learning)."},

{ id:"ai4", topic:"AI Concepts", type:"mc",
  q:"Types of intelligence include all of the following EXCEPT:",
  options:["Logical","Movement (body)","Musical","Mechanical"], answer:3,
  exp:"Recognized types of intelligence: linguistic/verbal, logical, spatial, body/movement, musical, interpersonal, intrapersonal, naturalist. 'Mechanical' is not one."},

{ id:"ai5", topic:"AI Concepts", type:"tf",
  q:"Types of intelligence include logical, movement, musical, and interpersonal intelligence.",
  answer:true,
  exp:"TRUE. These are among the recognized multiple intelligences."},

{ id:"ai6", topic:"AI Concepts", type:"mc",
  q:"Which of the following is NOT among the foundations of AI?",
  options:["Machine Learning","Information systems","Internet of Things (IoT)","Sociology"], answer:2,
  exp:"AI's supporting theories include CS, cognitive science, linguistics, mathematics, psychology, statistics, sociology, etc. Internet of Things (IoT) is an application/tool area, not a foundational discipline."},

{ id:"ai7", topic:"AI Concepts", type:"mc",
  q:"Which of the following is a driver of AI?",
  options:["Interest in smart machines","Low cost of AI applications","Availability of quality data","All options are true"], answer:3,
  exp:"AI drivers include interest in smart machines, low cost of AI apps, pressure to increase productivity, quality data availability, and new IT — all true."},

{ id:"ai8", topic:"AI Concepts", type:"mc",
  q:"Which is a benefit of AI?",
  options:["AI completes certain tasks much faster","AI machines do not make arbitrary mistakes","AI machines don't stop to rest or sleep","All options are true"], answer:3,
  exp:"All listed are benefits of AI."},

{ id:"ai9", topic:"AI Concepts", type:"mc",
  q:"In which area below does AI NOT have an advantage over humans?",
  options:["Computational Speed","Consistency","Emotional understanding","Durability"], answer:2,
  exp:"AI lacks genuine emotional understanding — that's a human advantage. AI excels at speed, consistency, and durability."},

{ id:"ai10", topic:"AI Concepts", type:"mc",
  q:"Weak AI focuses on:",
  options:["One narrow field/domain","The full range of human cognition","Replicating humans completely","Emotional reasoning"], answer:0,
  exp:"Weak (narrow) AI focuses on ONE narrow domain (e.g., chess, medical diagnosis, computer vision). Strong AI would exhibit the full range of human cognition."},

{ id:"ai11", topic:"AI Concepts", type:"mc",
  q:"Which of the following is a type of weak AI?",
  options:["Robo advisor","Medical diagnosis","Autonomous vehicles","All options are true"], answer:1,
  exp:"Medical diagnosis is a classic weak (narrow) AI example. (Note: autonomous vehicles are often cited as a narrow-domain example of STRONG AI in this textbook, which is why 'medical diagnosis' is the cleanest weak-AI answer here.)"},

{ id:"ai12", topic:"AI Concepts", type:"mc",
  q:"Which of the following is an example of STRONG AI applications?",
  options:["Chess game","Medical diagnosis","Autonomous vehicles","Automated call centers"], answer:2,
  exp:"In this textbook, autonomous vehicles are cited as a strong-AI example existing in a very narrow domain. Chess, medical diagnosis, and call centers are weak AI."},

{ id:"ai13", topic:"AI Concepts", type:"tf",
  q:"Weak AI reflects a human's full range of activities and includes example applications such as autonomous vehicles.",
  answer:false,
  exp:"FALSE. That describes STRONG AI. Weak AI focuses on one narrow domain."},

{ id:"ai14", topic:"AI Concepts", type:"mc",
  q:"Machines that will have decision-making power are under what flavor of AI?",
  options:["Assisted AI","Autonomous AI","Augmented Intelligence","None of the options is true"], answer:1,
  exp:"Autonomous AI: machines act as experts and have absolute decision-making power (e.g., autonomous vehicles, robo-advisors)."},

{ id:"ai15", topic:"AI Concepts", type:"mc",
  q:"Monitoring systems (like car alerts) are an example of which flavor of AI?",
  options:["Assisted intelligence","Autonomous AI","Augmented intelligence","Strong AI"], answer:0,
  exp:"Assisted intelligence (weak AI) works in narrow domains with clearly defined inputs/outputs — e.g., monitoring systems, car alerts, virtual assistants."},

{ id:"ai16", topic:"AI Concepts", type:"mc",
  q:"Which of the following is an example of assisted intelligence?",
  options:["Healthcare diagnosis","Self-driving cars","Cybercrime fighting","All of the options are true"], answer:0,
  exp:"Healthcare diagnosis (monitoring/narrow tasks) = assisted intelligence. Self-driving = autonomous; cybercrime fighting & e-commerce = augmented."},

{ id:"ai17", topic:"AI Concepts", type:"tf",
  q:"Most AI applications fall in the autonomous AI flavor.",
  answer:false,
  exp:"FALSE. Most AI applications fall under AUGMENTED intelligence (between assisted and autonomous)."},

{ id:"ai18", topic:"AI Concepts", type:"mc",
  q:"This type of algorithm is necessary for making large-scale decisions, but may be difficult due to difficulties in measuring costs, risks, and benefits:",
  options:["Problem identification","Decision nature identification","Method of least squares","Cost-benefit and risk analysis"], answer:3,
  exp:"Cost-benefit and risk analysis is needed for large-scale decisions but is hard when costs/risks/benefits are difficult to measure."},

{ id:"ai19", topic:"AI Concepts", type:"mc",
  q:"An autonomous, small computer program that acts upon changing environments as directed by stored knowledge is called:",
  options:["Machine learning","ERP","Intelligent agent","Expert system"], answer:2,
  exp:"An Intelligent Agent (IA) is an autonomous, small program acting on changing environments using stored knowledge (e.g., virus detection, product recommendation)."},

{ id:"ai20", topic:"AI Concepts", type:"tf",
  q:"An intelligent agent (IA) is an autonomous, small computer program that acts upon changing environments as directed by stored knowledge.",
  answer:true,
  exp:"TRUE — this is the textbook definition of an intelligent agent."},

{ id:"ai21", topic:"AI Concepts", type:"mc",
  q:"A major AI technology where scientists teach computers to identify patterns by showing them large volumes of examples:",
  options:["Expert Systems","Computer Vision","Machine Learning","Deep Learning"], answer:2,
  exp:"Machine Learning teaches computers to identify patterns and make connections from large volumes of examples/data."},

{ id:"ai22", topic:"AI Concepts", type:"mc",
  q:"A major AI technology that uses artificial neural networks is:",
  options:["Expert Systems","Computer Vision","Machine Learning","Deep Learning"], answer:3,
  exp:"Deep Learning uses artificial neural networks and mimics how the human brain works."},

{ id:"ai23", topic:"AI Concepts", type:"mc",
  q:"Which uses neural networks as part of its intelligence processing?",
  options:["Expert systems","Machine learning","Deep learning","Knowledge systems"], answer:2,
  exp:"Deep Learning uses artificial neural networks."},

{ id:"ai24", topic:"AI Concepts", type:"mc",
  q:"Neural networks are mainly associated with which AI technology?",
  options:["Video analytics","Expert system","Deep Learning","Machine and computer vision"], answer:2,
  exp:"Neural networks are mainly associated with Deep Learning."},

{ id:"ai25", topic:"AI Concepts", type:"mc",
  q:"A major AI technology that delivers systems that not only think but keep learning, enabling self-direction based on fresh big data continuously added:",
  options:["Expert Systems","Computer Vision","Chatbots","Deep Learning"], answer:3,
  exp:"Deep Learning delivers self-directing systems that keep learning as new big data flows in."},

{ id:"ai26", topic:"AI Concepts", type:"mc",
  q:"Complex problems that cannot be dealt with using regular machine learning are solved by:",
  options:["Video analytics","Expert system","Machine and computer vision","Deep Learning"], answer:3,
  exp:"Deep Learning handles complex applications that regular machine learning cannot."},

{ id:"ai27", topic:"AI Concepts", type:"mc",
  q:"Deep learning is a subset of:",
  options:["Expert systems","Machine learning","Computer vision","NLP"], answer:1,
  exp:"Deep Learning is a subset of Machine Learning."},

{ id:"ai28", topic:"AI Concepts", type:"mc",
  q:"In the landscape of AI, which relies heavily on knowledge?",
  options:["Intelligent Agents","Chatbots","Expert systems","All options are true"], answer:3,
  exp:"Knowledge-based technologies include expert systems, recommendation engines, chatbots, virtual assistants, and robo-advisors — all rely on knowledge."},

{ id:"ai29", topic:"AI Concepts", type:"mc",
  q:"A main type of AI system where extracted knowledge of people can be saved:",
  options:["Expert system","Deep learning","Computer vision","All of the options are true"], answer:0,
  exp:"Expert systems store extracted human knowledge to generate expert advice."},

{ id:"ai30", topic:"AI Concepts", type:"mc",
  q:"What type of system generates expert advice and gives recommendations?",
  options:["Machine learning","ERP","Intelligent agent","Expert system"], answer:3,
  exp:"Expert systems store knowledge and use it to generate expert advice and recommendations."},

{ id:"ai31", topic:"AI Concepts", type:"mc",
  q:"A knowledge-base can be found in which of the following?",
  options:["Expert system","Decision support system","Chat bot","All of the options are true"], answer:3,
  exp:"A knowledge base can be found in expert systems, DSS, and chatbots — all knowledge-based."},

{ id:"ai32", topic:"AI Concepts", type:"mc",
  q:"Which of the following is a component of an expert system?",
  options:["Knowledge Repository","Response generation","Natural language generator","All options are true"], answer:3,
  exp:"Expert system components include knowledge repository, reasoning/response generation, and NL interface — all true."},

{ id:"ai33", topic:"AI Concepts", type:"mc",
  q:"In knowledge-based systems, the process of collecting/getting this knowledge is called:",
  options:["Knowledge acquisition","Knowledge preparation","Knowledge refining","Knowledge representation"], answer:0,
  exp:"Knowledge acquisition: identifying experts and extracting/structuring their knowledge."},

{ id:"ai34", topic:"AI Concepts", type:"mc",
  q:"The persons responsible for extracting knowledge from experts are called:",
  options:["Knowledge developer","Knowledge collector","None of the options are true","Knowledge engineer"], answer:3,
  exp:"Knowledge engineers are trained to perform knowledge acquisition and build the system."},

{ id:"ai35", topic:"AI Concepts", type:"mc",
  q:"The ability to sit with experts and extract their knowledge to develop a DSS is called:",
  options:["Knowledge acquisition","Knowledge collection","None of the options are true","Knowledge representation"], answer:0,
  exp:"Extracting experts' knowledge = knowledge acquisition."},

{ id:"ai36", topic:"AI Concepts", type:"mc",
  q:"Which is considered the MOST difficult task of building a knowledge-based system?",
  options:["Knowledge acquisition","Natural language generation","Response Generation","Explanation justification"], answer:0,
  exp:"Knowledge acquisition (extracting and structuring expert knowledge) is the most difficult part of building a knowledge-based system."},

{ id:"ai37", topic:"AI Concepts", type:"tf",
  q:"In knowledge-based systems, knowledge acquisition is carried out by selecting the right model and data and then training and testing the model.",
  answer:false,
  exp:"FALSE. That describes machine learning. Knowledge acquisition means extracting knowledge from human experts (interviewing, observing), not training a model."},

{ id:"ai38", topic:"AI Concepts", type:"mc",
  q:"Robots can help with online shopping by collecting shopping info, matching buyers and products, and conducting price/capability comparisons. These are known as:",
  options:["EC droids","Shopbots","Turing AI toys","CRM"], answer:1,
  exp:"Shopbots (shopping bots) help with online shopping by comparing products and prices."},

{ id:"ai39", topic:"AI Concepts", type:"mc",
  q:"The e-commerce 'Hive' example (viewed via YouTube in class) is MOST closely associated with which AI technology?",
  options:["Deep learning","Knowledge based systems","Robotics","Machine learning"], answer:2,
  exp:"The e-commerce Hive example is associated with Robotics (warehouse/fulfillment robots)."},

{ id:"ai40", topic:"AI Concepts", type:"mc",
  q:"Which AI technology is MOST likely to use a camera?",
  options:["Expert Systems","None of the options","Natural language processing","Robotics"], answer:3,
  exp:"Robotics (intelligent robots) use cameras/sensors to perceive their surroundings. (Machine & computer vision also uses cameras — context matters.)"},

{ id:"ai41", topic:"AI Concepts", type:"mc",
  q:"The 'object counter' application is an example of which AI technology?",
  options:["NLP","Expert system","Machine and computer vision","Chatbots"], answer:2,
  exp:"The object counter uses machine and computer vision (image-based automated inspection/analysis)."},

{ id:"ai42", topic:"AI Concepts", type:"mc",
  q:"Predictive maintenance is possible through which AI technology?",
  options:["Video analytics","Knowledge-based systems","Machine learning","NLP"], answer:2,
  exp:"Predictive maintenance (predicting machine failures) is a machine learning application."},

{ id:"ai43", topic:"AI Concepts", type:"mc",
  q:"Which of the following may be used for retail shelf analysis?",
  options:["Robotics","Machine and computer vision","Video analytics","All of the options are true"], answer:3,
  exp:"Retail shelf analysis can use robotics, machine/computer vision, and video analytics — all true."},

{ id:"ai44", topic:"AI Concepts", type:"mc",
  q:"Walmart has started using AI in stores. Which is a main component in their data analysis?",
  options:["Image recognition","Big data","Video analysis","All options are true"], answer:3,
  exp:"Walmart's AI uses image recognition, big data, and video analysis — all main components."},

{ id:"ai45", topic:"AI Concepts", type:"mc",
  q:"Video Analytics is best described as:",
  options:["Applying computer vision techniques to videos to recognize patterns/events","A way to generate spoken language","A method for storing transaction data","A type of expert system"], answer:0,
  exp:"Video analytics applies computer vision to video to recognize patterns and potential events (e.g., trouble behavior at large gatherings)."},

{ id:"ai46", topic:"AI Concepts", type:"tf",
  q:"Video Analytics enables the recognition of patterns that make it useful in predicting potential trouble behavior at major human gatherings.",
  answer:true,
  exp:"TRUE — a textbook example of video analytics."},

{ id:"ai47", topic:"AI Concepts", type:"mc",
  q:"Which strives to have computers produce ordinary spoken language so that people can understand computers more easily?",
  options:["Cognitive computing","Natural language generation","Natural language understanding","Intelligent agents"], answer:1,
  exp:"Natural Language Generation (NLG) produces ordinary spoken/written language so people understand computers."},

{ id:"ai48", topic:"AI Concepts", type:"mc",
  q:"What is the recognition and understanding of spoken languages by a computer?",
  options:["Contextual analysis","Synthetic language processing","Speech understanding","Accent obfuscation"], answer:2,
  exp:"Speech (voice) understanding = recognizing and understanding spoken language (a subfield of NLP / natural language understanding)."},

{ id:"ai49", topic:"AI Concepts", type:"mc",
  q:"NLP (natural language processing) is used for which of the following?",
  options:["Speech generation","Voice understanding","Text recognition","All options are true"], answer:3,
  exp:"NLP covers understanding and generating language in text and voice — all true. NLP has two subfields: natural language understanding and natural language generation."},

{ id:"ai50", topic:"AI Concepts", type:"mc",
  q:"Natural language processing is mainly used for:",
  options:["Understanding written text","Understanding speech","Generating voice responses","All of the options are true"], answer:3,
  exp:"NLP handles written text, speech understanding, and generating responses — all true."},

{ id:"ai51", topic:"AI Concepts", type:"mc",
  q:"Which AI technology is likely to enable communication with people in their native language?",
  options:["Robotics","Natural language processing","All options are true","Chatbots"], answer:2,
  exp:"NLP and Chatbots (which use NLP) both enable native-language communication — so 'All options are true' (the exam-keyed answer)."},

{ id:"ai52", topic:"AI Concepts", type:"mc",
  q:"What is the application of knowledge from cognitive science and CS theories to simulate human thought processes for decision-making support?",
  options:["Natural language processing","Virtual reality","Augmented reality","Cognitive computing"], answer:3,
  exp:"Cognitive computing applies cognitive-science + CS knowledge to simulate human thought (e.g., IBM Watson)."},

{ id:"ai53", topic:"AI Concepts", type:"mc",
  q:"What refers to the integration of digital information with the user environment in real time?",
  options:["Computer Vision","Virtual Reality","Augmented Reality","Video Analytics"], answer:2,
  exp:"Augmented Reality integrates digital information into the real user environment in real time (e.g., Google Maps AR)."},

{ id:"ai54", topic:"AI Concepts", type:"mc",
  q:"Integration of digital information within the user environment in real time, providing real-world interactive experience, is:",
  options:["Augmentation (Augmented Reality)","NLP","Cognitive computing","Deep Learning"], answer:0,
  exp:"This is Augmented Reality (augmentation)."},

{ id:"ai55", topic:"AI Concepts", type:"mc",
  q:"One of the capabilities of a chatbot is:",
  options:["Translating languages","Understanding humans","Understanding written text","All options are true"], answer:3,
  exp:"Chatbots (equipped with NLP) can understand text/speech, converse, and assist — all true."},

{ id:"ai56", topic:"AI Concepts", type:"mc",
  q:"Which of the following is NOT a biometric-related AI technology?",
  options:["Voice recognition","Natural language processing","Industrial robotics","Facial recognition"], answer:2,
  exp:"Biometric-related technologies: NLP, image recognition, voice recognition, biometric recognition. Industrial robotics is NOT biometric."},

{ id:"ai57", topic:"AI Concepts", type:"mc",
  q:"Which of the following is NOT a major AI technology?",
  options:["Parallel processing","Voice recognition","Computer Vision","Machine learning"], answer:0,
  exp:"Parallel processing is a computing technique, not an AI technology. Major AI technologies include ML, deep learning, computer vision, NLP, robotics, etc."},

{ id:"ai58", topic:"AI Concepts", type:"mc",
  q:"Which of the following is NOT a major AI technology?",
  options:["Robotic systems","Video Analytics","Natural language understanding","All options given are major AI technologies"], answer:3,
  exp:"Robotics, video analytics, and natural language understanding are all major AI technologies — so all options given ARE major AI technologies."},

{ id:"ai59", topic:"AI Concepts", type:"mc",
  q:"One of the main AI technologies is:",
  options:["Robotics","Voice recognition","Intelligent agents","All of the options are true"], answer:3,
  exp:"Robotics, voice recognition, and intelligent agents are all AI technologies — all true."},

{ id:"ai60", topic:"AI Concepts", type:"mc",
  q:"Which of the following is NOT one of the known AI applications?",
  options:["Recommender systems","Sensors","Fraud detection","Autonomous vehicles"], answer:1,
  exp:"Sensors are input devices/tools, not an AI application themselves. Recommender systems, fraud detection, and autonomous vehicles are AI applications."},

{ id:"ai61", topic:"AI Concepts", type:"mc",
  q:"Which of the following is NOT an AI application?",
  options:["Smart homes","Prediction","Robotics","Point-of-sale transaction processing"], answer:3,
  exp:"Point-of-sale transaction processing is routine transactional processing, not an AI application."},

{ id:"ai62", topic:"AI Concepts", type:"mc",
  q:"All of the following are types of AI applications, EXCEPT:",
  options:["Smart homes","Autonomous cars","Point of Sale Systems","Robotics"], answer:2,
  exp:"Point of Sale systems are transactional, not AI applications. (Watch the variant where 'Internet of Things' or 'Augmented Reality' is offered — those are tools/technologies, and POS is the cleanest non-AI-application answer.)"},

{ id:"ai63", topic:"AI Concepts", type:"mc",
  q:"Which of the following is an example of an application of AI in marketing?",
  options:["Talent acquisition","Smart sourcing","Sales Forecasting","All options are true"], answer:2,
  exp:"Sales forecasting is an AI marketing application. (Talent acquisition is HR.) Among these, sales forecasting is the marketing example."},

{ id:"ai64", topic:"AI Concepts", type:"mc",
  q:"A main advantage of using AI in marketing:",
  options:["Predictive pricing of products","Improved search engine results","Targeting ads to the right people","All of the options are true"], answer:3,
  exp:"AI in marketing: dynamic/predictive pricing, smart search, ad targeting, segmentation — all true."},

{ id:"ai65", topic:"AI Concepts", type:"mc",
  q:"For which of the following is AI used in marketing and advertising?",
  options:["Customer segmentation","Website design","All options are true","Dynamic pricing"], answer:2,
  exp:"AI in marketing includes customer segmentation, website design, dynamic pricing, recommendations, etc. — all true."},

{ id:"ai66", topic:"AI Concepts", type:"mc",
  q:"Which of the following is NOT a main application of AI in marketing?",
  options:["Product recommendations","Logistics and transportation","Dynamic pricing using customer behavior analysis","Customer segmentation"], answer:1,
  exp:"Logistics and transportation is a production/operations application, NOT marketing. Recommendations, dynamic pricing, and segmentation are marketing applications."},

{ id:"ai67", topic:"AI Concepts", type:"mc",
  q:"A main advantage of using AI in Human Resources:",
  options:["Hiring the right persons","Remote access to HR data","Easily applying for vacation days","All of the options are true"], answer:0,
  exp:"AI in HR: recruitment/talent acquisition (hiring the right people), training, performance assessment, retention. Hiring the right persons is the clear HR advantage."},

{ id:"ai68", topic:"AI Concepts", type:"mc",
  q:"For which of the following is AI used in Human Resources management?",
  options:["Future sales forecasting","Detecting hackers","All options are true","Personalized training"], answer:3,
  exp:"AI in HR includes personalized training, recruitment, performance assessment, and retention. (Sales forecasting = marketing; detecting hackers = security.) Personalized training is the HR answer."},

{ id:"ai69", topic:"AI Concepts", type:"mc",
  q:"Which of the following is best known for recommending products?",
  options:["Robotics","Natural language processing","Intelligent agents","All of the options are true"], answer:2,
  exp:"Intelligent agents are best known for making product/price recommendations."},

{ id:"ai70", topic:"AI Concepts", type:"mc",
  q:"Artificial intelligence is about which of the following?",
  options:["Understanding human language","Reducing efforts by humans","Reducing costs of performing work","All of the options are true"], answer:3,
  exp:"AI aims at understanding human language, reducing human effort, and reducing work costs — all true."},

{ id:"ai71", topic:"AI Concepts", type:"mc",
  q:"Which of the following is NOT a technology or application of AI?",
  options:["Speech understanding","Statistics","Machine learning","Smart homes"], answer:1,
  exp:"Statistics is a supporting discipline/theory, not an AI technology or application by itself."},

{ id:"ai72", topic:"AI Concepts", type:"tf",
  q:"In artificial intelligence, speech and voice generation is considered a subset of natural language processing.",
  answer:true,
  exp:"TRUE. NLP includes natural language generation (which covers speech/voice generation) and natural language understanding."},

{ id:"ai73", topic:"AI Concepts", type:"tf",
  q:"In artificial intelligence, natural language processing is considered a subset of speech and voice generation.",
  answer:false,
  exp:"FALSE — it's reversed. Speech/voice generation is a subset of NLP, not the other way around."},

{ id:"ai74", topic:"AI Concepts", type:"mc",
  q:"Large Language Models (LLMs) are trained using which deep learning architecture?",
  options:["Convolutional networks","Transformer architectures","Decision trees","K-means"], answer:1,
  exp:"LLMs are trained on very large text datasets using deep learning TRANSFORMER architectures."},

{ id:"ai75", topic:"AI Concepts", type:"tf",
  q:"Transformers in LLMs use self-attention mechanisms to process all words in context in parallel (simultaneously).",
  answer:true,
  exp:"TRUE. Transformers use self-attention to process all words in context simultaneously (in parallel), enabling scalable language understanding."},

{ id:"ai76", topic:"AI Concepts", type:"tf",
  q:"Transformers in LLMs use self-attention mechanisms to process all words in context in sequence (one after another).",
  answer:false,
  exp:"FALSE. Transformers process words in PARALLEL (simultaneously), not in sequence — that parallelism is a key advantage over older sequential models (RNNs)."},

{ id:"ai77", topic:"AI Concepts", type:"mc",
  q:"In an LLM, self-attention mechanisms are used to:",
  options:["Store transaction data","Model relationships between words","Compress images","Cluster customers"], answer:1,
  exp:"Self-attention models the relationships between words (e.g., resolving what 'it' refers to in a sentence)."},

{ id:"ai78", topic:"AI Concepts", type:"mc",
  q:"LLMs (like ChatGPT) are used for all of the following EXCEPT:",
  options:["Text generation","Question answering / conversational agents","Code generation","Storing structured financial ledgers"], answer:3,
  exp:"LLMs are used for text generation, Q&A, conversation, code generation, sentiment analysis, and information extraction — not for storing structured ledgers."},

{ id:"ai79", topic:"AI Concepts", type:"mc",
  q:"Which of the following is NOT true about a chatbot?",
  options:["It is considered a knowledge-based system","It has the ability to understand spoken words","Its main function is analyzing images","It has the ability to generate written text"], answer:2,
  exp:"A chatbot's main function is conversational text/voice — NOT analyzing images (that's computer vision)."},

{ id:"ai80", topic:"AI Concepts", type:"tf",
  q:"One possible definition of AI is: the capabilities of a machine to imitate intelligent human behavior.",
  answer:true,
  exp:"TRUE — this is the textbook definition of AI."},

// =====================================================================
// TOPIC 3: DATA MINING (Chapter 4)
// =====================================================================

{ id:"dm1", topic:"Data Mining", type:"mc",
  q:"The main purpose of data mining is to use large sets of data to recognize:",
  options:["Experts in a field","Statistical models","The business vision","Patterns in the data"], answer:3,
  exp:"Data mining extracts useful PATTERNS/knowledge from large sets of data."},

{ id:"dm2", topic:"Data Mining", type:"mc",
  q:"What is the main advantage of data mining?",
  options:["Discovering patterns in the data","Data cleansing","Encryption of data","All options are true"], answer:0,
  exp:"The main advantage of data mining is discovering patterns in the data. (Book p.237.)"},

{ id:"dm3", topic:"Data Mining", type:"mc",
  q:"Data mining is the process of identifying patterns that are (Fayyad's definition keywords):",
  options:["Valid, novel, potentially useful, understandable","Encrypted and compressed","Random and unstructured","Manually labeled only"], answer:0,
  exp:"Fayyad (1996): data mining identifies valid, novel, potentially useful, and ultimately understandable patterns."},

{ id:"dm4", topic:"Data Mining", type:"mc",
  q:"Which of the following is NOT one of the other known names for data mining?",
  options:["Knowledge discovery","Data dredging","Knowledge understanding","Information harvesting"], answer:2,
  exp:"Other names: knowledge extraction, pattern analysis, knowledge discovery, information harvesting, pattern searching, data dredging. 'Knowledge understanding' is NOT one."},

{ id:"dm5", topic:"Data Mining", type:"mc",
  q:"Data mining is associated with which of the following?",
  options:["Statistics","Management Science","Artificial Intelligence","All of the options are true"], answer:3,
  exp:"Data mining is a blend of multiple disciplines: statistics, AI, machine learning, management science, etc."},

{ id:"dm6", topic:"Data Mining", type:"mc",
  q:"Which of the following areas can be considered part of data mining?",
  options:["Management Science","Artificial Intelligence","Information visualization","All options are true"], answer:3,
  exp:"Data mining blends management science, AI, statistics, machine learning, databases, and information visualization."},

{ id:"dm7", topic:"Data Mining", type:"mc",
  q:"What made data mining a much more important option these days for businesses?",
  options:["Greater use of data warehouses","More data available","Lower data processing costs","All options are true"], answer:3,
  exp:"More data, data warehouses, cheaper processing/storage, and global competition all made data mining more important — all true."},

{ id:"dm8", topic:"Data Mining", type:"tf",
  q:"Data mining environment is typically a client-server or a web-based information systems architecture.",
  answer:true,
  exp:"TRUE — the DM environment is usually client-server or web-based."},

{ id:"dm9", topic:"Data Mining", type:"mc",
  q:"How can data mining help in reducing deaths related to cancer?",
  options:["By learning about previously effective treatments under different circumstances","By collecting diagnostic info about a patient","By tracking the patient's treatment history","All options are true"], answer:3,
  exp:"Data mining in cancer research helps via all of these: learning effective treatments, collecting diagnostics, and tracking history."},

{ id:"dm10", topic:"Data Mining", type:"mc",
  q:"How did data mining help the Miami-Dade police department with unsolved cases?",
  options:["Match collected clues with previous crimes to identify the criminals","Show videos of criminals committing crimes","Encourage people to give information to police","All options are true"], answer:0,
  exp:"Data mining matched collected clues with previous crimes to identify criminals (predictive analytics in policing)."},

{ id:"dm11", topic:"Data Mining", type:"mc",
  q:"What was/were the event(s) that helped the Miami-Dade police department accept data mining in their crime detection operations?",
  options:["A much higher crime rate than last year","The state government recommendation to use technology","The solving of some previously unsolved crimes","All options are true"], answer:2,
  exp:"Success in solving previously unsolved crimes brought credibility and acceptance of data mining."},

{ id:"dm12", topic:"Data Mining", type:"mc",
  q:"Which of the following is a possible application of data mining?",
  options:["Improve customer retention","Predict machine failure","Maximize customer value","All options are true"], answer:3,
  exp:"Data mining applications include churn/retention, predictive maintenance, and maximizing customer value — all true."},

{ id:"dm13", topic:"Data Mining", type:"mc",
  q:"How is data mining useful in customer relationship management (CRM)?",
  options:["Recognizing customers who might leave the company soon","Knowing customers' monthly and annual spending","Recognizing customers as soon as they call the call center","All options are true"], answer:0,
  exp:"In CRM, data mining is used for churn analysis — recognizing customers likely to leave soon."},

{ id:"dm14", topic:"Data Mining", type:"mc",
  q:"Which of the following is an important source of data for data mining?",
  options:["A data warehouse","Web log files","System databases","All options are true"], answer:3,
  exp:"Data sources for DM include data warehouses, web log files, and system databases — all true (and often soft/unstructured data too)."},

{ id:"dm15", topic:"Data Mining", type:"mc",
  q:"Which of the following is NOT a source of data for data mining?",
  options:["Social networks data","Company website log files","Company databases","All options are important sources"], answer:3,
  exp:"All listed (social networks, web logs, company databases) ARE important sources — so the answer is 'All options are important sources.'"},

// ----- The four pattern types / tasks -----
{ id:"dm16", topic:"Data Mining", type:"mc",
  q:"Which broad area of data mining partitions a collection of objects into natural groupings with similar features?",
  options:["Associations","Visualization","Classification","Clustering"], answer:3,
  exp:"Clustering (segmentation) partitions objects into natural groups with similar features."},

{ id:"dm17", topic:"Data Mining", type:"mc",
  q:"Which broad area of data mining tries to discover the existence of relationships between different products?",
  options:["Associations","Visualization","Classification","Clustering"], answer:0,
  exp:"Associations (market-basket analysis) discover relationships between products."},

{ id:"dm18", topic:"Data Mining", type:"mc",
  q:"In association types of patterns:",
  options:["Future expected events/values are determined","Natural grouping of things based on characteristics","The grouping of related things","Determination of things to come in order"], answer:2,
  exp:"Association = grouping of related things (items that co-occur, e.g., products bought together)."},

{ id:"dm19", topic:"Data Mining", type:"mc",
  q:"In segmentation/clustering types of patterns:",
  options:["Future expected events/values are determined","The natural grouping of things based on their characteristics","The grouping of related things (co-occurrence)","The determination of things to come in order"], answer:1,
  exp:"Segmentation/clustering = natural grouping of things based on their characteristics."},

{ id:"dm20", topic:"Data Mining", type:"mc",
  q:"In prediction types of patterns:",
  options:["Future expected events/values are determined","Natural grouping of things","Grouping of related things","Determination of things to come in time order"], answer:0,
  exp:"Prediction = determining future expected events/values based on past data."},

{ id:"dm21", topic:"Data Mining", type:"mc",
  q:"In a sequence/sequential pattern:",
  options:["Future expected events/values are determined","Natural grouping of things","Grouping of related things","The determination of time-ordered events"], answer:3,
  exp:"Sequential relationships discover time-ordered events (e.g., checking → savings → investment account within a year)."},

{ id:"dm22", topic:"Data Mining", type:"mc",
  q:"Clustering is a data mining method that falls under which main data mining task?",
  options:["Prediction","Segmentation","Association","None of the above"], answer:1,
  exp:"Clustering falls under the Segmentation task."},

{ id:"dm23", topic:"Data Mining", type:"mc",
  q:"Sequence analysis is a data mining method that falls under which main data mining task?",
  options:["Prediction","Association","Segmentation","None of the above"], answer:1,
  exp:"Per the exam key, sequence analysis falls under the Association task (it is grouped with link/association methods in the textbook taxonomy)."},

{ id:"dm24", topic:"Data Mining", type:"mc",
  q:"The ability to find some relationship between different entities in DM is called:",
  options:["Clustering","Prediction","Segmentation","Association"], answer:3,
  exp:"Finding relationships between entities = Association."},

{ id:"dm25", topic:"Data Mining", type:"mc",
  q:"The ability to predict the expected value of a specific entity after some time is:",
  options:["Classification","Time-series","Market-basket analysis","Sequence analysis"], answer:1,
  exp:"Predicting a value after some time = Time-series analysis."},

{ id:"dm26", topic:"Data Mining", type:"mc",
  q:"In data mining, finding a relationship between two products commonly together in a shopping cart is known as:",
  options:["Association rule mining","Cluster analysis","Decision trees","Artificial neural networks"], answer:0,
  exp:"Products together in a cart = Association rule mining (market-basket analysis)."},

{ id:"dm27", topic:"Data Mining", type:"mc",
  q:"In data mining, finding a relationship between two or more persons on a social media platform, or two or more websites, would be done through:",
  options:["Segmentation","Market-basket analysis","Link analysis","Sequence analysis"], answer:2,
  exp:"Relationships between people/websites = Link analysis."},

{ id:"dm28", topic:"Data Mining", type:"mc",
  q:"Which data mining method is used to discover relationships between groups of people or things?",
  options:["Link analysis","Market-basket","Sequence analysis","Time series"], answer:0,
  exp:"Link analysis discovers relationships between groups of people or things."},

{ id:"dm29", topic:"Data Mining", type:"mc",
  q:"Which data mining method is used to determine the future expected value of the same variable?",
  options:["Link analysis","Market-basket","Sequence analysis","Time series"], answer:3,
  exp:"Time series determines the future expected value of the same variable over time."},

{ id:"dm30", topic:"Data Mining", type:"mc",
  q:"How did data mining help the Miami-Dade police department (alternate)?",
  options:["Show videos of criminals","Encourage information sharing","Match collected clues with previous crimes","All options are true"], answer:2,
  exp:"Matching collected clues with previous crimes to identify criminals."},

// ----- Supervised vs Unsupervised -----
{ id:"dm31", topic:"Data Mining", type:"mc",
  q:"Supervised learning is used mainly with which data mining task?",
  options:["Association","Prediction","Clustering","Segmentation"], answer:1,
  exp:"Supervised learning (labeled data) is used mainly for Prediction (classification & regression). Book p.242."},

{ id:"dm32", topic:"Data Mining", type:"mc",
  q:"Unsupervised learning is used mainly with which data mining method?",
  options:["Classification","Time-series","Clustering / Link analysis","Prediction"], answer:2,
  exp:"Unsupervised learning (unlabeled data) is used mainly with clustering/segmentation and association/link analysis."},

{ id:"dm33", topic:"Data Mining", type:"mc",
  q:"Supervised learning involves which of the following?",
  options:["Providing only output values to the model","Providing both input and output values to the model","Providing only input values to the model","None of the options"], answer:1,
  exp:"Supervised learning provides BOTH input and output (labeled) values to the model."},

{ id:"dm34", topic:"Data Mining", type:"mc",
  q:"Unsupervised learning involves which of the following?",
  options:["Providing only output values to the model","Providing both input and output values","Providing only input values to the model","None of the options"], answer:2,
  exp:"Unsupervised learning provides only INPUT values (no labels/outputs)."},

{ id:"dm35", topic:"Data Mining", type:"mc",
  q:"Supervised learning is used with which data mining methods?",
  options:["Regression","Link analysis","Clustering","All options are true"], answer:0,
  exp:"Supervised learning is used with regression (and classification). Link analysis/clustering are unsupervised."},

// ----- DM Processes: CRISP-DM, SEMMA, KDD -----
{ id:"dm36", topic:"Data Mining", type:"mc",
  q:"Which data mining process starts with a main process 'business understanding'?",
  options:["SEMMA","CRISP-DM","KDD","All options are true"], answer:1,
  exp:"CRISP-DM starts with Business Understanding. (Steps: Business Understanding → Data Understanding → Data Preparation → Model Building → Testing & Evaluation → Deployment.)"},

{ id:"dm37", topic:"Data Mining", type:"mc",
  q:"During which CRISP-DM step must we recognize the details of the problem?",
  options:["Data understanding","Data preparation","Business understanding","Model Building"], answer:2,
  exp:"Recognizing problem details = Business Understanding (Step 1 of CRISP-DM)."},

{ id:"dm38", topic:"Data Mining", type:"mc",
  q:"Which data mining process involves a step that tries to get a good idea about the OBJECTIVE of the desired data mining model?",
  options:["Classification","CRISP-DM","SEMMA","KDD"], answer:1,
  exp:"CRISP-DM's Business Understanding step focuses on the objective/goal of the model."},

{ id:"dm39", topic:"Data Mining", type:"mc",
  q:"The step where a DM model developer needs to check if the existing data can help create the desired model:",
  options:["Data preparation","Business understanding","Testing and verification","Data understanding"], answer:3,
  exp:"Checking if available data is suitable = Data Understanding (CRISP-DM Step 2)."},

{ id:"dm40", topic:"Data Mining", type:"mc",
  q:"The stage in CRISP-DM where the developer checks to see if data necessary for developing the model exists:",
  options:["Business Understanding","Data Understanding","Data Preparation","Testing & Evaluation"], answer:1,
  exp:"Data Understanding is where you verify if the needed data exists/is available."},

{ id:"dm41", topic:"Data Mining", type:"mc",
  q:"In the CRISP-DM process, which phase takes/demands the MOST (longest) project time?",
  options:["Data Understanding","Data Preparation","Model Building","Testing and Evaluation"], answer:1,
  exp:"Data Preparation typically consumes the most time in a data mining project."},

{ id:"dm42", topic:"Data Mining", type:"mc",
  q:"Which data mining process is considered the MOST comprehensive process that actually involves a data-mining step?",
  options:["Classification","CRISP-DM","SEMMA","KDD"], answer:3,
  exp:"Per the exam key, KDD is treated as the more comprehensive process that explicitly contains a 'data mining' step within it."},

{ id:"dm43", topic:"Data Mining", type:"mc",
  q:"In the SEMMA data mining process, what action is performed in the LAST step?",
  options:["Generate a sample of the data","Evaluate the usefulness of the models (Assess)","Visualize and describe the data","Use statistical/ML models"], answer:1,
  exp:"SEMMA = Sample, Explore, Modify, Model, Assess. The last step is Assess (evaluate usefulness of the models)."},

{ id:"dm44", topic:"Data Mining", type:"mc",
  q:"In the KDD data mining process, the FIRST phase is:",
  options:["Data Understanding","Data Cleaning","Data Selection","Data Transformation"], answer:2,
  exp:"In KDD, the first step is Data Selection (selecting relevant data), followed by cleaning, transformation, mining, interpretation."},

{ id:"dm45", topic:"Data Mining", type:"mc",
  q:"What is the purpose of data transformation in the KDD process?",
  options:["Make changes to the data so it fits better for the model","Make sure the data is cleansed","Select the most appropriate data","All options are true"], answer:0,
  exp:"Data transformation makes changes to data so it fits the model better (e.g., normalization, encoding)."},

{ id:"dm46", topic:"Data Mining", type:"mc",
  q:"What is the most commonly used / popular data mining process?",
  options:["CRISP-DM","SEMMA","All are equal in popularity","KDD"], answer:0,
  exp:"CRISP-DM is ranked the most commonly used data mining methodology/process."},

{ id:"dm47", topic:"Data Mining", type:"mc",
  q:"One of the most popular data mining processes:",
  options:["SEMMA","KDD","CRISP-DM","All options are true"], answer:3,
  exp:"SEMMA, KDD, and CRISP-DM are all popular data mining processes — all true."},

{ id:"dm48", topic:"Data Mining", type:"mc",
  q:"Deciding what questions we want to answer when planning to use data mining is conducted during which step of the DM process?",
  options:["Data understanding","Data preparation","Business understanding","Model Building"], answer:2,
  exp:"Deciding the questions to answer = Business Understanding."},

// ----- Algorithms: Decision Trees, K-means, Apriori, Regression -----
{ id:"dm49", topic:"Data Mining", type:"mc",
  q:"Which algorithm is most suitable for classification problems?",
  options:["Graph-based matching","Apriori","K-means","Decision trees"], answer:3,
  exp:"Decision trees are most suitable for classification problems."},

{ id:"dm50", topic:"Data Mining", type:"mc",
  q:"The most used data mining method is:",
  options:["Clustering","Classification","Time-series","Regression"], answer:1,
  exp:"Classification is the most frequently used data mining method."},

{ id:"dm51", topic:"Data Mining", type:"mc",
  q:"What data mining prediction method is used when predicting a NUMERICAL value?",
  options:["Clustering","Classification","Association","Regression"], answer:3,
  exp:"Regression predicts a numeric value; classification predicts a class label."},

{ id:"dm52", topic:"Data Mining", type:"mc",
  q:"The main difference between regression and classification is:",
  options:["Classification predicts numeric outcomes, regression predicts classes","Regression predicts a numeric value, classification predicts class labels","Classification requires training data while regression does not","Classification uses decision trees, regression uses statistics only"], answer:1,
  exp:"Regression predicts a numeric value; classification predicts class labels."},

{ id:"dm53", topic:"Data Mining", type:"mc",
  q:"The algorithm that employs a divide-and-conquer method and recursively divides a training set until each division consists of examples from one class is:",
  options:["Genetic Algorithm","Apriori algorithm","Decision Tree","None of the above"], answer:2,
  exp:"Decision Tree analysis uses divide-and-conquer, recursively splitting data until divisions are pure (one class)."},

{ id:"dm54", topic:"Data Mining", type:"mc",
  q:"K-means is the most used algorithm for which data mining method?",
  options:["Clustering","Classification","Time-series","Regression"], answer:0,
  exp:"K-means is the most-used clustering algorithm."},

{ id:"dm55", topic:"Data Mining", type:"mc",
  q:"Which algorithm is most used for segmentation?",
  options:["Decision Trees","Apriori","K-means","Linear programming"], answer:2,
  exp:"K-means is most used for segmentation/clustering."},

{ id:"dm56", topic:"Data Mining", type:"mc",
  q:"Which algorithm is most used for association rule mining / market basket analysis?",
  options:["Linear regression","Apriori","K-means","Nonlinear regression"], answer:1,
  exp:"Apriori is the most-used algorithm for association rule mining (market-basket analysis)."},

{ id:"dm57", topic:"Data Mining", type:"mc",
  q:"An algorithm used for market basket analysis is called:",
  options:["Decision tree analysis","K-means clustering","Logistic regression","Apriori algorithm"], answer:3,
  exp:"Apriori is used for market basket / association analysis."},

{ id:"dm58", topic:"Data Mining", type:"mc",
  q:"What are the typical OUTPUTS of running an Apriori algorithm?",
  options:["Number of repetitions of two or more items in transaction records","Number of clusters in the data","Raw transaction data","All options are true"], answer:0,
  exp:"Apriori outputs frequent item sets — i.e., how often two or more items repeat together in transactions."},

{ id:"dm59", topic:"Data Mining", type:"mc",
  q:"In a k-means algorithm, what is the FIRST step in model execution?",
  options:["Calculate distance from each point to each cluster center","Assign each point to the nearest cluster center","Randomly assign K cluster center points on the graph","Re-compute the cluster centers"], answer:2,
  exp:"Step 1: Randomly generate/assign K initial cluster center points."},

{ id:"dm60", topic:"Data Mining", type:"mc",
  q:"In a k-means algorithm, what is the LAST step in model execution (per iteration)?",
  options:["Calculate distance from each point to each cluster center","Assign each point to the nearest cluster center","Randomly assign K cluster center points","Re-compute the cluster centers"], answer:3,
  exp:"After assigning points, the last action in the loop is Re-computing the cluster centers (then repeat until stable)."},

{ id:"dm61", topic:"Data Mining", type:"mc",
  q:"The K-means algorithm used for clustering reaches its conclusion when:",
  options:["The center cluster point values no longer change","It has moved the cluster center K times","K iterations have been executed","All options are true"], answer:0,
  exp:"K-means stops when the cluster centers/assignments stabilize (no longer change) — convergence."},

{ id:"dm62", topic:"Data Mining", type:"mc",
  q:"When using K-means, what is the value of K?",
  options:["Depends on the number of clusters we would like to create","Depends on the number of attributes used as inputs","Depends on whether the graph is 2D or 3D","Always 5"], answer:0,
  exp:"K is the pre-determined number of clusters we want to create."},

{ id:"dm63", topic:"Data Mining", type:"mc",
  q:"Which data mining algorithm(s) can help DECREASE the size and complexity of problems for other data mining methods?",
  options:["K-means","Apriori","Classification","Cluster analysis"], answer:3,
  exp:"Clustering / cluster analysis (e.g., K-means) groups data first, simplifying problems for other methods. (Some versions accept K-means AND Decision trees as the two correct answers.)"},

{ id:"dm64", topic:"Data Mining", type:"mc",
  q:"In decision trees, how are the classification rules created?",
  options:["Manually by the person creating the model","Automatically based on the algorithm and the TRAINING data","Automatically based on the algorithm and the TESTING data","Automatically without any training/testing data"], answer:1,
  exp:"Decision tree rules are created automatically by the algorithm using the TRAINING data."},

{ id:"dm65", topic:"Data Mining", type:"mc",
  q:"Decision tree algorithms mainly differ in which of the following?",
  options:["Splitting criteria","Stopping criteria","Pruning method","All of the above"], answer:3,
  exp:"DT algorithms differ in splitting criteria, stopping criteria, and pruning (generalization) — all of the above."},

{ id:"dm66", topic:"Data Mining", type:"mc",
  q:"In decision trees, 'pruning' is concerned with:",
  options:["Determining when to stop splitting the tree","The variable/value used to split the tree","Determining which part of the tree (leaf nodes) to remove","All options are true"], answer:2,
  exp:"Pruning = deciding which parts (leaf nodes/branches) of the tree to remove to avoid overfitting and generalize better."},

{ id:"dm67", topic:"Data Mining", type:"mc",
  q:"After which stage will a decision tree be able to give output results?",
  options:["The created model has been trained","The classification algorithm has been selected","The classification rules have been generated","All options are true"], answer:0,
  exp:"A decision tree can produce outputs after the model has been trained (rules learned from training data)."},

{ id:"dm68", topic:"Data Mining", type:"mc",
  q:"In decision tree analysis, how is the best splitting attribute selected to start at the root node?",
  options:["The first attribute in the table","The first nominal attribute","It depends on the actual decision tree algorithm being used","The first ordinal attribute"], answer:2,
  exp:"The root split depends on the specific decision tree algorithm (its splitting criterion), not on attribute order."},

// ----- Association rule mining: support/confidence -----
{ id:"dm69", topic:"Data Mining", type:"mc",
  q:"What does the Supp(X→Y) function in association rule mining give?",
  options:["The number of times both X and Y appear together","The percentage of (X and Y together) from the total number of transactions","The percentage of X from the total number of X=Y","The percentage of Y from the total"], answer:1,
  exp:"Support(X→Y) = (number of baskets containing both X and Y) / (total number of baskets) — a percentage of all transactions."},

{ id:"dm70", topic:"Data Mining", type:"mc",
  q:"Confidence(X→Y) in association rule mining is calculated as:",
  options:["Supp(X∪Y)","Supp(X→Y) / Supp(X)","Supp(X) / Supp(Y)","Total baskets / Supp(Y)"], answer:1,
  exp:"Confidence(X→Y) = Support(X→Y) / Support(X) — how often Y appears when X is present."},

{ id:"dm71", topic:"Data Mining", type:"mc",
  q:"The minimum support value in association rule mining is used for:",
  options:["The minimum number of iterations the algorithm must run","The minimum number of associations the algorithm must find","The minimum number of products in a basket to be considered for association","The minimum acceptable confidence value"], answer:2,
  exp:"Minimum support sets the threshold for how frequently item sets must occur to be considered for association rules."},

{ id:"dm72", topic:"Data Mining", type:"mc",
  q:"In a rule {Laptop, Antivirus}→{Service Plan} [30%, 75%], the 30% represents:",
  options:["Confidence","Support","Lift","Accuracy"], answer:1,
  exp:"30% is the SUPPORT — all three items appear together in 30% of total transactions. 75% is the confidence."},

{ id:"dm73", topic:"Data Mining", type:"mc",
  q:"Which of the following is a potential benefit of market basket analysis?",
  options:["Place products next to each other in a store","Simplify complex problems by grouping data","Predict the expected cost of a product after 1 year","All options are true"], answer:0,
  exp:"Market basket analysis lets you place related products together, promote them as a package, or place them apart — 'place products next to each other' is the direct benefit."},

// ----- Model evaluation: confusion matrix, splits, cross-validation -----
{ id:"dm74", topic:"Data Mining", type:"mc",
  q:"What is the name of the estimation method that divides data into TWO parts only — one for training, one for testing?",
  options:["Simple split","K-fold cross validation","Classification split","Nominal split"], answer:0,
  exp:"Simple split (a.k.a. holdout / sample test estimation) divides data into one training set and one testing set."},

{ id:"dm75", topic:"Data Mining", type:"mc",
  q:"What is a different name for the single-split estimation methodology?",
  options:["Simple split","Holdout","Sample test estimation","All options are true"], answer:3,
  exp:"Single split is also called simple split, holdout, or sample test estimation — all true."},

{ id:"dm76", topic:"Data Mining", type:"mc",
  q:"In single (simple) split estimation, what percent/fraction of the data is typically used for TRAINING the model?",
  options:["1/2","1/3","1/4","2/3"], answer:3,
  exp:"In a simple split, about 2/3 (≈66%) is used for training and 1/3 for testing."},

{ id:"dm77", topic:"Data Mining", type:"mc",
  q:"In single test estimation, what percent of the data is used for TESTING the model?",
  options:["About 50%","About 25%","About 30%","About 70%"], answer:2,
  exp:"Roughly 1/3 ≈ 30% is used for testing (and ~2/3 ≈ 70% for training)."},

{ id:"dm78", topic:"Data Mining", type:"mc",
  q:"What is the name of the estimation method that splits the data into possibly 6 different data sets, each used once for testing?",
  options:["Simple split","K-fold cross validation","Classification split","Nominal split"], answer:1,
  exp:"K-fold cross validation splits data into k subsets; each subset is used once for testing while the rest train the model."},

{ id:"dm79", topic:"Data Mining", type:"mc",
  q:"If k=5 in K-fold cross-validation, what percent of the data is used as TESTING data in each run?",
  options:["10%","80%","20%","5%"], answer:2,
  exp:"With k=5, each fold = 1/5 = 20% is used for testing; the other 80% for training."},

{ id:"dm80", topic:"Data Mining", type:"mc",
  q:"If k=4 in K-fold cross-validation, what percent of the data is used as TRAINING data in each run?",
  options:["40%","25%","75%","4%"], answer:2,
  exp:"With k=4, each fold = 25% is testing; so 75% is used for training in each run."},

{ id:"dm81", topic:"Data Mining", type:"mc",
  q:"In an 8-fold cross validation, what is the typical percentage of data used for TESTING the model?",
  options:["1/8","1/4","1/2","7/8"], answer:0,
  exp:"With 8 folds, each fold = 1/8 is used for testing (7/8 for training)."},

{ id:"dm82", topic:"Data Mining", type:"mc",
  q:"Which estimation methodology for classification produces MORE accurate prediction?",
  options:["Single split","K-fold cross-validation","Confusion matrix","All options are true"], answer:1,
  exp:"K-fold cross-validation generally produces more accurate/reliable estimates than a single split."},

{ id:"dm83", topic:"Data Mining", type:"mc",
  q:"Which of the following is used to measure the accuracy level of a prediction (classification) method?",
  options:["Single split","K-fold cross-validation","Confusion matrix","None of the options"], answer:2,
  exp:"A Confusion Matrix measures the accuracy of a classification model (TP, FP, FN, TN)."},

{ id:"dm84", topic:"Data Mining", type:"mc",
  q:"What is the main purpose of using a confusion matrix?",
  options:["Determine which data to use for training/testing","Determine the accuracy of the developed classification model","Determine if there is error or missing data","All options are true"], answer:1,
  exp:"A confusion matrix determines the accuracy of the developed classification model."},

{ id:"dm85", topic:"Data Mining", type:"mc",
  q:"In a confusion matrix with TP=50, FP=20, FN=20, TN=10, what is the accuracy?",
  options:["10%","40%","50%","60%"], answer:3,
  exp:"Accuracy = (TP+TN)/(TP+TN+FP+FN) = (50+10)/(50+10+20+20) = 60/100 = 60%."},

{ id:"dm86", topic:"Data Mining", type:"mc",
  q:"Which formula tells us the percent of truly predicted classes from the overall true predictions?",
  options:["Precision","Accuracy","Recall","True positive rate"], answer:1,
  exp:"Accuracy = correctly predicted / total predictions = percent of truly predicted classes overall."},

// ----- Data types: nominal, ordinal -----
{ id:"dm87", topic:"Data Mining", type:"mc",
  q:"Which of the following is an example of ORDINAL data?",
  options:["First, second, third","Open, closed","Blue, green, yellow","Pen, pencil, marker"], answer:0,
  exp:"Ordinal data has a meaningful ORDER — e.g., first, second, third (or high/middle/low)."},

{ id:"dm88", topic:"Data Mining", type:"mc",
  q:"What is true about ordinal data?",
  options:["Have finite non-ordered values","Categories cannot be ordered meaningfully","Have finite ordered values","Both A and B"], answer:2,
  exp:"Ordinal data has finite values that CAN be ordered meaningfully (e.g., low < medium < high)."},

{ id:"dm89", topic:"Data Mining", type:"mc",
  q:"Which of the following is an example of NOMINAL data?",
  options:["White, green, blue","High, middle, low","First, second, third","All options are true"], answer:0,
  exp:"Nominal data = categories with NO order, e.g., colors (white, green, blue). 'High/middle/low' and 'first/second/third' are ordinal."},

{ id:"dm90", topic:"Data Mining", type:"mc",
  q:"Which of the following is NOT an example of nominal data?",
  options:["High, middle, low","Open, closed","Blue, green, yellow","Pen, pencil, marker"], answer:0,
  exp:"'High, middle, low' is ORDINAL (it has an order), so it is NOT nominal. The others are unordered categories (nominal)."},

{ id:"dm91", topic:"Data Mining", type:"mc",
  q:"Which of the following is an example of nominal data?",
  options:["High, middle, low","A grade, B grade, C grade","0, 50, 100","Pen, pencil, marker"], answer:3,
  exp:"Pen/pencil/marker = unordered categories = nominal. The others have order or are numeric."},

// ----- Taxonomy checks -----
{ id:"dm92", topic:"Data Mining", type:"mc",
  q:"According to the data mining taxonomy in the textbook, which is NOT a data mining TASK?",
  options:["Prediction","Segmentation","Association","Link analysis"], answer:3,
  exp:"The three main tasks are Prediction, Segmentation (Clustering), and Association. Link analysis is a METHOD, not a task."},

{ id:"dm93", topic:"Data Mining", type:"mc",
  q:"According to the textbook taxonomy, which is NOT a data mining METHOD?",
  options:["Regression","Knowledge discovery","Clustering","Market-basket"], answer:1,
  exp:"Knowledge discovery is a synonym/overall term for data mining itself, not a specific method. Regression, clustering, and market-basket are methods."},

{ id:"dm94", topic:"Data Mining", type:"mc",
  q:"For medical research uses of data mining, the best algorithm to use is:",
  options:["Logistic regression","Artificial neural networks","Random forest","A multiple selection of algorithms"], answer:3,
  exp:"For medical research, the best approach is using a multiple selection of algorithms (no single one is best for all cases)."},

// =====================================================================
// TOPIC 4: MACHINE LEARNING FUNDAMENTALS (Dr. Aseel's chapter)
// =====================================================================

{ id:"ml1", topic:"Machine Learning", type:"mc",
  q:"Machine Learning is best defined as a field of AI that enables systems to:",
  options:["Follow fixed rules written by developers","Learn patterns from data to support/automate decisions without being explicitly programmed with rules","Store large databases","Encrypt sensitive data"], answer:1,
  exp:"ML learns patterns from data and uses them to support/automate decisions WITHOUT being explicitly programmed with rules."},

{ id:"ml2", topic:"Machine Learning", type:"mc",
  q:"The key difference between Machine Learning and traditional programming is:",
  options:["ML writes rules explicitly; traditional learns them","ML learns rules from data automatically; traditional uses fixed, developer-written logic","They are identical","Traditional programming uses neural networks"], answer:1,
  exp:"In traditional programming, developers write fixed rules; in ML, the system learns rules from data automatically."},

{ id:"ml3", topic:"Machine Learning", type:"mc",
  q:"Machine Learning methods are typically grouped into which THREE major categories?",
  options:["Supervised, Unsupervised, Reinforcement","Classification, Regression, Clustering","Decision Trees, KNN, K-means","Sample, Explore, Model"], answer:0,
  exp:"The three categories are Supervised, Unsupervised, and Reinforcement learning."},

{ id:"ml4", topic:"Machine Learning", type:"mc",
  q:"Supervised learning learns from:",
  options:["Unlabelled data","Labelled data (where the correct answer/target is known)","Rewards and penalties","Random data"], answer:1,
  exp:"Supervised learning uses LABELLED data — input→output pairs where the correct answer is known."},

{ id:"ml5", topic:"Machine Learning", type:"mc",
  q:"Supervised learning supports which two main tasks?",
  options:["Classification and Regression","Clustering and Association","Sampling and Modeling","Reinforcement and Reward"], answer:0,
  exp:"Supervised learning's two main tasks are Classification (predict a category) and Regression (predict a numeric value)."},

{ id:"ml6", topic:"Machine Learning", type:"mc",
  q:"Which is the most commonly used ML category in business and DSS?",
  options:["Supervised learning","Unsupervised learning","Reinforcement learning","None"], answer:0,
  exp:"Supervised learning (prediction) is the most commonly used ML category in business and DSS."},

{ id:"ml7", topic:"Machine Learning", type:"mc",
  q:"Unsupervised learning works with:",
  options:["Labelled data","Unlabelled data (no predefined outcomes)","Reward signals","Pre-classified data"], answer:1,
  exp:"Unsupervised learning finds patterns/structure in UNLABELLED data with no predefined categories."},

{ id:"ml8", topic:"Machine Learning", type:"mc",
  q:"Which are key unsupervised learning tasks?",
  options:["Classification and Regression","Clustering and Pattern Discovery","Reward optimization","Labeling and training"], answer:1,
  exp:"Key unsupervised tasks: Clustering (grouping similar instances) and Pattern Discovery (e.g., anomaly detection)."},

{ id:"ml9", topic:"Machine Learning", type:"mc",
  q:"Reinforcement learning is a method where an agent learns by:",
  options:["Reading labelled examples","Interacting with an environment and learning from rewards and penalties","Clustering unlabelled data","Memorizing a database"], answer:1,
  exp:"In reinforcement learning, an agent interacts with an environment and learns from rewards (positive) and penalties (negative) — trial and error."},

{ id:"ml10", topic:"Machine Learning", type:"mc",
  q:"In reinforcement learning, the 'agent' is:",
  options:["The reward value","The learner/decision-maker that observes and decides which action to take","The environment","The penalty"], answer:1,
  exp:"The agent is the learner/decision-maker — a program that observes the world and chooses actions to reach a goal."},

{ id:"ml11", topic:"Machine Learning", type:"mc",
  q:"In reinforcement learning, the 'environment' is:",
  options:["The learner","Everything outside the agent (the world, rules, and challenges)","The reward","The training labels"], answer:1,
  exp:"The environment is everything outside the agent — the world the agent lives in, including rules and challenges."},

{ id:"ml12", topic:"Machine Learning", type:"mc",
  q:"In reinforcement learning, a reward signal is:",
  options:["A numerical value telling the agent how well it did","A label provided in advance","A cluster center","An input feature"], answer:0,
  exp:"A reward is a numerical value telling the agent how well it did; positive rewards reinforce behavior, penalties discourage it."},

{ id:"ml13", topic:"Machine Learning", type:"mc",
  q:"Which algorithm is associated with reinforcement learning (sequential decision making)?",
  options:["Decision trees","KNN","K-means","Q-learning"], answer:3,
  exp:"Q-learning is the algorithm associated with reinforcement learning."},

{ id:"ml14", topic:"Machine Learning", type:"mc",
  q:"Which algorithms are used for SUPERVISED learning (prediction)?",
  options:["Decision trees and KNN","K-means and Apriori","Q-learning only","DBSCAN"], answer:0,
  exp:"Decision trees and k-Nearest Neighbors (KNN) are used for supervised learning (prediction)."},

{ id:"ml15", topic:"Machine Learning", type:"mc",
  q:"Which algorithm is used for UNSUPERVISED learning (segmentation)?",
  options:["Decision trees","KNN","K-means","Q-learning"], answer:2,
  exp:"K-means is used for unsupervised learning (clustering/segmentation)."},

{ id:"ml16", topic:"Machine Learning", type:"mc",
  q:"A Decision Tree predicts outcomes by:",
  options:["Splitting data into smaller groups based on decision rules","Measuring distance to neighbors","Grouping by centroids","Maximizing rewards"], answer:0,
  exp:"A decision tree splits data into smaller groups using if-then decision rules in a tree structure."},

{ id:"ml17", topic:"Machine Learning", type:"mc",
  q:"How do Decision Trees work? The FIRST step is:",
  options:["Create a leaf node","Start with the full dataset at the root","Prune branches","Make a prediction"], answer:1,
  exp:"Decision trees start with the full dataset at the root, then select the best feature to split on."},

{ id:"ml18", topic:"Machine Learning", type:"mc",
  q:"A decision tree stops splitting when:",
  options:["Data is sufficiently pure (same class)","No further improvement is possible","Maximum depth is reached","All of the above"], answer:3,
  exp:"Decision trees stop when data is pure, no improvement is possible, or maximum depth is reached — all of the above."},

{ id:"ml19", topic:"Machine Learning", type:"mc",
  q:"A limitation of decision trees is:",
  options:["They can become too complex (overfitting)","They are sensitive to small data changes","They may not be the most accurate vs other models","All of the above"], answer:3,
  exp:"Decision tree limitations: overfitting (too complex), sensitivity to small data changes, and possibly lower accuracy than other models."},

{ id:"ml20", topic:"Machine Learning", type:"mc",
  q:"A strength of decision trees is:",
  options:["Easy to interpret and explain","Requires huge data preparation","Always the most accurate","Never overfits"], answer:0,
  exp:"Decision trees are easy to interpret/explain, mimic human decision-making, and need little data preparation."},

{ id:"ml21", topic:"Machine Learning", type:"mc",
  q:"The key idea of k-Nearest Neighbors (KNN) is:",
  options:["'Group similar data points together'","'Similar cases have similar outcomes'","'Learn from rewards'","'Split data by rules'"], answer:1,
  exp:"KNN is based on 'similar cases have similar outcomes' — it predicts based on the most similar past cases (neighbors)."},

{ id:"ml22", topic:"Machine Learning", type:"mc",
  q:"KNN can be used for:",
  options:["Classification (majority vote)","Regression (average value)","Both classification and regression","Clustering only"], answer:2,
  exp:"KNN works for both classification (majority class among neighbors) and regression (average value of neighbors)."},

{ id:"ml23", topic:"Machine Learning", type:"mc",
  q:"How does KNN make a classification prediction?",
  options:["By majority class among the k nearest neighbors","By averaging all data","By building a tree","By assigning random labels"], answer:0,
  exp:"For classification, KNN uses the majority class among the k nearest neighbors."},

{ id:"ml24", topic:"Machine Learning", type:"mc",
  q:"An important note about KNN is that it:",
  options:["Builds a decision tree","Creates explicit rules","Does NOT build a tree or rules — it uses the data directly at prediction time","Requires reward signals"], answer:2,
  exp:"KNN has no real training phase — it stores data and uses it directly at prediction time (a 'lazy' learner)."},

{ id:"ml25", topic:"Machine Learning", type:"mc",
  q:"A limitation of KNN is:",
  options:["Slow for large datasets","Sensitive to irrelevant features","Choice of k affects performance","All of the above"], answer:3,
  exp:"KNN limitations: slow for large data, sensitive to irrelevant features, choice of k matters, needs good distance measurement — all of the above."},

{ id:"ml26", topic:"Machine Learning", type:"mc",
  q:"k-Means is best described as:",
  options:["A supervised algorithm that predicts labels","An unsupervised algorithm that groups data into k clusters based on similarity","A reinforcement algorithm","A regression algorithm"], answer:1,
  exp:"k-Means is an UNSUPERVISED algorithm that groups data into k clusters based on similarity, each cluster represented by a centroid."},

{ id:"ml27", topic:"Machine Learning", type:"mc",
  q:"In k-Means, each cluster is represented by a:",
  options:["Leaf node","Center (centroid)","Reward signal","Neighbor"], answer:1,
  exp:"Each k-Means cluster is represented by a center (centroid)."},

{ id:"ml28", topic:"Machine Learning", type:"mc",
  q:"A limitation of k-Means is:",
  options:["Must choose k in advance","Sensitive to initial starting points","Sensitive to outliers","All of the above"], answer:3,
  exp:"k-Means limitations: must choose k in advance, sensitive to initial points, struggles with irregular shapes, sensitive to outliers — all of the above."},

{ id:"ml29", topic:"Machine Learning", type:"mc",
  q:"In the simple-split method, training data is approximately:",
  options:["10-20%","70-80%","100%","5%"], answer:1,
  exp:"In a simple split, ~70-80% is used for training and ~20-30% for testing."},

{ id:"ml30", topic:"Machine Learning", type:"mc",
  q:"What is the purpose of k-fold cross validation?",
  options:["To split data into k subsets and conduct k training/testing experiments","To build a single tree","To cluster data","To assign rewards"], answer:0,
  exp:"In k-fold cross validation, data is split into k subsets and k training/testing experiments are conducted (each subset tested once)."},

{ id:"ml31", topic:"Machine Learning", type:"mc",
  q:"The Machine Learning process (in order) is:",
  options:["Data Collection → Data Preparation → Model Training → Model Evaluation → Deployment","Deployment → Training → Collection → Evaluation","Model Training → Data Collection → Deployment","Evaluation → Collection → Preparation"], answer:0,
  exp:"ML process: Data Collection → Data Preparation → Model Training → Model Evaluation → Deployment."},

{ id:"ml32", topic:"Machine Learning", type:"mc",
  q:"Model evaluation basically works by:",
  options:["Comparing predicted results with actual outcomes","Counting the data","Encrypting predictions","Removing outliers"], answer:0,
  exp:"Model evaluation compares the model's predicted results with the actual outcomes."},

{ id:"ml33", topic:"Machine Learning", type:"mc",
  q:"Overfitting means a model:",
  options:["Performs well on training data but poorly on new data","Performs poorly on all data","Cannot be trained","Has no parameters"], answer:0,
  exp:"Overfitting: the model performs well on training data but poorly on new/unseen data (it memorized rather than generalized)."},

{ id:"ml34", topic:"Machine Learning", type:"mc",
  q:"Which is a limitation/risk of Machine Learning?",
  options:["Data quality issues","Bias and fairness problems","Overfitting and over-reliance on automation","All of the above"], answer:3,
  exp:"ML risks include data quality issues, bias/fairness, lack of transparency, overfitting, and over-reliance on automation — all of the above."},

{ id:"ml35", topic:"Machine Learning", type:"mc",
  q:"Machine Learning enhances decision support systems by enabling:",
  options:["Prediction","Automation and personalization","Data-driven insights","All of the above"], answer:3,
  exp:"ML enhances DSS via prediction, automation, personalization, and data-driven insights — all of the above."},

{ id:"ml36", topic:"Machine Learning", type:"tf",
  q:"In reinforcement learning, positive rewards reinforce behavior while penalties discourage it.",
  answer:true,
  exp:"TRUE. Positive rewards reinforce behavior; negative rewards (penalties) discourage it."},

{ id:"ml37", topic:"Machine Learning", type:"tf",
  q:"KNN has a heavy training phase where it builds explicit rules before prediction.",
  answer:false,
  exp:"FALSE. KNN has essentially NO training phase — it stores data and uses it directly at prediction time (no rules/tree built)."},

{ id:"ml38", topic:"Machine Learning", type:"tf",
  q:"k-Means requires you to specify the number of clusters (k) in advance.",
  answer:true,
  exp:"TRUE. k-Means requires choosing k (number of clusters) in advance — a known limitation."},

// =====================================================================
// TOPIC 5: TEXT MINING, SENTIMENT ANALYSIS & WEB MINING (Chapter 7)
// =====================================================================

{ id:"tm1", topic:"Text & Web Mining", type:"mc",
  q:"How is text mining different from data mining?",
  options:["Text mining works with unstructured data","Text mining is a semi-automated process","Text mining searches for patterns","All options are true"], answer:3,
  exp:"Both are semi-automated and search for patterns, but text mining works with UNSTRUCTURED data — so 'all options are true' in describing text mining."},

{ id:"tm2", topic:"Text & Web Mining", type:"mc",
  q:"The MAIN difference between data mining and text mining is:",
  options:["The nature of the data (structured vs unstructured)","One searches for patterns, the other doesn't","One is automated, the other is fully manual","They are identical"], answer:0,
  exp:"The main difference is the nature of the data: data mining uses structured data; text mining uses unstructured data."},

{ id:"tm3", topic:"Text & Web Mining", type:"tf",
  q:"Text mining works with unstructured data.",
  answer:true,
  exp:"TRUE. Text mining works with unstructured data (Word docs, PDFs, emails, etc.)."},

{ id:"tm4", topic:"Text & Web Mining", type:"mc",
  q:"To perform text mining, you first:",
  options:["Encrypt the data","Impose structure on the data, then mine the structured data","Delete stop words permanently","Build a data warehouse"], answer:1,
  exp:"Text mining first imposes STRUCTURE on the unstructured text, then mines the structured data."},

{ id:"tm5", topic:"Text & Web Mining", type:"mc",
  q:"According to Merrill Lynch and Gartner, what percentage of all corporate data is captured/stored in some unstructured form?",
  options:["15%","75%","25%","85%"], answer:3,
  exp:"About 85% (commonly stated as 85-90%) of corporate data is unstructured."},

{ id:"tm6", topic:"Text & Web Mining", type:"mc",
  q:"In text mining, inputs to the process include unstructured data such as:",
  options:["Word documents, PDF files","Text excerpts, email, and XML files","Email and XML files","All of the above"], answer:3,
  exp:"Text mining inputs include Word docs, PDFs, text excerpts, emails, XML files — all of the above (unstructured data)."},

{ id:"tm7", topic:"Text & Web Mining", type:"mc",
  q:"Which application will derive the LEAST benefit from text mining?",
  options:["Patients' medical files","Patent description files","Sales transaction files","Customer comment files"], answer:2,
  exp:"Sales transaction files are STRUCTURED data, so they benefit least from text mining (which targets unstructured text)."},

{ id:"tm8", topic:"Text & Web Mining", type:"mc",
  q:"What is the purpose of STEMMING?",
  options:["Determining the number of repeated words","Determining the root/base of words","Creating a decision tree structure","Removing words like 'a', 'an', 'to'"], answer:1,
  exp:"Stemming reduces inflected words to their stem/root/base form (e.g., stemmer, stemming, stemmed → stem)."},

{ id:"tm9", topic:"Text & Web Mining", type:"mc",
  q:"What is the process of reducing inflected words to their base form?",
  options:["Tokenization","Noise filtering","Stemming","Clustering"], answer:2,
  exp:"Stemming reduces inflected words to their base/root form."},

{ id:"tm10", topic:"Text & Web Mining", type:"mc",
  q:"In text mining, what are STOP WORDS?",
  options:["Words that come at the end of a sentence","Words that are very few in the matrix","Words that cannot be determined by the analyzer","Words like 'a', 'an', 'the'"], answer:3,
  exp:"Stop words (noise words) are filtered out — common words like 'a', 'an', 'the', 'of', 'on'."},

{ id:"tm11", topic:"Text & Web Mining", type:"mc",
  q:"Which term refers to words like 'a', 'an', and 'the' in text mining?",
  options:["Synonyms","Stop words","Polysemes","Key terms"], answer:1,
  exp:"Words like 'a', 'an', 'the' are stop words."},

{ id:"tm12", topic:"Text & Web Mining", type:"mc",
  q:"In text mining, TOKENIZING is the process of:",
  options:["Transforming the term-by-document matrix to a manageable size","Categorizing a block of text in a sentence","Reducing multiple words to their root","Creating new branches/stems of paragraphs"], answer:1,
  exp:"A token is a categorized block of text in a sentence. Tokenizing categorizes blocks of text by the function they perform."},

{ id:"tm13", topic:"Text & Web Mining", type:"mc",
  q:"What is the purpose of the Singular Value Decomposition (SVD) process?",
  options:["Creating a large structured set of text","Categorizing a block of text in a sentence","Creating a term-by-document matrix","Transforming the term-by-document matrix to a manageable size"], answer:3,
  exp:"SVD (latent semantic indexing) is a dimensionality-reduction method that transforms the term-by-document matrix to a manageable size."},

{ id:"tm14", topic:"Text & Web Mining", type:"mc",
  q:"SYNONYMS are:",
  options:["Spelled differently with identical/similar meanings (e.g., movie, film)","Spelled the same with different meanings","Words filtered out before processing","The root form of words"], answer:0,
  exp:"Synonyms are syntactically different words (spelled differently) with identical/similar meanings (e.g., movie, film, motion picture)."},

{ id:"tm15", topic:"Text & Web Mining", type:"mc",
  q:"POLYSEMES (homonyms) are:",
  options:["Words spelled differently with the same meaning","Words spelled exactly the same with different meanings (e.g., 'bow')","Words removed before processing","The most frequent words"], answer:1,
  exp:"Polysemes/homonyms are spelled identically but have different meanings (e.g., 'bow' = bend forward, front of ship, weapon)."},

{ id:"tm16", topic:"Text & Web Mining", type:"mc",
  q:"A CORPUS in text mining is:",
  options:["A single word extracted from text","A large and structured set of texts prepared for knowledge discovery","The root form of a word","A stop word list"], answer:1,
  exp:"A corpus is a large and structured set of texts prepared for conducting knowledge discovery."},

{ id:"tm17", topic:"Text & Web Mining", type:"mc",
  q:"The Term-by-Document Matrix (TDM) lists:",
  options:["Terms in columns, documents in rows, frequencies in cells","Documents in columns only","Only stop words","Only the corpus name"], answer:0,
  exp:"In the TDM, terms are listed in columns, documents in rows, and the frequency in cells (the occurrence matrix)."},

{ id:"tm18", topic:"Text & Web Mining", type:"mc",
  q:"How can we reduce the dimensionality of the (sparse) TDM?",
  options:["Manual review by a domain expert","Eliminate terms with very few occurrences","Use Singular Value Decomposition (SVD)","All of the above"], answer:3,
  exp:"TDM dimensionality can be reduced manually, by removing rare terms, or via SVD — all of the above."},

{ id:"tm19", topic:"Text & Web Mining", type:"mc",
  q:"The three-step text mining process is:",
  options:["Establish the corpus → Create the TDM → Extract patterns/knowledge","Sample → Explore → Model","Extract → Transform → Load","Crawl → Index → Rank"], answer:0,
  exp:"Text mining process: (1) Establish the corpus, (2) Create the term-by-document matrix, (3) Extract patterns/knowledge."},

{ id:"tm20", topic:"Text & Web Mining", type:"mc",
  q:"Step 3 of the text mining process (extract patterns/knowledge) can include:",
  options:["Classification (text categorization)","Clustering","Association and trend analysis","All of the above"], answer:3,
  exp:"Pattern extraction in text mining includes classification, clustering, association, and trend analysis — all of the above."},

{ id:"tm21", topic:"Text & Web Mining", type:"mc",
  q:"NLP is a subfield of:",
  options:["Statistics only","Artificial intelligence and computational linguistics","Data warehousing","Operations research"], answer:1,
  exp:"NLP is a subfield of artificial intelligence and computational linguistics, focused on understanding human language."},

{ id:"tm22", topic:"Text & Web Mining", type:"mc",
  q:"WordNet is:",
  options:["A search engine","A hand-coded database of English words, definitions, synonyms, and semantic relations","A clustering algorithm","A type of data warehouse"], answer:1,
  exp:"WordNet is a laboriously hand-coded database of English words, their definitions, synonym sets, and semantic relations — a major NLP resource."},

{ id:"tm23", topic:"Text & Web Mining", type:"mc",
  q:"Sentiment analysis is:",
  options:["A technique to detect favorable/unfavorable opinions toward products/services","A way to encrypt text","A method for storing transactions","A clustering algorithm"], answer:0,
  exp:"Sentiment analysis detects favorable and unfavorable opinions toward specific products and services."},

{ id:"tm24", topic:"Text & Web Mining", type:"mc",
  q:"Sentiment analysis is most useful for which type of application?",
  options:["ERP","Shopping carts","CRM","Expert systems"], answer:2,
  exp:"Sentiment analysis is especially noteworthy in CRM (analyzing customers'/consumers' opinions)."},

{ id:"tm25", topic:"Text & Web Mining", type:"mc",
  q:"Which is a step in the sentiment analysis process?",
  options:["Determining who/what is the target of the sentiment","Determining the objectivity of the word/statement","Determining the sentiment of the analyzed document","All options are true"], answer:3,
  exp:"Sentiment analysis steps: sentiment detection (objectivity), N-P polarity classification, target identification, and collection/aggregation — all true."},

{ id:"tm26", topic:"Text & Web Mining", type:"mc",
  q:"In sentiment analysis, the first step (sentiment detection) is also called:",
  options:["Detection of objectivity (Fact vs Opinion)","Target identification","Aggregation","Polarity classification"], answer:0,
  exp:"Step 1 = sentiment detection / detection of objectivity: distinguishing fact (objective) from opinion (subjective)."},

{ id:"tm27", topic:"Text & Web Mining", type:"mc",
  q:"In sentiment analysis, N-P polarity classification classifies opinion as:",
  options:["Negative vs Positive","Noun vs Pronoun","New vs Past","Nominal vs Polysemic"], answer:0,
  exp:"N-P polarity = Negative vs Positive sentiment classification."},

{ id:"tm28", topic:"Text & Web Mining", type:"mc",
  q:"A method of polarity identification in sentiment analysis uses:",
  options:["A lexicon/dictionary as a reference (e.g., WordNet, SentiWordNet)","A collection of training documents","Both lexicon and training documents","Neither"], answer:2,
  exp:"Polarity can be identified using a lexicon (dictionary like WordNet/SentiWordNet) OR a collection of training documents — both methods are used."},

{ id:"tm29", topic:"Text & Web Mining", type:"mc",
  q:"Which is an application area of sentiment analysis?",
  options:["Voice of the Customer (VOC)","Brand Management","Politics and Financial Markets","All of the above"], answer:3,
  exp:"Sentiment analysis applications: VOC, VOM, VOE, brand management, financial markets, politics, government intelligence, e-commerce design, email filtering — all of the above."},

// ----- Web Mining -----
{ id:"tm30", topic:"Text & Web Mining", type:"mc",
  q:"What does Web CONTENT mining involve?",
  options:["Analyzing the URLs in web pages","Analyzing the unstructured content of web pages","Analyzing the pattern of visits to a site","Analyzing PageRank/metadata"], answer:1,
  exp:"Web content mining = extracting useful information from the unstructured textual CONTENT of web pages."},

{ id:"tm31", topic:"Text & Web Mining", type:"mc",
  q:"What does Web STRUCTURE mining involve?",
  options:["Analyzing the URLs / hyperlinks in web pages","Analyzing the unstructured content of web pages","Analyzing the pattern of visits","Analyzing customer comments"], answer:0,
  exp:"Web structure mining analyzes the hyperlinks/URLs and link structure (authoritative pages, hubs, PageRank/HITS) of web pages."},

{ id:"tm32", topic:"Text & Web Mining", type:"mc",
  q:"What does Web USAGE mining involve?",
  options:["Analyzing the URLs in web pages","Analyzing the unstructured content","Analyzing the pattern of visits to a website (clickstream)","Analyzing the PageRank"], answer:2,
  exp:"Web usage mining (Web analytics) analyzes patterns of visits — clickstream data from server logs/cookies."},

{ id:"tm33", topic:"Text & Web Mining", type:"mc",
  q:"Web usage mining is also called:",
  options:["Web analytics","Content extraction","Link analysis","Crawling"], answer:0,
  exp:"Web usage mining is also called Web analytics."},

{ id:"tm34", topic:"Text & Web Mining", type:"mc",
  q:"Clickstream data is:",
  options:["Data stored in server access logs, referrer logs, and client-side cookies","Encrypted transaction data","The corpus of a text mining project","A type of decision tree"], answer:0,
  exp:"Clickstream data is stored in server access logs, referrer logs, and client-side cookies (user characteristics, usage profiles, page/content attributes)."},

{ id:"tm35", topic:"Text & Web Mining", type:"mc",
  q:"Clickstream analysis is most likely used for all of the following EXCEPT:",
  options:["Determining the lifetime value of clients","Hiring new functional area managers","Designing cross-marketing strategies across products","Predicting user behavior"], answer:1,
  exp:"Clickstream analysis is NOT used for hiring managers. It's used for lifetime value, cross-marketing, and predicting user behavior."},

{ id:"tm36", topic:"Text & Web Mining", type:"mc",
  q:"After knowledge is extracted using web usage mining (clickstream analysis), the potential added value is:",
  options:["Improving the data","Improving the website design","Increasing customer value","All options are true"], answer:3,
  exp:"Web usage mining adds value by improving data, website design, and customer value — all true."},

{ id:"tm37", topic:"Text & Web Mining", type:"mc",
  q:"A Web USAGE mining application is:",
  options:["Determine lifetime value of clients","Design cross-marketing strategies","Target ads/coupons and predict user behavior","All of the above"], answer:3,
  exp:"Web usage mining applications: client lifetime value, cross-marketing, ad/coupon targeting, behavior prediction, dynamic content — all of the above."},

{ id:"tm38", topic:"Text & Web Mining", type:"mc",
  q:"Web site usability may be rated POOR if:",
  options:["The average number of page views is large","Time spent on the site is long","Users fail to click on pages / can't find what they need easily","PDFs are downloaded a lot"], answer:2,
  exp:"Poor usability is indicated when users can't navigate effectively (e.g., many wasted page views/time without finding what they need). Per the exam key, the marked answer relates to users failing to navigate efficiently."},

{ id:"tm39", topic:"Text & Web Mining", type:"mc",
  q:"In web structure mining, AUTHORITATIVE pages are:",
  options:["Pages endorsed (linked to) by many developers, indicating importance","Pages with the most stop words","Pages with no hyperlinks","Pages that crawl other pages"], answer:0,
  exp:"Authoritative pages get collective endorsement (many links) from different developers, indicating importance."},

{ id:"tm40", topic:"Text & Web Mining", type:"mc",
  q:"In web structure mining, HUBS are:",
  options:["Pages with no links","Web pages that provide a collection of links to authoritative pages","The root of a decision tree","Stop words"], answer:1,
  exp:"Hubs are pages that provide a collection of links to authoritative pages on a specific topic."},

{ id:"tm41", topic:"Text & Web Mining", type:"mc",
  q:"The HITS (Hyperlink-Induced Topic Search) algorithm is used to:",
  options:["Calculate hubs and authorities by rating pages using hyperlink information","Cluster customers","Predict numeric values","Remove stop words"], answer:0,
  exp:"HITS is a link-analysis algorithm that rates web pages using hyperlink information to calculate hubs and authorities."},

{ id:"tm42", topic:"Text & Web Mining", type:"mc",
  q:"PageRank for webpages is useful to web developers because:",
  options:["It gives developers insight into web user behavior","It uniquely identifies the page developer","Low PageRank attracts more users","It is only for scholarly citations"], answer:0,
  exp:"Per the exam key, PageRank gives developers insight into web user behavior (it reflects page importance based on link structure)."},

{ id:"tm43", topic:"Text & Web Mining", type:"mc",
  q:"A search engine is best described as:",
  options:["A software program that searches for documents based on user keywords","A data warehouse","A clustering algorithm","An expert system"], answer:0,
  exp:"A search engine is software that searches for documents (sites/files) based on the keywords users provide."},

{ id:"tm44", topic:"Text & Web Mining", type:"mc",
  q:"A search engine has which two main cycles?",
  options:["Development cycle and Responding cycle","Training and Testing","Extract and Load","Sample and Assess"], answer:0,
  exp:"Search engines have a Development Cycle (build the index) and a Responding Cycle (answer queries)."},

{ id:"tm45", topic:"Text & Web Mining", type:"mc",
  q:"A Web Crawler (spider) is:",
  options:["Software that systematically browses the web to find and fetch web pages","A clustering tool","A type of stop word","A reward signal"], answer:0,
  exp:"A web crawler/spider systematically browses the web to find and fetch pages (part of the development cycle)."},

{ id:"tm46", topic:"Text & Web Mining", type:"mc",
  q:"The Document Indexer processes documents using steps including:",
  options:["Preprocessing, parsing (text mining), creating the term-by-document matrix","Encrypting and compressing","Clustering and rewarding","Sampling and assessing"], answer:0,
  exp:"The document indexer preprocesses, parses (using text mining tools), and creates the term-by-document matrix."},

{ id:"tm47", topic:"Text & Web Mining", type:"mc",
  q:"In a search engine's response cycle, the Query Analyzer:",
  options:["Receives the search request and converts it to a standardized data structure","Crawls the web","Builds the index","Removes stop words from documents"], answer:0,
  exp:"The Query Analyzer receives the user's search request and converts it into a standardized structure for matching against the document database."},

{ id:"tm48", topic:"Text & Web Mining", type:"mc",
  q:"Search Engine Optimization (SEO) is:",
  options:["Intentional activity affecting the visibility of a site in a search engine's natural (unpaid/organic) results","Paying for ads only","Encrypting a website","Building a data warehouse"], answer:0,
  exp:"SEO is the intentional activity of affecting a site's visibility in a search engine's natural (unpaid/organic) results."},

{ id:"tm49", topic:"Text & Web Mining", type:"mc",
  q:"Web mining is the process of discovering intrinsic relationships from web data, which can be:",
  options:["Textual","Linkage","Usage","All of the above"], answer:3,
  exp:"Web mining discovers relationships from web data that is textual (content), linkage (structure), or usage — all of the above."},

{ id:"tm50", topic:"Text & Web Mining", type:"mc",
  q:"Text analytics is a BROADER concept that includes:",
  options:["Information retrieval, text mining, data mining, web mining, and NLP","Only stemming","Only clustering","Only sentiment analysis"], answer:0,
  exp:"Text analytics is broader, including information retrieval, text mining, data mining, web mining, and NLP."},

{ id:"tm51", topic:"Text & Web Mining", type:"mc",
  q:"Information retrieval is:",
  options:["Searching and identifying relevant documents for a given set of key terms","Building a decision tree","Removing outliers","Clustering customers"], answer:0,
  exp:"Information retrieval = searching and identifying relevant documents for a given set of key terms."},

{ id:"tm52", topic:"Text & Web Mining", type:"mc",
  q:"Which is a text mining APPLICATION AREA?",
  options:["Information extraction and topic tracking","Summarization and categorization","Clustering, concept linking, and question answering","All of the above"], answer:3,
  exp:"Text mining application areas: information extraction, topic tracking, summarization, categorization, clustering, concept linking, question answering — all of the above."},

{ id:"tm53", topic:"Text & Web Mining", type:"tf",
  q:"Data mining environment is typically a client-server or web-based information systems architecture.",
  answer:true,
  exp:"TRUE — both data mining and text mining typically operate in client-server or web-based architectures."},

{ id:"tm54", topic:"Text & Web Mining", type:"mc",
  q:"Predicting that a bank customer who opened a checking account, then a savings account, will open an investment account within six months is called:",
  options:["Association analysis","Sequence analysis","Clustering","Classification"], answer:1,
  exp:"Time-ordered prediction of events (checking → savings → investment) = SEQUENCE analysis (sequential relationship)."},

{ id:"tm55", topic:"Text & Web Mining", type:"tf",
  q:"Predicting that a bank customer who opened a checking account followed by a savings account will open an investment account within six months is called sequence analysis.",
  answer:true,
  exp:"TRUE — this is the textbook example of sequential relationship / sequence analysis."},

// =====================================================================
// EXTRA TRUE/FALSE PRACTICE (mirrors the 20 T/F exam section)
// =====================================================================

{ id:"tf_x1", topic:"DSS & Analytics", type:"tf",
  q:"Simon's decision-making process order is: Intelligence, Design, Choice, Implementation.",
  answer:true, exp:"TRUE. The order is Intelligence → Design → Choice → Implementation."},
{ id:"tf_x2", topic:"DSS & Analytics", type:"tf",
  q:"Descriptive analytics tells you what action you should take.",
  answer:false, exp:"FALSE. That is PRESCRIPTIVE analytics. Descriptive tells you what happened."},
{ id:"tf_x3", topic:"DSS & Analytics", type:"tf",
  q:"A data warehouse stores current daily transactions in real time.",
  answer:false, exp:"FALSE. Data warehouses store HISTORICAL data; ERP/transactional systems handle daily live transactions."},
{ id:"tf_x4", topic:"DSS & Analytics", type:"tf",
  q:"ETL stands for Extract, Transform, Load.",
  answer:true, exp:"TRUE. ETL = Extract, Transform, Load."},
{ id:"tf_x5", topic:"DSS & Analytics", type:"tf",
  q:"A data mart is larger than a data warehouse.",
  answer:false, exp:"FALSE. A data mart is a SMALLER, subject-based subset of a data warehouse."},
{ id:"tf_x6", topic:"DSS & Analytics", type:"tf",
  q:"DSS is mainly designed for structured problems.",
  answer:false, exp:"FALSE. DSS targets semi-structured and unstructured problems."},
{ id:"tf_x7", topic:"AI Concepts", type:"tf",
  q:"Deep learning is a subset of machine learning that uses artificial neural networks.",
  answer:true, exp:"TRUE. Deep learning is a subset of ML and uses artificial neural networks."},
{ id:"tf_x8", topic:"AI Concepts", type:"tf",
  q:"Expert systems rely heavily on knowledge.",
  answer:true, exp:"TRUE. Expert systems are knowledge-based technologies."},
{ id:"tf_x9", topic:"AI Concepts", type:"tf",
  q:"Knowledge acquisition is considered the easiest part of building a knowledge-based system.",
  answer:false, exp:"FALSE. Knowledge acquisition is the MOST DIFFICULT part."},
{ id:"tf_x10", topic:"AI Concepts", type:"tf",
  q:"Natural Language Generation strives to have computers produce ordinary spoken language.",
  answer:true, exp:"TRUE. NLG produces ordinary language so people understand computers."},
{ id:"tf_x11", topic:"AI Concepts", type:"tf",
  q:"Augmented reality integrates digital information with the user environment in real time.",
  answer:true, exp:"TRUE. AR integrates digital info into the real environment in real time."},
{ id:"tf_x12", topic:"AI Concepts", type:"tf",
  q:"Autonomous AI machines have absolute decision-making power.",
  answer:true, exp:"TRUE. Autonomous AI acts as an expert with absolute decision-making power."},
{ id:"tf_x13", topic:"AI Concepts", type:"tf",
  q:"A chatbot's main function is analyzing images.",
  answer:false, exp:"FALSE. A chatbot's main function is conversational text/voice, not image analysis."},
{ id:"tf_x14", topic:"AI Concepts", type:"tf",
  q:"Machine learning teaches computers to identify patterns by showing them many examples.",
  answer:true, exp:"TRUE. ML learns patterns from large volumes of examples/data."},
{ id:"tf_x15", topic:"AI Concepts", type:"tf",
  q:"Sensors are considered a major AI application.",
  answer:false, exp:"FALSE. Sensors are tools/input devices, not an AI application by themselves."},
{ id:"tf_x16", topic:"Data Mining", type:"tf",
  q:"Classification is the most frequently used data mining method.",
  answer:true, exp:"TRUE. Classification is the most frequently used DM method."},
{ id:"tf_x17", topic:"Data Mining", type:"tf",
  q:"Supervised learning uses unlabeled data.",
  answer:false, exp:"FALSE. Supervised learning uses LABELED data (input+output). Unsupervised uses unlabeled."},
{ id:"tf_x18", topic:"Data Mining", type:"tf",
  q:"CRISP-DM starts with Business Understanding.",
  answer:true, exp:"TRUE. CRISP-DM begins with Business Understanding."},
{ id:"tf_x19", topic:"Data Mining", type:"tf",
  q:"Data Preparation typically takes the most time in a data mining project.",
  answer:true, exp:"TRUE. Data Preparation usually consumes the most project time."},
{ id:"tf_x20", topic:"Data Mining", type:"tf",
  q:"Apriori is the most-used algorithm for clustering.",
  answer:false, exp:"FALSE. Apriori is for ASSOCIATION rule mining. K-means is for clustering."},
{ id:"tf_x21", topic:"Data Mining", type:"tf",
  q:"K-means requires choosing the number of clusters (K) in advance.",
  answer:true, exp:"TRUE. K (number of clusters) must be chosen in advance."},
{ id:"tf_x22", topic:"Data Mining", type:"tf",
  q:"Regression predicts a numeric value, while classification predicts a class label.",
  answer:true, exp:"TRUE. Regression = numeric value; classification = class label."},
{ id:"tf_x23", topic:"Data Mining", type:"tf",
  q:"In K-fold cross-validation with k=5, 20% of data is used for testing in each run.",
  answer:true, exp:"TRUE. 1/5 = 20% testing, 80% training per run."},
{ id:"tf_x24", topic:"Data Mining", type:"tf",
  q:"Ordinal data has categories that cannot be ordered.",
  answer:false, exp:"FALSE. Ordinal data CAN be meaningfully ordered (e.g., low<medium<high). Nominal data cannot."},
{ id:"tf_x25", topic:"Data Mining", type:"tf",
  q:"A confusion matrix is used to measure the accuracy of a classification model.",
  answer:true, exp:"TRUE. The confusion matrix (TP/FP/FN/TN) measures classification accuracy."},
{ id:"tf_x26", topic:"Data Mining", type:"tf",
  q:"Decision tree classification rules are created manually by the modeler.",
  answer:false, exp:"FALSE. They are created automatically by the algorithm using the training data."},
{ id:"tf_x27", topic:"Machine Learning", type:"tf",
  q:"Reinforcement learning learns through trial and error using rewards and penalties.",
  answer:true, exp:"TRUE. RL learns by trial and error from rewards and penalties."},
{ id:"tf_x28", topic:"Machine Learning", type:"tf",
  q:"KNN is based on the idea that 'similar cases have similar outcomes'.",
  answer:true, exp:"TRUE. That is the core idea of KNN."},
{ id:"tf_x29", topic:"Machine Learning", type:"tf",
  q:"Overfitting means the model performs poorly on training data but well on new data.",
  answer:false, exp:"FALSE. Overfitting = good on TRAINING data but poor on NEW data."},
{ id:"tf_x30", topic:"Machine Learning", type:"tf",
  q:"Q-learning is associated with reinforcement learning.",
  answer:true, exp:"TRUE. Q-learning is a reinforcement learning algorithm."},
{ id:"tf_x31", topic:"Text & Web Mining", type:"tf",
  q:"Stemming reduces words to their root/base form.",
  answer:true, exp:"TRUE. Stemming reduces inflected words to their stem/root."},
{ id:"tf_x32", topic:"Text & Web Mining", type:"tf",
  q:"Stop words are important keywords that must always be kept.",
  answer:false, exp:"FALSE. Stop words (a, an, the) are filtered OUT before/after processing."},
{ id:"tf_x33", topic:"Text & Web Mining", type:"tf",
  q:"About 85% of corporate data is in unstructured form.",
  answer:true, exp:"TRUE. Roughly 85-90% of corporate data is unstructured."},
{ id:"tf_x34", topic:"Text & Web Mining", type:"tf",
  q:"Web content mining analyzes the hyperlinks/structure between pages.",
  answer:false, exp:"FALSE. That is web STRUCTURE mining. Web CONTENT mining analyzes the unstructured content."},
{ id:"tf_x35", topic:"Text & Web Mining", type:"tf",
  q:"Sentiment analysis is especially useful in CRM.",
  answer:true, exp:"TRUE. Sentiment analysis applications in CRM are especially noteworthy."},
{ id:"tf_x36", topic:"Text & Web Mining", type:"tf",
  q:"SVD (Singular Value Decomposition) increases the size of the term-by-document matrix.",
  answer:false, exp:"FALSE. SVD REDUCES the TDM to a more manageable size (dimensionality reduction)."},
{ id:"tf_x37", topic:"Text & Web Mining", type:"tf",
  q:"A web crawler (spider) systematically browses the web to find and fetch pages.",
  answer:true, exp:"TRUE. A crawler/spider fetches web pages for indexing."},
{ id:"tf_x38", topic:"Text & Web Mining", type:"tf",
  q:"Polysemes are words spelled differently but with the same meaning.",
  answer:false, exp:"FALSE. Polysemes are spelled the SAME with DIFFERENT meanings. Synonyms are spelled differently with the same meaning."},


]; // end QUESTIONS

// Make available globally
if (typeof window !== 'undefined') { window.QUESTIONS = QUESTIONS; }
