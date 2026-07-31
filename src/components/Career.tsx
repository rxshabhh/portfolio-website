import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science</h4>
                <h5>Vellore Institute of Technology | Chennai</h5>
              </div>
              <h3>2024 - 2028</h3>
            </div>
            <p>
              CGPA: 8.89. Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Computer Networks, Database Management Systems, Software Engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Branch Rank 1 (Semester 2)</h4>
                <h5>VIT Chennai</h5>
              </div>
              <h3>Mar 2024</h3>
            </div>
            <p>
              Rank 2 in Semester 1 at VIT Chennai. Competitive Programmer (ICPC) with expertise in algorithmic problem-solving.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>R&D Lead, CSED</h4>
                <h5>Centre for Social & Entrepreneurship Development</h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              R&D Lead at the Centre for Social & Entrepreneurship Development — VIT Chennai, focused on social innovation and entrepreneurship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
