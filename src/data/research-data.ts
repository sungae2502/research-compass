import aiLiteracy from "@/assets/ai-literacy.jpg";
import neuroscience from "@/assets/neuroscience.jpg";
import multilingualEducation from "@/assets/multilingual-education.jpg";
import teacherEducation from "@/assets/teacher-education.jpg";

export type Methodology = "Qualitative" | "Quantitative" | "Mixed Methods";

export interface Paper {
  id: string;
  title: string;
  authors: string;
  year: number;
  journal: string;
  keywords: string[];
  methodology: Methodology;
  summary: string;
  quote: string;
  abstract: string;
  methodologyDetail: {
    type: Methodology;
    participants: string;
    dataCollection: string;
    analysis: string;
  };
  findings: string[];
  implications: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  paperCount: number;
  tagline: string;
  papers: Paper[];
}

export const projects: Project[] = [
  {
    id: "ai-literacy",
    title: "AI Literacy",
    description: "Exploring how educators and students develop competencies in understanding, using, and critically evaluating artificial intelligence systems in educational contexts.",
    image: aiLiteracy,
    paperCount: 3,
    tagline: "Understanding AI in education",
    papers: [
      {
        id: "ai-1",
        title: "Teachers' Perceptions of AI Literacy: A Framework for K-12 Education",
        authors: "Chen, L., & Patel, R.",
        year: 2024,
        journal: "Computers & Education",
        keywords: ["AI literacy", "teacher perceptions", "K-12", "framework"],
        methodology: "Qualitative",
        summary: "Develops a comprehensive framework for AI literacy in K-12 settings based on teacher perspectives.",
        quote: "AI literacy is not just about coding — it's about understanding the world we are building.",
        abstract: "This study investigates how K-12 teachers perceive AI literacy and what competencies they consider essential for students. Through semi-structured interviews with 42 teachers across diverse school settings, the researchers developed a multi-dimensional framework encompassing technical understanding, ethical reasoning, and practical application. The framework addresses gaps in existing AI education standards and provides actionable guidelines for curriculum development.",
        methodologyDetail: {
          type: "Qualitative",
          participants: "42 K-12 teachers from urban and rural schools",
          dataCollection: "Semi-structured interviews, focus groups, document analysis",
          analysis: "Thematic analysis using NVivo, member checking",
        },
        findings: [
          "Teachers identified four core dimensions of AI literacy: technical knowledge, ethical awareness, practical skills, and critical evaluation.",
          "Most teachers felt underprepared to teach AI concepts, citing lack of training and resources.",
          "Teachers emphasized the importance of age-appropriate AI education starting from elementary school.",
          "Cross-curricular integration was preferred over standalone AI courses.",
        ],
        implications: [
          "Teacher professional development programs should prioritize AI literacy training with practical, hands-on components.",
          "The proposed framework can guide national and state-level AI education policy development.",
          "This research connects to broader efforts in preparing citizens for an AI-driven society.",
        ],
      },
      {
        id: "ai-2",
        title: "Student Engagement with AI Tools: Patterns and Predictors",
        authors: "Kim, S., Johnson, M., & Lee, H.",
        year: 2023,
        journal: "Journal of Educational Technology",
        keywords: ["student engagement", "AI tools", "learning analytics", "higher education"],
        methodology: "Quantitative",
        summary: "Examines how university students engage with AI-powered learning tools and identifies key predictors of meaningful engagement.",
        quote: "The future of learning lies in the partnership between human curiosity and artificial intelligence.",
        abstract: "This quantitative study analyzes engagement patterns of 1,200 university students using AI-powered tutoring systems over one academic semester. Using learning analytics data combined with survey responses, the researchers identified distinct engagement profiles and their predictors. Results reveal that prior digital literacy, self-regulation skills, and instructor scaffolding significantly predict productive AI tool engagement.",
        methodologyDetail: {
          type: "Quantitative",
          participants: "1,200 undergraduate students across 15 courses",
          dataCollection: "Learning analytics logs, Likert-scale surveys, academic records",
          analysis: "Cluster analysis, multiple regression, structural equation modeling",
        },
        findings: [
          "Three distinct engagement profiles emerged: strategic users, passive consumers, and exploratory learners.",
          "Prior digital literacy was the strongest predictor of productive engagement (β = 0.42).",
          "Instructor scaffolding moderated the relationship between self-regulation and engagement quality.",
          "Students with higher AI self-efficacy showed 34% more exploratory behavior.",
        ],
        implications: [
          "Institutions should assess students' digital literacy before introducing AI learning tools.",
          "Faculty development should include strategies for scaffolding student AI tool use.",
          "This connects to the broader question of how to design AI-enhanced learning environments that promote agency.",
        ],
      },
      {
        id: "ai-3",
        title: "Ethics and AI in Education: A Systematic Review",
        authors: "Williams, A., & Torres, D.",
        year: 2024,
        journal: "Review of Educational Research",
        keywords: ["ethics", "AI", "systematic review", "educational policy"],
        methodology: "Mixed Methods",
        summary: "A systematic review synthesizing research on ethical considerations of AI use in educational settings.",
        quote: "We must teach the ethics of AI before we teach the mechanics of AI.",
        abstract: "This systematic review examines 87 empirical studies published between 2018 and 2024 on ethical dimensions of AI in education. Using a mixed-methods approach combining bibliometric analysis with qualitative synthesis, the authors identify five recurring ethical themes: privacy, bias, transparency, accountability, and autonomy. The review reveals significant gaps in how educational institutions address these ethical concerns and proposes a governance framework.",
        methodologyDetail: {
          type: "Mixed Methods",
          participants: "87 studies from peer-reviewed journals",
          dataCollection: "Systematic database search (ERIC, Scopus, Web of Science), quality appraisal",
          analysis: "Bibliometric mapping, thematic synthesis, narrative integration",
        },
        findings: [
          "Privacy concerns were most frequently studied (72% of papers), while accountability was least addressed (23%).",
          "Only 15% of studies involved student perspectives on AI ethics.",
          "Significant regional differences exist in ethical frameworks, with European studies emphasizing regulation and US studies emphasizing innovation.",
          "Most institutions lack formal AI ethics policies for education.",
        ],
        implications: [
          "Educational institutions urgently need comprehensive AI ethics policies that include all stakeholders.",
          "Future research should center student voices in AI ethics discussions.",
          "This review provides a foundation for developing culturally responsive AI ethics education.",
        ],
      },
    ],
  },
  {
    id: "neuroscience",
    title: "Neuroscience Research",
    description: "Investigating the neural mechanisms underlying learning, memory, and cognitive development to inform evidence-based educational practices.",
    image: neuroscience,
    paperCount: 2,
    tagline: "Brain-based insights for education",
    papers: [
      {
        id: "neuro-1",
        title: "Neural Correlates of Reading Comprehension in Bilingual Adolescents",
        authors: "Garcia, M., Nakamura, T., & Smith, J.",
        year: 2023,
        journal: "NeuroImage",
        keywords: ["bilingualism", "reading comprehension", "fMRI", "adolescents"],
        methodology: "Quantitative",
        summary: "Uses fMRI to examine brain activation patterns during reading comprehension tasks in bilingual vs. monolingual adolescents.",
        quote: "The bilingual brain doesn't just store two languages — it builds bridges between worlds of meaning.",
        abstract: "This neuroimaging study compares brain activation patterns in 60 bilingual and 40 monolingual adolescents during reading comprehension tasks of varying complexity. Using functional MRI, the researchers found that bilingual participants showed enhanced activation in prefrontal regions associated with executive control, suggesting that bilingual experience may strengthen comprehension monitoring processes. These findings have important implications for understanding bilingual reading development.",
        methodologyDetail: {
          type: "Quantitative",
          participants: "60 bilingual and 40 monolingual adolescents (ages 14-17)",
          dataCollection: "fMRI scanning, standardized reading assessments, language proficiency tests",
          analysis: "Whole-brain analysis, ROI analysis, multivariate pattern analysis",
        },
        findings: [
          "Bilingual adolescents showed significantly greater activation in the dorsolateral prefrontal cortex during complex comprehension tasks.",
          "The bilingual advantage was most pronounced for inference-making tasks requiring integration of contextual information.",
          "Proficiency level in the second language correlated positively with prefrontal activation (r = 0.58).",
          "No significant differences were found for basic literal comprehension tasks.",
        ],
        implications: [
          "Bilingual education may confer cognitive benefits that extend beyond language skills to general comprehension abilities.",
          "Educational interventions for reading comprehension might leverage bilingual students' enhanced executive control.",
          "This connects to our multilingual education research stream, providing neural evidence for bilingual educational approaches.",
        ],
      },
      {
        id: "neuro-2",
        title: "Sleep, Memory Consolidation, and Academic Performance in University Students",
        authors: "Anderson, K., & Liu, W.",
        year: 2024,
        journal: "Journal of Cognitive Neuroscience",
        keywords: ["sleep", "memory consolidation", "academic performance", "university students"],
        methodology: "Mixed Methods",
        summary: "Investigates the relationship between sleep quality, neural markers of memory consolidation, and academic outcomes.",
        quote: "Sleep is not the absence of learning — it is where learning becomes knowledge.",
        abstract: "This mixed-methods study combines actigraphy data, EEG recordings during sleep, academic performance metrics, and qualitative interviews to examine how sleep patterns affect memory consolidation and learning outcomes in 150 university students. The study reveals that sleep spindle density during NREM sleep significantly predicts next-day recall performance and end-of-semester grades, while qualitative data reveals students' poor understanding of sleep's role in learning.",
        methodologyDetail: {
          type: "Mixed Methods",
          participants: "150 university students tracked over one semester",
          dataCollection: "Wrist actigraphy, overnight EEG (subset of 45), GPA records, semi-structured interviews (30 students)",
          analysis: "Mixed-effects modeling, spectral EEG analysis, thematic analysis of interview data",
        },
        findings: [
          "Sleep spindle density correlated with exam performance (r = 0.47), controlling for study time and prior GPA.",
          "Students averaging less than 6 hours of sleep showed 23% lower retention on delayed recall tests.",
          "Interview data revealed that 78% of students viewed sleep as 'lost study time' rather than a learning tool.",
          "A brief sleep education intervention improved sleep duration by an average of 38 minutes per night.",
        ],
        implications: [
          "Universities should integrate sleep education into first-year orientation and academic skills programs.",
          "Course scheduling policies should consider sleep science when setting early morning class times.",
          "This research supports a holistic view of academic success that includes neurobiological factors.",
        ],
      },
    ],
  },
  {
    id: "multilingual-education",
    title: "Multilingual Education",
    description: "Examining pedagogical approaches, language policies, and student experiences in multilingual educational contexts across diverse communities.",
    image: multilingualEducation,
    paperCount: 2,
    tagline: "Language, culture, and learning",
    papers: [
      {
        id: "multi-1",
        title: "Translanguaging Practices in Multilingual Science Classrooms",
        authors: "Okonkwo, C., & Fernández, I.",
        year: 2024,
        journal: "TESOL Quarterly",
        keywords: ["translanguaging", "science education", "multilingual", "classroom practices"],
        methodology: "Qualitative",
        summary: "Explores how students and teachers use translanguaging strategies during science instruction in linguistically diverse classrooms.",
        quote: "When students bring all their languages to learning, they bring all of themselves.",
        abstract: "This ethnographic study documents translanguaging practices in four multilingual science classrooms across two middle schools. Over eight months of observation, the researchers identified systematic patterns in how students drew on their full linguistic repertoires to negotiate scientific concepts. The study challenges monolingual ideologies in science education and demonstrates how translanguaging supports deeper conceptual understanding.",
        methodologyDetail: {
          type: "Qualitative",
          participants: "4 teachers and 96 students across two schools",
          dataCollection: "Classroom observations (200+ hours), video recordings, student artifacts, teacher interviews",
          analysis: "Discourse analysis, constant comparative method, multimodal analysis",
        },
        findings: [
          "Students used translanguaging most frequently during hypothesis formation and collaborative problem-solving.",
          "Teachers who validated multilingual practices saw 40% more student-initiated scientific explanations.",
          "Three distinct translanguaging functions emerged: clarifying, elaborating, and identity-affirming.",
          "Students reported feeling more scientifically competent when allowed to use their home languages.",
        ],
        implications: [
          "Science education policies should explicitly support translanguaging as a pedagogical resource.",
          "Teacher education programs need to prepare all teachers — not just language specialists — for multilingual classrooms.",
          "This research bridges language education and STEM fields, showing language as a tool for scientific thinking.",
        ],
      },
      {
        id: "multi-2",
        title: "Family Language Policies and Children's Academic Achievement",
        authors: "Nguyen, T., & Björk, A.",
        year: 2023,
        journal: "International Journal of Bilingualism",
        keywords: ["family language policy", "academic achievement", "heritage language", "immigrant families"],
        methodology: "Mixed Methods",
        summary: "Examines the relationship between family language practices and children's academic outcomes in immigrant communities.",
        quote: "A child's home language is not a barrier to learning — it is the foundation of all future knowledge.",
        abstract: "This mixed-methods study surveys 350 immigrant families and conducts in-depth case studies of 20 families to understand how family language policies relate to children's academic achievement. Results show that families who maintained strong heritage language practices while supporting school language development produced children with the highest overall academic outcomes. The study highlights the critical role of family-school language alignment.",
        methodologyDetail: {
          type: "Mixed Methods",
          participants: "350 families (survey), 20 families (case studies), children ages 6-12",
          dataCollection: "Structured questionnaires, home observations, school records, parent and child interviews",
          analysis: "Path analysis, cross-case analysis, narrative inquiry",
        },
        findings: [
          "Heritage language maintenance positively predicted academic achievement in both languages (β = 0.38).",
          "Families using an 'additive bilingual' approach (supporting both languages) showed the best outcomes.",
          "Socioeconomic status moderated the relationship, with higher-SES families having more resources for bilingual support.",
          "Children in heritage language maintenance families showed stronger metalinguistic awareness.",
        ],
        implications: [
          "Schools should actively encourage heritage language maintenance and provide resources for families.",
          "Immigration and education policies should recognize bilingualism as an asset rather than a deficit.",
          "This research connects to our teacher education work on preparing teachers for linguistically diverse communities.",
        ],
      },
    ],
  },
  {
    id: "teacher-education",
    title: "Teacher Education",
    description: "Researching how pre-service and in-service teachers develop professional knowledge, pedagogical skills, and reflective practice for effective teaching.",
    image: teacherEducation,
    paperCount: 2,
    tagline: "Developing reflective practitioners",
    papers: [
      {
        id: "teach-1",
        title: "Reflective Practice in Pre-Service Teacher Education: A Longitudinal Study",
        authors: "Morrison, E., & Park, S.",
        year: 2024,
        journal: "Teaching and Teacher Education",
        keywords: ["reflective practice", "pre-service teachers", "professional development", "longitudinal"],
        methodology: "Qualitative",
        summary: "Tracks the development of reflective practice skills in pre-service teachers over their two-year program.",
        quote: "The best teachers never stop being students of their own practice.",
        abstract: "This longitudinal qualitative study follows 28 pre-service teachers through their two-year teacher education program, examining how their reflective practice skills develop over time. Using portfolio analysis, reflective journals, and interviews at four time points, the researchers identified a developmental trajectory from descriptive to critically reflective practice. The study reveals key turning points and scaffolding strategies that promote deeper reflection.",
        methodologyDetail: {
          type: "Qualitative",
          participants: "28 pre-service teachers in a two-year program",
          dataCollection: "Reflective portfolios, journals, semi-structured interviews at 4 time points, teaching observations",
          analysis: "Longitudinal qualitative analysis, developmental coding, narrative analysis",
        },
        findings: [
          "Most pre-service teachers progressed through four stages: descriptive, comparative, critical, and transformative reflection.",
          "The practicum experience was the most significant catalyst for moving from descriptive to deeper reflection.",
          "Peer feedback and mentoring relationships accelerated reflective development.",
          "Only 35% of participants reached the transformative reflection stage by program completion.",
        ],
        implications: [
          "Teacher education programs should embed structured reflective practice from the first semester.",
          "Mentoring programs should be redesigned to explicitly scaffold reflective development.",
          "This connects to questions about how we measure and assess teacher readiness beyond content knowledge.",
        ],
      },
      {
        id: "teach-2",
        title: "Culturally Responsive Teaching: From Theory to Practice",
        authors: "Jackson, R., Ahmad, F., & Delgado, M.",
        year: 2023,
        journal: "Journal of Teacher Education",
        keywords: ["culturally responsive teaching", "equity", "teacher practice", "professional development"],
        methodology: "Mixed Methods",
        summary: "Evaluates a professional development program designed to help in-service teachers implement culturally responsive teaching practices.",
        quote: "Every student's culture is a curriculum resource waiting to be discovered.",
        abstract: "This mixed-methods evaluation study examines the impact of a year-long professional development program on 85 in-service teachers' culturally responsive teaching practices. Combining classroom observations, student surveys, and teacher interviews, the researchers found significant improvements in teachers' cultural awareness and instructional practices, though implementation challenges persisted. The study identifies specific program elements that were most effective in promoting lasting change.",
        methodologyDetail: {
          type: "Mixed Methods",
          participants: "85 in-service teachers across 12 schools, and their students (approximately 2,100)",
          dataCollection: "Pre-post classroom observations (CRIOP), student perception surveys, teacher interviews, program artifacts",
          analysis: "Paired t-tests, effect size calculations, thematic analysis, cross-case comparison",
        },
        findings: [
          "Teachers showed significant improvement on the CRIOP observation measure (d = 0.72).",
          "Student perceptions of cultural inclusivity improved significantly in participating teachers' classrooms.",
          "The most impactful program elements were community immersion experiences and collaborative lesson study.",
          "Time constraints and standardized testing pressures were the most cited barriers to implementation.",
        ],
        implications: [
          "Professional development for culturally responsive teaching should be sustained (at least one year) and embedded in practice.",
          "School administrators must create structural conditions that support culturally responsive teaching.",
          "This research provides a model for how teacher education can bridge theory-practice gaps in equity-focused education.",
        ],
      },
    ],
  },
];
