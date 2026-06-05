import Icon from "./icon";

const Courses = () => {
    return ( 
        <div className="coursePdt">
             <Icon/>
            <div className="c1">
                <h2>CS 101 - INTRODUCTION TO COMPUTING</h2>
                <p className="totAtt">TOTAL ATTENDED: 17/30</p>
                <p className="percent">PERCENTAGE: 48.6</p>
                <label htmlFor="">TODAY</label>
                <input type="checkbox" />
            </div>
            <div className="c2">
                <h2>MA 201 - MATHEMATICS II</h2>
                <p className="totAtt">TOTAL ATTENDED: 10/35</p>
                <p className="percent">PERCENTAGE: 28.6</p>
                <label htmlFor="">TODAY</label>
                <input type="checkbox" />
            </div>
            <div className="c3">
                <h2>BT 101 - INTRODUCTION TO BIOLOGY</h2>
                <p className="totAtt">TOTAL ATTENDED: 17/30</p>
                <p className="percent">PERCENTAGE: 48.6</p>
                <label htmlFor="">TODAY</label>
                <input type="checkbox" />
            </div>
            <div className="c4">
                <h2>ME 101 - ENGINEERING MECHANICS</h2>
                <p className="totAtt">TOTAL ATTENDED: 17/30</p>
                <p className="percent">PERCENTAGE: 48.6</p>
                <label htmlFor="">TODAY</label>
                <input type="checkbox" />
            </div>
        </div>
     );
}
 
export default Courses;