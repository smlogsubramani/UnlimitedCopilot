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
import hospitalityavator from '../assets/images/Hospitality Avatar.png';
import invoiceagent from '../assets/images/Invoice Agent.png';
import financialAdvisorImg from '../assets/images/TCW_RebalanceAgent_Architecture.png';
import marketcomparisonImg from '../assets/images/MarketSmartAlert.png';
import demandAgentImg from '../assets/images/demandAgentImg.png';
import inventorySupplyAgentImg from '../assets/images/inventoryAgentImg.png';
import replenishmentAgentImg from '../assets/images/replenishmentAgentImg.png';
import riskFinanceAgentImg from '../assets/images/riskFinanceAgentImg.png';
import smartStockAgentImg from '../assets/images/SmartStockAgentImg.png';
import vistraPRImg from '../assets/images/vistraPRImg.png';
import analystAgentImg from '../assets/images/analystAgentImg.png';
import writerAgentImg from '../assets/images/writerAgentImg.png';
import creativeStrategistAgentImg from '../assets/images/creativeStrategistAgentImg.png';
import researcherAgentImg from '../assets/images/researcherAgentImg.png';
import agencyDirectorImg from '../assets/images/agencyDirectorImg.png';
import prIntelligenceAgentImg from '../assets/images/prIntelligenceAgentImg.png';

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
  Info,
  Warehouse
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
      link: "https://copilotstudio.microsoft.com/environments/e3ce6a5b-ed6e-e60e-af3e-95da64019813/bots/crd5b_inventoryManagementAssistant/webchat?__version__=2%22",
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
          "<strong>Centralized Information Managements</strong>: Access and manage detailed product and supplier records from a single interface.",
          "<strong>Instant Inventory Updates</strong>: Easily add, edit, or remove product details for accurate and up-to-date stock data.",
          "<strong>Real-Time Stock Monitoring</strong>: Gain clear visibility into stock levels to prevent shortages and overstock situations.",
          "<strong>Automated Restocking</strong>: Generate and process purchase orders quickly, reducing manual efforts and delays.",
          "<strong>Integrated Order Management</strong>: Sync customer orders with inventory updates to ensure accurate fulfillment and timely delivery."
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
        agent: "https://copilotstudio.microsoft.com/environments/e3ce6a5b-ed6e-e60e-af3e-95da64019813/bots/crd5b_inventoryManagementAssistant/webchat?__version__=2%22"
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
          "<strong>Autonomous Query Handling</strong>: Built with Copilot Studio, the assistant triages and classifies tickets dynamically without manual intervention.",
          "<strong>Automated Ticket Logging</strong>: Digital form submissions (e.g., disputes, requests) logged into SharePoint as structured tickets.",
          "<strong>AI-Driven Classification</strong>: AI Builder categorizes tickets into relevant departments (Sales Ops, Accounts, Distribution).",
          "<strong>Logic-Based Assignment</strong>: Power Automate routes tickets to appropriate officers based on predefined rules.",
          "<strong>Knowledge Access</strong>: Officers retrieve SOPs and case history from SharePoint for faster resolution.",
          "<strong>Customer Transparency</strong>: Automated personalized emails inform customers of ticket status and provide a direct point of contact."
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
        flowchart: "Customer → Digital Form → Copilot Studio (Triage) → SharePoint Ticket Creation → AI Builder Classification → Power Automate Assignment → Officer Resolves (via SharePoint) → Customer Notified via Outlook",
        agent: "https://copilotstudio.microsoft.com/environments/e3ce6a5b-ed6e-e60e-af3e-95da64019813/bots/crd5b_customerInquiryClarifier/webchat?__version__=2"
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
          "<strong>Simplified Machine Management</strong>: Quickly create and update vending machines with automated workflows.",
          "<strong>Integrated Inventory & Pricing Sync</strong>: Keep stock, product details, and pricing accurate and updated in real time.",
          "<strong>Data Management with SharePoint</strong>: Easily view and update machine and product details through SharePoint lists.",
          "<strong>Trigger-Based Automation</strong>: Adding or updating data in Dataverse automatically triggers desktop flows for UI automation in your vending machine application.",
          "<strong>Automated Approvals</strong>: Power Automate ensures smooth approval workflows and backend processing."
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
          "<strong>Guided Conversational Onboarding</strong>: The assistant interacts with new hires, collecting accurate and complete data step by step.",
          "<strong>Data Validation</strong>: Ensures secure and error-free validation of critical details like IDs, contact info, and educational background.",
          "<strong>Secure Data Handling</strong>: All information is stored in a reliable database for easy access and integration.",
          "<strong>Personalized Experience</strong>: AI-driven conversations make onboarding engaging and consistent."
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
          "<strong>Rapid Transcription</strong></strong>: Convert ATC audio into text using OpenAI Whisper Model, supported by Pydub for audio handling.",
          "<strong>AI-Driven Investigation</strong></strong>: AI agents (CrewAI, LangChain) analyze conversations like relentless investigators to identify red flags and anomalies.",
          "<strong>LLM-Powered Insights</strong></strong>: Utilize LLAMA 3.1 for generating context-rich, actionable insights from transcripts.",
          "<strong>Interactive Reporting</strong></strong>: Deliver structured reports and visual insights through a Streamlit dashboard for ease of interpretation."
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
          "<strong>Automated Defect Analysis</strong>: Uses LLaMA 3 Vision Model to quickly analyze and identify hardware issues from uploaded images.",
          "<strong>Streamlined Verification</strong>: Centralized data repository verifies service tags and warranty status for fast resolution.",
          "<strong>Integrated Appointment Booking</strong>: Automates scheduling with available technicians for warranty-valid cases.",
          "<strong>Service Center Identification</strong>: Employs web scraping to locate authorized nearby service centers for immediate support."
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
          "<strong>Accurate Sales Forecasting</strong>: Leverages SARIMA and ML models for precise 12-month sales predictions.",
          "<strong>Category & Product Insights</strong>: Detailed analytics on category and product-level performance to optimize inventory.",
          "<strong>Supplier Clustering</strong>: K-Means and Hierarchical clustering for actionable supplier performance insights.",
          "<strong>Interactive Dashboards</strong>: Streamlit-based visualizations for intuitive data exploration and decision-making."
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
          "<strong>Conversational Legal Assistant</strong>: Handles legal queries through a chatbot interface for instant, accurate responses.",
          "<strong>Automated Document Retrieval</strong>: Fetches and shares relevant legal documents stored in SharePoint for consistency and compliance.",
          "<strong>Workflow Automation</strong>: Standardizes responses and streamlines access to frequently requested documents.",
          "<strong>Time Optimization</strong>: Reduces repetitive tasks for legal staff, enabling focus on complex cases."
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
          "<strong>User-Friendly Interface</strong>: Provides easy navigation and quick retrieval of prescription details.",
          "<strong>Automated Prescription Handling</strong>: Uses AI Builder and Power Automate to fetch and verify prescription information.",
          "<strong>24/7 Chatbot Assistance</strong>: Handles prescription-related queries instantly through conversational AI.",
          "<strong>Automated Reminders</strong>: Sends notifications for upcoming refills, reducing missed medication."
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
      title: "Email Search & Indexing Assistant",
      description: "A powerful AI-driven assistant designed to enable multilingual natural language search across email archives.",
      link: "https://legal-edge-chatbot.streamlit.app/",
      icon: <Search size={24} />,
      color: "#F44336",
      category: "it",
      details: {
        overview: "A powerful AI-driven assistant designed to enable multilingual (Arabic & English) natural language search across email archives. It integrates with Microsoft Copilot Studio, Azure Cognitive Search, and Azure Blob Storage, ensuring efficient query processing, ranking, and structured result presentation for improved productivity and compliance.",
        client: "Government or Enterprise Organization",
        challenges: [
          "Query Support: Handling natural language queries in English accurately.",
          "Unstructured Data: Emails and attachments stored in PST files were difficult to search and process.",
          "Search Accuracy: Default search lacked ranking, relevance tuning, and contextual understanding.",
          "Data Integration: Need for continuous extraction and indexing of emails for up-to-date results."
        ],
        solutions: [
          "<strong>UI</strong>: Built with Copilot Studio or a custom app for English support.",
          "<strong>Smart Query Processing</strong>: Copilot refines natural language queries before sending to Azure Cognitive Search.",
          "<strong>Automated Email Extraction</strong>: Using Power Automate PST files imported to Outlook, emails and attachments converted into structured data.",
          "<strong>Cloud Storage & Indexing</strong>: Data stored in Azure Blob Storage and indexed regularly by Azure AI Search.",
          "<strong>Optimized Search Results</strong>: Implemented ranking and relevance tuning for precise results, displayed in a clear, structured format."
        ],
        features: [
          "English Support",
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
    },
{
  id: "11",
  title: "Hospitality Voice-Enabled Avatar Concierge",
  description: "A voice-first, avatar-enabled concierge assistant designed specifically for the hospitality industry (hotels and resorts) to modernize guest support by logging service issues, checking request status, and closing tickets in ServiceNow—available 24/7, multilingual, and hands-free.",
  link: "https://hospitality-agent.netlify.app/",  // Placeholder link
  icon: <PackageOpen size={24} />,  // Example icon for support
  color: "#2A72D6",
  category: "hospitality",
  details: {
    overview: "This AI assistant uses Azure AI Foundry and GPT-4o to interpret guest requests in multiple languages, handle service ticket creation and updates in ServiceNow, and provide real-time status updates via a voice and avatar interface for seamless guest interactions.",
    client: "Multi-property hotel groups and resorts focusing on enhanced guest support.",
    challenges: [
      "Fragmented support channels causing lost or delayed guest requests.",
      "Slow response times hurting guest satisfaction and NPS scores.",
      "Language and accessibility barriers for international and visually impaired guests.",
      "Operational inefficiencies due to staff context switching between multiple systems."
    ],
    solutions: [
      "Voice and avatar interface for natural, hands-free guest conversations.",
      "AI intent understanding and orchestration with GPT-4o in Azure AI Foundry.",
      "Full ServiceNow integration for ticket lifecycle management and auto-routing.",
      "Real-time status tracking and notifications for guests and hotel staff.",
      "Multilingual and accessible voice avatar support to enhance inclusivity."
    ],
    features: [
      "Voice-enabled, avatar-based guest assistance",
      "Multilingual support with real-time translation",
      "ServiceNow ticket creation, updates, and closures",
      "Real-time request status tracking and notifications",
      "AI-powered intent recognition and workflow orchestration",
      "Accessible and hands-free interface for all guests"
    ],
    tools: [
      "Azure AI Foundry – For AI reasoning, orchestration, and GPT-4o integration",
      "Azure Speech Avatar – For lifelike, lip-synced voice avatar conversations",
      "ServiceNow APIs – For seamless ticket management integration",
      "Frontend frameworks (React/Angular) – For tablet and mobile avatar UI",
      "Multilingual NLP models – For supporting international guest languages"
    ],
    image: hospitalityavator,
    // flowchart: "Guest Uses Voice-Avatar Interface → AI Processes Request with GPT-4o → Ticket Created/Updated in ServiceNow → Guest Receives Real-Time Status via Avatar Interface"
    
  
  }
},
{
  id: "12",
  title: "Inventory Voice Agent",
  description: "An AI-powered assistant designed to streamline inventory management by answering stock-related queries and providing instant access to inventory data.",
  link: "https://inventoryagent.netlify.app/",
  icon: <PackageOpen size={24} />,
  color: "#8AA624",
  category: "business",
  details: {
    overview: "An AI-powered assistant built to simplify inventory operations by providing quick, accurate responses to stock inquiries and real-time access to inventory records. It improves consistency, reduces search time, and centralizes inventory data for warehouse teams and supply chain managers.",
    client: "Retail chains, warehouses, or supply chain departments",
    challenges: [
      "Manual Stock Checks: Staff spent excessive time verifying inventory levels across multiple systems.",
      "Delayed Responses: Inventory queries from sales or logistics teams were answered slowly, impacting operations.",
      "Fragmented Data Sources: Inventory data was spread across spreadsheets, ERPs, and siloed systems.",
      "Inaccurate Stock Information: Lack of real-time updates led to errors in stock availability and forecasting."
    ],
    solutions: [
      "<strong>Conversational Inventory Assistant</strong>: Responds to inventory-related queries through a chatbot interface with real-time data.",
      "<strong>Automated Stock Lookup</strong>: Instantly retrieves stock levels, item locations, and reorder status from integrated systems.",
      "<strong>Inventory Workflow Automation</strong>: Streamlines repetitive tasks like stock verification and reorder alerts.",
      "<strong>Centralized Inventory Dashboard</strong>: Provides a unified view of inventory across locations and systems."
    ],
    features: [
      "AI-Powered Inventory Query Resolution",
      "Real-Time Access to Stock Levels",
      "Integration with ERP or Inventory Management Systems",
      "Automated Alerts for Low Stock and Reorders",
      "Centralized Inventory Knowledge Base",
      "Faster Decision-Making for Operations Teams"
    ],
    tools: [
      "Django – For backend logic, API development, and inventory data handling.",
      "HTML/CSS/JavaScript – For building a responsive and user-friendly frontend interface.",
      "Supabase Integration – For secure access to inventory databases.",
      "LLMs – For conversational query handling and natural language responses."
    ],
    // image: ,
    flowchart: "User Submits Inventory Query → Python Backend Processes Request → Inventory Lookup in ERP → Relevant Data Fetched → Displayed via Streamlit Interface"
  }
},
{

  id: "13",
  title: "Late Fee Notification Agent",
  description: "An automated agent that monitors customer fee due dates, sends reminders for upcoming late fees, and escalates overdue cases with detailed reports to regional managers.",
  link: "https://copilotstudio.microsoft.com/environments/e3ce6a5b-ed6e-e60e-af3e-95da64019813/bots/crd5b_invoiceReminderAssistant/webchat?__version__=2",
  icon: <FileText size={24} />,
  color: "#FF9800",
  category: "finance",
  details: {
    overview: "The Late Fee Notification Agent leverages Copilot Studio and Power Automate to track customer fee due dates, send proactive notifications to customers, and escalate overdue accounts to managers. It runs on daily and weekly recurrence triggers to ensure timely communication and effective fee collection.",
    client: "Finance Teams, Billing Departments, and Regional Managers",
    challenges: [
      "Missed Fee Notifications: Customers often miss due dates due to lack of reminders.",
      "Manual Tracking Effort: Teams spend significant time monitoring due dates across multiple systems.",
      "Delayed Escalations: Overdue accounts beyond 60 days are not grouped or reported efficiently.",
      "Inefficient Communication: Managers lack consolidated reports for quick decision-making."
    ],
    solutions: [
      "<strong>Automated Customer Notifications</strong></strong>: Daily reminders sent to customers whose due dates were 25 or 50 days ago.",
      "<strong>Weekly Overdue Escalations</strong></strong>: Automatically identifies customers with fees overdue by more than 60 days.",
      "<strong>Manager-Level Reporting</strong></strong>: Groups overdue customers by regional manager and generates CSV reports.",
      "<strong>Streamlined Workflow</strong></strong>: Eliminates manual tracking, ensures timely escalations, and improves fee recovery."
    ],
    features: [
      "Daily Recurrence Check for Due Fees",
      "Automated Email Notifications to Customers",
      "Weekly Overdue Account Identification",
      "CSV Report Generation for Managers",
      "Escalation Emails with Attached Reports"
    ],
    tools: [
      "Microsoft Copilot Studio – Conversational interface for fee-related queries.",
      "Power Automate – Workflow automation for daily/weekly triggers and notifications.",
      "Excel / SharePoint / Database – Source of customer fee records.",
      "Outlook – Integrated email notifications for customers and managers."
    ],
    image: invoiceagent,
    // flowchart: "Daily Trigger → Fetch Fee Data → Filter Customers (25/50 Days) → Notify Customers → Weekly Trigger → Fetch Data → Filter >60 Days → Group by Manager → Generate CSV → Email Report",
      agent: "https://copilotstudio.microsoft.com/environments/Default-008502d6-3f79-46f0-ab37-9354e3fe80ff/bots/crd5b_invoiceReminderAssistant/webchat?__version__=2"

  }

},

{

  id: "14",
  title: "Portfolio Rebalance Agent",
  description: "The Autonomous Orchestrator Agent enables scalable, automated portfolio intelligence by coordinating sub-agents for goal tracking, market stress analysis, rebalancing, and client communication. It operates through scheduled and event-driven workflows, integrating with SQL and ML systems, excluding real-time trading and manual advisory tasks.",
  link: "",
  icon: <FileText size={24} />,
  color: "#009688",
  category: "finance",
  flowUrl:"https://e3ce6a5bed6ee60eaf3e95da640198.13.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/a41ae13c15704796ba28ee39b4bda14a/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wTOBF80vYy5d4Uxvzmdyi2xxiGuaeYQ-IJE8L4G7w6Q",
  details: {
    overview: "The Autonomous Orchestrator Agent enables scalable, automated portfolio intelligence by coordinating sub-agents for goal tracking, market stress analysis, rebalancing, and client communication. It operates through scheduled and event-driven workflows, integrating with SQL and ML systems, excluding real-time trading and manual advisory tasks.",
    client: "Portfolio Managers, Financial Advisors, and Wealth Management Teams",
    challenges: [
      "Time and labor-intensive: Require constant monitoring of multiple client portfolios for drift from target allocations.",
      "Lack of integration: Lack of seamless integration between portfolio tracking, risk assessment, and order execution systems leads to errors, delays, and isolated decision-making.",
      "Emotional biases and human oversight: May hinder disciplined actions, such as selling high-performers or incorporating volatility forecasts into adjustments.",
      "Scalability issues : Managing diverse assets and client goals, with manual updates to holdings are prone to inaccuracies in dynamic markets."
    ],
    solutions: [
      "<strong>Automated Trigger</strong>: Automates rebalancing with trigger to fetch client goals, eliminating manual oversight.",
      "<strong>ML-Driven Analysis</strong>: Integrates asset retrieval, ML-driven volatility analysis, and trade execution for seamless, error-free processing.",
      "<strong>Removes Bias</strong>: AI-generated, objective buy/sell suggestions based on market predictions.",
      "<strong>Effortlessly Scalable</strong>: Auto-updates holdings and manages multiple clients/assets."
    ],
    features: [
      "Automated triggers for proactive goal-based rebalancing",
      "Real-time integration of market data, volatility predictions, and current prices for informed suggestions",
      "Personalized email notifications with client/goal details, holdings summary, and reasoned rebalance actions",
      "Secure order management with status tracking (open/complete) and automatic holdings updates",
      "Scalable multi-agent design for handling multiple clients and assets efficiently"
    ],
    tools: [
      "Microsoft Copilot Studio – For Multi Agent Orchestration.",
      "Power Automate – Workflow automation for daily triggers.",
      "SQL Server / Dataverse / Database – Source of client, market, and order details.",
      "Python – ML Script for stock growth prediction."
    ],
    image: financialAdvisorImg,
    // flowchart: "Daily Trigger → Fetch Fee Data → Filter Customers (25/50 Days) → Notify Customers → Weekly Trigger → Fetch Data → Filter >60 Days → Group by Manager → Generate CSV → Email Report",
    agent: "https://copilotstudio.microsoft.com/environments/e3ce6a5b-ed6e-e60e-af3e-95da64019813/bots/crd5b_portfolioManagement/webchat?__version__=2"

  }

},
{
  id: "15",
  title: "Market Alert and smart price agent​",
  description: "The Market Alert and Smart Price Agent provides autonomous, scheduled analysis of brand's pricing against competitor data. It ingests CSV files, matches SKUs by product IDs, and calculates pricing gaps, percentage differences, and margin insights. Weekly reports with executive summaries, pricing recommendations, and discount strategies are automatically generated and sent via email using Outlook in Copilot Studio, ensuring error-free and consistent pricing insights.",
  link: "https://copilotstudio.microsoft.com/environments/e3ce6a5b-ed6e-e60e-af3e-95da64019813/bots/crd5b_pricingAnalysis/webchat?__version__=2",
  icon: <FileText size={24} />,
  color: "#4CAF50",
  category: "pricing-analysis",
  flowUrl:"https://e3ce6a5bed6ee60eaf3e95da640198.13.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/37e8aca96a604b13bf711295e970502b/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=x4fjC0WA5i-cqdytZCQoglPgUgvSkcqyGe_yLM-XhHU",
  details: {
    overview: "The Market Alert and Smart Price Agent provides autonomous, scheduled analysis of pricing against competitor data. It ingests CSV files, matches SKUs by product IDs, and calculates pricing gaps, percentage differences, and margin insights. Weekly reports with executive summaries, pricing recommendations, and discount strategies are automatically generated and sent via email using Outlook in Copilot Studio, ensuring error-free and consistent pricing insights.",
    client: "Business Executives, Pricing Analysts, E-commerce Managers",
    challenges: [
      "Time-consuming manual analysis: Requires continuous comparison of pricing data across multiple competitors, which can be prone to human error.",
      "Data inconsistency: Missing or incomplete data in pricing tables can hinder accurate analysis and decision-making.",
      "Lack of automated reporting: Traditional pricing strategies rely on manual input, which delays decision-making and strategy adjustments.",
      "Strategic misalignment: Without actionable insights, it can be difficult to make informed decisions about pricing, promotions, and discounts."
    ],
    solutions: [
      "Autonomous Analysis: Analyzes competitor pricing autonomously, using exact CSV data without assumptions or missing values.",
      "Automated Reporting: Generates an executive summary with strategic pricing recommendations and insights every week.",
      "Promotions & Pricing Gaps: Identifies pricing gaps, compares promotional pricing, and provides margin insights to optimize pricing strategy.",
      "Seamless Integration: Uses Copilot Studio’s tools (Outlook and Excel) for smooth report generation and distribution, ensuring no manual intervention is required."
    ],
    features: [
      "Weekly autonomous analysis of competitive pricing and margin insights",
      "SKU matching with product IDs for precise price comparison",
      "Dynamic calculation of promotional price gaps and percentage differences",
      "Automated report generation with Excel export and Outlook email integration",
      "End-to-end weekly workflow from data analysis to email distribution",
      "Clean, executive-level summaries with strategic recommendations for pricing and discounts"
    ],
    tools: [
      "Microsoft Copilot Studio – For building and orchestrating the autonomous agent.",
      "Power Automate – Workflow automation for scheduling and task triggers.",
      "Excel – Report generation and insights table creation.",
      "Outlook – Email automation for report distribution.",
      "Python – For SKU matching and margin analysis scripts."
    ],
    image: marketcomparisonImg,
    agent: "https://copilotstudio.microsoft.com/environments/e3ce6a5b-ed6e-e60e-af3e-95da64019813/bots/crd5b_pricingAnalysis/webchat?__version__=2"
  }
},
{
  id: "16",
  title: "Smart Stock Agent",
  description: "Smart Stock Agent is an AI-driven steel inventory replenishment orchestrator that coordinates demand planning, inventory availability, and supplier risk intelligence to ensure timely procurement. It analyzes project schedules, validates real-time stock and incoming supply, evaluates supplier reliability and budget feasibility, and recommends optimized purchase actions to prevent shortages, reduce excess inventory, and improve working capital efficiency.",
  link: "",
  icon: <Warehouse size={24} />,
  color: "#2E7D32",
  category: "supply-chain-optimization",
  flowUrl: "https://e3ce6a5bed6ee60eaf3e95da640198.13.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/f0cee939fbd649498f749d14fc773390/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=EXuIlVSM6TxcC5zlDHO1MX3cvA3ZNHP_TPczu62V5EI",
  details: {
    overview: "The Smart Stock Agent autonomously manages steel inventory replenishment by combining AI-driven demand forecasting, real-time inventory validation, supplier risk intelligence, and financial feasibility analysis. It connects Dataverse operational data with AI reasoning to predict material requirements, detect supply risks early, and generate proactive procurement recommendations that optimize stock levels and working capital.",
    client: "Steel & Construction Firms, Logistics & Warehouse Managers, Financial Planning Teams",
    challenges: [
      "Unplanned Material Shortages: Limited demand visibility causes stockouts, project delays, and costly emergency procurement.",
      "Excess Inventory Holding Costs: Overstocking ties up capital, increases storage expenses, and risks material obsolescence.",
      "Supplier Reliability Uncertainty: Inconsistent supplier performance disrupts production and project timelines.",
      "Budget Allocation Inefficiency: Poor financial visibility leads to overspending or delayed procurement approvals.",
      "Fragmented Operational Data: Disconnected systems across demand, inventory, and finance slow decision-making.",
      "Reactive Procurement Decisions: Manual planning leads to late purchasing instead of proactive supply management."
    ],
    solutions: [
      "AI-Driven Demand Forecasting: Aligns project schedules with SKU-level material forecasts for precise planning.",
      "Real-Time Inventory Validation: Combines warehouse stock, open purchase orders, and allocations for accurate availability insights.",
      "Supplier & Financial Risk Evaluation: Assesses supplier reliability and budget feasibility before recommending purchases.",
      "Automated Replenishment Recommendations: Generates optimized procurement actions to reduce shortages and improve supply chain responsiveness."
    ],
    agents: [
      {
        name: "Replenishment Agent",
        description: "Coordinates demand, inventory, supplier risk, and financial insights to generate intelligent steel procurement recommendations and ensure timely material availability for projects.",
        image: replenishmentAgentImg
      },
      {
        name: "Demand Agent",
        description: "Analyzes project material requirements and forecast data to identify upcoming steel demand by SKU and material, ensuring accurate demand visibility.",
        image: demandAgentImg
      },
      {
        name: "Inventory and Supply Agent",
        description: "Evaluates real-time stock, incoming purchase orders, and allocated quantities to calculate actual availability and identify material shortages.",
        image: inventorySupplyAgentImg
      },
      {
        name: "Supplier Risk and Finance Agent",
        description: "Assesses supplier reliability, lead times, and budget feasibility to determine whether early purchase orders should be recommended.",
        image: riskFinanceAgentImg
      }
    ],

    tools: [
      "Microsoft Copilot Studio - Build and orchestrate the autonomous replenishment agent.",
      "Power Automate - Automate workflows, triggers, approvals, and integrations.",
      "Dataverse - Centralized structured data for projects, inventory, suppliers, and finance.",
      "AI Agents / LLM Integration - Intelligent demand forecasting, inventory validation, and risk analysis."
    ],
    image: smartStockAgentImg
  }
},
{
  id: "17",
  title: "Vistra PR Intelligence System",
  description: "The Vistra PR Intelligence System is a multi-agent AI platform built for Vistra Communications that transforms institutional knowledge into a competitive advantage. Five specialised agents — Agency Director, Researcher, Creative Strategist, Writer, and Analyst — work sequentially through natural conversation to predict campaign performance, develop differentiated media angles, and produce journalist-ready content. The system compounds intelligence across every campaign, making each future campaign smarter than the last.",
  link: "",
  icon: <FileText size={24} />,
  color: "#1F3864",
  category: "pr-communications",
  flowUrl: "",
  details: {
    overview: "The Vistra PR Intelligence System operates like a senior PR colleague — employees chat naturally, the system thinks invisibly, and tasks that once took days now take hours. Built on Vistra's SharePoint case studies, journalist database, and campaign history, it predicts campaign performance, prioritises high-impact actions, and produces campaign-ready outputs through natural conversation.",
    client: "Vistra Communications — PR Researchers, Creative Strategists, Writers, Agency Directors",
    challenges: [
      "Institutional knowledge loss: Critical campaign intelligence lives in inboxes, people's heads, and exit interviews, making it inaccessible when needed most.",
      "Inconsistent brief quality: Incomplete briefs cause revision cycles and waste senior talent on junior-level quality control.",
      "Generic angle development: Creative decisions rely on instinct with no historical performance data.",
      "Manual journalist research: Researchers spend hours building media lists that could be generated in minutes.",
      "No predictive capability: Campaigns launch without data-driven assessment of likely media pickup probability or coverage risk."
    ],
    solutions: [
      "Predict Before Spending: Creative Strategist scores campaign angles against live media data and historical outcomes to produce a pickup probability score.",
      "Structured Handoff Chain: Five agents pass structured intelligence documents between them, ensuring the Writer never starts from zero.",
      "Journalist Intelligence: Researcher queries Vistra's journalist database, verifies beats via live search, and assesses historical response rates.",
      "Human Gates at Critical Moments: Employees approve angle direction and final package while the system handles intelligence work."
    ],
    agents: [
       {
        name: "PR Intelligence Agent",
        description: "Orchestrates all specialised agents, maintains institutional knowledge from past campaigns, and ensures intelligence is compounded across the system for smarter future campaigns.",
        image: prIntelligenceAgentImg
      },
      {
        name: "Agency Director Agent",
        description: "Oversees campaign strategy, ensures alignment with client objectives, and approves final outputs.",
        image: agencyDirectorImg
      },
      {
        name: "Researcher Agent",
        description: "Analyzes journalist databases, campaign history, and live media trends to generate actionable insights and accurate media lists.",
        image: researcherAgentImg
      },
      {
        name: "Creative Strategist Agent",
        description: "Evaluates campaign angles using historical and live media data to recommend high-probability, differentiated strategies.",
        image: creativeStrategistAgentImg
      },
      {
        name: "Writer Agent",
        description: "Produces journalist-ready content, press releases, and personalized pitch emails, leveraging structured intelligence from other agents.",
        image: writerAgentImg
      },
      {
        name: "Analyst Agent",
        description: "Predicts campaign success using Dataverse ML outputs and provides analytics on media saturation, white space, and response probabilities.",
        image: analystAgentImg
      }
    ],
    tools: [
      "Microsoft Copilot Studio — Build and orchestrate the five-agent multi-agent system.",
      "SharePoint — Central knowledge source for Vistra case studies, journalist profiles, pitch history, and client sensitivity.",
      "Dataverse — Store and query campaign prediction outputs.",
      "Bing Web Search — Live media scanning and journalist beat verification.",
      "QuickChart API — Inline media saturation visualisation within chat.",
      "Microsoft Teams — Primary interface for employee-agent interactions."
    ],
    image: vistraPRImg
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
                  {["04", "05", "06", "07", "08","11","12"].includes(product.id) && (
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
                      if (["04", "05", "06", "07", "08","11","12"].includes(product.id)) {
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
