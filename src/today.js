const Today = () => {
    return ( 
        <div className="allToday">
            <h3 className="today">TODAY</h3>
            <div className="allCourse">
                <div className="course1">
                    <h2>CS 101 - INTRODUCTION TO COMPUTING</h2>
                    <input type="checkbox" id="checker1" />
                </div>
                <div className="course2">
                    <h2>MA 201 - MATHEMATICS II</h2>
                    <input type="checkbox" id="checker2"/>
                </div>
                <div className="course3">
                    <h2>BT 101 - INTRODUCTION TO BIOLOGY</h2>
                    <input type="checkbox" id="checker3"/>
                </div>
                <div className="course4">
                    <h2>ME 101 - ENGINEERING MECHANICS</h2>
                    <input type="checkbox" id="checker4"/>
                </div>
            </div>
        </div>
     );
}
 
export default Today;