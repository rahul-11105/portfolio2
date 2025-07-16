import React from 'react'
import "./portfolio.css"

export default function Portfolio() {
  return (
   <div className='portfolio'>
    <div className='portfolio-heading'>
      <h3>
        MY SKILLS
      </h3>
    </div>
      <h3 className='tech-skill-head'>Technical-Skills</h3>
    <div className='portfolio-section'>
      <div className='left'>

        <div className='skill' id='l1'>
            <div className='skill-name-and-progress-per'>
              <img src="letter-c.png" alt="C-img" className='skill-img'/>
              <h4 className='skill-name'>C</h4>
              <div className='progress-percent'>90%</div>
            </div>
            <div className='progress'>
              <p id='l-s1'></p>
            </div>
        </div>


        <div className='skill' id='l2'>
            <div className='skill-name-and-progress-per'>
              <img src="java.png" alt="java-img" className='skill-img'/>
              <h4 className='skill-name'>Java</h4>
              <div className='progress-percent'>95%</div>
            </div>
            <div className='progress'>
              <p id='l-s2'></p>
            </div>
        </div>

        <div className='skill' id='l3' >
          <div className='skill-name-and-progress-per'>
            <img src="relational.png" alt="jdbc-logo" className='skill-img' />

              <h4 className='skill-name'>JDBC</h4>
              <div className='progress-percent'>80%</div>
            </div>
            <div className='progress'>
              <p id='l-s3'></p>
            </div>
        </div>

        <div className='skill' id='l4' >
          <div className='skill-name-and-progress-per'>
            <img src="database-management.png" alt="sql-logo" className='skill-img' />

              <h4 className='skill-name'>MySQL</h4>
              <div className='progress-percent'>90%</div>
            </div>
            <div className='progress'>
              <p id='l-s4'></p>
            </div>
        </div>

        <div className='skill' id='l5' >
          <div className='skill-name-and-progress-per'>
            <img src="linux.png" alt="os-logo" className='skill-img' />

              <h4 className='skill-name'>Linux OS</h4>
              <div className='progress-percent'>50%</div>
            </div>
            <div className='progress'>
              <p id='l-s5'></p>
            </div>
        </div>

        <div className='skill' id='l6'>
          <div className='skill-name-and-progress-per'>
            <img src="github.png" alt="os-logo" className='skill-img' />

              <h4 className='skill-name'>Git & Git-Hub</h4>
              <div className='progress-percent'>85%</div>
            </div>
            <div className='progress'>
              <p id='l-s6'></p>
            </div>
        </div>

        <div className='skill' id='l7'>
          <div className='skill-name-and-progress-per'>
            <img src="knowledge-graph.png" alt="os-logo" className='skill-img' />

              <h4 className='skill-name'>DSA</h4>
              <div className='progress-percent'>80%</div>
            </div>
            <div className='progress'>
              <p id='l-s7'></p>
            </div>
        </div>


      </div>

      <div className='right-div'>
        
        <div className='skill' id='r1'>
          <div className='skill-name-and-progress-per'>
            <img src="html-5.png" alt="html-logo" className='skill-img' />
              <h4 className='skill-name'>HTML</h4>
              <div className='progress-percent'>95%</div>
            </div>
            <div className='progress'>
              <p id='r-s1'></p>
            </div>
        </div>
        <div className='skill' id='r2'>
          <div className='skill-name-and-progress-per'>
            <img src="css-3.png" alt="css-logo" className='skill-img' />

              <h4 className='skill-name'>CSS</h4>
              <div className='progress-percent'>95%</div>
            </div>
            <div className='progress'>
              <p id='r-s2'></p>
            </div>
        </div>
        <div className='skill' id='r3'>
          <div className='skill-name-and-progress-per'>
            <img src="java-script.png" alt="js-logo" className='skill-img' />

              <h4 className='skill-name'>JavaScript</h4>
              <div className='progress-percent'>90%</div>
            </div>
            <div className='progress'>
              <p id='r-s3'></p>
            </div>
        </div>
        <div className='skill' id='r4'>
          <div className='skill-name-and-progress-per'>
            <img src="science.png" alt="react-logo" className='skill-img' />

              <h4 className='skill-name'>React.js</h4>
              <div className='progress-percent'>90%</div>
            </div>
            <div className='progress'>
              <p id='r-s4'></p>
            </div>
        </div>
        <div className='skill' id='r5'>
          <div className='skill-name-and-progress-per'>
            <img src="programing.png" alt="node-logo" className='skill-img' />

              <h4 className='skill-name'>Node.js</h4>
              <div className='progress-percent'>90%</div>
            </div>
            <div className='progress'>
              <p id='r-s5'></p>
            </div>
        </div>
        <div className='skill' id='r6'>
          <div className='skill-name-and-progress-per'>
            <img src="express.jpg" alt="express-logo" className='skill-img' />

              <h4 className='skill-name'>Express.js</h4>
              <div className='progress-percent'>95%</div>
            </div>
            <div className='progress'>
              <p id='r-s6'></p>
            </div>
        </div>

        <div className='skill' id='r7'>
          <div className='skill-name-and-progress-per'>
            <img src="database.png" alt="mongo-logo" className='skill-img' />

              <h4 className='skill-name'>MongoDB</h4>
              <div className='progress-percent'>95%</div>
            </div>
            <div className='progress'>
              <p id='r-s7'></p>
            </div>
        </div>

      </div> 

      
    </div>
    <div className='other-skills'>
        <h3>professional Skills</h3>
            <div className='pro-skills'>
                <div className='progress-and-name'>
                    <div className='pro-skill' id='cir-1'>
                    <span className='progress-val'>90%</span>
                    </div>
                    <h3>
                      Communication
                    </h3>
                </div>

                <div className='progress-and-name'>
                    <div className='pro-skill' id='cir-2'>
                    <span className='progress-val'>95%</span>
                    </div>
                    <h3>
                      problem Solving
                    </h3>
                </div>

                <div className='progress-and-name'>
                    <div className='pro-skill' id='cir-3'>
                    <span className='progress-val'>80%</span>
                    </div>
                    <h3>
                      Team Work
                    </h3>
                </div>

                <div className='progress-and-name'>
                    <div className='pro-skill' id='cir-4'>
                    <span className='progress-val'>90%</span>
                    </div>
                    <h3>
                      Leadership
                    </h3>
                </div>
            </div>


    </div></div>
  )
}
