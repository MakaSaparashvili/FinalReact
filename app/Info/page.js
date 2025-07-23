"use strict";
"use client";
import Image from "next/image";
import Link from "next/link";
import {useRef, useState, useEffect} from "react";
import {useRouter} from "next/navigation";
import { getStoredSkills } from "@/units/skillStorage";


export default function InfoPage() {
    const aboutRef = useRef();
    const educationRef = useRef();
    const experienceRef = useRef();
    const skillsRef = useRef();
    const portfolioRef = useRef();
    const contactRef = useRef();
    const feedbackRef = useRef();

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });}


    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const stored = getStoredSkills();
        setSkills(stored);
        }, []);

    const router = useRouter();
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="info-container">
           {/* Sidebar content */}
            <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
                <div className="side-profile">
    <div className="menu-toggle" onClick={() => setCollapsed(!collapsed)}>
  <Image
    src="/assets/Menu.svg" 
    alt="Menu Icon"
    width={16}
    height={16}
    className="menu-icon"
  />
</div>

                    <Image src='/assets/me.png' alt="profile image" width={100} height={100} className="profile2"/>
                    <h1>Maka Saparashvili</h1>

                </div>
                 {/* Navigation buttons */}
               <button onClick={()=> scrollToSection(aboutRef)}>
                <Image src="/assets/About.svg" alt="About Icon" width={14} height={14} className="icons"/>
                <span>About Me</span></button>
               <button onClick={()=> scrollToSection(educationRef)}>
                <Image src="/assets/Education.svg" alt="Education Icon" width={14} height={14} className="icons"/>
                <span>Education</span>
                </button>
               <button onClick={()=> scrollToSection(experienceRef)}>
                <Image src="/assets/Experience.svg" alt="Expirence Icon" width={14} height={14} className="icons"/>
                <span>Experience</span>
                </button>
               <button onClick={()=> scrollToSection(skillsRef)}>
                <Image src="/assets/Skills.svg" alt="Skills Icon" width={14} height={14} className="icons"/>
                <span>Skills</span>
                </button>
               <button onClick={()=> scrollToSection(portfolioRef)}>
                <Image src="/assets/Portfolio.svg" alt="Portfolio Icon" width={14} height={14} className="icons"/>
                <span>Portfolio</span>
                </button>
               <button onClick={()=> scrollToSection(contactRef)}>
                <Image src="/assets/Contacts.svg" alt="Contacts Icon" width={14} height={14} className="icons"/>
                <span>Contacts</span>
                </button>
               <button onClick={()=> scrollToSection(feedbackRef)}>
                <Image src="/assets/Feedbacks.svg" alt="Feedbacks Icon" width={14} height={14} className="icons"/>
               <span>Feedbacks</span>
                </button>

<button className="back-button" onClick={() => router.push('/')}>
  <Image src="/assets/Back.svg" alt="Back Icon" width={14} height={14} className="back-icon"/>
  {!collapsed && <span>Go Back</span>}
</button>


            </aside>
            <main className="main-content">
          
                <section ref={aboutRef} className="section">
                    <div className="section-icon">
                    <h2>About Me </h2>
                     <Image src="/assets/Edit.svg" alt="edit Icon" width={40} height={30} className="edits"/>
                     </div>
                    <p className="About-p">I’m a data analyst and aspiring front-end developer with a passion for transforming complex data into clear, meaningful visuals and interfaces. With a background in finance and a love for clean design, I’m currently focused on building responsive web applications using React and Next.js. I enjoy solving problems, learning new technologies, and creating user experiences that are both functional and beautiful.
I’m particularly drawn to projects that bridge logic and creativity, where data-driven insights enhance user interaction. As I grow in this field, my goal is to contribute to intuitive, accessible, and elegant web solutions.</p>
                </section>
          
                <section ref={educationRef} className="section1">
                    <div className="section-icon">
                    <h2>Education </h2>
                     <Image src="/assets/Edit.svg" alt="edit Icon" width={40} height={30} className="edits"/>
                     </div>
    <div className="edu-item">
    <div className="edu-year">
      <span>2014</span>
      <div className="edu-line">
        <Image src="/assets/Rectangle.svg" alt="line" width={10} height={80} className="line-icon"/>
      </div>
    </div>
    <div className="edu-content">
      <h3>Bachelor</h3>
      <p>
        University of Georgia, Economics Faculty 
      </p>
    </div>
  </div>

  <div className="edu-item">
    <div className="edu-year">
      <span>2016</span>
      <div className="edu-line">
        <Image src="/assets/Rectangle.svg" alt="line" width={10} height={80} className="line-icon"/>
      </div>
    </div>
    <div className="edu-content">
      <h3>Master</h3>
      <p>
        University of Georgia, BusinessAdministration and Finance 
      </p>
    </div>


    
  </div>

<div className="edu-item">
    <div className="edu-year">
      <span>2016</span>
      <div className="edu-line">
       
      </div>
    </div>
    <div className="edu-content">
      <h3>Master, Erasmus +</h3>
      <p>
        University of Lodz (Poland), Business Administration and Finance, Erasmus+
      </p>
    </div>
  </div>

                </section>
             
                <section ref={experienceRef} className="section2">
                      <div className="section-icon">
                    <h2>Experience </h2>
                     <Image src="/assets/Edit.svg" alt="edit Icon" width={40} height={30} className="edits"/>
                     </div>
                    
<div className="exp-item">
    <div className="exp-year">
      <span className="company">University of Georgia</span>
      <br/>
      
      <span>2012-2016</span>
 
    </div>
    <div className="exp-content">
      <h3>Trainer in training centre of University of Georgia</h3>
      <p>
        Organizing trainings, Choose applicants, Implementing trainings.
      </p>
    </div>  
</div>

<div className="exp-item">
    <div className="exp-year">
      <span className="company">International Preschool</span>
      <br/>
      
      <span>2013-2016</span>
 
    </div>
    <div className="exp-content">
      <h3>Teacher’s assistant</h3>
      <p>
        Teaching English, Georgian, math and science to children; Helping with lesson planning and implementation into the classroom routine;
Assisting in maintaining a positive and nurturing physical and emotional environment in the classroom; 
      </p>
    </div>  
</div>

<div className="exp-item">
    <div className="exp-year">
      <span className="company">LTD Mobitel</span>
      <br/>
      
      <span>2014-2015</span>
 
    </div>
    <div className="exp-content">
      <h3>Customer Operational Services Specialist</h3>
      <p>
Deal directly with customers either by telephone, electronically or face to face;
Obtain and evaluate all relevant information to handle product and service inquiries;
Process orders, forms, applications and requests;
Prepare and distribute customer activity reports;
Maintain customer databases.
      </p>
    </div>  
</div>

<div className="exp-item">
    <div className="exp-year">
      <span className="company">LTD CTO</span>
      <br/>
      
      <span>2015-2016</span>
 
    </div>
    <div className="exp-content">
      <h3>Manager and Training Coordinator</h3>
      <p>
Assess training needs for new and existing employees;
Organizing and coordinate trainings;
Budgeting and making financial decisions during the trainings;
Reviewing and analysing special reports; summarizing information; 
      </p>
    </div>  
</div>

<div className="exp-item">
    <div className="exp-year">
      <span className="company">University of Georgia</span>
      <br/>
      
      <span>2016-2017</span>
 
    </div>
    <div className="exp-content">
      <h3>Lecturer</h3>
      <p>
Subject - Fundamentals of quantitative research
Preparing and delivering lectures, tutorials, workshops, and seminars.
Developing curricula and course material.
Setting and grading assignments, tests, and exams.
      </p>
    </div>  
</div>

<div className="exp-item">
    <div className="exp-year">
      <span className="company">Next Brand</span>
      <br/>
      
      <span>2016-2018</span>
 
    </div>
    <div className="exp-content">
      <h3>Data Analyst</h3>
      <p>
Working with databases and prepare various reports
Optimizing existing reports
Assistance for month and year closing processes
Providing input to the team with special projects and other activities as assigned
Providing monthly/yearly reports
      </p>
    </div>  
</div>

<div className="exp-item">
    <div className="exp-year">
      <span className="company">JSB Solution</span>
      <br/>
      
      <span>2018-2021</span>
 
    </div>
    <div className="exp-content">
      <h3>Financial Data Analyst</h3>
      <p>
Team manager of data analysts;
Working with databases and prepare various reports;
Optimizing existing reports;
Assistance for month and year closing processes;
Providing input to the team with  special projects and other activities as assigned;
      </p>
    </div>  
</div>

<div className="exp-item">
    <div className="exp-year">
      <span className="company">Freelancer</span>
      <br/>
      
      <span>2022 - Present</span>
 
    </div>
    <div className="exp-content">
      <h3>Financial Data Analyst / Data Analyst</h3>
      <p>
Collaborated with teams to manage and analyze financial datasets, optimize reporting workflows, and support monthly and annual closing processes. Delivered custom reports and dashboards for business insights. Contributed to special financial projects and ad hoc analysis to aid strategic decision-making.
      </p>
    </div>  
</div>



                </section>
           

                   <section ref={skillsRef} className="section3">
          <div className="section-icon">
            <h2>Skills </h2>
            <Image
              src="/assets/Edit.svg"
              alt="edit Icon"
              width={40}
              height={30}
              className="edits"
              onClick={() => router.push("/skills/edit")}
            />
          </div>
<div className="skills-list">
  {skills.map((skill, index) => (
    <div className="skill-bar" key={index}>
      <div className="bar-bg">
        <div className="bar-fill" style={{ width: `${skill.range}%` }}>
          <span className="bar-label">{skill.name}</span>
        </div>
      </div>
    </div>
  ))}
</div>


         
          <Image src='/assets/scale.png' alt="scale" width={1490} height={34} className="scale"/>
                  </section>

           
                <section ref={portfolioRef} className="section4">
                      <div className="section-icon">
                    <h2>Portfolio </h2>
                     <Image src="/assets/Edit.svg" alt="edit Icon" width={40} height={30} className="edits"/>
                     </div>
                    <p>My latest projects:</p>
                    <div className="portfolio-items">
                      <Link href="https://final-project-theta-drab.vercel.app/" target="_blank">        
                    <Image src="/assets/cards1.png" alt="Portfolio Item 1" width={459} height={290} className="portfolio-item"/>
                      </Link>
                      <Link href=" https://final-project-js-lilac.vercel.app/" target="_blank">
                    <Image src="/assets/cards2.png" alt="Portfolio Item 2" width={459} height={290} className="portfolio-item"/>
                      </Link>
                      <Link href=" https://miranda-k12.github.io/Desingo/" target="_blank">
                    <Image src="/assets/cards3.png" alt="Portfolio Item 3" width={459} height={290} className="portfolio-item"/>
                      </Link>

                      </div>
                </section>
           
                <section ref={contactRef} className="section5">
                      <div className="section-icon">
                    <h2>Contacts</h2>
                     <Image src="/assets/Edit.svg" alt="edit Icon" width={40} height={30} className="edits"/>
                     </div>
                    <div className="socials"> 
                      <Image src="/assets/phone.png" alt="Phone Icon" width={30} height={30} className="contact-icon"/>
                      <span className="contact-text">+995 598 204 218</span>
                    </div>
<Link href="https://mail.google.com/mail/u/0/#inbox" target="_blank" className="links">
                     <div className="socials"> 
                      <Image src="/assets/email.png" alt="Email Icon" width={30} height={30} className="contact-icon"/>
                      <span className="contact-text">maka.saparashvili@gmail.com</span>
                    </div>
</Link>
<Link href="https://x.com/" target="_blank" className="links">
                    <div className="socials"> 
                      <Image src="/assets/twitter.png" alt="Twitter Icon" width={30} height={30} className="contact-icon"/>
                      <span className="contact-text">https://twitter.com/makasap</span>
                    </div>
</Link>
<Link href="https://www.facebook.com/maka.saparashvili" target="_blank" className="links">
                    <div className="socials"> 
                      <Image src="/assets/facebook.png" alt="Facebook Icon" width={30} height={30} className="contact-icon"/>
                      <span className="contact-text">https://www.facebook.com/maka.saparashvili</span>
                    </div>
</Link>
<Link href="https://www.linkedin.com/in/maka-saparashvili-b62965b4/" target="_blank" className="links">
                    <div className="socials"> 
                      <Image src="/assets/in.svg" alt="In Icon" width={25} height={25} className="contact-icon-in"/>
                      <span className="contact-text">https://www.linkedin.com/in/maka-saparashvili-b62965b4/</span>
                    </div>
</Link>
                   
                </section>
               
                <section ref={feedbackRef} className="section6">
                      <div className="section-icon">
                    <h2>Feedbacks</h2>
                     <Image src="/assets/Edit.svg" alt="edit Icon" width={40} height={30} className="edits"/>
                     </div>
                    <div className="feedbacks">
                      <p className="feedback-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. </p>
                      <Image src="/assets/Frame.svg" alt="Feedback Icon" width={308} height={50} className="feedback-icon"/>
                    </div>
<div className="feedbacks">
                      <p className="feedback-text">
                       Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. </p>
                      <Image src="/assets/Frame.svg" alt="Feedback Icon" width={308} height={50} className="feedback-icon"/>
                    </div>

                </section>
            </main>
        </div>



    );
}
