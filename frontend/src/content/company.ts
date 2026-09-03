// Content for the Ideographers application, extracted from company-profile.md
// Single source of truth.

export interface NavItem {
  name: string;
  url: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  quote?: string;
  bio?: string;
}

export interface Advisor {
  name: string;
  qualification: string;
  adviceFor: string;
}

export const content = {
  hero: {
    eyebrow: 'Engineering • Branding • Technology',
    heading: 'Engineering Ideas. Building Impact.',
    description: 'We integrate cutting-edge engineering precision with creative architectural vision and digital innovation.',
    primaryCta: 'Explore Services',
  },
  home: {
    clients: {
      title: 'Trusted By',
      description: 'Showcasing collaborative success with our valued partners.',
    },
    whatWeDo: {
      title: 'What We Do',
      description: 'Ideographers is a multidisciplinary firm specializing in engineering, architecture, landscaping, branding, and IT solutions.',
    },
    featuredServices: {
      title: 'Featured Services',
      description: 'Professional solutions for your business and infrastructure.',
    },
    whyIdeographers: {
      title: 'Why Ideographers',
      items: [
        { title: 'Integrated Services', description: 'A one-stop solution for design, engineering, and digital needs.' },
        { title: 'Client-Centric Approach', description: 'Customized solutions tailored to specific project requirements.' },
      ],
    },
    process: {
      title: 'Our Process',
      description: 'A structured approach to project success.',
    },
    featuredProjects: {
      title: 'Featured Projects',
      description: 'Selected works showcasing our expertise.',
    },
    cta: {
      title: 'Ready to accelerate your business growth?',
      buttonText: 'Schedule Project Consultation',
    },
  },
  about: {
    intro: { title: 'Company Introduction', description: 'Ideographers is a multidisciplinary firm specializing in engineering, architecture, landscaping, branding, and IT solutions.' },
    vision: { title: 'Vision', description: 'To be a globally recognized leader in multidisciplinary design and technology, known for excellence, creativity, and integrity.' },
    mission: { title: 'Mission', description: 'To provide holistic, sustainable, and innovative design and engineering solutions that empower our clients to achieve their visionary goals.' },
    coreValues: { title: 'Core Values', description: 'Our guiding principles.' },
    leadership: { title: 'Leadership', description: 'Our experienced leadership team.' },
    journey: { title: 'Company Journey', description: 'Our history and milestones.' },
    whyChooseUs: { title: 'Why Choose Us', description: 'Why partners choose our multidisciplinary approach.' },
    valuesList: [
        { title: 'Innovation', description: 'Embracing new technologies and creative methodologies.' },
        { title: 'Integrity', description: 'Operating with transparency and ethical standards.' },
        { title: 'Excellence', description: 'Delivering high-quality outcomes consistently.' },
    ],
  },
  services: {
    civil: {
        title: 'Civil & Landscaping',
        description: 'Providing comprehensive engineering and outdoor environmental solutions.',
        summary: {
          designPlanning: 'Expert design and planning for residential and commercial building projects.',
          executionDevelopment: 'On-site execution, development, and construction management.',
          repairMaintenance: 'Reliable repair, maintenance, and structural upkeep services.'
        },
        architectureServices: {
            title: 'Architecture Services',
            items: [
                { title: 'Residential Architecture', summary: 'Planning and designing functional, comfortable, and aesthetic residential spaces.', path: '/services/civil-landscaping/architecture/residential' },
                { title: 'Commercial Architecture', summary: 'Designing efficient, functional, and professional commercial and business environments.', path: '/services/civil-landscaping/architecture/commercial' },
                { title: 'Interior Space Planning', summary: 'Optimizing interior spaces for functionality, aesthetics, and user convenience.', path: '/services/civil-landscaping/architecture/interior' },
                { title: 'Exterior Design', summary: 'Creating building exteriors that balance visual appeal with architectural integrity.', path: '/services/civil-landscaping/architecture/exterior' },
                { title: '3D Visualization', summary: 'Visualizing architectural concepts in 3D to support planning and decision-making.', path: '/services/civil-landscaping/architecture/3d-visualization' },
                { title: 'Renovation Design', summary: 'Upgrading and improving existing structures while enhancing functionality and safety.', path: '/services/civil-landscaping/architecture/renovation' },
                { title: 'Working Drawings', summary: 'Preparing detailed technical drawings and documentation for accurate construction.', path: '/services/civil-landscaping/architecture/working-drawings' },
                { title: 'Architectural Consultation', summary: 'Providing expert guidance and advice for architectural design and development projects.', path: '/services/civil-landscaping/architecture/consultation' },
            ]
        },
        items: [
            'House Planning', 'Building Planning', '2D Floor Plans', '3D Elevation Design', 
            'Structural Design', 'Estimation & Costing', 'Project Supervision', 'Site Layout Planning', 
            'AutoCAD Drafting', 'Municipal Drawing Approval', 'Construction Consultation',
            'Landscape Design', 'Garden Planning', 'Hardscape Design', 'Softscape Design', 
            'Terrace Garden', 'Farmhouse Landscaping', 'Resort Landscaping', 'Landscape Consultation'
        ]
    },
    prBranding: {
        title: 'PR & Branding',
        description: 'Effective communication tools and support services that deliver key messages with maximum impact.',
        services: [
            { title: 'Brand Identity', summary: 'Developing authentic brand identities that communicate clear values and build connections.', path: '/services/pr-branding/brand-identity' },
            { title: 'Creative Design', summary: 'Professional graphic design solutions for promotional campaigns and branding materials.', path: '/services/pr-branding/creative-design' },
            { title: 'Advertisement Design', summary: 'Persuasive and impactful advertisement design for various media channels.', path: '/services/pr-branding/advertisement-design' },
            { title: 'Corporate Branding', summary: 'Establishing a strong corporate identity to build trust with stakeholders.', path: '/services/pr-branding/corporate-branding' },
            { title: 'Social Media Branding', summary: 'Enhancing brand presence and engagement across social media platforms.', path: '/services/pr-branding/social-media-branding' },
            { title: 'Print Media Design', summary: 'Professional design for all print communication materials.', path: '/services/pr-branding/print-media-design' },
            { title: 'Packaging Design', summary: 'Creating effective and attractive packaging solutions for products.', path: '/services/pr-branding/packaging-design' },
            { title: 'Campaign Strategy', summary: 'Developing strategic communication campaigns to achieve business objectives.', path: '/services/pr-branding/campaign-strategy' },
        ],
        items: [
            'Advertising (Indoor - Outdoor)', 'PR Tools and Support', 'Brand Building', 
            'Crisis Management', 'Corporate Social Responsibility', 'Media Relations', 
            'Public Affairs', 'PR Strategy Consulting', 'PR Education'
        ]
    },
    itServices: {
        title: 'IT Services',
        description: 'Reliable digital solutions that combine practical functionality, quality development, and scalable technology.',
        services: [
            { title: 'Design & Development', summary: 'Transforming ideas into reliable, scalable, and user-friendly digital solutions.', path: '/services/it-services/design-development' },
            { title: 'Enterprise Services', summary: 'Streamlining business processes with scalable, enterprise-focused technology solutions.', path: '/services/it-services/enterprise-services' },
            { title: 'Industry & Maintenance', summary: 'Industry-specific solutions combined with long-term maintenance, support, optimization, and operational services.', path: '/services/it-services/industry-maintenance' },
        ],
        designDevelopment: [
            { title: 'Website Development', summary: 'Building responsive, secure, and user-friendly websites.', path: '/services/it-services/design-development/website-development' },
            { title: 'Mobile App Development', summary: 'Creating seamless mobile applications for modern platforms.', path: '/services/it-services/design-development/mobile-app-development' },
            { title: 'E-Commerce Development', summary: 'Developing secure and scalable e-commerce solutions.', path: '/services/it-services/design-development/ecommerce-development' },
            { title: 'Custom Software Development', summary: 'Designing software solutions tailored to specific business needs.', path: '/services/it-services/design-development/custom-software-development' },
            { title: 'Custom Software Integration', summary: 'Integrating applications to improve workflow and performance.', path: '/services/it-services/design-development/custom-software-integration' },
            { title: 'API Development (Coming Soon)', summary: 'Building secure APIs for seamless data exchange.', path: '/services/it-services/design-development/api-development' },
        ],
        mobileAppServices: {
            included: [
                'Android App Development', 'iOS App Development', 'Cross-Platform Apps', 
                'Progressive Web Apps', 'Business Applications', 'Custom Mobile Solutions'
            ],
            technologies: [
                'Flutter', 'React Native', 'Kotlin', 'Java', 'Swift', 'Firebase', 'REST APIs'
            ],
            process: [
                'Requirement Analysis', 'UI/UX Planning', 'App Development', 'Testing', 'Deployment', 'Maintenance'
            ],
            whyChoose: [
                'Business-first approach', 'Scalable architecture', 'Modern technologies', 
                'Secure applications', 'Long-term maintenance'
            ]
        },
        websiteServices: {
            included: [
                'Corporate Website', 'Business Website', 'Portfolio Website', 
                'Landing Pages', 'CMS Development', 'Web Portals', 'Custom Web Applications'
            ],
            technologies: [
                'React', 'Next.js', 'Node.js', 'Spring Boot', 'Laravel', 'Django', 'MySQL', 'PostgreSQL'
            ],
            process: [
                'Requirement Analysis', 'UI/UX Planning', 'Frontend Development', 
                'Backend Development', 'Testing', 'Deployment', 'Maintenance'
            ],
            whyChoose: [
                'Business-focused solutions', 'Responsive design', 'Secure architecture', 
                'Scalable applications', 'Long-term technical support'
            ]
        },
        ecommerceServices: {
            included: [
                'E-Commerce Website Development', 'Online Store Design', 'Shopping Cart Integration', 
                'Payment Gateway Integration', 'Product Catalog Management', 'Order Management System', 
                'Multi-Vendor Marketplace', 'Custom E-Commerce Solutions'
            ],
            technologies: [
                'Shopify', 'WooCommerce', 'Magento', 'Laravel', 'React', 'Next.js', 'Node.js', 'MySQL'
            ],
            process: [
                'Business Requirement Analysis', 'UI/UX Planning', 'Store Development', 
                'Payment Integration', 'Testing', 'Deployment', 'Support & Maintenance'
            ],
            whyChoose: [
                'Secure online stores', 'Scalable architecture', 'Fast performance', 
                'Mobile-friendly experience', 'Long-term support'
            ]
        },
        customSoftwareServices: {
            included: [
                'Business Software Development', 'Enterprise Software Solutions', 'Workflow Automation Systems', 
                'Internal Business Applications', 'Management Systems', 'Custom Web Applications', 
                'Database-Driven Applications', 'Software Modernization'
            ],
            technologies: [
                'Java', 'Spring Boot', 'Python', 'Django', 'React', 'Node.js', 'PostgreSQL', 'MySQL'
            ],
            process: [
                'Requirement Analysis', 'Business Process Understanding', 'Solution Architecture', 
                'UI/UX Planning', 'Software Development', 'Testing & Quality Assurance', 
                'Deployment', 'Maintenance & Improvement'
            ],
            whyChoose: [
                'Business-focused development', 'Solutions tailored to actual requirements', 
                'Scalable software architecture', 'Secure development practices', 
                'Maintainable systems', 'Long-term technical support'
            ]
        },
        integrationServices: {
            included: [
                'API Integration', 'ERP Integration', 'CRM Integration', 
                'Payment Gateway Integration', 'Third-Party Software Integration', 
                'Legacy System Integration', 'Database Integration', 'Workflow Automation'
            ],
            technologies: [
                'REST APIs', 'GraphQL', 'Java', 'Spring Boot', 'Node.js', 
                'Python', 'PostgreSQL', 'MySQL'
            ],
            process: [
                'Existing System Analysis', 'Integration Planning', 'API Design', 
                'Secure Development', 'Testing', 'Deployment', 'Monitoring', 'Continuous Support'
            ],
            whyChoose: [
                'Reliable system connectivity', 'Secure data exchange', 'Scalable integration architecture', 
                'Reduced manual processes', 'Improved operational efficiency', 'Long-term maintenance'
            ]
        },
        crmServices: {
            included: [
                'CRM Consulting', 'CRM Development', 'CRM Customization', 
                'CRM Integration', 'Sales Automation', 'Lead Management', 
                'Customer Support Workflow', 'CRM Migration'
            ],
            technologies: [
                'Salesforce', 'Zoho CRM', 'HubSpot', 'Microsoft Dynamics', 
                'REST APIs', 'Java', 'Spring Boot', 'Node.js'
            ],
            process: [
                'Business Analysis', 'CRM Planning', 'Custom Development', 'Integration', 
                'Testing', 'Deployment', 'User Training', 'Ongoing Support'
            ],
            whyChoose: [
                'Business-oriented CRM solutions', 'Secure integrations', 'Scalable architecture', 
                'Workflow automation', 'Reliable technical support'
            ]
        },
        cloudServices: {
            included: [
                'Cloud Consulting', 'Cloud Migration', 'Infrastructure Setup', 'AWS Solutions',
                'Microsoft Azure Solutions', 'Google Cloud Solutions', 'Cloud Security', 'Managed Cloud Services'
            ],
            technologies: [
                'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Linux', 'CI/CD'
            ],
            process: [
                'Infrastructure Assessment', 'Cloud Strategy Planning', 'Migration & Setup',
                'Security Configuration', 'Deployment', 'Monitoring', 'Optimization', 'Ongoing Support'
            ],
            whyChoose: [
                'Reliable cloud architecture', 'High availability systems', 'Secure deployments',
                'Cost optimization', 'Long-term scalability'
            ]
        },
        iotServices: {
            included: [
                'IoT Consulting', 'Device Integration', 'Sensor Network Development', 'Smart Monitoring Systems',
                'Industrial IoT Solutions', 'Asset Tracking Systems', 'IoT Dashboard Development', 'Predictive Maintenance Solutions'
            ],
            technologies: [
                'MQTT', 'Node.js', 'Python', 'Raspberry Pi', 'Arduino', 'AWS IoT', 'Azure IoT', 'REST APIs'
            ],
            process: [
                'Requirement Analysis', 'Device Planning', 'Hardware Integration', 'Software Development',
                'Connectivity Setup', 'Testing', 'Deployment', 'Monitoring & Support'
            ],
            whyChoose: [
                'End-to-end IoT expertise', 'Secure device communication', 'Real-time monitoring',
                'Scalable infrastructure', 'Reliable long-term support'
            ]
        },
        dataEngineeringServices: {
            included: [
                'Data Architecture Design', 'Data Pipeline Development', 'ETL / ELT Solutions', 
                'Data Warehousing', 'Data Integration', 'Big Data Processing', 
                'Real-Time Data Streaming', 'Data Quality Management'
            ],
            technologies: [
                'Python', 'Apache Spark', 'Kafka', 'Airflow', 'SQL', 
                'PostgreSQL', 'MongoDB', 'AWS'
            ],
            process: [
                'Requirement Analysis', 'Data Assessment', 'Architecture Design', 
                'Pipeline Development', 'Integration', 'Testing', 'Deployment', 
                'Monitoring & Optimization'
            ],
            whyChoose: [
                'Reliable data infrastructure', 'Scalable processing systems', 
                'Business-focused insights', 'Secure data management', 'Long-term maintainability'
            ]
        },
        aiMlServices: {
            included: [
                'AI Consulting', 'Machine Learning Model Development', 'Predictive Analytics', 
                'Computer Vision Solutions', 'Natural Language Processing', 'Recommendation Systems', 
                'AI Automation Solutions', 'Custom AI Applications'
            ],
            technologies: [
                'Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-Learn', 
                'FastAPI', 'LangChain', 'AWS'
            ],
            process: [
                'Business Requirement Analysis', 'Data Collection & Preparation', 'Model Design', 
                'Model Training', 'Validation & Testing', 'Integration', 'Deployment', 'Monitoring & Optimization'
            ],
            whyChoose: [
                'Practical AI implementation', 'Scalable ML architectures', 
                'Data-driven decision making', 'Secure AI deployment', 'Long-term model support'
            ]
        },
        finTechServices: {
            included: [
                'Digital Payment Solutions', 'FinTech Application Development', 'Banking Software Development', 
                'Loan Management Systems', 'Investment Platforms', 'Financial Data Analytics', 
                'Fraud Detection Systems', 'Regulatory Compliance Solutions'
            ],
            technologies: [
                'Java', 'Spring Boot', 'Python', 'PostgreSQL', 'AWS', 'REST APIs', 'Kafka', 'Docker'
            ],
            process: [
                'Business Analysis', 'Compliance Review', 'Architecture Design', 
                'Platform Development', 'Security Testing', 'Integration', 'Deployment', 'Ongoing Support'
            ],
            whyChoose: [
                'Secure financial systems', 'Compliance-focused development', 'Scalable architecture', 
                'Reliable performance', 'Long-term support'
            ]
        },
        industryMaintenanceServices: {
            industry: {
                included: [
                    'Education', 'Healthcare', 'Construction', 
                    'Retail & E-Commerce', 'Manufacturing', 'Finance'
                ],
                pathPrefix: '/services/it-services/industries'
            },
            maintenance: {
                included: [
                    'Application Maintenance', 'Software Updates', 'Performance Optimization', 
                    'Bug Fixing & Support', 'Security Monitoring', 'Infrastructure Maintenance',
                    'Technical Support', 'Upgrade Services', 'Long-Term Support'
                ],
                pathPrefix: '/services/it-services/maintenance'
            },
            technologies: [
                'Java', 'Spring Boot', 'Python', 'React', 'PostgreSQL', 'Docker', 'AWS', 'Linux'
            ],
            process: [
                'Assessment', 'System Review', 'Maintenance Planning', 'Optimization', 
                'Security Improvements', 'Industry Integration', 'Continuous Monitoring', 'Ongoing Support'
            ],
            whyChoose: [
                'Long-term technical partnership', 'Industry-focused expertise', 
                'Reliable maintenance support', 'Performance-driven solutions', 'Scalable infrastructure management'
            ]
        },
        apiServices: {
            included: [
                'REST API Development', 'GraphQL API Development', 'Microservices APIs', 
                'Third-Party API Integration', 'Payment API Integration', 'Authentication APIs', 
                'API Documentation', 'API Version Management'
            ],
            technologies: [
                'Spring Boot', 'Node.js', 'Express.js', 'FastAPI', 'Python', 
                'Java', 'GraphQL', 'OpenAPI', 'Swagger', 'JWT'
            ],
            process: [
                'Requirement Analysis', 'API Architecture', 'Endpoint Design', 
                'Secure Development', 'Documentation', 'Testing', 'Deployment', 'Monitoring'
            ],
            whyChoose: [
                'Secure API architecture', 'Well-documented endpoints', 'High scalability', 
                'Easy third-party integration', 'Performance optimized', 'Long-term support'
            ]
        },
        enterpriseServices: [
            { title: 'CRM Development & Integration', summary: 'Managing customer interactions, improving communication, and strengthening business relationships.', path: '/services/it-services/enterprise-services/crm-development' },
            { title: 'Cloud Services', summary: 'Providing secure data management, application hosting, and scalable business operations.', path: '/services/it-services/enterprise-services/cloud-services' },
            { title: 'IoT Solutions', summary: 'Integrating IoT devices to enable intelligent monitoring, data collection, and automation.', path: '/services/it-services/enterprise-services/iot' },
            { title: 'Data Engineering', summary: 'Designing and managing secure, organized, and reliable data storage and processing.', path: '/services/it-services/enterprise-services/data-engineering' },
            { title: 'AI / ML Solutions', summary: 'Implementing artificial intelligence to automate processes and provide intelligent insights.', path: '/services/it-services/enterprise-services/ai-ml' },
            { title: 'FinTech Solutions', summary: 'Providing secure financial technology solutions for payment processing and transaction management.', path: '/services/it-services/enterprise-services/fintech-solutions' },
            { title: 'Industry & Maintenance', summary: 'Industry-specific solutions combined with long-term maintenance, support, optimization, and operational services.', path: '/services/it-services/industry-maintenance' },
        ],
        subCategories: [
            {
                name: 'Design & Development',
                items: [
                    'Website Development', 'Mobile App Development', 'Ecommerce Development', 
                    'Software Development', 'Custom Software Integration', 
                    'API Development & Integration'
                ]
            },
            {
                name: 'Enterprise Services',
                items: [
                    'CRM Development & Integration', 'Cloud Services', 'Enterprise Application Development', 
                    'Business Process Automation', 'System Integration', 'Database Solutions'
                ]
            },
            {
                name: 'IT Consulting',
                items: [
                    'Technology Consulting', 'Software Consultation', 'Digital Transformation Planning', 
                    'Solution Architecture Guidance', 'Project Consultation'
                ]
            }
        ]
    }
  },

  leadership: [
    { name: 'Late Er. Baidyanath Prasad', role: 'Chairman', quote: 'Professionals cannot retire at 60s, they retire once....' },
    { name: 'Awanish Ranjan', role: 'Business Head', quote: 'When your desire comes in to your profession, you cannot define limitations.' },
    { name: 'Aftab Hussain', role: 'Head (Graphics & Visuals)' },
    { name: 'Deepak Singh', role: 'Head (In-house Printing Operations)' },
    { name: 'Ajay Kumar', role: 'Project Coordinator' },
    { name: 'Priyamvad Ranjan', role: 'IT Services', quote: 'Technology is best when it creates practical solutions for real-world challenges.' }
  ] as TeamMember[],

  advisors: [
    { name: 'Er. Madan Pratap Singh', qualification: 'Retd. Engineer in Chief, Bihar.', adviceFor: 'Project Assessment and Critcs.' },
    { name: 'Vinod Kumar Singh', qualification: 'MBA, LLB/ Consultant & Argo-Business', adviceFor: 'Financial Viability of Project & Critcs' },
    // ... remaining advisors
  ] as Advisor[],

  contact: {
    introduction: { title: 'Contact Introduction', description: 'Get in touch with Ideographers for your engineering and design projects.' },
    information: { title: 'Contact Information', description: 'Reach us via our official channels.' },
    formArea: { title: 'Contact Form Area', description: 'Send us your inquiries directly.' },
    location: { title: 'Office Location', description: 'Serving clients across Bihar, Jharkhand, UP & Chhattisgarh.' },
    businessHours: { title: 'Business Hours', description: 'Available for consultations during business hours.' },
    faqPreview: { title: 'FAQ Preview', description: 'Common questions answered.' },
    email: 'ideographers@gmail.com',
    phone: '+1 (555) 123-4567',
    address: 'Bihar, Jharkhand, UP & Chhattisgarh'
  }
};
