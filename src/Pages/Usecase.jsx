import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Usecase.css";
import inventoryManagementImg from '../assets/images/Inventory Management Assistant.png';
import customerSupportImg from '../assets/images/Customer Support Automation Assistant.png';
import assetManagementImg from '../assets/images/Asset Management Assistant.png';
import atcAnalysisImg from '../assets/images/ATC Crash Analysis Assistant.png';
import salesForecastingImg from '../assets/images/Sales Forecasting & Supplier Analysis Assistant.png';
import legalAssistantImg from '../assets/images/Legal Edge Assistant.png';
// import hrAutomationImg from '../assets/images/HR Process Automation Assistant.png';
import emailSearchImg from '../assets/images/Multilingual Email Search & Indexing Assistant.png';
import employeeonboardingImg from '../assets/images/Employee Onboarding Assistant.png';
import prescriptionImg from '../assets/images/Prescription Refill Automation Assistant.png';
import hardwareImg from '../assets/images/Hardware Support Assistant.png';

import { 
  ArrowRight, 
  FileText,  
  Pill, 
  Headphones, 
  UserPlus,
  Radio,
  LaptopMinimalCheck,
  PackageOpen,
  Search,
  Info
} from "lucide-react";
import Footer from "../components/Footer";

const UseCase = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  const categories = [
    { id: "all", name: "All Products" },
    { id: "hr", name: "HR Solutions" },
    { id: "health", name: "Healthcare" },
    { id: "it", name: "IT Solutions" },
    { id: "business", name: "Business Tools" }
  ];

  const products = [
    {
      id: "01",
      title: "Inventory Management Assistant",
      description: "Enhance inventory operations with AI-powered automation for real-time updates, precise tracking, and seamless supplier coordination.",
      link: "https://copilotstudio.microsoft.com/environments/e3ce6a5b-ed6e-e60e-af3e-95da64019813/bots/crd5b_modelDrivenAgent/canvas?__version__=2&enableFileAttachment=true",
      icon: <PackageOpen size={24} />,
      color: "#26C6DA",
      category: "business",
      details: {
        overview: "Streamline your inventory operations effortlessly with AI-powered automation. This assistant enables real-time stock updates, accurate order tracking, and organized product management, eliminating manual errors and ensuring seamless coordination with suppliers. Save time, reduce operational costs, and prevent stockouts with smart inventory control.",
        client: ["Retail & FMCG Companies"],
        challenges: [
          "Manual Processes: Traditional inventory tracking is error-prone and time-consuming, leading to operational disruptions.",
          "Stockouts & Delays: Lack of real-time visibility causes shortages and delays in fulfilling orders.",
          "Inefficient Restocking: Poor order management results in mismatches, increased costs, and wasted resources."
        ],
        solutions: [
          "Centralized Information Management: Access and manage detailed product and supplier records from a single interface.",
          "Instant Inventory Updates: Easily add, edit, or remove product details for accurate and up-to-date stock data.",
          "Real-Time Stock Monitoring: Gain clear visibility into stock levels to prevent shortages and overstock situations.",
          "Automated Restocking: Generate and process purchase orders quickly, reducing manual efforts and delays.",
          "Integrated Order Management: Sync customer orders with inventory updates to ensure accurate fulfillment and timely delivery."
        ],
        features: [
          "Real-Time Stock Updates",
          "Automated Purchase Orders",
          "Accurate Order Tracking",
          "Supplier Coordination & Management",
          "Dynamic Inventory Data Access",
          "Error-Free & Efficient Operations"
        ],
        tools: [
          "Microsoft Copilot Studio – For building the conversational AI chatbot to interact with users and automate processes.",
          "Power Automate – For seamless workflow automation, including purchase order generation and notifications.",
          "Microsoft Dataverse – For storing and managing product, order, and supplier data in a centralized way.",
          "Microsoft Outlook – For automated approval workflows and real-time notifications."
        ],
        image: inventoryManagementImg,
        flowchart: "Trigger → AI Analysis → Process → Complete",
        agent: "https://copilotstudio.microsoft.com/environments/e3ce6a5b-ed6e-e60e-af3e-95da64019813/bots/crd5b_inventoryManagementAssistant/webchat?__version__=2",
      }
    },
    {
      id: "02",
      title: "Customer Support Automation Assistant",
      description: "Deliver autonomous, AI-driven customer support that intelligently manages queries across multiple departments.",
      link: "https://copilotstudio.microsoft.com/environments/Default-008502d6-3f79-46f0-ab37-9354e3fe80ff/bots/cr28f_agent1_KK3RZL/canvas?__version__=2&enableFileAttachment=true",
      icon: <Headphones size={24} />,
      color: "#FFA726",
      category: "business",
      details: {
        overview: "Deliver autonomous, AI-driven customer support that intelligently manages queries across multiple departments. With automated triage, accurate classification, and seamless workflow integration, this assistant accelerates resolution times, improves accountability, and ensures complete visibility for customers and teams.",
        client: "Various Enterprises",
        challenges: [
          "Inefficient Query Management: Queries were misdirected or delayed due to lack of automated triage logic, increasing resolution times.",
          "Inconsistent Issue Handling: Inconsistent handling of similar issues across departments due to missing standard classification.",
          "Incomplete Audit Trails: Fragmented or incomplete audit trails for ticket ownership, handoffs, and resolution history.",
          "Disconnected Reference Materials: Officers relied on disconnected reference documents, leading to redundant effort and knowledge gaps.",
          "Customer Visibility Issues: Customers lacked visibility into ticket status and had no clear point of contact post-submission.",
          "Inflexible Workflows: Existing workflows couldn't adapt quickly to new products, territories, or query types."
        ],
        solutions: [
          "Autonomous Query Handling: Built with Copilot Studio, the assistant triages and classifies tickets dynamically without manual intervention.",
          "Automated Ticket Logging: Digital form submissions (e.g., disputes, requests) logged into SharePoint as structured tickets.",
          "AI-Driven Classification: AI Builder categorizes tickets into relevant departments (Sales Ops, Accounts, Distribution).",
          "Logic-Based Assignment: Power Automate routes tickets to appropriate officers based on predefined rules.",
          "Knowledge Access: Officers retrieve SOPs and case history from SharePoint for faster resolution.",
          "Customer Transparency: Automated personalized emails inform customers of ticket status and provide a direct point of contact."
        ],
        features: [
          "Autonomous Query Triage via Copilot Studio",
          "Automated Ticket Logging in SharePoint",
          "AI-Based Classification & Routing",
          "End-to-End Workflow Automation",
          "Integrated Knowledge Base for Agents",
          "Real-Time Status Notifications for Customers"
        ],
        tools: [
          "Microsoft Copilot Studio – For creating the autonomous customer support agent and dynamic interaction logic.",
          "Microsoft SharePoint – For structured ticket storage and knowledge management.",
          "AI Builder – For intelligent ticket parsing and classification.",
          "Power Automate (Cloud) – For automated workflows, routing, and notifications.",
          "Microsoft Outlook – For sending real-time status updates to customers."
        ],
        image: customerSupportImg,
        flowchart: "Customer → Digital Form → Copilot Studio (Triage) → SharePoint Ticket Creation → AI Builder Classification → Power Automate Assignment → Officer Resolves (via SharePoint) → Customer Notified via Outlook"
      }
    },
    {
      id: "03",
      title: "Asset Management Assistant",
      description: "Manage your vending machines effortlessly with an AI-powered assistant that helps create and update machine details.",
      link: "https://copilotstudio.microsoft.com/environments/Default-008502d6-3f79-46f0-ab37-9354e3fe80ff/bots/cr28f_agent1_KK3RZL/canvas?__version__=2&enableFileAttachment=true",
      icon: <FileText size={24} />,
      color: "#E91E63",
      category: "business",
      details: {
        overview: "Manage your vending machines effortlessly with an AI-powered assistant that helps create and update machine details, manage inventory, and ensure accurate pricing. Data is securely stored in Dataverse, while backend workflows and UI automation are handled seamlessly using Power Automate in both cloud and desktop environments.",
        client: "Facilities & Asset Management Teams",
        challenges: [
          "Complex Machine Setup: Manual configuration of vending machines is time-consuming and error-prone.",
          "Inventory Mismatches: Lack of real-time updates leads to incorrect stock and pricing.",
          "Disconnected Processes: Multiple platforms and manual approvals slow down operations."
        ],
        solutions: [
          "Simplified Machine Management: Quickly create and update vending machines with automated workflows.",
          "Integrated Inventory & Pricing Sync: Keep stock, product details, and pricing accurate and updated in real time.",
          "Data Management with SharePoint: Easily view and update machine and product details through SharePoint lists.",
          "Trigger-Based Automation: Adding or updating data in Dataverse automatically triggers desktop flows for UI automation in your vending machine application.",
          "Automated Approvals: Power Automate ensures smooth approval workflows and backend processing."
        ],
        features: [
          "Create & Update Vending Machines",
          "Accurate Product & Pricing Control",
          "Real-Time Inventory Synchronization",
          "SharePoint Integration for Data View & Update",
          "Trigger-Based UI Automation from Dataverse",
          "Automated Approvals & Notifications"
        ],
        tools: [
          "Microsoft Copilot Studio – For building the conversational assistant interface.",
          "Power Automate (Cloud & Desktop) – For backend workflows, approvals, and UI automation in the vending application.",
          "Microsoft Dataverse – For secure storage of machine, product, and inventory data.",
          "SharePoint – For listing and updating machine and inventory data for easy access."
        ],
        image: assetManagementImg,
        agent: "https://copilotstudio.microsoft.com/environments/Default-008502d6-3f79-46f0-ab37-9354e3fe80ff/bots/cr28f_agent1_KK3RZL/webchat?__version__=2"
      }
    },
    {
      id: "04",
      title: "Employee Onboarding Assistant",
      description: "Simplify and accelerate the onboarding process with an AI-powered assistant that collects new hire data.",
      link: "https://employee-onboardinator-agent.streamlit.app",
      icon: <UserPlus size={24} />,
      color: "#3F51B5",
      category: "hr",
      details: {
        overview: "Simplify and accelerate the onboarding process with an AI-powered assistant that collects new hire data, validates inputs, stores information securely, and provides personalized, conversational guidance for a seamless HR experience.",
        client: "Corporate HR Department",
        challenges: [
          "Time-Consuming Data Collection: Manual onboarding processes are slow and inefficient.",
          "Validation Issues: Ensuring accurate and secure ID verification is complex.",
          "Lack of Personalization: New hires often experience inconsistent and impersonal onboarding journeys."
        ],
        solutions: [
          "Guided Conversational Onboarding: The assistant interacts with new hires, collecting accurate and complete data step by step.",
          "Data Validation: Ensures secure and error-free validation of critical details like IDs, contact info, and educational background.",
          "Secure Data Handling: All information is stored in a reliable database for easy access and integration.",
          "Personalized Experience: AI-driven conversations make onboarding engaging and consistent."
        ],
        features: [
          "Real-Time Data Collection & Validation",
          "Secure Storage in Database",
          "Personalized, Conversational Guidance",
          "Automated Error Detection",
          "Efficient & Consistent HR Workflow",
          "Scalable for Large Teams"
        ],
        tools: [
          "Python – For backend logic and data processing.",
          "Streamlit – For building an interactive and user-friendly onboarding interface.",
          "Database – For secure and scalable data storage.",
          "Model: Gemma2-9B-IT – For generating dynamic, context-aware, and personalized responses."
        ],
        image:employeeonboardingImg,
        flowchart: "Start → Employee Data Input → Validation → Secure Storage → Personalized Flow Assignment → Onboarding Completion",
        agent: "https://employee-onboardinator-agent.streamlit.app"
      }
    },
    {
      id: "05",
      title: "ATC Crash Analysis Assistant",
      description: "Enhance aviation safety by transforming ATC audio communications into structured, data-driven reports.",
      link: "https://blackbox-archive-analysis.streamlit.app/",
      icon: <Radio size={24} />,
      color: "#009688",
      category: "business",
      details: {
        overview: "Enhance aviation safety by transforming ATC audio communications into structured, data-driven reports and enabling instant, context-aware crash analysis through an AI-powered chatbot. This assistant leverages advanced LLMs, transcription models, and AI agents to uncover critical insights, ensuring faster, more accurate safety evaluations.",
        client: "Civil Aviation Authorities",
        challenges: [
          "Manual Analysis Overload: Analyzing hours of pilot-ATC dialogue manually is time-consuming and error-prone.",
          "Missed Critical Errors: Crucial communication slips often go unnoticed due to human limitations.",
          "Slow Reporting: Delays in producing reports can postpone vital safety recommendations, increasing operational risk."
        ],
        solutions: [
          "Rapid Transcription: Convert ATC audio into text using OpenAI Whisper Model, supported by Pydub for audio handling.",
          "AI-Driven Investigation: AI agents (CrewAI, LangChain) analyze conversations like relentless investigators to identify red flags and anomalies.",
          "LLM-Powered Insights: Utilize LLAMA 3.1 for generating context-rich, actionable insights from transcripts.",
          "Interactive Reporting: Deliver structured reports and visual insights through a Streamlit dashboard for ease of interpretation."
        ],
        features: [
          "Automated ATC Audio Transcription",
          "AI-Based Anomaly & Risk Detection",
          "LLM-Powered Contextual Crash Analysis",
          "Dynamic Report Generation",
          "Interactive Streamlit Dashboard for Visualization",
          "End-to-End Workflow from Audio to Actionable Insights"
        ],
        tools: [
          "Python – For scripting, data handling, and integrating components.",
          "OpenAI Whisper – For high-accuracy speech-to-text transcription.",
          "Pydub – For audio preprocessing and format handling.",
          "CrewAI & LangChain – For building autonomous AI investigative workloads.",
          "LLAMA 3.1 – For advanced contextual analysis and report generation.",
          "Streamlit – For creating interactive dashboards and visual reports."
        ],
        image: atcAnalysisImg,
        flowchart: "ATC Audio → Pydub (Preprocessing) → Whisper (Transcription) → CrewAI + LangChain + LLAMA 3.1 (Analysis) → Python Integration → Structured Crash Report → Streamlit Dashboard",
        agent: "https://blackbox-archive-analysis.streamlit.app/"
      }
    },
    {
      id: "06",
      title: "Hardware Support Assistant",
      description: "Enhance the efficiency of hardware support processes with an AI-driven assistant that diagnoses issues from images.",
      link: "https://automated-hardware-support-agent.streamlit.app/",
      icon: <LaptopMinimalCheck size={24} />,
      color: "#795548",
      category: "it",
      details: {
        overview: "Enhance the efficiency of hardware support processes with an AI-driven assistant that diagnoses issues from images, verifies service tags, manages appointments, and identifies nearby service centers—delivering immediate assistance to users while reducing IT team workload.",
        client: "Enterprises and IT service providers",
        challenges: [
          "Complex Defect Analysis: Diagnosing hardware defects from user-uploaded images accurately and efficiently.",
          "Warranty Verification: Validating service tags and warranty details without delays.",
          "Appointment Scheduling: Managing appointments without overlaps or delays.",
          "Service Center Identification: Quickly locating legal and technical nearby service centers for user convenience."
        ],
        solutions: [
          "Automated Defect Analysis: Uses LLaMA 3 Vision Model to quickly analyze and identify hardware issues from uploaded images.",
          "Streamlined Verification: Centralized data repository verifies service tags and warranty status for fast resolution.",
          "Integrated Appointment Booking: Automates scheduling with available technicians for warranty-valid cases.",
          "Service Center Identification: Employs web scraping to locate authorized nearby service centers for immediate support."
        ],
        features: [
          "AI-Based Hardware Defect Detection from Images",
          "Automated Warranty & Service Tag Verification",
          "Real-Time Appointment Scheduling with Technicians",
          "Service Center Locator using Web Data",
          "Reduced IT Personnel Workload",
          "Instant User Assistance"
        ],
        tools: [
          "Python – For backend processing and automation workflows.",
          "LLaMA 3 Vision Model – For image-based defect detection.",
          "Centralized Database – For warranty and service tag verification.",
          "Web Scraping (Python + BeautifulSoup/Scrapy) – For real-time service center identification.",
          "Streamlit – For an interactive user interface and dashboard."
        ],
        image:hardwareImg,
        flowchart: "User Uploads Image → LLaMA 3 Vision (Defect Detection) → Service Tag & Warranty Verification → Appointment Scheduling → Service Center Lookup → User Confirmation & Notification",
        agent: "https://automated-hardware-support-agent.streamlit.app/"
      }
    },
    {
      id: "07",
      title: "Sales Forecasting & Supplier Analysis Assistant",
      description: "An interactive, AI-driven platform that delivers data-driven insights for sales forecasting and supplier analysis.",
      link: "https://liquorforecasting.streamlit.app/",
      icon: <PackageOpen size={24} />,
      color: "#B13BFF",
      category: "business",
      details: {
        overview: "An interactive, AI-driven platform that delivers data-driven insights for sales forecasting, product performance, and supplier analysis. This assistant enables smarter decision-making, optimized inventory management, and strategic supplier partnerships for improved business outcomes.",
        client: "A Retail or Distribution Company",
        challenges: [
          "Uncertain Sales Trends: Limited visibility into future demand leads to inefficient inventory and supply chain operations.",
          "Complex Supplier Analysis: Difficulty in identifying high-performing suppliers due to fragmented data.",
          "Inconsistent Product Insights: Lack of clear product performance analysis impacts marketing and sales strategies.",
          "Inefficient Categorization: Need for smarter clustering of suppliers and products for strategic decisions."
        ],
        solutions: [
          "Accurate Sales Forecasting: Leverages SARIMA and ML models for precise 12-month sales predictions.",
          "Category & Product Insights: Detailed analytics on category and product-level performance to optimize inventory.",
          "Supplier Clustering: K-Means and Hierarchical clustering for actionable supplier performance insights.",
          "Interactive Dashboards: Streamlit-based visualizations for intuitive data exploration and decision-making."
        ],
        features: [
          "AI-Powered Sales Forecasting (12 Months)",
          "Category & Product-Level Insights",
          "Supplier Performance Clustering",
          "Interactive Visual Dashboards for Decision-Making",
          "Data-Driven Inventory & Marketing Strategies"
        ],
        tools: [
          "Python – For time-series forecasting and data processing.",
          "SARIMA / ML Models – For accurate sales predictions.",
          "Streamlit – For building an interactive dashboard.",
          "Neo4j – For visualizing supplier-product relationships and clusters.",
          "Database – For structured data storage."
        ],
        image: salesForecastingImg,
        flowchart: "Raw Sales Data → Forecasting Model (SARIMA) → Category-Level Predictions → Supplier Clustering (K-Means/Hierarchical) → Product Segmentation → Streamlit Dashboard for Insights",
        agent: "https://liquorforecasting.streamlit.app/"
      }
    },
    {
      id: "08",
      title: "Legal Edge Assistant",
      description: "An AI-powered assistant designed to streamline responses to legal inquiries and provide quick access to documents.",
      link: "https://legal-chatbot-qnyq.onrender.com/",
      icon: <FileText size={24} />,
      color: "#EC7FA9",
      category: "business",
      details: {
        overview: "An AI-powered assistant designed to streamline responses to legal inquiries and provide quick, accurate access to essential legal documents. It ensures consistency, reduces response times, and centralizes knowledge for legal teams and stakeholders.",
        client: "A legal department or law firm",
        challenges: [
          "Time-Consuming Document Search: Legal staff spent hours locating files across folders and systems.",
          "Inconsistent Responses: Common legal queries were answered inconsistently, causing delays.",
          "No Centralized Knowledge Base: Employees lacked a unified platform for accurate legal information.",
          "Knowledge Fragmentation: Expertise scattered across individuals created inefficiencies and errors."
        ],
        solutions: [
          "Conversational Legal Assistant: Handles legal queries through a chatbot interface for instant, accurate responses.",
          "Automated Document Retrieval: Fetches and shares relevant legal documents stored in SharePoint for consistency and compliance.",
          "Workflow Automation: Standardizes responses and streamlines access to frequently requested documents.",
          "Time Optimization: Reduces repetitive tasks for legal staff, enabling focus on complex cases."
        ],
        features: [
          "AI-Powered Legal Query Resolution",
          "Instant Access to Legal Documents",
          "Integration with SharePoint for Document Management",
          "Automated Workflow for Standardized Responses",
          "Centralized Legal Knowledge Base",
          "Faster Turnaround for Stakeholders"
        ],
        tools: [
          "Python – For backend logic and document query handling.",
          "Streamlit – For creating an interactive interface for legal teams and stakeholders.",
          "SharePoint – For secure storage and retrieval of legal documents.",
          "LLMs – For conversational query handling and natural language responses."
        ],
        image: legalAssistantImg,
        flowchart: "User Submits Query → Python Backend Processes Request → Document Search in SharePoint → Relevant File & Answer Fetched → Displayed via Streamlit Interface",
        agent: "https://legal-chatbot-qnyq.onrender.com/"
      }
    },
    // {
    //   id: "09",
    //   title: "HR Process Automation Assistant",
    //   description: "An intelligent HR Copilot that automates key processes such as leave management and reimbursements.",
    //   link: "https://copilotstudio.microsoft.com/environments/e3ce6a5b-ed6e-e60e-af3e-95da64019813/bots/crd5b_inventoryManagementAssistant/canvas?__version__=2&enableFileAttachment=true",
    //   icon: <UserPlus size={24} />,
    //   color: "#8BC34A",
    //   category: "hr",
    //   details: {
    //     overview: "An intelligent HR Copilot that automates key processes such as leave management, reimbursements, and onboarding queries, reducing manual workload and enhancing the employee experience. It ensures real-time visibility, faster approvals, and consistent communication across the organization.",
    //     client: "A leading Human Resources company",
    //     challenges: [
    //       "High Volume of Requests: HR struggled to efficiently manage leave, reimbursements, and onboarding for distributed teams.",
    //       "Manual Errors: Paper-based processes caused delays and inconsistencies in leave and expense approvals.",
    //       "Disconnected Workflows: Field employees faced challenges submitting travel expenses and tracking reimbursements.",
    //       "Limited Real-Time Access: Employees lacked visibility into leave balances, claim statuses, and policy updates.",
    //       "Repetitive Queries: HR staff wasted time responding to common questions without a centralized knowledge base."
    //     ],
    //     solutions: [
    //       "HR Copilot via Power Platform: Deployed Copilot Studio for conversational query handling and process automation.",
    //       "Automated Leave Requests: Real-time leave balance check and status tracking through chatbot.",
    //       "Digital Reimbursements: Claims auto-classified using AI Builder and routed via Power Automate workflows for approval.",
    //       "Onboarding Automation: Automated responses for joining formalities, documents, and equipment requests.",
    //       "Centralized Resources: SOPs, policies, and FAQs stored in SharePoint and surfaced via Copilot for quick answers."
    //     ],
    //     features: [
    //       "Conversational Leave & Reimbursement Management",
    //       "AI-Based Claim Classification & Routing",
    //       "Real-Time Leave Balance & Claim Status Tracking",
    //       "Automated Onboarding Guidance",
    //       "Centralized Knowledge Base for HR Resources",
    //       "Seamless Integration Across Microsoft Power Platform"
    //     ],
    //     tools: [
    //       "Microsoft Copilot Studio – For conversational HR assistant.",
    //       "Power Automate – For workflow automation and approvals.",
    //       "AI Builder – For intelligent document/claim classification.",
    //       "SharePoint – For centralized storage of HR documents and SOPs."
    //     ],
    //     image: hrAutomationImg,
    //     flowchart: "Employee Query → Copilot Studio Chat → AI Builder Classification (for claims) → Power Automate Workflow (Approval & Notifications) → Data Sync with SharePoint → Real-Time Status Updates"
    //   }
    // },
    {
      id: "09",
      title: "Prescription Refill Automation Assistant",
      description: "An intelligent healthcare automation solution that simplifies the prescription refill process.",
      link: "https://copilotstudio.microsoft.com/environments/e3ce6a5b-ed6e-e60e-af3e-95da64019813/bots/contoso_prescriptionRefillAssistant/canvas?__version__=2&enableFileAttachment=true",
      icon: <Pill size={24} />,
      color: "#607D8B",
      category: "health",
      details: {
        overview: "An intelligent healthcare automation solution that simplifies the prescription refill process through a conversational chatbot integrated with Power Automate and AI Builder. This assistant improves user experience, reduces manual errors, and ensures timely prescription management with automated reminders and instant support.",
        client: "Healthcare Provider or Pharmacy Chain",
        challenges: [
          "Difficulty Accessing Prescription History: Users struggle to find prescription details spread across systems.",
          "Manual Errors in Refills: Paper-based or manual processes often cause miscommunication and delays.",
          "Slow Support: Users face long wait times for answers to prescription-related queries.",
          "Missed Refills: Patients frequently forget to reorder prescriptions on time."
        ],
        solutions: [
          "User-Friendly Interface: Provides easy navigation and quick retrieval of prescription details.",
          "Automated Prescription Handling: Uses AI Builder and Power Automate to fetch and verify prescription information.",
          "24/7 Chatbot Assistance: Handles prescription-related queries instantly through conversational AI.",
          "Automated Reminders: Sends notifications for upcoming refills, reducing missed medication."
        ],
        features: [
          "AI-Powered Chatbot for Instant Support",
          "Automated Prescription Verification & Refill Requests",
          "Real-Time Order Status Updates",
          "Secure Integration with Healthcare Databases",
          "Automated Refill Reminders via Notifications"
        ],
        tools: [
          "Microsoft Copilot Studio – For conversational chatbot interface.",
          "Power Automate – For backend automation and workflow handling.",
          "AI Builder – For intelligent prescription data processing and validation.",
          "SharePoint / Dataverse – For secure prescription data storage and retrieval."
        ],
        image:prescriptionImg,
        flowchart: "User Requests Refill → Chatbot (Copilot Studio) → Fetch Prescription Details → Verify via AI Builder → Trigger Power Automate Workflow → Send Refill Confirmation & Reminder",
        agent: "https://copilotstudio.microsoft.com/environments/e3ce6a5b-ed6e-e60e-af3e-95da64019813/bots/contoso_prescriptionRefillAssistant/webchat?__version__=2"
      }
    },
    {
      id: "10",
      title: "Multilingual Email Search & Indexing Assistant",
      description: "A powerful AI-driven assistant designed to enable multilingual natural language search across email archives.",
      link: "https://legal-edge-chatbot.streamlit.app/",
      icon: <Search size={24} />,
      color: "#F44336",
      category: "it",
      details: {
        overview: "A powerful AI-driven assistant designed to enable multilingual (Arabic & English) natural language search across email archives. It integrates with Microsoft Copilot Studio, Azure Cognitive Search, and Azure Blob Storage, ensuring efficient query processing, ranking, and structured result presentation for improved productivity and compliance.",
        client: "Government or Enterprise Organization",
        challenges: [
          "Multilingual Query Support: Handling natural language queries in both Arabic and English accurately.",
          "Unstructured Data: Emails and attachments stored in PST files were difficult to search and process.",
          "Search Accuracy: Default search lacked ranking, relevance tuning, and contextual understanding.",
          "Data Integration: Need for continuous extraction and indexing of emails for up-to-date results."
        ],
        solutions: [
          "Multilingual UI: Built with Copilot Studio or a custom app for Arabic and English support.",
          "Smart Query Processing: Copilot refines natural language queries before sending to Azure Cognitive Search.",
          "Automated Email Extraction: Using Power Automate PST files imported to Outlook, emails and attachments converted into structured data.",
          "Cloud Storage & Indexing: Data stored in Azure Blob Storage and indexed regularly by Azure AI Search.",
          "Optimized Search Results: Implemented ranking and relevance tuning for precise results, displayed in a clear, structured format."
        ],
        features: [
          "Arabic & English Support",
          "AI-Powered Query Refinement",
          "Automated Email & Attachment Extraction",
          "Real-Time Indexing with Azure Cognitive Search",
          "Optimized Ranking & Structured Output"
        ],
        tools: [
          "Microsoft Copilot Studio – For UI and query processing.",
          "Azure Cognitive Search – For advanced search indexing and ranking.",
          "Azure Blob Storage – For storing extracted email data.",
          "Microsoft Outlook (VM) – For importing PST files and extracting emails.",
          "Power Automate – For scheduling extraction and upload processes."
        ],
        image: emailSearchImg,
        agent: "https://copilotstudio.microsoft.com/environments/Default-008502d6-3f79-46f0-ab37-9354e3fe80ff/bots/cr28f_outlookPst/webchat?__version__=2"
      }
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || product.category === filter;
    return matchesSearch && matchesFilter;
  });

  useEffect(() => {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      card.style.animationName = 'none';
      setTimeout(() => {
        card.style.animationName = 'fadeIn';
      }, 10);
    });
  }, [filter, searchTerm, viewMode]);

  const handleDetailsClick = (product) => {
    console.log("Details button clicked for product:", product.title);
    setSelectedProduct(product);
  };

  const closePopup = () => {
    console.log("Closing product popup");
    setSelectedProduct(null);
    setIsImagePopupOpen(false);
  };

  const toggleImagePopup = (e) => {
    e.stopPropagation(); // Prevent closing product popup
    if (selectedProduct?.details?.image) {
      console.log("Opening image popup for:", selectedProduct.title);
      setIsImagePopupOpen(!isImagePopupOpen);
    } else {
      console.log("No image available for:", selectedProduct?.title);
    }
  };

  // Helper function to render array or string as bullet points
  const renderAsBullets = (data, key) => {
    if (!data) return null;
    if (Array.isArray(data)) {
      return (
        <ul>
          {data.map((item, index) => (
            <li key={`${key}-${index}`}>{item}</li>
          ))}
        </ul>
      );
    }
    return <ul><li>{data}</li></ul>;
  };

  return (
    <div className="usecase-container">
      <div className="usecase-shape shape-1"></div>
      <div className="usecase-shape shape-2"></div>
      <div className="usecase-shape shape-3"></div>
      <div className="usecase-shape shape-4"></div>
      
      <Navbar />
      
      <div className="usecase-content">
        <div className="usecase-header">
          <div className="header-badge">SOLUTIONS</div>
          <br />
          <h1 className="usecase-title">
            <span className="highlight-gradient">AI-Powered</span> Solutions
          </h1>
          <p className="usecase-description">
            At UnlimitedAI, our solutions have transformed leading companies across various industries.
            Our innovative AI-driven products enable organizations to streamline processes, enhance customer
            experience, and achieve remarkable results.
          </p>
        </div>

        <div className="product-controls">
          <div className="search-container">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input" 
            />
            {searchTerm && (
              <button 
                className="clear-search" 
                onClick={() => setSearchTerm("")}
              >
                ×
              </button>
            )}
          </div>
          
          <div className="filter-container">
            {categories.map(category => (
              <button 
                key={category.id}
                className={`filter-button ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="view-toggle">
            <button 
              className={`toggle-button ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              <svg width="16" height="16" viewBox="0 0 16 16">
                <rect x="1" y="1" width="6" height="6" rx="1" />
                <rect x="9" y="1" width="6" height="6" rx="1" />
                <rect x="1" y="9" width="6" height="6" rx="1" />
                <rect x="9" y="9" width="6" height="6" rx="1" />
              </svg>
            </button>
            <button 
              className={`toggle-button ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <svg width="16" height="16" viewBox="0 0 16 16">
                <rect x="1" y="1" width="14" height="3" rx="1" />
                <rect x="1" y="6" width="14" height="3" rx="1" />
                <rect x="1" y="11" width="14" height="3" rx="1" />
              </svg>
            </button>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No products found</h3>
            <p>Try adjusting your search or filter to find what you're looking for.</p>
            <button className="reset-search" onClick={() => {setSearchTerm(""); setFilter("all");}}>
              Reset Search
            </button>
          </div>
        ) : (
          <div className={`product-container ${viewMode === 'list' ? 'list-view' : 'grid-view'}`}>
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="product-card"
                style={{"--card-accent-color": product.color}}
              >
                <div className="product-icon-wrapper" style={{backgroundColor: product.color}}>
                  {product.icon}
                </div>
                <div className="product-number">{product.id}</div>
                <div className="product-content">
                  <div className="product-category-tag" style={{backgroundColor: `${product.color}20`, color: product.color}}>
                    {categories.find(cat => cat.id === product.category)?.name || 'General'}
                  </div>
                  <h2 className="product-title">{product.title}</h2>
                  <p className="product-description">{product.description}</p>
                </div>
                <div className="product-buttons">
                  {["04", "05", "06", "07", "08"].includes(product.id) && (
                    <button 
                      className="product-button" 
                      style={{backgroundColor: product.color, border: 'none'}}
                      onClick={() => handleDetailsClick(product)}
                    >
                      Details <Info size={16} className="button-icon" />
                    </button>
                  )}
                  <button 
                    className="product-button" 
                    style={{backgroundColor: product.color, border:'none'}}
                    onClick={() => {
                      console.log("Explore button clicked for:", product.title, "Navigating to:", product.link);
                      window.scrollTo(0, 0);
                      if (["04", "05", "06", "07", "08"].includes(product.id)) {
                        window.location.assign(product.link);
                      } else {
                        const { icon, ...serializableProduct } = product;
                        navigate(`/product/${product.id}`, { state: { product: serializableProduct } });
                      }
                    }}
                  >
                    Explore <ArrowRight size={16} className="button-icon" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedProduct && (
          <div className="popup-overlay" style={{ zIndex: 1000 }} onClick={closePopup}>
            <div 
              className="popup-content" 
              style={{ "--popup-accent-color": selectedProduct.color }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="popup-close" onClick={closePopup}>×</button>
              <h2 className="pop-header">{selectedProduct.title}</h2>
              <div className="popup-section" style={{animationDelay: '0.1s'}}>
                <h3>Overview</h3>
                <p>{selectedProduct.details?.overview || "No overview available"}</p>
              </div>
              <div className="popup-section" style={{animationDelay: '0.2s'}}>
                <h3>Client</h3>
                {renderAsBullets(selectedProduct.details?.client, 'client')}
              </div>
              <div className="popup-section" style={{animationDelay: '0.3s'}}>
                <h3>Challenges</h3>
                {renderAsBullets(selectedProduct.details?.challenges, 'challenges')}
              </div>
              <div className="popup-section" style={{animationDelay: '0.4s'}}>
                <h3>Solutions</h3>
                {renderAsBullets(selectedProduct.details?.solutions, 'solutions')}
              </div>
              <div className="popup-section" style={{animationDelay: '0.5s'}}>
                <h3>Features</h3>
                {renderAsBullets(selectedProduct.details?.features, 'features')}
              </div>
              <div className="popup-section" style={{animationDelay: '0.6s'}}>
                <h3>Tools Used</h3>
                {renderAsBullets(selectedProduct.details?.tools, 'tools')}
              </div>
              <div className="popup-section" style={{animationDelay: '0.7s'}}>
                <h3>Flowchart</h3>
                {selectedProduct.details?.image ? (
                  <img 
                    src={selectedProduct.details.image} 
                    alt={`${selectedProduct.title} flowchart`} 
                    className="flowchart-image clickable-image"
                    style={{ maxWidth: '100%', height: 'auto', cursor: 'pointer' }}
                    onClick={toggleImagePopup}
                  />
                ) : (
                  <p>No flowchart image available</p>
                )}
              </div>
            </div>
          </div>
        )}
        {isImagePopupOpen && selectedProduct?.details?.image && (
          <div className="image-popup-overlay" onClick={toggleImagePopup}>
            <div className="image-popup-content" onClick={(e) => e.stopPropagation()}>
              <button className="image-popup-close" onClick={toggleImagePopup}>×</button>
              <img
                src={selectedProduct.details.image}
                alt={`${selectedProduct.title} Flowchart Enlarged`}
                className="image-popup"
                style={{
                  maxWidth: '90%',
                  maxHeight: '90vh',
                  borderRadius: '8px'
                }}
                onError={() => console.error("Image failed to load:", selectedProduct.details.image)}
              />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default UseCase;